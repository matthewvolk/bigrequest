// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/store": {
    /**
     * Get Store Information
     * @description Returns metadata about the global settings for a store. Some of these values are independently configurable on a per-storefront or per-channel basis. For channel overrides, see [Store Settings](/docs/rest-management/settings).
     */
    get: operations["getStoreInformation"];
  };
  "/time": {
    /**
     * Get System Timestamp
     * @description Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
     */
    get: operations["getSystemTimestamp"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Store Information */
    StoreInformation: {
      /**
       * @description The store hash, a unique store identifier.
       * @example store_hash
       */
      id?: string;
      /**
       * Format: uuid
       * @description The UUID of the account to which the store belongs.
       */
      account_uuid?: string;
      /**
       * @description Primary domain name.
       * @example your-store-url.com
       */
      domain?: string;
      /**
       * @description Store’s current HTTPS URL.
       * @example https://your-store-url.com
       */
      secure_url?: string;
      /**
       * @description The secure hostname of the control panel.
       * @example https://store-abc123.mybigcommerce.com
       */
      control_panel_base_url?: string;
      /**
       * @description The status of the store.
       * @example live
       */
      status?: string;
      /**
       * @description Store’s name.
       * @example BigCommerce
       */
      name?: string;
      /**
       * @description Primary contact’s first name (as defined during the store sign-up process).
       * @example Jane
       */
      first_name?: string;
      /**
       * @description Primary contact’s last name (as defined during the store sign-up process).
       * @example Doe
       */
      last_name?: string;
      /**
       * @description Display address.
       * @example BigCommerce
       */
      address?: string;
      /**
       * @description Country where the store is located (as defined during the store sign-up process).
       * @example United States
       */
      country?: string;
      /**
       * @description Two-letter ISO 3166-1 country code
       * @example AU
       */
      country_code?: string;
      /** @description Display phone number. */
      phone?: string;
      /**
       * @description Email address of the store administrator/owner.
       * @example janedoes@example.com
       */
      admin_email?: string;
      /**
       * @description Email address for orders and fulfillment.
       * @example orders@example.com
       */
      order_email?: string;
      /** @description The URL of the favicon image associated with the website. This should be a valid URL pointing to an `.ico` or other supported icon format file. */
      favicon_url?: string;
      timezone?: components["schemas"]["Timezone"];
      /**
       * @description Default language code.
       * @example en
       */
      language?: string;
      /**
       * @description Default currency code.
       * @example USD
       */
      currency?: string;
      /**
       * @description Default symbol for values in the currency.
       * @example $
       */
      currency_symbol?: string;
      /**
       * @description Default decimal separator for values in the currency.
       * @example .
       */
      decimal_separator?: string;
      /**
       * @description Default thousands separator for values in the currency.
       * @example ,
       */
      thousands_separator?: string;
      /**
       * @description Default decimal places for values in the currency.
       * @example 2
       */
      decimal_places?: number;
      /**
       * @description Default position of the currency symbol (left or right).
       * @example left
       */
      currency_symbol_location?: string;
      /**
       * @description Default weight units (metric or imperial).
       * @example Ounces
       */
      weight_units?: string;
      /**
       * @description Default dimension units (metric or imperial).
       * @example Inches
       */
      dimension_units?: string;
      /**
       * @description The number of decimal places.
       * @example 2
       */
      dimension_decimal_places?: number;
      /**
       * @description The symbol that separates the whole numbers from the decimal points.
       * @example .
       */
      dimension_decimal_token?: string;
      /** @description The symbol used to denote thousands. */
      dimension_thousands_token?: string;
      /**
       * @description Name of the BigCommerce plan to which this store is subscribed.
       * @example Standard
       */
      plan_name?: string;
      /**
       * @description Level of the BigCommerce plan to which this store is subscribed.
       * @example Standard
       */
      plan_level?: string;
      /**
       * @description Whether the payment plan associated with the store is still in the trial phase.
       * @example false
       */
      plan_is_trial?: boolean;
      /**
       * @description Industry, or vertical category, in which the business operates. (As selected from drop-down list during the store sign-up process.)
       * @example Technology
       */
      industry?: string;
      /** @description Either an object describing the logo image, or an empty array. */
      logo?: {
        /** @example https://cdn8.bigcommerce.com/s-{store_hash}/product_images/screen_shot_2018-05-15_at_12.22.26_pm__05547_1529512135.png */
        url?: string;
      } | unknown[];
      /**
       * @description A Boolean value that indicates whether or not prices are entered with tax.
       * @example false
       */
      is_price_entered_with_tax?: boolean;
      /** @description The numeric ID of the store. This is a different unique ID than the store hash. */
      store_id?: number;
      /**
       * @description The ID of the default channel. The ID of the first hosted storefront created on the store is `1`.
       * @default 1
       * @example 1
       */
      default_channel_id?: number;
      /**
       * @description The BigCommerce ID of the website associated with the default storefront.
       * @example 1000
       */
      default_site_id?: number;
      active_comparison_modules?: unknown[];
      /** @description Describes some aspects of the storeʼs tech stack and configuration settings that affect the features available for the store to use. */
      features?: {
        /**
         * @description Indicates whether a store is using a Stencil theme.
         * @default true
         * @example true
         */
        stencil_enabled?: boolean;
        /**
         * @description Indicates whether there is site-wide https.
         * @example false
         */
        sitewidehttps_enabled?: boolean;
        /** @description The ID of the Facebook by Meta catalog. If there is none, this endpoint returns an empty string. */
        facebook_catalog_id?: string;
        /**
         * @description What type of checkout is enabled on the store. Possible values returned are optimized, single (one page), single_customizable (one page for developers), klarna.
         * @example optimized
         * @enum {string}
         */
        checkout_type?: "optimized" | "single" | "single_customizable" | "klarna";
        /** @example false */
        wishlists_enabled?: boolean;
        /**
         * @description Describes whether you can use the [GraphQL Storefront API](/graphql-storefront/reference) on this store.
         * @default true
         * @example true
         */
        graphql_storefront_api_enabled?: boolean;
        /**
         * @description Indicates whether the store is tracking the values of the cookie and privacy consent settings that the shopper consented to and configured.
         * @example true
         */
        shopper_consent_tracking_enabled?: boolean;
        /**
         * @description Indicates whether the storeʼs plan provides the possibility of using more than one storefront or sales channel. Internally, this value indicates whether the store has the MSF feature flag enabled.
         * @default false
         * @example true
         */
        multi_storefront_enabled?: boolean;
        storefront_limits?: {
          /**
           * @description Describes the number of storefronts active on the store. If `multi_storefront_enabled` is `false`, this value is `1`.
           * @default 1
           * @example 3
           */
          active?: number;
          /**
           * @description Describes the total number of storefronts associated with the store, including both active and inactive storefronts. The default varies based on store plan.
           * @default 1
           * @example 15
           */
          total_including_inactive?: number;
        };
      };
    };
    /** Time Zone */
    Timezone: {
      /**
       * @description A string identifying the time zone, in the format `Continent/City`.
       * @example America/Chicago
       */
      name?: string;
      /**
       * @description A negative or positive number, identifying the offset from UTC/GMT, in seconds, during winter/standard time.
       * @example -21600
       */
      raw_offset?: number;
      /**
       * @description A negative or positive number, identifying the offset from UTC/GMT, in seconds, during summer/daylight saving time.
       * @example -18000
       */
      dst_offset?: number;
      /**
       * @description A boolean indicating whether this time zone observes daylight saving time.
       * @example true
       */
      dst_correction?: boolean;
      date_format?: components["schemas"]["DateFormat"];
    };
    /** Date Format */
    DateFormat: {
      /**
       * @description A string that defines dates’ display format, in the pattern `M jS Y`.
       * @example M jS Y
       */
      display?: string;
      /**
       * @description A string that defines the CSV export format for orders, customers, and products, in the pattern `M jS Y`.
       * @example M jS Y
       */
      export?: string;
      /**
       * @description A string that defines dates’ extended-display format, in the pattern `M jS Y @ g:i A`.
       * @example M jS Y @ g:i A
       */
      extended_display?: string;
    };
    /**
     * timeStamp_Full
     * @description Store Time in Unix format.
     */
    timeStamp_Full: {
      /** Format: int64 */
      time?: number;
    };
  };
  responses: never;
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. The default is application/xml, but application/json is available when specified. */
    Accept: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Store Information
   * @description Returns metadata about the global settings for a store. Some of these values are independently configurable on a per-storefront or per-channel basis. For channel overrides, see [Store Settings](/docs/rest-management/settings).
   */
  getStoreInformation: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["StoreInformation"];
        };
      };
    };
  };
  /**
   * Get System Timestamp
   * @description Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
   */
  getSystemTimestamp: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["timeStamp_Full"];
        };
      };
    };
  };
}
