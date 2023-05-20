import { useQuery } from '@tanstack/react-query';
import { CoinsResponse } from '../types/coin';

export default function useCoins() {
  async function getCoins() {
    return await fetch('/api/coins', { method: 'GET' }).then((res) =>
      res.json(),
    );
  }

  return useQuery<Response, Error, CoinsResponse, Array<string>>(
    ['coins'],
    getCoins,
  );
}
