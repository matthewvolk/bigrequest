// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/shipping/products/customs-information": {
    /**
     * Get Customs Information
     * @description Get customs information for products.
     *
     * This list can be filtered to return customs information objects specific to a list of requested product_ids. This is achieved by appending the query string `?product_id:in=4,5,6` to the resource `/shipping/products/customs-information`.
     *
     * ```http
     * GET /shipping/products/customs-information?product_id:in=4,5,6
     * ```
     */
    get: operations["getCustomsInformation"];
    /**
     * Upsert Customs Information
     * @description Creates and updates product customs information.
     *
     * This is a batch operation where the creation of multiple customs information objects can be done with one `PUT` request.
     *
     * **Limits**
     * * Limit of 50 customs information objects per `PUT` request.
     */
    put: operations["updateCustomsInformation"];
    /**
     * Delete Customs Information
     * @description Deletes customs information objects for a product.
     *
     * ## Example
     *
     * This is a batch operation. The `product_id:in` query parameter is required.
     *
     * ```http
     * DELETE /shipping/products/customs-information?product_id:in=4,5,6
     * ```
     */
    delete: operations["deleteCustomsInformation"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/shipping/settings": {
    /**
     * Get Shipping Settings
     * @description Get shipping settings.
     */
    get: operations["getShippingSettings"];
    /**
     * Update Shipping Settings
     * @description Updates shipping settings.
     */
    put: operations["updateShippingSettings"];
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
    /**
     * customsInformationRequest
     * @description Data about the customs information object.
     */
    customsInformation_request: {
      /**
       * Format: int32
       * @description The product ID to which the customs information data applies.
       * @example 77
       */
      product_id: number;
      /**
       * @description The country of manufacture, production, or growth represented in ISO 3166-1 alpha-2 format.
       * @example US
       */
      country_of_origin: string;
      /**
       * @description Description that provides information for customs to identify and verify the shapes, physical characteristics, and packaging of each shipment.
       * @example Baseball caps
       */
      commodity_description: string;
      /**
       * @description Flag to determine whether this product will be shipped internationally.
       * @example true
       * @enum {boolean}
       */
      international_shipping: true | false;
      hs_codes: components["schemas"]["harmonizedSystemCodes"];
    };
    shippingSettings: {
      checkout?: {
        /**
         * @description The approach for displaying the list of countries at checkout.
         * @example DISPLAY_ALL_COUNTRIES
         * @enum {string}
         */
        country_list_strategy?: "DISPLAY_ALL_COUNTRIES" | "DISPLAY_ONLY_SHIPPABLE_COUNTRIES";
        /**
         * @description Message shown to the shopper during checkout when their order does not meet the merchant's shipping criteria.
         * @example Unfortunately, one or more items in your cart can't be shipped to your location. Please choose a different delivery address.
         */
        out_of_zone_delivery_message?: string;
      };
    };
    /**
     * customsInformation
     * @description Data about the customs information object.
     */
    customsInformation: {
      /**
       * Format: int32
       * @description The ID of the product which the customs information data will apply to.
       * @example 77
       */
      product_id?: number;
      /**
       * @description The country of manufacture, production, or growth represented in ISO 3166-1 alpha-2 format.
       * @example US
       */
      country_of_origin?: string;
      /**
       * @description Description that provides information for customs to identify and verify shapes physical characteristics and packaging of each shipment.
       * @example Baseball caps
       */
      commodity_description?: string;
      /**
       * @description Flag to determine whether this product will be shipped internationally.
       * @example true
       * @enum {boolean}
       */
      international_shipping?: true | false;
      hs_codes?: components["schemas"]["harmonizedSystemCodes"];
      /**
       * Format: date-time
       * @description Date and time when the customs information was created.
       * @example "2022-09-21T14:15:00.000Z"
       */
      created_at?: string;
      /**
       * Format: date-time
       * @description Date and time when the customs information was last updated.
       * @example "2022-09-21T14:15:00.000Z"
       */
      updated_at?: string;
    };
    /**
     * harmonizedSystemCodes
     * @description Key-value pairs that are commonly used in the following form:
     *
     * `countryISO2: '/^[0-9A-Za-z]{6,14}$/'`
     *
     * This key-value pair represents a country and the associated `hs_code` that applies to that country.
     *
     * You can also use the `ALL` key in place of an ISO2 key to specify that the `hs_code` applies to all countries. The `ALL` key can be combined with other countries in the `hs_code` object.
     * @example {
     *   "ALL": "501000",
     *   "CA": "508313",
     *   "US": "641000",
     *   "AU": "817355"
     * }
     */
    harmonizedSystemCodes: {
      [key: string]: unknown;
    };
    /**
     * metaCollection
     * @description Meta data relating to pagination.
     */
    metaCollection: {
      pagination?: {
        /**
         * @description Total number of items returned.
         * @example 3
         */
        total?: number;
        /**
         * @description Number of items returned on per page.
         * @example 1
         */
        count?: number;
        /**
         * @description Number of items to be displayed per page.
         * @example 1
         */
        per_page?: number;
        /**
         * @description Current page number.
         * @example 2
         */
        current_page?: number;
        /**
         * @description Total number of pages.
         * @example 3
         */
        total_page?: number;
        links?: {
          /**
           * @description Query string appended to the resource to return to the previous page.
           * @example ?limit=1&page=1
           */
          previous?: string;
          /**
           * @description Query string appended to the resource to proceed to the next page.
           * @example ?limit=1&page=3
           */
          next?: string;
          /**
           * @description Query string appended to the resource to show the current page.
           * @example ?limit=1&page=2
           */
          current?: string;
        };
      };
    };
    /** Error */
    error_Full: {
      [key: string]: unknown;
    };
  };
  responses: {
    /** @description If something happens during the request that causes it to fail, a 502 response will be returned. A new request should be made; however, it could fail. */
    "502_GatewayError": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description If this occurs, you should retry the request. Typically retrying the request several times will result in a successful request; however, if you are unable to successfully make a request, please check the [BigCommerce system status](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up. */
    "504_GatewayTimeout": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description Returned when permissions do not allow the operation. */
    "403_Unauthorized": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description Invalid syntax, required data missing, `content-type` header missing; Double-check request body for syntax errors and missing data; check `content-type` header. */
    "400_BadRequest": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description If the requested account resource is not found for the franchise, return a 404 Not Found. */
    "404_NotFound": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description This error occurs when missing or unacceptable data is passed for one or more fields. Please correct the values for the fields listed in the errors object. */
    "422_UnprocessableEntity": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /**
     * @description If this occurs, you should retry the request. If you are unable to successfully make a request, please check the [BigCommerce system status](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up.
     *
     * Occurs when the store is down for maintenance, is being upgraded to a new version, or is suspended for administrative or billing reasons.
     */
    "503_ServiceUnavailable": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description API credentials are missing or invalid; Double-check the `access_token` and `client_id`. */
    "401_Unauthorized": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description Request headers specify an unsupported `content-type` (or header is missing). Double-check `content-type` request header. */
    "415_Unsupported": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description When an OAuth client exceeds the [rate limit](/docs/start/best-practices#api-rate-limits) for API requests to a store. */
    "429_Too_Many_Requests": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description The resource was found, but doesnʼt support the request method. Issued when either a specific method isnʼt yet implemented on a resource, or the resource doesnʼt support the method at all. For example, a PUT request to `/orders` is invalid, but a PUT request to `/orders/{order_id}` is valid. */
    "405_Method_Not_Allowed": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description Expensive API calls or an internal server error in BigCommerce; re-attempt the request three to five times, with increasing delays of at least a minute between attempts. */
    "500_Internal_Server_Error": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
  };
  parameters: {
    /** @description Permanent ID of the BigCommerce store. */
    store_hash: string;
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
   * Get Customs Information
   * @description Get customs information for products.
   *
   * This list can be filtered to return customs information objects specific to a list of requested product_ids. This is achieved by appending the query string `?product_id:in=4,5,6` to the resource `/shipping/products/customs-information`.
   *
   * ```http
   * GET /shipping/products/customs-information?product_id:in=4,5,6
   * ```
   */
  getCustomsInformation: {
    parameters: {
      query?: {
        /** @description A comma-separated list of product IDs. For more information, see [Filtering](/docs/start/about/common-query-params). */
        "product_id:in"?: number[];
        page?: number;
        limit?: number;
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["customsInformation"][];
            meta?: components["schemas"]["metaCollection"];
          };
        };
      };
    };
  };
  /**
   * Upsert Customs Information
   * @description Creates and updates product customs information.
   *
   * This is a batch operation where the creation of multiple customs information objects can be done with one `PUT` request.
   *
   * **Limits**
   * * Limit of 50 customs information objects per `PUT` request.
   */
  updateCustomsInformation: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["customsInformation_request"][];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["customsInformation"][];
          };
        };
      };
    };
  };
  /**
   * Delete Customs Information
   * @description Deletes customs information objects for a product.
   *
   * ## Example
   *
   * This is a batch operation. The `product_id:in` query parameter is required.
   *
   * ```http
   * DELETE /shipping/products/customs-information?product_id:in=4,5,6
   * ```
   */
  deleteCustomsInformation: {
    parameters: {
      query: {
        "product_id:in": number[];
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
  /**
   * Get Shipping Settings
   * @description Get shipping settings.
   */
  getShippingSettings: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["shippingSettings"];
            meta?: Record<string, never>;
          };
        };
      };
    };
  };
  /**
   * Update Shipping Settings
   * @description Updates shipping settings.
   */
  updateShippingSettings: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["shippingSettings"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["shippingSettings"];
            meta?: Record<string, never>;
          };
        };
      };
    };
  };
}
