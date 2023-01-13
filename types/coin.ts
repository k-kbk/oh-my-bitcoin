export interface Coin {
  uuid: string;
  name: string;
  symbol: string; // 통화 기호
  rank: number; // 순위
  price: string; // 가격
  marketCap: string; // 시가총액
  change: string; // 변동률
  iconUrl: string;
}

export interface CoinsResponse {
  coins: Array<Coin>;
  stats: {};
}
