import { getDependencyContainer } from '@/dependency_container';
import { camelcaseKeys, camelcaseKeysSansCustomFields } from '@supaglue/core/lib/camelcase';
import { snakecaseKeys } from '@supaglue/core/lib/snakecase';
import { toListInternalParams } from '@supaglue/core/mappers/list_params';
import { GetParams, ListParams } from '@supaglue/core/types';
import {
  CreateContactPathParams,
  CreateContactRequest,
  CreateContactResponse,
  GetContactPathParams,
  GetContactQueryParams,
  GetContactRequest,
  GetContactResponse,
  GetContactsPathParams,
  GetContactsRequest,
  GetContactsResponse,
  SearchContactsPathParams,
  SearchContactsRequest,
  SearchContactsResponse,
  UpdateContactPathParams,
  UpdateContactQueryParams,
  UpdateContactRequest,
  UpdateContactResponse,
} from '@supaglue/schemas/crm';
import { Request, Response, Router } from 'express';

const { contactService } = getDependencyContainer();

export default function init(app: Router): void {
  const router = Router();

  router.get(
    '/',
    async (
      req: Request<
        GetContactsPathParams,
        GetContactsResponse,
        GetContactsRequest,
        /* GetContactsQueryParams */ ListParams
      >,
      res: Response<GetContactsResponse>
    ) => {
      const { next, previous, results } = await contactService.list(
        req.customerConnection.id,
        toListInternalParams(req.query)
      );
      const snakeCaseKeysResults = results.map((result) => {
        return snakecaseKeys(result);
      });
      return res.status(200).send({ next, previous, results: snakeCaseKeysResults });
    }
  );

  router.get(
    '/:contact_id',
    async (
      req: Request<GetContactPathParams, GetContactResponse, GetContactRequest, /* GetContactQueryParams */ GetParams>,
      res: Response<GetContactResponse>
    ) => {
      const contact = await contactService.getById(req.params.contact_id, req.customerConnection.id, req.query);
      return res.status(200).send(snakecaseKeys(contact));
    }
  );

  router.post<string, CreateContactPathParams, CreateContactResponse, CreateContactRequest, GetContactQueryParams>(
    '/',
    async (
      req: Request<CreateContactPathParams, CreateContactResponse, CreateContactRequest>,
      res: Response<CreateContactResponse>
    ) => {
      const { customerId, id: connectionId } = req.customerConnection;
      const contact = await contactService.create(
        customerId,
        connectionId,
        camelcaseKeysSansCustomFields(req.body.model)
      );
      return res.status(200).send({ model: snakecaseKeys(contact) });
    }
  );

  router.patch<string, UpdateContactPathParams, UpdateContactResponse, UpdateContactRequest, UpdateContactQueryParams>(
    '/:contact_id',
    async (
      req: Request<UpdateContactPathParams, UpdateContactResponse, UpdateContactRequest>,
      res: Response<UpdateContactResponse>
    ) => {
      const { customerId, id: connectionId } = req.customerConnection;
      const contact = await contactService.update(customerId, connectionId, {
        id: req.params.contact_id,
        ...camelcaseKeysSansCustomFields(req.body.model),
      });
      return res.status(200).send({ model: snakecaseKeys(contact) });
    }
  );

  router.post(
    '/_search',
    async (
      req: Request<SearchContactsPathParams, SearchContactsResponse, SearchContactsRequest>,
      res: Response<SearchContactsResponse>
    ) => {
      const { next, previous, results } = await contactService.search(
        req.customerConnection.id,
        req.params,
        camelcaseKeys(req.body.filters)
      );

      const snakeCaseKeysResults = results.map((result) => {
        return snakecaseKeys(result);
      });

      return res.status(200).send({ next, previous, results: snakeCaseKeysResults });
    }
  );

  router.delete('/:contact_id', () => {
    throw new Error('Not implemented');
  });

  app.use('/contacts', router);
}
