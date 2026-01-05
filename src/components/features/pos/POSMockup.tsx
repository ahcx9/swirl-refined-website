import React from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { ChevronLeft, Users, Clock, Printer, Receipt, CreditCard, UtensilsCrossed, Truck, Package, Store, QrCode, User } from 'lucide-react';

const POSMockup = () => {
  const { amounts, formatAmount } = useCurrency();
  
  const orderItems = [
    { name: 'Red Velvet Latte', qty: 1, price: 25 },
    { name: 'Spanish Latte', qty: 1, price: 28 },
    { name: 'Pistachio Latte', qty: 1, price: 25 },
    { name: 'Texas BBQ\'ed', qty: 1, price: 26 },
  ];
  
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = subtotal * 0.05;
  const total = subtotal + vat;

  const orderTabs = [
    { icon: UtensilsCrossed, label: 'Dine In', active: true },
    { icon: Package, label: 'Take Away', active: false },
    { icon: Truck, label: 'Delivery', active: false },
    { icon: Store, label: 'Marketplaces', active: false },
    { icon: QrCode, label: 'QR Orders', active: false },
  ];

  const floors = [
    { name: 'Main Floor', available: 3, occupied: 1 },
    { name: '1st Floor', available: 8, occupied: 1 },
    { name: '2nd Floor', available: 9, occupied: 0 },
  ];

  const tables = [
    { id: '009', seats: 6, status: 'occupied' },
    { id: '200', seats: 2, status: 'available' },
    { id: '23', seats: 2, status: 'available' },
    { id: '50', seats: 2, status: 'available' },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main container with shadow */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Order #100736</h2>
              <p className="text-xs text-gray-500">Dec 30, 2025, 4:54 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-gray-700">shamim</span>
              <span className="text-xs text-gray-500">(Admin)</span>
            </div>
            <div className="px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 text-sm text-gray-700">
              Table #009
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid md:grid-cols-2 gap-0">
          
          {/* Left Panel - Order Items */}
          <div className="p-6 border-r border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-bold text-gray-900">Order</h3>
              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">IN PROGRESS</span>
            </div>
            
            <div className="space-y-3 mb-6">
              {orderItems.map((item, index) => (
                <div key={index} className="p-4 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">Quantity: {item.qty} × {formatAmount(item.price)}</p>
                    </div>
                    <p className="font-bold text-gray-900">{formatAmount(item.price)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button className="px-4 py-2 text-sm font-medium text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
                Change Status
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Add Item
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Change Qty
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Printer className="w-4 h-4" />
                Print KOT
              </button>
            </div>
          </div>

          {/* Right Panel - Billing */}
          <div className="p-6 bg-gray-50/50">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-bold text-gray-900">Billing</h3>
              <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">UNPAID</span>
            </div>

            {/* Invoice Card */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-900">Swirl Cafe</h4>
                <p className="text-sm text-gray-500">Al Khalidya</p>
                <p className="text-xs text-gray-400">VAT: VAT123456789</p>
                <p className="text-xs text-gray-400">Dec 30, 2025, 4:54 PM</p>
                <div className="mt-2 pt-2 border-t border-dashed border-gray-200">
                  <p className="text-sm font-medium text-gray-700">Order #100736</p>
                  <p className="text-xs text-gray-500">Table #009</p>
                </div>
              </div>

              {/* Line Items */}
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-12 text-xs font-medium text-gray-500 mb-2">
                  <div className="col-span-6">Name</div>
                  <div className="col-span-2 text-center">Qty</div>
                  <div className="col-span-4 text-right">Cost</div>
                </div>
                {orderItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 text-sm py-1.5">
                    <div className="col-span-6 text-gray-700">{item.name}</div>
                    <div className="col-span-2 text-center text-gray-600">{item.qty}</div>
                    <div className="col-span-4 text-right font-medium text-gray-900">{formatAmount(item.price)}</div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-gray-100 mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sub Total</span>
                  <span className="text-gray-900">{formatAmount(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">VAT (5%)</span>
                  <span className="text-gray-900">{formatAmount(vat)}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-100">
                  <span className="text-gray-900">Total</span>
                  <span className="text-primary">{formatAmount(total)}</span>
                </div>
              </div>
            </div>

            {/* Payment Buttons */}
            <div className="space-y-2">
              <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Receipt className="w-4 h-4" />
                Print Bill
              </button>
              <button className="w-full px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <CreditCard className="w-4 h-4" />
                Settle Bill
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Customer & Timeline */}
        <div className="grid md:grid-cols-2 gap-0 border-t border-gray-100">
          {/* Customer Info */}
          <div className="p-6 border-r border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-gray-500" />
              <h4 className="font-bold text-gray-900">Customer Information</h4>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <p className="font-medium text-gray-900">Abid</p>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">Linked Customer</span>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>📞 +971543853877</p>
              <p>✉️ abid@swirl.cx</p>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="p-6 bg-gray-50/50">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-gray-500" />
              <h4 className="font-bold text-gray-900">Order Timeline</h4>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -left-4 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white" />
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">Pending</span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded">Created</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">04:54 PM • Dec 30, 2025</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 w-3 h-3 bg-primary rounded-full border-2 border-white" />
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-primary text-xs font-medium rounded">In Progress</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">Current</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">10:11 PM • Jan 3, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Floor Management Card */}
      <div className="absolute -bottom-8 -right-4 md:-right-12 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 hidden md:block transform rotate-2 hover:rotate-0 transition-transform">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-bold text-gray-900 text-sm">Floor Management</h4>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>
        
        {/* Mini Order Tabs */}
        <div className="flex gap-1 mb-3 overflow-x-auto pb-1">
          {orderTabs.map((tab, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 px-2 py-1 rounded text-xs font-medium ${
                tab.active 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-50 text-gray-600'
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Floor Buttons */}
        <div className="grid grid-cols-3 gap-1 mb-3">
          {floors.map((floor, index) => (
            <div key={index} className="p-2 bg-gray-50 rounded-lg text-center">
              <p className="text-xs font-medium text-gray-700 truncate">{floor.name}</p>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <span className="text-xs text-green-600">●{floor.available}</span>
                <span className="text-xs text-red-500">●{floor.occupied}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Tables Grid */}
        <div className="grid grid-cols-4 gap-1.5">
          {tables.map((table, index) => (
            <div 
              key={index}
              className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-bold ${
                table.status === 'occupied' 
                  ? 'bg-primary/10 border-2 border-primary text-primary' 
                  : 'bg-green-50 border border-green-200 text-green-700'
              }`}
            >
              <span>{table.id}</span>
              <div className="flex items-center gap-0.5 mt-0.5">
                <Users className="w-2.5 h-2.5" />
                <span className="text-[10px]">{table.seats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSMockup;
