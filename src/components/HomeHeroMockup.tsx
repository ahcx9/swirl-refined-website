import React from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { ArrowLeft, User, Clock, Phone, Mail, Calendar } from 'lucide-react';

const HomeHeroMockup: React.FC = () => {
  const { formatAmount } = useCurrency();

  const orderItems = [
    { name: 'Red Velvet Latte', qty: 1, price: 25.00 },
    { name: 'Spanish Latte', qty: 1, price: 28.00 },
    { name: 'Pistachio Latte', qty: 1, price: 25.00 },
    { name: "Texas BBQ'ed", qty: 1, price: 26.00 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  return (
    <div className="relative w-full h-full min-h-[520px] lg:min-h-[600px] overflow-hidden rounded-2xl lg:rounded-3xl">
      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-100/30 rounded-full blur-3xl" />

      {/* Main Content Container */}
      <div className="relative z-10 p-3 lg:p-6 h-full">
        {/* Header Bar */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-3 lg:p-4 mb-3 lg:mb-4" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="font-bold text-base lg:text-xl text-foreground">Order #100736</h2>
                <p className="text-[10px] lg:text-xs text-muted-foreground">Dec 30, 2025, 4:54 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 bg-green-50 px-2 lg:px-3 py-1 lg:py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" style={{ animation: 'pulse 2s infinite' }} />
                <span className="text-[10px] lg:text-xs font-medium text-green-700">shamim (Admin)</span>
              </div>
              <div className="bg-gray-100 px-2 lg:px-3 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-medium text-gray-700">Table #009</div>
            </div>
          </div>
        </div>

        {/* Main Grid - Order & Billing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
          {/* Order Panel */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-3 lg:p-5" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <div className="flex items-center gap-2 mb-3 lg:mb-4">
              <h3 className="font-semibold text-sm lg:text-base text-foreground">Order</h3>
              <span className="bg-amber-100 text-amber-700 text-[9px] lg:text-[10px] font-semibold px-2 py-0.5 rounded uppercase">In Progress</span>
            </div>
            
            <div className="space-y-2 lg:space-y-3">
              {orderItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 lg:p-3 border border-gray-100 rounded-lg lg:rounded-xl hover:border-primary/20 transition-colors">
                  <div>
                    <p className="font-medium text-xs lg:text-sm text-foreground">{item.name}</p>
                    <p className="text-[10px] lg:text-xs text-muted-foreground">Quantity: {item.qty} × {formatAmount(item.price)}</p>
                  </div>
                  <div className="font-semibold text-xs lg:text-sm text-foreground">{formatAmount(item.price)}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-3 lg:mt-4">
              <button className="text-[10px] lg:text-xs font-medium text-red-500 border border-red-200 rounded-lg py-1.5 lg:py-2 hover:bg-red-50 transition-colors">
                Change Status (IN_PROGRESS)
              </button>
              <button className="text-[10px] lg:text-xs font-medium text-gray-700 border border-gray-200 rounded-lg py-1.5 lg:py-2 hover:bg-gray-50 transition-colors">
                Add Item to Order
              </button>
              <button className="text-[10px] lg:text-xs font-medium text-gray-700 border border-gray-200 rounded-lg py-1.5 lg:py-2 hover:bg-gray-50 transition-colors">
                Change Quantities
              </button>
              <button className="text-[10px] lg:text-xs font-medium text-gray-700 border border-gray-200 rounded-lg py-1.5 lg:py-2 hover:bg-gray-50 transition-colors">
                Print KOT
              </button>
            </div>
            <button className="w-full text-[10px] lg:text-xs font-medium text-gray-700 border border-gray-200 rounded-lg py-1.5 lg:py-2 mt-2 hover:bg-gray-50 transition-colors">
              Change Table
            </button>
          </div>

          {/* Billing Panel */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-3 lg:p-5" style={{ animation: 'fadeInUp 0.7s ease-out' }}>
            <div className="flex items-center gap-2 mb-3 lg:mb-4">
              <h3 className="font-semibold text-sm lg:text-base text-foreground">Billing</h3>
              <span className="bg-yellow-100 text-yellow-700 text-[9px] lg:text-[10px] font-semibold px-2 py-0.5 rounded uppercase">Unpaid</span>
            </div>

            {/* Receipt */}
            <div className="bg-gray-50/80 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center mb-3 lg:mb-4">
              <h4 className="font-bold text-sm lg:text-base text-foreground">Swirl Cafe</h4>
              <p className="text-[10px] lg:text-xs text-muted-foreground">Al Khalidya</p>
              <p className="text-[9px] lg:text-[10px] text-muted-foreground">VAT: VAT123456789</p>
              <p className="text-[9px] lg:text-[10px] text-muted-foreground mb-2">Dec 30, 2025, 4:54 PM</p>
              <p className="text-[10px] lg:text-xs font-medium text-foreground">Order #100736</p>
              <p className="text-[10px] lg:text-xs text-muted-foreground">Table #009</p>
            </div>

            {/* Line Items */}
            <div className="space-y-1.5 lg:space-y-2 mb-3 lg:mb-4">
              <div className="grid grid-cols-12 text-[9px] lg:text-[10px] font-medium text-muted-foreground uppercase">
                <span className="col-span-6">Name</span>
                <span className="col-span-3 text-center">Qty</span>
                <span className="col-span-3 text-right">Cost</span>
              </div>
              {orderItems.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 text-[10px] lg:text-xs text-foreground">
                  <span className="col-span-6">{item.name}</span>
                  <span className="col-span-3 text-center">{item.qty}</span>
                  <span className="col-span-3 text-right font-medium">{formatAmount(item.price)}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between text-[10px] lg:text-xs text-muted-foreground">
                  <span>Sub Total</span>
                  <span>{formatAmount(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[10px] lg:text-xs text-muted-foreground">
                  <span>VAT (5%)</span>
                  <span>{formatAmount(vat)}</span>
                </div>
                <div className="flex justify-between text-xs lg:text-sm font-bold text-foreground mt-1">
                  <span>Total</span>
                  <span>{formatAmount(total)}</span>
                </div>
              </div>
            </div>

            {/* Billing Actions */}
            <div className="space-y-1.5 lg:space-y-2">
              <button className="w-full text-[10px] lg:text-xs font-medium text-gray-700 border border-gray-200 rounded-lg py-1.5 lg:py-2 hover:bg-gray-50 transition-colors">
                Print Bill
              </button>
              <button className="w-full text-[10px] lg:text-xs font-medium text-gray-700 border border-gray-200 rounded-lg py-1.5 lg:py-2 hover:bg-gray-50 transition-colors">
                Apply Discount
              </button>
              <button className="w-full text-[10px] lg:text-xs font-semibold text-white bg-foreground rounded-lg py-2 lg:py-2.5 hover:bg-foreground/90 transition-colors">
                Settle Bill
              </button>
              <button className="w-full text-[10px] lg:text-xs font-medium text-gray-700 border border-gray-200 rounded-lg py-1.5 lg:py-2 hover:bg-gray-50 transition-colors">
                Settle Bill (No Print)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row - Customer Info & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {/* Customer Information */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-3 lg:p-5" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-semibold text-sm lg:text-base text-foreground">Customer Information</h3>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <div>
                <p className="font-semibold text-sm lg:text-base text-foreground">Abid</p>
                <span className="inline-block bg-gray-100 text-gray-600 text-[9px] lg:text-[10px] font-medium px-2 py-0.5 rounded mt-1">Linked Customer</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] lg:text-xs text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span>+971543853877</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] lg:text-xs text-muted-foreground">
                <Mail className="w-3 h-3" />
                <span>abid@swirl.cx</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] lg:text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Born: Oct 23, 2000</span>
              </div>
              <p className="text-[10px] lg:text-xs text-muted-foreground">Gender: Male</p>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-3 lg:p-5" style={{ animation: 'fadeInUp 0.9s ease-out' }}>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-semibold text-sm lg:text-base text-foreground">Order Timeline</h3>
            </div>
            <p className="text-[10px] lg:text-xs text-muted-foreground mb-3 flex items-center gap-1">
              <User className="w-3 h-3" /> Created by: <span className="font-medium text-foreground">Cashier</span>
            </p>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-200" />
              
              {/* Timeline Events */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center z-10">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-100 text-amber-700 text-[9px] lg:text-[10px] font-semibold px-2 py-0.5 rounded">Pending</span>
                      <span className="bg-gray-100 text-gray-600 text-[9px] lg:text-[10px] font-medium px-2 py-0.5 rounded">Created</span>
                    </div>
                    <p className="text-[10px] lg:text-xs text-muted-foreground mt-1">04:54 PM • Dec 30, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center z-10 border-2 border-primary">
                    <div className="w-3 h-3 bg-primary rounded-sm" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-primary text-[9px] lg:text-[10px] font-semibold px-2 py-0.5 rounded">In Progress</span>
                      <span className="bg-green-100 text-green-700 text-[9px] lg:text-[10px] font-medium px-2 py-0.5 rounded">Current</span>
                    </div>
                    <p className="text-[10px] lg:text-xs text-muted-foreground mt-1">10:11 PM • Jan 3, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Badge */}
      <div className="absolute top-6 right-6 z-30">
        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
          <div className="w-2 h-2 rounded-full bg-green-500" style={{ animation: 'pulse 2s infinite' }} />
          <span className="text-[10px] lg:text-xs font-medium text-muted-foreground">Live Demo</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroMockup;
