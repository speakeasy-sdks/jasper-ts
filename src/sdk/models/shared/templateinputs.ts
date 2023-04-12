/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TemplateInputOptions } from "./templateinputoptions";
import { Expose, Type } from "class-transformer";

/**
 * The expected type of the input's value.
 */
export enum TemplateInputsTypeEnum {
  String = "string",
  Boolean = "boolean",
  Number = "number",
}

export class TemplateInputs extends SpeakeasyBase {
  /**
   * The key to be used in the request body's inputs when using the Run Template endpoint to complete the template generation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "inputKey" })
  inputKey?: string;

  /**
   * The suggested input label.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;

  /**
   * The maximum character count accepted for this input's value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ elemType: TemplateInputOptions })
  @Expose({ name: "options" })
  @Type(() => TemplateInputOptions)
  options?: TemplateInputOptions[];

  /**
   * An input's placeholder that acts as an example input value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "placeholder" })
  placeholder?: string;

  /**
   * Indicates if an input is required to complete the template.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  /**
   * An input's tooltip to add additional context for the user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tooltip" })
  tooltip?: string;

  /**
   * The expected type of the input's value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: TemplateInputsTypeEnum;
}