import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar openContactForm={() => {}} />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy for GrowthRocket.io</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">Last Modified: April 19, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>GrowthRocket.io Limited ("GrowthRocket", "we", "us", or "our"), a company incorporated under the laws of the Republic of Cyprus, respects your privacy and is committed to protecting your personal data in accordance with this Privacy Policy.</p>
          
          <p>This document outlines the types of information we collect, how we use and protect it, and your rights regarding that information when you visit https://growthrocket.io (the “Website”), interact with our services, or communicate with us electronically.</p>

          <p>This Privacy Policy applies to data collected:</p>

          <ul>
            <li>Through this Website;</li>
            <li>Through email, messaging, and other communications with us;</li>
            <li>Via integrated platforms or services (e.g. Apple App Store, Google Play, RevenueCat, Stripe, or other analytics/monetization tools) connected to our funding services;</li>
            <li>When you interact with our content or advertisements on third-party platforms.</li>
          </ul>

          <p>This policy does not apply to data collected offline or via third-party websites that may be linked from our Website.</p>

          <p>By using this Website, you consent to the practices described in this Privacy Policy. We may update this policy periodically; continued use after updates implies acceptance.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children Under the Age of 18</h2>
          <p>Our Website and services are not intended for children under 18 years of age. We do not knowingly collect or solicit personal data from anyone under 18. If we learn that we have inadvertently collected such data, we will promptly delete it. Please contact us at support@growthrocket.io if you believe we have collected data from a minor.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>

          <ol>
            <li><strong>Identity & Contact Information:</strong><br />
              Name, business name, email address, phone number, billing address, etc.</li>
            <li><strong>Financial & Business Information:</strong><br />
              Data provided in funding applications including revenue, app store analytics, advertiser income, receivables, and integrations with platforms like Stripe, Apple, Google, or RevenueCat.</li>
            <li><strong>Technical Data:</strong><br />
              IP address, browser type, device data, usage logs, cookies, and referral sources.</li>
            <li><strong>Communication Data:</strong><br />
              Records of your interactions with us, including emails and chat messages.</li>
            <li><strong>User Contributions:</strong><br />
              Content submitted to public or shared sections of the Website, such as feedback or application attachments.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Collect Data</h2>
          <ul>
            <li>Directly from you via forms, funding applications, support tickets, or surveys.</li>
            <li>Automatically through cookies and similar technologies.</li>
            <li>From third-party services you authorize or connect (e.g. iTunes Connect, Google Play, Ad Networks).</li>
            <li>From marketing platforms when you interact with our ads or content.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Deliver and operate our Website and funding services;</li>
            <li>Assess and process funding applications;</li>
            <li>Provide support and customer service;</li>
            <li>Improve our Website, tools, and user experience;</li>
            <li>Comply with legal and regulatory obligations;</li>
            <li>Communicate important updates or marketing (you may opt-out anytime);</li>
            <li>Prevent fraud or misuse of our services.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies & Tracking</h2>
          <p>We use cookies, pixels, and beacons to collect information about your device and behavior on our Website. These technologies help us:</p>
          <ul>
            <li>Analyze traffic and performance;</li>
            <li>Save user preferences;</li>
            <li>Display relevant content or offers;</li>
            <li>Enable secure user sessions.</li>
          </ul>
          <p>You can manage cookie settings in your browser. Disabling cookies may affect functionality.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Disclosure of Information</h2>
          <p>We may share your data with:</p>
          <ul>
            <li>Our affiliates and employees;</li>
            <li>Payment processors and tech providers supporting our operations;</li>
            <li>Partners and platforms connected to your revenue streams (e.g. Apple, Google, ad networks);</li>
            <li>Legal or regulatory authorities when required;</li>
            <li>In the event of a business transfer (e.g. merger or acquisition).</li>
          </ul>
          <p>We do not sell your data. Any third parties we work with are contractually bound to protect your information.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">International Transfers</h2>
          <p>As a company based in Cyprus, your data may be processed in the EU and other jurisdictions. We ensure appropriate safeguards are in place to protect your information in line with GDPR requirements.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>We take reasonable technical and organizational measures to secure your data, including encryption of financial information and limiting access to authorized personnel. However, no system is fully immune to risks, and transmission over the internet is done at your own risk.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights (under GDPR)</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and review your personal data;</li>
            <li>Request correction or deletion;</li>
            <li>Withdraw consent where applicable;</li>
            <li>Object to processing or request restriction;</li>
            <li>Lodge a complaint with a data protection authority.</li>
          </ul>
          <p>To exercise your rights, email us at support@growthrocket.io.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p>We reserve the right to amend this Privacy Policy at any time. Updates will be posted on this page with a new “Last Modified” date. We may also notify you via email or the Website.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p>For questions about this Privacy Policy or your personal data, contact us at:</p>
          <p>📧 support@growthrocket.io</p>
          <p>🏢 GrowthRocket.io Limited</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
