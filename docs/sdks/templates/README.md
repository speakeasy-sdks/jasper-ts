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
import { TemplateInputsType } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/shared";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "",
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

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetTemplateRequest](../../models/operations/gettemplaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetTemplateResponse](../../models/operations/gettemplateresponse.md)>**


## list

Get a list of available templates

### Example Usage

```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { ListTemplatesResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";
import { TemplateInputsType } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/shared";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "",
  },
});

sdk.templates.list().then((res: ListTemplatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListTemplatesResponse](../../models/operations/listtemplatesresponse.md)>**


## run

Run a default template or custom template by ID to generate an AI output. See our guide on Using Templates for tips on getting started.

### Example Usage

```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { RunTemplateResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "",
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

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.RunTemplateRequest](../../models/operations/runtemplaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RunTemplateResponse](../../models/operations/runtemplateresponse.md)>**

