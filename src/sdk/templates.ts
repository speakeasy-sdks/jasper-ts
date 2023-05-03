/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Templates for generating content
 */
export class Templates {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Retrieve an individual default or custom template available in your workspace by ID
   */
  async get(
    req: operations.GetTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTemplateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/templates/{templateId}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetTemplateResponse =
      new operations.GetTemplateResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.templateOutput = utils.objectToClass(
            httpRes?.data,
            shared.TemplateOutput
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get a list of available templates
   */
  async list(
    config?: AxiosRequestConfig
  ): Promise<operations.ListTemplatesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/templates";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListTemplatesResponse =
      new operations.ListTemplatesResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.templateOutput = utils.objectToClass(
            httpRes?.data,
            shared.TemplateOutput
          );
        }
        break;
    }

    return res;
  }

  /**
   * Run a default template or custom template by ID to generate an AI output. See our guide on Using Templates for tips on getting started.
   */
  async run(
    req: operations.RunTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunTemplateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/templates/{templateId}/run",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.RunTemplateResponse =
      new operations.RunTemplateResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.commandOutput = utils.objectToClass(
            httpRes?.data,
            shared.CommandOutput
          );
        }
        break;
      case httpRes?.status == 500:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.serverError = utils.objectToClass(
            httpRes?.data,
            shared.ServerError
          );
        }
        break;
    }

    return res;
  }
}
