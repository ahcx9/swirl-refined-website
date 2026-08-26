import React, { useEffect, useRef, useState } from 'react';
import PhoneInput, { isValidPhoneNumber, type Value } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { ArrowRight, BrainCircuit, Building2, Check, Cloud, Mail, Store, User, Loader2 } from 'lucide-react';
import Seo from '@/components/Seo';
import RiyadhSkyline from '@/components/ffcc/RiyadhSkyline';
import { supabase } from '@/integrations/supabase/client';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Fires a non-sensitive analytics event if analytics is configured. No PII. */
const track = (event: string) => {
  try {
    const w = window as unknown as {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer?.push({ event });
    w.gtag?.('event', event);
  } catch {
    /* analytics is optional */
  }
};

const trustPoints = [
  { icon: BrainCircuit, text: 'AI-Native Restaurant Operating System' },
  { icon: Cloud, text: 'Cloud + Offline POS' },
  { icon: Store, text: 'Built for modern F&B businesses' },
];

type Errors = { name?: string; phone?: string; email?: string; brand?: string };

const FFCC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState<Value | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [done, setDone] = useState(false);
  const [firstName, setFirstName] = useState('');
  const startedRef = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    track('ffcc_page_view');
  }, []);

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track('ffcc_form_started');
    }
  };

  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = 'Please enter your full name.';
    if (!phone || !isValidPhoneNumber(String(phone))) e.phone = 'Enter a valid WhatsApp or contact number.';
    if (email.trim() && !EMAIL_RE.test(email.trim())) e.email = 'Enter a valid email address.';
    if (brand.trim().length < 1) e.brand = 'Please enter your business or brand name.';
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (submitting) return;
    setSubmitError('');
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('submit-ffcc-lead', {
        body: {
          contact_name: name.trim(),
          phone: String(phone),
          work_email: email.trim(),
          brand_name: brand.trim(),
          company_website: honeypot,
        },
      });
      if (error || !(data as { success?: boolean } | null)?.success) throw new Error('submit_failed');

      setFirstName(name.trim().split(/\s+/)[0]);
      setDone(true);
      track('ffcc_form_submit_success');
    } catch {
      track('ffcc_form_submit_error');
      setSubmitError('We couldn’t submit your details. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const fieldBase =
    'w-full h-12 px-4 rounded-[14px] border bg-white text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-all duration-200 outline-none focus:ring-4 focus:ring-primary/15';
  const fieldOk = 'border-border hover:border-primary/40 focus:border-primary';
  const fieldBad = 'border-destructive focus:border-destructive focus:ring-destructive/15';

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[hsl(214_100%_98%)] font-sans">
      <Seo
        title="Meet Swirl at FFCC Riyadh | Fast Food & Cafe Convention"
        description="Connect with Swirl at FFCC — Fast Food & Cafe Convention in Riyadh—and discover an AI-native restaurant operating system for POS, inventory, kitchen, delivery, and reporting."
        path="/ffcc"
      />

      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-primary/[0.07] blur-[120px]" />
        <RiyadhSkyline className="absolute bottom-0 left-0 w-full text-primary/[0.13]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between lg:mb-14">
          <a href="/" aria-label="swirl home" className="inline-flex items-center">
            <img
              src="/lovable-uploads/swirl-logo-transparent.png"
              alt="swirl"
              width={112}
              height={32}
              className="h-8 w-auto"
            />
          </a>
          <a
            href="https://swirl.cx"
            className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Visit swirl.cx
          </a>
        </header>

        <main className="grid flex-1 items-start gap-9 lg:grid-cols-2 lg:gap-16">
          {/* Left — messaging */}
          <section className="animate-fade-in lg:pt-4">
            <div className="inline-flex flex-col gap-1 rounded-[14px] border border-primary/20 bg-white/80 px-4 py-2.5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] backdrop-blur-sm">
              <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-primary">
                FFCC Riyadh • 2026
              </span>
              <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                Fast Food &amp; Cafe Convention
              </span>
            </div>

            <h1 className="mt-6 text-[28px] font-bold leading-[1.15] tracking-tight text-[hsl(217_45%_17%)] sm:text-[34px] lg:mt-7 lg:text-[42px]">
              Let’s build the future of restaurant operations.
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Meet Swirl at the Fast Food &amp; Cafe Convention in Riyadh and discover how one AI-native
              platform brings your POS, inventory, kitchen, delivery, customers, and reporting together.
            </p>

            <ul className="mt-7 space-y-3 lg:mt-9">
              {trustPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-primary/15 bg-white text-primary shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <span className="text-[14px] font-medium text-[hsl(217_40%_22%)] sm:text-[15px]">{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Right — form card */}
          <section className="animate-fade-in pb-10">
            <div className="rounded-[18px] border border-border/70 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(0,82,204,0.28),0_2px_6px_rgba(16,24,40,0.04)] sm:p-8">
              {!done ? (
                <>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                    Connect with Swirl
                  </p>
                  <h2 className="mt-2 text-[22px] font-bold tracking-tight text-[hsl(217_45%_17%)] sm:text-[24px]">
                    Tell us a little about you
                  </h2>
                  <p className="mt-1.5 text-[14px] text-muted-foreground">
                    Fill in your details and our team will reach out to you.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                    {/* Honeypot */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="company_website">Company website</label>
                      <input
                        id="company_website"
                        name="company_website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="ffcc-name" className="mb-1.5 block text-[13px] font-semibold text-[hsl(217_40%_22%)]">
                        Contact Name <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                        <input
                          id="ffcc-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Enter your full name"
                          value={name}
                          onFocus={markStarted}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                          }}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'ffcc-name-error' : undefined}
                          className={`${fieldBase} pl-11 ${errors.name ? fieldBad : fieldOk}`}
                        />
                      </div>
                      {errors.name && (
                        <p id="ffcc-name-error" role="alert" className="mt-1.5 text-[12.5px] font-medium text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="ffcc-phone" className="mb-1.5 block text-[13px] font-semibold text-[hsl(217_40%_22%)]">
                        WhatsApp / Contact Number <span className="text-primary">*</span>
                      </label>
                      <div
                        className={`ffcc-phone flex h-12 items-center rounded-[14px] border bg-white px-3 transition-all duration-200 focus-within:ring-4 ${
                          errors.phone
                            ? 'border-destructive focus-within:ring-destructive/15'
                            : 'border-border hover:border-primary/40 focus-within:border-primary focus-within:ring-primary/15'
                        }`}
                      >
                        <PhoneInput
                          id="ffcc-phone"
                          international
                          defaultCountry="SA"
                          countryCallingCodeEditable={false}
                          value={phone}
                          onFocus={markStarted}
                          onChange={(v) => {
                            setPhone(v);
                            if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                          }}
                          placeholder="5X XXX XXXX"
                          numberInputProps={{
                            type: 'tel',
                            inputMode: 'tel',
                            autoComplete: 'tel',
                            'aria-invalid': !!errors.phone,
                            'aria-describedby': errors.phone ? 'ffcc-phone-error' : undefined,
                          }}
                        />
                      </div>
                      {errors.phone && (
                        <p id="ffcc-phone-error" role="alert" className="mt-1.5 text-[12.5px] font-medium text-destructive">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="ffcc-email" className="mb-1.5 block text-[13px] font-semibold text-[hsl(217_40%_22%)]">
                        Work Email <span className="font-normal text-muted-foreground">(optional)</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                        <input
                          id="ffcc-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          placeholder="name@company.com"
                          value={email}
                          onFocus={markStarted}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                          }}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'ffcc-email-error' : undefined}
                          className={`${fieldBase} pl-11 ${errors.email ? fieldBad : fieldOk}`}
                        />
                      </div>
                      {errors.email && (
                        <p id="ffcc-email-error" role="alert" className="mt-1.5 text-[12.5px] font-medium text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Brand */}
                    <div>
                      <label htmlFor="ffcc-brand" className="mb-1.5 block text-[13px] font-semibold text-[hsl(217_40%_22%)]">
                        Restaurant, Café or Brand Name <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Building2 size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                        <input
                          id="ffcc-brand"
                          name="brand"
                          type="text"
                          required
                          autoComplete="organization"
                          placeholder="Enter your business or brand name"
                          value={brand}
                          onFocus={markStarted}
                          onChange={(e) => {
                            setBrand(e.target.value);
                            if (errors.brand) setErrors((p) => ({ ...p, brand: undefined }));
                          }}
                          aria-invalid={!!errors.brand}
                          aria-describedby={errors.brand ? 'ffcc-brand-error' : undefined}
                          className={`${fieldBase} pl-11 ${errors.brand ? fieldBad : fieldOk}`}
                        />
                      </div>
                      {errors.brand && (
                        <p id="ffcc-brand-error" role="alert" className="mt-1.5 text-[12.5px] font-medium text-destructive">
                          {errors.brand}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <p role="alert" className="rounded-[12px] border border-destructive/25 bg-destructive/5 px-4 py-3 text-[13px] font-medium text-destructive">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[14px] bg-primary text-[15px] font-semibold text-primary-foreground shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.6)] transition-all duration-200 hover:bg-primary/92 hover:shadow-[0_12px_26px_-10px_hsl(var(--primary)/0.7)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={17} className="animate-spin" /> Submitting…
                        </>
                      ) : (
                        <>
                          Connect With Swirl
                          <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="pt-0.5 text-center text-[12.5px] leading-relaxed text-muted-foreground">
                      Your details are safe with us. No spam—just a conversation with the Swirl team.
                    </p>
                  </form>
                </>
              ) : (
                <div ref={successRef} tabIndex={-1} className="animate-fade-in py-6 text-center outline-none">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground ffcc-pop">
                      <Check size={22} strokeWidth={3} className="ffcc-check" />
                    </span>
                  </div>
                  <h2 className="mt-5 text-[22px] font-bold tracking-tight text-[hsl(217_45%_17%)]">
                    Thank you, {firstName}!
                  </h2>
                  <p className="mx-auto mt-2 max-w-sm text-[14.5px] text-muted-foreground">
                    You’re all set. Our team will contact you shortly on WhatsApp.
                  </p>
                  <p className="mx-auto mt-2 max-w-sm text-[13.5px] text-muted-foreground/90">
                    We look forward to meeting you at FFCC — Fast Food &amp; Cafe Convention in Riyadh.
                  </p>
                  <a
                    href="https://swirl.cx"
                    className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-[14px] border border-primary/25 px-6 text-[14.5px] font-semibold text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                  >
                    Visit Swirl
                    <ArrowRight size={16} />
                  </a>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FFCC;
