import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Plus, Minus, Trash2, X, Search, ChefHat, ArrowLeftRight, Merge, SplitSquareVertical, Printer, CreditCard, Banknote, Sparkles, MousePointerClick, Play, SkipForward, XCircle, Percent, Tag, Receipt, Wallet, Smartphone, CircleDollarSign, StickyNote, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { useCurrency } from '@/hooks/useCurrency';

// ============ TYPES ============
interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  note?: string;
  isNew?: boolean; // Track newly added items for KOT
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
    name: 'Vanilla Affogato',
    price: 25
  }, {
    name: 'Matcha Latte',
    price: 22
  }]
}, {
  name: 'Manakish',
  items: [{
    name: 'Lebanese Zaatar',
    price: 10
  }, {
    name: "Za'atar Cheese",
    price: 12
  }, {
    name: 'Cheese Manakish',
    price: 14
  }, {
    name: 'Labneh Manakish',
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
  }, {
    name: 'Flat White',
    price: 20
  }, {
    name: 'Hot Chocolate',
    price: 18
  }]
}, {
  name: 'Food',
  items: [{
    name: 'Texas BBQ Sandwich',
    price: 35
  }, {
    name: 'Club Sandwich',
    price: 30
  }, {
    name: 'Caesar Salad',
    price: 28
  }, {
    name: 'Grilled Chicken Wrap',
    price: 32
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
const PREDEFINED_DISCOUNTS = [{
  name: 'Rahbar Disc',
  description: 'First order',
  percent: 10
}, {
  name: 'Khalid disc',
  description: 'recurring customer',
  percent: 10
}, {
  name: 'Rohit',
  description: '',
  percent: 10
}, {
  name: 'VALENTINES10',
  description: 'Valentines Day Offer',
  percent: 10
}, {
  name: 'Tasteful Treats',
  description: '',
  percent: 15
}, {
  name: 'BRUNCH10',
  description: 'Brunch 10',
  percent: 10
}];
const PAYMENT_METHODS = [{
  name: 'Master Card',
  type: 'CREDIT CARD',
  icon: CreditCard
}, {
  name: 'Visa',
  type: 'CREDIT CARD',
  icon: CreditCard
}, {
  name: 'CASH',
  type: 'CASH',
  icon: Banknote
}, {
  name: 'Aggregator Payment',
  type: 'MOBILE PAYMENT',
  icon: Smartphone
}, {
  name: 'Swirl Credit',
  type: 'RESTAURANT CREDIT',
  icon: CircleDollarSign,
  highlight: true
}, {
  name: 'SPLIT PAYMENT',
  type: '',
  icon: SplitSquareVertical
}];

// ============ MODAL OVERLAY ============
const ModalOverlay = ({
  children,
  onClose,
  wide
}: {
  children: React.ReactNode;
  onClose: () => void;
  wide?: boolean;
}) => <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl" onClick={onClose}>
    <div className={`bg-white rounded-2xl shadow-2xl ${wide ? 'max-w-lg w-[95%]' : 'max-w-md w-[92%]'} max-h-[85%] overflow-auto border border-gray-200 animate-scale-in`} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>;

// ============ MAIN HERO ============
const Hero: React.FC = () => {
  const {
    formatAmount,
    currency
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
  const [paymentStatus, setPaymentStatus] = useState<'UNPAID' | 'PAID'>('UNPAID');

  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [menuCategory, setMenuCategory] = useState(0);
  const [kotSent, setKotSent] = useState(false);
  const [lastKotItems, setLastKotItems] = useState<string[]>([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [splitItems, setSplitItems] = useState<Set<string>>(new Set());

  // Add Items staging
  const [stagingItem, setStagingItem] = useState<{
    name: string;
    price: number;
  } | null>(null);
  const [stagingQty, setStagingQty] = useState(1);
  const [stagingNote, setStagingNote] = useState('');

  // Discount states
  const [discountTab, setDiscountTab] = useState<'predefined' | 'spot'>('predefined');
  const [discountType, setDiscountType] = useState<'Percentage' | 'Fixed Amount'>('Percentage');
  const [discountValue, setDiscountValue] = useState('');
  const [discountReason, setDiscountReason] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{
    type: string;
    value: number;
    reason: string;
  } | null>(null);

  // Computed
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const netAmount = subtotal / 1.05; // Prices are tax-inclusive
  const vatAmount = subtotal - netAmount;
  const discountAmount = appliedDiscount ? appliedDiscount.type === 'Percentage' ? subtotal * appliedDiscount.value / 100 : appliedDiscount.value : 0;
  const total = subtotal - discountAmount;

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
  useEffect(() => {
    if (!tourActive) return;
    tourTimerRef.current = setTimeout(nextTourStep, 4000);
    return () => {
      if (tourTimerRef.current) clearTimeout(tourTimerRef.current);
    };
  }, [tourActive, tourStep, nextTourStep]);
  const currentTourTarget = tourActive ? WALKTHROUGH_STEPS[tourStep]?.target : null;
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
        {isHighlighted && stepInfo && <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 w-52 pointer-events-none animate-fade-in">
            <div className="bg-gray-900 text-white rounded-xl px-3 py-2 text-center shadow-xl pointer-events-auto">
              <p className="text-[10px] text-primary font-bold mb-0.5">Step {stepIndex + 1}/{WALKTHROUGH_STEPS.length}</p>
              <p className="text-xs font-medium leading-tight">{stepInfo.desc}</p>
            </div>
            <div className="w-2.5 h-2.5 bg-gray-900 rotate-45 mx-auto -mt-1.5" />
          </div>}
      </div>;
  };

  // ============ HANDLERS ============
  const closeModal = useCallback(() => {
    setActiveModal(null);
    setKotSent(false);
    setPaymentSuccess(false);
    setSplitItems(new Set());
    setStagingItem(null);
    setStagingQty(1);
    setStagingNote('');
    setDiscountValue('');
    setDiscountReason('');
    setDiscountTab('predefined');
    setDiscountType('Percentage');
  }, []);
  const confirmAddItem = useCallback(() => {
    if (!stagingItem) return;
    setOrderItems(prev => {
      const existing = prev.find(i => i.name === stagingItem.name && !i.note && !stagingNote);
      if (existing && !stagingNote) {
        return prev.map(i => i.id === existing.id ? {
          ...i,
          qty: i.qty + stagingQty,
          isNew: true
        } : i);
      }
      return [...prev, {
        id: Date.now().toString(),
        name: stagingItem.name,
        qty: stagingQty,
        price: stagingItem.price,
        note: stagingNote || undefined,
        isNew: true
      }];
    });
    setStagingItem(null);
    setStagingQty(1);
    setStagingNote('');
  }, [stagingItem, stagingQty, stagingNote]);
  const updateQty = useCallback((id: string, delta: number) => {
    setOrderItems(prev => prev.map(i => i.id !== id ? i : {
      ...i,
      qty: Math.max(1, i.qty + delta)
    }));
  }, []);
  const removeItem = useCallback((id: string) => {
    setOrderItems(prev => prev.filter(i => i.id !== id));
  }, []);
  const handleSettleBill = useCallback((method: string) => {
    if (method === 'SPLIT PAYMENT') {
      // For demo, just show success
    }
    setPaymentSuccess(true);
    setPaymentStatus('PAID');
  }, []);
  const handlePrintKOT = useCallback(() => {
    const newItems = orderItems.filter(i => i.isNew);
    const itemsForKot = newItems.length > 0 ? newItems : orderItems;
    setLastKotItems(itemsForKot.map(i => i.id));
    setOrderItems(prev => prev.map(i => ({
      ...i,
      isNew: false
    })));
    setKotSent(true);
  }, [orderItems]);
  const applyPredefinedDiscount = useCallback((disc: typeof PREDEFINED_DISCOUNTS[0]) => {
    setAppliedDiscount({
      type: 'Percentage',
      value: disc.percent,
      reason: disc.name
    });
    closeModal();
  }, [closeModal]);
  const applySpotDiscount = useCallback(() => {
    const val = parseFloat(discountValue);
    if (isNaN(val) || val <= 0) return;
    setAppliedDiscount({
      type: discountType,
      value: val,
      reason: discountReason
    });
    closeModal();
  }, [discountType, discountValue, discountReason, closeModal]);

  // ============ RENDER MODALS ============
  const renderModal = () => {
    if (!activeModal) return null;
    switch (activeModal) {
      // ========== ADD ITEMS ==========
      case 'addItems':
        return <ModalOverlay onClose={closeModal} wide>
            <div className="p-5 md:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">Add Items to Order</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Search */}
              <div className="relative mb-5">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-primary/30 focus:outline-none transition-colors" placeholder="Search items across all categories..." readOnly />
              </div>

              {/* Categories + Items */}
              <div className="flex gap-5">
                <div className="w-32 flex-shrink-0 space-y-1">
                  {MENU_CATEGORIES.map((cat, idx) => <button key={cat.name} onClick={() => setMenuCategory(idx)} className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${idx === menuCategory ? 'bg-primary/10 text-primary border-l-3 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {cat.name}
                    </button>)}
                </div>

                <div className="flex-1">
                  {/* Staging item form */}
                  {stagingItem ? <div className="border-2 border-primary/20 rounded-xl p-4 bg-primary/5 animate-fade-in">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-bold text-gray-900">{stagingItem.name}</p>
                          <p className="text-sm text-gray-500">{formatAmount(stagingItem.price)} each</p>
                        </div>
                        <button onClick={() => setStagingItem(null)} className="p-1 hover:bg-white rounded-full">
                          <X className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>

                      {/* Quantity */}
                      <div className="mb-4">
                        <label className="text-xs font-medium text-gray-600 mb-1.5 block">Quantity</label>
                        <div className="flex items-center gap-3">
                          <button onClick={() => setStagingQty(Math.max(1, stagingQty - 1))} className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50">
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center font-bold text-lg">{stagingQty}</span>
                          <button onClick={() => setStagingQty(stagingQty + 1)} className="w-9 h-9 flex items-center justify-center bg-gray-900 text-white rounded-lg hover:bg-gray-800">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          <span className="ml-auto text-sm font-bold text-gray-900">{formatAmount(stagingItem.price * stagingQty)}</span>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="mb-4">
                        <label className="text-xs font-medium text-gray-600 mb-1.5 flex items-center gap-1">
                          <StickyNote className="w-3 h-3" /> Special Instructions (optional)
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-primary/30 focus:outline-none" placeholder="e.g. no sugar, extra hot, almond milk..." value={stagingNote} onChange={e => setStagingNote(e.target.value)} />
                      </div>

                      <button onClick={confirmAddItem} className="w-full py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" /> Add to Order
                      </button>
                    </div> : <div className="grid grid-cols-2 gap-3 max-h-72 overflow-auto pr-1">
                      {MENU_CATEGORIES[menuCategory].items.map(item => <button key={item.name} onClick={() => {
                    setStagingItem(item);
                    setStagingQty(1);
                    setStagingNote('');
                  }} className="border border-gray-200 rounded-xl p-3.5 hover:border-primary/30 hover:shadow-sm transition-all text-left group">
                          <p className="font-medium text-sm text-gray-900 mb-1 group-hover:text-primary transition-colors">{item.name}</p>
                          <p className="font-bold text-sm text-gray-700">{formatAmount(item.price)}</p>
                        </button>)}
                    </div>}
                </div>
              </div>
            </div>
          </ModalOverlay>;

      // ========== CHANGE QUANTITIES ==========
      case 'changeQty':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Edit Order Items</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <div className="space-y-2.5 mb-4">
                {orderItems.map(item => <div key={item.id} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">{formatAmount(item.price)} each</p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50"><Minus className="w-3 h-3" /></button>
                      <span className="w-6 text-center font-bold text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-lg hover:bg-gray-800"><Plus className="w-3 h-3" /></button>
                      <button onClick={() => removeItem(item.id)} className="w-7 h-7 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-3.5 h-3.5" /></button>
                      <span className="text-sm font-bold text-gray-900 w-16 text-right">{formatAmount(item.price * item.qty)}</span>
                    </div>
                  </div>)}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <p className="font-bold text-gray-900">Total</p>
                <p className="text-lg font-bold text-gray-900">{formatAmount(subtotal)}</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Cancel</button>
                <button onClick={closeModal} className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">Save Changes</button>
              </div>
            </div>
          </ModalOverlay>;

      // ========== PRINT KOT ==========
      case 'kot':
        {
          const newItems = orderItems.filter(i => i.isNew);
          const kotItems = kotSent ? orderItems.filter(i => lastKotItems.includes(i.id)) : newItems.length > 0 ? newItems : orderItems;
          return <ModalOverlay onClose={closeModal}>
            <div className="p-5 bg-gray-100 font-mono text-sm">
              <div className="bg-white p-5 rounded-xl shadow-inner border border-gray-300">
                <div className="text-center mb-3">
                  <p className="font-bold text-base">KOT - Kitchen Order</p>
                  <p className="text-gray-600 text-xs">Swirl Cafe</p>
                  <p className="text-gray-500 text-xs">Order #100840 · {currentTable}</p>
                  {newItems.length > 0 && !kotSent && <span className="inline-block mt-1 text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-sans font-medium">
                      New Items Only
                    </span>}
                </div>
                <div className="border-t border-dashed border-gray-400 my-3" />
                {kotItems.map(item => <div key={item.id} className="mb-1.5">
                    <p className="font-bold">{item.name} x{item.qty}</p>
                    {item.note && <p className="text-gray-500 italic text-xs ml-2">Note: {item.note}</p>}
                  </div>)}
                <div className="border-t border-dashed border-gray-400 my-3" />
                {!kotSent ? <button onClick={handlePrintKOT} className="w-full py-2.5 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700 flex items-center justify-center gap-2 transition-colors">
                    <ChefHat className="w-4 h-4" /> Send to Kitchen
                  </button> : <div className="text-center text-green-600 font-bold flex items-center justify-center gap-2 py-2 font-sans">
                    <Check className="w-5 h-5" /> Sent to Kitchen!
                  </div>}
              </div>
            </div>
          </ModalOverlay>;
        }

      // ========== PRINT BILL ==========
      case 'printBill':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5 bg-gray-100 font-mono text-sm">
              <div className="bg-white p-5 rounded-xl shadow-inner border border-gray-300">
                <div className="text-center mb-3">
                  <p className="font-black text-xl italic">swirl</p>
                  <p className="font-bold text-sm mt-2">Swirl Cafe</p>
                  <p className="text-gray-500 text-xs">VAT: VAT123456789</p>
                  <p className="text-gray-500 text-xs">Feb 10, 2026, 3:55 PM</p>
                  <p className="text-gray-500 text-xs">Invoice #100840</p>
                  <p className="text-gray-500 text-xs">Server: shamim</p>
                  <p className="font-bold text-sm mt-1">{currentTable}</p>
                </div>
                <div className="border-t-2 border-dashed border-gray-400 my-3" />

                {/* Items table */}
                <div className="mb-3">
                  <div className="grid grid-cols-12 text-xs font-bold mb-1 border-b border-dashed border-gray-300 pb-1">
                    <span className="col-span-5">Item</span>
                    <span className="col-span-2 text-center">Qty.</span>
                    <span className="col-span-2 text-right">Price</span>
                    <span className="col-span-3 text-right">Amount</span>
                  </div>
                  {orderItems.map(item => <div key={item.id} className="grid grid-cols-12 text-xs py-0.5">
                      <span className="col-span-5">{item.name}</span>
                      <span className="col-span-2 text-center">{item.qty}</span>
                      <span className="col-span-2 text-right">{formatAmount(item.price)}</span>
                      <span className="col-span-3 text-right">{formatAmount(item.price * item.qty)}</span>
                    </div>)}
                </div>

                <div className="border-t-2 border-dashed border-gray-400 my-3" />

                {/* Totals */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Subtotal (Subtotal)</span>
                    <span className="font-bold">{formatAmount(subtotal)}</span>
                  </div>
                  {discountAmount > 0 && <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-{formatAmount(discountAmount)}</span>
                    </div>}
                  <div className="flex justify-between font-bold text-sm pt-1">
                    <span>Total (Total)</span>
                    <span>{formatAmount(total)}</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-400 my-3" />

                {/* Tax Breakdown */}
                <div className="text-center mb-2">
                  <p className="font-bold text-xs">Tax Breakdown</p>
                </div>
                <div className="text-xs space-y-0.5">
                  <div className="flex justify-between">
                    <span>VAT 5%</span>
                    <span>{formatAmount(vatAmount)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total Tax</span>
                    <span>{formatAmount(vatAmount)}</span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 italic text-center mt-1">Net Amount: {formatAmount(netAmount)}</p>

                <div className="border-t border-dashed border-gray-400 my-3" />

                <div className="text-center text-xs text-gray-600">
                  <p>Printed by: shamim</p>
                  <p>Printed at: Feb 10, 2026, 6:43 PM</p>
                </div>

                <div className="my-3 flex justify-center">
                  <span className={`px-6 py-1.5 rounded-full border-2 text-sm font-bold ${paymentStatus === 'PAID' ? 'border-green-500 text-green-600' : 'border-amber-500 text-amber-600'}`}>
                    {paymentStatus}
                  </span>
                </div>

                <p className="text-center text-xs text-gray-500 mb-1">Have a lovely day!</p>
                <p className="text-center text-xs text-gray-400">built with ♥ by swirl.cx</p>
              </div>
            </div>
          </ModalOverlay>;

      // ========== APPLY DISCOUNT ==========
      case 'discount':
        {
          const spotDiscountCalc = (() => {
            const val = parseFloat(discountValue);
            if (isNaN(val) || val <= 0) return 0;
            return discountType === 'Percentage' ? netAmount * val / 100 : val;
          })();
          return <ModalOverlay onClose={closeModal} wide>
            <div className="p-5 md:p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">Apply Discount</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-5">
                <button onClick={() => setDiscountTab('predefined')} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${discountTab === 'predefined' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  Pre-Defined Discount
                </button>
                <button onClick={() => setDiscountTab('spot')} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${discountTab === 'spot' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  Spot Discount
                </button>
              </div>

              {discountTab === 'predefined' ? <>
                  <p className="text-sm text-gray-500 mb-4">Choose from the pre-defined discounts below or apply a spot discount</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {PREDEFINED_DISCOUNTS.map(disc => {
                    const discAmt = netAmount * disc.percent / 100;
                    return <button key={disc.name} onClick={() => applyPredefinedDiscount(disc)} className="p-4 border border-gray-200 rounded-xl text-left hover:border-primary/30 hover:shadow-sm transition-all">
                          <p className="font-bold text-sm text-gray-900">{disc.name}</p>
                          {disc.description && <p className="text-xs text-gray-400 mt-0.5">{disc.description}</p>}
                          <p className="text-sm font-medium text-gray-700 mt-1.5">
                            {disc.percent}% off{' '}
                            <span className="text-primary">({formatAmount(discAmt)} off {formatAmount(netAmount)})</span>
                          </p>
                        </button>;
                  })}
                  </div>
                  <div className="flex justify-end">
                    <button onClick={closeModal} className="px-5 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Cancel</button>
                  </div>
                </> : <div className="border border-gray-200 rounded-xl p-5">
                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Discount Type</label>
                    <select value={discountType} onChange={e => setDiscountType(e.target.value as any)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary/30 focus:outline-none bg-white">
                      <option>Percentage</option>
                      <option>Fixed Amount</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      {discountType === 'Percentage' ? 'Percentage (%)' : `Amount (${currency.code})`}
                    </label>
                    <input type="number" value={discountValue} onChange={e => setDiscountValue(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary/30 focus:outline-none" placeholder={discountType === 'Percentage' ? '20' : '50'} />
                  </div>

                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Reason</label>
                    <input value={discountReason} onChange={e => setDiscountReason(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary/30 focus:outline-none" placeholder="e.g. friends, family, loyalty" />
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
                    <p className="font-semibold text-sm text-gray-900">Apply to Total</p>
                    <p className="text-xs text-gray-600 mt-0.5">Since prices are tax-inclusive, the discount will be applied to the total amount. This ensures accurate calculations and avoids variances.</p>
                  </div>

                  {spotDiscountCalc > 0 && <p className="text-sm text-primary mb-4">Discount amount: {formatAmount(spotDiscountCalc)}</p>}

                  <div className="flex gap-3">
                    <button onClick={closeModal} className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Cancel</button>
                    <button onClick={applySpotDiscount} className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" disabled={!discountValue || parseFloat(discountValue) <= 0}>
                      <Tag className="w-4 h-4" /> Apply Discount
                    </button>
                  </div>
                </div>}
            </div>
          </ModalOverlay>;
        }

      // ========== CHANGE TABLE ==========
      case 'changeTable':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Change Table</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <div className="grid grid-cols-3 gap-2.5 max-h-72 overflow-auto">
                {TABLES.map(table => <button key={table.id} onClick={() => {
                setCurrentTable(table.name);
                closeModal();
              }} className={`p-3 border rounded-xl text-left transition-all hover:shadow-md ${table.name === currentTable ? 'border-2 border-gray-900 shadow-md' : 'border-gray-200'}`}>
                    <p className="font-bold text-sm text-gray-900">{table.name}</p>
                    <p className="text-xs text-gray-500">Seats: {table.capacity}</p>
                    <p className="text-xs text-gray-500">{table.location}</p>
                    <span className={`inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${table.status === 'OCCUPIED' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {table.status}
                    </span>
                  </button>)}
              </div>
            </div>
          </ModalOverlay>;

      // ========== SPLIT TABLE ==========
      case 'splitTable':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">Split Table</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
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
                <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50">Cancel</button>
                <button onClick={() => {
                if (splitItems.size > 0) {
                  setOrderItems(prev => prev.filter(i => !splitItems.has(i.id)));
                  closeModal();
                }
              }} className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 disabled:opacity-50" disabled={splitItems.size === 0}>
                  Split {splitItems.size} item{splitItems.size !== 1 ? 's' : ''}
                </button>
              </div>
            </div>
          </ModalOverlay>;

      // ========== MOVE ORDER ==========
      case 'moveOrder':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">Move Order</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Move this order from <strong>Dine-In ({currentTable})</strong> to a different fulfillment method.</p>
              <div className="space-y-3 mb-4">
                <div className="p-3 border border-gray-200 rounded-xl bg-gray-50">
                  <p className="text-xs text-gray-500 mb-1">Current Order Type</p>
                  <p className="font-bold text-sm">🍽 Dine-In - {currentTable}</p>
                </div>
                <button onClick={() => setFulfillment('Takeaway')} className={`w-full p-3 border rounded-xl text-left transition-colors ${fulfillment === 'Takeaway' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <p className="font-bold text-sm">📦 Takeaway</p>
                  <p className="text-xs text-gray-500">Customer picks up the order</p>
                </button>
                {fulfillment === 'Takeaway' && <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700">
                    <strong>Note:</strong> Moving to Takeaway will remove the table assignment.
                  </div>}
              </div>
              <div className="flex gap-3">
                <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50">Cancel</button>
                <button onClick={() => {
                setFulfillment('Takeaway');
                closeModal();
              }} className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800">
                  Move to Takeaway
                </button>
              </div>
            </div>
          </ModalOverlay>;

      // ========== MERGE TABLE ==========
      case 'mergeTable':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">Merge Tables</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">Merge another order into Order #100840 ({currentTable}).</p>
              <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"><Check className="w-3.5 h-3.5 text-white" /></div>
                  <div>
                    <p className="font-bold text-sm">Target: Order #100840</p>
                    <p className="text-xs text-primary">{currentTable}</p>
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-500 mb-2">Available Orders</p>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {MERGE_ORDERS.map(order => <button key={order.order} onClick={() => {
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
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">{order.items} items</span>
                      <span className="text-sm font-bold">{formatAmount(order.amount)}</span>
                    </div>
                  </button>)}
              </div>
              <button onClick={closeModal} className="w-full py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">Cancel</button>
            </div>
          </ModalOverlay>;

      // ========== SETTLE BILL ==========
      case 'settle':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              {!paymentSuccess ? <>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-900">Select Payment Method</h3>
                    <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
                  </div>
                  <div className="space-y-2.5 mb-4">
                    {PAYMENT_METHODS.map(m => <button key={m.name} onClick={() => handleSettleBill(m.name)} className={`w-full p-4 border rounded-xl text-left flex items-center gap-3 transition-all hover:shadow-sm ${m.highlight ? 'border-primary/30 bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        {m.highlight && <m.icon className="w-5 h-5 text-primary flex-shrink-0" />}
                        <div>
                          <p className="font-bold text-sm text-gray-900">{m.name}</p>
                          {m.type && <p className="text-xs text-gray-400">{m.type}</p>}
                        </div>
                      </button>)}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500">Amount Due</p>
                    <p className="text-2xl font-bold text-gray-900">{formatAmount(total)}</p>
                  </div>
                </> : <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Payment Successful!</h3>
                  <p className="text-sm text-gray-500 mb-4">{formatAmount(total)} received</p>
                  <button onClick={closeModal} className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">Done</button>
                </div>}
            </div>
          </ModalOverlay>;

      // ========== SETTLE BILL NO PRINT ==========
      case 'settleNoPrint':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              {!paymentSuccess ? <>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-900">Settle Bill (No Print)</h3>
                    <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center mb-4">
                    <p className="text-xs text-gray-500">Amount Due</p>
                    <p className="text-2xl font-bold text-gray-900">{formatAmount(total)}</p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 text-center">Select a payment method to settle without printing a receipt.</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[{
                  icon: Banknote,
                  label: 'Cash',
                  color: 'bg-green-600'
                }, {
                  icon: CreditCard,
                  label: 'Card',
                  color: 'bg-primary'
                }, {
                  icon: Wallet,
                  label: 'Wallet',
                  color: 'bg-gray-700'
                }].map(m => <button key={m.label} onClick={() => handleSettleBill(m.label)} className={`${m.color} text-white rounded-xl p-3.5 flex flex-col items-center gap-1.5 hover:opacity-90 transition-opacity`}>
                        <m.icon className="w-5 h-5" />
                        <span className="text-xs font-semibold">{m.label}</span>
                      </button>)}
                  </div>
                </> : <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Payment Settled!</h3>
                  <p className="text-sm text-gray-500 mb-1">{formatAmount(total)} received · No receipt printed</p>
                  <button onClick={closeModal} className="mt-4 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">Done</button>
                </div>}
            </div>
          </ModalOverlay>;
      default:
        return null;
    }
  };

  // ============ MAIN RENDER ============
  return <section className="relative bg-white overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-8">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-10 items-start px-px py-px my-[50px]">
          {/* LEFT: Hero Text */}
          <div className="flex flex-col justify-center pt-2 md:pt-4 lg:pt-14 text-center lg:text-left animate-fade-in order-1">
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
              The Operating System{' '}
              <span className="bg-gradient-to-r from-primary via-primary/85 to-primary/65 bg-clip-text text-transparent">Powering</span>{' '}
              Modern Restaurants
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-xl lg:max-w-none mx-auto lg:mx-0">
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
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm text-muted-foreground mb-5">
              {['Free setup', '24/7 support', '500+ restaurants'].map(t => <span key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />{t}</span>)}
            </div>

            {/* Tour controls */}
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
                  <button onClick={nextTourStep} className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20"><SkipForward className="w-3 h-3" /> Next</button>
                  <button onClick={stopTour} className="flex items-center gap-1 px-3 py-1.5 text-muted-foreground hover:text-foreground rounded-full text-xs font-medium"><XCircle className="w-3.5 h-3.5" /> End</button>
                </div>}
            </div>
          </div>

          {/* RIGHT: Interactive POS Mockup */}
          <div className="relative animate-fade-in order-2">
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
              <div className="bg-white border-b border-gray-100 px-4 md:px-5 py-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-gray-900">Order #100840</h2>
                  <p className="text-[10px] text-gray-500">Feb 10, 2026, 3:55 PM · Created by <strong>shamim</strong></p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${paymentStatus === 'PAID' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>
                    {paymentStatus}
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> shamim
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
                    <h3 className="font-bold text-gray-900 text-sm">Order Items</h3>
                    <span className={`px-2 py-0.5 text-[10px] font-medium rounded ${orderStatus === 'IN_PROGRESS' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                      {orderStatus === 'IN_PROGRESS' ? 'IN PROGRESS' : 'CONFIRMED'}
                    </span>
                  </div>

                  {/* Item list */}
                  <div className="space-y-1.5 mb-4 max-h-56 overflow-auto">
                    {orderItems.map(item => <div key={item.id} className="p-2.5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                            <p className="text-[10px] text-gray-500">{item.qty} × {formatAmount(item.price)}</p>
                            {item.note && <p className="text-[10px] text-orange-500 italic mt-0.5">Note: {item.note}</p>}
                          </div>
                          <p className="font-bold text-gray-900 text-sm flex-shrink-0 ml-2">{formatAmount(item.price * item.qty)}</p>
                        </div>
                      </div>)}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 my-0 mx-0 px-0 py-0">
                    <div className="grid grid-cols-2 gap-2">
                      <button onClick={() => setOrderStatus(orderStatus === 'IN_PROGRESS' ? 'CONFIRMED' : 'IN_PROGRESS')} className="px-3 py-2.5 text-xs font-medium text-orange-600 border border-orange-200 rounded-xl hover:bg-orange-50 transition-colors">
                        Change Status
                      </button>
                      <TourButton id="addItems" onClick={() => setActiveModal('addItems')} className="px-3 py-2.5 text-xs font-medium text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors flex items-center justify-center gap-1">
                        <Plus className="w-3 h-3" /> Add Items
                      </TourButton>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <TourButton id="changeQty" onClick={() => setActiveModal('changeQty')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        Edit Quantities
                      </TourButton>
                      <TourButton id="kot" onClick={() => setActiveModal('kot')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                        <ChefHat className="w-3 h-3" /> Print KOT
                      </TourButton>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <TourButton id="changeTable" onClick={() => setActiveModal('changeTable')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                        Change Table
                      </TourButton>
                      <TourButton id="splitTable" onClick={() => setActiveModal('splitTable')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                        <SplitSquareVertical className="w-3 h-3" /> Split
                      </TourButton>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <TourButton id="moveOrder" onClick={() => setActiveModal('moveOrder')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                        <ArrowLeftRight className="w-3 h-3" /> Move Order
                      </TourButton>
                      <TourButton id="mergeTable" onClick={() => setActiveModal('mergeTable')} className="px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                        <Merge className="w-3 h-3" /> Merge
                      </TourButton>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Billing */}
                <div className="p-4 md:p-5 bg-gray-50/50">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-bold text-gray-900 text-sm">Billing</h3>
                    <span className={`px-2 py-0.5 text-[10px] font-medium rounded ${paymentStatus === 'PAID' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {paymentStatus}
                    </span>
                  </div>

                  {/* Invoice */}
                  <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
                    <div className="text-center mb-3 pb-3 border-b border-gray-100">
                      <h4 className="font-bold text-gray-900 text-sm">Swirl Cafe</h4>
                      <p className="text-[9px] text-gray-400">VAT: VAT123456789</p>
                      <p className="text-[10px] text-gray-500">Feb 10, 2026 · Order #100840 · {currentTable}</p>
                    </div>

                    {/* Line items */}
                    <div className="space-y-0.5 mb-3">
                      <div className="grid grid-cols-12 text-[10px] font-medium text-gray-500 pb-1 border-b border-gray-100">
                        <span className="col-span-5">Item</span>
                        <span className="col-span-3 text-center">Qty</span>
                        <span className="col-span-4 text-right">Amount</span>
                      </div>
                      {orderItems.map(item => <div key={item.id} className="grid grid-cols-12 text-xs text-gray-700 py-0.5">
                          <span className="col-span-5 truncate">{item.name}</span>
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
                      {appliedDiscount && <div className="flex justify-between text-xs text-green-600">
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" /> Discount
                            {appliedDiscount.type === 'Percentage' && <span className="text-[9px]">({appliedDiscount.value}%)</span>}
                          </span>
                          <span>-{formatAmount(discountAmount)}</span>
                        </div>}
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">VAT (5%) incl.</span>
                        <span className="text-gray-600">{formatAmount(vatAmount)}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold pt-2 border-t border-gray-200">
                        <span className="text-gray-900">Total</span>
                        <span className="text-gray-900">{formatAmount(total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Billing Actions */}
                  <div className="space-y-2">
                    <TourButton id="settle" onClick={() => setActiveModal('settle')} className="w-full px-3 py-3 text-sm font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
                      Settle Bill
                    </TourButton>
                    <button onClick={() => setActiveModal('printBill')} className="w-full px-3 py-2.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <Printer className="w-4 h-4" /> Print Bill
                    </button>
                    <button onClick={() => setActiveModal('discount')} className="w-full px-3 py-2.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <Percent className="w-3.5 h-3.5" /> Apply Discount
                    </button>
                    <button onClick={() => setActiveModal('settleNoPrint')} className="w-full px-3 py-2 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
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