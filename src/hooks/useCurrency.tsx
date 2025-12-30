import { useState, useEffect, useMemo } from 'react';

interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  locale: string;
}

const CURRENCIES: Record<string, CurrencyConfig> = {
  AED: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', locale: 'ar-AE' },
  SAR: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', locale: 'ar-SA' },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
};

// Mapping of country codes to currencies
const COUNTRY_TO_CURRENCY: Record<string, string> = {
  AE: 'AED', // UAE
  SA: 'SAR', // Saudi Arabia
  BH: 'AED', // Bahrain (use AED as fallback)
  QA: 'AED', // Qatar (use AED as fallback)
  KW: 'AED', // Kuwait (use AED as fallback)
  OM: 'AED', // Oman (use AED as fallback)
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
};

// Approximate exchange rates from AED (for display purposes only)
const EXCHANGE_RATES: Record<string, number> = {
  AED: 1,
  SAR: 1.02, // ~1 AED = 1.02 SAR
  USD: 0.27, // ~1 AED = 0.27 USD
  EUR: 0.25, // ~1 AED = 0.25 EUR
  GBP: 0.21, // ~1 AED = 0.21 GBP
};

function detectCurrencyFromLocale(): string {
  try {
    // Try to get timezone-based country
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Common timezone to country mappings
    const timezoneToCountry: Record<string, string> = {
      'Asia/Dubai': 'AE',
      'Asia/Abu_Dhabi': 'AE',
      'Asia/Riyadh': 'SA',
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
    const convertedAmount = Math.round(aedAmount * rate);
    
    if (compact && convertedAmount >= 1000) {
      const k = Math.round(convertedAmount / 1000);
      return `${currency.symbol} ${k}K`;
    }
    
    return `${currency.symbol} ${convertedAmount.toLocaleString('en-US')}`;
  };

  const amounts = useMemo(() => ({
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
  }), [currencyCode, rate]);

  return {
    currency,
    currencyCode,
    formatAmount,
    amounts,
    availableCurrencies: Object.values(CURRENCIES),
  };
}
