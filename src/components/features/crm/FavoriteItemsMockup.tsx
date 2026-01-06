import React from 'react';
import { useCurrency } from '@/hooks/useCurrency';

const FavoriteItemsMockup = () => {
  const { formatAmount } = useCurrency();

  const favoriteItems = [
    { rank: 1, name: 'Cappuccino (Italian Style)', orders: 100, total: 2000.00, avg: 20.00 },
    { rank: 2, name: 'Blue Coracao', orders: 90, total: 3955.00, avg: 43.94 },
    { rank: 3, name: 'Akkawi Cheese', orders: 11, total: 132.00, avg: 12.00 },
    { rank: 4, name: 'Avocado (Milk & Honey)', orders: 10, total: 315.00, avg: 31.50 },
    { rank: 5, name: 'Arabic Breakfast', orders: 7, total: 278.00, avg: 39.71 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Live Badge */}
      <div className="absolute -top-3 -right-3 z-20 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-100 flex items-center gap-2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-xs font-medium text-gray-600">Live</span>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900">Favorite Items</h3>
          <p className="text-sm text-gray-500">Most frequently ordered menu items</p>
        </div>

        {/* Items List */}
        <div className="space-y-3">
          {favoriteItems.map((item) => (
            <div 
              key={item.rank}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              {/* Rank Badge */}
              <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {item.rank}
              </div>

              {/* Item Details */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{item.name}</p>
                <p className="text-sm text-primary">Ordered {item.orders} times</p>
              </div>

              {/* Pricing */}
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-gray-900">{formatAmount(item.total)}</p>
                <p className="text-sm text-gray-500">{formatAmount(item.avg)} avg</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10" />
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
    </div>
  );
};

export default FavoriteItemsMockup;
