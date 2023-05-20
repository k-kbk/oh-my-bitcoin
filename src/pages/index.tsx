import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { DatePicker } from 'antd';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/ko_KR';
import Lottie from 'react-lottie-player';
import rocket from './public/rocket.json';
import 'dayjs/locale/ko';

const coins = [
  { name: '도지코인', uuid: 'a91GCGd_u96cF' },
  { name: '리플', uuid: '-l8Mn2pVlRs-p' },
  { name: '바이낸스코인', uuid: 'WcwrkfNI4FUAe' },
  { name: '비트코인', uuid: 'Qwsogvtv82FCd' },
  { name: '이더리움', uuid: 'razxDUgYGNAdQ' },
  { name: '이더리움클래식', uuid: 'hnfQfsYfeIGUQ' },
  { name: '테더', uuid: 'HIVsRcGKkPFtW' },
];

export default function Home() {
  const [date, setDate] = useState(dayjs());
  const [coinIndex, setCoinIndex] = useState(3);
  const router = useRouter();

  return (
    <main className="max-w-[52rem] w-full h-[100vh-7rem] flex flex-row justify-between items-center mx-10 md:mx-0">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          router.push(
            {
              pathname: '/result',
              query: {
                date: date.unix(),
                coin: coins[coinIndex].uuid,
              },
            },
            '/result',
          );
        }}
        className="font-semibold w-auto mr-10 drop-shadow"
      >
        <p className="text-4xl md:text-5xl py-2">만약, 내가</p>
        <div className="py-2">
          <DatePicker
            locale={locale}
            picker="month"
            format="YYYY년 MM월"
            allowClear={false}
            bordered={false}
            disabledDate={(currentDate) => currentDate > dayjs().endOf('day')}
            value={date}
            suffixIcon={null}
            style={{
              padding: 0,
              cursor: 'pointer',
            }}
            onChange={(date) => setDate(date!)}
            placeholder="2023년 1월"
          />
          <span className="text-4xl md:text-5xl py-2"> 에</span>
        </div>
        <div className="py-2">
          <Menu as="div" className="text-left relative inline-block">
            <Menu.Button className="text-4xl md:text-5xl inline-flex justify-center py-2 md:py-3 px-4 md:px-6 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none transition-colors">
              {coins[coinIndex].name}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="font-medium absolute left-0 z-10 w-52 mt-1 origin-top rounded-md bg-white drop-shadow-xl focus:outline-none">
                <ul className="py-1">
                  {coins.map((coin, index) => {
                    return (
                      <Menu.Item key={index}>
                        <li
                          onClick={() => setCoinIndex(index)}
                          className={
                            'font-medium text-black text-opacity-[0.88] py-2 px-4 hover:bg-gray-100'
                          }
                        >
                          {coin.name}
                        </li>
                      </Menu.Item>
                    );
                  })}
                </ul>
              </Menu.Items>
            </Transition>
          </Menu>
          <span className="text-4xl md:text-5xl"> 을</span>
        </div>
        <p className="text-4xl md:text-5xl py-2 mb-10">샀더라면...</p>
        <button className="text-xl md:text-2xl text-white max-w-[15rem] md:max-w-xs w-full py-4 bg-blue-600 rounded-lg drop-shadow-xl">
          얼마를 벌었을까?
        </button>
      </form>
      <div className=":ml-10 -mr-18 md:-mr-28 drop-shadow-lg">
        <Lottie
          loop
          animationData={rocket}
          play
          className="w-80 h-80 md:w-112 md:h-112"
        />
      </div>
    </main>
  );
}
