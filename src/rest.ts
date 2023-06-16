import createClient from 'openapi-fetch';

import { v2paths } from './generated/v2';
import { v3paths } from './generated/v3';

export const rest = ({ storeHash, accessToken }: { storeHash: string; accessToken: string }) => ({
  v2: createClient<v2paths>({
    baseUrl: `https://api.bigcommerce.com/stores/${storeHash}/v2`,
    headers: { 'x-auth-token': accessToken },
  }),
  v3: createClient<v3paths>({
    baseUrl: `https://api.bigcommerce.com/stores/${storeHash}/v3`,
    headers: { 'x-auth-token': accessToken },
  }),
});
