"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
type FAQItem = {
  question: string;
  answer: string;
};
type FAQSectionProps = {
  title?: string;
  faqs?: FAQItem[];
};

const defaultFAQs: FAQItem[] = [
  {
    question: "Is CareTracker HIPAA compliant?",
    answer:
      "Yes, CareTracker is fully HIPAA compliant. We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and Business Associate Agreements (BAAs). All patient data is encrypted at rest and in transit, and we maintain SOC 2 Type II certification.",
  },
  {
    question: "How does CareTracker integrate with existing EHR/EMR systems?",
    answer:
      "CareTracker offers native integrations with major EHR/EMR systems including Epic, Cerner, Athenahealth, and many others. We use HL7 FHIR standards for seamless data exchange. Our integration team provides white-glove setup assistance, and most integrations are completed within 2-4 weeks.",
  },
  {
    question: "Can CareTracker handle multiple clinic locations?",
    answer:
      "Absolutely. Our Professional and Enterprise plans support multi-location practices with centralized management. You can view real-time dashboards across all locations, manage staff schedules, and access consolidated reporting. Each location can have customized workflows while maintaining brand consistency.",
  },
  {
    question: "What kind of training and support do you provide?",
    answer:
      "We provide comprehensive onboarding including live training sessions, video tutorials, and documentation. Starter plans include email support, Professional plans add priority support with faster response times, and Enterprise plans include a dedicated account manager plus 24/7 phone support with guaranteed SLAs.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Most practices are up and running within 1-2 weeks. This includes data migration, staff training, and workflow configuration. For larger multi-location practices with complex EHR integrations, implementation typically takes 4-6 weeks. Our team manages the entire process to minimize disruption to your practice.",
  },
];
export const FAQSection = ({
  title = "Frequently asked questions",
  faqs = defaultFAQs,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-full py-16 px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight sticky top-24"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[#e5e5e5] last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className="text-lg leading-7 text-[#202020] pr-8"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "400",
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex-shrink-0"
                    >
                      <Plus
                        className="w-6 h-6 text-[#202020]"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p
                            className="text-lg leading-6 text-[#666666]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
