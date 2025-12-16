"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"

const faqCategories = [
  {
    name: "Getting Started",
    faqs: [
      {
        question: "How do I sign up for CareTracker?",
        answer:
          "Simply click the 'Start Free Trial' button on our website, fill in your clinic details, and you'll have access to all features for 14 days. No credit card required to start.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Most clinics are up and running within 1-2 weeks. Our onboarding team will help you migrate data, train your staff, and customize the platform to your needs.",
      },
      {
        question: "Do you offer data migration services?",
        answer:
          "Yes! Our team can help migrate your existing patient records, appointments, and billing data from your current system. This service is included in Professional and Enterprise plans.",
      },
    ],
  },
  {
    name: "Pricing & Plans",
    faqs: [
      {
        question: "What's included in the free trial?",
        answer:
          "The 14-day free trial includes full access to all Professional plan features. You can test scheduling, patient management, billing, and more with no limitations.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle, and we'll prorate any differences.",
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer: "Yes, we offer a 17% discount when you choose annual billing. This applies to all plan tiers.",
      },
    ],
  },
  {
    name: "Security & Compliance",
    faqs: [
      {
        question: "Is CareTracker HIPAA compliant?",
        answer:
          "Yes, CareTracker is fully HIPAA compliant. We sign Business Associate Agreements (BAAs) with all customers and maintain strict security protocols to protect patient data.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "All data is stored in SOC 2 Type II certified data centers within the United States. We use AES-256 encryption at rest and TLS 1.3 for data in transit.",
      },
      {
        question: "Do you have audit logging?",
        answer:
          "Yes, we maintain comprehensive audit logs of all system access and changes. Logs are retained for 7 years and are available for compliance reviews.",
      },
    ],
  },
  {
    name: "Features & Integrations",
    faqs: [
      {
        question: "Does CareTracker integrate with my EHR?",
        answer:
          "CareTracker integrates with major EHR systems including Epic, Cerner, Athenahealth, and more. We also offer an open API for custom integrations.",
      },
      {
        question: "Can I customize the appointment types?",
        answer:
          "Yes! You can create unlimited appointment types with custom durations, colors, and booking rules. Each provider can have their own appointment configurations.",
      },
      {
        question: "Is telehealth included?",
        answer:
          "Telehealth is included in Professional and Enterprise plans. It features HD video, virtual waiting rooms, screen sharing, and secure file transfer.",
      },
    ],
  },
  {
    name: "Support",
    faqs: [
      {
        question: "What support options are available?",
        answer:
          "Basic plan includes email support. Professional adds live chat with 4-hour response times. Enterprise includes 24/7 phone support and a dedicated account manager.",
      },
      {
        question: "Do you offer training?",
        answer:
          "Yes! All plans include access to our video training library and knowledge base. Professional and Enterprise plans include live training sessions.",
      },
      {
        question: "How do I contact support?",
        answer:
          "You can reach support via email at support@caretracker.com, through in-app chat, or by phone (Enterprise plans). Our team is based in Australia and available during business hours.",
      },
    ],
  },
]

export function FAQPageContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A8FDC]/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#202020] mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-[#666666] mb-8" style={{ fontFamily: "Roboto" }}>
              Find answers to common questions about CareTracker
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8FDC]/20 focus:border-[#0A8FDC]"
                style={{ fontFamily: "Roboto" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#202020] mb-6" style={{ fontFamily: "Inter" }}>
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const itemId = `${catIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <div key={itemId} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-medium text-[#202020]" style={{ fontFamily: "Inter" }}>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#0A8FDC] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="px-6 pb-6 text-[#666666]" style={{ fontFamily: "Roboto" }}>
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#666666] text-lg" style={{ fontFamily: "Roboto" }}>
                No questions found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#202020] mb-4" style={{ fontFamily: "Inter" }}>
            Still have questions?
          </h2>
          <p className="text-[#666666] mb-8" style={{ fontFamily: "Roboto" }}>
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0A8FDC] text-white font-semibold rounded-full hover:bg-[#0A8FDC]/90 transition-colors"
            style={{ fontFamily: "Inter" }}
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  )
}
