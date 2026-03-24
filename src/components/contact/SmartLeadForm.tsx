import React, { useState } from 'react';
import { Send, User, Mail, Phone, MapPin, Building2, ChevronRight, CheckCircle, Briefcase, Calendar, MessageSquare, Store, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';

const businessTypes = ['Café', 'Restaurant', 'Cloud Kitchen', 'Bakery', 'QSR', 'Fine Dining', 'Other'];
const solutionOptions = ['POS', 'QR Ordering', 'Inventory', 'Accounting', 'CRM/Loyalty', 'Reservations', 'Analytics', 'Multi-Branch', 'Custom Solution'];
const timelineOptions = ['Within 1 month', '1–3 months', '3–6 months', '6+ months'];
const contactMethods = ['Call', 'WhatsApp', 'Email'];

const SmartLeadForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    country: '',
    city: '',
    businessStatus: '' as '' | 'running' | 'planning',
    // Running fields
    cafeName: '',
    branches: '',
    businessType: '',
    currentPOS: '',
    interestedIn: [] as string[],
    monthlyVolume: '',
    preferredDemoDate: '',
    contactMethod: '',
    notes: '',
    // Planning fields
    plannedBusinessType: '',
    openingTimeline: '',
    expectedOutlets: '',
    plannedInterestedIn: [] as string[],
    plannedContactMethod: '',
    plannedNotes: '',
  });

  const updateField = (field: string, value: string | string[]) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleSolution = (field: 'interestedIn' | 'plannedInterestedIn', solution: string) => {
    setForm(prev => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(solution) ? arr.filter(s => s !== solution) : [...arr, solution] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const isRunning = form.businessStatus === 'running';
      const message = isRunning
        ? `Status: Running Business\nCafé Name: ${form.cafeName}\nBranches: ${form.branches}\nType: ${form.businessType}\nCurrent POS: ${form.currentPOS}\nInterested In: ${form.interestedIn.join(', ')}\nMonthly Volume: ${form.monthlyVolume}\nPreferred Demo: ${form.preferredDemoDate}\nContact: ${form.contactMethod}\nNotes: ${form.notes}`
        : `Status: Planning to Open\nPlanned Type: ${form.plannedBusinessType}\nTimeline: ${form.openingTimeline}\nExpected Outlets: ${form.expectedOutlets}\nInterested In: ${form.plannedInterestedIn.join(', ')}\nContact: ${form.plannedContactMethod}\nNotes: ${form.plannedNotes}`;

      const { error } = await supabase.from('contact_submissions').insert([{
        name: form.fullName,
        email: form.email,
        phone: form.mobile,
        business_type: isRunning ? form.businessType : `Planning: ${form.plannedBusinessType}`,
        message: `Country: ${form.country}\nCity: ${form.city}\n${message}`,
        status: 'new',
      }]);

      if (error) throw error;

      try {
        await supabase.functions.invoke('send-contact-notification', {
          body: {
            name: form.fullName,
            email: form.email,
            phone: form.mobile,
            business_type: isRunning ? form.businessType : `Planning: ${form.plannedBusinessType}`,
            message: `Country: ${form.country}\nCity: ${form.city}\n${message}`,
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <User size={14} className="text-primary" /> Full Name *
                    </Label>
                    <Input required value={form.fullName} onChange={e => updateField('fullName', e.target.value)} placeholder="Your full name" className="mt-1.5 h-12 rounded-xl border-border/60 focus:border-primary" />
                  </div>
                  <div>
                    <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <Mail size={14} className="text-primary" /> Email *
                    </Label>
                    <Input required type="email" value={form.email} onChange={e => updateField('email', e.target.value)} placeholder="you@business.com" className="mt-1.5 h-12 rounded-xl border-border/60 focus:border-primary" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <Phone size={14} className="text-primary" /> Mobile Number *
                    </Label>
                    <Input required type="tel" value={form.mobile} onChange={e => updateField('mobile', e.target.value)} placeholder="+971 XX XXX XXXX" className="mt-1.5 h-12 rounded-xl border-border/60 focus:border-primary" />
                  </div>
                  <div>
                    <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> Country *
                    </Label>
                    <Input required value={form.country} onChange={e => updateField('country', e.target.value)} placeholder="e.g. UAE" className="mt-1.5 h-12 rounded-xl border-border/60 focus:border-primary" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> City
                    </Label>
                    <Input value={form.city} onChange={e => updateField('city', e.target.value)} placeholder="e.g. Dubai" className="mt-1.5 h-12 rounded-xl border-border/60 focus:border-primary" />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="button" onClick={() => {
                    if (form.fullName && form.email && form.mobile && form.country) setStep(2);
                  }} className="w-full h-12 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 shadow-lg">
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
                    <Briefcase size={14} className="text-primary" /> What describes you best? *
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
                          <Building2 size={14} className="text-primary" /> Café / Restaurant Name *
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
                        <Label className="text-foreground font-medium mb-2">Business Type *</Label>
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
                        <Label className="text-foreground font-medium mb-2">Planned Business Type *</Label>
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
                  <Button type="button" onClick={() => {
                    if (form.businessStatus) setStep(3);
                  }} className="flex-1 h-12 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-blue-500">
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

                {form.businessStatus === 'running' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-foreground font-medium mb-2">Average Monthly Volume / Sales</Label>
                        <Input value={form.monthlyVolume} onChange={e => updateField('monthlyVolume', e.target.value)} placeholder="e.g. AED 50K–100K" className="mt-1.5 h-12 rounded-xl border-border/60" />
                      </div>
                      <div>
                        <Label className="text-foreground font-medium mb-2 flex items-center gap-2">
                          <Calendar size={14} className="text-primary" /> Preferred Demo Date
                        </Label>
                        <Input type="date" value={form.preferredDemoDate} onChange={e => updateField('preferredDemoDate', e.target.value)} className="mt-1.5 h-12 rounded-xl border-border/60" />
                      </div>
                    </div>
                  </>
                )}

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
                  <Button type="submit" disabled={isSubmitting} className="flex-1 h-14 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-blue-500 shadow-lg hover:shadow-xl">
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={18} />
                        Request Demo
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
