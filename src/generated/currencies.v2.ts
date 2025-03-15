// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/currencies": {
    /**
     * Get All Currencies
     * @description Returns a list of all store *Currency*.
     */
    get: operations["getCurrencies"];
    /**
     * Create a Currency
     * @description Creates *Currency*.
     *
     * **Required Fields**
     * * name
     * * currency_code
     * * currency_exchange_rate
     * * token_location
     * * token
     * * decimal_token
     * * thousands_token
     * * decimal_places
     *
     * **Read-Only Fields**
     * * id
     * * last_updated
     *
     *
     * The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. To change the storeʼs default currency in the BigCommerce control panel, please see [Managing Currencies (Help Center)](https://support.bigcommerce.com/s/article/Managing-Currencies-Beta).
     */
    post: operations["createCurrency"];
    /**
     * Delete All Currencies
     * @description Deletes all non-default store currencies.
     */
    delete: operations["deleteCurrencies"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/currencies/{id}": {
    /**
     * Get a Currency
     * @description Returns a single *Currency*.
     */
    get: operations["getCurrency"];
    /**
     * Update a Currency
     * @description Updates a *Currency*.
     *
     * **Read-Only Fields**
     *
     * * id
     * * last_updated
     * * currency_code
     *
     *
     * The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden.
     */
    put: operations["updateCurrency"];
    /**
     * Delete a Currency
     * @description Deletes a *Currency*.
     *
     * If a currencyʼs `is_default` property is set to true, this currency cannot be deleted.
     */
    delete: operations["deleteCurrency"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        id: components["parameters"]["CurrencyIdPath"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * currency_Post
     * @description Currency Object
     * @example {
     *   "is_default": false,
     *   "country_iso2": "EU",
     *   "currency_code": "EUR",
     *   "currency_exchange_rate": "0.849",
     *   "auto_update": true,
     *   "token_location": "left",
     *   "token": "€",
     *   "decimal_token": ".",
     *   "thousands_token": ",",
     *   "decimal_places": 2,
     *   "name": "Euro",
     *   "enabled": false
     * }
     */
    currency_Post: {
      /**
       * @description Specifies the store’s default currency display format. For write operations, only true value is accepted. When set to true, it cannot be unset, only overridden.
       * @example false
       */
      is_default?: boolean;
      /**
       * @description 2-letter ISO Alpha-2 code for this currency’s country.
       * @example EU
       */
      country_iso2?: string;
      /**
       * @description 3-letter ISO 4217 code for this currency.
       * @example EUR
       */
      currency_code: string;
      /**
       * @description Amount of this currency that is equivalent to one U.S. dollar.(Float, Float as String, Integer)
       * @example 0.849
       */
      currency_exchange_rate: string;
      /**
       * @description Specifies whether to use the Open Exchange Rates service to update the currency conversion. A value of false specifies a static conversion value. auto_update only applies to non-transactional currencies.
       * @example true
       */
      auto_update?: boolean;
      /**
       * @description Specifies whether this currency’s symbol appears to the “left” or “right” of the numeric amount.
       * @example left
       */
      token_location: string;
      /**
       * @description Symbol for this currency.
       * @example €
       */
      token: string;
      /**
       * @description Symbol used as the decimal separator in this currency.
       * @example .
       */
      decimal_token: string;
      /**
       * @description Symbol used as the thousands separator in this currency.
       * @example ,
       */
      thousands_token: string;
      /**
       * @description Number of decimal places to show for this currency.
       * @example 2
       */
      decimal_places: number;
      /**
       * @description Name of the currency.
       * @example Euro
       */
      name: string;
      /**
       * @description If the currency is active on the store.
       * @example false
       */
      enabled?: boolean;
      /**
       * @description Indicates if the currency is set as transactional or not. False means display only currency
       * @example false
       */
      is_transactional?: boolean;
    };
    /**
     * currency_Put
     * @description Currency Object
     * @example {
     *   "currency_exchange_rate": "0.849",
     *   "token_location": "left",
     *   "token": "€",
     *   "decimal_token": ".",
     *   "thousands_token": ",",
     *   "decimal_places": 2,
     *   "name": "Euro"
     * }
     */
    currency_Put: {
      /**
       * @description Specifies the store’s default currency display format. For write operations, only true value is accepted. When set to true, it cannot be unset, only overridden.
       * @example false
       */
      is_default?: boolean;
      /**
       * @description 2-letter ISO Alpha-2 code for this currency’s country.
       * @example EU
       */
      country_iso2?: string;
      /**
       * @description Amount of this currency that is equivalent to one U.S. dollar.(Float, Float as String, Integer)
       * @example 0.849
       */
      currency_exchange_rate?: string;
      /**
       * @description Specifies whether to use the Open Exchange Rates service to update the currency conversion. A value of false specifies a static conversion value. auto_update only applies to non-transactional currencies.
       * @example true
       */
      auto_update?: boolean;
      /**
       * @description Specifies whether this currency’s symbol appears to the “left” or “right” of the numeric amount.
       * @example left
       */
      token_location?: string;
      /**
       * @description Symbol for this currency.
       * @example €
       */
      token?: string;
      /**
       * @description Symbol used as the decimal separator in this currency.
       * @example .
       */
      decimal_token?: string;
      /**
       * @description Symbol used as the thousands separator in this currency.
       * @example ,
       */
      thousands_token?: string;
      /**
       * @description Number of decimal places to show for this currency.
       * @example 2
       */
      decimal_places?: number;
      /**
       * @description Name of the currency.
       * @example Euro
       */
      name?: string;
      /**
       * @description If the currency is active on the store.
       * @example false
       */
      enabled?: boolean;
      /**
       * @description Indicates if the currency is set as transactional or not. False means display only currency
       * @example false
       */
      is_transactional?: boolean;
    };
    /**
     * currency_Base
     * @description Currency Object
     * @example {
     *   "id": 2,
     *   "is_default": false,
     *   "last_updated": "Tue, 12 Jun 2018 14:41:56 +0000\"",
     *   "country_iso2": "EU",
     *   "currency_code": "EUR",
     *   "currency_exchange_rate": "0.849",
     *   "auto_update": true,
     *   "token_location": "left",
     *   "token": "€",
     *   "decimal_token": ".",
     *   "thousands_token": ",",
     *   "decimal_places": 2,
     *   "name": "Euro",
     *   "enabled": false
     * }
     */
    currency_Base: {
      /**
       * @description Specifies the store’s default currency display format. For write operations, only true value is accepted. When set to true, it cannot be unset, only overridden.
       * @example false
       */
      is_default?: boolean;
      /**
       * @description 2-letter ISO Alpha-2 code for this currency’s country.
       * @example EU
       */
      country_iso2?: string;
      /**
       * @description Default 3-letter ISO 4217 code for this currency.
       * @example [
       *   "EU"
       * ]
       */
      default_for_country_codes?: string[];
      /**
       * @description 3-letter ISO 4217 code for this currency.
       * @example EUR
       */
      currency_code?: string;
      /**
       * @description Amount of this currency that is equivalent to one U.S. dollar.(Float, Float as String, Integer)
       * @example 0.849
       */
      currency_exchange_rate?: string;
      /**
       * @description Specifies whether to use the Open Exchange Rates service to update the currency conversion. A value of false specifies a static conversion value. auto_update only applies to non-transactional currencies.
       * @example true
       */
      auto_update?: boolean;
      /**
       * @description Specifies whether this currency’s symbol appears to the “left” or “right” of the numeric amount.
       * @example left
       */
      token_location?: string;
      /**
       * @description Symbol for this currency.
       * @example €
       */
      token?: string;
      /**
       * @description Symbol used as the decimal separator in this currency.
       * @example .
       */
      decimal_token?: string;
      /**
       * @description Symbol used as the thousands separator in this currency.
       * @example ,
       */
      thousands_token?: string;
      /**
       * @description Number of decimal places to show for this currency.
       * @example 2
       */
      decimal_places?: number;
      /**
       * @description Name of the currency.
       * @example Euro
       */
      name?: string;
      /**
       * @description If the currency is active on the store.
       * @example false
       */
      enabled?: boolean;
      /**
       * @description Indicates if the currency is set as transactional or not. False means display only currency
       * @example true
       */
      is_transactional?: boolean;
      /**
       * @description Default currency name
       * @example false
       */
      use_default_name?: boolean;
    };
    /** currency_Full */
    currency_Full: components["schemas"]["currency_Base"] & {
      /**
       * @description ID of the currency. Read only.
       * @example 2
       */
      id?: number;
      /**
       * Format: date-time
       * @description Date the currency was last updated, created or modified.
       */
      last_updated?: string;
    };
  };
  responses: {
    currencyCollection_Resp: {
      content: {
        "application/json": components["schemas"]["currency_Full"][];
      };
    };
    currency_Resp: {
      content: {
        "application/json": components["schemas"]["currency_Full"];
      };
    };
  };
  parameters: {
    StoreHash: string;
    /** @description The ID of the subject currency. */
    CurrencyIdPath: string;
    /** @description Specifies the page number in a limited (paginated) list of currencies. */
    PageNumberQuery?: number;
    /** @description Controls the number of items per page in a limited (paginated) list of currencies. */
    LimitQuery?: number;
    Accept: string;
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
   * Get All Currencies
   * @description Returns a list of all store *Currency*.
   */
  getCurrencies: {
    parameters: {
      query?: {
        page?: components["parameters"]["PageNumberQuery"];
        limit?: components["parameters"]["LimitQuery"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["currency_Full"][];
        };
      };
    };
  };
  /**
   * Create a Currency
   * @description Creates *Currency*.
   *
   * **Required Fields**
   * * name
   * * currency_code
   * * currency_exchange_rate
   * * token_location
   * * token
   * * decimal_token
   * * thousands_token
   * * decimal_places
   *
   * **Read-Only Fields**
   * * id
   * * last_updated
   *
   *
   * The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden. To change the storeʼs default currency in the BigCommerce control panel, please see [Managing Currencies (Help Center)](https://support.bigcommerce.com/s/article/Managing-Currencies-Beta).
   */
  createCurrency: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["currency_Post"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["currency_Full"];
        };
      };
    };
  };
  /**
   * Delete All Currencies
   * @description Deletes all non-default store currencies.
   */
  deleteCurrencies: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      204: {
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
    };
  };
  /**
   * Get a Currency
   * @description Returns a single *Currency*.
   */
  getCurrency: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        id: components["parameters"]["CurrencyIdPath"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["currency_Full"];
        };
      };
    };
  };
  /**
   * Update a Currency
   * @description Updates a *Currency*.
   *
   * **Read-Only Fields**
   *
   * * id
   * * last_updated
   * * currency_code
   *
   *
   * The `is_default` property can only be set to true. The value of `is_default` cannot be unset, only overridden.
   */
  updateCurrency: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        id: components["parameters"]["CurrencyIdPath"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["currency_Put"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["currency_Full"];
        };
      };
    };
  };
  /**
   * Delete a Currency
   * @description Deletes a *Currency*.
   *
   * If a currencyʼs `is_default` property is set to true, this currency cannot be deleted.
   */
  deleteCurrency: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        id: components["parameters"]["CurrencyIdPath"];
      };
    };
    responses: {
      204: {
        content: {
          "application/json": {
            [key: string]: unknown;
          };
        };
      };
    };
  };
}
