// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/store/systemlogs": {
    /**
     * Get System Logs
     * @description Get system logs
     */
    get: operations["get-sites"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @description BigCommerce meta payload for collection-type responses. */
    IndexMeta: {
      pagination?: {
        /** @example 1 */
        total?: number;
        /** @example 1 */
        count?: number;
        /** @example 50 */
        per_page?: number;
        /** @example 1 */
        current_page?: number;
        /** @example 1 */
        total_pages?: number;
        links?: {
          /** @example ?page=1&limit=50 */
          previous?: string;
          /** @example ?page=1&limit=50 */
          current?: string;
          /** @example ?page=1&limit=50 */
          next?: string;
        };
      };
    };
    ErrorResponse: components["schemas"]["BaseError"] & {
      errors?: components["schemas"]["DetailedErrors"];
    };
    /** @description Error payload for the BigCommerce API. */
    BaseError: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The title of the message describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    DetailedErrors: {
      [key: string]: string;
    };
    /** SystemLog */
    SystemLog: {
      id?: number;
      type?: string;
      module?: string;
      severity?: string;
      summary?: string;
      message?: string;
      /** Format: date-time */
      date_created?: string;
    };
  };
  responses: never;
  parameters: {
  };
  requestBodies: {
  };
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get System Logs
   * @description Get system logs
   */
  "get-sites": {
    parameters: {
      query?: {
        /** @description Query parameter that lets you return the number of results displayed per page. */
        limit?: number;
        /** @description Query parameter that lets you specify the starting page in which results are returned. */
        page?: number;
        /** @description Query parameter that lets you filter the results by log type. */
        type?: "general" | "payment" | "shipping" | "tax" | "notification" | "emailintegration" | "ordersettings" | "design";
        /** @description Query parameter that lets you exclude a log type from the results. */
        "type:not"?: string;
        /** @description Query parameter that lets you filter the results by module. */
        module?: "export+only" | "email+message" | "theme+download" | "order+status" | "optimized+checkout";
        /** @description Query parameter that lets you exclude a log module from the results. */
        "module:not"?: string;
        /** @description Query parameter that lets you filter results by severity level, as an integer. The following values are possible: Success = 1, Notice = 2, Warning = 3, Error = 4 */
        severity?: 1 | 2 | 3 | 4;
        /** @description Query parameter that lets you filter by minimum severity, as an integer. */
        "severity:min"?: number;
        /** @description Query parameter that lets you filter by maximum severity, as an integer. */
        "severity:max"?: number;
        /** @description Query parameter that lets you filter by a list of log IDs, as a CSV. For example ?id:in=3,4,6 */
        "id:in"?: string;
        /** @description Query parameter that lets you filter by the minimum date created in [Unix time](https://www.unixtimestamp.com/), for example, `?date_created:min=1657688400`. Returns logs created after this date. */
        "date_created:min"?: string;
        /** @description Query parameter that lets you filter by the maximum date created in [Unix time](https://www.unixtimestamp.com/), for example, `?date_created:min=1658379600`. Returns logs created before this date. */
        "date_created:max"?: string;
      };
    };
    responses: {
      /** @description The request completed successfully. */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["SystemLog"][];
            meta?: components["schemas"]["IndexMeta"];
          };
        };
      };
    };
  };
}
