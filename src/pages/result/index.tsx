import { GetServerSideProps } from 'next/types';
import { useState } from 'react';
import dayjs from 'dayjs';
import Lottie from 'react-lottie-player';
import useCoin from '../../hooks/useCoin';
import spinner from '../public/spinner.json';
import angry from '../public/angry.json';
import happy from '../public/happy.json';

interface ResultProps {
  currentDate: string;
  date: string;
  coin: string;
}

const items = [
  {
    name: '뜨-끈한 국밥이',
    price: 8000,
    suffix: '그릇',
  },
  {
    name: '바-삭한 치킨이 ',
    price: 20000,
    suffix: '마리',
  },
  {
    name: '시-원한 아메리카노가',
    price: 4000,
    suffix: '잔',
  },
];

export default function Result({ currentDate, date, coin }: ResultProps) {
  const { data: targetCoinData, isLoading: targetCoinLoading } = useCoin(
    date,
    coin,
  );
  const { data: currentCoinData, isLoading: currentCoinLoading } = useCoin(
    currentDate,
    coin,
  );
  const [money, setMoney] = useState(1000000);
  const [isChanged, setIsChanged] = useState(false);

  if (targetCoinLoading || currentCoinLoading) {
    return <Lottie loop animationData={spinner} play className="w-18 h-18" />;
  }

  const formatter = new Intl.NumberFormat('ko', {
    notation: 'compact',
  });

  /* 기준 날짜 */
  const targetDate = dayjs.unix(parseInt(date)).format('YYYY년 M월');
  /* 기준 가격 */
  const targetPrice = parseFloat(targetCoinData!.price);
  /* 현재 가격 */
  const currentPrice = parseFloat(currentCoinData!.price);
  /* 수익률 */
  const rate = ((currentPrice - targetPrice) / targetPrice) * 100;
  /* 총 이익 */
  const profit = money * (rate / 100);

  return (
    <main className="max-w-screen-lg w-full h-auto flex flex-col justify-center items-start px-12">
      <div className="w-full flex justify-end items-center drop-shadow-sm">
        <label
          htmlFor="range"
          className="font-semibold text-myGray text-opacity-[0.85] mr-3"
        >
          금액
        </label>
        <input
          id="range"
          type="range"
          min={1000000}
          max={100000000}
          step={1000000}
          value={money}
          onChange={(event) => {
            setIsChanged(true);
            setMoney(event.target.valueAsNumber);
          }}
        />
      </div>
      <article className="font-semibold text-3xl drop-shadow">
        <p className="my-1">{`${targetDate}에 비트코인을`}</p>
        <div className="my-1">
          <span className="inline-flex py-2 px-3 bg-slate-100 rounded-lg">{`${formatter.format(
            money,
          )} 원`}</span>
          <span> 어치를 사셨다면,</span>
        </div>
        <div className="text-[2.75rem] leading-none mt-3 mb-1">
          <span className="">오늘 약 </span>
          <span className={`${rate > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {`${Math.abs(Math.round(profit / 10000)).toLocaleString()}만 원`}
          </span>
          {rate > 0 ? (
            <>
              <span className="mr-2">을 벌었습니다!</span>
            </>
          ) : (
            <>
              <span className="mr-2">을 잃었습니다!</span>
            </>
          )}
        </div>
        <div className="my-1">
          <span>수익률 </span>
          <span className={` ${rate > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {Math.round(rate) + '%'}
          </span>
        </div>
      </article>
      <article className="w-full flex justify-between items-end mt-3 drop-shadow-sm">
        <div className="font-semibold text-2xl">
          {items.map((item, idx) => {
            return (
              <div
                className="w-full flex justify-start items-end mb-3"
                key={idx}
              >
                <span className="text-myGrayText mr-2">{item.name}</span>
                <span className="text-3xl">
                  {`${Math.round(
                    Math.abs(profit / item.price),
                  ).toLocaleString()}${item.suffix}`}
                </span>
              </div>
            );
          })}
        </div>
        {rate > 0 ? (
          <Lottie loop animationData={angry} play className="w-64 h-64" />
        ) : (
          <Lottie loop animationData={happy} play className="w-64 h-64" />
        )}
      </article>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { date, coin } = query;
  const currentDate = (new Date().getTime() / 1000).toFixed();
  return {
    props: {
      currentDate,
      date: date as string,
      coin: coin as string,
    },
  };
};
