// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/orders/{orderId}": {
    /**
     * Get Order
     * @description Returns *Order* data. This will return order data immediately after an order is placed on the storefront.
     *
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    get: operations["OrdersByOrderIdGet"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Data
     * @description Response data container for Order endpoints (`POST /order` and `POST /order/{orderId}`).
     */
    Data: {
      order?: components["schemas"]["Order"];
    };
    /** Order */
    Order: {
      /** Format: double */
      orderId?: number;
      /**
       * Format: uuid
       * @description The ID of cart that was converted to order.
       */
      cartId?: string;
      currency?: components["schemas"]["Currency"];
      /** @description Whether this item is taxable. */
      isTaxIncluded?: boolean;
      /**
       * Format: double
       * @description Cost of cartʼs contents before applying discounts.
       */
      baseAmount?: number;
      /**
       * Format: float
       * @description Discounted amount.
       */
      discountAmount?: number;
      /** @description Gift wrapping for all items, including or excluding tax. */
      giftWrappingCostTotal?: number;
      /**
       * Format: double
       * @description Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes where applicable.
       */
      orderAmount?: number;
      /**
       * Format: double
       * @description Order amount represented in integer. Eg. 1234 for $12.34
       */
      orderAmountAsInteger?: number;
      /** @description Array of `AppliedCoupon` objects applied to this cart. */
      coupons?: components["schemas"]["AppliedCoupon"][];
      /** @description Array of `LineItem` objects. */
      lineItems?: components["schemas"]["OrderLineItem"][];
      customerId?: string;
      billingAddress?: components["schemas"]["AddressProperties"];
      status?: components["schemas"]["Status"];
      /** @description Specifies whether this order has at least one digital item. */
      hasDigitalItems?: boolean;
      /** @description Specifies whether this order is fully paid, so that digital items can be downloaded. */
      isDownloadable?: boolean;
      /** @description Specifies whether this order is complete and ready to be taken to the order confirmation page. */
      isComplete?: boolean;
      /** @description Shopperʼs provided message for the order. */
      customerMessage?: string;
      shippingCostTotal?: number;
      shippingCostBeforeDiscount?: number;
      handlingCostTotal?: number;
      customerCanBeCreated?: boolean;
      taxes?: {
          name?: string;
          amount?: number;
        }[];
      taxTotal?: number;
      /** @description ID of the channel which the order belongs to. */
      channelId?: number;
      consignments?: components["schemas"]["Consignments"];
    };
    /**
     * Currency
     * @description This will always be the same between cart and checkout.
     */
    Currency: {
      /** @description The currency name. */
      name?: string;
      /** @description ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.) */
      code?: string;
      /** @description The currency symbol. */
      symbol?: string;
      /**
       * Format: double
       * @description Number of decimal places for the currency. For example, USD currency has two decimal places.
       */
      decimalPlaces?: number;
    };
    /** Applied Coupon */
    AppliedCoupon: {
      /** @description The coupon ID. */
      id?: string;
      /** @description the coupon code */
      code: string;
      /** @description The coupon title based on different types provided in control panel section. */
      displayName?: string;
      /** @description Key name to identify the type of coupon. */
      couponType?: string;
      /**
       * Format: double
       * @description The discounted amount applied within a given context.
       */
      discountedAmount?: number;
    };
    /** Applied Discount */
    AppliedDiscount: {
      /**
       * @description Property key is discount ID; property value is discount amount.
       * @example 8.28
       */
      coupon?: number;
    };
    /** Order Line Item */
    OrderLineItem: {
      /** @description Array of `ItemPhysical` objects. */
      physicalItems: components["schemas"]["ItemPhysical"][];
      /** @description Array of `ItemDigital` objects. */
      digitalItems: components["schemas"]["OrderItemDigital"][];
      /** @description Array of `ItemGiftCertificate` objects. */
      giftCertificate: components["schemas"]["OrderItemGiftCertificate"][];
    };
    /** Item Physical */
    ItemPhysical: {
      /** @description The line-item ID. */
      id?: string;
      /** @description Bundled items will have their parentʼs item ID. */
      parentId?: string;
      /**
       * Format: double
       * @description ID of the variant.
       */
      variantId?: number;
      /**
       * Format: double
       * @description ID of the product.
       */
      productId?: number;
      /** @description SKU of the variant. */
      sku?: string;
      /** @description The itemʼs product name. */
      name?: string;
      /** @description The product URL. */
      url?: string;
      /**
       * Format: double
       * @description Quantity of this item.
       */
      quantity: number;
      /** @description The product's brand. */
      brand?: string;
      /** @description Whether the item is taxable. */
      isTaxable?: boolean;
      /** @description A publicly-accessible URL for an image of this item. */
      imageUrl?: string;
      /** @description List of discounts applied to this item. If no discount applied, empty array is returned. If discount has been applied, discount object returned. */
      discounts?: Record<string, never>;
      /**
       * Format: double
       * @description The total value of all discounts applied to this item (excluding coupon).
       */
      discountAmount?: number;
      /**
       * Format: double
       * @description The total value of all coupons applied to this item.
       */
      couponAmount?: number;
      /**
       * Format: double
       * @description The itemʼs list price, as quoted by the manufacturer/distributor.
       */
      listPrice?: number;
      /**
       * Format: double
       * @description The itemʼs price after all discounts are applied. (The final price before tax calculation.)
       */
      salePrice?: number;
      /**
       * Format: double
       * @description The itemʼs list price multiplied by the quantity.
       */
      extendedListPrice?: number;
      /**
       * Format: double
       * @description The itemʼs sale price multiplied by the quantity.
       */
      extendedSalePrice?: number;
      /** @description the product type - physical or digital. */
      type?: string;
      /** @description Whether this item has been added automatically by a promotion. */
      addedByPromotion?: boolean;
      /** @description Whether this item requires shipping to a physical address. */
      isShippingRequired?: boolean;
      giftWrapping?: components["schemas"]["GiftWrapping"];
      /** @description Categories the item belongs to. */
      categories?: Record<string, never>[];
    };
    /** Gift Wrapping */
    GiftWrapping: {
      name?: string;
      message?: string;
      /** Format: double */
      amount?: number;
    };
    /** Order Item Digital */
    OrderItemDigital: {
      /** @description The line-item ID. */
      id?: string;
      /** @description Bundled items will have their parentʼs item ID. */
      parentId?: string;
      /**
       * Format: double
       * @description ID of the variant.
       */
      variantId?: number;
      /**
       * Format: double
       * @description ID of the product.
       */
      productId?: number;
      /** @description SKU of the variant. */
      sku?: string;
      /** @description The itemʼs product name. */
      name?: string;
      /** @description The product URL. */
      url?: string;
      /**
       * Format: double
       * @description Quantity of this item.
       */
      quantity: number;
      /** @description The item's brand. */
      brand?: string;
      /** @description Whether the item is taxable. */
      isTaxable?: boolean;
      /** @description A publicly-accessible URL for an image of this item. */
      imageUrl?: string;
      /** @description A list of discounts applied to this item, as an array of AppliedDiscount objects. */
      discounts?: components["schemas"]["AppliedDiscount"][];
      /**
       * Format: double
       * @description The total value of all discounts applied to this item (excluding coupon).
       */
      discountAmount?: number;
      /**
       * Format: double
       * @description The total value of all coupons applied to this item.
       */
      couponAmount?: number;
      /**
       * Format: double
       * @description The itemʼs list price, as quoted by the manufacturer/distributor.
       */
      listPrice?: number;
      /**
       * Format: double
       * @description The itemʼs price after all discounts are applied. (The final price before tax calculation.)
       */
      salePrice?: number;
      /**
       * Format: double
       * @description The itemʼs list price multiplied by the quantity.
       */
      extendedListPrice?: number;
      /**
       * Format: double
       * @description The itemʼs sale price multiplied by the quantity.
       */
      extendedSalePrice?: number;
      /** @description the product type - physical or digital */
      type?: string;
      /** @description URLs to download all product files. */
      downloadFileUrls?: string[];
      /** @description The URL for the combined downloads page. */
      downloadPageUrl?: string;
      /** @description Specifies the combined download size in human-readable style; for example, `30MB`. */
      downloadSize?: string;
      /** @description Categories the item belongs to. */
      categories?: Record<string, never>[];
    };
    /** Order Item Gift Certificate */
    OrderItemGiftCertificate: {
      /** @description The itemʼs product name. */
      name?: string;
      /**
       * Format: double
       * @description Quantity of this item.
       */
      quantity?: number;
      /** @description Whether the item is taxable. */
      isTaxable?: boolean;
      /**
       * Format: double
       * @description Price of the item
       */
      amount?: number;
      /** @description Explicitly specifying the gift certificate type */
      type?: string;
    };
    /** Address Response */
    AddressResponse: components["schemas"]["AddressProperties"] & {
      id?: string;
    };
    /** Address Properties */
    AddressProperties: {
      firstName?: string;
      lastName?: string;
      email?: string;
      company?: string;
      address1?: string;
      address2?: string;
      city?: string;
      /** @description Represents state or province. */
      stateOrProvince?: string;
      stateOrProvinceCode?: string;
      country?: string;
      /** @description ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
      countryCode: string;
      postalCode?: string;
      phone?: string;
      customFields?: components["schemas"]["CustomField"][];
    };
    /** Custom Field */
    CustomField: {
      fieldId?: string;
      /** @description This can also be an array for fields that need to support list of values; for example, a set of checkboxes. */
      fieldValue?: string;
    };
    /**
     * Status
     * @description Order status.
     * @example INCOMPLETE
     * @enum {string}
     */
    Status: "INCOMPLETE" | "PENDING" | "SHIPPED" | "PARTIALLY_SHIPPED" | "REFUNDED" | "CANCELLED" | "DECLINED" | "AWAITING_PAYMENT" | "AWAITING_PICKUP" | "AWAITING_SHIPMENT" | "COMPLETED" | "AWAITING_FULFILLMENT" | "MANUAL_VERIFICATION_REQUIRED" | "DISPUTED" | "PARTIALLY_REFUNDED";
    /** Base Item */
    BaseItem: {
      /** @description The line-item ID. */
      id?: string;
      /** @description Bundled items will have their parentʼs item ID. */
      parentId?: string;
      /**
       * Format: double
       * @description ID of the variant.
       */
      variantId?: number;
      /**
       * Format: double
       * @description ID of the product.
       */
      productId?: number;
      /** @description SKU of the variant. */
      sku?: string;
      /** @description The itemʼs product name. */
      name?: string;
      /** @description The product URL. */
      url?: string;
      /**
       * Format: double
       * @description Quantity of this item.
       */
      quantity: number;
      /** @description Whether the item is taxable. */
      isTaxable?: boolean;
      /** @description A publicly-accessible URL for an image of this item. */
      imageUrl?: string;
      /** @description A list of discounts applied to this item, as an array of AppliedDiscount objects. */
      discounts?: components["schemas"]["AppliedDiscount"][];
      /**
       * Format: double
       * @description The total value of all discounts applied to this item (excluding coupon).
       */
      discountAmount?: number;
      /**
       * Format: double
       * @description The total value of all coupons applied to this item.
       */
      couponAmount?: number;
      /**
       * Format: double
       * @description The itemʼs list price, as quoted by the manufacturer/distributor.
       */
      listPrice?: number;
      /**
       * Format: double
       * @description The itemʼs price after all discounts are applied. (The final price before tax calculation.)
       */
      salePrice?: number;
      /**
       * Format: double
       * @description The itemʼs list price multiplied by the quantity.
       */
      extendedListPrice?: number;
      /**
       * Format: double
       * @description The itemʼs sale price multiplied by the quantity.
       */
      extendedSalePrice?: number;
      /** @description the product type - physical or digital */
      type?: string;
    };
    order_Nate: {
      orderId?: number;
      cartId?: string;
      currency?: {
        name?: string;
        code?: string;
        symbol?: string;
        decimalPlaces?: number;
      };
      isTaxIncluded?: boolean;
      baseAmount?: number;
      discountAmount?: number;
      orderAmount?: number;
      orderAmountAsInteger?: number;
      shippingCostTotal?: number;
      shippingCostBeforeDiscount?: number;
      handlingCostTotal?: number;
      coupons?: Record<string, never>[];
      lineItems?: {
        physicalItems?: {
            id?: number;
            productId?: number;
            name?: string;
            sku?: string;
            quantity?: number;
            isTaxable?: boolean;
            imageUrl?: string;
            discounts?: Record<string, never>[];
            discountAmount?: number;
            /** @description The product's brand. */
            brand?: string;
            listPrice?: number;
            salePrice?: number;
            extendedListPrice?: number;
            extendedSalePrice?: number;
            extendedComparisonPrice?: number;
            categories?: Record<string, never>[];
            type?: string;
            variantId?: number;
          }[];
        digitalItems?: Record<string, never>[];
        giftCertificates?: Record<string, never>[];
      };
      customerId?: number;
      billingAddress?: {
        firstName?: string;
        lastName?: string;
        email?: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        stateOrProvince?: string;
        stateOrProvinceCode?: string;
        country?: string;
        countryCode?: string;
        postalCode?: string;
        phone?: string;
        customFields?: Record<string, never>[];
      };
      status?: string;
      customerCanBeCreated?: boolean;
      hasDigitalItems?: boolean;
      isDownloadable?: boolean;
      isComplete?: boolean;
      customerMessage?: string;
      taxes?: {
          name?: string;
          amount?: number;
        }[];
      taxTotal?: number;
    };
    /**
     * Consignments
     * @description All the consignments of the order.
     */
    Consignments: {
      /** @description List of shipping consignments */
      shipping?: components["schemas"]["ShippingConsignment"][];
    };
    /**
     * ShippingConsignment
     * @description Shipping consignment
     */
    ShippingConsignment: {
      lineItems?: components["schemas"]["ConsignmentLineItem"][];
      /** @example 1 */
      shippingAddressId?: number;
      /** @example first1 */
      firstName?: string;
      /** @example last1 */
      lastName?: string;
      /** @example company1 */
      company?: string;
      /** @example 2802 Skyway Cir */
      address1?: string;
      /** @example Balcony */
      address2?: string;
      /** @example Austin */
      city?: string;
      /** @example Texas */
      stateOrProvince?: string;
      /** @example 78704 */
      postalCode?: string;
      /** @example United States */
      country?: string;
      /** @example US */
      countryCode?: string;
      /** @example first1@bigcommerce.com */
      email?: string;
      /** @example 0410123452 */
      phone?: string;
      /** @example 1 */
      itemsTotal?: number;
      /** @example 0 */
      itemsShipped?: number;
      /** @example Flat Rate */
      shippingMethod?: string;
      /** @example 15.5 */
      baseCost?: number;
      /** @example 15.5 */
      costExTax?: number;
      /** @example 16.7 */
      costIncTax?: number;
      /** @example 1.2 */
      costTax?: number;
      /** @example 2 */
      costTaxClassId?: number;
      /** @example 0 */
      baseHandlingCost?: number;
      /** @example 0 */
      handlingCostExTax?: number;
      /** @example 0 */
      handlingCostIncTax?: number;
      /** @example 0 */
      handlingCostTax?: number;
      /** @example 2 */
      handlingCostTaxClassId?: number;
      /** @example 1 */
      shippingZoneId?: number;
      /** @example United States */
      shippingZoneName?: string;
      customFields?: components["schemas"]["ConsignmentFormField"][];
    };
    /** ConsignmentLineItem */
    ConsignmentLineItem: {
      /** @example 4 */
      id?: number;
    };
    /** ConsignmentFormField */
    ConsignmentFormField: {
      /** @example special note */
      name?: string;
      /** @example super rare */
      value?: string | null;
    };
    /**
     * PickupConsignment
     * @description Pickup consignment
     */
    PickupConsignment: {
      /** @example 3 */
      id?: number;
      lineItems?: components["schemas"]["ConsignmentLineItem"][];
      /** @example 10 */
      pickupMethodId?: number;
      /** @example Pickup Method 10: Pickup at Location 1 */
      pickupMethodDisplayName?: string;
      /** @example Pickup Method 10 Collection Instructions */
      collectionInstructions?: string;
      /** @example Pickup Method 10 Collection Time Description */
      collectionTimeDescription?: string;
      location?: components["schemas"]["PickupConsignmentLocation"];
    };
    /** PickupConsignmentLocation */
    PickupConsignmentLocation: {
      /** @example 1 */
      id?: number;
      /** @example Location 1 */
      name?: string;
      /** @example 2802 Skyway Cir */
      address1?: string;
      address2?: string;
      /** @example Austin */
      city?: string;
      /** @example Texas */
      stateOrProvince?: string;
      /** @example 78704 */
      postalCode?: string;
      /** @example United States */
      country?: string;
      /** @example US */
      countryCode?: string;
      /** @example loc1@bigcommerce.com */
      email?: string;
      /** @example 0410123452 */
      phone?: string;
    };
  };
  responses: {
    order_Resp: {
      content: {
        "application/json": components["schemas"]["Order"];
      };
    };
  };
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Order
   * @description Returns *Order* data. This will return order data immediately after an order is placed on the storefront.
   *
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  OrdersByOrderIdGet: {
    parameters: {
      path: {
        /** @description ID of an Order. */
        orderId: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Order"];
        };
      };
    };
  };
}
