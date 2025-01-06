export type MarketDataType = {
  title: string;
  list: MarketDataListType[];
};

export type MarketDataListType = {
  id: number;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  ceiling: string;
  floor: string;
  baseIncrement?: string;
  quoteIncrement?: string;
  baseMinSize: any;
  baseMaxSize: any;
  tradingStatus: string;
  listRoles: any;
  baseCurrencyTruncate: number;
  priceTruncate: number;
  quoteCurrencyTruncate: number;
};

export type MarketSummaryType = {
  marketId: number;
  market: string;
  askPrice: string;
  bidPrice: string;
  lastPrice: string;
  openPrice: string;
  prevPrice: string;
  high: string;
  low: string;
  volume: string;
  listRoles: any;
};
