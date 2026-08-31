/**
 * Central demo data for the swirl Owners App homepage section.
 * All figures are illustrative demo data (AED).
 */

export interface OutletMetrics {
  id: string;
  name: string;
  online: boolean;
  netSales: number;
  orders: number;
  avgOrderValue: number;
  openOrders: number;
  vsYesterday: number; // percentage
  dineIn: number;
  takeaway: number;
  delivery: number;
  discounts: number;
  voids: number;
  expenses: number;
  hourly: number[]; // 12 buckets, 11:00 → 22:00
  topItems: { name: string; qty: number }[];
  color: string;
}

export const OUTLETS: OutletMetrics[] = [
  {
    id: 'marina',
    name: 'Dubai Marina',
    online: true,
    netSales: 18420,
    orders: 312,
    avgOrderValue: 59,
    openOrders: 14,
    vsYesterday: 12.4,
    dineIn: 9800,
    takeaway: 4120,
    delivery: 4500,
    discounts: 620,
    voids: 180,
    expenses: 3100,
    hourly: [420, 690, 980, 1240, 1580, 1320, 1100, 1460, 2150, 2480, 2100, 1900],
    topItems: [
      { name: 'Pistachio Latte', qty: 86 },
      { name: 'Grilled Chicken', qty: 61 },
      { name: 'Margherita Pizza', qty: 54 },
    ],
    color: '#146EF5',
  },
  {
    id: 'jbr',
    name: 'JBR Walk',
    online: true,
    netSales: 14260,
    orders: 268,
    avgOrderValue: 53,
    openOrders: 9,
    vsYesterday: -3.1,
    dineIn: 7300,
    takeaway: 3260,
    delivery: 3700,
    discounts: 480,
    voids: 210,
    expenses: 2650,
    hourly: [310, 520, 810, 1010, 1290, 1120, 940, 1180, 1720, 1980, 1690, 1490],
    topItems: [
      { name: 'Caesar Salad', qty: 72 },
      { name: 'Pistachio Latte', qty: 58 },
      { name: 'Lebanese Zaatar', qty: 44 },
    ],
    color: '#0B1F3A',
  },
  {
    id: 'downtown',
    name: 'Downtown Boulevard',
    online: true,
    netSales: 21150,
    orders: 341,
    avgOrderValue: 62,
    openOrders: 18,
    vsYesterday: 18.9,
    dineIn: 11800,
    takeaway: 4350,
    delivery: 5000,
    discounts: 710,
    voids: 140,
    expenses: 3480,
    hourly: [480, 760, 1090, 1380, 1720, 1490, 1230, 1610, 2380, 2760, 2340, 2110],
    topItems: [
      { name: 'Margherita Pizza', qty: 94 },
      { name: 'Grilled Chicken', qty: 77 },
      { name: 'Pistachio Latte', qty: 63 },
    ],
    color: '#2FA96B',
  },
  {
    id: 'alqouz',
    name: 'Al Quoz Kitchen',
    online: false,
    netSales: 8940,
    orders: 176,
    avgOrderValue: 51,
    openOrders: 4,
    vsYesterday: 5.2,
    dineIn: 2100,
    takeaway: 2340,
    delivery: 4500,
    discounts: 260,
    voids: 90,
    expenses: 1720,
    hourly: [180, 320, 540, 690, 880, 760, 640, 810, 1120, 1290, 1010, 700],
    topItems: [
      { name: 'Lebanese Zaatar', qty: 58 },
      { name: 'Caesar Salad', qty: 41 },
      { name: 'Margherita Pizza', qty: 33 },
    ],
    color: '#E9A13B',
  },
];

export const TIME_FILTERS = ['Today', 'Yesterday', 'Last 7 Days', 'This Month', 'Custom'] as const;
export type TimeFilter = (typeof TIME_FILTERS)[number];

/** Multiplier applied to demo figures per time filter. */
export const FILTER_MULTIPLIER: Record<TimeFilter, number> = {
  Today: 1,
  Yesterday: 0.92,
  'Last 7 Days': 6.4,
  'This Month': 26.8,
  Custom: 3.5,
};

export const COMPARISON_METRICS = [
  { key: 'netSales', label: 'Net sales' },
  { key: 'orders', label: 'Total orders' },
  { key: 'avgOrderValue', label: 'Average bill value' },
  { key: 'dineIn', label: 'Dine-in sales' },
  { key: 'takeaway', label: 'Takeaway sales' },
  { key: 'delivery', label: 'Delivery sales' },
  { key: 'discounts', label: 'Discounts' },
  { key: 'voids', label: 'Voids & cancellations' },
  { key: 'expenses', label: 'Expenses' },
] as const;

export type ComparisonMetricKey = (typeof COMPARISON_METRICS)[number]['key'];

export const HOUR_LABELS = ['11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p'];

export const formatAED = (n: number) =>
  `AED ${n >= 1000 ? n.toLocaleString('en-US', { maximumFractionDigits: 0 }) : n.toFixed(0)}`;
