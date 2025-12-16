"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap, HeartHandshake, Award, ArrowRight } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get up and running in less than 24 hours. Our onboarding team handles data migration and training.",
    stat: "24hrs",
    statLabel: "Average Setup Time",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see an average 35% increase in revenue and 40% reduction in administrative costs.",
    stat: "35%",
    statLabel: "Revenue Increase",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "24/7 customer support with healthcare-trained specialists who understand your needs.",
    stat: "24/7",
    statLabel: "Support Available",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Rated #1 clinic management software by Healthcare Tech Review for 3 consecutive years.",
    stat: "#1",
    statLabel: "Rated Software",
  },
]

const stats = [
  { value: "2,500+", label: "Healthcare Providers" },
  { value: "5M+", label: "Patients Managed" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "4.9/5", label: "Customer Rating" },
]

export const LandingWhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-[#0A8FDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-16"
        >
          <span
            className="inline-block bg-[#4CAF50]/20 text-[#4CAF50] px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-xs lg:text-sm font-semibold mb-3 lg:mb-4"
            style={{ fontFamily: "Inter" }}
          >
            Why Choose CareTracker
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6"
            style={{ fontFamily: "Inter" }}
          >
            Built by Healthcare Professionals, For Healthcare Professionals
          </h2>
          <p
            className="text-base lg:text-lg text-white/70 leading-relaxed px-4 sm:px-0"
            style={{ fontFamily: "Roboto" }}
          >
            We understand the unique challenges of running a healthcare practice. That's why we've built a solution that
            actually works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-12 lg:mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-5 lg:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-5">
                {/* Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl bg-[#4CAF50] flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2" style={{ fontFamily: "Inter" }}>
                    {reason.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base text-white/70 leading-relaxed mb-3 lg:mb-4"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {reason.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl lg:text-3xl font-bold text-[#4CAF50]" style={{ fontFamily: "Inter" }}>
                      {reason.stat}
                    </span>
                    <span className="text-xs lg:text-sm text-white/50">{reason.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl lg:rounded-2xl p-5 lg:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4CAF50] mb-1"
                  style={{ fontFamily: "Inter" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs lg:text-sm text-white/60" style={{ fontFamily: "Roboto" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-8 lg:mt-12"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#book-demo")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 bg-[#4CAF50] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-[#4CAF50]/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "Inter" }}
          >
            See It In Action
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
