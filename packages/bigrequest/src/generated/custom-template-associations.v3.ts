// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/storefront/custom-template-associations": {
    /**
     * Get Custom Template Associations
     * @description Get a collection of the storeʼs custom template associations across all storefronts
     */
    get: operations["GetCustomTemplateAssociations"];
    /**
     * Upsert Custom Template Associations
     * @description Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template.
     */
    put: operations["UpsertCustomTemplateAssociations"];
    /**
     * Delete Custom Template Associations
     * @description Delete custom template associations. At least one query parameter must be used.
     */
    delete: operations["DeleteCustomTemplateAssociations"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Error: {
      status?: number;
      message?: string;
    };
    ErrorResponse400: {
      schema?: components["schemas"]["Error"];
    };
    ErrorResponse404: {
      schema?: components["schemas"]["Error"];
    };
    ErrorResponse409: {
      schema?: components["schemas"]["Error"];
    };
    ErrorResponse422: {
      schema?: components["schemas"]["Error"];
    };
    MetaPaginationObject: {
      pagination?: {
        /** @example 246 */
        total?: number;
        /** @example 5 */
        count?: number;
        /** @example 5 */
        per_page?: number;
        /** @example 1 */
        current_page?: number;
        /** @example 50 */
        total_pages?: number;
        links?: {
          /** @example ?limit=5&page=2 */
          next?: string;
          /** @example ?limit=5&page=1 */
          current?: string;
        };
      };
    };
    DetailedErrors: {
      [key: string]: string;
    };
    /** @description Error payload for the BigCommerce API. */
    BaseError: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    ErrorResponse: components["schemas"]["BaseError"] & {
      errors?: components["schemas"]["DetailedErrors"];
    };
    /** CustomTemplateAssociation */
    CustomTemplateAssociation: {
      id?: number;
      channel_id?: number;
      /** @enum {string} */
      entity_type?: "product" | "category" | "brand" | "page";
      entity_id?: number;
      /** @example custom-product-1.html */
      file_name?: string;
      /** @description An invalid file name does not match with an existing custom layout file in the currently active theme for the channel. When an association is invalid the store will fallback to using the default for that entity type. */
      is_valid?: boolean;
      date_created?: string;
      date_modified?: string;
    };
    /** CustomTemplateAssociation */
    CustomTemplateAssociationUpsert: {
      channel_id: number;
      /** @enum {string} */
      entity_type: "product" | "category" | "brand" | "page";
      entity_id: number;
      /** @example custom-product-1.html */
      file_name: string;
    };
  };
  responses: never;
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Custom Template Associations
   * @description Get a collection of the storeʼs custom template associations across all storefronts
   */
  GetCustomTemplateAssociations: {
    parameters: {
      query?: {
        /** @description Channel ID to return only custom template associations for a given Channel */
        channel_id?: number;
        /** @description Filter by a list of entity IDs. Must be used together with "type" filter. */
        "entity_id:in"?: string;
        /** @description Number of results to return per page */
        limit?: number;
        /** @description Which page number to return, based on the page size. Used to paginate large collections. */
        page?: number;
        /** @description Filter associations by type */
        type?: "product" | "category" | "brand" | "page";
        /** @description Optional toggle to filter for exclusively valid or invalid associations entries. An invalid entry is one where its file name does not match up to an existing custom layout file in the currently active theme for the channel. */
        is_valid?: boolean;
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["CustomTemplateAssociation"][];
            meta?: components["schemas"]["MetaPaginationObject"];
          };
        };
      };
    };
  };
  /**
   * Upsert Custom Template Associations
   * @description Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template.
   */
  UpsertCustomTemplateAssociations: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CustomTemplateAssociationUpsert"][];
      };
    };
    responses: {
      /** @description Success response for batch upsert of custom template associations */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Error response for batch PUT of Custom template associations. Includes the errors for each reference ID. */
      422: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Delete Custom Template Associations
   * @description Delete custom template associations. At least one query parameter must be used.
   */
  DeleteCustomTemplateAssociations: {
    parameters: {
      query?: {
        /** @description List of Association IDs to delete explicitly. */
        "id:in"?: number;
        /** @description List of Entity IDs to delete explicitly. Must be used together with "type" */
        "entity_id:in"?: number;
        /** @description Channel ID provided to delete all custom template associations for a given Channel */
        channel_id?: number;
        /** @description Filter associations by type */
        type?: "product" | "category" | "brand" | "page";
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: never;
      };
    };
  };
}
