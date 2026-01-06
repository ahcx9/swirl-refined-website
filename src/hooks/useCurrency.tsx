import { useState, useEffect, useMemo } from 'react';

interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  locale: string;
}

const CURRENCIES: Record<string, CurrencyConfig> = {
  // Gulf countries
  AED: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', locale: 'ar-AE' },
  SAR: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', locale: 'ar-SA' },
  OMR: { code: 'OMR', symbol: 'OMR', name: 'Omani Rial', locale: 'ar-OM' },
  QAR: { code: 'QAR', symbol: 'QAR', name: 'Qatari Riyal', locale: 'ar-QA' },
  KWD: { code: 'KWD', symbol: 'KWD', name: 'Kuwaiti Dinar', locale: 'ar-KW' },
  BHD: { code: 'BHD', symbol: 'BHD', name: 'Bahraini Dinar', locale: 'ar-BH' },
  
  // Other Middle East
  EGP: { code: 'EGP', symbol: 'E£', name: 'Egyptian Pound', locale: 'ar-EG' },
  JOD: { code: 'JOD', symbol: 'JOD', name: 'Jordanian Dinar', locale: 'ar-JO' },
  LBP: { code: 'LBP', symbol: 'L£', name: 'Lebanese Pound', locale: 'ar-LB' },
  IQD: { code: 'IQD', symbol: 'IQD', name: 'Iraqi Dinar', locale: 'ar-IQ' },
  
  // South Asia
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
  PKR: { code: 'PKR', symbol: 'Rs', name: 'Pakistani Rupee', locale: 'en-PK' },
  
  // Western currencies
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
};

// Mapping of country codes to currencies
const COUNTRY_TO_CURRENCY: Record<string, string> = {
  // Gulf countries with proper currencies
  AE: 'AED',  // UAE
  SA: 'SAR',  // Saudi Arabia
  OM: 'OMR',  // Oman
  QA: 'QAR',  // Qatar
  KW: 'KWD',  // Kuwait
  BH: 'BHD',  // Bahrain
  
  // Other Middle East
  EG: 'EGP',  // Egypt
  JO: 'JOD',  // Jordan
  LB: 'LBP',  // Lebanon
  IQ: 'IQD',  // Iraq
  
  // South Asia
  IN: 'INR',  // India
  PK: 'PKR',  // Pakistan
  
  // Western countries
  US: 'USD',
  GB: 'GBP',
  UK: 'GBP',
  DE: 'EUR',
  FR: 'EUR',
  ES: 'EUR',
  IT: 'EUR',
  NL: 'EUR',
  BE: 'EUR',
  AT: 'EUR',
  IE: 'EUR',
  PT: 'EUR',
  GR: 'EUR',
  FI: 'EUR',
};

// Default currency for unknown locations
const DEFAULT_CURRENCY = 'AED';

// Base amounts in AED (for conversion display purposes)
const BASE_AMOUNTS = {
  // Accounting page amounts
  todayRevenue: 12450,
  todayExpenses: 4280,
  netProfit: 8170,
  cashBalance: 84320,
  monthlyRevenue: 342500,
  cogs: 102750,
  labor: 68500,
  operatingExpenses: 41100,
  monthlyNetProfit: 130150,
  vatCollected: 17125,
  vatPaid: 5138,
  vatPayable: 11987,
  outlet1: 156000,
  outlet2: 112000,
  outlet3: 74000,
  
  // Menu item prices (Hero POS mockup)
  chickenShawarma: 36,
  grilledLambKebab: 42,
  posSubtotal: 78,
  posTotal: 81.90,
  
  // iPhone QR mockup prices
  margheritaPizza: 48,
  greekSalad: 32,
  cartTotal: 80,
  
  // Accounting mockup (Hero)
  accountingToday: 4520,
  accountingWeek: 28000,
  accountingMonth: 112000,
  
  // Financial Reports page
  totalRevenue: 124580,
  avgOrderValue: 28.40,
  totalDiscounts: 3240,
  reportNetProfit: 42150,
  
  // Shift report values
  shiftTotalSales: 4280,
  shiftAvgOrder: 27.44,
  shiftCashCollected: 1070,
  shiftDineIn: 2140,
  shiftTakeaway: 856,
  shiftDelivery: 1284,
  
  // POS page - Order Modification & Modifiers
  posPizzaPrice: 40,
  posSizeSmall: 0,
  posSizeMedium: 5,
  posSizeLarge: 10,
  posExtraCheese: 3,
  posJalapenos: 2,
  posMushrooms: 2.50,
  posOlives: 2,
  posBillReady: 245,
  
  // Financial Reports mockup
  frTotalRevenue: 11214.23,
  frTotalOrders: 99,
  frAverageBill: 113.28,
  frTotalDiscounts: 195.97,
  frInStoreRevenue: 11109.23,
  frOnlineRevenue: 105,
  frInStoreOrders: 98,
  frOnlineOrders: 1,
  
  // Inventory Management mockup
  inventoryOnHand: 20425.16,
  
  // CRM mockup
  crmLifetimeValue: 9221.98,
};

// Approximate exchange rates from AED (for display purposes only)
const EXCHANGE_RATES: Record<string, number> = {
  AED: 1,
  SAR: 1.02,    // ~1 AED = 1.02 SAR
  OMR: 0.105,   // ~1 AED = 0.105 OMR
  QAR: 0.99,    // ~1 AED = 0.99 QAR
  KWD: 0.084,   // ~1 AED = 0.084 KWD
  BHD: 0.103,   // ~1 AED = 0.103 BHD
  EGP: 13.4,    // ~1 AED = 13.4 EGP
  JOD: 0.19,    // ~1 AED = 0.19 JOD
  LBP: 24400,   // ~1 AED = 24,400 LBP
  IQD: 357,     // ~1 AED = 357 IQD
  INR: 22.7,    // ~1 AED = 22.7 INR
  PKR: 75.8,    // ~1 AED = 75.8 PKR
  USD: 0.27,    // ~1 AED = 0.27 USD
  EUR: 0.25,    // ~1 AED = 0.25 EUR
  GBP: 0.21,    // ~1 AED = 0.21 GBP
};

// Timezone to country mappings
const timezoneToCountry: Record<string, string> = {
  // UAE
  'Asia/Dubai': 'AE',
  'Asia/Abu_Dhabi': 'AE',
  
  // Saudi Arabia
  'Asia/Riyadh': 'SA',
  
  // Other Gulf
  'Asia/Muscat': 'OM',
  'Asia/Qatar': 'QA',
  'Asia/Kuwait': 'KW',
  'Asia/Bahrain': 'BH',
  
  // Other Middle East
  'Africa/Cairo': 'EG',
  'Asia/Amman': 'JO',
  'Asia/Beirut': 'LB',
  'Asia/Baghdad': 'IQ',
  
  // South Asia
  'Asia/Kolkata': 'IN',
  'Asia/Calcutta': 'IN',
  'Asia/Karachi': 'PK',
  
  // Western
  'Europe/London': 'GB',
  'America/New_York': 'US',
  'America/Los_Angeles': 'US',
  'America/Chicago': 'US',
  'Europe/Berlin': 'DE',
  'Europe/Paris': 'FR',
  'Europe/Madrid': 'ES',
  'Europe/Rome': 'IT',
  'Europe/Amsterdam': 'NL',
};

function detectCurrencyFromLocale(): string {
  try {
    // Try to get timezone-based country
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timeZone && timezoneToCountry[timeZone]) {
      const country = timezoneToCountry[timeZone];
      return COUNTRY_TO_CURRENCY[country] || DEFAULT_CURRENCY;
    }
    
    // Fallback to navigator language
    const language = navigator.language || navigator.languages?.[0] || 'en-AE';
    const parts = language.split('-');
    
    if (parts.length >= 2) {
      const countryCode = parts[1].toUpperCase();
      return COUNTRY_TO_CURRENCY[countryCode] || DEFAULT_CURRENCY;
    }
    
    return DEFAULT_CURRENCY;
  } catch {
    return DEFAULT_CURRENCY;
  }
}

export function useCurrency() {
  const [currencyCode, setCurrencyCode] = useState<string>(DEFAULT_CURRENCY);

  useEffect(() => {
    const detected = detectCurrencyFromLocale();
    setCurrencyCode(detected);
  }, []);

  const currency = useMemo(() => CURRENCIES[currencyCode] || CURRENCIES[DEFAULT_CURRENCY], [currencyCode]);
  const rate = useMemo(() => EXCHANGE_RATES[currencyCode] || 1, [currencyCode]);

  const formatAmount = (aedAmount: number, compact = false): string => {
    const convertedAmount = Math.round(aedAmount * rate * 100) / 100;
    
    if (compact && convertedAmount >= 1000) {
      const k = Math.round(convertedAmount / 1000);
      return `${currency.symbol} ${k}K`;
    }
    
    // For very large currencies like LBP or IQD, use compact format for readability
    if (convertedAmount >= 100000) {
      return `${currency.symbol} ${Math.round(convertedAmount).toLocaleString('en-US')}`;
    }
    
    // Format with appropriate decimal places
    if (Number.isInteger(convertedAmount) || convertedAmount >= 100) {
      return `${currency.symbol} ${Math.round(convertedAmount).toLocaleString('en-US')}`;
    }
    
    return `${currency.symbol} ${convertedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const amounts = useMemo(() => ({
    // Accounting page
    todayRevenue: formatAmount(BASE_AMOUNTS.todayRevenue),
    todayExpenses: formatAmount(BASE_AMOUNTS.todayExpenses),
    netProfit: formatAmount(BASE_AMOUNTS.netProfit),
    cashBalance: formatAmount(BASE_AMOUNTS.cashBalance),
    monthlyRevenue: formatAmount(BASE_AMOUNTS.monthlyRevenue),
    cogs: formatAmount(BASE_AMOUNTS.cogs),
    labor: formatAmount(BASE_AMOUNTS.labor),
    operatingExpenses: formatAmount(BASE_AMOUNTS.operatingExpenses),
    monthlyNetProfit: formatAmount(BASE_AMOUNTS.monthlyNetProfit),
    vatCollected: formatAmount(BASE_AMOUNTS.vatCollected),
    vatPaid: formatAmount(BASE_AMOUNTS.vatPaid),
    vatPayable: formatAmount(BASE_AMOUNTS.vatPayable),
    outlet1: formatAmount(BASE_AMOUNTS.outlet1, true),
    outlet2: formatAmount(BASE_AMOUNTS.outlet2, true),
    outlet3: formatAmount(BASE_AMOUNTS.outlet3, true),
    
    // Hero POS mockup
    chickenShawarma: formatAmount(BASE_AMOUNTS.chickenShawarma),
    grilledLambKebab: formatAmount(BASE_AMOUNTS.grilledLambKebab),
    posSubtotal: formatAmount(BASE_AMOUNTS.posSubtotal),
    posTotal: formatAmount(BASE_AMOUNTS.posTotal),
    
    // Hero iPhone QR mockup
    margheritaPizza: formatAmount(BASE_AMOUNTS.margheritaPizza),
    greekSalad: formatAmount(BASE_AMOUNTS.greekSalad),
    cartTotal: formatAmount(BASE_AMOUNTS.cartTotal),
    
    // Hero Accounting mockup
    accountingToday: formatAmount(BASE_AMOUNTS.accountingToday),
    accountingWeek: formatAmount(BASE_AMOUNTS.accountingWeek, true),
    accountingMonth: formatAmount(BASE_AMOUNTS.accountingMonth, true),
    
    // Financial Reports page
    totalRevenue: formatAmount(BASE_AMOUNTS.totalRevenue),
    avgOrderValue: formatAmount(BASE_AMOUNTS.avgOrderValue),
    totalDiscounts: formatAmount(BASE_AMOUNTS.totalDiscounts),
    reportNetProfit: formatAmount(BASE_AMOUNTS.reportNetProfit),
    
    // Shift report
    shiftTotalSales: formatAmount(BASE_AMOUNTS.shiftTotalSales),
    shiftAvgOrder: formatAmount(BASE_AMOUNTS.shiftAvgOrder),
    shiftCashCollected: formatAmount(BASE_AMOUNTS.shiftCashCollected),
    shiftDineIn: formatAmount(BASE_AMOUNTS.shiftDineIn),
    shiftTakeaway: formatAmount(BASE_AMOUNTS.shiftTakeaway),
    shiftDelivery: formatAmount(BASE_AMOUNTS.shiftDelivery),
    
    // POS page - Order Modification & Modifiers
    posPizzaPrice: formatAmount(BASE_AMOUNTS.posPizzaPrice),
    posSizeSmall: formatAmount(BASE_AMOUNTS.posSizeSmall),
    posSizeMedium: formatAmount(BASE_AMOUNTS.posSizeMedium),
    posSizeLarge: formatAmount(BASE_AMOUNTS.posSizeLarge),
    posExtraCheese: formatAmount(BASE_AMOUNTS.posExtraCheese),
    posJalapenos: formatAmount(BASE_AMOUNTS.posJalapenos),
    posMushrooms: formatAmount(BASE_AMOUNTS.posMushrooms),
    posOlives: formatAmount(BASE_AMOUNTS.posOlives),
    posBillReady: formatAmount(BASE_AMOUNTS.posBillReady),
    
    // Financial Reports mockup
    frTotalRevenue: formatAmount(BASE_AMOUNTS.frTotalRevenue),
    frTotalOrders: BASE_AMOUNTS.frTotalOrders,
    frAverageBill: formatAmount(BASE_AMOUNTS.frAverageBill),
    frTotalDiscounts: formatAmount(BASE_AMOUNTS.frTotalDiscounts),
    frInStoreRevenue: formatAmount(BASE_AMOUNTS.frInStoreRevenue),
    frOnlineRevenue: formatAmount(BASE_AMOUNTS.frOnlineRevenue),
    frInStoreOrders: BASE_AMOUNTS.frInStoreOrders,
    frOnlineOrders: BASE_AMOUNTS.frOnlineOrders,
    
    // Inventory Management mockup
    inventoryOnHand: formatAmount(BASE_AMOUNTS.inventoryOnHand),
    
    // CRM mockup
    crmLifetimeValue: formatAmount(BASE_AMOUNTS.crmLifetimeValue),
  }), [currencyCode, rate]);

  return {
    currency,
    currencyCode,
    formatAmount,
    amounts,
    availableCurrencies: Object.values(CURRENCIES),
  };
}
