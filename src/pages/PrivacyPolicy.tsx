
import React from 'react';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24">
        <section className="py-10 border-b border-border/50">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mt-2">Swirl Dine (Captain / Waiter App)</p>
            <p className="text-sm text-muted-foreground mt-1">Last Updated: March 13, 2026</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-10 text-foreground">

              <div>
                <h2 className="text-2xl font-bold mt-0 mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  Swirl Technologies Ltd. ("Swirl", "we", "our", or "us") respects your privacy and is committed to protecting information processed through the Swirl Dine mobile application.
                </p>
                <p className="text-muted-foreground">
                  This Privacy Policy explains how information is collected, used, and protected when the application is used by restaurant staff or authorized personnel.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">About Swirl Dine</h2>
                <p className="text-muted-foreground mb-4">
                  Swirl Dine is a restaurant operations application designed to help restaurant staff:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Place dine-in orders</li>
                  <li>Manage takeaway orders</li>
                  <li>Send orders to kitchen display systems</li>
                  <li>Manage tables and reservations</li>
                  <li>Synchronize operational data with the Swirl platform</li>
                </ul>
                <p className="text-muted-foreground mt-3">The application is intended only for restaurant personnel.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">Account & Business Information</h3>
                <p className="text-muted-foreground mb-2">Restaurants may provide:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Restaurant name</li>
                  <li>Branch information</li>
                  <li>Staff login credentials</li>
                  <li>Staff permission levels</li>
                  <li>Restaurant contact information</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Operational Data</h3>
                <p className="text-muted-foreground mb-2">The application processes restaurant operational data including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Orders placed through the application</li>
                  <li>Menu selections</li>
                  <li>Table numbers</li>
                  <li>Timestamps</li>
                  <li>Order modifications</li>
                  <li>Payment status where applicable</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Device Information</h3>
                <p className="text-muted-foreground mb-2">The system may collect:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Device type</li>
                  <li>Operating system</li>
                  <li>App version</li>
                  <li>Diagnostic logs</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Support Communications</h3>
                <p className="text-muted-foreground mb-2">If support is contacted we may collect:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Support request details</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How Information Is Used</h2>
                <p className="text-muted-foreground mb-2">Information is used strictly for operating the platform including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Processing restaurant orders</li>
                  <li>Maintaining system functionality</li>
                  <li>Improving performance</li>
                  <li>Diagnosing technical issues</li>
                  <li>Providing support</li>
                  <li>Ensuring platform security</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Ownership</h2>
                <p className="text-muted-foreground">
                  All restaurant operational data belongs to the restaurant operator using the Swirl platform. Swirl acts as a technology service provider.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
                <p className="text-muted-foreground mb-2">Swirl does not sell personal information. Data may be shared only with:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>The restaurant operator</li>
                  <li>Trusted infrastructure providers</li>
                  <li>Legal authorities when required</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Security</h2>
                <p className="text-muted-foreground mb-2">Swirl implements industry-standard security practices including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Encrypted communication (HTTPS / TLS)</li>
                  <li>Secure infrastructure</li>
                  <li>Access control systems</li>
                  <li>Role-based permissions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                <p className="text-muted-foreground">
                  Data is retained only for operational and legal purposes. Restaurants may request deletion subject to regulatory requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Swirl services are not intended for individuals under 18.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">International Processing</h2>
                <p className="text-muted-foreground">
                  Swirl operates globally and data may be processed through secure cloud infrastructure in multiple jurisdictions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Third-Party Integrations</h2>
                <p className="text-muted-foreground mb-2">Swirl may integrate with services including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Payment gateways</li>
                  <li>POS devices</li>
                  <li>Ordering platforms</li>
                  <li>Accounting systems</li>
                </ul>
                <p className="text-muted-foreground mt-2">Each provider maintains its own privacy policy.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  <strong>Swirl Technologies LLC</strong><br />
                  Website: <a href="https://swirl.cx" className="text-primary hover:underline">https://swirl.cx</a><br />
                  Email: <a href="mailto:abid@swirl.cx" className="text-primary hover:underline">abid@swirl.cx</a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
