import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LaunchX",
  description: "Privacy Policy for LaunchX — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-zinc-500 text-[14px] mb-12">Effective April 5, 2026</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-white font-medium text-lg mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect the following information when you use LaunchX:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><span className="text-white">Account information</span> — name and email address, provided when you sign up or make a purchase</li>
              <li><span className="text-white">Payment information</span> — processed securely by DodoPayments; we do not store card numbers or bank details</li>
              <li><span className="text-white">Usage data</span> — anonymous analytics collected via Vercel Analytics and Vercel Speed Insights to understand how visitors use our site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>To fulfill your purchase and deliver template access</li>
              <li>To send transactional emails (purchase confirmation, product updates)</li>
              <li>To respond to support requests</li>
              <li>To improve our website and products based on aggregated usage patterns</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">3. Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services that may process your data:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><span className="text-white">DodoPayments</span> — payment processing</li>
              <li><span className="text-white">Resend</span> — transactional email delivery</li>
              <li><span className="text-white">Vercel</span> — website hosting, analytics, and performance monitoring</li>
            </ul>
            <p className="mt-3">
              Each service has its own privacy policy. We encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">4. Cookies</h2>
            <p>
              We use minimal cookies required for site functionality and anonymous analytics via Vercel. We do not
              use advertising cookies or third-party tracking scripts.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">5. Data Retention</h2>
            <p>
              We retain your account information for as long as necessary to provide product access and support.
              Purchase records are retained for accounting and legal requirements. You can request deletion of
              your personal data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">7. Security</h2>
            <p>
              We implement reasonable security measures to protect your information. Payment data is handled
              entirely by DodoPayments and never touches our servers. However, no method of electronic transmission
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of material changes via email
              or a notice on our website. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">9. Contact</h2>
            <p>
              Questions about your privacy? Reach out at{" "}
              <a href="mailto:thedakshjaitly@gmail.com" className="text-white underline underline-offset-4 hover:text-zinc-300 transition-colors">
                thedakshjaitly@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
