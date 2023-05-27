/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class RunCommandRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "inputs" })
    @Type(() => shared.CommandInputs)
    inputs?: shared.CommandInputs;

    @SpeakeasyMetadata()
    @Expose({ name: "options" })
    @Type(() => shared.CommandOptions)
    options?: shared.CommandOptions;
}

export class RunCommandResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    commandOutput?: shared.CommandOutput;

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
