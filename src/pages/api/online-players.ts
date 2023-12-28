import { OnlinePlayers } from '@/interfaces/players'
import { apiFetcher } from '@/services'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<OnlinePlayers>
) {
    const data = await apiFetcher('https://api.badomen.com.br/v1/players')

    res.status(200).json(data)
}