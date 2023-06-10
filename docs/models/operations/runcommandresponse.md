# RunCommandResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `commandOutput`                                              | [shared.CommandOutput](../../models/shared/commandoutput.md) | :heavy_minus_sign:                                           | OK                                                           |
| `contentType`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `serverError`                                                | [shared.ServerError](../../models/shared/servererror.md)     | :heavy_minus_sign:                                           | Server Error                                                 |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rawResponse`                                                | [AxiosResponse>](https://axios-http.com/docs/res_schema)     | :heavy_minus_sign:                                           | N/A                                                          |