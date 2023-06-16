// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/marketing/abandoned-cart-emails": {
    /**
     * Get all email templates 
     * @description An array of abandoned cart emails pertaining to a store.
     */
    get: operations["getAbandonedCartEmails"];
    /**
     * Create email template 
     * @description Create an Abandoned Cart Email template.
     */
    post: operations["createEmailTemplate"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/marketing/abandoned-cart-emails/{id}": {
    /**
     * Get an email template 
     * @description Get a single Abandoned Cart Email template.
     */
    get: operations["getAbandonedCartEmailTemplateId"];
    /**
     * Update an email template 
     * @description Update an email template.
     */
    put: operations["updateAbandonedCartEmailsId"];
    /**
     * Delete email template 
     * @description Delete Abandoned Cart Email template.
     */
    delete: operations["deleteAbandonedCartEmailTemplateId"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        /** @description ID of the Abandoned Cart Email template. */
        id: number;
      };
    };
  };
  "/marketing/abandoned-cart-emails/default": {
    /**
     * Get default email template 
     * @description Return default Abandoned Cart Email template.
     */
    get: operations["GetDefaultAbandonedCartEmailTemplate"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/marketing/abandoned-cart-emails/settings": {
    /**
     * Get email template settings 
     * @description Read Abandoned Cart Email Template settings.
     */
    get: operations["GetAbandonedCartEmailTemplateSettings"];
    /**
     * Update email template settings 
     * @description Update Abandoned Cart Email template settings.
     */
    put: operations["updateEmailTemplateSettings"];
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
    /** SaveError */
    SaveError: {
      status?: number;
      title?: string;
      type?: string;
      errors?: (string)[];
    };
    /** BaseError */
    BaseError: {
      status?: string;
      type?: string;
    };
    /** AbandonedCartEmailModel */
    AbandonedCartEmailModel: {
      notify_at_minutes?: components["schemas"]["NotifyAtMinutes"];
      coupon_code?: components["schemas"]["CouponCode"];
      template?: components["schemas"]["Template"];
    };
    /** AbandonedCartSettings */
    AbandonedCartSettings: {
      /** @description Boolean value that specifies the inheritance state. */
      use_global: boolean;
    };
    AbandondedCartEmailPayload: {
      is_active?: boolean;
      coupon_code?: components["schemas"]["CouponCode"];
      notify_at_minutes?: components["schemas"]["NotifyAtMinutes"];
      template?: components["schemas"]["Template"];
    };
    /** Template */
    Template: {
      /** @example 'Complete your purchase at {{ store.name }}' */
      subject: string;
      /** @example 'Complete your purchase <a href="{{ notification.checkout_link }}">{{notification.checkout.link}}' */
      body: string;
      translation?: (components["schemas"]["TranslationDefinition"])[];
    };
    /** TranslationDefinition */
    TranslationDefinition: {
      /**
       * @description Locale code for this language, such as 'en', 'en-us', 'fr-ca'. 
       * @example en
       */
      locale: string;
      /** @description Language keys for the template. User-defined. Should match any language keys used in the template. */
      keys: string;
      additionalProperties?: string;
    };
    /**
     * NotifyAtMinutes 
     * @description Describes when this email will be sent, in minutes. Only supports certain intervals described in the enum. 
     * @example 60 
     * @enum {integer}
     */
    NotifyAtMinutes: 60 | 120 | 180 | 240 | 300 | 360 | 420 | 480 | 540 | 600 | 660 | 720 | 780 | 840 | 900 | 960 | 1020 | 1080 | 1140 | 1200 | 1260 | 1320 | 1380 | 1440 | 2880 | 4320 | 5760 | 7200 | 8640 | 10080 | 11520 | 12960 | 14400;
    /**
     * Coupon Code Field 
     * @example FF11-22X4
     */
    CouponCode: string;
    /** AbandondedCartEmail */
    AbandondedCartEmail: {
      /** @example 1 */
      id?: number;
      notify_at_minutes?: components["schemas"]["NotifyAtMinutes"];
      coupon_code?: components["schemas"]["CouponCode"];
      template?: components["schemas"]["Template"];
      is_active?: boolean;
      sent_num?: number;
    };
    /**
     * Response meta 
     * @description Response metadata.
     */
    metaCollection_open: {
      [key: string]: unknown;
    };
  };
  responses: never;
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
    /** @description Channel ID to use for channel-level data. */
    ChannelIdOptional?: number;
    /** @description Channel ID to use for channel-specific setting. */
    ChannelIdRequired: number;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * Get all email templates 
   * @description An array of abandoned cart emails pertaining to a store.
   */
  getAbandonedCartEmails: {
    parameters: {
      query?: {
        channel_id?: components["parameters"]["ChannelIdOptional"];
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
            data?: (components["schemas"]["AbandondedCartEmail"])[];
            meta?: components["schemas"]["metaCollection_open"];
          };
        };
      };
    };
  };
  /**
   * Create email template 
   * @description Create an Abandoned Cart Email template.
   */
  createEmailTemplate: {
    parameters: {
      query?: {
        channel_id?: components["parameters"]["ChannelIdOptional"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["AbandondedCartEmailPayload"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["AbandondedCartEmail"];
            meta?: components["schemas"]["metaCollection_open"];
          };
        };
      };
      /** @description Unprocessable Entity */
      422: {
        content: {
          "application/json": components["schemas"]["SaveError"];
        };
      };
    };
  };
  /**
   * Get an email template 
   * @description Get a single Abandoned Cart Email template.
   */
  getAbandonedCartEmailTemplateId: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        /** @description ID of the Abandoned Cart Email template. */
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["AbandondedCartEmail"];
            meta?: components["schemas"]["metaCollection_open"];
          };
        };
      };
    };
  };
  /**
   * Update an email template 
   * @description Update an email template.
   */
  updateAbandonedCartEmailsId: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        /** @description ID of the Abandoned Cart Email template. */
        id: number;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["AbandondedCartEmailPayload"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["AbandondedCartEmail"];
            meta?: components["schemas"]["metaCollection_open"];
          };
        };
      };
      /** @description Unprocessable Entity */
      422: {
        content: {
          "application/json": components["schemas"]["SaveError"];
        };
      };
    };
  };
  /**
   * Delete email template 
   * @description Delete Abandoned Cart Email template.
   */
  deleteAbandonedCartEmailTemplateId: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        /** @description ID of the Abandoned Cart Email template. */
        id: number;
      };
    };
    responses: {
      /** @description No Content */
      204: never;
    };
  };
  /**
   * Get default email template 
   * @description Return default Abandoned Cart Email template.
   */
  GetDefaultAbandonedCartEmailTemplate: {
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
            subject: string;
            body: string;
            translations: ({
                locale: string;
                keys: {
                  hello_phrase?: string;
                };
              })[];
          };
        };
      };
    };
  };
  /**
   * Get email template settings 
   * @description Read Abandoned Cart Email Template settings.
   */
  GetAbandonedCartEmailTemplateSettings: {
    parameters: {
      query: {
        channel_id: components["parameters"]["ChannelIdRequired"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["AbandonedCartSettings"];
        };
      };
    };
  };
  /**
   * Update email template settings 
   * @description Update Abandoned Cart Email template settings.
   */
  updateEmailTemplateSettings: {
    parameters: {
      query?: {
        channel_id?: components["parameters"]["ChannelIdOptional"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["AbandonedCartSettings"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["AbandonedCartSettings"];
        };
      };
    };
  };
}