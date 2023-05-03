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
import { GetTemplateResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";
import { TemplateInputsTypeEnum } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/shared";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.templates.get({
  templateId: "vel",
}).then((res: GetTemplateResponse) => {
  if (res.statusCode == 200) {
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

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.templates.list().then((res: ListTemplatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## run

Run a default template or custom template by ID to generate an AI output. See our guide on Using Templates for tips on getting started.

### Example Usage

```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { RunTemplateResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.templates.run({
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
}).then((res: RunTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
