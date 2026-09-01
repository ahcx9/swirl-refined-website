import React, { useState } from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { Receipt, CreditCard, Check, X, Clock, Printer, Banknote, Wallet, Smartphone, SplitSquareVertical } from 'lucide-react';

const HomePOSBillingMockup = () => {
  const { formatAmount } = useCurrency();
  const [paid, setPaid] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const orderItems = [
    { name: 'Red Velvet Latte', qty: 1, price: 25 },
    { name: 'Spanish Latte', qty: 1, price: 28 },
    { name: 'Pistachio Latte', qty: 1, price: 25 },
    { name: 'Texas BBQ Sandwich', qty: 1, price: 32 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Compact receipt-style billing card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-blue-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
              <Receipt className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/80 font-medium">Order #100736</p>
              <p className="text-[10px] text-white/70">Table #009 • Swirl Cafe</p>
            </div>
          </div>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${paid ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-700'}`}>
            {paid ? 'PAID' : 'UNPAID'}
          </span>
        </div>

        {/* Items */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">
            <span>Item</span>
            <span>Qty</span>
            <span>Cost</span>
          </div>
          <div className="space-y-2">
            {orderItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-medium truncate max-w-[140px]">{item.name}</span>
                <span className="text-gray-500 text-xs">×{item.qty}</span>
                <span className="text-gray-900 font-semibold">{formatAmount(item.price)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 mx-4" />

        {/* Totals */}
        <div className="px-4 py-3 space-y-1.5">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Subtotal</span>
            <span className="text-gray-700 font-medium">{formatAmount(subtotal)}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>VAT (5%)</span>
            <span className="text-gray-700 font-medium">{formatAmount(vat)}</span>
          </div>
          <div className="flex justify-between text-base font-bold pt-1 border-t border-gray-100">
            <span className="text-gray-900">Total</span>
            <span className="text-primary">{formatAmount(total)}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-4 pb-4 pt-1 flex gap-2">
          <button
            onClick={() => setShowReceipt(true)}
            className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:shadow-sm transition-all flex items-center justify-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>
          <button
            onClick={() => setPaid(true)}
            className="flex-[1.6] px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-1.5"
          >
            {paid ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Paid
              </>
            ) : (
              <>
                <CreditCard className="w-3.5 h-3.5" />
                Settle Bill
              </>
            )}
          </button>
        </div>
      </div>

      {/* Floating payment method hint */}
      {!paid && (
        <div className="absolute -right-2 top-4 bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 animate-pulse hidden sm:block">
          <div className="flex items-center gap-1.5">
            <Banknote className="w-3.5 h-3.5 text-emerald-500" />
            <Wallet className="w-3.5 h-3.5 text-blue-500" />
            <Smartphone className="w-3.5 h-3.5 text-purple-500" />
          </div>
          <p className="text-[9px] text-gray-400 mt-1 text-center">Multi-pay</p>
        </div>
      )}

      {/* Receipt popup */}
      {showReceipt && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowReceipt(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-xs w-full p-5 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-gray-900">Receipt Preview</h3>
              <button onClick={() => setShowReceipt(false)} className="p-1 hover:bg-gray-100 rounded-full">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="text-center space-y-1">
              <h4 className="text-lg font-black text-gray-900">swirl</h4>
              <p className="text-xs text-gray-500">Swirl Cafe • Al Khalidya</p>
              <p className="text-[10px] text-gray-400">VAT: VAT123456789</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-3" />
            <div className="space-y-1.5 text-xs">
              {orderItems.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-medium text-gray-900">{formatAmount(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-dashed border-gray-300 my-3" />
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>{formatAmount(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>VAT 5%</span>
                <span>{formatAmount(vat)}</span>
              </div>
            </div>
            <div className="border-t border-gray-100 my-3" />
            <div className="flex justify-between text-base font-bold">
              <span>Total</span>
              <span className="text-primary">{formatAmount(total)}</span>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" />
              Printed just now
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePOSBillingMockup;
