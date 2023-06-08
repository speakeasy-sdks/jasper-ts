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
import { RunCommandResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "",
  },
});

sdk.commands.run({
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
}).then((res: RunCommandResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
