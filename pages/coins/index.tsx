import CoinItem from '../../components/coins/CoinItem';
import CoinList from '../../components/coins/CoinList';
import Heading from '../../components/common/Heading';
import useCoins from '../../hooks/useCoins';

export default function Coins() {
  const { data, isLoading, error } = useCoins();

  if (isLoading) {
    return <div className="flex justify-center">loading...</div>;
  }
  if (error) {
    return <div className="flex justify-center">error</div>;
  }
  console.log(data);
  const coins = data.coins;

  return (
    <main className="max-w-lg w-full flex flex-col justify-center items-start">
      <Heading as="h1" content="암호화폐 시세" />
      <CoinList>
        {coins.map((coin) => {
          return <CoinItem value={coin} key={coin.uuid} />;
        })}
      </CoinList>
      <button className="font-medium text-white w-full py-3 bg-blue-500 rounded-lg mb-10">
        더 보기
      </button>
    </main>
  );
}
