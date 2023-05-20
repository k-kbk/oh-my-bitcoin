import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const currency = await axios(
    'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD',
    {
      method: 'GET',
    },
  ).then((res) => res.data[0]);
  res.status(200).send(currency);
}
