// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/payments/access_tokens": {
    /**
     * Create Payment Access Token 
     * @description Use this endpoint to create a payment access token. A payment access token is required to process payments with the BigCommerce API.
     * 
     * You can also generate a payment access token during checkout by using the `completeCheckout` mutation in the [GraphQL Storefront API](/api-docs/storefront/graphql/carts-and-checkout#handling-payments).
     * 
     * After the token is created, use the token to [Process a payment](/docs/rest-payments/processing#process-payment).
     * 
     * **Required Fields**
     * * order_id
     */
    post: operations["PaymentsAccessTokensPost"];
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
    /** Order */
    Order: {
      /**
       * Format: int32 
       * @description Identifier for the order
       */
      id: number;
      /**
       * @description Whether this is a recurring order. If the order is recurring this field should be set to true in order to let the payment gateway know. 
       * @default false 
       * @example false
       */
      is_recurring?: boolean;
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
   * Create Payment Access Token 
   * @description Use this endpoint to create a payment access token. A payment access token is required to process payments with the BigCommerce API.
   * 
   * You can also generate a payment access token during checkout by using the `completeCheckout` mutation in the [GraphQL Storefront API](/api-docs/storefront/graphql/carts-and-checkout#handling-payments).
   * 
   * After the token is created, use the token to [Process a payment](/docs/rest-payments/processing#process-payment).
   * 
   * **Required Fields**
   * * order_id
   */
  PaymentsAccessTokensPost: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": {
          order: components["schemas"]["Order"];
        };
      };
    };
    responses: {
      /** @description Payment access token has been successfully created. */
      201: {
        headers: {
        };
        content: {
          "application/json": {
            /** Payment Access Token */
            data?: {
              /** @description Payment access token. This token is required in the subsequent request to the [Process a payment](/docs/rest-payments/processing#process-payment) endpoint. */
              id: string;
            };
            /** @description Response metadata. */
            meta?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description Request has been rejected */
      400: {
        content: {
          "application/json": {
            /**
             * Format: int32 
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32 
             * @description Code representing the particular error
             */
            code?: number;
            errors?: {
              [key: string]: string | undefined;
            };
          };
        };
      };
      /** @description Valid authentication required */
      401: {
        content: {
          "application/json": {
            /**
             * Format: int32 
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32 
             * @description Code representing the particular error
             */
            code?: number;
            errors?: {
              [key: string]: string | undefined;
            };
          };
        };
      };
      /** @description Request has been rejected due to resource not being found */
      404: {
        content: {
          "application/json": {
            /**
             * Format: int32 
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32 
             * @description Code representing the particular error
             */
            code?: number;
            errors?: {
              [key: string]: string | undefined;
            };
          };
        };
      };
      /** @description Request has been rejected due to conflict with the current state of the target resource */
      409: {
        content: {
          "application/json": {
            /**
             * Format: int32 
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32 
             * @description Code representing the particular error
             */
            code?: number;
            errors?: {
              [key: string]: string | undefined;
            };
          };
        };
      };
      /** @description Request has been rejected due to missing or invalid data */
      422: {
        content: {
          "application/json": {
            /**
             * Format: int32 
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32 
             * @description Code representing the particular error
             */
            code?: number;
            errors?: {
              [key: string]: string | undefined;
            };
          };
        };
      };
      /** @description Internal server error */
      default: {
        content: {
          "application/json": {
            /**
             * Format: int32 
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32 
             * @description Code representing the particular error
             */
            code?: number;
            errors?: {
              [key: string]: string | undefined;
            };
          };
        };
      };
    };
  };
}
