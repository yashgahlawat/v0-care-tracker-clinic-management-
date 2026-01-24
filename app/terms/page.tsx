import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CareTracker",
  description:
    "CareTracker Terms of Service - Comprehensive terms and conditions for using our B2B clinic management platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last updated: January 25, 2024</p>

        <div className="prose prose-blue max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing or using the CareTracker clinic management platform
              ("Service"), you ("Client" or "User") agree to be bound by these
              Terms of Service ("Terms"). If you do not agree to these Terms,
              you must not access or use the Service. These Terms constitute a
              binding legal agreement between you and CareTracker Inc.
              ("Company").
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you are entering into these Terms on behalf of a company,
              organization, or other legal entity, you represent that you have
              the authority to bind such entity to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Definitions
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <strong>"Service"</strong> refers to the CareTracker clinic
                management software, including all features, tools, and data
                provided via our website and applications.
              </li>
              <li>
                <strong>"Client Data"</strong> means all data, information, and
                material submitted by the Client to the Service, including
                Protected Health Information (PHI).
              </li>
              <li>
                <strong>"Authorized Users"</strong> means employees,
                contractors, or agents of the Client who are authorized to use
                the Service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Access and Use
            </h2>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              3.1 License Grant
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Subject to your compliance with these Terms, CareTracker grants
              you a limited, non-exclusive, non-transferable, non-sublicensable
              right to access and use the Service solely for your internal
              business operations.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              3.2 Restrictions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You shall not: (a) reverse engineer, decompile, or disassemble the
              Service; (b) use the Service to build a competitive product; (c)
              misuse the Service in any way that violates applicable laws or
              regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Client Data and Privacy (HIPAA)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>4.1 Ownership:</strong> You retain all rights, title, and
              interest in and to your Client Data.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>4.2 HIPAA Compliance:</strong> To the extent that Client
              Data includes Protected Health Information (PHI) subject to the
              Health Insurance Portability and Accountability Act of 1996
              ("HIPAA"), Use of the Service is also governed by the Business
              Associate Agreement (BAA) entered into between the parties.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>4.3 Data Security:</strong> CareTracker maintains
              administrative, physical, and technical safeguards designed to
              protect the security, confidentiality, and integrity of Client
              Data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Fees and Payment
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fees for the Service are set forth in the applicable Order Form or
              pricing page. All fees are non-refundable unless otherwise
              expressly stated. Late payments may be subject to interest
              charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Confidentiality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Each party agrees to protect the confidentiality of the other
              party's Confidential Information with the same degree of care that
              it uses to protect its own confidential information of like kind,
              but in no event less than reasonable care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              CareTracker retains all rights, title, and interest in and to the
              Service, including all related intellectual property rights. No
              rights are granted to you other than as expressly set forth
              herein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Warranties and Disclaimers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>8.1 Warranty:</strong> CareTracker warrants that the
              Service will perform materially in accordance with the user
              documentation.
            </p>
            <p className="text-gray-600 leading-relaxed uppercase">
              <strong>8.2 DISCLAIMER:</strong> EXCEPT AS EXPRESSLY PROVIDED
              HEREIN, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE".
              CARETRACKER DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED,
              STATUTORY OR OTHERWISE, INCLUDING ANY WARRANTIES OF
              MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES.
              CARETRACKER'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO
              THIS AGREEMENT SHALL NOT EXCEED THE AMOUNT PAID BY CLIENT
              HEREUNDER IN THE 12 MONTHS PRECEDING THE INCIDENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Term and Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This Agreement commences on the date you first accept it and
              continues until all subscriptions hereunder have expired or have
              been terminated. Either party may terminate this Agreement for
              material breach if such breach remains uncured for 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact our
              legal team at:
              <br />
              <a
                href="mailto:legal@caretracker.com"
                className="text-blue-600 hover:underline">
                legal@caretracker.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
