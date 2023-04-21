import { getDependencyContainer } from '@/dependency_container';
import { Client as HubspotClient } from '@hubspot/api-client';
import { getConnectorAuthConfig } from '@supaglue/core/remotes/crm';
import { CRMProviderName, SUPPORTED_CRM_CONNECTIONS } from '@supaglue/types/crm';
import { Request, Response, Router } from 'express';
import simpleOauth2, { AuthorizationMethod } from 'simple-oauth2';

const { integrationService, connectionAndSyncService } = getDependencyContainer();

const SERVER_URL = process.env.SUPAGLUE_SERVER_URL ?? 'http://localhost:8080';
const REDIRECT_URI = `${SERVER_URL}/oauth/callback`;
const RETURN_URL = process.env.SUPAGLUE_OAUTH_RETURN_URL ?? 'http://localhost:3000';

export default function init(app: Router): void {
  const publicOauthRouter = Router();

  publicOauthRouter.get(
    '/connect',
    async (
      req: Request<never, any, never, any, { applicationId: string; customerId: string; providerName: string }>,
      res: Response
    ) => {
      const { applicationId, customerId, providerName, returnUrl, loginUrl } = req.query;

      if (!applicationId) {
        throw new Error('Missing applicationId');
      }

      if (!customerId) {
        throw new Error('Missing customerId');
      }

      if (!providerName) {
        throw new Error('Missing providerName');
      }

      const integration = await integrationService.getByProviderNameAndApplicationId(providerName, applicationId);

      if (!integration.config) {
        throw new Error('Integration is not configured');
      }

      const { oauthScopes } = integration.config.oauth;
      const { oauthClientId, oauthClientSecret } = integration.config.oauth.credentials;

      const auth = getConnectorAuthConfig(providerName);

      if (loginUrl) {
        auth.tokenHost = loginUrl;
        auth.authorizeHost = loginUrl;
      }

      const client = new simpleOauth2.AuthorizationCode({
        client: {
          id: oauthClientId,
          secret: oauthClientSecret,
        },
        auth,
        options: {
          authorizationMethod: 'body' as AuthorizationMethod,
        },
      });

      // TODO: implement code_verifier/code_challenge when we implement sessions
      const additionalAuthParams: Record<string, string> = {};

      const authorizationUri = client.authorizeURL({
        redirect_uri: REDIRECT_URI,
        scope: oauthScopes.join(' '),
        state: JSON.stringify({
          returnUrl: returnUrl ?? RETURN_URL,
          applicationId,
          customerId,
          providerName,
          scope: oauthScopes.join(' '), // TODO: this should be in a session
          loginUrl,
        }),
        ...additionalAuthParams,
      });

      res.redirect(authorizationUri);
    }
  );

  publicOauthRouter.get(
    '/callback',
    async (req: Request<never, any, never, { code: string; state: string }>, res: Response) => {
      const { code, state } = req.query;

      if (!code) {
        throw new Error('No oauth code param provided');
      }

      if (!state) {
        throw new Error('No oauth state param provided');
      }

      const {
        returnUrl,
        scope,
        providerName,
        customerId,
        applicationId,
        loginUrl,
      }: {
        returnUrl: string;
        scope?: string;
        applicationId?: string;
        providerName?: CRMProviderName;
        customerId?: string;
        loginUrl?: string;
      } = JSON.parse(decodeURIComponent(state));

      if (!providerName || !SUPPORTED_CRM_CONNECTIONS.includes(providerName)) {
        throw new Error('No providerName or supported providerName on state object');
      }

      if (!scope) {
        throw new Error('No scope on state object');
      }

      if (!applicationId) {
        throw new Error('No applicationId on state object');
      }

      if (!customerId) {
        throw new Error('No customerId on state object');
      }

      const integration = await integrationService.getByProviderNameAndApplicationId(providerName, applicationId);

      if (!integration.config) {
        throw new Error('Integration is not configured');
      }

      const { oauthClientId, oauthClientSecret } = integration.config.oauth.credentials;

      const auth = getConnectorAuthConfig(providerName);

      if (loginUrl) {
        auth.tokenHost = loginUrl;
        auth.authorizeHost = loginUrl;
      }

      const client = new simpleOauth2.AuthorizationCode({
        client: {
          id: oauthClientId,
          secret: oauthClientSecret,
        },
        auth,
        options: {
          authorizationMethod: 'body' as AuthorizationMethod,
        },
      });

      // TODO: implement code_verifier/code_challenge when we implement sessions
      const additionalAuthParams: Record<string, string> = {};

      const tokenWrapper = await client.getToken({
        code,
        redirect_uri: REDIRECT_URI,
        ...additionalAuthParams,
      });

      let instanceUrl = tokenWrapper.token['instance_url'] as string;

      if (providerName === 'hubspot') {
        const accessToken = tokenWrapper.token['access_token'] as string;
        const hubspotClient = new HubspotClient({ accessToken: tokenWrapper.token['access_token'] as string });
        const { hubId } = await hubspotClient.oauth.accessTokensApi.getAccessToken(accessToken);
        instanceUrl = `https://app.hubspot.com/contacts/${hubId.toString()}`;
      }

      const basePayload = {
        category: 'crm' as const,
        applicationId,
        customerId,
        integrationId: integration.id,
        credentials: {
          type: 'oauth2' as const,
          accessToken: tokenWrapper.token['access_token'] as string,
          refreshToken: tokenWrapper.token['refresh_token'] as string,
          expiresAt: (tokenWrapper.token['expires_at'] as string | undefined) ?? null,
        },
        instanceUrl,
      };

      const payload =
        providerName === 'salesforce'
          ? {
              ...basePayload,
              providerName,
              credentials: {
                ...basePayload.credentials,
                instanceUrl: tokenWrapper.token['instance_url'] as string,
                loginUrl,
              },
            }
          : { ...basePayload, providerName };

      try {
        await connectionAndSyncService.create(payload);
      } catch (e: any) {
        if (e.code === 'P2002') {
          await connectionAndSyncService.upsert(payload);
        } else {
          throw e;
        }
      }

      res.redirect(returnUrl);
    }
  );

  app.use('/oauth', publicOauthRouter);
}
