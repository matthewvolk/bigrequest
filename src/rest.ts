import createClient from 'openapi-fetch';
import { z } from 'zod';

import { BigRequestError } from './error';
import { v2paths } from './generated/v2';
import { v3paths } from './generated/v3';

const restConfigSchema = z.object({
  storeHash: z.string().min(1),
  accessToken: z.string().min(1),
});

/**
 * Serializes query parameters using CSV format for arrays, matching
 * BigCommerce's expected `style: form, explode: false` convention.
 *
 * The default openapi-fetch serializer uses `explode: true` (repeated keys),
 * but BigCommerce expects comma-separated values for array parameters
 * (e.g. `channel_id:in=1,2,3` rather than `channel_id:in=1&channel_id:in=2&channel_id:in=3`).
 */
export function bigcommerceQuerySerializer(query: Record<string, unknown>): string {
  const serializeEntry = ([key, value]: [string, unknown]): string | null => {
    if (value === null || value === undefined) {
      return null;
    }

    if (Array.isArray(value)) {
      return `${encodeURIComponent(key)}=${value.map(String).map(encodeURIComponent).join(',')}`;
    }

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    }

    return null;
  };

  return Object.entries(query)
    .map(serializeEntry)
    .filter((part): part is string => part !== null)
    .join('&');
}

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
      querySerializer: bigcommerceQuerySerializer,
    }),
    v3: createClient<v3paths>({
      baseUrl: `https://api.bigcommerce.com/stores/${restConfig.data.storeHash}/v3`,
      headers: { 'x-auth-token': restConfig.data.accessToken },
      querySerializer: bigcommerceQuerySerializer,
    }),
  };
};
