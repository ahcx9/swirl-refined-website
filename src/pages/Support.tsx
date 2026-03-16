import React from 'react';
import Footer from '@/components/Footer';
import { 
  Mail, 
  Globe, 
  MessageCircle, 
  UserCog, 
  ShoppingCart, 
  Monitor, 
  UtensilsCrossed, 
  Smartphone, 
  Clock, 
  Briefcase,
  HelpCircle,
  ArrowRight,
  Tablet,
  Send,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const supportCategories = [
  {
    icon: UserCog,
    title: 'Account & Login Issues',
    items: ['Staff login problems', 'Password reset requests', 'Access permissions'],
  },
  {
    icon: ShoppingCart,
    title: 'Orders & Restaurant Operations',
    items: ['Placing dine-in orders', 'Takeaway order management', 'Table management assistance'],
  },
  {
    icon: Monitor,
    title: 'POS & Kitchen Display Integration',
    items: ['Order syncing with POS', 'Kitchen Display System (KDS) issues', 'Printer connectivity'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Menu & Restaurant Setup',
    items: ['Menu item configuration', 'Modifier setup', 'Category management'],
  },
  {
    icon: Smartphone,
    title: 'Device & App Issues',
    items: ['Application installation', 'iPad compatibility', 'App performance troubleshooting'],
  },
];

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="bg-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Swirl Support
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Welcome to Swirl Support. Our team is here to help restaurants and staff get the most out of the Swirl Dine application and the Swirl restaurant management platform.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get in Touch</h2>
              <p className="text-muted-foreground text-base md:text-lg">Choose the channel that works best for you.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {/* Email */}
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-6">abid@swirl.cx</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <a href="mailto:abid@swirl.cx" className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Website */}
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Website</h3>
                  <p className="text-muted-foreground text-sm mb-6">https://swirl.cx</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <a href="https://swirl.cx" className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                    <MessageCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp Support</h3>
                  <p className="text-muted-foreground text-sm mb-6">+971 54 387 3877</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <a href="https://wa.me/971543873877" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Our support team typically responds within 24 hours.
            </p>
          </div>
        </section>

        {/* What We Can Help With */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What We Can Help With</h2>
              <p className="text-muted-foreground text-base md:text-lg">Browse common support categories below.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {supportCategories.map((category) => (
                <Card key={category.title} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground">{category.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Swirl Dine App Information */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-white border border-gray-100 shadow-lg overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Tablet className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">Swirl Dine</h2>
                      <p className="text-sm text-muted-foreground">iOS · Restaurant captain & waiter order management</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The Swirl Dine application allows restaurant staff to:
                  </p>

                  <ul className="space-y-3 mb-2">
                    {[
                      'Place dine-in orders',
                      'Manage takeaway orders',
                      'Send orders directly to kitchen systems',
                      'Manage tables and reservations',
                      'Sync orders with the Swirl POS platform',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business & Sales Enquiries */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-5">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Business & Sales Enquiries</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you are interested in using the Swirl restaurant management platform for your restaurant or chain, please contact:
              </p>
              <a 
                href="mailto:abid@swirl.cx" 
                className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
              >
                <Mail className="w-5 h-5" />
                abid@swirl.cx
              </a>
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-5">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Response Times</h2>
              <p className="text-muted-foreground leading-relaxed">
                Support requests are typically answered within 24 hours, although response times may vary during peak periods.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
