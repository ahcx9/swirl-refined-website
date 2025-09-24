
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import CustomCTAButton from '@/components/CustomCTAButton';
import { Link } from 'react-router-dom';
import { CalendarDays, Users, BellRing, CalendarClock, CalendarCheck, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
const Reservations = () => {
  const features = [{
    title: "Smart Table Management",
    description: "Optimize seating arrangements and manage table turnover efficiently.",
    icon: Users
  }, {
    title: "Online Booking",
    description: "Allow customers to make reservations 24/7 through your website or app.",
    icon: CalendarDays
  }, {
    title: "Automated Notifications",
    description: "Send confirmation and reminder messages to guests automatically.",
    icon: BellRing
  }, {
    title: "Waitlist Management",
    description: "Handle walk-ins and waitlists with real-time updates.",
    icon: CalendarClock
  }, {
    title: "Guest Profiles",
    description: "Track preferences and special requests for personalized service.",
    icon: CalendarCheck
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-36">
        <section className="bg-purple-light/10 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Table Reservation System</h1>
              <p className="text-lg text-swirl-gray mb-8">
                Streamline your restaurant's reservation process with our advanced booking system. Manage tables, handle waitlists, and deliver exceptional guest experiences.
              </p>
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                Get Started for Free
              </CustomCTAButton>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(feature => <Card key={feature.title} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-6 w-6 text-purple" />
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>)}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-light/20 to-purple/10 py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Elevate Your Reservation Experience</h2>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                  <p>Integrate with your existing systems including POS, website, and social media platforms for unified operations.</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Custom Booking Rules</h3>
                  <p>Set up custom booking policies, time slots, and special event handling to match your restaurant's needs.</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
                  <p>Get insights into booking patterns, no-show rates, and peak hours to optimize your operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Reservations;
