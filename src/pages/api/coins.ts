import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const coins = await axios('https://api.coinranking.com/v2/coins', {
    method: 'GET',
    headers: {
      'x-access-token':
        'coinrankingf95f624de22526faac029d9e79fdbd9777ef5d5747372d49',
    },
    params: {
      limit: 6,
    },
  }).then((res) => res.data.data);
  res.status(200).json(coins);
}
