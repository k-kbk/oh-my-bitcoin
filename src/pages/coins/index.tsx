import Lottie from 'react-lottie-player';
import CoinItem from '../../components/coins/CoinItem';
import CoinList from '../../components/coins/CoinList';
import Heading from '../../components/common/Heading';
import useCoins from '../../hooks/useCoins';
import useCurrency from '../../hooks/useCurrency';
import spinner from '../public/spinner.json';

export default function Coins() {
  const { data, isLoading: coinsLoading } = useCoins();
  const { data: currencyData } = useCurrency();

  const coins = data?.coins;
  const currency = currencyData ? currencyData.basePrice : 1000;

  return (
    <main className="font-semibold max-w-screen-sm w-full flex flex-col justify-center items-start">
      <div className="w-full flex justify-between items-end">
        <Heading as="h1" content="암호화폐 시세" />
        <p className="font-medium text-sm text-myGray text-opacity-[0.85] mb-3 mr-1">{`*하나은행 달러 환율 ${Math.floor(
          currency,
        ).toLocaleString()}원`}</p>
      </div>
      <CoinList>
        {coinsLoading ? (
          <div className="w-full h-[28.5rem] flex justify-center items-center">
            <Lottie loop animationData={spinner} play className="w-12 h-12" />
          </div>
        ) : (
          coins!.map((coin) => {
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
