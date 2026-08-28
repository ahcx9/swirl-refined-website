import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';
import SwirlCTA from '@/components/SwirlCTA';
import DeliveryHeroDemo from '@/components/features/delivery-fleet/DeliveryHeroDemo';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Bike, ChevronRight, IdCard, ShieldCheck, FileWarning, Car, Users, Timer, Filter,
  Smartphone, MapPinned, Wallet, Camera, ListChecks, Search, Layers,
} from 'lucide-react';

const riderRecords = [
  {
    name: 'Ahmed R.',
    id: 'RDR-014',
    phone: '+966 5X XXX 4821',
    vehicle: 'Scooter · Honda PCX 2023 · White',
    plate: '4821 RJA',
    licence: 'Expires 14 Mar 2028',
    insurance: 'Tawuniya · POL-88213 · Expires 02 Feb 2027',
    status: 'Active',
    docState: 'ok' as const,
  },
  {
    name: 'Faisal K.',
    id: 'RDR-021',
    phone: '+966 5X XXX 7364',
    vehicle: 'Bike · Yamaha NMAX 2022 · Blue',
    plate: '7364 KLM',
    licence: 'Expires 09 Jun 2026',
    insurance: 'Malath · POL-45109 · Expires 21 Sep 2026',
    status: 'On delivery',
    docState: 'soon' as const,
  },
  {
    name: 'Omar S.',
    id: 'RDR-032',
    phone: '+966 5X XXX 1190',
    vehicle: 'Car · Toyota Yaris 2021 · Silver',
    plate: '1190 TSD',
    licence: 'Expires 28 Aug 2026',
    insurance: 'Bupa Motor · POL-33871 · Expires 11 Nov 2026',
    status: 'Available',
    docState: 'ok' as const,
  },
];

const dispatchFeatures = [
  { icon: ListChecks, title: 'New and unassigned orders in one queue', description: 'Delivery orders from POS, QR and phone land in a single dispatch list with pickup-ready status.' },
  { icon: Users, title: 'Rider availability and workload', description: 'See who is free, who is mid-route and how many orders each rider is already carrying.' },
  { icon: Timer, title: 'Priority and expected delivery time', description: 'Flag urgent orders and set promise times that the rider portal reflects instantly.' },
  { icon: Search, title: 'Search and filters', description: 'Filter by rider, order, status, location and date to find any delivery in seconds.' },
];

const riderPortal = [
  'Current and upcoming assigned orders only — riders never see other routes',
  'Restaurant pickup details and preparation notes',
  'Customer name, contact, address and delivery instructions',
  'Map preview with route and one-tap navigation',
  'Payment type: prepaid, card, cash on delivery or a custom mode',
  'Exact cash amount to collect where applicable',
  'Accept, Picked Up, On the Way and Delivered actions',
  'Proof-of-delivery photo capture and upload',
  'Failed-attempt reasons, delivery notes and issue reporting',
  'Completed delivery history for the shift',
];

const commandCentre = [
  { label: 'Unassigned', value: '3', tone: 'text-muted-foreground' },
  { label: 'Active deliveries', value: '11', tone: 'text-primary' },
  { label: 'Delayed', value: '1', tone: 'text-amber-600' },
  { label: 'Delivered today', value: '68', tone: 'text-emerald-600' },
  { label: 'Failed', value: '0', tone: 'text-muted-foreground' },
  { label: 'Cash to collect', value: 'SAR 1,940', tone: 'text-foreground' },
];

const journey = [
  'Delivery order received',
  'Kitchen prepares order',
  'Order ready for pickup',
  'Rider assigned',
  'Rider accepts',
  'Picked up',
  'On the way',
  'Delivered',
  'Proof and payment recorded',
];

const docBadge = {
  ok: { label: 'Documents valid', className: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  soon: { label: 'Licence expiring soon', className: 'bg-amber-50 text-amber-800 ring-amber-200' },
};

const InHouseDeliveryManagement = () => {
  useScrollAnimation();
  const [selectedRider, setSelectedRider] = useState(0);
  const rider = riderRecords[selectedRider];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'swirl In-House Delivery Management',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android, iOS',
      description:
        'In-house restaurant delivery management with rider and vehicle records, order assignment, a mobile rider portal, live tracking and proof of delivery.',
      url: 'https://swirl.cx/in-house-delivery-management',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://swirl.cx/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://swirl.cx/products' },
        { '@type': 'ListItem', position: 3, name: 'In-House Delivery Management', item: 'https://swirl.cx/in-house-delivery-management' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Seo
        title="In-House Delivery Management & Rider App | swirl"
        description="Manage your own delivery fleet: create riders and vehicles, assign orders in seconds, track every route live and capture proof of delivery in the swirl rider portal."
        path="/in-house-delivery-management"
        jsonLd={jsonLd}
      />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f9fc] to-white pt-32 pb-16 md:pt-36 md:pb-24">
          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-[12.5px] text-muted-foreground">

              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="font-medium text-foreground">In-House Delivery Management</span>
            </nav>

            <div className="mb-12 grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="animate-on-scroll mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-4 py-2">
                  <Bike className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold text-primary">swirl In-House Delivery Management</span>
                </div>
                <h1 className="animate-on-scroll mb-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[3.25rem]">
                  Your delivery fleet,{' '}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    connected from order to doorstep.
                  </span>
                </h1>
                <p className="animate-on-scroll mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Create riders and vehicles, assign delivery orders in seconds, follow every active delivery, and give
                  each rider a mobile portal with everything needed to deliver successfully.
                </p>
                <div className="animate-on-scroll">
                  <SwirlCTA />
                </div>
              </div>
              <div className="lg:col-span-5" aria-hidden="true" />
            </div>

            <div className="animate-on-scroll mx-auto max-w-6xl">
              <DeliveryHeroDemo />
            </div>
          </div>
        </section>

        {/* Rider & vehicle management */}
        <section className="bg-gray-50 py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Rider and vehicle records that stay current
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  Every rider profile links to a vehicle, a licence and an insurance policy — with expiry indicators so
                  nothing lapses mid-shift. Sensitive documents stay behind role-based access inside swirl.
                </p>
              </div>

              <div className="animate-on-scroll grid gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 lg:grid-cols-12 lg:p-5">
                <div className="lg:col-span-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Riders</p>
                    <span className="inline-flex items-center gap-1 text-[11.5px] text-muted-foreground">
                      <Filter className="h-3.5 w-3.5" aria-hidden="true" /> Filters
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {riderRecords.map((r, i) => (
                      <li key={r.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedRider(i)}
                          aria-pressed={selectedRider === i}
                          className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-3 text-left transition-all ${
                            selectedRider === i
                              ? 'border-primary/30 bg-primary/[0.05]'
                              : 'border-gray-100 hover:border-primary/20 hover:bg-gray-50'
                          }`}
                        >
                          <span>
                            <span className="block text-[13.5px] font-semibold text-foreground">{r.name}</span>
                            <span className="block text-[11.5px] text-muted-foreground">{r.id} · {r.plate}</span>
                          </span>
                          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                            {r.status}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-8 lg:border-l lg:border-gray-100 lg:pl-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-[15px] font-bold text-primary">
                      {rider.name.slice(0, 2)}
                    </span>
                    <div>
                      <p className="text-[16px] font-bold text-foreground">{rider.name}</p>
                      <p className="text-[12.5px] text-muted-foreground">{rider.id} · {rider.phone}</p>
                    </div>
                    <span className={`ml-auto rounded-full px-2.5 py-1 text-[11.5px] font-semibold ring-1 ${docBadge[rider.docState].className}`}>
                      {docBadge[rider.docState].label}
                    </span>
                  </div>

                  <dl className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Car, label: 'Vehicle', value: rider.vehicle },
                      { icon: IdCard, label: 'Number plate', value: rider.plate },
                      { icon: FileWarning, label: 'Driving licence', value: rider.licence },
                      { icon: ShieldCheck, label: 'Insurance', value: rider.insurance },
                    ].map((f) => (
                      <div key={f.label} className="rounded-xl border border-gray-100 bg-gray-50/60 p-3.5">
                        <dt className="mb-1 inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                          <f.icon className="h-3.5 w-3.5" aria-hidden="true" /> {f.label}
                        </dt>
                        <dd className="text-[13.5px] font-medium text-foreground">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-[12px] text-muted-foreground">
                    Profiles also hold profile image, email, employee ID, emergency contact, operational notes and
                    uploaded licence and insurance documents. Sample data shown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assign in seconds */}
        <section className="py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Assign orders in seconds
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  Drag an order onto a rider or use the keyboard-accessible assignment menu — either way the rider portal
                  updates the moment you confirm.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {dispatchFeatures.map((f, i) => (
                  <div
                    key={f.title}
                    className={`animate-on-scroll animate-delay-${((i % 4) + 1) * 100} rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl`}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <f.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-1.5 text-[16px] font-bold text-gray-900">{f.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rider portal */}
        <section className="bg-[#0a1628] py-20 text-white">
          <div className="container-custom">
            <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
              <div>
                <div className="animate-on-scroll mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                  <Smartphone className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-semibold">Mobile rider portal</span>
                </div>
                <h2 className="animate-on-scroll mb-4 text-3xl font-bold md:text-4xl">
                  Everything a rider needs, in one hand
                </h2>
                <p className="animate-on-scroll mb-7 text-[16px] leading-relaxed text-white/60">
                  A secure, mobile-first portal with large tap targets, high contrast and the shortest possible path from
                  assignment to delivered. Each rider sees only the orders assigned to them.
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {riderPortal.map((p) => (
                    <li key={p} className="flex gap-2.5 rounded-xl bg-white/[0.05] px-3.5 py-2.5 text-[13px] text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-on-scroll grid gap-4 sm:grid-cols-2">
                {[
                  { icon: MapPinned, title: 'Route and navigation', body: 'Map preview with one-tap handoff to the rider’s preferred navigation app.' },
                  { icon: Wallet, title: 'Payment clarity', body: 'Prepaid, card, cash on delivery — with the exact amount to collect.' },
                  { icon: Camera, title: 'Proof of delivery', body: 'Capture a photo, add a note or log a failed-attempt reason.' },
                  { icon: Layers, title: 'Shift history', body: 'Completed deliveries stay available for the rider and the manager.' },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <c.icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mb-1.5 text-[15px] font-bold">{c.title}</h3>
                    <p className="text-[13px] leading-relaxed text-white/55">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Command centre metrics */}
        <section className="py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Live owner delivery command centre
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  One screen for every active rider, route and rupee — or riyal — still to be collected. Open any order for
                  its full timeline, or filter by outlet, rider, status, payment mode and date.
                </p>
              </div>

              <div className="animate-on-scroll grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {commandCentre.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(16,24,40,0.5)]">
                    <p className={`text-[24px] font-bold tabular-nums ${m.tone}`}>{m.value}</p>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[12px] text-muted-foreground">Product preview with sample data.</p>
            </div>
          </div>
        </section>

        {/* One connected journey */}
        <section className="bg-gray-50 py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <h2 className="animate-on-scroll mb-10 max-w-2xl text-3xl font-bold text-gray-900 md:text-4xl">
                One connected delivery journey
              </h2>
              <ol className="flex flex-wrap gap-2.5">
                {journey.map((s, i) => (
                  <li
                    key={s}
                    className={`animate-on-scroll animate-delay-${((i % 4) + 1) * 100} inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-[13.5px] font-medium text-foreground`}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container-custom">
            <div className="animate-on-scroll mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-primary/15 bg-primary/[0.04] px-7 py-14 text-center sm:px-14">
              <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Run every in-house delivery from one connected system.
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-[15px] text-muted-foreground">
                Orders, riders, vehicles, payments and proof — all inside the same swirl platform your counter already runs on.
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

export default InHouseDeliveryManagement;
