import Lottie from 'react-lottie-player';
import CoinItem from '../../components/coins/CoinItem';
import CoinList from '../../components/coins/CoinList';
import Heading from '../../components/common/Heading';
import useCoins from '../../hooks/useCoins';
import spinner from '../../public/spinner.json';

export default function Coins() {
  const { data, isLoading, error } = useCoins();
  const coins = data?.coins;

  return (
    <main className="font-semibold max-w-screen-sm w-full flex flex-col justify-center items-start">
      <Heading as="h1" content="암호화폐 시세" />
      <CoinList>
        {isLoading ? (
          <div className="w-full h-[28.5rem] flex justify-center items-center">
            <Lottie loop animationData={spinner} play className="w-12 h-12" />
          </div>
        ) : (
          coins?.map((coin) => {
            return <CoinItem value={coin} key={coin.uuid} />;
          })
        )}
      </CoinList>
      <button className="text-white w-full py-3 mb-10 bg-blue-600 rounded-lg drop-shadow-sm">
        더 보기
      </button>
    </main>
  );
}
