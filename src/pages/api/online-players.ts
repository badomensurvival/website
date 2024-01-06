import { OnlinePlayers } from '@/interfaces/players';
import { apiFetcher } from '@/services';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function fetchOnlinePlayers(): Promise<OnlinePlayers> {
  return (
    await apiFetcher<OnlinePlayers>('https://api.badomen.com.br/v1/players')
  ).filter((i) => !i.op);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OnlinePlayers>
) {
  const data = await fetchOnlinePlayers();

  res.status(200).json(data);
}
