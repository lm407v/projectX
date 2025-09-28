export type Timeframe = '1D' | '1W' | '1M' | 'YTD';

export interface Holding {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  sparkline: number[];
}

export interface PositionRow {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  avgCost: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

export interface SectorAllocation {
  sector: string;
  value: number;
}
