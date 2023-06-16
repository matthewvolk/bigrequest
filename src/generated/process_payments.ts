/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/payments": {
    /**
     * Process Payments 
     * @description Process payments for an order. See [Payment Processing](/api-docs/store-management/payments-api-overview) for more information.
     */
    post: operations["PaymentsPost"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Card */
    Card: {
      /**
       * @description Type to classify this payment instrument (required) 
       * @default card 
       * @example card
       */
      type?: string;
      /** @description Cardholderʼs full name (required) */
      cardholder_name?: string;
      /** @description Credit card number (required) */
      number?: string;
      /**
       * Format: int32 
       * @description Expiry month of this card (required)
       */
      expiry_month?: number;
      /**
       * Format: int32 
       * @description Expiry year of this card (required)
       */
      expiry_year?: number;
      /** @description Verification value of this card (CVV) */
      verification_value?: string;
      /**
       * Format: int32 
       * @description Issue month of this card
       */
      issue_month?: number;
      /**
       * Format: int32 
       * @description Issue year of this card
       */
      issue_year?: number;
      /**
       * Format: int32 
       * @description Issue number of this card
       */
      issue_number?: number;
    };
    /** Stored Card */
    StoredCard: {
      /**
       * @description Type to classify this payment instrument (required) 
       * @default stored_card 
       * @example stored_card
       */
      type?: string;
      /** @description Identifier representing this stored card (required) */
      token?: string;
      /** @description Verification value of this card (CVV) */
      verification_value?: string;
    };
    /** StoredPayPalAccount */
    StoredPayPalAccount: {
      /**
       * @description Type to classify this payment instrument (required) 
       * @enum {string}
       */
      type?: "stored_paypal_account";
      /** @description Identifier representing this stored PayPal account (required) */
      token?: string;
    };
    /** GiftCertificate */
    GiftCertificate: {
      /** @example gift_certificate */
      type?: string;
      /** @example ABC-DEF-GXX */
      gift_certificate_code?: string;
    };
    /** StoreCredit */
    StoreCredit: {
      /** @example store_credit */
      type?: string;
    };
  };
  responses: never;
  parameters: {
    /** @description This required value must be `application/vnd.bc.v1+json`. */
    AcceptPaymentResponse: "application/vnd.bc.v1+json";
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
   * Process Payments 
   * @description Process payments for an order. See [Payment Processing](/api-docs/store-management/payments-api-overview) for more information.
   */
  PaymentsPost: {
    parameters: {
      header: {
        Accept: components["parameters"]["AcceptPaymentResponse"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": {
          /** Payment */
          payment: {
            instrument: components["schemas"]["Card"] | components["schemas"]["StoredCard"] | components["schemas"]["StoredPayPalAccount"] | components["schemas"]["GiftCertificate"] | components["schemas"]["StoreCredit"];
            /** @description Identifier for payment method that will be used for this payment and `id` from the Get Accepted Payment Methods API */
            payment_method_id: string;
            /** @description To use `save_instrument`, configure the payment gateway to accept stored cards. */
            save_instrument?: boolean;
          };
        };
      };
    };
    responses: {
      /** @description Payment has been successfully processed */
      202: {
        content: {
          "application/json": {
            /** @description Identifier for this transaction */
            id?: string;
            /**
             * Transaction Type 
             * @description Transaction type for this payment 
             * @example authorization 
             * @enum {string}
             */
            transaction_type?: "authorization" | "purchase";
            /**
             * Status 
             * @description Status to indicate a success response 
             * @enum {string}
             */
            status?: "success" | "pending";
          };
        };
      };
      /** @description Payment request has been rejected due to malformed request */
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
      /** @description Payment request has been rejected due to missing, invalid data or declined by payment provider */
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
