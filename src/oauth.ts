import { jwtVerify } from 'jose';
import { z } from 'zod';

import { BigRequestError } from './error';

const oauthConfigSchema = z.object({
  clientId: z.string().min(1),
  clientSecret: z.string().min(1),
  authCallback: z.string().url(),
});

export const oauth = (config: z.infer<typeof oauthConfigSchema>) => {
  const oauthConfig = oauthConfigSchema.safeParse(config);

  if (!oauthConfig.success) {
    throw new BigRequestError(
      `Invalid OAuth config: ${JSON.stringify(oauthConfig.error.flatten().fieldErrors, null, 2)}`,
    );
  }

  const authCallbackQuerySchema = z.object({
    code: z.string(),
    scope: z.string(),
    context: z.string(),
  });

  const authorize = async (query: z.infer<typeof authCallbackQuerySchema>) => {
    const authCallbackQuery = authCallbackQuerySchema.safeParse(query);

    if (!authCallbackQuery.success) {
      throw new BigRequestError(
        `Invalid Auth Callback arguments: ${JSON.stringify(
          authCallbackQuery.error.flatten().fieldErrors,
          null,
          2,
        )}`,
      );
    }

    const oauthResponse = await fetch(`https://login.bigcommerce.com/oauth2/token`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        client_id: oauthConfig.data.clientId,
        client_secret: oauthConfig.data.clientSecret,
        code: authCallbackQuery.data.code,
        context: authCallbackQuery.data.context,
        scope: authCallbackQuery.data.scope,
        grant_type: 'authorization_code',
        redirect_uri: oauthConfig.data.authCallback,
      }),
    });

    const oauthResponseSchema = z.object({
      access_token: z.string(),
      scope: z.string(),
      user: z.object({
        id: z.number(),
        username: z.string(),
        email: z.string(),
      }),
      context: z.string(),
      account_uuid: z.string(),
    });

    const accessTokenResponse = oauthResponseSchema.safeParse(await oauthResponse.json());

    if (!accessTokenResponse.success) {
      throw new BigRequestError(
        `Invalid access token response: ${JSON.stringify(
          accessTokenResponse.error.flatten().fieldErrors,
          null,
          2,
        )}`,
      );
    }

    return accessTokenResponse.data;
  };

  const jwtSchema = z.string().min(1);

  const verify = async (signedPayloadJwt: z.infer<typeof jwtSchema>) => {
    const parsedJwt = jwtSchema.safeParse(signedPayloadJwt);

    if (!parsedJwt.success) {
      throw new BigRequestError(
        `Invalid signed payload JWT: ${JSON.stringify(
          parsedJwt.error.flatten().fieldErrors,
          null,
          2,
        )}`,
      );
    }

    const secret = new TextEncoder().encode(oauthConfig.data.clientSecret);

    const decoded = await jwtVerify(parsedJwt.data, secret);

    const verifiedJwtSchema = z.object({
      aud: z.string(),
      iss: z.string(),
      iat: z.number(),
      nbf: z.number(),
      exp: z.number(),
      jti: z.string(),
      sub: z.string(),
      user: z.object({
        id: z.number(),
        email: z.string().email(),
        locale: z.string(),
      }),
      owner: z.object({
        id: z.number(),
        email: z.string().email(),
      }),
      url: z.string(),
      channel_id: z.number().nullable(),
    });

    const parsedVerifiedJwt = verifiedJwtSchema.safeParse(decoded.payload);

    if (!parsedVerifiedJwt.success) {
      throw new BigRequestError(
        `Verified JWT schema invalid: ${JSON.stringify(
          parsedVerifiedJwt.error.flatten().fieldErrors,
          null,
          2,
        )}`,
      );
    }

    return parsedVerifiedJwt.data;
  };

  return {
    authorize,
    verify,
  };
};
