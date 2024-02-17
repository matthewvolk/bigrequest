import createClient from 'openapi-fetch';
import { z } from 'zod';

import { BigRequestError } from './error';
import { v2paths } from './generated/v2';
import { v3paths } from './generated/v3';

const restConfigSchema = z.object({
  storeHash: z.string().min(1),
  accessToken: z.string().min(1),
});

export const rest = ({ storeHash, accessToken }: { storeHash: string; accessToken: string }) => {
  const restConfig = restConfigSchema.safeParse({ storeHash, accessToken });

  if (!restConfig.success) {
    throw new BigRequestError(
      `Invalid REST config: ${JSON.stringify(restConfig.error.flatten().fieldErrors, null, 2)}`,
    );
  }

  return {
    v2: createClient<v2paths>({
      baseUrl: `https://api.bigcommerce.com/stores/${restConfig.data.storeHash}/v2`,
      headers: { 'x-auth-token': restConfig.data.accessToken },
    }),
    v3: createClient<v3paths>({
      baseUrl: `https://api.bigcommerce.com/stores/${restConfig.data.storeHash}/v3`,
      headers: { 'x-auth-token': restConfig.data.accessToken },
    }),
  };
};
