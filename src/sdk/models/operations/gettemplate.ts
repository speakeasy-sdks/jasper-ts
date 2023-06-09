/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTemplateRequest extends SpeakeasyBase {
  /**
   * The template ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=templateId",
  })
  templateId: string;
}

export class GetTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  templateOutput?: shared.TemplateOutput;
}
