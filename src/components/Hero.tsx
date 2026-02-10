import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Receipt, Check, Plus, Minus, Trash2, X, Search, ChefHat, ArrowLeftRight, Merge, SplitSquareVertical, Printer, CreditCard, Banknote, Sparkles, MousePointerClick, Play, SkipForward, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useCurrency } from '@/hooks/useCurrency';

// ============ TYPES ============
interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  note?: string;
}
interface TableInfo {
  id: string;
  name: string;
  capacity: number;
  location: string;
  status: 'OCCUPIED' | 'AVAILABLE';
}

// ============ MENU DATA ============
const MENU_CATEGORIES = [{
  name: 'Specialities',
  items: [{
    name: 'Cortado',
    price: 40
  }, {
    name: 'Pistachio Latte',
    price: 25
  }, {
    name: 'Red Velvet Latte',
    price: 25
  }, {
    name: 'Spanish Latte',
    price: 28
  }, {
    name: 'Vanillan Affogato',
    price: 25
  }]
}, {
  name: 'Manakish',
  items: [{
    name: 'Lebanese Zaatar',
    price: 10
  }, {
    name: "Za'atar Cheese",
    price: 12
  }]
}, {
  name: 'Hot Drinks',
  items: [{
    name: 'Cappuccino',
    price: 18
  }, {
    name: 'Americano',
    price: 15
  }]
}];
const TABLES: TableInfo[] = [{
  id: 't009',
  name: 'Table #009',
  capacity: 6,
  location: '1st Floor',
  status: 'OCCUPIED'
}, {
  id: 't1',
  name: 'Table #1',
  capacity: 4,
  location: '1st Floor',
  status: 'OCCUPIED'
}, {
  id: 't10',
  name: 'Table #10',
  capacity: 2,
  location: '2nd Floor',
  status: 'AVAILABLE'
}, {
  id: 't11',
  name: 'Table #11',
  capacity: 6,
  location: '2nd Floor',
  status: 'OCCUPIED'
}, {
  id: 't12',
  name: 'Table #12',
  capacity: 2,
  location: '2nd Floor',
  status: 'AVAILABLE'
}, {
  id: 't13',
  name: 'Table #13',
  capacity: 2,
  location: '2nd Floor',
  status: 'AVAILABLE'
}, {
  id: 't14',
  name: 'Table #14',
  capacity: 4,
  location: '2nd Floor',
  status: 'AVAILABLE'
}, {
  id: 't15',
  name: 'Table #15',
  capacity: 5,
  location: '2nd Floor',
  status: 'AVAILABLE'
}];
const MERGE_ORDERS = [{
  table: 'Table #11',
  order: '#100839',
  items: 1,
  amount: 160,
  time: '12:15 AM'
}, {
  table: 'Table #1',
  order: '#100838',
  items: 1,
  amount: 6,
  time: '10:46 PM'
}];

// ============ MODAL OVERLAY ============
const ModalOverlay = ({
  children,
  onClose
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl" onClick={onClose}>
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-[90%] max-h-[80%] overflow-auto border border-gray-200 animate-scale-in" onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>;

// ============ MAIN HERO ============
const Hero: React.FC = () => {
  const {
    formatAmount
  } = useCurrency();

  // Order state
  const [orderItems, setOrderItems] = useState<OrderItem[]>([{
    id: '1',
    name: 'Pistachio Latte',
    qty: 1,
    price: 25
  }, {
    id: '2',
    name: 'Red Velvet Latte',
    qty: 1,
    price: 25
  }, {
    id: '3',
    name: 'Lebanese Zaatar',
    qty: 1,
    price: 10
  }, {
    id: '4',
    name: "Za'atar Cheese",
    qty: 1,
    price: 12
  }, {
    id: '5',
    name: 'Cortado',
    qty: 1,
    price: 40
  }, {
    id: '6',
    name: 'Spanish Latte',
    qty: 1,
    price: 28,
    note: 'almond milk - no sugar'
  }]);
  const [currentTable, setCurrentTable] = useState('Table #009');
  const [orderStatus, setOrderStatus] = useState<'IN_PROGRESS' | 'CONFIRMED'>('IN_PROGRESS');
  const [fulfillment, setFulfillment] = useState<'Dine In' | 'Takeaway'>('Dine In');

  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [menuCategory, setMenuCategory] = useState(0);
  const [kotSent, setKotSent] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [splitItems, setSplitItems] = useState<Set<string>>(new Set());

  // Computed
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = subtotal * 0.05;
  const total = subtotal;

  // ============ WALKTHROUGH ============
  const WALKTHROUGH_STEPS = [{
    target: 'addItems',
    label: 'Add Items',
    desc: 'Add menu items to the order with one click.'
  }, {
    target: 'changeQty',
    label: 'Change Quantities',
    desc: 'Adjust quantities — totals update in real time.'
  }, {
    target: 'kot',
    label: 'Print KOT',
    desc: 'Send the order to the kitchen instantly.'
  }, {
    target: 'changeTable',
    label: 'Change Table',
    desc: 'Reassign the order to a different table.'
  }, {
    target: 'splitTable',
    label: 'Split Table',
    desc: 'Move selected items into a new order.'
  }, {
    target: 'moveOrder',
    label: 'Move Order',
    desc: 'Convert this dine-in order to takeaway.'
  }, {
    target: 'mergeTable',
    label: 'Merge Tables',
    desc: 'Combine multiple table orders into one.'
  }, {
    target: 'settle',
    label: 'Settle Bill',
    desc: 'Complete the payment — Cash, Card, or Split.'
  }];
  const [tourActive, setTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const tourTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTour = useCallback(() => {
    setActiveModal(null);
    setTourStep(0);
    setTourActive(true);
  }, []);
  const stopTour = useCallback(() => {
    setTourActive(false);
    setTourStep(0);
    if (tourTimerRef.current) clearTimeout(tourTimerRef.current);
  }, []);
  const nextTourStep = useCallback(() => {
    setTourStep(prev => {
      if (prev >= WALKTHROUGH_STEPS.length - 1) {
        setTourActive(false);
        return 0;
      }
      return prev + 1;
    });
  }, [WALKTHROUGH_STEPS.length]);

  // Auto-advance tour every 4 seconds
  useEffect(() => {
    if (!tourActive) return;
    tourTimerRef.current = setTimeout(nextTourStep, 4000);
    return () => {
      if (tourTimerRef.current) clearTimeout(tourTimerRef.current);
    };
  }, [tourActive, tourStep, nextTourStep]);
  const currentTourTarget = tourActive ? WALKTHROUGH_STEPS[tourStep]?.target : null;

  // Helper to render a button with optional tour tooltip
  const TourButton = ({
    id,
    children,
    onClick,
    className
  }: {
    id: string;
    children: React.ReactNode;
    onClick: () => void;
    className: string;
  }) => {
    const isHighlighted = currentTourTarget === id;
    const stepInfo = WALKTHROUGH_STEPS.find(s => s.target === id);
    const stepIndex = WALKTHROUGH_STEPS.findIndex(s => s.target === id);
    return <div className="relative">
        <button onClick={() => {
        onClick();
        if (isHighlighted) nextTourStep();
      }} className={`${className} ${isHighlighted ? 'ring-2 ring-primary ring-offset-1 z-20 relative scale-105' : ''} transition-all duration-300`}>
          {children}
        </button>
        {isHighlighted && stepInfo && <div className="absolute -top-[4.5rem] left-1/2 -translate-x-1/2 z-30 w-52 pointer-events-none animate-fade-in">
            <div className="bg-gray-900 text-white rounded-xl px-3 py-2 text-center shadow-xl pointer-events-auto">
              <p className="text-[10px] text-primary font-bold mb-0.5">Step {stepIndex + 1}/{WALKTHROUGH_STEPS.length}</p>
              <p className="text-xs font-medium leading-tight">{stepInfo.desc}</p>
            </div>
            <div className="w-2.5 h-2.5 bg-gray-900 rotate-45 mx-auto -mt-1.5" />
          </div>}
      </div>;
  };

  // Handlers
  const closeModal = useCallback(() => {
    setActiveModal(null);
    setKotSent(false);
    setPaymentSuccess(false);
    setSplitItems(new Set());
  }, []);
  const addItemToOrder = useCallback((name: string, price: number) => {
    setOrderItems(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing) return prev.map(i => i.name === name ? {
        ...i,
        qty: i.qty + 1
      } : i);
      return [...prev, {
        id: Date.now().toString(),
        name,
        qty: 1,
        price
      }];
    });
  }, []);
  const updateQty = useCallback((id: string, delta: number) => {
    setOrderItems(prev => prev.map(i => {
      if (i.id !== id) return i;
      const newQty = Math.max(1, i.qty + delta);
      return {
        ...i,
        qty: newQty
      };
    }));
  }, []);
  const removeItem = useCallback((id: string) => {
    setOrderItems(prev => prev.filter(i => i.id !== id));
  }, []);

  // ============ RENDER MODALS ============
  const renderModal = () => {
    if (!activeModal) return null;
    switch (activeModal) {
      // ADD ITEMS MODAL
      case 'addItems':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Add Items to Order</h3>
                <button onClick={closeModal} className="p-1 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm" placeholder="Search items across all categories..." readOnly />
              </div>
              <div className="flex gap-4">
                <div className="w-28 flex-shrink-0 space-y-1">
                  {MENU_CATEGORIES.map((cat, idx) => <button key={cat.name} onClick={() => setMenuCategory(idx)} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${idx === menuCategory ? 'bg-primary/10 text-primary border-l-2 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {cat.name}
                    </button>)}
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2 max-h-60 overflow-auto">
                  {MENU_CATEGORIES[menuCategory].items.map(item => <div key={item.name} className="border border-gray-200 rounded-xl p-3 hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-sm text-gray-900">{item.name}</p>
                        <p className="font-bold text-sm text-gray-900">{formatAmount(item.price)}</p>
                      </div>
                      <button onClick={() => addItemToOrder(item.name, item.price)} className="w-full py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 transition-colors">
                        Add to Order
                      </button>
                    </div>)}
                </div>
              </div>
            </div>
          </ModalOverlay>;

      // CHANGE QUANTITIES MODAL
      case 'changeQty':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Change Order Quantities</h3>
                <button onClick={closeModal} className="p-1 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <div className="space-y-3 mb-4">
                {orderItems.map(item => <div key={item.id} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{formatAmount(item.price)} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"><Minus className="w-3 h-3" /></button>
                      <span className="w-6 text-center font-bold text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-lg hover:bg-gray-800"><Plus className="w-3 h-3" /></button>
                      <button onClick={() => removeItem(item.id)} className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-3.5 h-3.5" /></button>
                      <span className="text-sm font-bold text-gray-900 w-20 text-right">{formatAmount(item.price * item.qty)}</span>
                    </div>
                  </div>)}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <p className="font-bold text-gray-900">Total Amount</p>
                <p className="text-lg font-bold text-gray-900">{formatAmount(subtotal)}</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={closeModal} className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button>
                <button onClick={closeModal} className="flex-1 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-600">Save Changes</button>
              </div>
            </div>
          </ModalOverlay>;

      // PRINT KOT MODAL
      case 'kot':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-6 bg-gray-100 font-mono text-sm">
              <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-300">
                <div className="text-center mb-3">
                  <p className="font-bold text-base">Swirl Cafe</p>
                  <p className="text-gray-600">Feb 10, 2026, 3:55 PM</p>
                  <p className="text-gray-600">Order #100840</p>
                  <p className="text-gray-600">{currentTable}</p>
                </div>
                <div className="border-t border-dashed border-gray-400 my-3" />
                {orderItems.map(item => <div key={item.id} className="mb-1">
                    <p className="font-bold">{item.name} x{item.qty}</p>
                    {item.note && <p className="text-gray-500 italic text-xs ml-2">Note: {item.note}</p>}
                  </div>)}
                <div className="border-t border-dashed border-gray-400 my-3" />
                {!kotSent ? <button onClick={() => setKotSent(true)} className="w-full py-2 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 flex items-center justify-center gap-2">
                    <ChefHat className="w-4 h-4" /> Send to Kitchen
                  </button> : <div className="text-center text-green-600 font-bold flex items-center justify-center gap-2 py-2">
                    <Check className="w-5 h-5" /> Sent to Kitchen!
                  </div>}
              </div>
            </div>
          </ModalOverlay>;

      // CHANGE TABLE MODAL
      case 'changeTable':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Change Table</h3>
                <button onClick={closeModal} className="p-1 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <div className="grid grid-cols-3 gap-2 max-h-72 overflow-auto">
                {TABLES.map(table => <button key={table.id} onClick={() => {
                setCurrentTable(table.name);
                closeModal();
              }} className={`p-3 border rounded-xl text-left transition-all hover:shadow-md ${table.name === currentTable ? 'border-2 border-gray-900 shadow-md' : 'border-gray-200'}`}>
                    <p className="font-bold text-sm text-gray-900">{table.name}</p>
                    <p className="text-xs text-gray-500">Capacity: {table.capacity}</p>
                    {table.location && <p className="text-xs text-gray-500">{table.location}</p>}
                    <span className={`inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${table.status === 'OCCUPIED' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {table.status}
                    </span>
                  </button>)}
              </div>
            </div>
          </ModalOverlay>;

      // SPLIT TABLE MODAL
      case 'splitTable':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">Split Table</h3>
                <button onClick={closeModal} className="p-1 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Select items to move to a new order:</p>
              <div className="space-y-2 mb-4">
                {orderItems.map(item => <button key={item.id} onClick={() => setSplitItems(prev => {
                const n = new Set(prev);
                n.has(item.id) ? n.delete(item.id) : n.add(item.id);
                return n;
              })} className={`w-full p-3 border rounded-xl text-left flex items-center justify-between transition-colors ${splitItems.has(item.id) ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.qty} × {formatAmount(item.price)}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${splitItems.has(item.id) ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                      {splitItems.has(item.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </button>)}
              </div>
              <div className="flex gap-3">
                <button onClick={closeModal} className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium">Cancel</button>
                <button onClick={() => {
                if (splitItems.size > 0) {
                  setOrderItems(prev => prev.filter(i => !splitItems.has(i.id)));
                  closeModal();
                }
              }} className="flex-1 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50" disabled={splitItems.size === 0}>
                  Split {splitItems.size} item{splitItems.size !== 1 ? 's' : ''}
                </button>
              </div>
            </div>
          </ModalOverlay>;

      // MOVE ORDER MODAL
      case 'moveOrder':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">→ Move Order</h3>
                <button onClick={closeModal} className="p-1 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Move this order from <strong>Dine-In ({currentTable})</strong> to a different fulfillment method.</p>
              <div className="space-y-3 mb-4">
                <div className="p-3 border border-gray-200 rounded-xl bg-gray-50">
                  <p className="text-xs text-gray-500 mb-1">Current Order Type</p>
                  <p className="font-bold text-sm">🍽 Dine-In - {currentTable}</p>
                </div>
                <div className={`p-3 border rounded-xl cursor-pointer transition-colors ${fulfillment === 'Dine In' ? 'border-gray-200' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div><p className="font-bold text-sm">🍽 Dine-In</p><p className="text-xs text-gray-500">Assign a table and serve customer on-site</p></div>
                    {fulfillment === 'Dine In' && <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">Current</span>}
                  </div>
                </div>
                <button onClick={() => setFulfillment('Takeaway')} className={`w-full p-3 border rounded-xl text-left transition-colors ${fulfillment === 'Takeaway' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <p className="font-bold text-sm">📦 Takeaway</p>
                  <p className="text-xs text-gray-500">Customer picks up the order</p>
                </button>
                {fulfillment === 'Takeaway' && <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700">
                    <strong>Note:</strong> Moving to Takeaway will remove the table assignment. The table will be marked as available.
                  </div>}
              </div>
              <div className="flex gap-3">
                <button onClick={closeModal} className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium">Cancel</button>
                <button onClick={() => {
                setFulfillment('Takeaway');
                closeModal();
              }} className="flex-1 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800">
                  Move to Takeaway
                </button>
              </div>
            </div>
          </ModalOverlay>;

      // MERGE TABLE MODAL
      case 'mergeTable':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">🔀 Merge Tables</h3>
                <button onClick={closeModal} className="p-1 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Select an order to merge into this order (Order #100840 - {currentTable}). All items from the selected order will be added here.</p>
              <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"><Check className="w-3.5 h-3.5 text-white" /></div>
                  <div><p className="font-bold text-sm">Target Order: #100840</p><p className="text-xs text-primary">{currentTable}</p></div>
                </div>
                <p className="text-xs text-primary mt-1">Items from the selected order will be merged INTO this order</p>
              </div>
              <p className="text-xs font-medium text-gray-500 mb-2">Dine-In Orders (2)</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {MERGE_ORDERS.map(order => <button key={order.order} onClick={() => {
                // Simulate merge by adding items
                setOrderItems(prev => [...prev, {
                  id: Date.now().toString(),
                  name: 'Merged Item',
                  qty: 1,
                  price: order.amount
                }]);
                closeModal();
              }} className="p-3 border border-gray-200 rounded-xl text-left hover:border-primary/30 hover:shadow-md transition-all">
                    <p className="font-bold text-sm">{order.table}</p>
                    <p className="text-xs text-gray-500">Order {order.order}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">{order.items} items</span>
                      <span className="text-sm font-bold">{formatAmount(order.amount)}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">Started at {order.time}</p>
                  </button>)}
              </div>
              <div className="flex gap-3">
                <button onClick={closeModal} className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium">Cancel</button>
                <button onClick={closeModal} className="flex-1 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium">Continue</button>
              </div>
            </div>
          </ModalOverlay>;

      // PRINT BILL / SETTLE MODAL
      case 'settle':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              {!paymentSuccess ? <>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Select Payment Method</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[{
                  icon: Banknote,
                  label: 'Cash',
                  color: 'bg-green-500'
                }, {
                  icon: CreditCard,
                  label: 'Card',
                  color: 'bg-primary'
                }, {
                  icon: SplitSquareVertical,
                  label: 'Split',
                  color: 'bg-gray-700'
                }].map(m => <button key={m.label} onClick={() => setPaymentSuccess(true)} className={`${m.color} text-white rounded-xl p-4 flex flex-col items-center gap-2 hover:opacity-90 transition-opacity`}>
                        <m.icon className="w-6 h-6" />
                        <span className="text-sm font-semibold">{m.label}</span>
                      </button>)}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-500">Amount Due</p>
                    <p className="text-2xl font-bold text-gray-900">{formatAmount(total)}</p>
                  </div>
                </> : <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Payment Successful!</h3>
                  <p className="text-sm text-gray-500 mb-4">{formatAmount(total)} received</p>
                  <button onClick={closeModal} className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">Done</button>
                </div>}
            </div>
          </ModalOverlay>;
      default:
        return null;
    }
  };

  // ============ MAIN RENDER ============
  return <section className="relative min-h-screen bg-white overflow-hidden pt-24 md:pt-28 pb-8">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Two-column layout: Text left, Mockup right */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-10 items-start mx-0 my-[100px] px-0">
          
          {/* LEFT: Hero Text */}
          <div className="flex flex-col justify-center pt-2 lg:pt-12 text-center lg:text-left animate-fade-in order-1 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
              The Operating System{" "}
              <span className="bg-gradient-to-r from-primary via-primary/85 to-primary/65 bg-clip-text text-transparent">Powering</span>{" "}
              Modern Restaurants
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              POS, QR Ordering, Inventory, Accounting, CRM, Analytics & AI — unified into one powerful platform.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
              <a href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Swirl" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-7 text-sm font-semibold shadow-lg shadow-primary/25">
                  Book a Demo <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <Link to="/features/point-of-sale">
                <Button variant="outline" size="lg" className="h-12 px-7 text-sm font-semibold">
                  Explore Features
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm text-muted-foreground mb-6">
              {['Free setup', '24/7 support', '500+ restaurants'].map(t => <span key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />{t}</span>)}
            </div>

            {/* Interactive doodle hint + Tour button */}
            <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                <MousePointerClick className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">It's a live demo — try clicking!</span>
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              {!tourActive ? <button onClick={startTour} className="flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white rounded-full text-xs font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/25">
                  <Play className="w-3.5 h-3.5" /> Guided Tour
                </button> : <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                    Step {tourStep + 1}/{WALKTHROUGH_STEPS.length}
                  </span>
                  <button onClick={nextTourStep} className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors">
                    <SkipForward className="w-3 h-3" /> Next
                  </button>
                  <button onClick={stopTour} className="flex items-center gap-1 px-3 py-1.5 text-muted-foreground hover:text-foreground rounded-full text-xs font-medium transition-colors">
                    <XCircle className="w-3.5 h-3.5" /> End
                  </button>
                </div>}
            </div>
          </div>

          {/* RIGHT: Interactive POS Mockup */}
          <div className="relative animate-fade-in order-2 lg:order-2">
            {/* Doodle annotations */}
            <div className="absolute -top-6 left-4 hidden lg:flex items-center gap-1 text-primary text-xs font-medium animate-bounce" style={{
            animationDuration: '3s'
          }}>
              <span>↙ Try adding items!</span>
            </div>
            <div className="absolute -top-6 right-4 hidden lg:flex items-center gap-1 text-primary text-xs font-medium animate-bounce" style={{
            animationDuration: '3.5s'
          }}>
              <span>Click Settle Bill →</span>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative">
            {renderModal()}

            {/* Top Header */}
            <div className="bg-white border-b border-gray-100 px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-base md:text-lg font-bold text-gray-900">Order #100840</h2>
                <p className="text-[10px] text-gray-500">Feb 10, 2026, 3:55 PM · Created by <strong>shamim</strong></p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> shamim (Admin)
                </span>
                <span className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700">{currentTable}</span>
                <span className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700">
                  {fulfillment === 'Dine In' ? '🍽' : '📦'} {fulfillment}
                </span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2">
              {/* LEFT: Order Items */}
              <div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-gray-900 text-sm">Order</h3>
                  <span className={`px-2 py-0.5 text-[10px] font-medium rounded ${orderStatus === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{orderStatus === 'IN_PROGRESS' ? 'IN PROGRESS' : 'CONFIRMED'}</span>
                </div>

                {/* Item list */}
                <div className="space-y-1.5 mb-4 max-h-64 overflow-auto">
                  {orderItems.map(item => <div key={item.id} className="p-2.5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                          <p className="text-[10px] text-gray-500">Quantity: {item.qty} × {formatAmount(item.price)}</p>
                          {item.note && <p className="text-[10px] text-orange-500 italic mt-0.5">Note: {item.note}</p>}
                        </div>
                        <p className="font-bold text-gray-900 text-sm">{formatAmount(item.price * item.qty)}</p>
                      </div>
                    </div>)}
                </div>

                {/* Action Buttons Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setOrderStatus(orderStatus === 'IN_PROGRESS' ? 'CONFIRMED' : 'IN_PROGRESS')} className="px-3 py-2 text-xs font-medium text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors">
                    Change Status ({orderStatus === 'IN_PROGRESS' ? 'IN_PROGRESS' : 'CONFIRMED'})
                  </button>
                  <TourButton id="addItems" onClick={() => setActiveModal('addItems')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Add Item to Order
                  </TourButton>
                  <TourButton id="changeQty" onClick={() => setActiveModal('changeQty')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Change Quantities
                  </TourButton>
                  <TourButton id="kot" onClick={() => setActiveModal('kot')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Print KOT
                  </TourButton>
                  <TourButton id="changeTable" onClick={() => setActiveModal('changeTable')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Change Table
                  </TourButton>
                  <TourButton id="splitTable" onClick={() => setActiveModal('splitTable')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                    <SplitSquareVertical className="w-3 h-3" /> Split Table
                  </TourButton>
                  <TourButton id="moveOrder" onClick={() => setActiveModal('moveOrder')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                    <ArrowLeftRight className="w-3 h-3" /> Move Order
                  </TourButton>
                  <TourButton id="mergeTable" onClick={() => setActiveModal('mergeTable')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                    <Merge className="w-3 h-3" /> Merge Table
                  </TourButton>
                </div>
              </div>

              {/* RIGHT: Billing */}
              <div className="p-4 md:p-5 bg-gray-50/50">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-gray-900 text-sm">Billing</h3>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-medium rounded">UNPAID</span>
                </div>

                {/* Invoice */}
                <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
                  <div className="text-center mb-3 pb-3 border-b border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm">Swirl Cafe</h4>
                    <p className="text-[10px] text-gray-500">Loading...</p>
                    <p className="text-[9px] text-gray-400">VAT: VAT123456789</p>
                    <p className="text-[10px] text-gray-500">Feb 10, 2026, 3:55 PM</p>
                    <p className="text-[10px] text-gray-500">Order #100840 · {currentTable}</p>
                  </div>

                  {/* Line items */}
                  <div className="space-y-1 mb-3">
                    <div className="grid grid-cols-12 text-[10px] font-medium text-gray-500 pb-1 border-b border-gray-100">
                      <span className="col-span-5">Name</span>
                      <span className="col-span-3 text-center">Quantity</span>
                      <span className="col-span-4 text-right">Cost</span>
                    </div>
                    {orderItems.map(item => <div key={item.id} className="grid grid-cols-12 text-xs text-gray-700">
                        <span className="col-span-5">{item.name}</span>
                        <span className="col-span-3 text-center">{item.qty}</span>
                        <span className="col-span-4 text-right font-medium">{formatAmount(item.price * item.qty)}</span>
                      </div>)}
                  </div>

                  {/* Totals */}
                  <div className="border-t border-gray-100 pt-2 space-y-1">
                    <p className="text-[10px] text-gray-400 italic">Prices include tax</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Sub Total <span className="text-[9px] text-gray-400">(incl. tax)</span></span>
                      <span className="text-gray-900">{formatAmount(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Tax included in total:<br />VAT (5%)</span>
                      <span className="text-gray-600">{formatAmount(vat)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold pt-2 border-t border-gray-200">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">{formatAmount(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button onClick={() => setActiveModal('kot')} className="w-full px-3 py-2.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Printer className="w-4 h-4" /> Print Bill
                  </button>
                  <button className="w-full px-3 py-2.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Apply Discount
                  </button>
                  <TourButton id="settle" onClick={() => setActiveModal('settle')} className="w-full px-3 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                    Settle Bill
                  </TourButton>
                  <button className="w-full px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Settle Bill (No Print)
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>;
};
export default Hero;