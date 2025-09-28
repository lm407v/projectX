import type { Holding, PositionRow, SectorAllocation } from './types';

export const holdings: Holding[] = [
  {
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    price: 138.14,
    change: 2.35,
    changePercent: 1.73,
    sparkline: [120, 122, 118, 125, 129, 132, 138]
  },
  {
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    price: 251.12,
    change: -4.18,
    changePercent: -1.63,
    sparkline: [260, 255, 248, 246, 252, 258, 251]
  },
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 189.78,
    change: 1.91,
    changePercent: 1.01,
    sparkline: [180, 182, 185, 188, 190, 187, 189]
  }
];

export const positions: PositionRow[] = [
  {
    id: 1,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    quantity: 120,
    avgCost: 112.42,
    marketValue: 16576.8,
    gainLoss: 3072,
    gainLossPercent: 22.74
  },
  {
    id: 2,
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    quantity: 60,
    avgCost: 215.21,
    marketValue: 15067.2,
    gainLoss: 2154,
    gainLossPercent: 16.68
  },
  {
    id: 3,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    quantity: 95,
    avgCost: 162.54,
    marketValue: 18029.1,
    gainLoss: 2571,
    gainLossPercent: 16.61
  },
  {
    id: 4,
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    quantity: 80,
    avgCost: 276.12,
    marketValue: 24504,
    gainLoss: 2376,
    gainLossPercent: 10.74
  }
];

export const sectors: SectorAllocation[] = [
  { sector: 'Technology', value: 48 },
  { sector: 'Consumer Discretionary', value: 24 },
  { sector: 'Industrials', value: 12 },
  { sector: 'Healthcare', value: 9 },
  { sector: 'Financials', value: 7 }
];
