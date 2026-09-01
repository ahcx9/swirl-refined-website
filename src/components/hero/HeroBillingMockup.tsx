import React, { useState } from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { Check, Clock, CreditCard, Percent, Printer, Receipt, X } from 'lucide-react';

const HeroBillingMockup: React.FC = () => {
  const { formatAmount } = useCurrency();
  const [paid, setPaid] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const orderItems = [
    { name: 'Pistachio Latte', qty: 1, price: 25 },
    { name: 'Spanish Latte', qty: 1, price: 28 },
    { name: 'Red Velvet Latte', qty: 1, price: 25 },
    { name: 'Texas BBQ Sandwich', qty: 1, price: 32 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-blue-600 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Receipt className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/90 font-semibold">Order #100736</p>
              <p className="text-[10px] text-white/70">Table #009 • Swirl Cafe</p>
            </div>
          </div>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${paid ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-700'}`}>
            {paid ? 'PAID' : 'UNPAID'}
          </span>
        </div>

        {/* Items */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
            <span className="w-1/2">Item</span>
            <span className="w-16 text-center">Qty</span>
            <span className="w-20 text-right">Cost</span>
          </div>
          <div className="space-y-2">
            {orderItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-gray-800 font-medium truncate w-1/2 pr-2">{item.name}</span>
                <span className="text-gray-500 text-xs w-16 text-center">× {item.qty}</span>
                <span className="text-gray-900 font-bold w-20 text-right">{formatAmount(item.price)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-dashed border-gray-200 mx-5" />

        {/* Totals */}
        <div className="px-5 py-4 space-y-1.5">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Subtotal</span>
            <span className="text-gray-700 font-medium">{formatAmount(subtotal)}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>VAT (5%)</span>
            <span className="text-gray-700 font-medium">{formatAmount(vat)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
            <span className="text-gray-900">Total</span>
            <span className="text-primary">{formatAmount(total)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-5 pb-5 pt-1 flex gap-2.5">
          <button
            onClick={() => setShowReceipt(true)}
            className="flex-1 px-3 py-2.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 rounded-xl hover:bg-white hover:shadow-sm transition-all flex items-center justify-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>
          <button
            onClick={() => setPaid(true)}
            className="flex-[1.6] px-3 py-2.5 text-xs font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-1.5"
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
              <button onClick={() => setShowReceipt(false)} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="text-center space-y-1">
              <h4 className="text-xl font-black text-gray-900 tracking-tight">swirl</h4>
              <p className="text-xs text-gray-500">Swirl Cafe • Al Khalidya</p>
              <p className="text-[10px] text-gray-400">VAT: VAT123456789</p>
            </div>
            <div className="border-t border-dashed border-gray-300 my-3" />
            <div className="space-y-1.5 text-xs">
              {orderItems.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-semibold text-gray-900">{formatAmount(item.price * item.qty)}</span>
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

export default HeroBillingMockup;
