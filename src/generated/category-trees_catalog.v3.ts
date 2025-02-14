// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/catalog/trees/categories": {
    /**
     * Get All Categories
     * @description Returns a list of categories.
     *
     * To get a specific category in a tree, provide a category ID.
     */
    get: operations["getAllCategories"];
    /**
     * Update Categories
     * @description Updates existing categories.
     *
     * To update a specific category in a tree, provide a `category id`.
     */
    put: operations["updateCategories"];
    /**
     * Create Categories
     * @description Creates new categories.
     *
     * Limits:
     * - 16,000 categories per store limit.
     * - 1,000 categories per product limit.
     * - 50 characters category name length.
     * - 8 levels of child categories depth limit.
     * - 65,535 characters category description length limit.
     *
     * Creating a category requires:
     *  - `name`
     *  - `tree_id` or `parent_id`
     */
    post: operations["createCategories"];
    /**
     * Delete categories
     * @description Deletes categories.
     *
     * To delete a specific category in a tree, provide a category ID.
     */
    delete: operations["deleteTreeCategories"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/catalog/trees": {
    /**
     * Get all category trees
     * @description Returns a list of category trees.
     */
    get: operations["getCategoryTrees"];
    /**
     * Upsert category trees
     * @description Upserts category trees.
     *
     * This single endpoint updates and creates category trees. If a tree object contains an ID, it is processed as an update operation using that ID. If you do not provide an ID, a new tree is created. The category tree `name` field is required to create trees, but is not required on the update.
     *
     * **Usage Notes**
     * * Channel ID in the `channels` field is required to create a category tree. You can only assign a category tree to one channel.
     */
    put: operations["upsertCategoryTrees"];
    /**
     * Delete category trees
     * @description Deletes category trees. A filter must be supplied with the endpoint.
     */
    delete: operations["deleteCategoryTrees"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/catalog/trees/{tree_id}/categories": {
    /**
     * Get a category tree
     * @description Returns a category tree.
     */
    get: operations["getCategoryTree"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        tree_id: components["parameters"]["TreeIdParam"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Response meta
     * @description Response metadata.
     */
    metaEmpty_Full: {
      [key: string]: unknown;
    };
    /**
     * DetailedErrors
     * @description Each key-value pair describes a failure or partial success case.
     */
    DetailedErrors: {
      [key: string]: unknown;
    };
    /** Get Categories */
    GetCategories: {
      name?: components["schemas"]["name"];
      category_id?: components["schemas"]["category_id"];
      category_uuid?: components["schemas"]["category_uuid"];
      tree_id?: components["schemas"]["tree_id"];
      parent_id?: components["schemas"]["parent_id"];
    } & components["schemas"]["CategoryBase"] & {
      url?: components["schemas"]["url"];
    };
    /** Create Categories */
    CreateCategories: ({
        name?: components["schemas"]["name"];
        url?: components["schemas"]["url"];
        parent_id?: components["schemas"]["parent_id"];
        tree_id?: components["schemas"]["tree_id"];
      } & components["schemas"]["CategoryBase"])[];
    UpdateCategories: ({
        category_id: components["schemas"]["category_id"];
        name?: components["schemas"]["name"];
        tree_id?: components["schemas"]["tree_id"];
        parent_id?: components["schemas"]["parent_id"];
      } & components["schemas"]["CategoryBase"] & {
        url?: components["schemas"]["url"];
      })[];
    /** Category */
    CategoryBase: {
      /**
       * @description The product description, which can include HTML formatting.
       *
       * @example <p>We offer a wide variety of products perfect for relaxing</p>
       */
      description?: string;
      /**
       * @description Number of views the category has on the storefront.
       *
       * @example 1050
       */
      views?: number;
      /**
       * @description Priority this category will be given when included in the menu and category pages. The lower the number, the closer to the top of the results the category will be.
       *
       * @example 3
       */
      sort_order?: number;
      /**
       * @description Custom title for the category page. If not defined, the category name will be used as the meta title.
       *
       * @example Bath
       */
      page_title?: string;
      /**
       * @description Custom meta keywords for the category page. If not defined, the storeʼs default keywords will be used. Must post as an array like: ["awesome","sauce"].
       *
       * @example [
       *   "shower",
       *   "tub"
       * ]
       */
      meta_keywords?: string[];
      /** @description Custom meta description for the category page. If not defined, the storeʼs default meta description will be used. */
      meta_description?: string;
      /**
       * @description A valid layout file. (Please refer to [this article](https://support.bigcommerce.com/articles/Public/Creating-Custom-Template-Files/) on creating category files.) This field is writable only for stores with a Blueprint theme applied.
       *
       * @example category.html
       */
      layout_file?: string;
      /**
       * @description Image URL used for this category on the storefront. Images can be uploaded via form file post to `/categories/{categoryId}/image`, or by providing a publicly accessible URL in this field. Must be either a full-qualified URL or an empty string.
       *
       * @example https://cdn8.bigcommerce.com/s-123456/product_images/d/fakeimage.png
       */
      image_url?: string;
      /** @description Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view. */
      is_visible?: boolean;
      /** @description A comma-separated list of keywords that can be used to locate the category when searching the store. */
      search_keywords?: string;
      /**
       * @description Determines how the products are sorted on category page load.
       *
       * @enum {string}
       */
      default_product_sort?: "use_store_settings" | "featured" | "newest" | "best_selling" | "alpha_asc" | "alpha_desc" | "avg_customer_review" | "price_asc" | "price_desc";
    };
    CategoryList: {
      data?: components["schemas"]["GetCategories"][];
      meta?: components["schemas"]["MetaPagination"];
    };
    CategoryNodeTree: {
      data?: components["schemas"]["CategoryNode"][];
      meta?: components["schemas"]["metaEmpty_Full"];
    };
    CategoryTreeList: {
      data?: components["schemas"]["Tree"][];
      meta?: components["schemas"]["MetaPaginationObject"];
    };
    CategoryTree: {
      data?: components["schemas"]["Tree"][];
      meta?: components["schemas"]["metaEmpty_Full"];
    };
    MetaPagination: {
      pagination?: {
        /** @example 246 */
        total?: number;
        /** @example 5 */
        count?: number;
        /** @example 5 */
        per_page?: number;
        /** @example 1 */
        current_page?: number;
        /** @example 50 */
        total_pages?: number;
        links?: {
          /** @example ?limit=5&page=1 */
          previous?: string;
          /** @example ?limit=5&page=2 */
          current?: string;
          /** @example ?limit=5&page=3 */
          next?: string;
        };
      };
    };
    ErrorRequest: {
      errors?: components["schemas"]["ErrorBasic"][];
    };
    ErrorBasic: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
    };
    ErrorAdditional: {
      errors?: components["schemas"]["DetailedErrors"];
    };
    MetaError: components["schemas"]["ErrorBasic"] & components["schemas"]["ErrorAdditional"];
    MetaData: {
      total?: number;
      success?: number;
      failed?: number;
    };
    SuccessNoContentResponse: {
      meta?: components["schemas"]["MetaData"];
    };
    PartialSuccessNoContentResponse: {
      errors?: components["schemas"]["MetaError"];
      meta?: components["schemas"]["MetaData"];
    };
    PartialSuccessResponse: {
      data?: components["schemas"]["GetCategories"][];
      errors?: components["schemas"]["MetaError"];
      meta?: components["schemas"]["MetaData"];
    };
    SuccessResponse: {
      data?: components["schemas"]["GetCategories"][];
      meta?: components["schemas"]["MetaData"];
    };
    ErrorResponse: {
      errors?: components["schemas"]["MetaError"];
      meta?: components["schemas"]["MetaData"];
    };
    Tree: {
      id?: number;
      name?: string;
      channels?: number[];
    };
    /**
     * @example [
     *   {
     *     "id": 0,
     *     "name": "string",
     *     "channels": [
     *       0
     *     ]
     *   }
     * ]
     */
    CategoryTreeListRequest: components["schemas"]["Tree"][];
    CategoryNode: {
      id?: number;
      parent_id?: number;
      depth?: number;
      path?: number[];
      name?: string;
      is_visible?: boolean;
      children?: components["schemas"]["CategoryNode"][];
    };
    MetaPaginationObject: {
      pagination?: {
        /** @example 246 */
        total?: number;
        /** @example 5 */
        count?: number;
        /** @example 5 */
        per_page?: number;
        /** @example 1 */
        current_page?: number;
        /** @example 50 */
        total_pages?: number;
        links?: {
          /** @example ?limit=5&page=2 */
          next?: string;
          /** @example ?limit=5&page=1 */
          current?: string;
        };
      };
    };
    beta4DetailedErrors: {
      [key: string]: unknown;
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
    beta4ErrorResponse: components["schemas"]["BaseError"] & {
      errors?: components["schemas"]["beta4DetailedErrors"];
    };
    /**
     * URL
     * @description If not provided in POST request, the URL is autogenerated from the category name.
     */
    url: {
      /** @example /bath/ */
      path?: string;
      /** @example false */
      is_customized?: boolean;
    };
    /**
     * Category UUID
     * Format: uuid
     * @description An additional unique identifier for the category. Read-Only.
     * @example d1964756-5e1d-4c72-9fa0-e1a3f7be4a34
     */
    readonly category_uuid: string;
    /**
     * Category ID
     * @description Unique ID of the *Category*. Increments sequentially.
     * @example 36
     */
    category_id: number;
    /**
     * Parent ID
     * @description The unique numeric ID of the category parent. To create a top-level category, specify the `tree_id`. Otherwise, you can specify the `parent_id`. Required in a POST if creating a child category.
     * @example 0
     */
    parent_id: number;
    /**
     * Tree ID
     * @description The ID of the category tree. To create a top-level category, specify the `tree_id`. Otherwise, you can specify the `parent_id`.
     * @example 1
     */
    tree_id: number;
    /**
     * Name
     * @description The name displayed for the category. Name is unique with respect to the categoryʼs siblings.
     * Required in a POST.
     * @example Bath
     */
    name: string;
    /** Not Found */
    NotFoundError: {
      /** @description The HTTP status code. */
      status: number;
      /** @description The error title describing the particular error. */
      title: string;
      type: string;
    };
    GeneralError: {
      /** @description The HTTP status code. */
      status: number;
      /** @description The error title describes the particular error. */
      title: string;
      type: string;
      /** @description The custom code of the error. */
      code?: number;
    };
    GeneralErrorWithErrors: {
      /** @description The HTTP status code. */
      status: number;
      /** @description The error title describing the particular error. */
      title: string;
      type: string;
      /** Detailed Errors */
      errors: {
        [key: string]: unknown;
      };
    };
  };
  responses: {
    /** @description Unauthorized */
    UnauthorizedError: {
      content: {
        "plain/text": string;
      };
    };
    /** @description Bad Request */
    BadRequestError: {
      content: {
        "plain/text": string;
      };
    };
    GeneralError: {
      content: {
        "application/json": components["schemas"]["GeneralError"];
      };
    };
    GeneralErrorWithErrors: {
      content: {
        "application/json": {
          errors?: components["schemas"]["GeneralErrorWithErrors"];
          meta?: components["schemas"]["MetaData"];
        };
      };
    };
  };
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
    /** @description Specifies the page number in a limited (paginated) list of products. */
    PageParam?: number;
    /** @description Controls the number of items per page in a limited (paginated) list of products. */
    LimitParam?: number;
    /** @description Fields to include, in a comma-separated list. The ID and the specified fields will be returned. */
    IncludeFieldsParam?: string[];
    /** @description Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded. */
    ExcludeFieldsParam?: string[];
    /** @description Filter items by keywords found in the `name`, `description`, or `sku` fields, or in the brand name. */
    KeywordParam?: string;
    /** @description Filter items based on whether the product is currently visible on the storefront. */
    IsVisibleParam?: boolean;
    /** @description Filter items by name. */
    NameParam?: string;
    /** @description Filter items by substring in the name property. `name:like=stick` returns both `Stickers` and `Lipstick colors`. */
    NameLikeParam?: string;
    /** @description Filter items by substring in the page title property. `page_title:like=oil` returns both `Soil and mulch` and `Oil pastels`. */
    PageTitleLikeParam?: string;
    /** @description Filter items by page_title. */
    PageTitleParam?: string;
    /** @description The ID of the category tree. */
    TreeIdParam: number;
    /** @description Filter by supplying a comma-separated list of category tree IDs. */
    IdInParam?: number[];
    /** @description Filter by supplying a comma-separated list of channel IDs. */
    ChannelIdInParam?: number[];
    /** @description Filter using a comma-separated list of one or more category UUIDs. To use category IDs, use the `category_id:in` parameter. */
    CategoryUuidInParam?: string[];
    /** @description Filter using a comma-separated list of one or more category IDs. To use category UUIDs, use the `category_uuid:in` parameter. */
    CategoryIdInParam?: number[];
    /** @description Filter using a comma-separated list of one or more category tree IDs. */
    TreeIdInParam?: number[];
    ParentIdInParam?: number[];
    /** @description Filter using a comma-separated list to exclude one or more category UUIDs. To exclude using category IDs, use the `category_id:not_in` parameter. */
    CategoryUuidNotInParam?: string[];
    /** @description Filter using a comma-separated list to exclude one or more category IDs. To exclude using category UUIDs, use the `category_uuid:not_in` parameter. */
    CategoryIdNotInParam?: number[];
    /** @description Filter using a comma-separated list to exclude one or more category tree IDs. */
    TreeIdNotInParam?: number[];
    ParentIdNotInParam?: number[];
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get All Categories
   * @description Returns a list of categories.
   *
   * To get a specific category in a tree, provide a category ID.
   */
  getAllCategories: {
    parameters: {
      query?: {
        "category_uuid:in"?: components["parameters"]["CategoryUuidInParam"];
        "category_uuid:not_in"?: components["parameters"]["CategoryUuidNotInParam"];
        "category_id:in"?: components["parameters"]["CategoryIdInParam"];
        "category_id:not_in"?: components["parameters"]["CategoryIdNotInParam"];
        "tree_id:in"?: components["parameters"]["TreeIdInParam"];
        "tree_id:not_in"?: components["parameters"]["TreeIdNotInParam"];
        "parent_id:in"?: components["parameters"]["ParentIdInParam"];
        "parent_id:not_in"?: components["parameters"]["ParentIdNotInParam"];
        page_title?: components["parameters"]["PageTitleParam"];
        "page_title:like"?: components["parameters"]["PageTitleLikeParam"];
        name?: components["parameters"]["NameParam"];
        "name:like"?: components["parameters"]["NameLikeParam"];
        keyword?: components["parameters"]["KeywordParam"];
        is_visible?: components["parameters"]["IsVisibleParam"];
        include_fields?: components["parameters"]["IncludeFieldsParam"];
        exclude_fields?: components["parameters"]["ExcludeFieldsParam"];
        page?: components["parameters"]["PageParam"];
        limit?: components["parameters"]["LimitParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description List of categories. */
      200: {
        content: {
          "application/json": components["schemas"]["CategoryList"];
        };
      };
      400: components["responses"]["BadRequestError"];
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      422: components["responses"]["GeneralErrorWithErrors"];
    };
  };
  /**
   * Update Categories
   * @description Updates existing categories.
   *
   * To update a specific category in a tree, provide a `category id`.
   */
  updateCategories: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateCategories"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["SuccessNoContentResponse"];
        };
      };
      /** @description Partial success */
      207: {
        content: {
          "application/json": components["schemas"]["PartialSuccessNoContentResponse"];
        };
      };
      /** @description Bad request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorRequest"];
        };
      };
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      /** @description The Category was not valid. This is the result of missing required fields, or of invalid data. See the response for more details. */
      422: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Create Categories
   * @description Creates new categories.
   *
   * Limits:
   * - 16,000 categories per store limit.
   * - 1,000 categories per product limit.
   * - 50 characters category name length.
   * - 8 levels of child categories depth limit.
   * - 65,535 characters category description length limit.
   *
   * Creating a category requires:
   *  - `name`
   *  - `tree_id` or `parent_id`
   */
  createCategories: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCategories"];
      };
    };
    responses: {
      /** @description Created */
      201: {
        content: {
          "application/json": components["schemas"]["SuccessResponse"];
        };
      };
      /** @description Multi-Status */
      207: {
        content: {
          "application/json": components["schemas"]["PartialSuccessResponse"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorRequest"];
        };
      };
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      /** @description The Category was not valid. This is the result of missing required fields, or of invalid data. See the response for more details. */
      422: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Delete categories
   * @description Deletes categories.
   *
   * To delete a specific category in a tree, provide a category ID.
   */
  deleteTreeCategories: {
    parameters: {
      query?: {
        "category_uuid:in"?: components["parameters"]["CategoryUuidInParam"];
        "category_id:in"?: components["parameters"]["CategoryIdInParam"];
        "tree_id:in"?: components["parameters"]["TreeIdInParam"];
        "parent_id:in"?: components["parameters"]["ParentIdInParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description Categories are deleted */
      202: {
        content: {
          "application/json": components["schemas"]["SuccessNoContentResponse"];
        };
      };
      /** @description Bad request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorRequest"];
        };
      };
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      422: components["responses"]["GeneralErrorWithErrors"];
    };
  };
  /**
   * Get all category trees
   * @description Returns a list of category trees.
   */
  getCategoryTrees: {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["IdInParam"];
        "channel_id:in"?: components["parameters"]["ChannelIdInParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description List of category trees. */
      200: {
        content: {
          "application/json": components["schemas"]["CategoryTreeList"];
        };
      };
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      422: components["responses"]["GeneralErrorWithErrors"];
    };
  };
  /**
   * Upsert category trees
   * @description Upserts category trees.
   *
   * This single endpoint updates and creates category trees. If a tree object contains an ID, it is processed as an update operation using that ID. If you do not provide an ID, a new tree is created. The category tree `name` field is required to create trees, but is not required on the update.
   *
   * **Usage Notes**
   * * Channel ID in the `channels` field is required to create a category tree. You can only assign a category tree to one channel.
   */
  upsertCategoryTrees: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CategoryTreeListRequest"];
      };
    };
    responses: {
      /** @description Created a category tree. */
      200: {
        content: {
          "application/json": components["schemas"]["CategoryTree"];
        };
      };
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      /** @description The Channel was not valid. See the response for more details. */
      422: {
        content: {
          "application/json": components["schemas"]["beta4ErrorResponse"];
        };
      };
    };
  };
  /**
   * Delete category trees
   * @description Deletes category trees. A filter must be supplied with the endpoint.
   */
  deleteCategoryTrees: {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["IdInParam"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description Deleted */
      204: {
        content: never;
      };
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      422: components["responses"]["GeneralErrorWithErrors"];
    };
  };
  /**
   * Get a category tree
   * @description Returns a category tree.
   */
  getCategoryTree: {
    parameters: {
      query?: {
        /** @description Max depth for a tree of categories. */
        depth?: number;
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        tree_id: components["parameters"]["TreeIdParam"];
      };
    };
    responses: {
      /** @description Categories tree */
      200: {
        content: {
          "application/json": components["schemas"]["CategoryNodeTree"];
        };
      };
      401: components["responses"]["UnauthorizedError"];
      403: components["responses"]["GeneralError"];
      /** @description The tree was not found. */
      404: {
        content: {
          "application/json": components["schemas"]["beta4ErrorResponse"];
        };
      };
    };
  };
}
