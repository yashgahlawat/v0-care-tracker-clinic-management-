"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const integrations = [
  { name: "Epic", category: "EHR" },
  { name: "Cerner", category: "EHR" },
  { name: "Athenahealth", category: "EHR" },
  { name: "eClinicalWorks", category: "EHR" },
  { name: "Allscripts", category: "EHR" },
  { name: "NextGen", category: "EHR" },
  { name: "Quest Diagnostics", category: "Labs" },
  { name: "LabCorp", category: "Labs" },
  { name: "Surescripts", category: "E-Prescribing" },
  { name: "Stripe", category: "Payments" },
  { name: "Twilio", category: "Communications" },
  { name: "Zoom", category: "Telehealth" },
]

export const LandingIntegrations = () => {
  return (
    <section id="integrations" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block bg-[#1d326d]/10 text-[#1d326d] px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ fontFamily: "Figtree" }}
            >
              Integrations
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d326d] mb-6"
              style={{ fontFamily: "Figtree" }}
            >
              Connects with Your Existing Tools
            </h2>
            <p className="text-lg text-[#555555] leading-relaxed mb-8" style={{ fontFamily: "Inter" }}>
              CareTracker seamlessly integrates with over 100+ healthcare systems including EHRs, lab networks,
              e-prescribing platforms, and payment processors. No more switching between multiple systems.
            </p>

            {/* Integration Categories */}
            <div className="space-y-4 mb-8">
              {["EHR/EMR Systems", "Laboratory Networks", "Payment Processing", "Telehealth Platforms"].map(
                (category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#fcc41d]" />
                    <span className="text-[#1d326d] font-medium" style={{ fontFamily: "Figtree" }}>
                      {category}
                    </span>
                  </motion.div>
                ),
              )}
            </div>

            <button
              className="inline-flex items-center gap-2 bg-[#1d326d] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#1d326d]/90 transition-all duration-200"
              style={{ fontFamily: "Figtree" }}
            >
              View All Integrations
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Content - Integration Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1d326d]/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f8fafc] flex items-center justify-center mb-3 group-hover:bg-[#1d326d]/5 transition-colors">
                    <span className="text-lg font-bold text-[#1d326d]" style={{ fontFamily: "Figtree" }}>
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#1d326d] mb-1 truncate" style={{ fontFamily: "Figtree" }}>
                    {integration.name}
                  </p>
                  <p className="text-xs text-[#666666]" style={{ fontFamily: "Figtree" }}>
                    {integration.category}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fcc41d]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1d326d]/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
