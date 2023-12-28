import { ServerStatus } from '@/interfaces/status'
import { apiFetcher } from '@/services'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ServerStatus>
) {
    const data = await apiFetcher('https://api.badomen.com.br/v1/server')

    res.status(200).json(data)
}