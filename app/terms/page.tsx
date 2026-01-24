import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CareTracker",
  description:
    "CareTracker Terms of Service - Terms and conditions for using our clinic management platform.",
};

export default function TermsPage() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#1d326d] mb-8">
          Terms of Service
        </h1>
        <p className="text-[#666666] mb-6">Last updated: January 2024</p>

        <div className="space-y-8 text-[#444444]">
          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using CareTracker services, you agree to be bound
              by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">
              2. Use of Services
            </h2>
            <p className="leading-relaxed">
              You may use our services only for lawful purposes and in
              accordance with these Terms. You agree not to use our services in
              any way that violates applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">
              3. Account Responsibilities
            </h2>
            <p className="leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">
              4. Service Availability
            </h2>
            <p className="leading-relaxed">
              We strive to maintain 99.9% uptime but do not guarantee
              uninterrupted access to our services. We may modify or discontinue
              services at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">
              5. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              CareTracker shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use
              of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">
              6. Contact
            </h2>
            <p className="leading-relaxed">
              For questions about these Terms, contact us at
              legal@caretracker.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
