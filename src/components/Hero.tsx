import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Plus, Minus, Trash2, X, Search, ChefHat, ArrowLeftRight, Merge, SplitSquareVertical, Printer, CreditCard, Banknote, Sparkles, MousePointerClick, Play, SkipForward, XCircle, Percent, Tag, Receipt, Wallet, Smartphone, CircleDollarSign, StickyNote, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { useCurrency } from '@/hooks/useCurrency';
import SwirlCTA from '@/components/SwirlCTA';

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




}: {children: React.ReactNode;onClose: () => void;wide?: boolean;}) => <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl" onClick={onClose}>
    <div className={`bg-white rounded-2xl shadow-2xl ${wide ? 'max-w-lg w-[95%]' : 'max-w-md w-[92%]'} max-h-[85%] overflow-auto border border-gray-200 animate-scale-in`} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>;

// ============ MAIN HERO ============
const Hero: React.FC = () => {
  const {
    formatAmount,
    currency
  } = useCurrency();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const tItem = (n: string) => t(`hero.demo.items.${n}`, { defaultValue: n });
  const tCat = (n: string) => t(`hero.demo.categories.${n}`, { defaultValue: n });
  const tNote = (n: string) => t(`hero.demo.itemNotes.${n}`, { defaultValue: n });
  const tMethod = (n: string) => t(`hero.demo.settleModal.methods.${n}`, { defaultValue: n });
  const tDisc = (n: string) => t(`hero.demo.discountModal.discounts.${n}`, { defaultValue: n });
  const tTableName = (n: string) => {
    const m = n.match(/Table\s*#?(\d+)/i);
    if (!m) return n;
    return isAr ? `${t('hero.demo.tableModal.tableLabel')} #${m[1]}` : n;
  };
  const tFloor = (n: string) => n === '1st Floor' ? t('hero.demo.tableModal.floor1') : n === '2nd Floor' ? t('hero.demo.tableModal.floor2') : n;
  const tStatus = (s: string) => s === 'OCCUPIED' ? t('hero.demo.status.occupied') : s === 'AVAILABLE' ? t('hero.demo.status.available') : s;

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
    label: t('hero.demo.tour.addItems.label'),
    desc: t('hero.demo.tour.addItems.desc')
  }, {
    target: 'changeQty',
    label: t('hero.demo.tour.changeQty.label'),
    desc: t('hero.demo.tour.changeQty.desc')
  }, {
    target: 'kot',
    label: t('hero.demo.tour.kot.label'),
    desc: t('hero.demo.tour.kot.desc')
  }, {
    target: 'changeTable',
    label: t('hero.demo.tour.changeTable.label'),
    desc: t('hero.demo.tour.changeTable.desc')
  }, {
    target: 'splitTable',
    label: t('hero.demo.tour.splitTable.label'),
    desc: t('hero.demo.tour.splitTable.desc')
  }, {
    target: 'moveOrder',
    label: t('hero.demo.tour.moveOrder.label'),
    desc: t('hero.demo.tour.moveOrder.desc')
  }, {
    target: 'mergeTable',
    label: t('hero.demo.tour.mergeTable.label'),
    desc: t('hero.demo.tour.mergeTable.desc')
  }, {
    target: 'settle',
    label: t('hero.demo.tour.settle.label'),
    desc: t('hero.demo.tour.settle.desc')
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
    setTourStep((prev) => {
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





  }: {id: string;children: React.ReactNode;onClick: () => void;className: string;}) => {
    const isHighlighted = currentTourTarget === id;
    const stepInfo = WALKTHROUGH_STEPS.find((s) => s.target === id);
    const stepIndex = WALKTHROUGH_STEPS.findIndex((s) => s.target === id);
    return <div className="relative">
        <button onClick={() => {
        onClick();
        if (isHighlighted) nextTourStep();
      }} className={`${className} ${isHighlighted ? 'ring-2 ring-primary ring-offset-1 z-20 relative scale-105' : ''} transition-all duration-300`}>
          {children}
        </button>
        {isHighlighted && stepInfo && <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 w-52 pointer-events-none animate-fade-in">
            <div className="bg-gray-900 text-white rounded-xl px-3 py-2 text-center shadow-xl pointer-events-auto">
              <p className="text-[10px] text-primary font-bold mb-0.5">{t('hero.demo.step')} {stepIndex + 1}/{WALKTHROUGH_STEPS.length}</p>
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
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.name === stagingItem.name && !i.note && !stagingNote);
      if (existing && !stagingNote) {
        return prev.map((i) => i.id === existing.id ? {
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
    setOrderItems((prev) => prev.map((i) => i.id !== id ? i : {
      ...i,
      qty: Math.max(1, i.qty + delta)
    }));
  }, []);
  const removeItem = useCallback((id: string) => {
    setOrderItems((prev) => prev.filter((i) => i.id !== id));
  }, []);
  const handleSettleBill = useCallback((method: string) => {
    if (method === 'SPLIT PAYMENT') {















      // For demo, just show success
    }setPaymentSuccess(true);setPaymentStatus('PAID');}, []);const handlePrintKOT = useCallback(() => {const newItems = orderItems.filter((i) => i.isNew);const itemsForKot = newItems.length > 0 ? newItems : orderItems;setLastKotItems(itemsForKot.map((i) => i.id));setOrderItems((prev) => prev.map((i) => ({ ...i, isNew: false })));setKotSent(true);}, [orderItems]);const applyPredefinedDiscount = useCallback((disc: typeof PREDEFINED_DISCOUNTS[0]) => {setAppliedDiscount({
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
                <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.addModal.title')}</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Search */}
              <div className="relative mb-5">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-primary/30 focus:outline-none transition-colors" placeholder={t('hero.demo.addModal.search')} readOnly />
              </div>

              {/* Categories + Items */}
              <div className="flex gap-5">
                <div className="w-32 flex-shrink-0 space-y-1">
                  {MENU_CATEGORIES.map((cat, idx) => <button key={cat.name} onClick={() => setMenuCategory(idx)} className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${idx === menuCategory ? 'bg-primary/10 text-primary border-l-3 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {tCat(cat.name)}
                    </button>)}
                </div>

                <div className="flex-1">
                  {/* Staging item form */}
                  {stagingItem ? <div className="border-2 border-primary/20 rounded-xl p-4 bg-primary/5 animate-fade-in">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-bold text-gray-900">{tItem(stagingItem.name)}</p>
                          <p className="text-sm text-gray-500">{formatAmount(stagingItem.price)} {t('hero.demo.addModal.each')}</p>
                        </div>
                        <button onClick={() => setStagingItem(null)} className="p-1 hover:bg-white rounded-full">
                          <X className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>

                      {/* Quantity */}
                      <div className="mb-4">
                        <label className="text-xs font-medium text-gray-600 mb-1.5 block">{t('hero.demo.addModal.quantity')}</label>
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
                          <StickyNote className="w-3 h-3" /> {t('hero.demo.addModal.specialInstructions')}
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-primary/30 focus:outline-none" placeholder={t('hero.demo.addModal.notesPh')} value={stagingNote} onChange={(e) => setStagingNote(e.target.value)} />
                      </div>

                      <button onClick={confirmAddItem} className="w-full py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" /> {t('hero.demo.addModal.addToOrder')}
                      </button>
                    </div> : <div className="grid grid-cols-2 gap-3 max-h-72 overflow-auto pr-1">
                      {MENU_CATEGORIES[menuCategory].items.map((item) => <button key={item.name} onClick={() => {
                    setStagingItem(item);
                    setStagingQty(1);
                    setStagingNote('');
                  }} className="border border-gray-200 rounded-xl p-3.5 hover:border-primary/30 hover:shadow-sm transition-all text-left group">
                          <p className="font-medium text-sm text-gray-900 mb-1 group-hover:text-primary transition-colors">{tItem(item.name)}</p>
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
                <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.qtyModal.title')}</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <div className="space-y-2.5 mb-4">
                {orderItems.map((item) => <div key={item.id} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-gray-900 truncate">{tItem(item.name)}</p>
                      <p className="text-xs text-gray-500">{formatAmount(item.price)} {t('hero.demo.qtyModal.each')}</p>
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
                <p className="font-bold text-gray-900">{t('hero.demo.qtyModal.total')}</p>
                <p className="text-lg font-bold text-gray-900">{formatAmount(subtotal)}</p>
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">{t('hero.demo.qtyModal.cancel')}</button>
                <button onClick={closeModal} className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">{t('hero.demo.qtyModal.save')}</button>
              </div>
            </div>
          </ModalOverlay>;

      // ========== PRINT KOT ==========
      case 'kot':
        {
          const newItems = orderItems.filter((i) => i.isNew);
          const kotItems = kotSent ? orderItems.filter((i) => lastKotItems.includes(i.id)) : newItems.length > 0 ? newItems : orderItems;
          return <ModalOverlay onClose={closeModal}>
            <div className="p-5 bg-gray-100 font-mono text-sm">
              <div className="bg-white p-5 rounded-xl shadow-inner border border-gray-300">
                <div className="text-center mb-3">
                  <p className="font-bold text-base">{t('hero.demo.kotModal.title')}</p>
                  <p className="text-gray-600 text-xs">{t('hero.demo.kotModal.cafe')}</p>
                  <p className="text-gray-500 text-xs">{t('hero.demo.kotModal.orderTable')} {tTableName(currentTable)}</p>
                  {newItems.length > 0 && !kotSent && <span className="inline-block mt-1 text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-sans font-medium">
                      {t('hero.demo.kotModal.newItemsOnly')}
                    </span>}
                </div>
                <div className="border-t border-dashed border-gray-400 my-3" />
                {kotItems.map((item) => <div key={item.id} className="mb-1.5">
                    <p className="font-bold">{tItem(item.name)} x{item.qty}</p>
                    {item.note && <p className="text-gray-500 italic text-xs ml-2">{t('hero.demo.kotModal.noteLabel')} {tNote(item.note)}</p>}
                  </div>)}
                <div className="border-t border-dashed border-gray-400 my-3" />
                {!kotSent ? <button onClick={handlePrintKOT} className="w-full py-2.5 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700 flex items-center justify-center gap-2 transition-colors">
                    <ChefHat className="w-4 h-4" /> {t('hero.demo.kotModal.send')}
                  </button> : <div className="text-center text-green-600 font-bold flex items-center justify-center gap-2 py-2 font-sans">
                    <Check className="w-5 h-5" /> {t('hero.demo.kotModal.sent')}
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
                  <p className="font-bold text-sm mt-2">{t('hero.demo.billModal.cafe')}</p>
                  <p className="text-gray-500 text-xs">{t('hero.demo.billModal.vat')}</p>
                  <p className="text-gray-500 text-xs">{t('hero.demo.billModal.datetime')}</p>
                  <p className="text-gray-500 text-xs">{t('hero.demo.billModal.invoice')}</p>
                  <p className="text-gray-500 text-xs">{t('hero.demo.billModal.server')}</p>
                  <p className="font-bold text-sm mt-1">{tTableName(currentTable)}</p>
                </div>
                <div className="border-t-2 border-dashed border-gray-400 my-3" />

                {/* Items table */}
                <div className="mb-3">
                  <div className="grid grid-cols-12 text-xs font-bold mb-1 border-b border-dashed border-gray-300 pb-1">
                    <span className="col-span-5">{t('hero.demo.billModal.item')}</span>
                    <span className="col-span-2 text-center">{t('hero.demo.billModal.qty')}</span>
                    <span className="col-span-2 text-right">{t('hero.demo.billModal.price')}</span>
                    <span className="col-span-3 text-right">{t('hero.demo.billModal.amount')}</span>
                  </div>
                  {orderItems.map((item) => <div key={item.id} className="grid grid-cols-12 text-xs py-0.5">
                      <span className="col-span-5">{tItem(item.name)}</span>
                      <span className="col-span-2 text-center">{item.qty}</span>
                      <span className="col-span-2 text-right">{formatAmount(item.price)}</span>
                      <span className="col-span-3 text-right">{formatAmount(item.price * item.qty)}</span>
                    </div>)}
                </div>

                <div className="border-t-2 border-dashed border-gray-400 my-3" />

                {/* Totals */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>{t('hero.demo.billModal.subtotal')}</span>
                    <span className="font-bold">{formatAmount(subtotal)}</span>
                  </div>
                  {discountAmount > 0 && <div className="flex justify-between text-green-600">
                      <span>{t('hero.demo.billModal.discount')}</span>
                      <span>-{formatAmount(discountAmount)}</span>
                    </div>}
                  <div className="flex justify-between font-bold text-sm pt-1">
                    <span>{t('hero.demo.billModal.total')}</span>
                    <span>{formatAmount(total)}</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-400 my-3" />

                {/* Tax Breakdown */}
                <div className="text-center mb-2">
                  <p className="font-bold text-xs">{t('hero.demo.billModal.taxBreakdown')}</p>
                </div>
                <div className="text-xs space-y-0.5">
                  <div className="flex justify-between">
                    <span>{t('hero.demo.billModal.vat5')}</span>
                    <span>{formatAmount(vatAmount)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>{t('hero.demo.billModal.totalTax')}</span>
                    <span>{formatAmount(vatAmount)}</span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 italic text-center mt-1">{t('hero.demo.billModal.netAmount')} {formatAmount(netAmount)}</p>

                <div className="border-t border-dashed border-gray-400 my-3" />

                <div className="text-center text-xs text-gray-600">
                  <p>{t('hero.demo.billModal.printedBy')}</p>
                  <p>{t('hero.demo.billModal.printedAt')}</p>
                </div>

                <div className="my-3 flex justify-center">
                  <span className={`px-6 py-1.5 rounded-full border-2 text-sm font-bold ${paymentStatus === 'PAID' ? 'border-green-500 text-green-600' : 'border-amber-500 text-amber-600'}`}>
                    {paymentStatus === 'PAID' ? t('hero.demo.status.paid') : t('hero.demo.status.unpaid')}
                  </span>
                </div>

                <p className="text-center text-xs text-gray-500 mb-1">{t('hero.demo.billModal.thanks')}</p>
                <p className="text-center text-xs text-gray-400">{t('hero.demo.billModal.builtBy')}</p>
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
                <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.discountModal.title')}</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-5">
                <button onClick={() => setDiscountTab('predefined')} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${discountTab === 'predefined' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {t('hero.demo.discountModal.predefined')}
                </button>
                <button onClick={() => setDiscountTab('spot')} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${discountTab === 'spot' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {t('hero.demo.discountModal.spot')}
                </button>
              </div>

              {discountTab === 'predefined' ? <>
                  <p className="text-sm text-gray-500 mb-4">{t('hero.demo.discountModal.intro')}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {PREDEFINED_DISCOUNTS.map((disc) => {
                    const discAmt = netAmount * disc.percent / 100;
                    return <button key={disc.name} onClick={() => applyPredefinedDiscount(disc)} className="p-4 border border-gray-200 rounded-xl text-left hover:border-primary/30 hover:shadow-sm transition-all">
                          <p className="font-bold text-sm text-gray-900">{tDisc(disc.name)}</p>
                          {disc.description && <p className="text-xs text-gray-400 mt-0.5">{tDisc(disc.description)}</p>}
                          <p className="text-sm font-medium text-gray-700 mt-1.5">
                            {disc.percent}% {t('hero.demo.discountModal.off')}{' '}
                            <span className="text-primary">({formatAmount(discAmt)} {t('hero.demo.discountModal.off')} {formatAmount(netAmount)})</span>
                          </p>
                        </button>;
                  })}
                  </div>
                  <div className="flex justify-end">
                    <button onClick={closeModal} className="px-5 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">{t('hero.demo.discountModal.cancel')}</button>
                  </div>
                </> : <div className="border border-gray-200 rounded-xl p-5">
                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">{t('hero.demo.discountModal.type')}</label>
                    <select value={discountType} onChange={(e) => setDiscountType(e.target.value as any)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary/30 focus:outline-none bg-white">
                      <option value="Percentage">{t('hero.demo.discountModal.percentage')}</option>
                      <option value="Fixed Amount">{t('hero.demo.discountModal.fixed')}</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                      {discountType === 'Percentage' ? `${t('hero.demo.discountModal.percentage')} (%)` : `${t('hero.demo.discountModal.amount')} (${currency.code})`}
                    </label>
                    <input type="number" value={discountValue} onChange={(e) => setDiscountValue(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary/30 focus:outline-none" placeholder={discountType === 'Percentage' ? '20' : '50'} />
                  </div>

                  <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">{t('hero.demo.discountModal.reason')}</label>
                    <input value={discountReason} onChange={(e) => setDiscountReason(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary/30 focus:outline-none" placeholder={t('hero.demo.discountModal.reasonPh')} />
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
                    <p className="font-semibold text-sm text-gray-900">{t('hero.demo.discountModal.applyToTotal')}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{t('hero.demo.discountModal.applyToTotalDesc')}</p>
                  </div>

                  {spotDiscountCalc > 0 && <p className="text-sm text-primary mb-4">{t('hero.demo.discountModal.discountAmount')} {formatAmount(spotDiscountCalc)}</p>}

                  <div className="flex gap-3">
                    <button onClick={closeModal} className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">{t('hero.demo.discountModal.cancel')}</button>
                    <button onClick={applySpotDiscount} className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" disabled={!discountValue || parseFloat(discountValue) <= 0}>
                      <Tag className="w-4 h-4" /> {t('hero.demo.discountModal.apply')}
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
                <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.tableModal.title')}</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <div className="grid grid-cols-3 gap-2.5 max-h-72 overflow-auto">
                {TABLES.map((table) => <button key={table.id} onClick={() => {
                setCurrentTable(table.name);
                closeModal();
              }} className={`p-3 border rounded-xl text-left transition-all hover:shadow-md ${table.name === currentTable ? 'border-2 border-gray-900 shadow-md' : 'border-gray-200'}`}>
                    <p className="font-bold text-sm text-gray-900">{tTableName(table.name)}</p>
                    <p className="text-xs text-gray-500">{t('hero.demo.tableModal.seats')} {table.capacity}</p>
                    <p className="text-xs text-gray-500">{tFloor(table.location)}</p>
                    <span className={`inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${table.status === 'OCCUPIED' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {tStatus(table.status)}
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
                <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.splitModal.title')}</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">{t('hero.demo.splitModal.intro')}</p>
              <div className="space-y-2 mb-4">
                {orderItems.map((item) => <button key={item.id} onClick={() => setSplitItems((prev) => {
                const n = new Set(prev);
                n.has(item.id) ? n.delete(item.id) : n.add(item.id);
                return n;
              })} className={`w-full p-3 border rounded-xl text-left flex items-center justify-between transition-colors ${splitItems.has(item.id) ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                    <div>
                      <p className="font-medium text-sm">{tItem(item.name)}</p>
                      <p className="text-xs text-gray-500">{item.qty} × {formatAmount(item.price)}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${splitItems.has(item.id) ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                      {splitItems.has(item.id) && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </button>)}
              </div>
              <div className="flex gap-3">
                <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50">{t('hero.demo.splitModal.cancel')}</button>
                <button onClick={() => {
                if (splitItems.size > 0) {
                  setOrderItems((prev) => prev.filter((i) => !splitItems.has(i.id)));
                  closeModal();
                }
              }} className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 disabled:opacity-50" disabled={splitItems.size === 0}>
                  {t('hero.demo.splitModal.splitBtn')} {splitItems.size} {splitItems.size !== 1 ? t('hero.demo.splitModal.items') : t('hero.demo.splitModal.item')}
                </button>
              </div>
            </div>
          </ModalOverlay>;

      // ========== MOVE ORDER ==========
      case 'moveOrder':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.moveModal.title')}</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">{t('hero.demo.moveModal.intro1')} <strong>{t('hero.demo.moveModal.dineIn')} ({tTableName(currentTable)})</strong> {t('hero.demo.moveModal.intro2')}</p>
              <div className="space-y-3 mb-4">
                <div className="p-3 border border-gray-200 rounded-xl bg-gray-50">
                  <p className="text-xs text-gray-500 mb-1">{t('hero.demo.moveModal.currentType')}</p>
                  <p className="font-bold text-sm">🍽 {t('hero.demo.moveModal.dineIn')} - {tTableName(currentTable)}</p>
                </div>
                <button onClick={() => setFulfillment('Takeaway')} className={`w-full p-3 border rounded-xl text-left transition-colors ${fulfillment === 'Takeaway' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                  <p className="font-bold text-sm">📦 {t('hero.demo.moveModal.takeaway')}</p>
                  <p className="text-xs text-gray-500">{t('hero.demo.moveModal.takeawayDesc')}</p>
                </button>
                {fulfillment === 'Takeaway' && <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700">
                    <strong>{t('hero.demo.moveModal.noteLabel')}</strong> {t('hero.demo.moveModal.noteText')}
                  </div>}
              </div>
              <div className="flex gap-3">
                <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50">{t('hero.demo.moveModal.cancel')}</button>
                <button onClick={() => {
                setFulfillment('Takeaway');
                closeModal();
              }} className="flex-1 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800">
                  {t('hero.demo.moveModal.moveBtn')}
                </button>
              </div>
            </div>
          </ModalOverlay>;

      // ========== MERGE TABLE ==========
      case 'mergeTable':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.mergeModal.title')}</h3>
                <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
              </div>
              <p className="text-sm text-gray-600 mb-4">{t('hero.demo.mergeModal.intro')} ({tTableName(currentTable)}).</p>
              <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"><Check className="w-3.5 h-3.5 text-white" /></div>
                  <div>
                    <p className="font-bold text-sm">{t('hero.demo.mergeModal.target')}</p>
                    <p className="text-xs text-primary">{tTableName(currentTable)}</p>
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium text-gray-500 mb-2">{t('hero.demo.mergeModal.available')}</p>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {MERGE_ORDERS.map((order) => <button key={order.order} onClick={() => {
                setOrderItems((prev) => [...prev, {
                  id: Date.now().toString(),
                  name: 'Merged Item',
                  qty: 1,
                  price: order.amount
                }]);
                closeModal();
              }} className="p-3 border border-gray-200 rounded-xl text-left hover:border-primary/30 hover:shadow-md transition-all">
                    <p className="font-bold text-sm">{tTableName(order.table)}</p>
                    <p className="text-xs text-gray-500">{t('hero.demo.mergeModal.order')} {order.order}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">{order.items} {t('hero.demo.mergeModal.items')}</span>
                      <span className="text-sm font-bold">{formatAmount(order.amount)}</span>
                    </div>
                  </button>)}
              </div>
              <button onClick={closeModal} className="w-full py-2.5 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">{t('hero.demo.mergeModal.cancel')}</button>
            </div>
          </ModalOverlay>;

      // ========== SETTLE BILL ==========
      case 'settle':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              {!paymentSuccess ? <>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.settleModal.title')}</h3>
                    <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
                  </div>
                  <div className="space-y-2.5 mb-4">
                    {PAYMENT_METHODS.map((m) => <button key={m.name} onClick={() => handleSettleBill(m.name)} className={`w-full p-4 border rounded-xl text-left flex items-center gap-3 transition-all hover:shadow-sm ${m.highlight ? 'border-primary/30 bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        {m.highlight && <m.icon className="w-5 h-5 text-primary flex-shrink-0" />}
                        <div>
                          <p className="font-bold text-sm text-gray-900">{tMethod(m.name)}</p>
                          {m.type && <p className="text-xs text-gray-400">{tMethod(m.type)}</p>}
                        </div>
                      </button>)}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500">{t('hero.demo.settleModal.amountDue')}</p>
                    <p className="text-2xl font-bold text-gray-900">{formatAmount(total)}</p>
                  </div>
                </> : <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{t('hero.demo.settleModal.success')}</h3>
                  <p className="text-sm text-gray-500 mb-4">{formatAmount(total)} {t('hero.demo.settleModal.received')}</p>
                  <button onClick={closeModal} className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">{t('hero.demo.settleModal.done')}</button>
                </div>}
            </div>
          </ModalOverlay>;

      // ========== SETTLE BILL NO PRINT ==========
      case 'settleNoPrint':
        return <ModalOverlay onClose={closeModal}>
            <div className="p-5">
              {!paymentSuccess ? <>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-900">{t('hero.demo.settleModal.noPrintTitle')}</h3>
                    <button onClick={closeModal} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center mb-4">
                    <p className="text-xs text-gray-500">{t('hero.demo.settleModal.amountDue')}</p>
                    <p className="text-2xl font-bold text-gray-900">{formatAmount(total)}</p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 text-center">{t('hero.demo.settleModal.noPrintIntro')}</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[{
                  icon: Banknote,
                  label: t('hero.demo.settleModal.cash'),
                  color: 'bg-green-600'
                }, {
                  icon: CreditCard,
                  label: t('hero.demo.settleModal.card'),
                  color: 'bg-primary'
                }, {
                  icon: Wallet,
                  label: t('hero.demo.settleModal.wallet'),
                  color: 'bg-gray-700'
                }].map((m) => <button key={m.label} onClick={() => handleSettleBill(m.label)} className={`${m.color} text-white rounded-xl p-3.5 flex flex-col items-center gap-1.5 hover:opacity-90 transition-opacity`}>
                        <m.icon className="w-5 h-5" />
                        <span className="text-xs font-semibold">{m.label}</span>
                      </button>)}
                  </div>
                </> : <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{t('hero.demo.settleModal.settled')}</h3>
                  <p className="text-sm text-gray-500 mb-1">{formatAmount(total)} {t('hero.demo.settleModal.noReceipt')}</p>
                  <button onClick={closeModal} className="mt-4 px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">{t('hero.demo.settleModal.done')}</button>
                </div>}
            </div>
          </ModalOverlay>;
      default:
        return null;
    }
  };

  // ============ MAIN RENDER ============
  return <>
    {/* Section 1: Headline + CTA */}
    <section className="relative bg-white overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-6 md:pb-10">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>
      
























    </section>

    {/* Section 2: "One Platform. Complete Control." — Standalone statement */}
    <section className="pt-2 md:pt-4 pb-10 md:pb-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05]">{t('hero.tagline1')}

          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight leading-[1.05] mt-1">{t('hero.tagline2')}

          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/70 mt-8 mb-4 max-w-3xl mx-auto leading-relaxed font-normal">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex items-center justify-center gap-6">
            <SwirlCTA />
            <Link to="/contact" className="text-primary font-semibold text-sm hover:underline underline-offset-4 transition-all">
              {t('hero.bookDemoLink')}
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3: Interactive POS Dashboard Mockup */}
    <section className="relative bg-white overflow-hidden pb-16 md:pb-20">
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
            {/* Tour controls */}
            <div className="flex items-center justify-center gap-3 flex-wrap mb-5">
               <div className="flex items-center gap-2 px-6 py-2.5 bg-primary/8 rounded-full border border-primary/15">
                <span className="text-sm md:text-base font-semibold text-primary tracking-wide">{t('hero.liveDemoBadge')}</span>
              </div>
              {!tourActive ? <button onClick={startTour} className="flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white rounded-full text-xs font-semibold hover:bg-primary/90 transition-colors shadow-md shadow-primary/25">
                  <Play className="w-3.5 h-3.5" /> {t('hero.guidedTour')}
                </button> : <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                    Step {tourStep + 1}/{WALKTHROUGH_STEPS.length}
                  </span>
                  <button onClick={nextTourStep} className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20"><SkipForward className="w-3 h-3" /> Next</button>
                  <button onClick={stopTour} className="flex items-center gap-1 px-3 py-1.5 text-muted-foreground hover:text-foreground rounded-full text-xs font-medium"><XCircle className="w-3.5 h-3.5" /> End</button>
                </div>}
            </div>

          <div className="relative animate-fade-in">

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
                    {orderItems.map((item) => <div key={item.id} className="p-2.5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
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
                      {orderItems.map((item) => <div key={item.id} className="grid grid-cols-12 text-xs text-gray-700 py-0.5">
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
    </section>
  </>;
};
export default Hero;