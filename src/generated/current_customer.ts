// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/customer/current.jwt": {
    /**
     * Get Current Customer
     * @description Identify logged-in customers securely via JavaScript.
     *
     * > #### Note
     * > The Send a Test Request feature is not currently supported for this endpoint.
     */
    get: operations["getCurrentCustomer"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: never;
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Current Customer
   * @description Identify logged-in customers securely via JavaScript.
   *
   * > #### Note
   * > The Send a Test Request feature is not currently supported for this endpoint.
   */
  getCurrentCustomer: {
    parameters: {
      query: {
        /** @description This is your applicationʼs client ID, which is obtained during application registration in the Developer Portal. */
        app_client_id: string;
      };
    };
    responses: {
      default: {
        content: {
          "application/json": {
            customer?: {
              /**
               * @description Unique numeric ID of the customer.
               * @example 4927
               */
              id?: number;
              /**
               * @description Email address of the customer.
               * @example john.doe@gmail.com
               */
              email?: string;
              /**
               * @description The group to which the customer belongs.
               * @example "6"
               */
              group_id?: string;
            };
            /**
             * @description Indicates the token’s issuer.
             * @example "bc/apps"
             */
            iss?: string;
            /**
             * @description The subject of the JWT - same as `store_hash`.
             * @example "abc123"
             */
            sub?: string;
            /**
             * @description Time when the token was issued. This is a numeric value indicating the number of seconds since the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).
             * @example 1480831863
             */
            iat?: number;
            /**
             * @description Time when the token expires. The token usually expires after 15 minutes. This is a numeric value indicating the number of seconds since the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).
             * @example 1480832763
             */
            exp?: number;
            /**
             * @description Version of the Current Customer JWT
             * @example 1
             */
            version?: number;
            /**
             * @description The "aud" (audience) claim identifies the recipients that the JWT is intended for. This should match the *App Client ID* and the `application_id`.
             * @example "6sv16tfx3j5gsopm42ss5dd67g2srvq"
             */
            aud?: string;
            /**
             * @description The client ID created when the token was generated.
             * @example "6sv16tasdgr2b5hs5dd67g2srvq"
             */
            application_id?: string;
            /** @description The store’s unique identifier on the BigCommerce platform. */
            store_hash?: string;
            /**
             * @description Must contain the string “current_customer”.
             * @example "current_customer"
             */
            operation?: string;
          };
        };
      };
    };
  };
}
