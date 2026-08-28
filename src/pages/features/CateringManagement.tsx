import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';
import SwirlCTA from '@/components/SwirlCTA';
import CateringHeroDemo from '@/components/features/catering/CateringHeroDemo';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  PartyPopper, ChevronRight, CalendarDays, Users, MapPin, ClipboardList, Layers,
  Copy, Tags, Calculator, Wallet, Receipt, ListFilter, LayoutGrid, CircleDollarSign,
} from 'lucide-react';

const orderFields = [
  { icon: Users, label: 'Customer & contact', value: 'Hamdan A. · +966 5X XXX 2210 · hamdan@example.com' },
  { icon: PartyPopper, label: 'Event', value: 'Hamdan Reception · Wedding reception' },
  { icon: CalendarDays, label: 'Schedule', value: '18 Sep 2026 · Setup 16:00 · Service 19:30 · Ends 23:00' },
  { icon: Users, label: 'Guests', value: '120 adults + 30 children = 150 total' },
  { icon: MapPin, label: 'Venue', value: 'Al Faisaliah Hall, Riyadh · Service lift, gate 3 access' },
  { icon: ClipboardList, label: 'Requirements', value: 'Delivery + full setup, live station, cleanup by 00:30' },
];

const statuses = ['Inquiry', 'Draft', 'Quoted', 'Confirmed', 'Preparing', 'Completed', 'Cancelled'];

const menuGroups = [
  { name: 'Starters', items: ['Hummus & pita', 'Fattoush', 'Cheese sambousek'] },
  { name: 'Mains', items: ['Lamb mandi', 'Grilled hammour', 'Chicken kabsa'] },
  { name: 'Live stations', items: ['Shawarma carving', 'Fresh pasta'] },
  { name: 'Desserts', items: ['Kunafa', 'Date pudding', 'Seasonal fruit'] },
  { name: 'Beverages', items: ['Arabic coffee', 'Fresh juices', 'Mint lemonade'] },
  { name: 'Add-ons', items: ['Extra service staff', 'Floral setup', 'Chafing rental'] },
];

const menuCapabilities = [
  { icon: Layers, title: 'Build from your existing menu', description: 'Pull any swirl item into a catering menu, or create catering-only items that never appear on the POS.' },
  { icon: LayoutGrid, title: 'Packages and combinations', description: 'Group items into packages with included quantities, portions, minimum guests and optional upgrades.' },
  { icon: Copy, title: 'Duplicate what works', description: 'Reuse a successful package for the next event and adjust only what changed.' },
  { icon: Tags, title: 'Notes and dietary labels', description: 'Item-level notes, allergen and dietary labels travel to the kitchen with the order.' },
];

const pricingRows = [
  { label: 'Adults × 120', value: 'SAR 18,000', note: 'Per person · SAR 150' },
  { label: 'Children × 30', value: 'SAR 2,700', note: 'Per person · SAR 90' },
  { label: 'Live station add-on', value: 'SAR 1,200', note: 'Optional upgrade' },
  { label: 'Delivery & setup', value: 'SAR 900', note: 'Service fee' },
  { label: 'Discount', value: '− SAR 1,200', note: 'Repeat customer' },
  { label: 'VAT 15%', value: 'SAR 3,240', note: 'Applied on taxable lines' },
];

const paymentRows = [
  { label: 'Total order value', value: 'SAR 24,840' },
  { label: 'Advance required (30%)', value: 'SAR 7,452' },
  { label: 'Advance collected · 02 Sep · Bank transfer', value: 'SAR 7,452' },
  { label: 'Balance due · 17 Sep', value: 'SAR 17,388' },
];

const dashboardCards = [
  { label: 'Events today', value: '2', detail: 'Corporate lunch · Bakery launch' },
  { label: 'Upcoming this month', value: '9', detail: '6 confirmed · 3 tentative' },
  { label: 'Advances received', value: 'SAR 41,300', detail: 'Across 6 confirmed events' },
  { label: 'Balances due', value: 'SAR 78,940', detail: '3 due within 7 days' },
  { label: 'Menus to confirm', value: '4', detail: 'Awaiting customer sign-off' },
  { label: 'Guests scheduled', value: '860', detail: 'Next 30 days' },
];

const CateringManagement = () => {
  useScrollAnimation();
  const [activeStatus, setActiveStatus] = useState('Confirmed');

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'swirl Catering Management',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android, iOS',
      description:
        'Restaurant catering software to build custom catering menus and packages, price events per person, per plate or lump sum, collect advances and manage a full event calendar.',
      url: 'https://swirl.cx/catering-management',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://swirl.cx/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://swirl.cx/products' },
        { '@type': 'ListItem', position: 3, name: 'Catering Management', item: 'https://swirl.cx/catering-management' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Seo
        title="Catering Management Software for Restaurants | swirl"
        description="Plan catering orders end to end: custom menus and packages, per person, per plate or lump-sum pricing, advances and balances, venues and a full monthly event calendar."
        path="/catering-management"
        jsonLd={jsonLd}
      />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-10 h-[420px] w-[520px] rounded-full bg-primary/[0.05] blur-[140px]" />
          </div>
          <div className="container-custom relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="font-medium text-foreground">Catering Management</span>
            </nav>

            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="animate-on-scroll mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-4 py-2">
                <PartyPopper className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-primary">swirl Catering Management</span>
              </div>
              <h1 className="animate-on-scroll mb-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Plan every catering order with{' '}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  complete clarity.
                </span>
              </h1>
              <p className="animate-on-scroll mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Build custom menus and packages, price events your way, track advances and balances, manage venues, and
                see every upcoming catering order on one intelligent calendar.
              </p>
              <div className="animate-on-scroll flex justify-center">
                <SwirlCTA />
              </div>
            </div>

            <div className="animate-on-scroll mx-auto max-w-6xl">
              <CateringHeroDemo />
            </div>
          </div>
        </section>

        {/* Catering order workspace */}
        <section className="bg-gray-50 py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Create complete catering orders
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  One structured workspace holds the customer, the event, the venue, the operational requirements and the
                  team responsible for delivering it.
                </p>
              </div>

              <div className="animate-on-scroll rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
                <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Order status">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setActiveStatus(s)}
                      aria-pressed={activeStatus === s}
                      className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
                        activeStatus === s
                          ? 'border-primary/30 bg-primary text-primary-foreground'
                          : 'border-gray-200 text-muted-foreground hover:border-primary/25 hover:text-foreground'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <dl className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {orderFields.map((f) => (
                    <div key={f.label} className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
                      <dt className="mb-1.5 inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                        <f.icon className="h-3.5 w-3.5" aria-hidden="true" /> {f.label}
                      </dt>
                      <dd className="text-[13.5px] font-medium leading-relaxed text-foreground">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[12px] text-muted-foreground">
                  Internal notes, dietary requirements, special instructions, assigned outlet and responsible staff are
                  captured on the same record. Sample data shown.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menus & packages */}
        <section className="py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Custom menus, combos and packages
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  Arrange courses by drag-and-drop, or use the keyboard and click controls — the builder works either way.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-12">
                <div className="animate-on-scroll lg:col-span-7">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {menuGroups.map((g) => (
                      <div key={g.name} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_-26px_rgba(16,24,40,0.5)]">
                        <p className="mb-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-muted-foreground">{g.name}</p>
                        <ul className="space-y-1.5">
                          {g.items.map((it) => (
                            <li key={it} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-[13px] text-foreground">
                              {it}
                              <span className="text-[11px] text-muted-foreground">Included</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 grid gap-4">
                  {menuCapabilities.map((c, i) => (
                    <div
                      key={c.title}
                      className={`animate-on-scroll animate-delay-${((i % 4) + 1) * 100} rounded-2xl border border-gray-100 bg-white p-5`}
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <c.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mb-1.5 text-[15.5px] font-bold text-gray-900">{c.title}</h3>
                      <p className="text-[13.5px] leading-relaxed text-muted-foreground">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing + payments */}
        <section className="bg-gray-50 py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Flexible pricing, transparent totals
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  Per person with separate adult and child rates, per plate, or a fixed lump sum — with every fee, discount
                  and tax visible on the same summary.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="animate-on-scroll rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-foreground">
                    <Calculator className="h-4 w-4 text-primary" aria-hidden="true" /> Live cost summary
                  </p>
                  <ul className="divide-y divide-gray-100">
                    {pricingRows.map((r) => (
                      <li key={r.label} className="flex items-center justify-between gap-4 py-2.5">
                        <span>
                          <span className="block text-[13.5px] font-medium text-foreground">{r.label}</span>
                          <span className="block text-[11.5px] text-muted-foreground">{r.note}</span>
                        </span>
                        <span className="text-[13.5px] font-semibold tabular-nums text-foreground">{r.value}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex items-center justify-between border-t border-dashed border-gray-200 pt-3">
                    <span className="text-[13.5px] font-semibold text-muted-foreground">Order total</span>
                    <span className="text-[19px] font-bold tabular-nums text-foreground">SAR 24,840</span>
                  </div>
                  <p className="mt-2 text-[11.5px] text-muted-foreground">
                    Minimum guest count and minimum order value can be enforced per package.
                  </p>
                </div>

                <div className="animate-on-scroll animate-delay-100 rounded-2xl border border-gray-200 bg-white p-6">
                  <p className="mb-4 inline-flex items-center gap-2 text-[13px] font-bold text-foreground">
                    <Wallet className="h-4 w-4 text-primary" aria-hidden="true" /> Advance and balance
                  </p>
                  <ul className="divide-y divide-gray-100">
                    {paymentRows.map((r) => (
                      <li key={r.label} className="flex items-center justify-between gap-4 py-2.5">
                        <span className="text-[13.5px] text-muted-foreground">{r.label}</span>
                        <span className="text-[13.5px] font-semibold tabular-nums text-foreground">{r.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <div className="mb-2 flex justify-between text-[11.5px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      <span>Total</span><span>Advance paid</span><span>Balance due</span><span>Fully paid</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[30%] rounded-full bg-emerald-500" />
                    </div>
                    <p className="mt-2 text-[12px] text-muted-foreground">30% collected · balance due 17 Sep</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Cash', 'Card', 'Bank transfer', 'Payment link'].map((m) => (
                      <span key={m} className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-[12px] font-semibold text-muted-foreground">
                        <Receipt className="h-3.5 w-3.5" aria-hidden="true" /> {m}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-[11.5px] text-muted-foreground">
                    Partial payments, reference numbers, receipts and payment notes are stored against the order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  An intelligent catering calendar
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  Month view as the anchor, with week and agenda views alongside. Every block shows the customer, the venue,
                  the time, the confirmation status and the amount still outstanding — click one to open the full side panel.
                </p>
              </div>
              <div className="animate-on-scroll flex flex-wrap gap-2 text-[12.5px]">
                {['Outlet', 'Event status', 'Payment status', 'Event type', 'Team'].map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3.5 py-1.5 font-semibold text-muted-foreground">
                    <ListFilter className="h-3.5 w-3.5" aria-hidden="true" /> {f}
                  </span>
                ))}
              </div>
              <div className="animate-on-scroll mt-6">
                <CateringHeroDemo />
              </div>
            </div>
          </div>
        </section>

        {/* Operations dashboard */}
        <section className="bg-[#0a1628] py-20 text-white">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <h2 className="animate-on-scroll mb-3 max-w-2xl text-3xl font-bold md:text-4xl">
                A catering operations dashboard, not a generic CRM
              </h2>
              <p className="animate-on-scroll mb-10 max-w-2xl text-[16px] text-white/60">
                What is happening today, what is confirmed, what still needs a menu sign-off or a payment follow-up.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dashboardCards.map((c, i) => (
                  <div key={c.label} className={`animate-on-scroll animate-delay-${((i % 3) + 1) * 100} rounded-2xl border border-white/10 bg-white/[0.04] p-6`}>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45">{c.label}</p>
                    <p className="mt-2 text-[26px] font-bold tabular-nums">{c.value}</p>
                    <p className="mt-1 text-[13px] text-white/55">{c.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-[13px] text-white/45">
                <CircleDollarSign className="h-4 w-4" aria-hidden="true" />
                Product preview with sample data · enquiry → quote → confirmation → service → completion timeline included
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container-custom">
            <div className="animate-on-scroll mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-primary/15 bg-primary/[0.04] px-7 py-14 text-center sm:px-14">
              <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                From the first enquiry to the final payment — manage catering in swirl.
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-[15px] text-muted-foreground">
                Catering runs on the same menu, inventory and reporting engine as the rest of your restaurant.
              </p>
              <div className="flex justify-center">
                <SwirlCTA />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CateringManagement;
