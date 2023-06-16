/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/tax/zones": {
    /**
     * Get Tax Zones 
     * @description Retrieve a selection of tax zones when you provide a list of tax zone IDs. Otherwise, retrieve all tax zones defined on the store.
     */
    get: operations["get-tax-zones"];
    /**
     * Update Tax Zones 
     * @description Update one or more tax zones. Only the tax zone `id` field is required. Fields unspecified by the request will retain their current state.
     */
    put: operations["update-tax-zones"];
    /**
     * Create Tax Zones 
     * @description Create one or more tax zones.
     * 
     * > #### Note
     * > You cannot create a default tax zone.
     */
    post: operations["create-tax-zones"];
    /**
     * Delete Tax Zones 
     * @description Delete one or more tax zones. Deleting a tax zone removes all associated tax rates.
     * 
     * > #### Note
     * > You must specify which zone(s) to delete using the `id:in` query parameter.
     */
    delete: operations["delete-tax-zones"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/tax/rates": {
    /**
     * Get Tax Rates 
     * @description Retrieve a list of tax rates.
     */
    get: operations["get-tax-rates"];
    /**
     * Update Tax Rates 
     * @description Update one or more tax rates. Only the tax rate `id` field is required. Fields unspecified by the request will retain their current state.
     */
    put: operations["update-tax-rates"];
    /**
     * Create Tax Rates 
     * @description Create one or more tax rates. Tax rates must be associated with a `tax_zone_id`.
     */
    post: operations["create-tax-rates"];
    /**
     * Delete Tax Rates 
     * @description Delete one or more tax rates.
     * 
     * > #### Note
     * > You must specify which rate(s) to delete using the `id:in` query parameter.
     */
    delete: operations["delete-tax-rates"];
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
    Tax_Zone: {
      /** @description Tax Zone ID. Internal identifier used to get, update, or delete a specific tax zone. */
      id?: number;
      /**
       * @description The human-readable name for this tax zone. The name displays on the merchant's control panel. 
       * @example Australia
       */
      name?: string;
      /**
       * @description Indicates whether a tax zone is enabled. Tax operations are only for enabled zones. 
       * @default true
       */
      enabled?: boolean;
      /** @description Settings that describe how a store displays prices to shoppers matched with this tax zone. */
      price_display_settings?: {
        /** @description Indicates whether to show prices as tax inclusive or tax exclusive to shoppers matched with this tax zone. */
        show_inclusive?: boolean;
        /** @description Indicates whether to show both tax inclusive and tax exclusive prices when viewing product detail; for example, on product pages. This view applies to shoppers matched with this tax zone. */
        show_both_on_detail_view?: boolean;
        /** @description Indicates whether to show both tax inclusive and tax exclusive prices when viewing a list of products; for example, on category and brand pages. This view applies to shoppers matched with this tax zone. */
        show_both_on_list_view?: boolean;
      };
      /** @description Settings that describe which shoppers match this tax zone and help determine the most appropriate target for a shopper. You cannot define shopper target settings for the default tax zone because it must accommodate all shoppers who donʼt qualify for any other zone. */
      shopper_target_settings?: {
        /** @description A tax zone may target shoppers in one or more locations. */
        locations?: ({
            /**
             * @description Two-letter ISO 3166-1 country code 
             * @example AU
             */
            country_code?: string;
            /**
             * @description Three-letter ISO 3166-2 subdivision code 
             * @example [
             *   "NSW",
             *   "QLD"
             * ]
             */
            subdivision_codes?: (string)[];
            /**
             * @example [
             *   "2234",
             *   "2170"
             * ]
             */
            postal_codes?: (string)[];
          })[];
        /** @description One or more customer groups that a tax zone targets. Empty array if zone applies to all customers. */
        customer_groups?: (number)[];
      };
    };
    Tax_ZonePUT: {
      /** @description Tax Zone ID. Internal identifier used to get, update, or delete a specific tax zone. */
      id: number;
      /**
       * @description The human-readable name for this tax zone. The name displays on the merchant's control panel. 
       * @example Australia
       */
      name?: string;
      /**
       * @description Indicates whether a tax zone is enabled. Tax operations are only for enabled zones. 
       * @default true
       */
      enabled?: boolean;
      /** @description Settings that describe how a store displays prices to shoppers matched with this tax zone. */
      price_display_settings?: {
        /** @description Indicates whether to show prices as tax inclusive or tax exclusive to shoppers matched with this tax zone. */
        show_inclusive?: boolean;
        /** @description Indicates whether to show both tax inclusive and tax exclusive prices when viewing product detail; for example, on product pages. This view applies to shoppers matched with this tax zone. */
        show_both_on_detail_view?: boolean;
        /** @description Indicates whether to show both tax inclusive and tax exclusive prices when viewing a list of products; for example, on category and brand pages. This view applies to shoppers matched with this tax zone. */
        show_both_on_list_view?: boolean;
      };
      /** @description Settings that describe which shoppers match this tax zone and help determine the most appropriate target for a shopper. You cannot define shopper target settings for the default tax zone because it must accommodate all shoppers who donʼt qualify for any other zone. */
      shopper_target_settings?: {
        /** @description A tax zone may target shoppers in one or more locations. */
        locations?: ({
            /**
             * @description Two-letter ISO 3166-1 country code 
             * @example AU
             */
            country_code?: string;
            /**
             * @description Three-letter ISO 3166-2 subdivision code 
             * @example [
             *   "NSW",
             *   "QLD"
             * ]
             */
            subdivision_codes?: (string)[];
            /**
             * @example [
             *   "2234",
             *   "2170"
             * ]
             */
            postal_codes?: (string)[];
          })[];
        /** @description One or more customer groups that a tax zone targets. Empty array if zone applies to all customers. */
        customer_groups?: (number)[];
      };
    };
    Tax_ZonePOST: {
      /**
       * @description The human-readable name for this tax zone. The name displays on the merchant's control panel. 
       * @example Australia
       */
      name: string;
      /**
       * @description Indicates whether a tax zone is enabled. Tax operations are only for enabled zones. 
       * @default true
       */
      enabled?: boolean;
      /** @description Settings that describe how a store displays prices to shoppers matched with this tax zone. */
      price_display_settings?: {
        /** @description Indicates whether to show prices as tax inclusive or tax exclusive to shoppers matched with this tax zone. */
        show_inclusive: boolean;
        /**
         * @description Indicates whether to show both tax inclusive and tax exclusive prices when viewing product detail; for example, on product pages. This view applies to shoppers matched with this tax zone. 
         * @default false
         */
        show_both_on_detail_view?: boolean;
        /**
         * @description Indicates whether to show both tax inclusive and tax exclusive prices when viewing a list of products; for example, on category and brand pages. This view applies to shoppers matched with this tax zone. 
         * @default false
         */
        show_both_on_list_view?: boolean;
      };
      /** @description Settings that describe which shoppers match this tax zone and help determine the most appropriate target for a shopper. */
      shopper_target_settings?: {
        /** @description A tax zone may target shoppers in one or more locations. */
        locations: ({
            /**
             * @description Two-letter ISO 3166-1 country code 
             * @example AU
             */
            country_code?: string;
            /**
             * @description Three-letter ISO 3166-2 subdivision code 
             * @example [
             *   "NSW",
             *   "QLD"
             * ]
             */
            subdivision_codes?: (string)[];
            /**
             * @example [
             *   "2234",
             *   "2170"
             * ]
             */
            postal_codes?: (string)[];
          })[];
        /** @description One or more customer groups that a tax zone targets. Empty array if zone applies to all customers. */
        customer_groups?: (number)[];
      };
    };
    Tax_Rate: {
      /** @description Tax rates for tax classes. You must assign at least one tax rate for each tax class defined on a store. */
      class_rates?: ({
          /**
           * @description The tax rate that you apply to the items in a tax class. 
           * @example 5
           */
          rate?: number;
          /**
           * @description ID of a tax class. You must associate a tax rate with a tax class. The rate will apply to all the items in this tax class. 
           * @example 1
           */
          tax_class_id?: number;
        })[];
      /**
       * @description Indicates whether a tax rate is enabled. Tax operations are only for enabled zones. 
       * @default true
       */
      enabled?: boolean;
      /**
       * @description Tax Rate ID. Internal identifier to update and delete a specific tax rate. 
       * @example 3
       */
      id?: number;
      /**
       * @description The human-readable name for this tax zone. The name displays on the merchant control panel and to shoppers, depending on store tax settings. 
       * @example Sales Tax
       */
      name?: string;
      /**
       * @description Allows for compounding tax rates, common in certain jurisdictions. 
       * @default 1
       */
      priority?: number;
      /**
       * @description ID of an associated tax zone. You must associate a tax rate with a tax zone. 
       * @example 2
       */
      tax_zone_id?: number;
    };
    Tax_RatePUT: {
      /** @description Tax rates for tax classes. You must assign at least one tax rate for each tax class defined on a store. */
      class_rates?: ({
          /**
           * @description The tax rate that you apply to the items in a tax class. 
           * @example 5
           */
          rate?: number;
          /**
           * @description ID of a tax class. You must associate a tax rate with a tax class. The rate will apply to all the items in this tax class. 
           * @example 1
           */
          tax_class_id?: number;
        })[];
      /**
       * @description Indicates whether a tax rate is enabled. Tax operations are only for enabled zones. 
       * @default true
       */
      enabled?: boolean;
      /**
       * @description Tax Rate ID. Internal identifier to update and delete a specific tax rate. 
       * @example 3
       */
      id: number;
      /**
       * @description The human-readable name for this tax zone. The name displays on the merchant control panel and to shoppers, depending on store tax settings. 
       * @example Sales Tax
       */
      name?: string;
      /**
       * @description Allows for compounding tax rates, common in certain jurisdictions. 
       * @default 1
       */
      priority?: number;
      /**
       * @description ID of an associated tax zone. You must associate a tax rate with a tax zone. 
       * @example 2
       */
      tax_zone_id?: number;
    };
    Tax_RatePOST: {
      /** @description Tax rates for tax classes. You must assign at least one tax rate for each tax class defined on a store. */
      class_rates: ({
          /**
           * @description The tax rate that you apply to the items in a tax class. 
           * @example 5
           */
          rate: number;
          /**
           * @description ID of a tax class. You must associate a tax rate with a tax class. The rate will apply to all items in this tax class. 
           * @example 1
           */
          tax_class_id: number;
        })[];
      /**
       * @description Indicates whether a tax rate is enabled. Tax operations are only for enabled zones. 
       * @default true
       */
      enabled?: boolean;
      /**
       * @description The human-readable name for this tax zone. The name displays on the merchant control panel and to shoppers, depending on store tax settings. 
       * @example Sales Tax
       */
      name: string;
      /**
       * @description Allows for compounding tax rates, common in certain jurisdictions. 
       * @default 1
       */
      priority?: number;
      /**
       * @description ID of an associated tax zone. You must associate a tax rate with a tax zone. 
       * @example 2
       */
      tax_zone_id: number;
    };
    /** Meta */
    Meta: {
      pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
          current?: string;
        };
      };
    };
    /**
     * Response meta 
     * @description Response metadata.
     */
    MetaOpen: {
      [key: string]: unknown;
    };
  };
  responses: never;
  parameters: {
    /** @description Permanent ID of the BigCommerce store. */
    storeHash: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    "Content-Type": string;
    /** @description Filter by `id`. Use a comma-separated CSV string of IDs for multiple selections. For example, `5` or `12,34,56`. */
    idIn?: (number)[];
    /** @description Filter by tax zone `id`. Use a comma-separated CSV string of IDs for multiple tax zones. For example, `5` or `12,34,56`. */
    zoneIdIn?: (number)[];
    /** @description Filter by tax rate `id`. Use a comma-separated CSV string of IDs for multiple tax rates. For example, `5` or `12,34,56`. */
    rateIdIn?: (number)[];
    /** @description Filter by tax zone `id`. Use a comma-separated CSV string of IDs for multiple tax zones. For example, `5` or `12,34,56`. */
    taxZoneIdIn?: (number)[];
  };
  requestBodies: {
    Tax_RateArray: {
      content: {
        "application/json": (components["schemas"]["Tax_RatePUT"])[];
      };
    };
    Tax_RateArrayPOST: {
      content: {
        "application/json": (components["schemas"]["Tax_RatePOST"])[];
      };
    };
    Tax_ZoneArray: {
      content: {
        "application/json": (components["schemas"]["Tax_ZonePUT"])[];
      };
    };
    Tax_ZoneArrayPOST: {
      content: {
        "application/json": (components["schemas"]["Tax_ZonePOST"])[];
      };
    };
  };
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Tax Zones 
   * @description Retrieve a selection of tax zones when you provide a list of tax zone IDs. Otherwise, retrieve all tax zones defined on the store.
   */
  "get-tax-zones": {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["zoneIdIn"];
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
            data?: (components["schemas"]["Tax_Zone"])[];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
    };
  };
  /**
   * Update Tax Zones 
   * @description Update one or more tax zones. Only the tax zone `id` field is required. Fields unspecified by the request will retain their current state.
   */
  "update-tax-zones": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["Content-Type"];
      };
    };
    requestBody: components["requestBodies"]["Tax_ZoneArray"];
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: (components["schemas"]["Tax_Zone"])[];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
    };
  };
  /**
   * Create Tax Zones 
   * @description Create one or more tax zones.
   * 
   * > #### Note
   * > You cannot create a default tax zone.
   */
  "create-tax-zones": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["Content-Type"];
      };
    };
    requestBody: components["requestBodies"]["Tax_ZoneArrayPOST"];
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: (components["schemas"]["Tax_Zone"])[];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
    };
  };
  /**
   * Delete Tax Zones 
   * @description Delete one or more tax zones. Deleting a tax zone removes all associated tax rates.
   * 
   * > #### Note
   * > You must specify which zone(s) to delete using the `id:in` query parameter.
   */
  "delete-tax-zones": {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["zoneIdIn"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description No Content */
      204: never;
    };
  };
  /**
   * Get Tax Rates 
   * @description Retrieve a list of tax rates.
   */
  "get-tax-rates": {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["rateIdIn"];
        "tax_zone_id:in"?: components["parameters"]["taxZoneIdIn"];
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
            data?: (components["schemas"]["Tax_Rate"])[];
            meta?: components["schemas"]["Meta"];
          };
        };
      };
    };
  };
  /**
   * Update Tax Rates 
   * @description Update one or more tax rates. Only the tax rate `id` field is required. Fields unspecified by the request will retain their current state.
   */
  "update-tax-rates": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["Content-Type"];
      };
    };
    requestBody: components["requestBodies"]["Tax_RateArray"];
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: (components["schemas"]["Tax_Rate"])[];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
    };
  };
  /**
   * Create Tax Rates 
   * @description Create one or more tax rates. Tax rates must be associated with a `tax_zone_id`.
   */
  "create-tax-rates": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["Content-Type"];
      };
    };
    requestBody: components["requestBodies"]["Tax_RateArrayPOST"];
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: (components["schemas"]["Tax_Rate"])[];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
    };
  };
  /**
   * Delete Tax Rates 
   * @description Delete one or more tax rates.
   * 
   * > #### Note
   * > You must specify which rate(s) to delete using the `id:in` query parameter.
   */
  "delete-tax-rates": {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["rateIdIn"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description No Content */
      204: never;
    };
  };
}
