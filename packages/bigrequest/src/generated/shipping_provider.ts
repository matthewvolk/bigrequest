// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/rate": {
    /**
     * Request shipping rates
     * @description Request shipping rates. BigCommerce sends a request for shipping quotes to the shipping provider URL. The shipping provider responds with shipping quotes.
     *
     * > #### Note
     * > * Substitute the host and path specific to the shipping provider for `your_app.example.com` and `rate`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    post: operations["requestShippingRates"];
  };
  "/check_connection_options": {
    /**
     * Validate connection options
     * @description Validate connection options. BigCommerce sends a request to the shipping provider URL to check a merchantʼs connection credentials. The shipping provider sends a response indicating whether a merchant has valid credentials.
     *
     * > #### Note
     * > * Substitute the host and path specific to the shipping provider for `your_app.example.com` and `check_connection_options`.
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    post: operations["validateConnectionOptions"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Rate Request Payload
     * @description Payload sent to a Shipping Provider to get quotes.
     */
    RateRequestPayload: {
      base_options: components["schemas"]["BaseOptions"];
      zone_options?: components["schemas"]["ZoneOptionsInstance"];
      connection_options?: components["schemas"]["ConnectionOptionsInstance"];
    };
    /**
     * Base Options
     * @description Payload sent to a Shipping Provider in to get quotes.
     */
    BaseOptionsSchema: {
      /**
       * Base Rate Request
       * @description The minimum required payload that is sent to retrieve rates.
       */
      base_options: {
        /**
         * Shipping Address
         * @description Object representing a destination or origin address for items.
         */
        origin: {
          street_1?: string;
          street_2?: string;
          /** @example 94105 */
          zip: string;
          /** @example San Francisco */
          city?: string;
          /** @description State in ISO_3166 2 format. */
          state_iso2?: string;
          /**
           * @description Country in ISO_3166 2 format.
           * @example US
           */
          country_iso2: string;
          /**
           * @description Optional. Defaults to `RESIDENTIAL`.
           * @enum {string}
           */
          address_type?: "RESIDENTIAL" | "COMMERCIAL";
        };
        /**
         * Shipping Address
         * @description Object representing a destination or origin address for items.
         */
        destination: {
          street_1?: string;
          street_2?: string;
          /** @example 94105 */
          zip: string;
          /** @example San Francisco */
          city?: string;
          /** @description State in ISO_3166 2 format. */
          state_iso2?: string;
          /**
           * @description Country in ISO_3166 2 format.
           * @example US
           */
          country_iso2: string;
          /**
           * @description Optional. Defaults to `RESIDENTIAL`.
           * @enum {string}
           */
          address_type?: "RESIDENTIAL" | "COMMERCIAL";
        };
        items: ({
            /** @description The variant SKU. */
            sku?: string;
            variant_id?: string;
            product_id?: string;
            name?: string;
            /**
             * Dimension Value
             * @description Value object for a length measurement.
             */
            length?: {
              /** @enum {string} */
              units: "cm" | "in";
              value: number;
            };
            /**
             * Dimension Value
             * @description Value object for a width measurement.
             */
            width?: {
              /** @enum {string} */
              units: "cm" | "in";
              value: number;
            };
            /**
             * Dimension Value
             * @description Value object for a height measurement.
             */
            height?: {
              /** @enum {string} */
              units: "cm" | "in";
              value: number;
            };
            /**
             * Weight Value
             * @description Value object for a weight measurement.
             */
            weight?: {
              /** @enum {string} */
              units: "oz" | "g";
              value: number;
            };
            /**
             * Money Value
             * @description Value object for a money amount.
             */
            discounted_price?: {
              currency: string;
              amount: number;
            };
            /**
             * Money Value
             * @description Value object for a money amount.
             */
            declared_value?: {
              currency: string;
              amount: number;
            };
            /** Format: int32 */
            quantity?: number;
            /** @description A list of arbitrary properties stored as part of the product or product variant meta fields. These consist of public fields specific to the carrier integration. */
            attributes?: ({
                /** @description The key associated with the meta field. */
                key?: string;
                /** @description The value associated with the meta field. */
                value?: string;
                /** @description The namespace associated with metafields for [products](/docs/rest-catalog/products/metafields#create-a-product-metafield) and [product variants](/docs/rest-catalog/product-variants/metafields). Save the metafield namespace using the format `shipping_carrier_{yourCarrierId}`; otherwise, it will not be recognized as a valid attribute. */
                namespace?: string;
                /**
                 * @description The resource type associated with the metafield. Currently, the only values available are `product` and `variant`.
                 * @enum {string}
                 */
                resource_type?: "product" | "variant";
                /** @description The resource ID of the meta field. */
                resource_id?: string;
                /**
                 * @description The attribute type associated with the product or product variant metafield. Currently, the only value available is `metafield`.
                 * @enum {string}
                 */
                attribute_type?: "metafield";
              })[];
          })[];
        /**
         * Customer Details
         * @description The details of the Customer that has made the purchase.
         */
        customer?: {
          customer_groups?: {
              customer_group_id?: number;
              customer_group_name?: string;
            }[];
          customer_id?: number;
        };
        store_id: string;
        /**
         * Request Context
         * @description A collection of Reference Value objects.
         */
        request_context?: {
          reference_values?: {
              name?: string;
              value?: string;
            }[];
        };
      };
      zone_options?: components["schemas"]["ZoneOptionsInstance"];
      connection_options?: components["schemas"]["ConnectionOptionsInstance"];
    };
    /**
     * Customer Details
     * @description The details of the Customer that has made the purchase.
     */
    CustomerDetails: {
      customer_groups?: {
          customer_group_id?: number;
          customer_group_name?: string;
        }[];
      customer_id?: number;
    };
    /**
     * Zone Options Instance
     * @description Any zone-specific request options declared by the carrier and configured by the merchant to retrieve rates. Optional.
     */
    ZoneOptionsInstance: Record<string, never>;
    /**
     * Connection Options Instance
     * @description Any global request options declared by the carrier and configured by the merchant to retrieve rates. Optional.
     */
    ConnectionOptionsInstance: Record<string, never>;
    /**
     * Rate Options Instance
     * @description Optional, any checkout specific request options to retrieve rates
     */
    RateOptionsInstance: {
        key: string;
        value: string;
      }[];
    /**
     * Customer Group
     * @description The Group (if any) that this customer is in. The value will default to zero if the customer is not in a group or is a guest.
     */
    CustomerGroup: {
      customer_group_id?: number;
      customer_group_name?: string;
    };
    /** Key Value Pair */
    KeyValuePair: {
      key: string;
      value: string;
    };
    /**
     * Rate Response Payload
     * @description The response from the Shipping Service. Contains zero or more quotes.
     */
    RateResponsePayload: {
      quote_id: string;
      messages: ({
          text: string;
          /** @enum {string} */
          type: "INFO" | "WARNING" | "ERROR";
        })[];
      carrier_quotes: ({
          carrier_info?: {
            code: string;
            display_name: string;
          };
          quotes: ({
              /**
               * @description A code describing the service.
               * @example GND
               */
              code: string;
              /** @description A display name for the service. */
              display_name: string;
              /**
               * Money Value
               * @description Value object for a money amount.
               */
              cost: {
                currency: string;
                amount: number;
              };
              messages?: ({
                  text: string;
                  /** @enum {string} */
                  type: "INFO" | "WARNING" | "ERROR";
                })[];
              description?: string;
              rate_id?: string;
              /**
               * Money Value
               * @description Value object for a money amount.
               */
              discounted_cost?: {
                currency: string;
                amount: number;
              };
              /** Format: date */
              dispatch_date?: string;
              /**
               * Transit Time Object
               * @description Value object for the length of time in transit.
               */
              transit_time?: {
                /** @enum {string} */
                units?: "BUSINESS_DAYS" | "DAYS" | "HOURS";
                duration?: number;
              };
            })[];
        })[];
    };
    /**
     * Carrier Quote Object
     * @description A grouping of carrier rates and optionally, info about that carrier.
     */
    CarrierQuoteObject: {
      carrier_info?: {
        code: string;
        display_name: string;
      };
      quotes: ({
          /**
           * @description A code describing the service.
           * @example GND
           */
          code: string;
          /** @description A display name for the service. */
          display_name: string;
          /**
           * Money Value
           * @description Value object for a money amount.
           */
          cost: {
            currency: string;
            amount: number;
          };
          messages?: ({
              text: string;
              /** @enum {string} */
              type: "INFO" | "WARNING" | "ERROR";
            })[];
          description?: string;
          rate_id?: string;
          /**
           * Money Value
           * @description Value object for a money amount.
           */
          discounted_cost?: {
            currency: string;
            amount: number;
          };
          /** Format: date */
          dispatch_date?: string;
          /**
           * Transit Time Object
           * @description Value object for the length of time in transit.
           */
          transit_time?: {
            /** @enum {string} */
            units?: "BUSINESS_DAYS" | "DAYS" | "HOURS";
            duration?: number;
          };
        })[];
    };
    /**
     * Rate Request Item
     * @description A cart item along with its shipping-specific attributes.
     */
    RateRequestItem: {
      /** @description The variant SKU. */
      sku?: string;
      variant_id?: string;
      product_id?: string;
      name?: string;
      /**
       * Dimension Value
       * @description Value object for a length measurement.
       */
      length?: {
        /** @enum {string} */
        units: "cm" | "in";
        value: number;
      };
      /**
       * Dimension Value
       * @description Value object for a width measurement.
       */
      width?: {
        /** @enum {string} */
        units: "cm" | "in";
        value: number;
      };
      /**
       * Dimension Value
       * @description Value object for a height measurement.
       */
      height?: {
        /** @enum {string} */
        units: "cm" | "in";
        value: number;
      };
      /**
       * Weight Value
       * @description Value object for a weight measurement.
       */
      weight?: {
        /** @enum {string} */
        units: "oz" | "g";
        value: number;
      };
      /**
       * Money Value
       * @description Value object for a money amount.
       */
      discounted_price?: {
        currency: string;
        amount: number;
      };
      /**
       * Money Value
       * @description Value object for a money amount.
       */
      declared_value?: {
        currency: string;
        amount: number;
      };
      /** Format: int32 */
      quantity?: number;
      /** @description A list of arbitrary properties stored as part of the product or product variant meta fields. These consist of any public fields specific to the carrier integration. */
      attributes?: ({
          /** @description The key associated with the product or product variant meta field. */
          key?: string;
          /** @description The value associated with the product or product variant meta field. */
          value?: string;
          /** @description The namespace associated with metafields for [products](/docs/rest-catalog/products/metafields) and [product variants](/docs/rest-catalog/product-variants/metafields). Save the metafield namespace using the format `shipping_carrier_{yourCarrierId}`; otherwise, it will not be recognized as a valid attribute. */
          namespace?: string;
          /**
           * @description Resource type associated with the product or product variant meta field. Currently, the only values available are 'product' or 'variant'.
           * @enum {string}
           */
          resource_type?: "product" | "variant";
          /** @description The resource ID of the product or product variant meta field. */
          resource_id?: string;
          /**
           * @description Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
           * @enum {string}
           */
          attribute_type?: "metafield";
        })[];
    };
    /**
     * Request Context
     * @description A collection of Reference Value objects.
     */
    RequestContext: {
      reference_values?: {
          name?: string;
          value?: string;
        }[];
    };
    /**
     * Reference Value
     * @description Value objects contained within the request context.
     */
    ReferenceValue: {
      name?: string;
      value?: string;
    };
    /**
     * Message
     * @description A simple string/type response for returning information.
     */
    Message: {
      text: string;
      /** @enum {string} */
      type: "INFO" | "WARNING" | "ERROR";
    };
    /**
     * Rate Quote Object
     * @description A quote being returned as part of the rate request.
     */
    RateQuoteObject: {
      /**
       * @description A code describing the service.
       * @example GND
       */
      code: string;
      /** @description A display name for the service. */
      display_name: string;
      /**
       * Money Value
       * @description Value object for a money amount.
       */
      cost: {
        currency: string;
        amount: number;
      };
      messages?: ({
          text: string;
          /** @enum {string} */
          type: "INFO" | "WARNING" | "ERROR";
        })[];
      description?: string;
      rate_id?: string;
      /**
       * Money Value
       * @description Value object for a money amount.
       */
      discounted_cost?: {
        currency: string;
        amount: number;
      };
      /** Format: date */
      dispatch_date?: string;
      /**
       * Transit Time Object
       * @description Value object for the length of time in transit.
       */
      transit_time?: {
        /** @enum {string} */
        units?: "BUSINESS_DAYS" | "DAYS" | "HOURS";
        duration?: number;
      };
    };
    /**
     * Transit Time Object
     * @description Value object for the length of time in transit.
     */
    TransitTimeObject: {
      /** @enum {string} */
      units?: "BUSINESS_DAYS" | "DAYS" | "HOURS";
      duration?: number;
    };
    /**
     * Attribute Value
     * @description Value object for an attribute. This represents a product or product variant meta field.
     */
    AttributeValue: {
      /** @description The key associated with the product or product variant meta field. */
      key?: string;
      /** @description The value associated with the product or product variant meta field. */
      value?: string;
      /** @description The namespace associated with metafields for [products](/docs/rest-catalog/products/metafields) and [product variants](/docs/rest-catalog/product-variants/metafields). Save the metafield namespace using the format `shipping_carrier_{yourCarrierId}`; otherwise, it will not be recognized as a valid attribute. */
      namespace?: string;
      /**
       * @description Resource type associated with the product or product variant meta field. Currently, the only values available are 'product' or 'variant'.
       * @enum {string}
       */
      resource_type?: "product" | "variant";
      /** @description The resource ID of the product or product variant meta field. */
      resource_id?: string;
      /**
       * @description Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
       * @enum {string}
       */
      attribute_type?: "metafield";
    };
    /**
     * Money Value
     * @description Value object for a money amount.
     */
    MoneyValue: {
      currency: string;
      amount: number;
    };
    /**
     * Dimension Value
     * @description Value object for a length measurement.
     */
    DimensionValue: {
      /** @enum {string} */
      units: "cm" | "in";
      value: number;
    };
    /**
     * Weight Value
     * @description Value object for a weight measurement.
     */
    WeightValue: {
      /** @enum {string} */
      units: "oz" | "g";
      value: number;
    };
    /**
     * Rate Options Schema
     * @description A set of carrier-specific fields that will be displayed to shoppers at checkout.
     */
    RateOptionsSchema: ({
        /** @description The internal code that represents this input field. */
        code: string;
        /** @description Display name for this input field. */
        label: string;
        /** @description Longer description text to be displayed as a tooltip at checkout. */
        description?: string;
        /** @description Placeholder for any validation we choose to implement. */
        validation?: string;
        /**
         * @description How this input will be displayed.
         * @enum {string}
         */
        type: "date" | "string" | "select" | "code";
        /** @description A valid default value for this field. */
        default_value: string;
        /** @description The list of options available for `select` type fields. */
        value_options?: string[];
        /** @description The set of valid date ranges for `date` type fields. */
        date_ranges?: {
            /**
             * Date Value
             * @description Value Object representing a Date.
             */
            from?: {
              /** Format: date */
              date?: string;
              timezone?: string;
            };
            /**
             * Date Value
             * @description Value Object representing a Date.
             */
            to?: {
              /** Format: date */
              date?: string;
              timezone?: string;
            };
          }[];
      })[];
    /**
     * Key Value Pair Schema
     * @description Options, ranges, defaults, and validation for a carrier-defined field that displays at checkout.
     */
    KeyValuePairSchema: {
      /** @description The internal code that represents this input field. */
      code: string;
      /** @description Display name for this input field. */
      label: string;
      /** @description Longer description text to be displayed as a tooltip at checkout. */
      description?: string;
      /** @description Placeholder for any validation we choose to implement. */
      validation?: string;
      /**
       * @description How this input will be displayed.
       * @enum {string}
       */
      type: "date" | "string" | "select" | "code";
      /** @description A valid default value for this field. */
      default_value: string;
      /** @description The list of options available for `select` type fields. */
      value_options?: string[];
      /** @description For date type fields, a set of valid date ranges available to choose from */
      date_ranges?: {
          /**
           * Date Value
           * @description Value Object representing a Date.
           */
          from?: {
            /** Format: date */
            date?: string;
            timezone?: string;
          };
          /**
           * Date Value
           * @description Value Object representing a Date.
           */
          to?: {
            /** Format: date */
            date?: string;
            timezone?: string;
          };
        }[];
    };
    /**
     * Shipping Address
     * @description Object representing a destination or origin address for items.
     */
    ShippingAddress: {
      street_1?: string;
      street_2?: string;
      /** @example 94105 */
      zip: string;
      /** @example San Francisco */
      city?: string;
      /** @description State in ISO_3166 2 format. */
      state_iso2?: string;
      /**
       * @description Country in ISO_3166 2 format.
       * @example US
       */
      country_iso2: string;
      /**
       * @description Optional. Defaults to `RESIDENTIAL`.
       * @enum {string}
       */
      address_type?: "RESIDENTIAL" | "COMMERCIAL";
    };
    /**
     * Check Connection Options Request Payload
     * @description The payload sent to a Shipping Provider to check that the store is connected to this provider.
     *
     * Each Shipping Provider will have different configurations for the payload.
     */
    CheckConnectionOptionsRequestPayload: {
      connection_options: components["schemas"]["ConnectionOptionsInstance"];
    };
    /**
     * Check Connection Options Response Payload
     * @description The response received back from the Shipping Provider connection check. This allows the store to understand whether the connection was successful.
     */
    CheckConnectionOptionsResponsePayload: {
      /** @description Indicates whether or not the connection options are valid. */
      valid?: boolean;
      messages?: ({
          text: string;
          /** @enum {string} */
          type: "INFO" | "WARNING" | "ERROR";
        })[];
    };
    /**
     * Date Range
     * @description Representation of a range of date objects.
     */
    DateRange: {
      /**
       * Date Value
       * @description Value Object representing a Date.
       */
      from?: {
        /** Format: date */
        date?: string;
        timezone?: string;
      };
      /**
       * Date Value
       * @description Value Object representing a Date.
       */
      to?: {
        /** Format: date */
        date?: string;
        timezone?: string;
      };
    };
    /**
     * Date Value
     * @description Value Object representing a Date.
     */
    DateValue: {
      /** Format: date */
      date?: string;
      timezone?: string;
    };
    /**
     * Base Rate Request
     * @description The minimum required payload that is sent to retrieve rates.
     */
    BaseOptions: {
      /**
       * Shipping Address
       * @description Object representing a destination or origin address for items.
       */
      origin: {
        street_1?: string;
        street_2?: string;
        /** @example 94105 */
        zip: string;
        /** @example San Francisco */
        city?: string;
        /** @description State in ISO_3166 2 format. */
        state_iso2?: string;
        /**
         * @description Country in ISO_3166 2 format.
         * @example US
         */
        country_iso2: string;
        /**
         * @description Optional. Defaults to `RESIDENTIAL`.
         * @enum {string}
         */
        address_type?: "RESIDENTIAL" | "COMMERCIAL";
      };
      /**
       * Shipping Address
       * @description Object representing a destination or origin address for items.
       */
      destination: {
        street_1?: string;
        street_2?: string;
        /** @example 94105 */
        zip: string;
        /** @example San Francisco */
        city?: string;
        /** @description State in ISO_3166 2 format */
        state_iso2?: string;
        /**
         * @description Country in ISO_3166 2 format
         * @example US
         */
        country_iso2: string;
        /**
         * @description Defaults to residential. Optional.
         * @enum {string}
         */
        address_type?: "RESIDENTIAL" | "COMMERCIAL";
        /**
         * @description Describes one or more [custom form fields](/docs/rest-storefront/forms). Property key is the global ID of a shipping address form field. When no custom fields exist, the object is empty.
         * @example {
         *   "1": "selected_value",
         *   "3": "checkbox_selection_1"
         * }
         */
        form_fields?: {
          "<form field global ID>"?: components["schemas"]["FormFieldValue"];
        };
      };
      items: ({
          /** @description The variant SKU. */
          sku?: string;
          variant_id?: string;
          product_id?: string;
          name?: string;
          /**
           * Dimension Value
           * @description Value object for a length measurement.
           */
          length?: {
            /** @enum {string} */
            units: "cm" | "in";
            value: number;
          };
          /**
           * Dimension Value
           * @description Value object for a length measurement.
           */
          width?: {
            /** @enum {string} */
            units: "cm" | "in";
            value: number;
          };
          /**
           * Dimension Value
           * @description Value object for a length measurement.
           */
          height?: {
            /** @enum {string} */
            units: "cm" | "in";
            value: number;
          };
          /**
           * Weight Value
           * @description Value object for a weight measurement.
           */
          weight?: {
            /** @enum {string} */
            units: "oz" | "g";
            value: number;
          };
          /**
           * Money Value
           * @description Value object for a money amount.
           */
          discounted_price?: {
            currency: string;
            amount: number;
          };
          /**
           * Money Value
           * @description Value object for a money amount.
           */
          declared_value?: {
            currency: string;
            amount: number;
          };
          /** Format: int32 */
          quantity?: number;
          /** @description A list of arbitrary properties stored as part of the product or product variant meta fields. These consist of public fields specific to the carrier integration. */
          attributes?: ({
              /** @description The key associated with the meta field. */
              key?: string;
              /** @description The value associated with the meta field. */
              value?: string;
              /** @description The namespace associated with a [product](/docs/rest-catalog/products/metafields) or [product variant](/docs/rest-catalog/product-variants/metafields) metafields. You should save a metafield namespace under this format `shipping_carrier_{yourCarrierId}`; otherwise, you will not be able to recognize it as an attribute. */
              namespace?: string;
              /**
               * @description Resource type associated with the meta field. Currently, the only values available are 'product' or 'variant'.
               * @enum {string}
               */
              resource_type?: "product" | "variant";
              /** @description The resource ID of the meta field. */
              resource_id?: string;
              /**
               * @description Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
               * @enum {string}
               */
              attribute_type?: "metafield";
            })[];
        })[];
      /**
       * Customer Details
       * @description The details of the Customer that has made the purchase.
       */
      customer?: {
        customer_groups?: {
            customer_group_id?: number;
            customer_group_name?: string;
          }[];
        customer_id?: number;
      };
      store_id: string;
      /**
       * Request Context
       * @description A collection of Reference Value objects.
       */
      request_context?: {
        reference_values?: {
            /** @description The property to which the reference value pertains. Examples include `channel_id` and `cart_id`. */
            name?: string;
            value?: string;
          }[];
      };
    };
    /**
     * Form Field Value
     * @description The value of a [shipping address](/docs/rest-management/orders/order-shipping-addresses#get-a-shipping-address) form field. Depending on the form field, this could be a user-defined value or the value of a hidden input.
     */
    FormFieldValue: string;
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
   * Request shipping rates
   * @description Request shipping rates. BigCommerce sends a request for shipping quotes to the shipping provider URL. The shipping provider responds with shipping quotes.
   *
   * > #### Note
   * > * Substitute the host and path specific to the shipping provider for `your_app.example.com` and `rate`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  requestShippingRates: {
    /** @description Rate request object. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["RateRequestPayload"];
      };
    };
    responses: {
      /** @description Quote response. */
      200: {
        content: {
          "application/json": components["schemas"]["RateResponsePayload"];
        };
      };
    };
  };
  /**
   * Validate connection options
   * @description Validate connection options. BigCommerce sends a request to the shipping provider URL to check a merchantʼs connection credentials. The shipping provider sends a response indicating whether a merchant has valid credentials.
   *
   * > #### Note
   * > * Substitute the host and path specific to the shipping provider for `your_app.example.com` and `check_connection_options`.
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  validateConnectionOptions: {
    /** @description Check connection options request. */
    requestBody: {
      content: {
        "application/json": components["schemas"]["CheckConnectionOptionsRequestPayload"];
      };
    };
    responses: {
      /** @description Check connection options response. */
      200: {
        content: {
          "application/json": components["schemas"]["CheckConnectionOptionsResponsePayload"];
        };
      };
    };
  };
}
