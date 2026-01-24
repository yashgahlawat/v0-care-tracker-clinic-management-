import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CareTracker",
  description:
    "CareTracker Privacy Policy - Comprehensive details on data collection, HIPAA compliance, and data protection for our clinic management platform.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: January 25, 2024</p>

        <div className="prose prose-blue max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              CareTracker ("we", "our", or "us") is committed to protecting the
              privacy and security of your information. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our clinic management platform
              ("Service"). We are dedicated to maintaining the confidentiality
              of Protected Health Information (PHI) in compliance with the
              Health Insurance Portability and Accountability Act (HIPAA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">
                2.1 Account Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When you register for an account, we collect business contact
                information such as name, email address, phone number, job
                title, and organization details.
              </p>

              <h3 className="text-xl font-medium text-gray-800">
                2.2 Patient Data (PHI)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In the course of providing our Service, we may process Patient
                Data, including PHI, on your behalf. We process such data
                strictly in accordance with our Business Associate Agreement
                (BAA) with you.
              </p>

              <h3 className="text-xl font-medium text-gray-800">
                2.3 Usage Data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We automatically collect information about how you interact with
                our Service, including log files, device information, and
                performance metrics, to improve our platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>To provide, maintain, and improve the Service.</li>
              <li>To process transactions and manage your account.</li>
              <li>
                To communicate with you about updates, security alerts, and
                support messages.
              </li>
              <li>
                To comply with legal obligations and enforce our Terms of
                Service.
              </li>
              <li>To ensure the security and integrity of our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Sharing and Disclosure
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell your personal data. We may share information in the
              following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <strong>Service Providers:</strong> With third-party vendors who
                perform services on our behalf (e.g., hosting, analytics),
                subject to strict confidentiality obligations and BAAs where
                applicable.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required to do so by law
                or in response to valid requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, sale of assets, or acquisition of all or a portion of
                our business.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. HIPAA and Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>5.1 Security Measures:</strong> We implement
              industry-standard administrative, physical, and technical
              safeguards. This includes AES-256 encryption for data at rest and
              TLS 1.2+ for data in transit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>5.2 Access Controls:</strong> We enforce strict role-based
              access controls (RBAC) and multi-factor authentication (MFA) for
              internal access to production systems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>5.3 Incident Response:</strong> We maintain a
              comprehensive incident response plan to promptly detect, analyze,
              and respond to security incidents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your information only for as long as is necessary for
              the purposes set out in this Privacy Policy, or as needed to
              provide you with the Service, and to comply with our legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on your jurisdiction, you may have rights regarding your
              personal data, including the right to access, correct, or delete
              your personal information. Please contact us to exercise these
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data
              practices, please contact our Data Protection Officer at:
              <br />
              <a
                href="mailto:privacy@caretracker.com"
                className="text-blue-600 hover:underline">
                privacy@caretracker.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
