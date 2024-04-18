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
    get: operations["getRedirects"];
    /**
     * Upsert Redirects
     * @description Upserts new redirect data across all storefronts.
     */
    put: operations["upsertRedirects"];
    /**
     * Delete Redirects
     * @description Deletes redirects.
     */
    delete: operations["deleteRedirects"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/storefront/redirects/imex/jobs": {
    /**
     * Get Redirect Import-Export Jobs
     * @description Returns a collection of the storeʼs 301 redirects across all sites.
     */
    get: operations["getRedirectImportExportJobs"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/storefront/redirects/imex/export": {
    /**
     * Create Redirects Export Job
     * @description Creates a new 301 Redirects export job.
     */
    post: operations["createRedirectExportJob"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/storefront/redirects/imex/import": {
    /**
     * Create Redirects Import Job
     * @description Creates a new 301 Redirects import job.
     */
    post: operations["createRedirectImportJob"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/storefront/redirects/imex/export/{uuid}/events": {
    /**
     * Open Redirect Export Event Stream
     * @description Opens an event stream to receive live updates from an export job.
     */
    get: operations["getRedirectExportEvents"];
    parameters: {
      header: {
        Accept: components["parameters"]["AcceptEventStream"];
      };
      path: {
        uuid: components["parameters"]["ImportExportIdParam"];
      };
    };
  };
  "/storefront/redirects/imex/import/{uuid}/events": {
    /**
     * Open Redirect Import Event Stream
     * @description Opens an event stream to receive live updates from an import job.
     */
    get: operations["getRedirectImportEvents"];
    parameters: {
      header: {
        Accept: components["parameters"]["AcceptEventStream"];
      };
      path: {
        uuid: components["parameters"]["ImportExportIdParam"];
      };
    };
  };
  "/storefront/redirects/imex/export/{uuid}/download": {
    /**
     * Download Redirect Export
     * @description Downloads the CSV file containing the results of an export job.
     */
    get: operations["getRedirectExportDownload"];
    parameters: {
      header: {
        "Content-Type": components["parameters"]["ContentTypeCsv"];
      };
      path: {
        uuid: components["parameters"]["ImportExportIdParam"];
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
    /** @enum {string} */
    ImportExportJobType: "import" | "export";
    /** @enum {string} */
    ImportExportJobStatus: "new" | "working" | "complete" | "aborted" | "failed";
    ImportErrors: {
        /** @description The row in the import CSV where the error occurred. */
        row?: number;
        message?: string;
      }[];
    /** @description Full detail of a Redirect Import-Export job. */
    "301RedirectImportExportJobRead": {
      /**
       * Format: uuid
       * @description The Import-Export job ID.
       */
      id?: string;
      type?: components["schemas"]["ImportExportJobType"];
      status?: components["schemas"]["ImportExportJobStatus"];
      /** @description The number of items that were successfully imported or exported. */
      completed_items?: number;
      /** @description The number of items that were not successfully imported or exported. */
      failed_items?: number;
      /** @description The number of items in the import or export job. */
      total_items?: number;
      errors?: components["schemas"]["ImportErrors"];
      /**
       * Format: date-time
       * @description The date-time that the import-export job was created, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
       * @example 2022-01-04T04:15:50.000Z
       */
      created_at?: string;
      /**
       * Format: date-time
       * @description The date-time that the import-export job was completed, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
       * @example 2022-01-04T04:15:50.000Z
       */
      completed_at?: string;
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
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    AcceptEventStream: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentTypeFormData: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentTypeCsv: string;
    /** @description The import-export job identifier. */
    ImportExportIdParam: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Redirects
   * @description Returns a collection of the store's 301 redirects across all sites.
   */
  getRedirects: {
    parameters: {
      query?: {
        /** @description Filters items by site ID. */
        site_id?: number;
        /** @description Filters items by redirect ID. Also accepts comma-separated values to filter for multiple redirects. */
        "id:in"?: number[];
        /** @description Controls the number of items to return per page. */
        limit?: number;
        /** @description Specifies the page number in a limited (paginated) list of items. Used to paginate large collections. */
        page?: number;
        /** @description Field name to sort by. Since redirect IDs increment when new redirects are added, you can sort by ID to return results in redirect create date order. */
        sort?: "from_path" | "type" | "site_id" | "id";
        /** @description Sort direction. Acceptable values are `asc`, `desc`. */
        direction?: "asc" | "desc";
        /** @description Indicates whether to include redirect sub-resources. Only `to_url` is supported. */
        include?: "to_url"[];
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
            data?: components["schemas"]["301RedirectRead"][];
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
  upsertRedirects: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["301RedirectUpsert"][];
      };
    };
    responses: {
      /** @description Created */
      201: {
        content: {
          "application/json": {
            data?: components["schemas"]["301RedirectRead"][];
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
  deleteRedirects: {
    parameters: {
      query: {
        /** @description A comma-separated list of redirect IDs to delete explicitly. */
        "id:in": number[];
        /** @description To delete all redirects for a given site, provide the site ID. */
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
  /**
   * Get Redirect Import-Export Jobs
   * @description Returns a collection of the storeʼs 301 redirects across all sites.
   */
  getRedirectImportExportJobs: {
    parameters: {
      query?: {
        /** @description Filters results by redirect import-export job ID. */
        id?: string;
        /** @description Filters results by the type of the redirect import-export job. */
        type?: components["schemas"]["ImportExportJobType"];
        /** @description Filters results by the status of the Redirect Import-Export job. */
        status?: components["schemas"]["ImportExportJobStatus"];
        /** @description Determines the number of items returned per page. The default is 10 items per page. */
        limit?: number;
        /** @description Specifies the page number to return when the number of items returned exceeds the page limit. Used to paginate large collections. */
        page?: number;
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["301RedirectImportExportJobRead"][];
            meta?: components["schemas"]["MetaPaginationObject"];
          };
        };
      };
    };
  };
  /**
   * Create Redirects Export Job
   * @description Creates a new 301 Redirects export job.
   */
  createRedirectExportJob: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /**
           * @description The site ID for which you wish to export redirects. If no site ID is provided, the request exports all redirects for all sites.
           * @default null
           */
          site_id?: number | null;
          /**
           * @description A list of the redirect IDs you wish to export. If no redirect IDs are provided, the request exports all redirects for the given site selection.
           * @default []
           */
          redirect_ids?: number[];
          /**
           * @description If true, the exported CSV will contain an additional read-only column containing the target URL for dynamic redirects.
           * @default false
           */
          include_dynamic_target_urls?: boolean;
        };
      };
    };
    responses: {
      /** @description Created */
      201: {
        content: {
          "application/json": {
            /** @example ab1c2de3-f4gh-5678-i90j-klm12n345o67 */
            id?: string;
          };
        };
      };
      /** @description No Redirects in your store meet the criteria in your request. */
      409: {
        content: never;
      };
      /** @description Your store already has an active Redirects import or export job running. */
      429: {
        content: never;
      };
    };
  };
  /**
   * Create Redirects Import Job
   * @description Creates a new 301 Redirects import job.
   */
  createRedirectImportJob: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentTypeFormData"];
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": {
          /**
           * Format: binary
           * @description A CSV file containing a list of Redirects to be imported.
           *
           * The headers must be defined as follows:
           *
           * `Domain,Old Path,Manual URL/Path,Dynamic Target Type,Dynamic Target ID`
           *
           * Not every line will have a value for every column.
           * @example Domain,Old Path,Manual URL/Path,Dynamic Target Type,Dynamic Target ID
           * store.example.com,/old-path,/new-manual-path,,
           * store.example.com,/old-product,,Product,12
           * store.example.com,/old-brand,,Brand,34
           * store.example.com,/old-category,,Category,56
           * store.example.com,/old-page,,Page,78
           * store.example.com,/old-post,,Post,90
           */
          import_file: string;
        };
      };
    };
    responses: {
      /** @description Created */
      201: {
        content: {
          "application/json": {
            /** @example ab1c2de3-f4gh-5678-i90j-klm12n345o67 */
            id?: string;
          };
        };
      };
      /** @description The provided form data was invalid or the file is not a CSV. */
      400: {
        content: never;
      };
      /** @description The provided file is too large. The maximum file size is 20MB. */
      413: {
        content: never;
      };
      /** @description Your store already has an active Redirects import or export job running. */
      429: {
        content: never;
      };
    };
  };
  /**
   * Open Redirect Export Event Stream
   * @description Opens an event stream to receive live updates from an export job.
   */
  getRedirectExportEvents: {
    parameters: {
      header: {
        Accept: components["parameters"]["AcceptEventStream"];
      };
      path: {
        uuid: components["parameters"]["ImportExportIdParam"];
      };
    };
    responses: {
      /** @description Stream of export events. The `data` attribute is stringified JSON. */
      200: {
        content: {
          "text/event-stream": string;
        };
      };
      /** @description The provided export job ID does not exist. */
      404: {
        content: never;
      };
    };
  };
  /**
   * Open Redirect Import Event Stream
   * @description Opens an event stream to receive live updates from an import job.
   */
  getRedirectImportEvents: {
    parameters: {
      header: {
        Accept: components["parameters"]["AcceptEventStream"];
      };
      path: {
        uuid: components["parameters"]["ImportExportIdParam"];
      };
    };
    responses: {
      /** @description Stream of import events. The `data` attribute is stringified JSON. */
      200: {
        content: {
          "text/event-stream": string;
        };
      };
      /** @description The provided import job ID does not exist. */
      404: {
        content: never;
      };
    };
  };
  /**
   * Download Redirect Export
   * @description Downloads the CSV file containing the results of an export job.
   */
  getRedirectExportDownload: {
    parameters: {
      header: {
        "Content-Type": components["parameters"]["ContentTypeCsv"];
      };
      path: {
        uuid: components["parameters"]["ImportExportIdParam"];
      };
    };
    responses: {
      /** @description The exported Redirects in CSV format */
      200: {
        content: {
          "text/csv": string;
        };
      };
      /** @description The requested export download does not exist. */
      404: {
        content: never;
      };
    };
  };
}
