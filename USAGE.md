<!-- Start SDK Example Usage -->
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