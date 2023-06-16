// @ts-nocheck
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/form-fields": {
    /**
     * Get Form Fields 
     * @description Gets form fields.
     * 
     * > #### Note
     * > * Substitute your storefront domain for `yourstore.example.com`. 
     * > * The Send a Test Request feature is not currently supported for this endpoint.
     */
    get: operations["getFormFields"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @description Group of form field groups */
    FormFieldGroups: {
      customerAccount?: components["schemas"]["FormFields"];
      shippingAddress?: components["schemas"]["FormFields"];
      billingAddress?: components["schemas"]["FormFields"];
    };
    /** @description List of form fields for the group */
    FormFields: (components["schemas"]["FormField"])[];
    /** @description Form Field */
    FormField: {
      /** @description Field unique ID */
      id?: string;
      /** @description Field name */
      name?: string;
      /** @description Wether is a custom field or system built-in field. */
      custom?: boolean;
      /** @description User-friendly label */
      label?: string;
      /** @description Wether this field is required or not */
      required?: boolean;
      /** @description The field unique ID */
      default?: string;
      /**
       * @description Type of the value hold by the field 
       * @enum {string}
       */
      type?: "integer" | "string" | "array" | "date";
      /**
       * @description Type of the field 
       * @enum {string}
       */
      fieldType?: "checkbox" | "text" | "date" | "multiline" | "radio" | "dropdown";
      /** @description The minimun valid value for the field (integer and date type only) */
      min?: string;
      /** @description The minimun valid value for the field (integer and date type only) */
      max?: string;
      /** @description The maximum length for the value (string type only) */
      maxLength?: number;
      /** @description Whether the field represents a password field */
      secret?: boolean;
      /** @description Extra data for radio, dropdown and checkbox field types. */
      options?: {
        /** @description Placeholder text for dropdown field type. */
        helperLabel?: string;
        /** @description List of possible values for this field. */
        items?: ({
            label?: string;
            value?: string;
          })[];
      };
    };
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
   * Get Form Fields 
   * @description Gets form fields.
   * 
   * > #### Note
   * > * Substitute your storefront domain for `yourstore.example.com`. 
   * > * The Send a Test Request feature is not currently supported for this endpoint.
   */
  getFormFields: {
    parameters: {
      query?: {
        filter?: "customerAccount" | "shippingAddress" | "billingAddress";
      };
    };
    responses: {
      /** @description Returns an object with form fields groups. */
      200: {
        content: {
          "application/json": components["schemas"]["FormFieldGroups"];
        };
      };
    };
  };
}
