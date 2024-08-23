// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/carts": {
    /**
     * Get a Cart
     * @description Returns a *Cart*.
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    get: operations["getCart"];
    /**
     * Create a Cart
     * @description Creates a *Cart*.
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    post: operations["createCart"];
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/carts/{cartId}": {
    /**
     * Delete a Cart
     * @description Deletes a *Cart*. Once a *Cart* has been deleted it can not be recovered.
     *
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    delete: operations["deleteCart"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
      };
    };
  };
  "/carts/{cartId}/items": {
    /**
     * Add Cart Line Items
     * @description Adds a line items to the *Cart*.
     *
     * > #### Notes
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     * > * To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    post: operations["addCartLineItem"];
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
      };
    };
  };
  "/carts/{cartId}/items/{itemId}": {
    /**
     * Update Cart Line Item
     * @description Updates a *Cart* line item. Updates an existing, single line item quantity and the price of custom items in a cart.
     *
     * If a modified product or variant needs to be changed or updated, you can remove and re-add the product to the cart with the correct variants using the [Delete Cart Line Item](/docs/rest-storefront/carts/cart-items#delete-cart-line-item) and the [Add Cart Line Items](/docs/rest-storefront/carts/cart-items#add-cart-line-items) endpoints. You can also use carts mutations that are part of the [GraphQL Storefront API](/docs/storefront/cart-checkout/guide/graphql-storefront).
     *
     *
     * > #### Notes
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     * > * To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    put: operations["updateCartLineItem"];
    /**
     * Delete Cart Line Item
     * @description Deletes a *Cart* line item.
     *
     * Removing the last `line_item` in the *Cart* deletes the *Cart*.
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     * > * To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    delete: operations["deleteCartLineItem"];
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
        itemId: components["parameters"]["ItemIdPath"];
      };
    };
  };
  "/carts/{cartId}/currency": {
    /**
     * Update Cart Currency
     * @description Update currency of the *Cart*.
     * Promotions and gift certificates that don't apply to the new currency will be removed from your cart.
     * You cannot update the cart currency if the draft order cart or the cart contains a manual discount.
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    post: operations["updateCartCurrency"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Response Cart Coupons */
    responseCartCoupons: ({
        /** @description The coupon code. */
        code: string;
        /**
         * @description |Type `int`|Type Name|
         * |-|-|
         * |`0`|`per_item_discount`|
         * |`1`|`percentage_discount`|
         * |`2`|`per_total_discount`|
         * |`3`|`shipping_discount`|
         * |`4`|`free_shipping`|
         * |`5`|`promotion`|
         */
        couponType?: number;
        /**
         * Format: float
         * @description The discounted amount applied within a given context.
         */
        discountedAmount?: number;
        /** @description The coupon name displayed on the storefront. */
        displayName?: string;
        /** @description The coupon ID. */
        id?: string;
      })[];
    /** responseCartDiscounts */
    responseCartDiscounts: {
        /**
         * Format: float
         * @description The discounted amount applied within a given context.
         */
        discountedAmount?: number;
        /** @description ID of the applied discount. */
        id?: string;
      }[];
    /**
     * Cart Read
     * @description Cart object used in REST Storefront API cart responses.
     */
    responseCart: {
      /**
       * Format: UUID
       * @description Cart ID, provided after creating a cart with a POST.
       */
      id?: string;
      /** @description ID of the customer to which the cart belongs. */
      customerId?: number;
      /** @description The cart's email. This is the same email that is used in the billing address */
      email?: string;
      currency?: components["schemas"]["responseCartCurrency"];
      /** @description Whether this item is taxable. */
      isTaxIncluded?: boolean;
      /** @description Cost of cart’s contents, before applying discounts. */
      baseAmount?: number;
      /**
       * Format: float
       * @description Order based discounted amount only - Coupon discounts and product based discounts are excluded.
       */
      discountAmount?: number;
      /** @description Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes (where applicable). */
      cartAmount?: number;
      coupons?: components["schemas"]["responseCartCoupons"];
      discounts?: components["schemas"]["responseCartDiscounts"];
      lineItems?: components["schemas"]["responseCartLineItems"];
      /**
       * Format: ISO-8601
       * @description Time when the cart was created.
       */
      createdTime?: string;
      /**
       * Format: ISO-8601
       * @description Time when the cart was last updated.
       */
      updatedTime?: string;
      /** @description Locale of the cart. */
      locale?: string;
      /**
       * @description The current version of the cart.
       * @example 1
       */
      version?: number;
    };
    /**
     * Create Cart Request Object
     * @description Cart object used in create cart requests.
     */
    requestCart: {
      lineItems: components["schemas"]["requestCartPostLineItem"][];
      locale?: string;
    } | {
      giftCertificates: components["schemas"]["requestLineItemGiftCertificate"][];
      locale?: string;
    } | {
      lineItems: components["schemas"]["requestCartPostLineItem"][];
      giftCertificates: components["schemas"]["requestLineItemGiftCertificate"][];
      locale?: string;
    };
    /** Gift Wrapping */
    responseCartLineItemsPhysicalItemGiftWrapping: {
      /**
       * Format: float
       * @description Gift-wrapping price per product.
       */
      amount?: number;
      message?: string;
      /** @description Name of the gift-wrapping option. */
      name?: string;
    } | null;
    /** Line Item Gift Certificate Request Data */
    requestLineItemGiftCertificate: {
      /** @description Gift-certificate amount. */
      amount: number;
      /** @description Message shown to recipient, as provided by sender. */
      message?: string;
      /** @description Name assigned to this gift-certificate line item. */
      name: string;
      /** @description Quantity of this item. */
      quantity: number;
      recipient: components["schemas"]["requestLineItemGiftCertificateRecipient"];
      sender: components["schemas"]["requestLineItemGiftCertificateSender"];
      /** @description Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`. */
      theme: string;
    };
    /**
     * Gift Wrapping Request Data
     * @description if passing null, it will remove the current gift wrapping for the item
     */
    requestPostOrPutGiftWrapping: {
      /**
       * @description Boolean value that specifies whether items whether items should be wrapped together or wrapped individually.
       * @example true
       */
      wrapTogether: boolean;
      /**
       * @description Details for the gift wrapping option selected. This can be specified for each line item or together based on wrapTogether value.
       * If wrapTogether is false, each element in the wrapDetails array determines each item's specific wrapping.
       * (e.g if this line item has 6 quantity, you can pass at maximum 6 elements for the array to spefified each one's wrapping)
       * If wrapTogether is true, we will only use 1st element in the wrapDetails array to determine what to be wrapped
       */
      wrapDetails: {
          /**
           * @description Identifier of the gift wrapping option selected.
           * @example 0
           */
          id: number;
          /**
           * @description Custom gift message.
           * @example Happy Birthday
           */
          message?: string;
        }[];
    } | null;
    /**
     * requestLineItems
     * @description Cart object used in add items requests.
     */
    LineItemsRequest: {
      lineItems: components["schemas"]["requestCartPostLineItem"][];
      /**
       * @description The expected version of the cart.
       * @example 1
       */
      version?: number;
    } | {
      giftCertificates: components["schemas"]["requestLineItemGiftCertificate"][];
      /**
       * @description The expected version of the cart.
       * @example 1
       */
      version?: number;
    } | {
      lineItems: components["schemas"]["requestCartPostLineItem"][];
      giftCertificates: components["schemas"]["requestLineItemGiftCertificate"][];
      /**
       * @description The expected version of the cart.
       * @example 1
       */
      version?: number;
    };
    /** requestLineItemPut */
    requestLineItemPut: {
      lineItem: components["schemas"]["requestCartPostLineItem"];
      /**
       * @description The expected version of the cart.
       * @example 1
       */
      version?: number;
    } | {
      giftCertificate?: components["schemas"]["requestLineItemGiftCertificate"];
      /**
       * @description The expected version of the cart.
       * @example 1
       */
      version?: number;
    } | {
      lineItem: components["schemas"]["requestCartPostLineItem"];
      giftCertificate?: components["schemas"]["requestLineItemGiftCertificate"];
      /**
       * @description The expected version of the cart.
       * @example 1
       */
      version?: number;
    };
    requestLineItemDelete: {
      /**
       * @description The expected version of the cart.
       * @example 1
       */
      version?: number;
    };
    /**
     * Currency
     * @description This will always be the same between cart and checkout.
     */
    responseCartCurrency: {
      /**
       * Format: ISO-4217
       * @description ISO-4217 currency code. (See: https://www.iso.org/iso-4217-currency-codes.html.)
       */
      code?: string;
      /** @description The number of decimal places that prices have when you use the currency. */
      decimalPlaces?: number;
      /**
       * @description The name for the currency that the merchant entered in the control panel.
       * @example US Dollar
       */
      name?: string;
      /**
       * @description The currency symbol displayed on the storefront.
       * @example $
       */
      symbol?: string;
    };
    /** Response Line Items Object */
    responseCartLineItems: {
      customItems?: components["schemas"]["responseCartLineItemsCustomItems"][];
      /** @description Array of `ItemDigital` objects. */
      digitalItems?: components["schemas"]["responseCartLineItemsDigitalItems"][];
      /** @description Array of `ItemGiftCertificate` objects. */
      giftCertificates?: components["schemas"]["responseCartLineItemsGiftCertificates"][];
      /** @description Array of `ItemPhysical` objects. */
      physicalItems?: components["schemas"]["responseCartLineItemsItemsPhysicalItemsItems"][];
    };
    /**
     * Item Custom
     * @description **Read Only**
     *
     * This will return in the Cart Response if the Cart was created using the [REST Management API](/docs/rest-management/carts). A custom item can only be added to a cart using the REST Management API.
     */
    responseCartLineItemsCustomItems: {
      extendedListPrice?: number;
      /**
       * @description ID of the custom item
       * @example f1f3a531-fbcf-439b-bac1-40d5ae5c2bff
       */
      id?: string;
      /**
       * @description Price of the item. With or without tax depending on your stores set up.
       * @example 10
       */
      listPrice?: number;
      /**
       * @description Name of the custom item.
       * @example Custom Item Name
       */
      name?: string;
      /** @example 1 */
      quantity?: number;
      /**
       * @description SKU of the custom item.
       * @example SM-456
       */
      sku?: string;
    };
    /** Item Digital */
    responseCartLineItemsDigitalItems: components["schemas"]["responseCartLineItemsDigitalItemsAllOf0"];
    /** Base Item */
    responseCartLineItemsDigitalItemsAllOf0: {
      /** @description The list of selected options for this product. */
      options?: components["schemas"]["responseCartLineItemsDigitalItemsAllOf0OptionsItems"][];
      /** @description The products brand */
      brand?: string;
      /** @description The total value of all coupons applied to this item. */
      couponAmount?: number;
      /**
       * Format: float
       * @description The total value of all discounts applied to this item (excluding coupon).
       */
      discountAmount?: number;
      /** @description List of discounts applied to this item, as an array of AppliedDiscount objects. */
      discounts?: components["schemas"]["responseCartLineItemsDigitalItemsAllOf0DiscountsItems"][];
      /** @description Item's list price multiplied by the quantity. */
      extendedListPrice?: number;
      /** @description Item's sale price multiplied by the quantity. */
      extendedSalePrice?: number;
      /**
       * @description The line-item ID.
       * @example 4
       */
      id?: string;
      /**
       * Format: uri
       * @description URL of an image of this item, accessible on the internet.
       */
      imageUrl?: string;
      /** @description Whether or not you can change or remove the item from the cart. Items that are immutable include those added automatically by promotions. */
      isMutable?: boolean;
      /** @description Whether the item is taxable. */
      isTaxable?: boolean;
      /** @description The net item price before discounts and coupons. BigCommerce derives an item’s list price from the product default price or, if applicable, the sale price configured in the admin panel. */
      listPrice?: number;
      /** @description An item’s original price is the same as the product default price in the admin panel. */
      originalPrice?: number;
      /** @description The item's product name. */
      name?: string;
      /**
       * @description The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate.
       * @example 6
       */
      parentId?: string;
      /** @description ID of the product. */
      productId?: number;
      /** @description Quantity of this item. */
      quantity: number;
      /** @description Item's price after all discounts are applied. (The final price before tax calculation.) */
      salePrice?: number;
      /** @description SKU of the variant. */
      sku?: string;
      /**
       * @description The type of line item.
       * @enum {string}
       */
      type?: "digital";
      /**
       * Format: uri
       * @description The product URL.
       */
      url?: string;
      /**
       * @description ID of the variant.
       * @example 7
       */
      variantId?: number;
    };
    /** Applied Discount */
    responseCartLineItemsDigitalItemsAllOf0DiscountsItems: {
      /**
       * Format: float
       * @description The discounted amount applied within a given context.
       */
      discountedAmount?: number;
      /** @description ID of the applied discount. */
      id?: number;
    };
    /** Product Option */
    responseCartLineItemsDigitalItemsAllOf0OptionsItems: {
      /** @description The product option name. For example, Color or Size */
      name?: string;
      /**
       * @description The product option identifier. It is the same as the `optionId` used in the request.
       * @example 125
       */
      nameId?: number;
      /** @description The product option value. For example, Red or Medium */
      value?: string;
      /**
       * @description The product option value identifier. It is the same as the `optionValue` used in the request.
       * @example 127
       */
      valueId?: number;
    };
    /** Item Gift Certificate */
    responseCartLineItemsGiftCertificates: {
      /** @description Value must be between 1.00 and 1,000.00 in the storeʼs default currency. */
      amount: number;
      /** @description ID of this gift certificate. */
      id?: string;
      /** @description Whether or not the gift certificate is taxable. */
      taxable?: boolean;
      /** @description Message that will be sent to the gift certificate's recipient. Limited to 200 characters. */
      message?: string;
      /** @description GiftCertificate-provided name that will appear in the control panel. */
      name?: string;
      recipient: components["schemas"]["responseCartLineItemsGiftCertificatesRecipient"];
      sender: components["schemas"]["responseCartLineItemsGiftCertificatesSender"];
      /** @description Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`. */
      theme: string;
      /**
       * @description The type of line item.
       * @enum {string}
       */
      type?: "giftCertificate";
    };
    /** Contact Entity */
    responseCartLineItemsGiftCertificatesRecipient: {
      /**
       * Format: email
       * @description Contact's email address.
       */
      email?: string;
      /** @description Contact's name. */
      name?: string;
    };
    /** Contact Entity */
    responseCartLineItemsGiftCertificatesSender: {
      /**
       * Format: email
       * @description Contact's email address.
       */
      email?: string;
      /** @description Contact's name. */
      name?: string;
    };
    /** Item Physical */
    responseCartLineItemsItemsPhysicalItemsItems: components["schemas"]["responseCartBaseItem"] & components["schemas"]["responseCartLineItemsItemsPhysicalItemsItemsAllOf1"];
    /** Base Item */
    responseCartBaseItem: {
      /** @description The list of selected options for this product. */
      options?: components["schemas"]["responseCartLineItemsItemsPhysicalItemsItemsAllOf0OptionsItems"][];
      /** @description The products brand */
      brand?: string;
      /** @description The total value of all coupons applied to this item. */
      couponAmount?: number;
      /**
       * Format: float
       * @description The total value of all discounts applied to this item (excluding coupon).
       */
      discountAmount?: number;
      discounts?: components["schemas"]["responseCartDiscounts"];
      /** @description Item's list price multiplied by the quantity. */
      extendedListPrice?: number;
      /** @description Item's sale price multiplied by the quantity. */
      extendedSalePrice?: number;
      /**
       * @description The line-item ID.
       * @example 4
       */
      id?: string;
      /**
       * Format: uri
       * @description URL of an image of this item, accessible on the internet.
       */
      imageUrl?: string;
      /** @description Whether or not you can change or remove the item from the cart. Items that are immutable include those added automatically by promotions. */
      isMutable?: boolean;
      /** @description Whether the item is taxable. */
      isTaxable?: boolean;
      /** @description The net item price before discounts and coupons. BigCommerce derives an item’s list price from the product default price or, if applicable, the sale price configured in the admin panel. */
      listPrice?: number;
      /** @description An item’s original price is the same as the product default price in the admin panel. */
      originalPrice?: number;
      /** @description The item's product name. */
      name?: string;
      /**
       * @description The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate.
       * @example 6
       */
      parentId?: number;
      /** @description ID of the product. */
      productId?: number;
      /** @description Quantity of this item. */
      quantity: number;
      /** @description Item's price after all discounts are applied. (The final price before tax calculation.) */
      salePrice?: number;
      /** @description SKU of the variant. */
      sku?: string;
      /**
       * @description The type of line item.
       * @enum {string}
       */
      type?: "physical";
      /**
       * Format: uri
       * @description The product URL.
       */
      url?: string;
      /**
       * @description ID of the variant.
       * @example 7
       */
      variantId?: number;
    };
    /** Product Option */
    responseCartLineItemsItemsPhysicalItemsItemsAllOf0OptionsItems: {
      /** @description The product option name. For example, Color or Size */
      name?: string;
      /**
       * @description The product option identifier. It is the same as the `optionId` used in the request.
       * @example 125
       */
      nameId?: number;
      /** @description The product option value. For example, Red or Medium */
      value?: string;
      /**
       * @description The product option value identifier. It is the same as the `optionValue` used in the request.
       * @example 127
       */
      valueId?: number;
    };
    responseCartLineItemsItemsPhysicalItemsItemsAllOf1: {
      giftWrapping?: components["schemas"]["responseCartLineItemsPhysicalItemGiftWrapping"];
      /** @description Whether this item requires shipping to a physical address. */
      isShippingRequired?: boolean;
    };
    /** Line Item Request Data */
    requestCartPostLineItem: ({
      /** @description ID of the product. */
      productId: number;
      optionSelections?: ({
          /**
           * @description Modifier option ID.
           * @example 2
           */
          optionId?: number;
          /** @description Modifier option value. */
          optionValue?: string | number;
        })[];
      /** @description Quantity of this item. */
      quantity: number;
      giftWrapping?: components["schemas"]["requestPostOrPutGiftWrapping"];
    }) | ({
      /** @description ID of the product. */
      productId: number;
      /** @description Quantity of this item. */
      quantity: number;
      /** @description ID of the variant. */
      variantId: number;
      optionSelections?: ({
          /**
           * @description Modifier option ID.
           * @example 2
           */
          optionId?: number;
          /** @description Modifier option value. */
          optionValue?: string | number;
        })[];
      giftWrapping?: components["schemas"]["requestPostOrPutGiftWrapping"];
    });
    /** Contact Entity */
    requestLineItemGiftCertificateRecipient: {
      /**
       * Format: email
       * @description Contact's email address.
       */
      email?: string;
      /** @description Contact's name. */
      name?: string;
    };
    /** Contact Entity */
    requestLineItemGiftCertificateSender: {
      /**
       * Format: email
       * @description Contact's email address.
       */
      email?: string;
      /** @description Contact's name. */
      name?: string;
    };
  };
  responses: {
    /** @description Post Carts Response */
    postCarts: {
      content: {
        "application/json": components["schemas"]["responseCart"];
      };
    };
    postCartsItems: {
      content: {
        "application/json": components["schemas"]["responseCart"];
      };
    };
    putCartsItems: {
      content: {
        "application/json": components["schemas"]["responseCart"];
      };
    };
    getCarts: {
      content: {
        "application/json": components["schemas"]["responseCart"][];
      };
    };
    /** @description NOTE: Discounted line items are re-evaluated on cart actions and may be automatically added back to your cart with a new line item ID to satisfy promotional requirements. */
    deleteCartsItems: {
      content: {
        "application/json": components["schemas"]["responseCart"];
      };
    };
    /** @description Cart conflict */
    CartConflictErrorResponse: {
      content: {
        "application/json": {
          status?: number;
          title?: string;
          type?: string;
        };
      };
    };
  };
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
    /** @description This cartʼs unique ID. */
    CartIdPath: string;
    /** @description The ID of the subject item. */
    ItemIdPath: string;
    /**
     * @description To return product options add one of the following include:
     *
     * `lineItems.physicalItems.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return.
     *
     * `lineItems.digitalItems.options`:  The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
     *
     * `lineItems.digitalItems.options,lineItems.physicalItems.options`:  The Cart returns an abbreviated result. Use this to return digital and physical options. Can also be used in a /POST to have the extended Cart object return.
     */
    Include?: ("lineItems.physicalItems.options" | "lineItems.digitalItems.options")[];
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get a Cart
   * @description Returns a *Cart*.
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  getCart: {
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: components["responses"]["getCarts"];
    };
  };
  /**
   * Create a Cart
   * @description Creates a *Cart*.
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  createCart: {
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["requestCart"];
      };
    };
    responses: {
      200: components["responses"]["postCarts"];
    };
  };
  /**
   * Delete a Cart
   * @description Deletes a *Cart*. Once a *Cart* has been deleted it can not be recovered.
   *
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  deleteCart: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: never;
      };
    };
  };
  /**
   * Add Cart Line Items
   * @description Adds a line items to the *Cart*.
   *
   * > #### Notes
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   * > * To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
   */
  addCartLineItem: {
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["LineItemsRequest"];
      };
    };
    responses: {
      200: components["responses"]["postCartsItems"];
      409: components["responses"]["CartConflictErrorResponse"];
    };
  };
  /**
   * Update Cart Line Item
   * @description Updates a *Cart* line item. Updates an existing, single line item quantity and the price of custom items in a cart.
   *
   * If a modified product or variant needs to be changed or updated, you can remove and re-add the product to the cart with the correct variants using the [Delete Cart Line Item](/docs/rest-storefront/carts/cart-items#delete-cart-line-item) and the [Add Cart Line Items](/docs/rest-storefront/carts/cart-items#add-cart-line-items) endpoints. You can also use carts mutations that are part of the [GraphQL Storefront API](/docs/storefront/cart-checkout/guide/graphql-storefront).
   *
   *
   * > #### Notes
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   * > * To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
   */
  updateCartLineItem: {
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
        itemId: components["parameters"]["ItemIdPath"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["requestLineItemPut"];
      };
    };
    responses: {
      200: components["responses"]["putCartsItems"];
      409: components["responses"]["CartConflictErrorResponse"];
    };
  };
  /**
   * Delete Cart Line Item
   * @description Deletes a *Cart* line item.
   *
   * Removing the last `line_item` in the *Cart* deletes the *Cart*.
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   * > * To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
   */
  deleteCartLineItem: {
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
        itemId: components["parameters"]["ItemIdPath"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["requestLineItemDelete"];
      };
    };
    responses: {
      200: components["responses"]["deleteCartsItems"];
      409: components["responses"]["CartConflictErrorResponse"];
    };
  };
  /**
   * Update Cart Currency
   * @description Update currency of the *Cart*.
   * Promotions and gift certificates that don't apply to the new currency will be removed from your cart.
   * You cannot update the cart currency if the draft order cart or the cart contains a manual discount.
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  updateCartCurrency: {
    parameters: {
      query?: {
        include?: components["parameters"]["Include"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        cartId: components["parameters"]["CartIdPath"];
      };
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description currency code */
          currencyCode: string;
        };
      };
    };
    responses: {
      200: components["responses"]["getCarts"];
      /** @description Bad request. Authentication Required. */
      400: {
        content: never;
      };
      /** @description Currency not found */
      404: {
        content: never;
      };
      /** @description Missing or invalid data */
      422: {
        content: never;
      };
    };
  };
}
