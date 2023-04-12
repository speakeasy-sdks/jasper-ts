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