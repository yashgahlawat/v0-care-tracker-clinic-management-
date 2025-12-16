import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | CareTracker",
  description: "CareTracker Privacy Policy - Learn how we protect your data and maintain HIPAA compliance.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#1d326d] mb-8">Privacy Policy</h1>
        <p className="text-[#666666] mb-6">Last updated: January 2024</p>

        <div className="space-y-8 text-[#444444]">
          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us, including name, email address, organization details,
              and any other information you choose to provide when using our clinic management platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">2. HIPAA Compliance</h2>
            <p className="leading-relaxed">
              CareTracker is fully HIPAA compliant. We implement administrative, physical, and technical safeguards to
              protect all Protected Health Information (PHI) in accordance with the Health Insurance Portability and
              Accountability Act.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, process transactions,
              send communications, and ensure the security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We use industry-standard encryption and security measures to protect your data. All data is encrypted at
              rest and in transit using AES-256 encryption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d326d] mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@caretracker.com or visit
              our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
