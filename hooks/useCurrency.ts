import { useQuery } from '@tanstack/react-query';
import { Currency } from '../types/currency';

export default function useCurrency() {
  async function fetchCurrency() {
    return await fetch('/api/currency', {
      method: 'GET',
    }).then((res) => res.json());
  }

  return useQuery<Response, Error, Currency, Array<string>>(
    ['currency'],
    fetchCurrency,
  );
}
