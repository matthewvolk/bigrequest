// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/tax/settings": {
    /**
     * Get Tax Settings
     * @description Retrieves global-level tax settings.
     */
    get: operations["get-tax-settings"];
    /**
     * Update Tax Settings
     * @description Updates global-level tax settings.
     */
    put: operations["set-tax-settings"];
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
    Tax_Settings: {
      /** @description Whether prices entered on this store include a tax component or not. */
      tax_entered_with_prices?: boolean;
      /** @description Settings that describe how prices display at the global level. */
      price_display_settings?: {
        /** @description Whether to show prices as tax inclusive or tax exclusive in the BigCommerce control panel. */
        show_inclusive_in_control_panel?: boolean;
        /**
         * @description Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopperʼs tax zone for price display on invoices.
         * @default ZONE
         * @enum {string}
         */
        invoice_price_display_strategy?: "ZONE" | "INCLUSIVE" | "EXCLUSIVE";
      };
      /**
       * @description Describes the fallback behavior that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until they achieve a successful result.
       * @default FIXED
       * @enum {string}
       */
      fallback_strategy?: "FIXED" | "BASIC" | "DISABLE";
      /**
       * @description This setting applies only if a merchant enters tax-inclusive prices. When enabled, the store subtracts the itemʼs store tax rate before calculating tax using the shopperʼs tax zone. The tax-exclusive amount will be the same across all tax zones. When disabled, the tax-inclusive price remains the same across all tax zones; only the tax amount will vary based on the shopperʼs location. The tax-exclusive amount may vary among tax zones. These calculations are relevant for tax pricing and tax quotations that use basic tax.
       * @default true
       */
      should_subtract_store_tax?: boolean;
    };
    Tax_Settings_Req: {
      /** @description Whether prices entered on this store include a tax component or not. */
      tax_entered_with_prices?: boolean;
      /** @description Settings that describe how prices display at the global level. */
      price_display_settings?: {
        /** @description Whether to show prices as tax inclusive or tax exclusive in the BigCommerce control panel. */
        show_inclusive_in_control_panel?: boolean;
        /**
         * @description Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopperʼs tax zone for price display on invoices.
         * @enum {string}
         */
        invoice_price_display_strategy?: "ZONE" | "INCLUSIVE" | "EXCLUSIVE";
      };
      /**
       * @description Decribes the fallback behaviour that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until a successful result can be achieved.
       * @enum {string}
       */
      fallback_strategy?: "FIXED" | "BASIC" | "DISABLE";
      /**
       * @description This setting applies only if a merchant enters tax-inclusive prices. When enabled, the store subtracts the itemʼs store tax rate before calculating tax using the shopperʼs tax zone. The tax-exclusive amount will be the same across all tax zones. When disabled, the tax-inclusive price remains the same across all tax zones; only the tax amount will vary based on the shopperʼs location. The tax-exclusive amount may vary among tax zones. These calculations are relevant for tax pricing and tax quotations that use basic tax.
       * @default true
       */
      should_subtract_store_tax?: boolean;
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
   * Get Tax Settings
   * @description Retrieves global-level tax settings.
   */
  "get-tax-settings": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Tax_Settings"];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
    };
  };
  /**
   * Update Tax Settings
   * @description Updates global-level tax settings.
   */
  "set-tax-settings": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Tax_Settings_Req"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Tax_Settings"];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
      /** @description The request body does not meet the specification. */
      422: never;
    };
  };
}
