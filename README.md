<div align="center">
   <img src="https://user-images.githubusercontent.com/6267663/231430254-e0ec79d4-98b8-45b5-b019-363e54d02e5b.svg" width="150" />
   <h1>Jasper Typescript SDK</h1>
   <p>AI content generator for teams</p>
   <a href="https://developers.jasper.ai/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=5444e4&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/jasper-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/jasper-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/jasper-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/jasper-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/jasper-ai
```

### Yarn

```bash
yarn add @speakeasy-sdks/jasper-ai
```
<!-- End SDK Installation -->

## Authentication

In order to use Jasper's API, you will need to authenticate every request. We rely on API tokens to authenticate API requests.

Tokens are scoped to an admin's permission set and workspace.

Admins can generate API tokens in their workspace via [Settings/API tokens](https://beta.jasper.ai/settings/tokens)

Once your API token is generated, you will need to pass it in an 'x-api-key' Authorization header.

```bash
curl 
  --location --request GET 'https://api.jasper.ai/v1/$endpoint' \
  --header 'x-api-key: $YOUR_API_KEY' \
 ```

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Jasper } from "@speakeasy-sdks/jasper-ai";
import { RunCommandResponse } from "@speakeasy-sdks/jasper-ai/dist/sdk/models/operations";

const sdk = new Jasper({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

sdk.commands.run({
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
}).then((res: RunCommandResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [commands](docs/commands/README.md)

* [run](docs/commands/README.md#run) - Run a command to generate an AI Output

### [templates](docs/templates/README.md)

* [get](docs/templates/README.md#get) - Retrieve an individual default or custom template available in your workspace by ID
* [list](docs/templates/README.md#list) - Get a list of available templates
* [run](docs/templates/README.md#run) - Run a default template or custom template by ID to generate an AI output. See our guide on Using Templates for tips on getting started.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

