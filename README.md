# jasper-ai

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add jasper-ai
```

### Yarn

```bash
yarn add jasper-ai
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RunCommandRequestBody,
  RunCommandResponse
} from "jasper-ai/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "jasper-ai";
const sdk = new SDK({
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
    inputLanguage: "corrupti",
    languageFormality: "provident",
    outputCount: 715190,
    outputLanguage: "quibusdam",
  },
};

sdk.commands.run(req).then((res: RunCommandResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### commands

* `run` - Run a command to generate an AI Output

### templates

* `get` - Retrieve an individual default or custom template available in your workspace by ID
* `list` - Get a list of available templates
* `run` - Run a default template or custom template by ID to generate an AI output. See our guide on Using Templates for tips on getting started.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

