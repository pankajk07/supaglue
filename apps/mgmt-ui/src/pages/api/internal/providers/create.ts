import { getApplicationIdScopedHeaders } from '@/utils/headers';
import { CreateProviderResponse } from '@supaglue/schemas/v2/mgmt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_HOST } from '../..';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CreateProviderResponse | null>) {
  const result = await fetch(`${API_HOST}/internal/providers`, {
    method: 'POST',
    headers: getApplicationIdScopedHeaders(req),
    body: JSON.stringify(req.body),
  });

  if (!result.ok) {
    return res.status(500).json(null);
  }

  const r = await result.json();

  return res.status(200).json(r);
}
