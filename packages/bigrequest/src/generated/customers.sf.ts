// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/customers": {
    /**
     * Create a Customer
     * @description Create a *Customer*.
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    post: operations["createACustomer"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** CustomerCreateData */
    CustomerCreateData: {
      /** @description First name of customer. */
      firstName?: string;
      /** @description Last name of customer. */
      lastName?: string;
      /** @description Email of customer. */
      email?: string;
      /** @description Password of customer. */
      password?: string;
      /** @description Indicates whether customer provided consent to receive marketing emails. */
      acceptsMarketingEmails?: boolean;
      customFields?: components["schemas"]["CustomFields"][];
    };
    /** CustomFields */
    CustomFields: {
      fieldId?: string;
      fieldValue?: string | number | string[];
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
   * Create a Customer
   * @description Create a *Customer*.
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  createACustomer: {
    /** @description Data sent the the customer endpoint when creating a customer during checkout. */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CustomerCreateData"];
      };
    };
    responses: {
      /** @description Customer successfully created. */
      204: never;
      /** @description Could not create customer. */
      400: never;
      /** @description Thereʼs already an account for the provided email. Please enter a different email address or sign in. */
      409: never;
      /** @description Missing Required Fields. */
      422: never;
      /** @description Spam Protection Failed. */
      429: never;
    };
  };
}
