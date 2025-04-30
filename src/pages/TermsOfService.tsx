
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">Last Updated: April 30, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to Swirl.cx. These Terms of Service ("Terms") govern your access to and use of the Swirl.cx website, mobile applications, and other products and services (collectively, the "Services").
              </p>
              <p className="mt-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on our Services and updating the "Last Updated" date above. Your continued use of the Services after the changes are made constitutes your acceptance of the changes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Using Our Services</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">3.1 Eligibility</h3>
              <p>
                To use our Services, you must be at least 18 years old and have the power and authority to enter into these Terms. By using the Services, you represent that you meet these requirements.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">3.2 Account Registration</h3>
              <p>
                To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">3.3 Account Security</h3>
              <p>
                You are responsible for safeguarding your account credentials and for all activities that occur under your account. Notify us immediately if you become aware of any unauthorized use of your account.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
              <p>
                4.1 By subscribing to our Services, you agree to pay all fees applicable to your subscription plan. We may change our fees at any time, but changes will not apply retroactively.
              </p>
              <p className="mt-4">
                4.2 Unless otherwise stated, all fees are in UAE Dirhams (AED) and are non-refundable.
              </p>
              <p className="mt-4">
                4.3 You authorize us to charge your designated payment method for all applicable fees.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property Rights</h2>
              <p>
                5.1 Our Services and all content, features, and functionality thereof, including but not limited to all information, software, text, graphics, logos, images, and the design, selection, and arrangement thereof, are owned by Swirl.cx, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mt-4">
                5.2 These Terms do not grant you any right, title, or interest in or to our Services or any content on the Services, except for the limited right to access and use the Services as set forth herein.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Prohibited Uses</h2>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use the Services in any manner that could disable, overburden, damage, or impair the Services</li>
                <li>Use any robot, spider, or other automatic device to access the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Use the Services to transmit any unlawful, infringing, defamatory, obscene, or otherwise objectionable content</li>
                <li>Use the Services for any purpose that is unlawful or prohibited by these Terms</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your access to all or part of the Services, without notice, for any reason, including if we believe you have violated these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL SWIRL.CX, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without giving effect to any principles of conflicts of law.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@swirl.cx<br />
                <strong>Address:</strong> Al Jaber Jewelley Building, Khalidya, Abu Dhabi<br />
                <strong>Phone:</strong> +971 54 385 3877
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
