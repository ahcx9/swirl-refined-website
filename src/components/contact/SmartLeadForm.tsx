import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Send, User, Mail, Phone, MapPin, Building2, ChevronRight, CheckCircle, Briefcase, Calendar, MessageSquare, Store, Layers, Search, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { COUNTRIES, CITIES_BY_COUNTRY } from './formData';

const businessTypes = ['Café', 'Restaurant', 'Cloud Kitchen', 'Bakery', 'QSR', 'Fine Dining', 'Other'];
const solutionOptions = ['POS', 'QR Ordering', 'Inventory', 'Accounting', 'CRM/Loyalty', 'Reservations', 'Analytics', 'Multi-Branch', 'Custom Solution'];
const timelineOptions = ['Within 1 month', '1–3 months', '3–6 months', '6+ months'];
const contactMethods = ['Call', 'WhatsApp', 'Email'];

// Searchable dropdown component
const SearchableDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  icon: Icon,
  label,
  required = false,
  disabled = false,
}: {
  options: { value: string; label: string; flag?: string }[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  icon?: React.ElementType;
  label: string;
  required?: boolean;
  disabled?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = useMemo(() => {
    if (!search) return options;
    const s = search.toLowerCase();
    return options.filter(o => o.label.toLowerCase().includes(s) || o.value.toLowerCase().includes(s));
  }, [options, search]);

  const selectedOption = options.find(o => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          setOpen(!open);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className={`w-full h-12 px-4 flex items-center justify-between rounded-xl border bg-background text-foreground transition-all duration-200 ${
          open ? 'border-primary ring-2 ring-primary/20' : 'border-border/60 hover:border-primary/40'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span className={selectedOption ? 'text-foreground' : 'text-muted-foreground'}>
          {selectedOption ? (
            <span className="flex items-center gap-2">
              {selectedOption.flag && <span className="text-lg">{selectedOption.flag}</span>}
              {selectedOption.label}
            </span>
          ) : placeholder}
        </span>
        <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full bg-card border border-border/60 rounded-xl shadow-xl overflow-hidden animate-fade-in">
          <div className="p-3 border-b border-border/40">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={`Search ${label.toLowerCase()}...`}
                className="w-full h-10 pl-9 pr-4 rounded-lg border border-border/40 bg-background text-foreground text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="max-h-56 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="px-4 py-6 text-center text-sm text-muted-foreground">No results found</div>
            ) : (
              filtered.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                    setSearch('');
                  }}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 text-sm transition-colors hover:bg-primary/5 ${
                    value === option.value ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  {option.flag && <span className="text-lg">{option.flag}</span>}
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const SmartLeadForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    mobile: '' as string | undefined,
    email: '',
    country: '',
    city: '',
    businessStatus: '' as '' | 'running' | 'planning',
    cafeName: '',
    branches: '',
    businessType: '',
    currentPOS: '',
    interestedIn: [] as string[],
    contactMethod: '',
    notes: '',
    plannedBusinessType: '',
    openingTimeline: '',
    expectedOutlets: '',
    plannedInterestedIn: [] as string[],
    plannedContactMethod: '',
    plannedNotes: '',
  });

  const updateField = (field: string, value: string | string[] | undefined) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleSolution = (field: 'interestedIn' | 'plannedInterestedIn', solution: string) => {
    setForm(prev => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(solution) ? arr.filter(s => s !== solution) : [...arr, solution] };
    });
  };

  // Country options with flags
  const countryOptions = useMemo(() =>
    COUNTRIES.map(c => ({ value: c.code, label: c.name, flag: c.flag })),
  []);

  // City options based on selected country
  const cityOptions = useMemo(() => {
    if (!form.country) return [];
    const cities = CITIES_BY_COUNTRY[form.country] || [];
    return cities.map(c => ({ value: c, label: c }));
  }, [form.country]);

  // Map country code to phone country
  const phoneCountry = useMemo(() => {
    const c = COUNTRIES.find(c => c.code === form.country);
    return c?.phoneCode as any;
  }, [form.country]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const isRunning = form.businessStatus === 'running';
      const countryName = COUNTRIES.find(c => c.code === form.country)?.name || form.country;
      const message = isRunning
        ? `Status: Running Business\nCafé Name: ${form.cafeName}\nBranches: ${form.branches}\nType: ${form.businessType}\nCurrent POS: ${form.currentPOS}\nInterested In: ${form.interestedIn.join(', ')}\nContact: ${form.contactMethod}\nNotes: ${form.notes}`
        : `Status: Planning to Open\nPlanned Type: ${form.plannedBusinessType}\nTimeline: ${form.openingTimeline}\nExpected Outlets: ${form.expectedOutlets}\nInterested In: ${form.plannedInterestedIn.join(', ')}\nContact: ${form.plannedContactMethod}\nNotes: ${form.plannedNotes}`;

      const { error } = await supabase.from('contact_submissions').insert([{
        name: form.fullName,
        email: form.email || 'not-provided@placeholder.com',
        phone: form.mobile || '',
        business_type: isRunning ? form.businessType : `Planning: ${form.plannedBusinessType}`,
        message: `Country: ${countryName}\nCity: ${form.city}\n${message}`,
        status: 'new',
      }]);

      if (error) throw error;

      try {
        await supabase.functions.invoke('send-contact-notification', {
          body: {
            name: form.fullName,
            email: form.email || '',
            phone: form.mobile || '',
            business_type: isRunning ? form.businessType : `Planning: ${form.plannedBusinessType}`,
            message: `Country: ${countryName}\nCity: ${form.city}\n${message}`,
          },
        });
      } catch {
        // Email notification failed silently
      }

      setSubmitted(true);
    } catch {
      alert('There was an error. Please try again or contact us at hello@swirl.cx');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact-form" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-br from-primary/5 to-blue-400/5 border border-primary/10 rounded-3xl p-12 md:p-16 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We've received your details. Our team will reach out to you within 24 hours with a personalized plan for your business.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const canProceedStep1 = form.fullName && form.mobile && form.country;
  const canProceedStep2 = form.businessStatus !== '';

  return (
    <section id="contact-form" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.015] to-background" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tell Us About Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            Help us understand your setup so we can tailor the perfect solution.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-3 text-sm font-medium text-muted-foreground">
            <span className={step >= 1 ? 'text-primary' : ''}>Basic Info</span>
            <span className={step >= 2 ? 'text-primary' : ''}>Business Details</span>
            <span className={step >= 3 ? 'text-primary' : ''}>Requirements</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-card border border-border/50 rounded-2xl shadow-card p-8 md:p-10">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                {/* Full Name */}
                <div>
                  <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                    <User size={14} className="text-primary" /> Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    required
                    value={form.fullName}
                    onChange={e => updateField('fullName', e.target.value)}
                    placeholder="Your full name"
                    className="mt-1.5 h-12 rounded-xl border-border/60 focus:border-primary"
                  />
                </div>

                {/* Country & City */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <Globe size={14} className="text-primary" /> Country <span className="text-destructive">*</span>
                    </Label>
                    <div className="mt-1.5">
                      <SearchableDropdown
                        options={countryOptions}
                        value={form.country}
                        onChange={(val) => {
                          updateField('country', val);
                          updateField('city', ''); // Reset city
                        }}
                        placeholder="Select your country"
                        label="Country"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> City
                    </Label>
                    <div className="mt-1.5">
                      {cityOptions.length > 0 ? (
                        <SearchableDropdown
                          options={cityOptions}
                          value={form.city}
                          onChange={(val) => updateField('city', val)}
                          placeholder="Select your city"
                          label="City"
                          disabled={!form.country}
                        />
                      ) : (
                        <Input
                          value={form.city}
                          onChange={e => updateField('city', e.target.value)}
                          placeholder={form.country ? "Enter your city" : "Select country first"}
                          disabled={!form.country}
                          className="h-12 rounded-xl border-border/60 focus:border-primary"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile Number with international input */}
                <div>
                  <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                    <Phone size={14} className="text-primary" /> Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <div className="mt-1.5 phone-input-wrapper">
                    <PhoneInput
                      international
                      defaultCountry={phoneCountry || 'AE'}
                      countryCallingCodeEditable={false}
                      value={form.mobile}
                      onChange={(value) => updateField('mobile', value)}
                      className="h-12 rounded-xl border border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 bg-background px-4"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    We'll primarily reach you via call or WhatsApp
                  </p>
                </div>

                {/* Email (optional) */}
                <div>
                  <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> Email <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={e => updateField('email', e.target.value)}
                    placeholder="you@business.com"
                    className="mt-1.5 h-12 rounded-xl border-border/60 focus:border-primary"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="button"
                    onClick={() => { if (canProceedStep1) setStep(2); }}
                    disabled={!canProceedStep1}
                    className="w-full h-12 rounded-xl text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg transition-all duration-200 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue <ChevronRight size={18} className="ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Business Status */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <Label className="text-foreground font-medium mb-4 flex items-center gap-2">
                    <Briefcase size={14} className="text-primary" /> What describes you best? <span className="text-destructive">*</span>
                  </Label>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <button
                      type="button"
                      onClick={() => updateField('businessStatus', 'running')}
                      className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${form.businessStatus === 'running' ? 'border-primary bg-primary/5 shadow-md' : 'border-border/50 hover:border-primary/30 hover:bg-primary/[0.02]'}`}
                    >
                      <Store size={24} className={form.businessStatus === 'running' ? 'text-primary' : 'text-muted-foreground'} />
                      <p className="font-semibold text-foreground mt-3">I Run A Business</p>
                      <p className="text-sm text-muted-foreground mt-1">I already operate a café or restaurant</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => updateField('businessStatus', 'planning')}
                      className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${form.businessStatus === 'planning' ? 'border-primary bg-primary/5 shadow-md' : 'border-border/50 hover:border-primary/30 hover:bg-primary/[0.02]'}`}
                    >
                      <Layers size={24} className={form.businessStatus === 'planning' ? 'text-primary' : 'text-muted-foreground'} />
                      <p className="font-semibold text-foreground mt-3">Planning To Open</p>
                      <p className="text-sm text-muted-foreground mt-1">I'm starting a new café or restaurant</p>
                    </button>
                  </div>
                </div>

                {form.businessStatus === 'running' && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                          <Building2 size={14} className="text-primary" /> Café / Restaurant Name <span className="text-destructive">*</span>
                        </Label>
                        <Input required value={form.cafeName} onChange={e => updateField('cafeName', e.target.value)} placeholder="Your business name" className="mt-1.5 h-12 rounded-xl border-border/60" />
                      </div>
                      <div>
                        <Label className="text-foreground font-medium mb-2">Number Of Branches</Label>
                        <Input value={form.branches} onChange={e => updateField('branches', e.target.value)} placeholder="e.g. 3" className="mt-1.5 h-12 rounded-xl border-border/60" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-foreground font-medium mb-2">Business Type <span className="text-destructive">*</span></Label>
                        <select required value={form.businessType} onChange={e => updateField('businessType', e.target.value)} className="mt-1.5 w-full h-12 px-3 border border-border/60 rounded-xl bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                          <option value="">Select type</option>
                          {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <Label className="text-foreground font-medium mb-2">Current POS / Software</Label>
                        <Input value={form.currentPOS} onChange={e => updateField('currentPOS', e.target.value)} placeholder="e.g. Foodics, Lightspeed" className="mt-1.5 h-12 rounded-xl border-border/60" />
                      </div>
                    </div>
                  </div>
                )}

                {form.businessStatus === 'planning' && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-foreground font-medium mb-2">Planned Business Type <span className="text-destructive">*</span></Label>
                        <select required value={form.plannedBusinessType} onChange={e => updateField('plannedBusinessType', e.target.value)} className="mt-1.5 w-full h-12 px-3 border border-border/60 rounded-xl bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                          <option value="">Select type</option>
                          {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <Label className="text-foreground font-medium mb-2">Expected Opening Timeline</Label>
                        <select value={form.openingTimeline} onChange={e => updateField('openingTimeline', e.target.value)} className="mt-1.5 w-full h-12 px-3 border border-border/60 rounded-xl bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                          <option value="">Select timeline</option>
                          {timelineOptions.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label className="text-foreground font-medium mb-2">Expected Number Of Outlets At Launch</Label>
                      <Input value={form.expectedOutlets} onChange={e => updateField('expectedOutlets', e.target.value)} placeholder="e.g. 1" className="mt-1.5 h-12 rounded-xl border-border/60" />
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 h-12 rounded-xl text-base font-medium">
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => { if (canProceedStep2) setStep(3); }}
                    disabled={!canProceedStep2}
                    className="flex-1 h-12 rounded-xl text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg disabled:opacity-50"
                  >
                    Continue <ChevronRight size={18} className="ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Requirements */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <Label className="text-foreground font-medium mb-3">Solutions You're Interested In</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {solutionOptions.map(sol => {
                      const field = form.businessStatus === 'running' ? 'interestedIn' : 'plannedInterestedIn';
                      const selected = form[field].includes(sol);
                      return (
                        <button
                          key={sol}
                          type="button"
                          onClick={() => toggleSolution(field, sol)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${selected ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-background text-foreground border-border/60 hover:border-primary/40 hover:bg-primary/5'}`}
                        >
                          {sol}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label className="text-foreground font-medium mb-3 flex items-center gap-2">
                    <MessageSquare size={14} className="text-primary" /> Preferred Contact Method
                  </Label>
                  <div className="flex gap-3 mt-2">
                    {contactMethods.map(method => {
                      const field = form.businessStatus === 'running' ? 'contactMethod' : 'plannedContactMethod';
                      const selected = form[field] === method;
                      return (
                        <button
                          key={method}
                          type="button"
                          onClick={() => updateField(field, method)}
                          className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all ${selected ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-foreground border-border/60 hover:border-primary/40'}`}
                        >
                          {method}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label className="text-foreground font-medium mb-2">Additional Notes</Label>
                  <textarea
                    value={form.businessStatus === 'running' ? form.notes : form.plannedNotes}
                    onChange={e => updateField(form.businessStatus === 'running' ? 'notes' : 'plannedNotes', e.target.value)}
                    rows={3}
                    className="mt-1.5 w-full px-4 py-3 border border-border/60 rounded-xl bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Any specific challenges or requirements?"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1 h-12 rounded-xl text-base font-medium">
                    Back
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="flex-1 h-14 rounded-xl text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01]">
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={18} />
                        Book a Demo
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default SmartLeadForm;
