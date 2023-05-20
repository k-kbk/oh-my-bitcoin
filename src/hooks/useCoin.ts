import { useQuery } from '@tanstack/react-query';
import { CoinResponse } from '../types/coin';

export default function useCoin(date: string, uuid: string) {
  async function fetchCoin(date: string, uuid: string) {
    return await fetch(`/api/coin?date=${date}&uuid=${uuid}`, {
      method: 'GET',
    }).then((res) => res.json());
  }

  return useQuery<Response, Error, CoinResponse, Array<string>>(
    ['coin', date, uuid],
    () => fetchCoin(date, uuid),
  );
}
