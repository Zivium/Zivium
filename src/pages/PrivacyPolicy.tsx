
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&to=hello.zivium@gmail.com', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 px-4 py-12 bg-zivium-off-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-zivium-navy mb-8">
              Zivium Privacy Policy
            </h1>
            
            <div className="text-zivium-navy space-y-6">
              <p className="text-sm text-gray-600 mb-8">
                <strong>Effective Date:</strong> June 29, 2025
              </p>
              
              <p>
                This Privacy Policy describes how Zivium ("we," "us," or "our") collects, uses, and shares your information when you visit our landing page (the "Site") and register for our waitlist. We are committed to protecting your privacy and being transparent about our data practices.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information from you when you voluntarily provide it to us through our waitlist registration form. This may include:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Contact Information:</strong> Your first name, last name, email address, and phone number (including country code).</li>
                  <li><strong>Professional Information (Conditional):</strong>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>If you indicate you are an Investor: Your approximate number of investments.</li>
                      <li>If you indicate you are a Founder: Your company name.</li>
                    </ul>
                  </li>
                  <li><strong>Problem Statement:</strong> Information about the problem you wish to solve with Zivium.</li>
                  <li><strong>Automatically Collected Information:</strong> When you visit our Site, we may automatically collect certain information about your device and usage, such as your IP address, browser type, operating system, and how you interact with our Site. This information helps us understand user behavior and improve our Site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for the following purposes:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Waitlist Management:</strong> To register you for our waitlist and manage your position.</li>
                  <li><strong>Communication:</strong> To send you updates about Zivium, including news, product developments, early access invitations, and launch announcements.</li>
                  <li><strong>Product Development and Optimization:</strong> A key purpose for collecting your data is to understand your needs and preferences. We use the information you provide (including your role and stated problems) to inform our product development, enhance our platform features, and tailor Zivium to better serve our future users (investors and founders). This helps us build a more relevant and impactful solution.</li>
                  <li><strong>Analytics and Improvement:</strong> To analyze Site usage, identify trends, and improve the functionality and user experience of our Site.</li>
                  <li><strong>Security:</strong> To maintain the security and integrity of our Site and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">3. How We Share Your Information</h2>
                <p className="mb-4">We do not sell your personal information. We may share your information in the following limited circumstances:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as data storage (e.g., Airtable), email communication, and analytics. These providers are obligated to protect your information and use it only for the purposes for which we disclose it to them.</li>
                  <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency request).</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">4. Data Security</h2>
                <p>
                  We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is entirely secure, and we cannot guarantee the absolute security of your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">5. Your Rights</h2>
                <p className="mb-4">You have certain rights regarding your personal information, which may include:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Access:</strong> To request a copy of the personal information we hold about you.</li>
                  <li><strong>Correction:</strong> To request that we correct any inaccurate or incomplete personal information.</li>
                  <li><strong>Deletion:</strong> To request that we delete your personal information, subject to certain exceptions.</li>
                  <li><strong>Opt-Out:</strong> To unsubscribe from our communications at any time by following the instructions provided in our emails.</li>
                </ul>
                <p className="mt-4">To exercise any of these rights, please contact us using the details below.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">6. Data Retention</h2>
                <p>
                  We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for product development and to keep you informed about Zivium, or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">7. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post any changes on this page, and the "Effective Date" at the top will indicate when the policy was last revised.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:{' '}
                  <button 
                    onClick={handleContactClick}
                    className="text-zivium-gold hover:underline cursor-pointer"
                  >
                    hello.zivium@gmail.com
                  </button>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
