
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">Last Updated: April 30, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                At Swirl.cx ("we," "our," or "us"), we are committed to protecting your privacy and safeguarding your data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our restaurant management platform, website, and related services (collectively, the "Services").
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">2.1 Information You Provide to Us</h3>
              <p>
                When you register for our Services, we collect information that identifies you, such as your name, email address, phone number, and payment information. We also collect information when you:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Create or modify your account profile</li>
                <li>Place orders through our platform</li>
                <li>Complete forms on our website</li>
                <li>Communicate with our customer service team</li>
                <li>Subscribe to our newsletters</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">2.2 Information We Collect Automatically</h3>
              <p>
                When you use our Services, we may collect information automatically, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Log information (IP address, browser type, pages visited)</li>
                <li>Device information (hardware model, operating system)</li>
                <li>Usage information (features used, actions taken)</li>
                <li>Location information (with your permission)</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use your information for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send transaction notifications</li>
                <li>Communicate with you about products, services, promotions, and events</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent security incidents and fraudulent transactions</li>
                <li>Personalize your experience and provide content and features relevant to your interests</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners, with your consent</li>
                <li>In response to legal process or request from authorities</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, sale, or acquisition of all or a portion of our company</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access and updating your information</li>
                <li>Deletion of your information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, no electronic transmission or storage technology is completely secure. We cannot guarantee that information you transmit to us will remain secure.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through the Services prior to the changes becoming effective.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@swirl.cx<br />
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

export default PrivacyPolicy;
