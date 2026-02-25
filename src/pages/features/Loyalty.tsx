import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Gift, Star, Crown, ArrowRight, CheckCircle, Sparkles, Heart, Award, Cake, Users, Zap, TrendingUp, BarChart } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LoyaltyDashboardMockup = () => {
  const [activeTab, setActiveTab] = useState<'programs' | 'members'>('programs');

  const programs = [
    { name: 'Coffee Punch Card', type: 'Stamp', reward: 'Free Coffee', progress: '7/10', status: 'Active', color: 'bg-amber-500' },
    { name: 'Gold Membership', type: 'Tier', reward: '15% Off All Orders', progress: '850/1000 pts', status: 'Active', color: 'bg-yellow-500' },
    { name: 'Birthday Special', type: 'Event', reward: 'Free Dessert', progress: 'Auto', status: 'Active', color: 'bg-pink-500' },
    { name: 'Referral Bonus', type: 'Referral', reward: 'AED 25 Credit', progress: '3 referrals', status: 'Active', color: 'bg-primary' },
  ];

  const members = [
    { name: 'Sarah Ahmed', tier: 'Gold', points: 2450, visits: 34, lastVisit: '2 days ago' },
    { name: 'Mohammed Ali', tier: 'Silver', points: 1200, visits: 18, lastVisit: '1 week ago' },
    { name: 'Fatima Khan', tier: 'Platinum', points: 5800, visits: 72, lastVisit: 'Today' },
    { name: 'Omar Hassan', tier: 'Bronze', points: 350, visits: 6, lastVisit: '3 days ago' },
  ];

  const tierColors: Record<string, string> = {
    Bronze: 'bg-orange-100 text-orange-700',
    Silver: 'bg-gray-100 text-gray-700',
    Gold: 'bg-yellow-100 text-yellow-700',
    Platinum: 'bg-purple-100 text-purple-700',
  };

  return (
    <div className="bg-foreground rounded-2xl p-4 md:p-6 shadow-2xl max-w-3xl mx-auto">
      <div className="bg-background rounded-xl overflow-hidden">
        {/* Header */}
        <div className="border-b border-border px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Gift className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Swirl Loyalty</span>
          </div>
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            <button onClick={() => setActiveTab('programs')} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'programs' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}>Programs</button>
            <button onClick={() => setActiveTab('members')} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'members' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}>Members</button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 px-5 py-4 border-b border-border">
          {[
            { label: 'Active Members', value: '1,247', icon: Users },
            { label: 'Rewards Redeemed', value: '342', icon: Gift },
            { label: 'Retention Rate', value: '78%', icon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-5">
          {activeTab === 'programs' ? (
            <div className="space-y-3">
              {programs.map((p, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${p.color} flex items-center justify-center`}>
                      {p.type === 'Stamp' && <Star className="w-5 h-5 text-white" />}
                      {p.type === 'Tier' && <Crown className="w-5 h-5 text-white" />}
                      {p.type === 'Event' && <Cake className="w-5 h-5 text-white" />}
                      {p.type === 'Referral' && <Users className="w-5 h-5 text-white" />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.reward}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-foreground">{p.progress}</div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {members.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{m.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{m.name}</div>
                      <div className="text-xs text-muted-foreground">{m.visits} visits · {m.lastVisit}</div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground">{m.points.toLocaleString()} pts</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tierColors[m.tier]}`}>{m.tier}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Loyalty = () => {
  useScrollAnimation();

  const features = [
    { title: "Points Tracking", description: "Customers earn points on every order — tracked automatically with zero staff effort", icon: Star },
    { title: "Membership Tiers", description: "Bronze, Silver, Gold, Platinum — reward your top customers with escalating benefits", icon: Crown },
    { title: "Birthday & Anniversary", description: "Delight guests with automatic rewards on their special days", icon: Cake },
    { title: "CRM Automation", description: "Trigger personalized offers based on visit frequency, spend, and preferences", icon: Zap },
    { title: "Reward Redemption", description: "Seamless in-POS redemption flow — no codes, no friction", icon: Gift },
    { title: "Performance Analytics", description: "Track ROI, retention rates, and program engagement in real-time", icon: BarChart },
  ];

  const howItWorks = [
    { step: "1", title: "Customer Enrolls", description: "Quick sign-up via QR, POS, or online ordering — takes seconds" },
    { step: "2", title: "Points Accumulate", description: "Every order earns points automatically based on your rules" },
    { step: "3", title: "Rewards Unlock", description: "Customers get notified when rewards are available" },
    { step: "4", title: "Redemption at POS", description: "One-tap redemption during checkout — seamless and instant" },
  ];

  const stats = [
    { value: "3×", label: "More Repeat Visits", icon: TrendingUp },
    { value: "40%", label: "Higher Retention", icon: Heart },
    { value: "25%", label: "Increased AOV", icon: BarChart },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-background overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
          </div>
          <div className="container-custom">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Loyalty Program</span>
                </div>
                <h1 className="animate-on-scroll animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Turn Guests Into<br />
                  <span className="text-primary">Regulars</span>
                </h1>
                <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Build loyalty that lasts. Points, tiers, birthday rewards, and smart automation — all built into your POS.
                </p>
                <div className="animate-on-scroll animate-delay-300">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    get started for free
                  </CustomCTAButton>
                </div>
              </div>
              {/* Dashboard Mockup */}
              <div className="animate-on-scroll animate-delay-400">
                <LoyaltyDashboardMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center`}>
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Features</span>
                </div>
                <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Loyalty That Runs on Autopilot
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className={`animate-on-scroll animate-delay-${(index % 3 + 1) * 100} group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                    <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How Swirl Loyalty Works
                </h2>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {howItWorks.map((item, index) => (
                  <div key={index} className={`animate-on-scroll animate-delay-${(index + 1) * 100} text-center`}>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Build Lasting Loyalty?
              </h2>
              <p className="animate-on-scroll animate-delay-100 text-lg text-primary-foreground/80 mb-8">
                Join restaurants that turn first-time visitors into lifelong fans with Swirl Loyalty.
              </p>
              <div className="animate-on-scroll animate-delay-200">
                <a href="https://app.swirl.cx/register" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  get started for free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Loyalty;
