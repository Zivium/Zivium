
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
              Zivium Terms of Service
            </h1>
            
            <div className="text-zivium-navy space-y-6">
              <p className="text-sm text-gray-600 mb-8">
                <strong>Effective Date:</strong> June 29, 2025
              </p>
              
              <p>
                Welcome to Zivium's landing page! These Terms of Service ("Terms") govern your use of our website ("Site") and your registration for our waitlist. By accessing or using our Site and submitting your information to our waitlist, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our Site or join our waitlist.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">1. Waitlist Registration</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Purpose:</strong> The waitlist allows you to express your interest in Zivium and receive updates regarding our product development and launch. Registration does not guarantee access to any future Zivium product or service.</li>
                  <li><strong>Accuracy of Information:</strong> You agree to provide accurate, current, and complete information when registering for the waitlist. You also agree to update this information if it changes.</li>
                  <li><strong>Eligibility:</strong> By joining the waitlist, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms.</li>
                  <li><strong>No Guarantee:</strong> Zivium makes no guarantee regarding the timeline for product launch, feature availability, or your selection for early access programs.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">2. Use of the Site</h2>
                <p className="mb-4"><strong>Permitted Use:</strong> You may use the Site solely for your personal, non-commercial use to learn about Zivium and register for our waitlist.</p>
                <p className="mb-4"><strong>Prohibited Conduct:</strong> You agree not to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Use the Site for any illegal purpose or in violation of any local, state, national, or international law.</li>
                  <li>Engage in any activity that interferes with or disrupts the Site or the servers and networks connected to the Site.</li>
                  <li>Attempt to gain unauthorized access to any portion of the Site or any other systems or networks connected to the Site.</li>
                  <li>Transmit any worms, viruses, or any code of a destructive nature.</li>
                  <li>Use any automated system, including without limitation "robots," "spiders," or "offline readers," to access the Site in a manner that sends more request messages to the Zivium servers than a human can reasonably produce in the same period by using a conventional web browser.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">3. Intellectual Property</h2>
                <p>
                  The Site and its original content, features, and functionality are and will remain the exclusive property of Zivium and its licensors. The Site is protected by copyright, trademark, and other laws of both the Indian and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Zivium.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">4. Disclaimers</h2>
                <p>
                  THE SITE AND YOUR WAITLIST REGISTRATION ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ZIVIUM MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES, INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR OTHER VIOLATION OF RIGHTS. FURTHER, ZIVIUM DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS CONCERNING THE ACCURACY, LIKELY RESULTS, OR RELIABILITY OF THE USE OF THE MATERIALS ON ITS SITE OR OTHERWISE RELATING TO SUCH MATERIALS OR ON ANY SITES LINKED TO THIS SITE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">5. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL ZIVIUM OR ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SITE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SITE; (III) ANY CONTENT OBTAINED FROM THE SITE; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">6. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless Zivium and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Site or your violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">7. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">8. Changes to These Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-zivium-navy mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:{' '}
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

export default TermsOfService;
