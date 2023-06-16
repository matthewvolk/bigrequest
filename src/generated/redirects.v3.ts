// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/storefront/redirects": {
    /**
     * Get Redirects 
     * @description Returns a collection of the store's 301 redirects across all sites.
     */
    get: operations["GetRedirects"];
    /**
     * Upsert Redirects 
     * @description Upserts new redirect data across all storefronts.
     */
    put: operations["UpsertRedirects"];
    /**
     * Delete Redirects 
     * @description Deletes redirects.
     */
    delete: operations["DeleteRedirects"];
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
    /** @description Data necessary to create or update a redirect. If there’s a conflict on the from_path and site_id, the redirect will be overwritten with new data. */
    "301RedirectUpsert": {
      /** @example /old-url/ */
      from_path: string;
      site_id: number;
      to?: components["schemas"]["RedirectTo"];
    };
    /** @description Full detail of a Redirect, optionally including the full destination URL. */
    "301RedirectRead": {
      id?: number;
      site_id?: number;
      /** @example /old-url */
      from_path?: string;
      to?: components["schemas"]["RedirectTo"];
      /**
       * Format: uri 
       * @description Full destination URL for the redirect. Must be explicitly included via URL parameter. 
       * @example https://store-domain.com/new-url
       */
      to_url?: string;
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
    /** RedirectTo */
    RedirectTo: {
      /** @enum {string} */
      type?: "product" | "brand" | "category" | "page" | "post" | "url";
      entity_id?: number;
      /** @example /new-url/ */
      url?: string;
    };
    /** Detailed Errors */
    DetailedErrors: {
      [key: string]: unknown;
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

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Redirects 
   * @description Returns a collection of the store's 301 redirects across all sites.
   */
  GetRedirects: {
    parameters: {
      query?: {
        /** @description Filters items by `site_id`. */
        site_id?: number;
        /** @description Filters items by redirect `id`. Also accepts comma-separated values to filter for multiple redirects. */
        "id:in"?: (string)[];
        /** @description Controls the number of items to return per page. */
        limit?: number;
        /** @description Specifies the page number in a limited (paginated) list of items. Used to paginate large collections. */
        page?: number;
        /** @description Field name to sort by. Note: Since redirect `id` increments when new redirects are added, you can use that field to sort by redirect create date. */
        sort?: "from_path" | "type" | "site_id";
        /** @description Sort direction. Acceptable values are `asc`, `desc`. */
        direction?: "asc" | "desc";
        /** @description Indicates whether to include redirect sub-resources. Only `to_url` is supported. */
        include?: "to_url";
        /** @description Filters redirects by the specified keyword. Will only search from the beginning of a URL path. For example, `blue` will match `/blue` and `/blue-shirt` ,  **not** `/royal-blue-shirt`. */
        keyword?: string;
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: (components["schemas"]["301RedirectRead"])[];
            meta?: components["schemas"]["MetaPaginationObject"];
          };
        };
      };
    };
  };
  /**
   * Upsert Redirects 
   * @description Upserts new redirect data across all storefronts.
   */
  UpsertRedirects: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": (components["schemas"]["301RedirectUpsert"])[];
      };
    };
    responses: {
      /** @description Created */
      201: {
        content: {
          "application/json": {
            data?: (components["schemas"]["301RedirectRead"])[];
            meta?: components["schemas"]["MetaPaginationObject"];
          };
        };
      };
    };
  };
  /**
   * Delete Redirects 
   * @description Deletes redirects.
   */
  DeleteRedirects: {
    parameters: {
      query: {
        /** @description List of Redirect IDs to delete explicitly. */
        "id:in": (number)[];
        /** @description Site ID provided to delete all redirects for a given Site. */
        site_id?: number;
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: {
        };
      };
    };
  };
}
