import { OutgoingHttpHeaders } from 'http2';

export type Version = 'v2' | 'v3';
export type Method = 'GET' | 'DELETE' | 'POST' | 'PUT';
export type Headers = OutgoingHttpHeaders;

export interface BigReqConfig {
  ACCESS_TOKEN?: string;
  STORE_HASH?: string;
  CLIENT_ID?: string;
  CLIENT_SECRET?: string;
  REDIRECT_URI?: string;
}

export interface BigReqInternalRequestConfig {
  version?: Version;
  headers?: Headers;
  body?: object;
}

export interface RequestConfig {
  url: string;
  method: Method;
  headers: Headers;
  body?: object | null;
}

export interface AuthorizeResponse {
  access_token: string;
  scope: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  context: string;
  account_uuid: string;
}
