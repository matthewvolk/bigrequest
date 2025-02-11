// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export interface paths {
  "/inventory/adjustments/absolute": {
    /**
     * Absolute Adjustment
     * @description Override the existing inventory levels for an inventory item at a location. Use absolute adjustments as the default method for updating inventory. This endpoint batches requests, making them more resource friendly than the [Catalog API](/docs/rest-catalog/products#update-products-batch). Absolute adjustments have lower complexity than [relative adjustments](/docs/rest-management/inventory/adjustments#relative-adjustment), which synchronize with orders.
     *
     * **Limits**
     * * For maximum inventory levels, see [Inventory adjustments](/docs/store-operations/catalog/inventory-adjustments#inventory-adjustments).
     * * Limit of 2000 items for payload length, see [Optimizing performance](/docs/store-operations/catalog/inventory-adjustments#optimizing-performance) for more information.
     */
    put: operations["put-absolute-adjustment"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/inventory/adjustments/relative": {
    /**
     * Relative Adjustment
     * @description Add or subtract inventory for an inventory item at a location. Use this endpoint only when you do not know absolute quantities. For example, making order-related inventory changes through a third-party may require relative adjustments. Otherwise, use the [Absolute adjustment](/docs/rest-management/inventory/adjustments#absolute-adjustment) endpoint for updating inventory.
     *
     * **Limits**
     * * For maximum inventory levels, see [Inventory adjustments](/docs/store-operations/catalog/inventory-adjustments#inventory-adjustments).
     * * Limit of 2000 items for payload length, see [Optimizing performance](/docs/store-operations/catalog/inventory-adjustments#optimizing-performance) for more information.
     */
    post: operations["post-relative-adjustment"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/inventory/items": {
    /**
     * Get Inventory at Locations
     * @description Return a list of inventory and inventory settings for all items in all locations.
     *
     * **Limits**
     * * Limit of 1000 items for payload length.
     */
    get: operations["get-inventory-items"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/inventory/locations/{location_id}/items": {
    /**
     * Get Inventory at a Location
     * @description Return a list of inventory and inventory settings for all items in a location.
     *
     * **Limits**
     * * Limit of 1000 items for payload length.
     */
    get: operations["get-location-inventory-items"];
    /**
     * Update Inventory Settings for a Location
     * @description
     * Update inventory settings for items at a location.
     *
     * **Limits**
     * * Limit of 2000 items for payload length.
     */
    put: operations["put-location-inventory-items"];
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
    ErrorResponse: {
      /** @description The HTTP status code generated by the origin server for this occurrence of the problem. */
      status?: number;
      /** @description Human readable error message. */
      title?: string;
      /** @description URL identifying the error type. Dereferencing the URL leads to documentation about the error type. */
      type?: string;
      /** @description Detailed summary describing the particular error. */
      errors?: {
        [key: string]: unknown;
      };
    };
    Meta: {
      pagination?: {
        /**
         * @description Total number of items in the result set.
         * @example 246
         */
        total?: number;
        /**
         * @description The total number of items in the collection on current page.
         * @example 5
         */
        count?: number;
        /**
         * @description The number of items returned in the collection per page, controlled by the limit parameter.
         * @example 5
         */
        per_page?: number;
        /**
         * @description The page you are currently on within the collection.
         * @example 1
         */
        current_page?: number;
        /**
         * @description The total number of pages in the collection.
         * @example 50
         */
        total_pages?: number;
        /** @description Pagination links for the previous and next parts of the whole collection. */
        links?: {
          /**
           * @description A link to the previous page is returned in the response.
           * @example ?limit=5&page=2
           */
          previous?: string;
          /**
           * @description A link to the current page is returned in the response.
           * @example ?limit=5&page=3
           */
          current?: string;
          /**
           * @description Link to the next page returned in the response.
           * @example ?limit=5&page=4
           */
          next?: string;
        };
      };
    };
    AdjustmentsRelativeRequest: {
      /**
       * @description Reason for the adjustment operation.
       * @example Monthly arrival delivered.
       */
      reason?: string;
      /** @description One of the `sku`, `product_id`, or `variant_id` is required to identify the item. */
      items: OneOf<[{
          /**
           * @description ID of location. This is empty in the case of the default allotment.
           * @example 1
           */
          location_id: number;
          /**
           * @description "Stock keeping unit" identifier of an item.
           * @example RE-130
           */
          sku: string;
          /**
           * @description Amount of items that will be moved.
           * @example -2
           */
          quantity: number;
        }, {
          /**
           * @description ID of location. This is empty in the case of the default allotment.
           * @example 1
           */
          location_id: number;
          /**
           * @description ID of variant.
           * @example 78
           */
          variant_id: number;
          /**
           * @description Amount of items that will be moved.
           * @example -2
           */
          quantity: number;
        }, {
          /**
           * @description ID of location. This is empty in the case of the default allotment.
           * @example 1
           */
          location_id: number;
          /**
           * @description ID of product.
           * @example 130
           */
          product_id: number;
          /**
           * @description Amount of items that will be moved.
           * @example -2
           */
          quantity: number;
        }]>[];
    };
    AdjustmentsAbsoluteRequest: {
      /**
       * @description Reason for the adjustment operation.
       * @example Monthly arrival delivered.
       */
      reason?: string;
      /** @description One of the `sku`, `product_id`, or `variant_id` is required to identify the item. */
      items: OneOf<[{
          /**
           * @description ID of location. This is empty in the case of the default allotment.
           * @example 1
           */
          location_id: number;
          /**
           * @description "Stock keeping unit" identifier of an item.
           * @example RE-130
           */
          sku: string;
          /**
           * @description Amount of items that will be moved.
           * @example 10
           */
          quantity: number;
        }, {
          /**
           * @description ID of location. This is empty in the case of the default allotment.
           * @example 1
           */
          location_id: number;
          /**
           * @description variant_id identifier of item.
           * @example 78
           */
          variant_id: number;
          /**
           * @description Amount of items that will be moved.
           * @example 10
           */
          quantity: number;
        }, {
          /**
           * @description ID of location. This is empty in the case of the default allotment.
           * @example 1
           */
          location_id: number;
          /**
           * @description product_id identifier of item.
           * @example 120
           */
          product_id: number;
          /**
           * @description Amount of items that will be moved.
           * @example 10
           */
          quantity: number;
        }]>[];
    };
    LocationItemsSettingsRequest: {
      settings: {
          /** @description One of the `sku`, `product_id`, or `variant_id` is required to identify the item. */
          identity?: OneOf<[{
            /**
             * @description "Stock keeping unit" identifier of an item.
             * @example RE-130
             */
            sku?: string;
          }, {
            /**
             * @description ID of variant.
             * @example 79
             */
            variant_id?: number;
          }, {
            /**
             * @description ID of product.
             * @example 120
             */
            product_id?: number;
          }]>;
          /**
           * @description Safety stock. Decreases the amount available for selling items at that amount. If missing, the value will remain the same.
           *
           * @example 5
           */
          safety_stock?: number;
          /** @description Shows whether an item is available for purchase independent of quantity. If missing, the value will remain the same. */
          is_in_stock?: boolean;
          /**
           * @description Inventory warning level for the product. The store owner will be informed when the product's inventory level drops below the warning level. If missing, the value will remain the same.
           *
           * @example 10
           */
          warning_level?: number;
          /**
           * @description Warehouse location identifier; bin picking number for the item.
           *
           * @example 1
           */
          bin_picking_number?: string;
        }[];
    };
    LocationItemsResponse: {
      identity?: {
        /**
         * @description "Stock keeping unit" identifier of item.
         * @example RE-130
         */
        sku?: string;
        /**
         * @description ID of variant.
         * @example 78
         */
        variant_id?: number;
        /**
         * @description ID of product.
         * @example 130
         */
        product_id?: number;
      };
      /**
       * @description Amount of available items.
       * @example 10
       */
      available_to_sell?: number;
      /**
       * @description Amount of available items on hand minus `safety_stock`.
       * @example 12
       */
      total_inventory_onhand?: number;
      settings?: {
        /**
         * @description Safety stock. Decreases the amount available for selling an item. If missing, the value will remain the same.
         *
         * @default 0
         * @example 2
         */
        safety_stock?: number;
        /**
         * @description Shows whether an item is available for purchase independent of quantity.
         * @default true
         */
        is_in_stock?: boolean;
        /**
         * @description Inventory warning level for the product. The store owner will be informed when the product's inventory level drops below the warning level. If missing, the value will remain the same.
         *
         * @default 0
         * @example 2
         */
        warning_level?: number;
        /**
         * @description Warehouse location identifier; bin picking number for the item.
         *
         * @example 1
         */
        bin_picking_number?: string;
      };
    };
    ItemResponse: {
      identity?: {
        /**
         * @description "Stock keeping unit" identifier of an item.
         * @example RE-130
         */
        sku?: string;
        /**
         * @description ID of variant.
         * @example 79
         */
        variant_id?: number;
        /**
         * @description ID of product.
         * @example 120
         */
        product_id?: number;
        /** @description Read-only reference to Catalog V2 API's SKU ID. `null` if the item is a base variant. */
        sku_id?: number;
      };
      locations?: {
          /**
           * @description ID of location.
           * @example 1
           */
          location_id?: number;
          /**
           * @description Code of location.
           * @example BC-LOCATION-1
           */
          location_code?: string;
          /**
           * @description Name of location.
           * @example Default location
           */
          location_name?: string;
          /**
           * @description Available to sell. Total inventory on hand minus the safety stock.
           * @example 10
           */
          available_to_sell?: number;
          /**
           * @description Total inventory on hand.
           * @example 11
           */
          total_inventory_onhand?: number;
          /** @description Status of the location. Indicates whether a location is enabled. */
          location_enabled?: boolean;
          settings?: {
            /**
             * @description Decreases the amount available for selling items at that amount.
             * @example 1
             */
            safety_stock?: number;
            /** @description Shows whether an item is available for purchase independent of quantity. */
            is_in_stock?: boolean;
            /**
             * @description Inventory warning level for the product. The store owner will be informed when the product inventory level drops below the warning level.
             * @example 1
             */
            warning_level?: number;
            /**
             * @description Warehouse location identifier; bin picking number for the item.
             * @example 1
             */
            bin_picking_number?: string;
          };
        }[];
    };
    SimpleTransactionResponse: {
      /** @description Unique identifier of performed action. */
      transaction_id?: string;
    };
  };
  responses: never;
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
    /** @description List of `sku` separated by comma. */
    SkuFilterParam?: string;
    /** @description List of `variant_id` separated by comma. */
    VariantIdFilterParam?: number;
    /** @description List of `product_id` separated by comma. */
    ProductIdFilterParam?: number;
    /** @description Specifies the page number in a limited (paginated) list. */
    PageParam?: number;
    /** @description Controls the number of items per page in a limited (paginated) list. */
    LimitParam?: number;
    /** @description Unique identifier for a location. */
    LocationIdParam: number;
    /** @description Comma separated list of `location_id`. */
    LocationIdsParam?: number;
    /** @description Comma separated list of `location_code`. */
    LocationCodeFilterParam?: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Absolute Adjustment
   * @description Override the existing inventory levels for an inventory item at a location. Use absolute adjustments as the default method for updating inventory. This endpoint batches requests, making them more resource friendly than the [Catalog API](/docs/rest-catalog/products#update-products-batch). Absolute adjustments have lower complexity than [relative adjustments](/docs/rest-management/inventory/adjustments#relative-adjustment), which synchronize with orders.
   *
   * **Limits**
   * * For maximum inventory levels, see [Inventory adjustments](/docs/store-operations/catalog/inventory-adjustments#inventory-adjustments).
   * * Limit of 2000 items for payload length, see [Optimizing performance](/docs/store-operations/catalog/inventory-adjustments#optimizing-performance) for more information.
   */
  "put-absolute-adjustment": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AdjustmentsAbsoluteRequest"];
      };
    };
    responses: {
      /** @description Request has been successfully processed. */
      200: {
        content: {
          "application/json": components["schemas"]["SimpleTransactionResponse"];
        };
      };
      /** @description Incorrect entity. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Relative Adjustment
   * @description Add or subtract inventory for an inventory item at a location. Use this endpoint only when you do not know absolute quantities. For example, making order-related inventory changes through a third-party may require relative adjustments. Otherwise, use the [Absolute adjustment](/docs/rest-management/inventory/adjustments#absolute-adjustment) endpoint for updating inventory.
   *
   * **Limits**
   * * For maximum inventory levels, see [Inventory adjustments](/docs/store-operations/catalog/inventory-adjustments#inventory-adjustments).
   * * Limit of 2000 items for payload length, see [Optimizing performance](/docs/store-operations/catalog/inventory-adjustments#optimizing-performance) for more information.
   */
  "post-relative-adjustment": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AdjustmentsRelativeRequest"];
      };
    };
    responses: {
      /** @description Request has been successfully processed. */
      200: {
        content: {
          "application/json": components["schemas"]["SimpleTransactionResponse"];
        };
      };
      /** @description Incorrect entity. The adjustment was not valid. This is the result of missing required fields or invalid data. See the response for more details. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Get Inventory at Locations
   * @description Return a list of inventory and inventory settings for all items in all locations.
   *
   * **Limits**
   * * Limit of 1000 items for payload length.
   */
  "get-inventory-items": {
    parameters: {
      query?: {
        "sku:in"?: components["parameters"]["SkuFilterParam"];
        "variant_id:in"?: components["parameters"]["VariantIdFilterParam"];
        "product_id:in"?: components["parameters"]["ProductIdFilterParam"];
        "location_id:in"?: components["parameters"]["LocationIdsParam"];
        "location_code:in"?: components["parameters"]["LocationCodeFilterParam"];
        page?: components["parameters"]["PageParam"];
        limit?: components["parameters"]["LimitParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description Request has been successfully processed. */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["ItemResponse"][];
            meta?: components["schemas"]["Meta"];
          };
        };
      };
    };
  };
  /**
   * Get Inventory at a Location
   * @description Return a list of inventory and inventory settings for all items in a location.
   *
   * **Limits**
   * * Limit of 1000 items for payload length.
   */
  "get-location-inventory-items": {
    parameters: {
      query?: {
        "variant_id:in"?: components["parameters"]["VariantIdFilterParam"];
        "product_id:in"?: components["parameters"]["ProductIdFilterParam"];
        "sku:in"?: components["parameters"]["SkuFilterParam"];
        page?: components["parameters"]["PageParam"];
        limit?: components["parameters"]["LimitParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        location_id: components["parameters"]["LocationIdParam"];
      };
    };
    responses: {
      /** @description Request has been successfully processed. */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["LocationItemsResponse"][];
            meta?: components["schemas"]["Meta"];
          };
        };
      };
      /** @description Request has been rejected due to resource not being found. */
      404: {
        content: {
          "application/problem+json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Update Inventory Settings for a Location
   * @description
   * Update inventory settings for items at a location.
   *
   * **Limits**
   * * Limit of 2000 items for payload length.
   */
  "put-location-inventory-items": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        location_id: components["parameters"]["LocationIdParam"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LocationItemsSettingsRequest"];
      };
    };
    responses: {
      /** @description Request has been successfully processed. */
      200: {
        content: {
          "application/json": components["schemas"]["SimpleTransactionResponse"];
        };
      };
      /** @description Incorrect entity. Item was not valid due to missing required fields or invalid data. See the response for more details. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
}
