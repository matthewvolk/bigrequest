// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/segments": {
    /**
     * Get All Segments
     * @description Returns a paginated *Segments List*.
     */
    get: operations["GetPaginatedSegmentsList"];
    /**
     * Update Segments
     * @description Updates *Segments*.
     *
     *  **Limits**
     *  * Limit of 10 concurrent requests.
     */
    put: operations["PutSegmentObjects"];
    /**
     * Create Segments
     * @description Creates *Segments*.
     *
     * **Limits**
     * * Limit of 10 concurrent requests.
     */
    post: operations["SegmentsPostRequest"];
    /**
     * Delete Segments
     * @description Deletes one or more *Segments* from a store. This will not delete any associated *Shopper Profiles*.
     */
    delete: operations["DeleteStoreSegment"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/segments/{segmentId}/shopper-profiles": {
    /**
     * Get All Shopper Profiles in a Segment
     * @description Returns a list of *Shopper Profiles* that are associated with a given *Segment*.
     *
     * **NOTE**: The `modify` Customers OAuth scope is a requirement for this endpoint.
     */
    get: operations["GetSegmentProfiles"];
    /**
     * Add Shopper Profiles to a Segment
     * @description Add *Shopper Profiles* to a specific *Segment*.
     *
     * **Limits**
     * * Limit of *Shopper Profiles* per request is `50`.
     * * Limit of 10 concurrent requests.
     */
    post: operations["PostShopperProfile"];
    /**
     * Remove Shopper Profiles from a Segment
     * @description Remove one or more *Shopper Profiles* that are associated with a *Segment*. This operation only removes the association; it doesn't delete the *Shopper Profiles*.
     */
    delete: operations["DeleteShopperProfile"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        segmentId: components["parameters"]["SegmentIdPathParam"];
      };
    };
  };
  "/shopper-profiles": {
    /**
     * Get All Shopper Profiles
     * @description Returns a paginated *Shopper Profiles* list.
     */
    get: operations["GetShopperList"];
    /**
     * Create Shopper Profiles
     * @description Creates a *Shopper Profile*.
     */
    post: operations["ShopperProfilesRequest"];
    /**
     * Delete Shopper Profiles
     * @description Deletes one or more *Shopper Profiles* from a store.
     */
    delete: operations["DeleteStoreShopperProfile"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/shopper-profiles/{shopperProfileId}/segments": {
    /**
     * Get All Segments for a Shopper Profile
     * @description Returns a paginated *Segments* list for a *Shopper Profile*.
     */
    get: operations["GetListShopperProfile"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        shopperProfileId: components["parameters"]["ShopperIdPathParam"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @description Response payload for the BigCommerce API. */
    SegmentsResponse: {
      data?: components["schemas"]["Segment"][];
      meta?: Record<string, never>;
    };
    /** @description Request payload for the BigCommerce API. */
    SegmentsPostRequest: components["schemas"]["SegmentPost"][];
    /** @description Request payload for the BigCommerce API. */
    SegmentsPutRequest: components["schemas"]["SegmentPut"][];
    SegmentPost: {
      /**
       * @description Name of the segment
       * @example My Segment
       */
      name: string;
      /**
       * @description Description of the segment
       * @example Description
       */
      description?: string;
    };
    SegmentPut: {
      /**
       * Format: uuid
       * @description ID of the segment.
       */
      id: string;
      /**
       * @description Name of the segment.
       * @example My Segment
       */
      name?: string;
      /**
       * @description Description of the segment.
       * @example Description
       */
      description?: string;
    };
    /** @description Data about the response including pagination, and collection totals. */
    Pagination: {
      /**
       * @description Total number of items in the result set.
       *
       * @example 1
       */
      total?: number;
      /**
       * @description Total number of items in the collection response.
       *
       * @example 1
       */
      count?: number;
      /**
       * @description The amount of items returned in the collection per page, controlled by the limit parameter.
       *
       * @example 50
       */
      per_page?: number;
      /**
       * @description The page you are currently on within the collection.
       *
       * @example 1
       */
      current_page?: number;
      /**
       * @description The total number of pages in the collection.
       *
       * @example 1
       */
      total_pages?: number;
    };
    /** @description Data about the response including pagination, and collection totals. */
    CollectionMeta: {
      pagination?: components["schemas"]["Pagination"];
    };
    ErrorResponse: components["schemas"]["BaseError"] & {
      errors?: components["schemas"]["DetailedErrors"];
    };
    /** @description Error payload for the BigCommerce API. */
    BaseError: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      instance?: string;
    };
    DetailedErrors: {
      [key: string]: string;
    };
    Segment: {
      /**
       * Format: uuid
       * @description The ID of the segment.
       */
      id?: string;
      /**
       * @description The name of the segment.
       *
       * @example My Segment
       */
      name?: string;
      /**
       * @description The description of the segment.
       *
       * @example Description
       */
      description?: string;
      /**
       * Format: date-time
       * @description The date of which the segment was created.
       *
       * @example "2022-09-15T23:44:05.000Z"
       */
      created_at?: string;
      /**
       * Format: date-time
       * @description The date of which the segment was updated.
       *
       * @example "2022-09-15T23:44:05.000Z"
       */
      updated_at?: string;
    };
    /** @description Response payload for the BigCommerce API. */
    SegmentCollectionResponse: {
      data?: components["schemas"]["Segment"][];
      meta?: components["schemas"]["CollectionMeta"];
    };
    ShopperProfile: {
      /**
       * Format: uuid
       * @description The ID of the *Shopper Profile*.
       */
      id?: string;
      /**
       * @description The ID of the registered *Customer* associated with this *Shopper Profile*.
       *
       * @example 1
       */
      customer_id?: number;
      /**
       * Format: date-time
       * @description The date and time when the *Shopper Profile* was created.
       */
      created_at?: string;
      /**
       * Format: date-time
       * @description The date and time when the *Shopper Profile* was last updated.
       */
      updated_at?: string;
    };
    /** @description A list of *Shopper Profiles* to associate with the segment. */
    ShopperProfilesAddRequest: string[];
    ShopperProfilesAddResponse: {
      data?: components["schemas"]["ShopperProfile"][];
    };
    ShopperProfilesGetResponse: {
      data?: components["schemas"]["ShopperProfile"][];
      meta?: components["schemas"]["CollectionMeta"];
    };
    /** @description Response payload for the BigCommerce API. */
    ShopperProfilesCollectionResponse: {
      data?: components["schemas"]["ShopperProfile"][];
      meta?: components["schemas"]["CollectionMeta"];
    };
    /** @description Request payload for the BigCommerce API. */
    ShopperProfilesPostRequest: components["schemas"]["ShopperProfilePost"][];
    ShopperProfilePost: {
      /**
       * @description The ID of a registered Customer to associate with the new *Shopper Profile*.
       * @example 1
       */
      customer_id?: number;
    };
    /** @description Response payload for the BigCommerce API. */
    ShopperProfilesResponse: {
      data?: components["schemas"]["ShopperProfile"][];
      meta?: Record<string, never>;
    };
  };
  responses: never;
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
    /** @description The *Segment* ID. */
    SegmentIdPathParam: string;
    /** @description The *Shopper Profile* ID. */
    ShopperIdPathParam: string;
    /** @description Comma separated IDs. */
    FilterIdParam?: string[];
    /** @description Page number. */
    FilterPageParam?: number;
    /** @description Items count per page. */
    FilterLimitParam?: number;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get All Segments
   * @description Returns a paginated *Segments List*.
   */
  GetPaginatedSegmentsList: {
    parameters: {
      query?: {
        page?: components["parameters"]["FilterPageParam"];
        limit?: components["parameters"]["FilterLimitParam"];
        "id:in"?: components["parameters"]["FilterIdParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SegmentCollectionResponse"];
        };
      };
    };
  };
  /**
   * Update Segments
   * @description Updates *Segments*.
   *
   *  **Limits**
   *  * Limit of 10 concurrent requests.
   */
  PutSegmentObjects: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SegmentsPutRequest"];
      };
    };
    responses: {
      /** @description An array of created *Segments*. */
      201: {
        content: {
          "application/json": components["schemas"]["SegmentsResponse"];
        };
      };
      /** @description The *Segment* was not valid. This is the result of either missing required fields, or because of invalid data. See the response for more details. */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Create Segments
   * @description Creates *Segments*.
   *
   * **Limits**
   * * Limit of 10 concurrent requests.
   */
  SegmentsPostRequest: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SegmentsPostRequest"];
        "application/xml": Record<string, never>;
      };
    };
    responses: {
      /** @description | An array of created *Segments*. */
      201: {
        content: {
          "application/json": components["schemas"]["SegmentsResponse"];
        };
      };
      /** @description The *Segment* was not valid. This is the result of either missing required fields, or because of invalid data. See the response for more details. */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
      /** @description Conflict */
      409: {
        content: {
          "application/json": {
            data: Record<string, never>[];
            errors: {
                status: number;
                title?: string;
                type?: string;
                errors?: Record<string, never>;
              }[];
            meta: {
              total?: number;
              success?: number;
              failed?: number;
            };
          };
        };
      };
    };
  };
  /**
   * Delete Segments
   * @description Deletes one or more *Segments* from a store. This will not delete any associated *Shopper Profiles*.
   */
  DeleteStoreSegment: {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["FilterIdParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description An empty response. */
      204: {
        content: never;
      };
    };
  };
  /**
   * Get All Shopper Profiles in a Segment
   * @description Returns a list of *Shopper Profiles* that are associated with a given *Segment*.
   *
   * **NOTE**: The `modify` Customers OAuth scope is a requirement for this endpoint.
   */
  GetSegmentProfiles: {
    parameters: {
      query?: {
        page?: components["parameters"]["FilterPageParam"];
        limit?: components["parameters"]["FilterLimitParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        segmentId: components["parameters"]["SegmentIdPathParam"];
      };
    };
    responses: {
      /** @description An array of *Shopper Profiles* objects and metadata. */
      200: {
        content: {
          "application/json": components["schemas"]["ShopperProfilesGetResponse"];
        };
      };
    };
  };
  /**
   * Add Shopper Profiles to a Segment
   * @description Add *Shopper Profiles* to a specific *Segment*.
   *
   * **Limits**
   * * Limit of *Shopper Profiles* per request is `50`.
   * * Limit of 10 concurrent requests.
   */
  PostShopperProfile: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        segmentId: components["parameters"]["SegmentIdPathParam"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ShopperProfilesAddRequest"];
      };
    };
    responses: {
      /** @description An array of *Shopper Profiles* added to a *Segment*. */
      201: {
        content: {
          "application/json": components["schemas"]["ShopperProfilesAddResponse"];
        };
      };
      /** @description Conflict */
      409: {
        content: {
          "application/json": {
            data: Record<string, never>[];
            errors: {
                status?: number;
                title?: string;
                type?: string;
                errors?: {
                  0?: string;
                };
              }[];
            meta: {
              total: number;
              success: number;
              failed: number;
            };
          };
        };
      };
    };
  };
  /**
   * Remove Shopper Profiles from a Segment
   * @description Remove one or more *Shopper Profiles* that are associated with a *Segment*. This operation only removes the association; it doesn't delete the *Shopper Profiles*.
   */
  DeleteShopperProfile: {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["FilterIdParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        segmentId: components["parameters"]["SegmentIdPathParam"];
      };
    };
    responses: {
      /** @description An empty response. */
      204: {
        content: never;
      };
    };
  };
  /**
   * Get All Shopper Profiles
   * @description Returns a paginated *Shopper Profiles* list.
   */
  GetShopperList: {
    parameters: {
      query?: {
        page?: components["parameters"]["FilterPageParam"];
        limit?: components["parameters"]["FilterLimitParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description An array of *Shopper Profiles* objects and metadata. */
      200: {
        content: {
          "application/json": components["schemas"]["ShopperProfilesCollectionResponse"];
        };
      };
    };
  };
  /**
   * Create Shopper Profiles
   * @description Creates a *Shopper Profile*.
   */
  ShopperProfilesRequest: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ShopperProfilesPostRequest"];
      };
    };
    responses: {
      /** @description An array of created *Shopper Profiles*. */
      201: {
        content: {
          "application/json": components["schemas"]["ShopperProfilesResponse"];
        };
      };
      /** @description The *Segment* was not valid. This is the result of either missing required fields, or because of invalid data. See the response for more details. */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Delete Shopper Profiles
   * @description Deletes one or more *Shopper Profiles* from a store.
   */
  DeleteStoreShopperProfile: {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["FilterIdParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description An empty response. */
      204: {
        content: never;
      };
    };
  };
  /**
   * Get All Segments for a Shopper Profile
   * @description Returns a paginated *Segments* list for a *Shopper Profile*.
   */
  GetListShopperProfile: {
    parameters: {
      query?: {
        page?: components["parameters"]["FilterPageParam"];
        limit?: components["parameters"]["FilterLimitParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        shopperProfileId: components["parameters"]["ShopperIdPathParam"];
      };
    };
    responses: {
      /** @description An array of *Segments* objects and metadata. */
      200: {
        content: {
          "application/json": components["schemas"]["SegmentCollectionResponse"];
        };
      };
    };
  };
}
