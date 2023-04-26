# commands

## Overview

Commands for generating content

### Available Operations

* [run](#run) - Run a command to generate an AI Output

## run

Run a command to generate an AI Output

### Example Usage

```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { RunCommandRequestBody, RunCommandResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: RunCommandRequestBody = {
  inputs: {
    command: "Write a haiku about rabbits",
    context: "All rabbits eat kale",
  },
  options: {
    inputLanguage: "unde",
    languageFormality: "nulla",
    outputCount: 544883,
    outputLanguage: "illum",
  },
};

sdk.commands.run(req).then((res: RunCommandResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
