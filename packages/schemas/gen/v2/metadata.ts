/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/objects/standard": {
    /** List standardObjects */
    get: operations["listStandardObjects"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
  };
  "/objects/custom": {
    /** List customObjects */
    get: operations["listCustomObjects"];
    /** Create customObject */
    post: operations["createCustomObject"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
  };
  "/objects/custom/{custom_object_id}": {
    /** Get customObject */
    get: operations["getCustomObject"];
    /** Update customObject */
    put: operations["updateCustomObject"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
      path: {
        custom_object_id: string;
      };
    };
  };
  "/association-types": {
    /**
     * List associationTypes 
     * @description Get a list of associationTypes
     */
    get: operations["getAssociationTypes"];
    /** Create associationType */
    post: operations["createAssociationType"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
  };
  "/properties": {
    /** List properties */
    get: operations["listProperties"];
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        /** @description The provider name */
        "x-provider-name": string;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    property: {
      /**
       * @description The machine name of the property as it appears in the third-party Provider. 
       * @example FirstName
       */
      id: string;
      /**
       * @description The human-readable name of the property as provided by the third-party Provider. 
       * @example First Name
       */
      label: string;
      /**
       * @description The type of the property as provided by the third-party Provider. These types are not unified by Supaglue. For Intercom, this is string, integer, boolean, or object. For Outreach, this is integer, boolean, number, array, or string. 
       * @example string
       */
      type?: string;
      /**
       * @description The raw details of the property as provided by the third-party Provider, if available. 
       * @example {}
       */
      raw_details?: Record<string, never>;
    };
    standard_object: {
      /** @example ticket */
      name: string;
    };
    custom_object: {
      /** @example 42579f73-8524-4570-9b67-ecbd702c6b14 */
      id: string;
      /** @example ticket */
      name: string;
      /** @example Ticket object */
      description: string | null;
      labels: {
        /** @example Ticket */
        singular: string;
        /** @example Tickets */
        plural: string;
      };
      fields: (components["schemas"]["custom_object_field"])[];
    };
    simple_custom_object: {
      /** @example 42579f73-8524-4570-9b67-ecbd702c6b14 */
      id: string;
      /** @example ticket */
      name: string;
    };
    create_update_custom_object: {
      /**
       * @description The name you'd like to use for the custom object. For Salesforce, we will append `__c` if necessary. For HubSpot, it will pass through as-is. 
       * @example ticket
       */
      suggested_name: string;
      /** @example Ticket object */
      description: string | null;
      labels: {
        /** @example Ticket */
        singular: string;
        /** @example Tickets */
        plural: string;
      };
      /**
       * @description The key name of the "primary" field. For example, in HubSpot, this is the field that will be displayed for a record in the UI by default. For Salesforce, this will be referenced as the "Name" field. 
       * @example ticket_id
       */
      primary_field_key_name: string;
      fields: (components["schemas"]["custom_object_field"])[];
    };
    create_update_association_type: {
      source_entity_id: string;
      target_entity_id: string;
      suggested_key_name: string;
      display_name: string;
      cardinality: components["schemas"]["association_type_cardinality"];
    };
    /** @enum {string} */
    object_type: "common" | "standard" | "custom";
    /** @enum {string} */
    association_type_cardinality: "ONE_TO_MANY";
    /** @enum {string} */
    association_type_cardinality_or_unknown: "ONE_TO_MANY" | "UNKNOWN";
    custom_object_field: {
      /** @example Ticket ID */
      display_name: string;
      /**
       * @description In Salesforce, this must end with `__c`. 
       * @example ticket_id
       */
      key_name: string;
      /** @example false */
      is_required: boolean;
      /**
       * @description In Salesforce, when this is set to 'string', the max length will be set to 255 by default. In Salesforce, when it is set to 'number', the precision and scale will be set to 18 and 0, respectively. 
       * @enum {string}
       */
      field_type: "string" | "number";
    };
    association_type: {
      id: string;
      source_entity_id: string;
      target_entity_id: string;
      display_name: string;
      cardinality: components["schemas"]["association_type_cardinality_or_unknown"];
    };
    object: {
      id: string;
      origin_type: components["schemas"]["object_type"];
    };
    errors: ({
        /**
         * @description The full error message from the remote Provider. The schema and level of detail will vary by Provider. 
         * @example {"code":400,"body":{"status":"error","message":"Property values were not valid: [{\\"isValid\\":false,\\"message\\":\\"Property \\\\\\"__about_us\\\\\\" does not exist\\",\\"error\\":\\"PROPERTY_DOESNT_EXIST\\",\\"name\\":\\"__about_us\\",\\"localizedErrorMessage\\":\\"Property \\\\\\"__about_us\\\\\\" does not exist\\"}]","correlationId":"ac94252c-90b5-45d2-ad1d-9a9f7651d7d2","category":"VALIDATION_ERROR"},"headers":{"access-control-allow-credentials":"false","cf-cache-status":"DYNAMIC","cf-ray":"8053d17b9dae9664-SJC","connection":"close","content-length":"361","content-type":"application/json;charset=utf-8","date":"Mon, 11 Sep 2023 23:51:22 GMT","nel":"{\\"success_fraction\\":0.01,\\"report_to\\":\\"cf-nel\\",\\"max_age\\":604800}","report-to":"{\\"endpoints\\":[{\\"url\\":\\"https://a.nel.cloudflare.com/report/v3?s=FgwuXObO%2Fz6ahUJKsxjDLaXTWjooJ8tB0w4%2B%2BKaulGStx0FGkn1PoJoOx2KrFMfihzNdfAqikq7CmgbdlmwKB8hkmp3eTb68qpg10LXFlRgiSqRhbWM7yYSfo8CXmPBc\\"}],\\"group\\":\\"cf-nel\\",\\"max_age\\":604800}","server":"cloudflare","strict-transport-security":"max-age=31536000; includeSubDomains; preload","vary":"origin, Accept-Encoding","x-content-type-options":"nosniff","x-envoy-upstream-service-time":"91","x-evy-trace-listener":"listener_https","x-evy-trace-route-configuration":"listener_https/all","x-evy-trace-route-service-name":"envoyset-translator","x-evy-trace-served-by-pod":"iad02/hubapi-td/envoy-proxy-6c94986c56-9xsh2","x-evy-trace-virtual-host":"all","x-hubspot-correlation-id":"ac94252c-90b5-45d2-ad1d-9a9f7651d7d2","x-hubspot-ratelimit-interval-milliseconds":"10000","x-hubspot-ratelimit-max":"100","x-hubspot-ratelimit-remaining":"99","x-hubspot-ratelimit-secondly":"10","x-hubspot-ratelimit-secondly-remaining":"9","x-request-id":"ac94252c-90b5-45d2-ad1d-9a9f7651d7d2","x-trace":"2B1B4386362759B6A4C34802AD168B803DDC1BE770000000000000000000"}}
         */
        detail?: string;
        /**
         * @description The Supaglue error code associated with the error. 
         * @example MISSING_REQUIRED_FIELD
         */
        problem_type?: string;
        /**
         * @description A brief description of the error. The schema and type of message will vary by Provider. 
         * @example Property values were not valid
         */
        title?: string;
      })[];
    warnings: ({
        detail?: string;
        problem_type?: string;
        title?: string;
      })[];
  };
  responses: never;
  parameters: {
    /** @description The customer ID that uniquely identifies the customer in your application */
    "x-customer-id": string;
    /** @description The provider name */
    "x-provider-name": string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /** List standardObjects */
  listStandardObjects: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
    responses: {
      /** @description StandardObject */
      200: {
        content: {
          "application/json": (components["schemas"]["standard_object"])[];
        };
      };
    };
  };
  /** List customObjects */
  listCustomObjects: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
    responses: {
      /** @description CustomObject */
      200: {
        content: {
          "application/json": (components["schemas"]["simple_custom_object"])[];
        };
      };
    };
  };
  /** Create customObject */
  createCustomObject: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
    requestBody: {
      content: {
        "application/json": {
          object: components["schemas"]["create_update_custom_object"];
        };
      };
    };
    responses: {
      /** @description CustomObject created */
      201: {
        content: {
          "application/json": {
            errors?: components["schemas"]["errors"];
            object?: {
              id: string;
            };
            warnings?: components["schemas"]["warnings"];
          };
        };
      };
    };
  };
  /** Get customObject */
  getCustomObject: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
      path: {
        custom_object_id: string;
      };
    };
    responses: {
      /** @description CustomObject */
      200: {
        content: {
          "application/json": components["schemas"]["custom_object"];
        };
      };
    };
  };
  /** Update customObject */
  updateCustomObject: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
      path: {
        custom_object_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": {
          object: components["schemas"]["create_update_custom_object"];
        };
      };
    };
    responses: {
      /** @description CustomObject updated */
      200: {
        content: {
          "application/json": {
            errors?: components["schemas"]["errors"];
            warnings?: components["schemas"]["warnings"];
          };
        };
      };
    };
  };
  /**
   * List associationTypes 
   * @description Get a list of associationTypes
   */
  getAssociationTypes: {
    parameters: {
      query: {
        source_entity_id: string;
        target_entity_id: string;
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
    responses: {
      /** @description AssociationTypes */
      200: {
        content: {
          "application/json": {
            results?: (components["schemas"]["association_type"])[];
          };
        };
      };
    };
  };
  /** Create associationType */
  createAssociationType: {
    parameters: {
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        "x-provider-name": components["parameters"]["x-provider-name"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["create_update_association_type"];
      };
    };
    responses: {
      /** @description AssociationType created */
      201: {
        content: {
          "application/json": {
            errors?: components["schemas"]["errors"];
            association_type?: {
              id: string;
            };
            warnings?: components["schemas"]["warnings"];
          };
        };
      };
    };
  };
  /** List properties */
  listProperties: {
    parameters: {
      query: {
        type: "standard" | "custom";
        name: string;
      };
      header: {
        "x-customer-id": components["parameters"]["x-customer-id"];
        /** @description The provider name */
        "x-provider-name": string;
      };
    };
    responses: {
      /** @description List of properties */
      200: {
        content: {
          "application/json": {
            properties: (components["schemas"]["property"])[];
          };
        };
      };
    };
  };
}
