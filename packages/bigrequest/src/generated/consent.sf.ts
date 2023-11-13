// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/consent": {
    /**
     * Set Cookie Consent Preferences
     * @description Sets the status of a customer's consent to allow data collection by cookies and scripts according to the following consent categories:
     *
     *
     *   2. Analytics — These cookies provide statistical information on site usage so the store owner can improve the website over time.
     *   3. Functional — These cookies enable enhanced functionality, such as videos and live chat. If a shopper does not allow these, then some or all of these functions may not work properly.
     *   4. Targeting; Advertising — These cookies allow merchants to create profiles or personalize content to enhance users' shopping experience.
     *
     *
     * This endpoint only works if the cookie consent feature is enabled. It is assumed the shopper has not consented to anything until a value is explicitly set. The request body must be populated with a complete set of allowed and denied categories.
     *
     * Once set, consent preferences will be saved as a cookie for guest shoppers. Consent preferences will be persisted to a shopper's account to be used for future sessions once they have logged in. Consent preferences can also be managed using the [Update customer consent](/docs/rest-management/customers/customer-consent#update-customer-consent) endpoint.
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     */
    post: operations["postConsent"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * ConsentPreferences
     * @description List of allowed and denied consent categories. Must be populated with a complete set of allowed and denied categories.
     *
     * Configurable categories are:
     *
     * 2 - Functional
     * 3 - Analytics
     * 4 - Targeting; Advertising
     *
     * For further definition of these categories, see [Scripts API](/docs/integrations/scripts).
     */
    ConsentPreferences: {
      /** @description Explicitly allowed consent categories. Allowed values are 2, 3, 4. */
      allow: (2 | 3 | 4)[];
      /** @description Denied consent categories. Allowed values are 2, 3, 4. */
      deny: (2 | 3 | 4)[];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * Set Cookie Consent Preferences
   * @description Sets the status of a customer's consent to allow data collection by cookies and scripts according to the following consent categories:
   *
   *
   *   2. Analytics — These cookies provide statistical information on site usage so the store owner can improve the website over time.
   *   3. Functional — These cookies enable enhanced functionality, such as videos and live chat. If a shopper does not allow these, then some or all of these functions may not work properly.
   *   4. Targeting; Advertising — These cookies allow merchants to create profiles or personalize content to enhance users' shopping experience.
   *
   *
   * This endpoint only works if the cookie consent feature is enabled. It is assumed the shopper has not consented to anything until a value is explicitly set. The request body must be populated with a complete set of allowed and denied categories.
   *
   * Once set, consent preferences will be saved as a cookie for guest shoppers. Consent preferences will be persisted to a shopper's account to be used for future sessions once they have logged in. Consent preferences can also be managed using the [Update customer consent](/docs/rest-management/customers/customer-consent#update-customer-consent) endpoint.
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   */
  postConsent: {
    /** @description Data sent to the [Update customer consent](/docs/rest-management/customers/customer-consent#update-customer-consent) endpoint when creating a customer during checkout. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["ConsentPreferences"];
      };
    };
    responses: {
      /** @description Consent Settings Saved */
      200: never;
      /** @description Invalid input */
      400: never;
    };
  };
}
