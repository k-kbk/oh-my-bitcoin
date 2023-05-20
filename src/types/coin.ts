export interface Coin {
  uuid: string;
  name: string; // 이름
  symbol: string; // 통화 기호
  rank: number; // 순위
  price: string; // 가격
  marketCap: string; // 시가총액
  change: string; // 변동률
  iconUrl: string;
}

export interface CoinResponse {
  price: string; // 가격
  timestamp: number;
}

export interface CoinsResponse {
  coins: Array<Coin>;
  stats: object;
}
