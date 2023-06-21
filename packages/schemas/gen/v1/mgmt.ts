/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** Type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export interface paths {
  "/customers": {
    /**
     * List customers 
     * @description Get a list of customers
     */
    get: operations["getCustomers"];
    /** Upsert customer */
    put: operations["upsertCustomer"];
  };
  "/customers/{customer_id}": {
    /** Get customer */
    get: operations["getCustomer"];
    /** Delete customer */
    delete: operations["deleteCustomer"];
    parameters: {
      path: {
        customer_id: string;
      };
    };
  };
  "/destinations": {
    /**
     * List destinations 
     * @description Get a list of destinations
     */
    get: operations["getDestinations"];
    /** Create destination */
    post: operations["createDestination"];
  };
  "/destinations/{destination_id}": {
    /** Get destination */
    get: operations["getDestination"];
    /** Update destination */
    put: operations["updateDestination"];
    parameters: {
      path: {
        destination_id: string;
      };
    };
  };
  "/integrations": {
    /**
     * List integrations 
     * @description Get a list of integrations
     */
    get: operations["getIntegrations"];
    /** Create integration */
    post: operations["createIntegration"];
  };
  "/integrations/{integration_id}": {
    /** Get integration */
    get: operations["getIntegration"];
    /** Update integration */
    put: operations["updateIntegration"];
    /** Delete integration */
    delete: operations["deleteIntegration"];
    parameters: {
      path: {
        integration_id: string;
      };
    };
  };
  "/customers/{customer_id}/connections": {
    /**
     * List connections 
     * @description Get a list of connections
     */
    get: operations["getConnections"];
    /** Create connection */
    post: operations["createConnection"];
    parameters: {
      path: {
        customer_id: string;
      };
    };
  };
  "/customers/{customer_id}/connections/{connection_id}": {
    /** Get connection */
    get: operations["getConnection"];
    /** Delete connection */
    delete: operations["deleteConnection"];
    parameters: {
      path: {
        customer_id: string;
        connection_id: string;
      };
    };
  };
  "/webhook": {
    /**
     * Get webhook 
     * @description Get webhook details
     */
    get: operations["getWebhook"];
    /** Create webhook */
    post: operations["createWebhook"];
    /** Delete webhook */
    delete: operations["deleteWebhook"];
  };
  "/sync-history": {
    /**
     * Get Sync History 
     * @description Get a list of Sync History objects.
     */
    get: operations["getSyncHistory"];
  };
  "/sync-info": {
    /**
     * Get Sync Info 
     * @description Get a list of Sync Info
     */
    get: operations["getSyncInfos"];
  };
  "/force-sync": {
    /**
     * Force a full sync 
     * @description Force a full sync
     */
    post: operations["createForceSync"];
  };
  "/sync-migration/_get_connections": {
    /**
     * List Connections for sync migration 
     * @description List Connections for sync migration
     */
    get: operations["syncMigrationGetConnections"];
  };
  "/sync-migration/_migrate_connection": {
    /**
     * Migrate Connection for sync migration 
     * @description Migrate Connection for sync migration
     */
    post: operations["syncMigrationMigrateConnection"];
  };
}

export interface webhooks {
  "webhook": {
    /** Webhook */
    post: operations["webhook"];
  };
}

export interface components {
  schemas: {
    customer: {
      /** @example d8ceb3ff-8b7f-4fa7-b8de-849292f6ca69 */
      application_id: string;
      /** @example your-customers-unique-application-id */
      customer_id: string;
      /** @example MyCompany Inc */
      name: string;
      /** @example contact@mycompany.com */
      email: string;
      connections?: (components["schemas"]["connection"])[];
    };
    integration: {
      /** @example e888cedf-e9d0-42c5-9485-2d72984faef2 */
      id: string;
      /** @example 9572d08b-f19f-48cc-a992-1eb7031d3f6a */
      application_id: string;
      /** @example 0a292508-d254-4929-98d3-dc23416efff8 */
      destination_id: string | null;
      category: components["schemas"]["category"];
      /** @enum {string} */
      auth_type: "oauth2";
      provider_name: components["schemas"]["provider_name"];
      config?: components["schemas"]["integration_config"];
    };
    destination: {
      /** @example e888cedf-e9d0-42c5-9485-2d72984faef2 */
      id: string;
      /** @example 9572d08b-f19f-48cc-a992-1eb7031d3f6a */
      application_id: string;
      /** @example My Destination */
      name: string;
    } & OneOf<[{
      /** @enum {string} */
      type: "s3";
      config: components["schemas"]["s3_config"];
    }, {
      /** @enum {string} */
      type: "postgres";
      config: components["schemas"]["postgres_config"];
    }]>;
    s3_config: {
      /** @example us-west-2 */
      region: string;
      /** @example my-test-bucket */
      bucket: string;
      access_key_id: string;
      secret_access_key: string;
    };
    postgres_config: {
      /** @example https://mydb.com */
      host: string;
      /** @example 5432 */
      port: number;
      /** @example my_database */
      database: string;
      /** @example public */
      schema: string;
      /** @example myuser */
      user: string;
      /** @example password */
      password: string;
    };
    connection: {
      /** @example e888cedf-e9d0-42c5-9485-2d72984faef2 */
      id: string;
      /**
       * @example available 
       * @enum {string}
       */
      status: "available" | "added" | "authorized" | "callable";
      /** @example d8ceb3ff-8b7f-4fa7-b8de-849292f6ca69 */
      application_id: string;
      /** @example my-customer-1 */
      customer_id: string;
      /** @example 9572d08b-f19f-48cc-a992-1eb7031d3f6a */
      integration_id: string;
      provider_name: components["schemas"]["provider_name"];
      category: components["schemas"]["category"];
      /**
       * @description Instance URL for the connected customer. 
       * @example https://app.hubspot.com/contacts/123456
       */
      instance_url: string;
    };
    /** @enum {string} */
    category: "crm" | "engagement";
    /**
     * @example {
     *   "provider_app_id": "my_app_id",
     *   "is_managed_auth_app": false,
     *   "oauth": {
     *     "oauth_scopes": [
     *       "crm.objects.contacts.read",
     *       "crm.objects.companies.read",
     *       "crm.objects.deals.read",
     *       "crm.objects.owners.read",
     *       "crm.objects.contacts.write",
     *       "crm.objects.companies.write",
     *       "crm.objects.deals.write"
     *     ],
     *     "credentials": {
     *       "oauth_client_id": "7393b5a4-5e20-4648-87af-b7b297793fd1",
     *       "oauth_client_secret": "941b846a-5a8c-48b8-b0e1-41b6d4bc4f1a"
     *     }
     *   },
     *   "sync": {
     *     "period_ms": 60000
     *   }
     * }
     */
    integration_config: {
      /** @example my_app_id */
      provider_app_id: string;
      /**
       * @description True: use Supaglue's OAuth application credentials. False: Use the provided OAuth application credentials. 
       * @example false
       */
      use_managed_oauth?: boolean;
      oauth: {
        oauth_scopes: (string)[];
        credentials: {
          /** @example 7393b5a4-5e20-4648-87af-b7b297793fd1 */
          oauth_client_id: string;
          /** @example 941b846a-5a8c-48b8-b0e1-41b6d4bc4f1a */
          oauth_client_secret: string;
        };
      };
      sync: {
        /** @example 60000 */
        period_ms: number;
        /**
         * @default false 
         * @example false
         */
        sync_all_fields?: boolean;
      };
    };
    /** @enum {string} */
    provider_name: "hubspot" | "salesforce" | "pipedrive" | "zendesk_sell" | "ms_dynamics_365_sales" | "zoho_crm" | "capsule" | "outreach";
    /** @enum {string} */
    provider_name_crm: "hubspot" | "salesforce" | "pipedrive" | "zendesk_sell" | "ms_dynamics_365_sales" | "zoho_crm" | "capsule";
    /** @enum {string} */
    provider_name_engagement: "outreach";
    create_update_customer: {
      /** @example your-customers-unique-application-id */
      customer_id: string;
      /** @example MyCompany Inc */
      name: string;
      /** @example contact@mycompany.com */
      email: string;
    };
    create_update_integration: ({
      /** @enum {string} */
      auth_type: "oauth2";
      config: components["schemas"]["integration_config"];
      destination_id?: string | null;
    }) & OneOf<[{
      /** @enum {string} */
      category: "crm";
      provider_name: components["schemas"]["provider_name_crm"];
    }, {
      /** @enum {string} */
      category: "engagement";
      provider_name: components["schemas"]["provider_name_engagement"];
    }]>;
    create_update_destination: {
      /** @example My Destination */
      name: string;
    } & OneOf<[{
      /** @enum {string} */
      type: "s3";
      config: components["schemas"]["s3_config"];
    }, {
      /** @enum {string} */
      type: "postgres";
      config: components["schemas"]["postgres_config"];
    }]>;
    webhook: {
      url: string;
      notify_on_sync_success: boolean;
      notify_on_sync_error: boolean;
      notify_on_connection_success: boolean;
      notify_on_connection_error: boolean;
      headers?: {
        [key: string]: unknown | undefined;
      };
    };
    sync_info: {
      /** @example Account */
      model_name: string;
      /** @example 2023-02-22T19:55:17.559Z */
      last_sync_start: string | null;
      /** @example 2023-02-22T20:55:17.559Z */
      next_sync_start: string | null;
      /** @enum {string|null} */
      status: "SYNCING" | "DONE" | null;
      /** @example 974125fa-ffb6-47fc-b12f-44c566fc5da1 */
      application_id: string;
      /** @example my-customer-1 */
      customer_id: string;
      /** @example hubspot */
      provider_name: string;
      /** @enum {string} */
      category: "crm" | "engagement";
      /** @example 3217ea51-11c8-43c9-9547-6f197e02e5e4 */
      connection_id: string;
    };
    sync_history: {
      /** @example Account */
      model_name: string;
      error_message: string | null;
      /** @example 2023-02-22T19:55:17.559Z */
      start_timestamp: string;
      /** @example 2023-02-22T20:55:17.559Z */
      end_timestamp: string | null;
      /** @example 974125fa-ffb6-47fc-b12f-44c566fc5da1 */
      application_id: string;
      /** @example my-customer-1 */
      customer_id: string;
      /** @example hubspot */
      provider_name: string;
      /** @enum {string} */
      category: "crm";
      /** @example 3217ea51-11c8-43c9-9547-6f197e02e5e4 */
      connection_id: string;
      /** @enum {string} */
      status: "SUCCESS" | "IN_PROGRESS" | "FAILURE";
      /** @example 100 */
      num_records_synced?: number | null;
    };
    force_sync: {
      /** @example true */
      success: boolean;
    };
    "webhook-payload": OneOf<[{
      /** @enum {unknown} */
      type: "SYNC_SUCCESS" | "SYNC_ERROR";
      payload: {
        /** @example e30cbb93-5b05-4186-b6de-1acc10013795 */
        connection_id: string;
        /** @example 7bfcc74d-c98b-49de-8e8f-3dc7a17273f6 */
        customer_id: string;
        /**
         * @example hubspot 
         * @enum {string}
         */
        provider_name?: "hubspot" | "salesforce";
        /** @example 2fdbd03d-11f2-4e66-a5e6-2b731c71a12d */
        history_id: string;
        /** @example 100 */
        num_records_synced: number;
        /**
         * @example contact 
         * @enum {string}
         */
        common_model: "opportunity" | "contact" | "account" | "lead" | "user";
        error_message?: string;
      };
    }, {
      /** @enum {unknown} */
      type: "CONNECTION_SUCCESS" | "CONNECTION_ERROR";
      payload: {
        /** @example e30cbb93-5b05-4186-b6de-1acc10013795 */
        customer_id: string;
        /** @example 5a4dbac6-3a56-4ad9-8aa3-e7b7f00be024 */
        integration_id: string;
        /** @enum {string} */
        category: "crm";
        /**
         * @example hubspot 
         * @enum {string}
         */
        provider_name: "hubspot" | "salesforce";
      };
    }]>;
  };
  responses: never;
  parameters: {
    /** @description The pagination cursor value */
    cursor: string;
    /** @description Number of results to return per page */
    page_size: string;
    /** @description The customer ID that uniquely identifies the customer in your application */
    customer_id: string;
    /** @description The provider name */
    provider_name: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  getCustomers: {
    /**
     * List customers 
     * @description Get a list of customers
     */
    responses: {
      /** @description Customers */
      200: {
        content: {
          "application/json": (components["schemas"]["customer"])[];
        };
      };
    };
  };
  upsertCustomer: {
    /** Upsert customer */
    requestBody: {
      content: {
        "application/json": components["schemas"]["create_update_customer"];
      };
    };
    responses: {
      /** @description Customer upserted */
      200: {
        content: {
          "application/json": components["schemas"]["customer"];
        };
      };
    };
  };
  getCustomer: {
    /** Get customer */
    responses: {
      /** @description Customer */
      200: {
        content: {
          "application/json": components["schemas"]["customer"];
        };
      };
    };
  };
  deleteCustomer: {
    /** Delete customer */
    responses: {
      /** @description Customer */
      200: {
        content: {
          "application/json": components["schemas"]["customer"];
        };
      };
    };
  };
  getDestinations: {
    /**
     * List destinations 
     * @description Get a list of destinations
     */
    responses: {
      /** @description Destinations */
      200: {
        content: {
          "application/json": (components["schemas"]["destination"])[];
        };
      };
    };
  };
  createDestination: {
    /** Create destination */
    requestBody: {
      content: {
        "application/json": components["schemas"]["create_update_destination"];
      };
    };
    responses: {
      /** @description Destination created */
      201: {
        content: {
          "application/json": components["schemas"]["destination"];
        };
      };
    };
  };
  getDestination: {
    /** Get destination */
    responses: {
      /** @description Destination */
      200: {
        content: {
          "application/json": components["schemas"]["destination"];
        };
      };
    };
  };
  updateDestination: {
    /** Update destination */
    requestBody: {
      content: {
        "application/json": components["schemas"]["create_update_destination"];
      };
    };
    responses: {
      /** @description Destination */
      200: {
        content: {
          "application/json": components["schemas"]["destination"];
        };
      };
    };
  };
  getIntegrations: {
    /**
     * List integrations 
     * @description Get a list of integrations
     */
    responses: {
      /** @description Integrations */
      200: {
        content: {
          "application/json": (components["schemas"]["integration"])[];
        };
      };
    };
  };
  createIntegration: {
    /** Create integration */
    requestBody: {
      content: {
        "application/json": components["schemas"]["create_update_integration"];
      };
    };
    responses: {
      /** @description Integration created */
      201: {
        content: {
          "application/json": components["schemas"]["integration"];
        };
      };
    };
  };
  getIntegration: {
    /** Get integration */
    responses: {
      /** @description Integration */
      200: {
        content: {
          "application/json": components["schemas"]["integration"];
        };
      };
    };
  };
  updateIntegration: {
    /** Update integration */
    requestBody: {
      content: {
        "application/json": components["schemas"]["create_update_integration"];
      };
    };
    responses: {
      /** @description Integration */
      200: {
        content: {
          "application/json": components["schemas"]["integration"];
        };
      };
    };
  };
  deleteIntegration: {
    /** Delete integration */
    responses: {
      /** @description Integration */
      200: {
        content: {
          "application/json": components["schemas"]["integration"];
        };
      };
    };
  };
  getConnections: {
    /**
     * List connections 
     * @description Get a list of connections
     */
    responses: {
      /** @description Connections */
      200: {
        content: {
          "application/json": (components["schemas"]["connection"])[];
        };
      };
    };
  };
  createConnection: {
    /** Create connection */
    requestBody: {
      content: {
        "application/json": {
          [key: string]: unknown | undefined;
        };
      };
    };
    responses: {
      /** @description Connection created */
      200: {
        content: {
          "application/json": components["schemas"]["connection"];
        };
      };
    };
  };
  getConnection: {
    /** Get connection */
    responses: {
      /** @description Connection */
      200: {
        content: {
          "application/json": components["schemas"]["connection"];
        };
      };
    };
  };
  deleteConnection: {
    /** Delete connection */
    responses: {
      /** @description Connection */
      204: never;
    };
  };
  getWebhook: {
    /**
     * Get webhook 
     * @description Get webhook details
     */
    responses: {
      /** @description Applications */
      200: {
        content: {
          "application/json": components["schemas"]["webhook"];
        };
      };
    };
  };
  createWebhook: {
    /** Create webhook */
    requestBody: {
      content: {
        "application/json": components["schemas"]["webhook"];
      };
    };
    responses: {
      /** @description Webhook created */
      201: {
        content: {
          "application/json": components["schemas"]["webhook"];
        };
      };
    };
  };
  deleteWebhook: {
    /** Delete webhook */
    responses: {
      /** @description Webhook deleted */
      200: never;
    };
  };
  getSyncHistory: {
    /**
     * Get Sync History 
     * @description Get a list of Sync History objects.
     */
    parameters?: {
        /** @description The pagination cursor value */
        /** @description Number of results to return per page */
        /** @description The customer ID that uniquely identifies the customer in your application */
        /** @description The provider name */
        /** @description The model name to filter by */
      query?: {
        cursor?: string;
        page_size?: string;
        customer_id?: string;
        provider_name?: string;
        model?: string;
      };
    };
    responses: {
      /** @description Sync History */
      200: {
        content: {
          "application/json": ({
            /** @example eyJpZCI6IjQyNTc5ZjczLTg1MjQtNDU3MC05YjY3LWVjYmQ3MDJjNmIxNCIsInJldmVyc2UiOmZhbHNlfQ== */
            next?: string | null;
            /** @example eyJpZCI6IjBjZDhmYmZkLWU5NmQtNDEwZC05ZjQxLWIwMjU1YjdmNGI4NyIsInJldmVyc2UiOnRydWV9 */
            previous?: string | null;
            /** @example 100 */
            total_count?: number;
          }) & {
            results?: (components["schemas"]["sync_history"])[];
          };
        };
      };
    };
  };
  getSyncInfos: {
    /**
     * Get Sync Info 
     * @description Get a list of Sync Info
     */
    parameters?: {
        /** @description The customer ID that uniquely identifies the customer in your application */
        /** @description The provider name */
      query?: {
        customer_id?: string;
        provider_name?: string;
      };
    };
    responses: {
      /** @description Sync Info List */
      200: {
        content: {
          "application/json": (components["schemas"]["sync_info"])[];
        };
      };
    };
  };
  createForceSync: {
    /**
     * Force a full sync 
     * @description Force a full sync
     */
    parameters: {
        /** @description The customer ID that uniquely identifies the customer in your application */
        /** @description The provider name */
      query: {
        customer_id: string;
        provider_name: string;
      };
    };
    responses: {
      /** @description Force a full sync */
      200: {
        content: {
          "application/json": components["schemas"]["force_sync"];
        };
      };
    };
  };
  syncMigrationGetConnections: {
    /**
     * List Connections for sync migration 
     * @description List Connections for sync migration
     */
    responses: {
      /** @description List Connections for sync migration */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  syncMigrationMigrateConnection: {
    /**
     * Migrate Connection for sync migration 
     * @description Migrate Connection for sync migration
     */
    requestBody: {
      content: {
        "application/json": {
          connection_id: string;
          version: string;
        };
      };
    };
    responses: {
      /** @description Migrate Connection for sync migration */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  webhook: {
    /** Webhook */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["webhook-payload"];
      };
    };
    responses: {
      /** @description Return a 200 status to indicate that the data was received successfully */
      200: never;
    };
  };
}
