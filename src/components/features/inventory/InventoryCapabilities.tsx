import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PackageCheck, Receipt, ChefHat, Building2, ArrowRightLeft, Scale, AlertCircle, Check, X } from 'lucide-react';

const InventoryCapabilities = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6"
          >
            <span className="text-sm font-bold text-primary">Core Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Built for the operators who care
            <br />
            <span className="text-primary">about every dirham.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* 1. Procurement Control - 3-Way Matching */}
          <CapabilityBlock
            number="01"
            badge="Procurement Control"
            problem="You order one thing, receive another, and pay something else."
            solution="Swirl matches PO ↔ GRN ↔ Invoice automatically."
            outcome="No overpaying. No blind trust."
            visual={<ThreeWayMatchVisual />}
            reverse={false}
          />

          {/* 2. Recipe-Level Costing */}
          <CapabilityBlock
            number="02"
            badge="Recipe-Level Costing"
            problem="You don't actually know what a dish costs."
            solution="Every order deducts ingredients from the recipe in real time."
            outcome="Real food cost. Per dish. Live."
            visual={<RecipeCostVisual />}
            reverse={true}
          />

          {/* 3. Multi-Location */}
          <CapabilityBlock
            number="03"
            badge="Multi-Location Inventory"
            problem="Stock is scattered across branches."
            solution="Track kitchen, bar, storage separately. Transfer between branches."
            outcome="Total visibility across locations."
            visual={<MultiLocationVisual />}
            reverse={false}
          />

          {/* 4. Variance Intelligence */}
          <CapabilityBlock
            number="04"
            badge="Waste & Variance Intelligence"
            problem="You don't know where stock is disappearing."
            solution="Stock count vs system. Variance tracking. Approval workflows."
            outcome="Leakage becomes visible."
            visual={<VarianceVisual />}
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
};

interface BlockProps {
  number: string;
  badge: string;
  problem: string;
  solution: string;
  outcome: string;
  visual: React.ReactNode;
  reverse: boolean;
}

const CapabilityBlock = ({ number, badge, problem, solution, outcome, visual, reverse }: BlockProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7 }}
    className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 overflow-hidden"
  >
    <div className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-5xl font-bold text-primary/20 tabular-nums">{number}</span>
          <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-bold text-primary">
            {badge}
          </span>
        </div>

        <div className="space-y-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">Problem</div>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">{problem}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Solution</div>
            <p className="text-base text-gray-700 leading-relaxed">{solution}</p>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <p className="font-bold text-gray-900">{outcome}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">{visual}</div>
    </div>
  </motion.div>
);

const ThreeWayMatchVisual = () => (
  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
    <div className="space-y-3">
      {[
        { icon: FileText, label: 'Purchase Order', value: '120 kg @ AED 18', match: true },
        { icon: PackageCheck, label: 'Goods Received', value: '118 kg received', match: true },
        { icon: Receipt, label: 'Supplier Invoice', value: '120 kg @ AED 19', match: false },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className={`flex items-center gap-4 p-4 rounded-xl bg-white border ${item.match ? 'border-gray-200' : 'border-amber-200 bg-amber-50/50'}`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.match ? 'bg-primary/10' : 'bg-amber-100'}`}>
            <item.icon className={`w-5 h-5 ${item.match ? 'text-primary' : 'text-amber-600'}`} />
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-500">{item.label}</div>
            <div className="font-semibold text-gray-900 text-sm">{item.value}</div>
          </div>
          {item.match ? (
            <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-emerald-600" />
            </div>
          ) : (
            <div className="px-2 py-1 rounded-md bg-amber-100 text-amber-700 text-[10px] font-bold uppercase">
              Mismatch
            </div>
          )}
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2"
    >
      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
      <p className="text-xs text-amber-800 font-medium">
        Invoice flagged: AED 120 overcharge detected.
      </p>
    </motion.div>
  </div>
);

const RecipeCostVisual = () => (
  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
    <div className="bg-white rounded-xl p-5 border border-gray-100 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900">Wagyu Burger</div>
            <div className="text-xs text-gray-500">Sells at AED 65</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Food Cost</div>
          <div className="font-bold text-primary tabular-nums">AED 18.40</div>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { item: 'Wagyu patty 180g', cost: '12.00' },
          { item: 'Brioche bun', cost: '2.20' },
          { item: 'Cheddar slice', cost: '1.80' },
          { item: 'Sauce + garnish', cost: '2.40' },
        ].map((ing, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-gray-700">{ing.item}</span>
            <span className="font-medium text-gray-900 tabular-nums">AED {ing.cost}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
        <div className="text-xs text-emerald-700">Margin</div>
        <div className="font-bold text-emerald-700 tabular-nums">71.7%</div>
      </div>
      <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-center">
        <div className="text-xs text-blue-700">Sold today</div>
        <div className="font-bold text-blue-700 tabular-nums">42</div>
      </div>
      <div className="p-3 rounded-xl bg-violet-50 border border-violet-100 text-center">
        <div className="text-xs text-violet-700">Profit</div>
        <div className="font-bold text-violet-700 tabular-nums">1,957</div>
      </div>
    </div>
  </div>
);

const MultiLocationVisual = () => (
  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
    <div className="grid grid-cols-2 gap-4 mb-4">
      {[
        { name: 'Branch A — Marina', stock: 84, color: 'from-blue-500 to-blue-600' },
        { name: 'Branch B — JBR', stock: 23, color: 'from-violet-500 to-violet-600' },
      ].map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.1 }}
          className="bg-white rounded-xl p-4 border border-gray-100"
        >
          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${b.color} flex items-center justify-center mb-3`}>
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs text-gray-500 mb-1">{b.name}</div>
          <div className="text-2xl font-bold text-gray-900 tabular-nums">{b.stock}</div>
          <div className="text-xs text-gray-500">units in stock</div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <ArrowRightLeft className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-500">Live Transfer</div>
        <div className="font-semibold text-gray-900 text-sm">30 units → Branch B</div>
      </div>
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase"
      >
        In transit
      </motion.div>
    </motion.div>
  </div>
);

const VarianceVisual = () => (
  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
    <div className="bg-white rounded-xl p-5 border border-gray-100">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Scale className="w-5 h-5 text-primary" />
        </div>
        <div>
          <div className="font-bold text-gray-900">Weekly Stock Count</div>
          <div className="text-xs text-gray-500">Olive oil — 5L bottles</div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-500">Expected</span>
            <span className="font-semibold text-gray-900 tabular-nums">48 units</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-primary"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-500">Actual count</span>
            <span className="font-semibold text-gray-900 tabular-nums">42 units</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '87.5%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-full bg-amber-400"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-5 p-3 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3"
      >
        <AlertCircle className="w-4 h-4 text-red-500" />
        <div className="flex-1">
          <div className="text-xs font-bold text-red-700">Variance: −6 units</div>
          <div className="text-xs text-red-600">Approx AED 240 unaccounted</div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default InventoryCapabilities;
