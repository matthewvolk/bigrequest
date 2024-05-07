// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface paths {
  "/content/pages": {
    /**
     * Get Pages
     * @description Returns one or more content pages. This endpoint supports bulk operations.
     */
    get: operations["getPages"];
    /**
     * Update Pages
     * @description Updates one or more content pages. This endpoint supports bulk operations.
     */
    put: operations["updatePages"];
    /**
     * Create Pages
     * @description Creates one or more content pages. This endpoint supports bulk operations.
     */
    post: operations["createPages"];
    /**
     * Delete Pages
     * @description Deletes one or more content pages. This endpoint supports bulk operations.
     *
     * > #### Warning
     * > **Pay attention to query parameters**
     * > If you attempt to delete multiple pages by passing more than one page ID to `id:in` and one or more of them does not exist, you will receive a 404 response. However, the pages corresponding to the page IDs that do exist will still be deleted.
     */
    delete: operations["deletePages"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/content/pages/{pageId}": {
    /**
     * Get a Page
     * @description Returns one content page.
     *
     * > #### Warning
     * > **Pay attention to query parameters**
     * > This endpoint recognizes the same query parameters as [Get Multiple Pages](/docs/rest-content/pages#get-pages). If the requested page does not meet the query parameters you specify, you will receive a 404 response even if the requested `pageId` does exist.
     */
    get: operations["getPage"];
    /**
     * Update a Page
     * @description Updates one content page.
     */
    put: operations["updatePage"];
    /**
     * Delete a Page
     * @description Deletes one content page.
     *
     * > #### Warning
     * > **Query parameters not recognized**
     * > This endpoint does not recognize query parameters.
     */
    delete: operations["deletePage"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        pageId: components["parameters"]["pageIdPath"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @description Error payload for the BigCommerce API. */
    ResponseErrorBrief: {
      /** @description The HTTP status code. */
      status: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
    };
    /** @description Error payload for the BigCommerce API. */
    ResponseErrorDetailed: {
      /** @description The HTTP status code. */
      status: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      detail?: string;
    };
    /**
     * ResponseErrorItemized
     * @description Error payload for the BigCommerce API.
     */
    ResponseErrorItemized: {
      /** @description The HTTP status code. */
      status: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
      errors?: string[];
    };
    /** @description Data about the response, including pagination and collection totals. */
    ResponseMeta: {
      /** @description Data about the response, including pagination and collection totals. */
      pagination?: {
        /** @description Total number of items in the result set. */
        total?: number;
        /** @description Total number of items in the collection response. */
        count?: number;
        /** @description The amount of items returned in the collection per page, controlled by the limit parameter. */
        per_page?: number;
        /** @description The page you are currently on within the collection. */
        current_page?: number;
        /** @description The total number of pages in the collection. */
        total_pages?: number;
        /** @description Pagination links for the previous and next parts of the whole collection. */
        links?: {
          /** @description Link to the previous page returned in the response. */
          previous?: string;
          /** @description Link to the current page returned in the response. */
          current?: string;
          /** @description Link to the next page returned in the response. */
          next?: string;
        };
      };
    };
    /** @description Response payload for the BigCommerce API. */
    PagesCollectionResponse: {
      data?: (components["schemas"]["typePage"] | components["schemas"]["typeBlog"] | components["schemas"]["typeContactForm"] | components["schemas"]["typeFeed"] | components["schemas"]["typeRaw"] | components["schemas"]["typeLink"])[];
      meta?: components["schemas"]["ResponseMeta"];
    };
    /**
     * PageResponseObject
     * @description Response payload for a single content page.
     */
    SinglePageResponse: {
      data?: components["schemas"]["typePage"] | components["schemas"]["typeBlog"] | components["schemas"]["typeContactForm"] | components["schemas"]["typeFeed"] | components["schemas"]["typeRaw"] | components["schemas"]["typeLink"];
      meta?: components["schemas"]["ResponseMeta"];
    };
    /** @description Properties of the page modification request body. */
    PagePutObj: {
      /**
       * @description The name of the page. Must be unique.
       *
       * @example My Store Page
       */
      name?: string;
      /**
       * @description Boolean value that specifies the visibility of the page in the storefront’s navigation menu.
       *
       * Indicates whether the page is available to users and visible in any menus.
       */
      is_visible?: boolean;
      /**
       * @description ID of any parent Web page.
       *
       * @default 0
       * @example 0
       */
      parent_id?: number;
      /**
       * @description Specifies the order in which the page is displayed on the storefront. (Lower integers specify earlier display.)
       *
       * @default 0
       * @example 0
       */
      sort_order?: number;
      /**
       * @description Specifies the type of page. See [Pages V3 page types](/docs/rest-content/pages#page-types) for more about the differences.
       * @example page
       * @enum {string}
       */
      type?: "page" | "raw" | "contact_form" | "feed" | "link" | "blog";
      /** @description Boolean value that specifies whether this page is the storefront’s home page. */
      is_homepage?: boolean;
      /** @description Boolean value. If this value is set to `true`, this page will not be visible when the user is logged in to the store control panel. */
      is_customers_only?: boolean;
      /** @description Applicable when the page type is `contact_form`: contact email address that receives messages sent via the form. Must be unique. */
      email?: string;
      meta_title?: string | null;
      /**
       * @description HTML or variable that populates the element of this page, in default/desktop view. Required in a `POST` request if the page type is `raw`.
       *
       * @example <div>Hello World!</div>
       */
      body?: string | null;
      /** @description The URL of the RSS feed. Required in a `POST` request if the page type is `feed`. */
      feed?: string;
      /** @description Required in a `POST` request to create a link if the page type is `link`. */
      link?: string;
      /**
       * @description Applicable when the page type is `contact_form`: comma-separated list of keywords representing the fields enabled in the control panel for storefront display. Possible fields include:
       *
       * |Field|Description|
       * |-|-|
       * |`fullname`|Full name of the customer submitting the form|
       * |`phone`|Customer’s phone number, as submitted on the form|
       * |`companyname`|Customer’s submitted company name|
       * |`orderno`|Customer’s submitted order number|
       * |`rma`|Customer’s submitted RMA (Return Merchandise Authorization) number|
       *
       * @example fullname,companyname,phone,orderno,rma
       */
      contact_fields?: string;
      /**
       * @description Comma-separated list of SEO-relevant keywords to include in the element of this page.
       *
       * @default
       */
      meta_keywords?: string | null;
      /** @description Description contained within the element of this page. */
      meta_description?: string | null;
      /**
       * @description Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
       *
       * @example trousers,pockets,luxury
       */
      search_keywords?: string | null;
      /**
       * @description Relative URL on the storefront for this page.
       *
       * @example /my-store-page
       */
      url?: string;
      /**
       * @description The ID of the channel where this page should be shown.
       *
       * @default 1
       * @example 12
       */
      channel_id?: number;
    };
    PagePutBulk: WithRequired<{
      /** @description The ID of the target page. */
      id?: number;
    } & components["schemas"]["PagePutObj"], "id">;
    /** @description Properties of all Pages V3 pages. */
    anyTypePage: {
      id?: number;
      /** @default 1 */
      channel_id?: number;
      /**
       * @description The name of the page. Must be unique.
       * @example About Our Company
       */
      name: string;
      /**
       * @description A boolean value that controls whether the page is available to users or visible in any navigation menus.
       * @default true
       * @example true
       */
      is_visible?: boolean;
      /**
       * @description ID of the parent page, if any.
       * @default 0
       * @example 0
       */
      parent_id?: number;
      /**
       * @description Determines the order in which the page is displayed in the parent page’s menu. Pages with lower integers display earlier.
       * @example 0
       */
      sort_order?: number;
      /**
       * @description Determines the type of page. See [Pages V3 page types](/docs/rest-content/pages#page-types) for more about the differences.
       * @example page
       * @enum {string}
       */
      type: "page" | "raw" | "contact_form" | "feed" | "link" | "blog";
      /**
       * @description Determines whether this page loads at the siteʼs root route. For example, at `https://example.com/`.
       * @default false
       */
      is_homepage?: boolean;
      /**
       * @description When `true`, this page is not visible to merchant users who are signed in to the store control panel.
       * @default false
       */
      is_customers_only?: boolean;
      /**
       * @description Relative URL on the storefront for this page.
       *
       * @example /my-store-page
       */
      url?: string;
    };
    /** @description `type: page`. A user-defined plain-text page. */
    typePage: components["schemas"]["anyTypePage"] & components["schemas"]["pageMeta"] & components["schemas"]["searchKeywords"];
    /** @description A page that contains blog posts. Use caution; `blog`-type pages can only be created in the store control panel, but you may be able to change the type of a blog page to something else with this API. Use the [blog feature of the REST Content API](/docs/rest-content/store-content/blog-posts#create-a-blog-post) to work with blog posts and tags. */
    typeBlog: components["schemas"]["anyTypePage"] & components["schemas"]["pageMeta"] & components["schemas"]["searchKeywords"] & {
      /**
       * @description Relative URL on the storefront for this page.
       *
       * @example /blog/
       */
      url?: string;
    };
    /** @description `type: contact_form`. A user-customizable page that contains a contact form. Body content returns HTML. */
    typeContactForm: components["schemas"]["anyTypePage"] & components["schemas"]["pageMeta"] & components["schemas"]["searchKeywords"] & ({
      /** @description Applicable when the page type is `contact_form`: contact email address that receives messages sent using the form. Must be unique. */
      email?: string;
      /**
       * @description A comma-separated list of the contact field forms that are enabled in the store control panel for display on the subject storefront. Possible fields include:
       *
       * | Field | Description |
       * |:------|:------------|
       * | `fullname` | The full name of the customer submitting the form. |
       * | `phone` | The customer’s phone number. |
       * | `companyname` | The customer’s company name. |
       * | `orderno` | A field that lets customers specify a subject order number. |
       * | `rma` | A customer’s submitted RMA (Return Merchandise Authorization) number. |
       *
       * @example fullname,companyname,phone,orderno,rma
       */
      contact_fields?: string;
    });
    /** @description `type: feed`.  Makes RSS-syndicated content feeds available in the menu of other pages that contain markup. No page body. */
    typeFeed: components["schemas"]["anyTypePage"] & components["schemas"]["pageMeta"] & components["schemas"]["searchKeywords"] & {
      /** @description The URL of the RSS feed. Required in a `POST` request if the page type is `feed`. */
      feed: string;
    };
    /** @description `type: raw`. A user-defined page with a body that contains HTML markup or other stringified code. */
    typeRaw: components["schemas"]["anyTypePage"] & components["schemas"]["searchKeywords"] & ({
      /**
       * @description HTML or variable that populates the element of this page, in default/desktop view. Required in a `POST` request if the page type is `raw`.
       *
       * @example <div>Hello World!</div>
       */
      body: string | null;
      /**
       * @description The MIME type of the page body.
       * @example text/html
       */
      content_type?: string;
    });
    /** @description `type: link`. A link to an external absolute URL. Displays in the menu of other pages that contain markup. Does not contain a body. */
    typeLink: components["schemas"]["anyTypePage"] & {
      /** @description The link for the page type `link`. */
      link: string;
    };
    pageMeta: {
      meta_title?: string | null;
      /**
       * @description Comma-separated list of SEO-relevant keywords to include in the element of this page.
       *
       * @default ""
       */
      meta_keywords?: string | null;
      /**
       * @description Description contained within the element of this page.
       *
       * @default ""
       */
      meta_description?: string | null;
    };
    searchKeywords: {
      /**
       * @description Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
       *
       * @default ""
       * @example trousers,pockets,luxury
       */
      search_keywords?: string | null;
    };
  };
  responses: {
    /** @description Multiple operations have occurred and the status for each operation can be viewed in the body of the response. Typically indicates that a partial failure has occurred, such as when a `POST` or `PUT` request is successful, but saving the URL has failed. */
    HTTP207Response: {
      content: {
        "application/json": unknown;
      };
    };
    /**
     * @description Created.
     *
     * Response.data will inherit the data type of the request. A single entry passed as an object will return an object for the data property. Any number of entries passed in an array will return an array for the data property.
     *
     * Properties associated with a page `type` that are not required to create an entry will be created with default values.
     *
     * When you make bulk requests, an invalid input in any one entry will return 422. The entries that are valid will still be created.
     */
    HTTP201CreatePages: {
      content: {
        "application/json": {
          data?: components["schemas"]["typePage"] | components["schemas"]["typeBlog"] | components["schemas"]["typeContactForm"] | components["schemas"]["typeFeed"] | components["schemas"]["typeRaw"] | components["schemas"]["typeLink"];
          meta?: components["schemas"]["ResponseMeta"];
        };
      };
    };
    /** @description No content. A 204 response with no payload indicates successful deletion of all specified pages. */
    HTTP204: {
      content: never;
    };
  };
  parameters: {
    Accept: string;
    ContentType: string;
    /** @description The ID of the page to be operated on. */
    pageIdPath: string;
    /** @description Include the requested property in the response. The `body` property returns the page’s markup, text, or raw content. */
    includeQuery?: "body"[];
    /** @description Return only pages associated with the specified channel. */
    channelIdQuery?: number;
    /** @description A comma-separated string of page IDs to fetch. Supports bulk operations. If none of the page IDs passed exist, the query will return an empty `data` array. */
    idInQueryGet?: number[];
    /** @description Request deletion of multiple pages by passing a comma-separated string of corresponding page IDs. Supports bulk operations. */
    idInQueryDelete: number[];
    /** @description Name of the page. */
    nameQuery?: string;
    /** @description Return only pages whose `name` or `body` contain the supplied string. */
    nameLikeQuery?: string;
    /** @description The number of results to return per request. See `meta.pagination.per_page` in the response body. */
    limitQuery?: number;
    /** @description The ordered grouping of results to return. See `meta.pagination.current_page` in the response body. */
    pageQuery?: number;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Pages
   * @description Returns one or more content pages. This endpoint supports bulk operations.
   */
  getPages: {
    parameters: {
      query?: {
        channel_id?: components["parameters"]["channelIdQuery"];
        "id:in"?: components["parameters"]["idInQueryGet"];
        name?: components["parameters"]["nameQuery"];
        "name:like"?: components["parameters"]["nameLikeQuery"];
        limit?: components["parameters"]["limitQuery"];
        page?: components["parameters"]["pageQuery"];
        include?: components["parameters"]["includeQuery"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PagesCollectionResponse"];
        };
      };
      /** @description Bad Request; reasons for failure include passing query parameters that are not supported on this endpoint, but are common on other BigCommerce endpoints. */
      400: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorDetailed"];
        };
      };
      /** @description Invalid input. Reasons for failure include passing supported parameters with values that have the incorrect datatype. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorItemized"];
        };
      };
    };
  };
  /**
   * Update Pages
   * @description Updates one or more content pages. This endpoint supports bulk operations.
   */
  updatePages: {
    parameters: {
      query?: {
        include?: components["parameters"]["includeQuery"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["PagePutBulk"] | components["schemas"]["PagePutBulk"][];
      };
    };
    responses: {
      /** @description Updated. */
      200: {
        content: {
          "application/json": components["schemas"]["PagesCollectionResponse"];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorBrief"];
        };
      };
      /** @description The input was not valid. This is the result of missing required fields or other invalid arguments. See the response for more details. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorDetailed"];
        };
      };
    };
  };
  /**
   * Create Pages
   * @description Creates one or more content pages. This endpoint supports bulk operations.
   */
  createPages: {
    parameters: {
      query?: {
        include?: components["parameters"]["includeQuery"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": (components["schemas"]["typePage"] | components["schemas"]["typeBlog"] | components["schemas"]["typeContactForm"] | components["schemas"]["typeFeed"] | components["schemas"]["typeRaw"] | components["schemas"]["typeLink"]) | ((components["schemas"]["typePage"] | components["schemas"]["typeBlog"] | components["schemas"]["typeContactForm"] | components["schemas"]["typeFeed"] | components["schemas"]["typeRaw"] | components["schemas"]["typeLink"])[]);
      };
    };
    responses: {
      201: components["responses"]["HTTP201CreatePages"];
      207: components["responses"]["HTTP207Response"];
      /**
       * @description The input was not valid. This is the result of missing required fields or other invalid arguments. See the response for more details.
       *
       * When making bulk requests, an invalid input in any one entry will cause the whole request to return 422. The entries that are valid will still be created.
       */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorDetailed"];
        };
      };
    };
  };
  /**
   * Delete Pages
   * @description Deletes one or more content pages. This endpoint supports bulk operations.
   *
   * > #### Warning
   * > **Pay attention to query parameters**
   * > If you attempt to delete multiple pages by passing more than one page ID to `id:in` and one or more of them does not exist, you will receive a 404 response. However, the pages corresponding to the page IDs that do exist will still be deleted.
   */
  deletePages: {
    parameters: {
      query: {
        "id:in": components["parameters"]["idInQueryDelete"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      204: components["responses"]["HTTP204"];
      /** @description Not Found. One of more of the pages specified for deletion did not exist. Specified pages that did exist were successfully deleted. */
      404: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorBrief"];
        };
      };
      /** @description Invalid input. See response for details. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorDetailed"];
        };
      };
    };
  };
  /**
   * Get a Page
   * @description Returns one content page.
   *
   * > #### Warning
   * > **Pay attention to query parameters**
   * > This endpoint recognizes the same query parameters as [Get Multiple Pages](/docs/rest-content/pages#get-pages). If the requested page does not meet the query parameters you specify, you will receive a 404 response even if the requested `pageId` does exist.
   */
  getPage: {
    parameters: {
      query?: {
        include?: components["parameters"]["includeQuery"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        pageId: components["parameters"]["pageIdPath"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SinglePageResponse"];
        };
      };
      /** @description Not Found. */
      404: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorBrief"];
        };
      };
      /** @description Invalid input. One or more path parameter(s) did not have the correct datatype. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorItemized"];
        };
      };
    };
  };
  /**
   * Update a Page
   * @description Updates one content page.
   */
  updatePage: {
    parameters: {
      query?: {
        include?: components["parameters"]["includeQuery"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        pageId: components["parameters"]["pageIdPath"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PagePutObj"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SinglePageResponse"];
        };
      };
      /** @description Bad Request; reasons for failure include invalid query parameters. See the response for more details. */
      400: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorDetailed"];
        };
      };
      /** @description Not Found */
      404: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorBrief"];
        };
      };
      /** @description The input was not valid. This error is the result of missing required fields or other invalid arguments. See the response for more details. */
      422: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorDetailed"];
        };
      };
    };
  };
  /**
   * Delete a Page
   * @description Deletes one content page.
   *
   * > #### Warning
   * > **Query parameters not recognized**
   * > This endpoint does not recognize query parameters.
   */
  deletePage: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        pageId: components["parameters"]["pageIdPath"];
      };
    };
    responses: {
      204: components["responses"]["HTTP204"];
      /** @description The page specified for deletion did not exist. */
      404: {
        content: {
          "application/problem+json": components["schemas"]["ResponseErrorBrief"];
        };
      };
    };
  };
}
