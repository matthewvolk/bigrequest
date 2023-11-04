// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/content/scripts": {
    /**
     * Get All Scripts
     * @description Returns a list of *Scripts*. Optional parameters can be passed in.
     *
     * This operation will only return scripts generated by the API key and password used to create the script originally.
     */
    get: operations["getScripts"];
    /**
     * Create a Script
     * @description Creates a *Script*.
     *
     * **Required Fields**
     * * name
     *
     * **Read Only Fields**
     * * uuid
     *
     * **Limits**
     * * 50 scripts per channel.
     *
     * **Notes**
     * * If the `kind` is `src`:
     *   * Specify the `src` property.
     *   * Optionally, you can supply a `load_method`.
     *   * Do not specify the `html` field.
     * * If the `kind` is `script_tag`:
     *   * Specify the `html` property.
     *   * Do not specify the `src` field.
     * * Each app can have 10 scripts installed.
     * * Multiple scripts can be created [per call](/docs/integrations/scripts#notes).
     */
    post: operations["createScript"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/content/scripts/{uuid}": {
    /**
     * Get a Script
     * @description Returns a single *Script*.
     */
    get: operations["getScript"];
    /**
     * Update a Script
     * @description Updates a *Script*.
     */
    put: operations["updateScript"];
    /**
     * Delete a Script
     * @description Deletes a *Script*.
     */
    delete: operations["deleteScript"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        uuid: components["parameters"]["ScriptUUID"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Collection Meta
     * @description Data about the response, including pagination and collection totals.
     */
    CollectionMeta: {
      /**
       * Pagination
       * @description Data about the response, including pagination and collection totals.
       */
      pagination?: {
        /**
         * @description Total number of items in the result set.
         *
         * @example 36
         */
        total?: number;
        /**
         * @description Total number of items in the collection response.
         *
         * @example 36
         */
        count?: number;
        /**
         * @description The amount of items returned in the collection per page, controlled by the limit parameter.
         *
         * @example 50
         */
        per_page?: number;
        /**
         * @description The page you are currently on within the collection.
         *
         * @example 1
         */
        current_page?: number;
        /**
         * @description The total number of pages in the collection.
         *
         * @example 1
         */
        total_pages?: number;
        /** @description Pagination links for the previous and next parts of the whole collection. */
        links?: {
          /** @description Link to the previous page returned in the response. */
          previous?: string;
          /**
           * @description Link to the current page returned in the response.
           *
           * @example ?page=1&limit=50
           */
          current?: string;
          /** @description Link to the next page returned in the response. */
          next?: string;
        };
      };
    };
    /**
     * Pagination
     * @description Data about the response, including pagination and collection totals.
     */
    Pagination: {
      /**
       * @description Total number of items in the result set.
       *
       * @example 36
       */
      total?: number;
      /**
       * @description Total number of items in the collection response.
       *
       * @example 36
       */
      count?: number;
      /**
       * @description The amount of items returned in the collection per page, controlled by the limit parameter.
       *
       * @example 50
       */
      per_page?: number;
      /**
       * @description The page you are currently on within the collection.
       *
       * @example 1
       */
      current_page?: number;
      /**
       * @description The total number of pages in the collection.
       *
       * @example 1
       */
      total_pages?: number;
      /** @description Pagination links for the previous and next parts of the whole collection. */
      links?: {
        /** @description Link to the previous page returned in the response. */
        previous?: string;
        /**
         * @description Link to the current page returned in the response.
         *
         * @example ?page=1&limit=50
         */
        current?: string;
        /** @description Link to the next page returned in the response. */
        next?: string;
      };
    };
    /**
     * Meta
     * @description Response metadata.
     */
    Meta: {
      [key: string]: unknown;
    };
    /** Error Response */
    ErrorResponse: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    } & {
      /** DetailedErrors */
      errors?: {
        [key: string]: unknown;
      };
    };
    /**
     * Base Error
     * @description Error payload for the BigCommerce API.
     */
    BaseError: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    /** DetailedErrors */
    DetailedErrors: {
      [key: string]: unknown;
    };
    /**
     * Not Found
     * @description Error payload for the BigCommerce API.
     */
    NotFound: {
      /** @description 404 HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    /**
     * No Content
     * @description No-content response for the BigCommerce API.
     */
    NoContent: {
      /**
       * @description 204 HTTP status code.
       *
       * @example 204
       */
      status?: number;
      /** @description The error title describing the situation. */
      title?: string;
      type?: string;
      instance?: string;
    };
    /** script_Full */
    script_Full: {
      /** @description The user-friendly name. */
      name?: string;
      /**
       * Format: uuid
       * @description The primary identifier.
       */
      uuid?: string;
      /**
       * Format: date-time
       * @description The date on which this object was initially created.
       */
      date_created?: string;
      /**
       * Format: date-time
       * @description The date on which this object was last updated.
       */
      date_modified?: string;
    } & components["schemas"]["script_Base"];
    /** script_Post */
    script_Post: {
      /** @description The user-friendly name. */
      name: string;
    } & components["schemas"]["script_Base"];
    script_Put: {
      /** @description The user-friendly name. */
      name?: string;
    } & components["schemas"]["script_Base"];
    /**
     * script_Response
     * @description For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
     */
    script_Response: {
      data?: components["schemas"]["script_Full"];
      meta?: components["schemas"]["Meta"];
    };
    /**
     * script_responseCollection
     * @description For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
     */
    script_responseCollection: {
      data?: components["schemas"]["script_Full"][];
      meta?: components["schemas"]["CollectionMeta"];
    };
    /**
     * script_Base
     * @description Script properties common to `post`, `put`, and `get` requests.
     */
    script_Base: {
      /** @description The user-friendly description. */
      description?: string;
      /** @description An HTML string containing exactly one `script` tag. Present when the script `kind` is `script_tag`. */
      html?: string;
      /**
       * @description The `src` attribute of the script to load. Only present if `kind` is `src`.
       * @example https://code.jquery.com/jquery-3.2.1.min.js
       */
      src?: string;
      /** @description It will enable automatic cleanup of the script when the single click app is uninstalled or OAuth token is revoked. */
      auto_uninstall?: boolean;
      /**
       * @description The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
       * @enum {string}
       */
      load_method?: "default" | "async" | "defer";
      /**
       * @description Where on the page to place the script. Values are `head` or `footer`.
       * @enum {string}
       */
      location?: "head" | "footer";
      /**
       * @description Which set of pages the script should load on.
       *
       * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
       *
       * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
       *
       *      `storefront`: All pages that are not `checkout` or `order_confirmation`.
       *
       *
       * For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
       * @enum {string}
       */
      visibility?: "storefront" | "all_pages" | "checkout" | "order_confirmation";
      /**
       * @description What type of script this is.
       *
       * `src` - For scripts that use the src URL. A `script` tag will be generated with its `src` attribute set to the value of the `src` property. When your app provides a path to the script, we can optimize and add the script automatically for you. The load_method can vary.
       *
       * `script_tag` - For scripts that include a raw HTML `script` tag-enclosed block of JavaScript. The value of `html` is added directly to the page. The load_method must be default.
       * @example src
       * @enum {string}
       */
      kind?: "src" | "script_tag";
      /** @description The client id of the API user that created this script, or blank if created by other means. */
      api_client_id?: string;
      /**
       * @description Consent category for GDPR and CCPA compliance. Defaults to `unknown` when not specified. Scripts with an `unknown` consent category do not display on stores with customer cookie consent banners enabled.
       * @example essential
       * @enum {string}
       */
      consent_category?: "essential" | "functional" | "analytics" | "targeting";
      /** @description Whether the script is enabled or disabled on the storefront. */
      enabled?: boolean;
      /** @example 1 */
      channel_id?: number;
    };
  };
  responses: never;
  parameters: {
    /** @description The identifier for a specific widget template. */
    FilterWidgetTemplateUUIDParam?: string;
    /** @description The kind of widget template. */
    FilterWidgetTemplateKindParam?: string;
    /** @description The identifier for a specific placement. */
    PlacementUUID: string;
    /** @description The identifier for a specific widget. */
    WidgetUUID: string;
    /** @description The identifier for a specific script. */
    ScriptUUID: string;
    /** @description The identifier for a specific widget. */
    FilterWidgetUUIDParam?: string;
    /** @description Fields to include, in a comma-separated list. The ID and the specified fields will be returned. */
    FilterIncludeFieldsParam?: string;
    /** @description Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. */
    FilterExcludeFieldsParam?: string;
    /** @description Specifies the page number in a limited (paginated) list of products. */
    PageParam?: number;
    /** @description Controls the number of items per page in a limited (paginated) list of products. */
    LimitParam?: number;
    /** @description Scripts field name to sort by. */
    ScriptsSortKeyParam?: "name" | "description" | "date_created" | "date_modified";
    /** @description Sort direction. Acceptable values are: `asc`, `desc`. */
    DirectionParam?: "asc" | "desc";
    /** @description The identifier for a specific template. */
    TemplateUUID: string;
    /** @description The template file, for example: `pages/home`. */
    RequiredTemplateFile: string;
    /** @description The query string associated with a widget's name and description. */
    QueryWidgetsParam?: string;
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
   * Get All Scripts
   * @description Returns a list of *Scripts*. Optional parameters can be passed in.
   *
   * This operation will only return scripts generated by the API key and password used to create the script originally.
   */
  getScripts: {
    parameters: {
      query?: {
        /** @description Specifies the page number in a limited (paginated) list of products. */
        page?: number;
        /** @description Controls the number of items per page in a limited (paginated) list of products. */
        limit?: number;
        /** @description Field name to sort the scripts by. Note: Since `id` increments when new scripts are added, you can use that field to sort by script create date. */
        sort?: "name" | "description" | "date_created" | "date_modified";
        /** @description Sort direction. Acceptable values are: `asc`, `desc`. */
        direction?: "asc" | "desc";
        /** @description Filters list of scripts by the associated channel_id. */
        "channel_id:in"?: unknown[];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["script_Full"][];
            meta?: components["schemas"]["CollectionMeta"];
          };
        };
      };
      /** @description This is the result of missing required fields, or of invalid data. See the response for more details. */
      422: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
  /**
   * Create a Script
   * @description Creates a *Script*.
   *
   * **Required Fields**
   * * name
   *
   * **Read Only Fields**
   * * uuid
   *
   * **Limits**
   * * 50 scripts per channel.
   *
   * **Notes**
   * * If the `kind` is `src`:
   *   * Specify the `src` property.
   *   * Optionally, you can supply a `load_method`.
   *   * Do not specify the `html` field.
   * * If the `kind` is `script_tag`:
   *   * Specify the `html` property.
   *   * Do not specify the `src` field.
   * * Each app can have 10 scripts installed.
   * * Multiple scripts can be created [per call](/docs/integrations/scripts#notes).
   */
  createScript: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["script_Post"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["script_Response"];
        };
      };
      /** @description This is the result of missing required fields, or of invalid data. See the response for more details. */
      422: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
  /**
   * Get a Script
   * @description Returns a single *Script*.
   */
  getScript: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        uuid: components["parameters"]["ScriptUUID"];
      };
    };
    responses: {
      /** @description Success */
      200: {
        content: {
          "application/json": components["schemas"]["script_Response"];
        };
      };
      /** @description The resource was not found. */
      404: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description This is the result of missing required fields, or of invalid data. See the response for more details. */
      422: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
  /**
   * Update a Script
   * @description Updates a *Script*.
   */
  updateScript: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        uuid: components["parameters"]["ScriptUUID"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["script_Put"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["script_Response"];
        };
      };
      /** @description The resource was not found. */
      404: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description This is the result of missing required fields, or of invalid data. See the response for more details. */
      422: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
  /**
   * Delete a Script
   * @description Deletes a *Script*.
   */
  deleteScript: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        uuid: components["parameters"]["ScriptUUID"];
      };
    };
    responses: {
      204: {
        content: {
          "application/json": components["schemas"]["NoContent"];
        };
      };
      /** @description The resource was not found. */
      404: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description This is the result of missing required fields, or of invalid data. See the response for more details. */
      422: {
        content: {
          "application/json": {
            /** @description The HTTP status code. */
            status?: number;
            /** @description The error title describing the particular error. */
            title?: string;
            type?: string;
            instance?: string;
          } & {
            /** DetailedErrors */
            errors?: {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
}
