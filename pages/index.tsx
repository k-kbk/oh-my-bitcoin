import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Lottie from 'react-lottie-player';
import rocket from '../public/rocket.json';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const coins = [
  { id: 1, name: '도지코인' },
  { id: 2, name: '리플' },
  { id: 3, name: '바이낸스코인' },
  { id: 4, name: '비트코인' },
  { id: 5, name: '이더리움' },
  { id: 6, name: '이더리움클래식' },
  { id: 7, name: '테더' },
];

export default function Home() {
  const [coinName, setCoinName] = useState('비트코인');

  return (
    <>
      <main className="max-w-screen-lg w-full h-[100vh-7rem] flex flex-row justify-center items-center">
        <form className="font-semibold w-auto mr-10">
          <p className="text-5xl py-2">내가</p>
          <div className="py-2">
            <span className="text-5xl inline-flex justify-center p-4 mr-2 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none">
              2021년 3월
            </span>
            <span className="text-5xl py-2">에</span>
          </div>
          <div className="py-2">
            <Menu as="div" className="text-left relative inline-block mr-2">
              <Menu.Button className="text-5xl w-full inline-flex justify-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 focus:outline-none">
                {coinName}
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
                <Menu.Items className="font-medium absolute left-0 z-10 w-56 origin-top-right rounded-md bg-white drop-shadow-md focus:outline-none">
                  <ul className="py-1">
                    {coins.map((coin) => {
                      return (
                        <Menu.Item key={coin.id}>
                          <li
                            onClick={(event) => setCoinName(coin.name)}
                            className={
                              'text-myGray text-opacity-[0.85] hover:text-black py-2 px-4 hover:bg-gray-100'
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
            <span className="text-5xl">을</span>
          </div>
          <p className="text-5xl py-2 mb-10">샀더라면...</p>
          <button className="text-2xl text-white max-w-xs w-full py-4 bg-blue-600 rounded-lg">
            얼마를 벌었을까?
          </button>
        </form>
        <div className="ml-10 -mr-28">
          <Lottie loop animationData={rocket} play className="w-112 h-112" />
        </div>
      </main>
    </>
  );
}
