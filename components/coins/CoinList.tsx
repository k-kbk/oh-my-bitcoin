interface CoinListProps {
  children: React.ReactNode;
}

export default function CoinList({ children }: CoinListProps) {
  return (
    <div className="w-full">
      <div className="text-myGray text-opacity-[0.85] w-full flex justify-between items-center px-8 py-3 mb-3 bg-slate-50 rounded-lg">
        <span className="text-left w-10">순위</span>
        <span className="text-center w-40">이름</span>
        <span className="text-center w-24">가격</span>
        <span className="text-right w-24">시가총액</span>
      </div>
      <ul className="w-full">{children}</ul>
    </div>
  );
}
