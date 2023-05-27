/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CommandInputs extends SpeakeasyBase {
    /**
     * The command to execute.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "command" })
    command?: string;

    /**
     * Optional context for the command execution.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "context" })
    context?: string;
}
