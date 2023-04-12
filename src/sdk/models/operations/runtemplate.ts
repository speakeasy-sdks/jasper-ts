/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class RunTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "inputs" })
  inputs?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => shared.CommandOptions)
  options?: shared.CommandOptions;
}

export class RunTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: RunTemplateRequestBody;

  /**
   * The template ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=templateId",
  })
  templateId: string;
}

export class RunTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Server Error
   */
  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}