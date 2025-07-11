export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <p className="mb-6">
                This Privacy Policy describes how [Company Name] ("we", "our", or "us") collects, uses, and shares your personal information when you use our website and services.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Account information (email address, name, password)</li>
                <li>Website and announcement bar configurations</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences</li>
                <li>Support requests and correspondence</li>
              </ul>
              <p>
                We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, and usage patterns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Data</h2>
              <p className="mb-4">We use your personal information to:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-4">Our legal basis for collecting and using personal information depends on the specific context:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li><strong>Contract:</strong> Processing necessary to provide our services to you</li>
                <li><strong>Legitimate Interest:</strong> Improving our services, security, and customer support</li>
                <li><strong>Consent:</strong> Marketing communications (where required)</li>
                <li><strong>Legal Obligation:</strong> Compliance with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Third Parties</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>With service providers who help us operate our business</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to provide and improve our services. This includes:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Essential cookies for basic website functionality</li>
                <li>Analytics cookies to understand how you use our services</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Some features may not work properly if you disable cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. We will delete or anonymize your information when it is no longer needed, unless we are required to retain it for legal reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights (GDPR)</h2>
              <p className="mb-4">If you are located in the EU, you have the following rights:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where applicable</li>
              </ul>
              <p>
                You also have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">[Company Name]</p>
                <p>Email: [contact@email.com]</p>
                <p>For GDPR-related requests, please clearly indicate your request type in the subject line.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the new policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 