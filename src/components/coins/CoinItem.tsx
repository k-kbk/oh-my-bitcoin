import Image from 'next/image';
import { Coin } from '../../types/coin';
import isPositive from '../../utils/isPositive';

interface CoinProps {
  value: Coin;
}

export default function CoinItem({ value }: CoinProps) {
  const { uuid, rank, iconUrl, name, symbol, price, change, marketCap } = value;
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const compactCurrency = new Intl.NumberFormat('ko', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
  });

  return (
    <li
      key={uuid}
      className="w-full h-16 flex justify-between items-center px-10 py-2 mb-3 bg-slate-50 rounded-lg drop-shadow-sm"
    >
      <p className="text-lg w-10">{rank}</p>
      <div className="h-full flex">
        <div className="w-14 flex justify-center mr-2">
          <Image
            src={iconUrl.split('?')[0]}
            alt={name}
            width={36}
            height={36}
          />
        </div>
        <div className="w-36 flex flex-col justify-center">
          <p className="text-base">{`${name}`}</p>
          <p className="text-xs text-myGray text-opacity-[0.85] ">{symbol}</p>
        </div>
      </div>

      <div className="text-right w-24 mr-2">
        <p className="text-base">{currency.format(parseFloat(price))}</p>
        <p
          className={`text-xs ${
            isPositive(parseFloat(change)) ? 'text-green-500' : 'text-red-500'
          }`}
        >{`${isPositive(parseFloat(change)) ? '+' : ''}${change}%`}</p>
      </div>
      <div className="text-right w-24">
        <p className="text-base">
          {compactCurrency.format(parseFloat(marketCap)).slice(2)}
        </p>
      </div>
    </li>
  );
}
