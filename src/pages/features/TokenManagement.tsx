import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import Footer from '@/components/Footer';
import SwirlCTA from '@/components/SwirlCTA';
import TokenHeroDemo from '@/components/features/token/TokenHeroDemo';
import TokenDisplayBoard from '@/components/features/token/TokenDisplayBoard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  TicketCheck, Zap, RefreshCw, Layers, Hash, Tv, History, Building2,
  ChevronRight, ArrowRight, X, Check,
} from 'lucide-react';

const flow = [
  { title: 'Order placed in swirl POS', description: 'The cashier completes billing at the counter, kiosk or QR order.' },
  { title: 'Token number generated', description: 'swirl assigns the next token automatically using your prefix and numbering rules.' },
  { title: 'Order enters the preparation queue', description: 'The ticket lands in the kitchen workflow with items, notes and counter details.' },
  { title: 'Staff set it to Now Preparing', description: 'One tap moves the token into the active preparation column.' },
  { title: 'Staff mark the order Ready', description: 'Packing is done, the token is released to the pickup counter.' },
  { title: 'Customer display updates instantly', description: 'The token moves to Ready for Pickup with a highlight and chime.' },
];

const capabilities = [
  { icon: TicketCheck, title: 'Automatic token generation', description: 'Every completed POS order gets a token number without a single manual entry.' },
  { icon: Zap, title: 'Live preparation and ready statuses', description: 'Staff move tokens between states in one tap, with clear labels and icons — never colour alone.' },
  { icon: RefreshCw, title: 'Instant synchronization', description: 'POS, kitchen workflow and the customer display stay in sync in real time.' },
  { icon: Layers, title: 'Separate queues and counters', description: 'Run independent queues for drive-thru, delivery pickup, dine-in or each food-court counter.' },
  { icon: Hash, title: 'Configurable prefixes and numbering', description: 'Set prefixes such as A-, D- or K-, define ranges and daily reset rules per outlet.' },
  { icon: Tv, title: 'Full-screen display mode', description: 'Cast the pickup board to any TV or customer-facing screen in landscape or portrait.' },
  { icon: History, title: 'Order history and token visibility', description: 'Search any token to see its full status trail, timestamps and linked bill.' },
  { icon: Building2, title: 'Multi-location consistency', description: 'Roll out the same token logic across every branch of your QSR chain.' },
];

const before = [
  'Customers crowd the counter asking if their order is ready',
  'Staff shout names over the noise and repeat themselves',
  'Paper receipts get mixed up between packed and pending orders',
  'Peak hour turns into a bottleneck at a single collection point',
];

const after = [
  'Every guest can see their token status from across the room',
  'Staff communicate through the board instead of repeating themselves',
  'Packed and pending orders are clearly separated at all times',
  'Rush hour keeps a steady, predictable pickup rhythm',
];

const TokenManagement = () => {
  useScrollAnimation();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'swirl Token Management',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android, iOS',
      description:
        'Restaurant token management and QSR token display system that generates tokens from the POS and shows Now Preparing and Ready for Pickup in real time.',
      url: 'https://swirl.cx/token-management',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://swirl.cx/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://swirl.cx/products' },
        { '@type': 'ListItem', position: 3, name: 'Token Management', item: 'https://swirl.cx/token-management' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Seo
        title="Token Management System for QSRs & Cafés | swirl"
        description="Generate order tokens straight from your POS and show Now Preparing and Ready for Pickup on a live customer display. Built for QSRs, cafés and food courts."
        path="/token-management"
        jsonLd={jsonLd}
      />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/4 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[150px]" />
          </div>

          <div className="container-custom relative z-10">

            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <div className="animate-on-scroll mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.06] px-4 py-2">
                <TicketCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-primary">swirl Token Management</span>
              </div>
              <h1 className="animate-on-scroll mb-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Turn every order into a{' '}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  faster, clearer pickup experience.
                </span>
              </h1>
              <p className="animate-on-scroll mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Automatically generate token numbers from the POS, move orders through preparation, and show
                customers exactly when their order is ready — all in real time.
              </p>
              <div className="animate-on-scroll flex justify-center">
                <SwirlCTA />
              </div>
            </div>

            <div className="animate-on-scroll mx-auto max-w-6xl">
              <TokenHeroDemo />
            </div>
          </div>
        </section>

        {/* One order, one visible journey */}
        <section className="bg-gray-50 py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  One order, one visible journey
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  From the moment a bill is closed, the token carries the order all the way to the customer&apos;s hand.
                </p>
              </div>

              <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {flow.map((s, i) => (
                  <li
                    key={s.title}
                    className={`animate-on-scroll animate-delay-${((i % 3) + 1) * 100} group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-[14px] font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-primary/25 to-transparent" aria-hidden="true" />
                    </div>
                    <h3 className="mb-1.5 text-[17px] font-bold text-gray-900">{s.title}</h3>
                    <p className="text-[14px] leading-relaxed text-muted-foreground">{s.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Live customer display */}
        <section className="py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  A pickup board customers can read from across the room
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  Two unmistakable columns, oversized token numbers, your branding — and a gentle highlight and chime
                  the moment an order becomes ready.
                </p>
              </div>
              <div className="animate-on-scroll">
                <TokenDisplayBoard />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-gray-50 py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 max-w-2xl">
                <h2 className="animate-on-scroll mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  Built for busy counters
                </h2>
                <p className="animate-on-scroll text-lg text-muted-foreground">
                  Everything a high-volume counter needs to keep orders moving — configured once, consistent everywhere.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((c, i) => (
                  <div
                    key={c.title}
                    className={`animate-on-scroll animate-delay-${((i % 4) + 1) * 100} group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl`}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-1.5 text-[16px] font-bold text-gray-900">{c.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-muted-foreground">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before / after */}
        <section className="py-20">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl">
              <h2 className="animate-on-scroll mb-10 max-w-2xl text-3xl font-bold text-gray-900 md:text-4xl">
                The same rush, handled two very different ways
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="animate-on-scroll rounded-2xl border border-gray-200 bg-gray-50/70 p-7">
                  <p className="mb-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    <X className="h-4 w-4" aria-hidden="true" /> Counter without token management
                  </p>
                  <ul className="space-y-3.5">
                    {before.map((b) => (
                      <li key={b} className="flex gap-3 text-[14.5px] text-muted-foreground">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="animate-on-scroll animate-delay-100 rounded-2xl border border-primary/20 bg-primary/[0.04] p-7">
                  <p className="mb-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                    <Check className="h-4 w-4" aria-hidden="true" /> Counter with swirl Token Management
                  </p>
                  <ul className="space-y-3.5">
                    {after.map((a) => (
                      <li key={a} className="flex gap-3 text-[14.5px] text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-24">
          <div className="container-custom">
            <div className="animate-on-scroll mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-[#0a1628] px-7 py-14 text-center sm:px-14">
              <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
                Make every pickup feel organized — even during the rush.
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-[15px] text-white/60">
                Token Management is part of the swirl restaurant operating system — no extra hardware stack, no separate login.
              </p>
              <div className="flex justify-center">
                <SwirlCTA />
              </div>
              <p className="mt-7 text-[13px] text-white/45">
                Also explore{' '}
                <Link to="/products/kitchen-display" className="underline underline-offset-4 hover:text-white/80">
                  Kitchen Display
                </Link>{' '}
                and{' '}
                <Link to="/products/customer-display" className="underline underline-offset-4 hover:text-white/80">
                  Customer Display
                </Link>
                <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TokenManagement;
