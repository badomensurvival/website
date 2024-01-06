import { ServerStatus } from '@/interfaces/status';
import { apiFetcher } from '@/services';
import type { NextApiRequest, NextApiResponse } from 'next';
import { OnlinePlayers } from '@/interfaces/players';

export async function fetchStatus(): Promise<ServerStatus> {
  const onlinePlayers = (
    await apiFetcher<OnlinePlayers>('https://api.badomen.com.br/v1/players')
  ).filter((i) => !i.op);

  const data = await apiFetcher('https://api.badomen.com.br/v1/server');

  return {
    ...data,
    onlinePlayers,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerStatus>
) {
  const data = await fetchStatus();

  res.status(200).json(data);
}
