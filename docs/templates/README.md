# templates

## Overview

Templates for generating content

### Available Operations

* [get](#get) - Retrieve an individual default or custom template available in your workspace by ID
* [list](#list) - Get a list of available templates
* [run](#run) - Run a default template or custom template by ID to generate an AI output. See our guide on Using Templates for tips on getting started.

## get

Retrieve an individual default or custom template available in your workspace by ID

### Example Usage

```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { GetTemplateRequest, GetTemplateResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";
import { TemplateInputsTypeEnum } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetTemplateRequest = {
  templateId: "vel",
};

sdk.templates.get(req).then((res: GetTemplateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Get a list of available templates

### Example Usage

```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { ListTemplatesResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";
import { TemplateInputsTypeEnum } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.templates.list().then((res: ListTemplatesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## run

Run a default template or custom template by ID to generate an AI output. See our guide on Using Templates for tips on getting started.

### Example Usage

```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { RunTemplateRequest, RunTemplateResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: RunTemplateRequest = {
  requestBody: {
    inputs: {
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    options: {
      inputLanguage: "delectus",
      languageFormality: "tempora",
      outputCount: 383441,
      outputLanguage: "molestiae",
    },
  },
  templateId: "minus",
};

sdk.templates.run(req).then((res: RunTemplateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
