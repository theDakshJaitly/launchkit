import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | LaunchX",
  description: "Terms of Service for LaunchX — production-ready Next.js templates.",
};

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold mb-2">Terms of Service</h1>
        <p className="text-zinc-500 text-[14px] mb-12">Effective April 5, 2026</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-white font-medium text-lg mb-3">1. Overview</h2>
            <p>
              LaunchX (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides production-ready Next.js starter
              templates sold as digital products. By purchasing or using our products, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">2. Products &amp; Pricing</h2>
            <p>
              LaunchX templates are sold as one-time purchases. Prices are listed in USD on our website. We reserve
              the right to change pricing at any time, but changes will not affect existing purchases.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">3. License</h2>
            <p className="mb-3">Upon purchase, you receive a perpetual, non-exclusive license to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Use the template source code in unlimited personal and commercial projects</li>
              <li>Modify the code to suit your needs</li>
              <li>Deploy applications built with the template without restriction</li>
            </ul>
            <p className="mt-3">You may <span className="text-white">not</span>:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Redistribute, resell, or share the template source code (modified or unmodified)</li>
              <li>Use the template to create a competing product or template marketplace offering</li>
              <li>Claim the original template design or code as your own creation for resale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">4. Payments</h2>
            <p>
              All payments are processed securely through DodoPayments. We do not store your payment card details.
              By making a purchase, you also agree to DodoPayments&apos; terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">5. Refund Policy</h2>
            <p>
              Because our products are digital goods with immediate access to source code, all sales are final.
              However, if you experience a technical issue that prevents you from using the product, contact us
              within 14 days of purchase and we will work to resolve the issue or provide a refund at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">6. Updates</h2>
            <p>
              Purchased templates include lifetime access to updates. We are not obligated to provide updates on
              any specific schedule, but we aim to keep templates current with their underlying frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">7. Intellectual Property</h2>
            <p>
              LaunchX retains ownership of the template source code and design. Your license grants usage rights,
              not ownership of the original work. Applications you build using our templates are entirely yours.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">8. Limitation of Liability</h2>
            <p>
              LaunchX provides templates &quot;as is&quot; without warranty of any kind. We are not liable for any
              damages arising from the use of our products, including but not limited to lost revenue, data loss,
              or business interruption. Our total liability shall not exceed the amount you paid for the product.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">9. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our products after changes constitutes
              acceptance of the updated terms. We will notify customers of material changes via email.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium text-lg mb-3">10. Contact</h2>
            <p>
              Questions about these terms? Reach out at{" "}
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
