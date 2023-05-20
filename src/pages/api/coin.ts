import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { date, uuid } = req.query;
  const coins = await axios(
    `https://api.coinranking.com/v2/coin/${uuid}/price`,
    {
      method: 'GET',
      headers: {
        'x-access-token':
          'coinrankingf95f624de22526faac029d9e79fdbd9777ef5d5747372d49',
      },
      params: {
        timestamp: date,
      },
    },
  ).then((res) => res.data.data);
  res.status(200).json(coins);
}
