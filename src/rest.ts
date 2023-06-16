import createClient from 'openapi-fetch';
import { z } from 'zod';

import { v2paths } from './generated/v2';
import { v3paths } from './generated/v3';

const restConfigSchema = z.object({
  storeHash: z.string().min(1),
  accessToken: z.string().min(1),
});

export const rest = ({ storeHash, accessToken }: { storeHash: string; accessToken: string }) => {
  const restConfig = restConfigSchema.safeParse({ storeHash, accessToken });

  if (!restConfig.success) {
    throw new Error(`Invalid REST config: ${JSON.stringify(restConfig.error.flatten(), null, 2)}`);
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
