"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"

const highlights = ["HIPAA Compliant", "30-Day Free Trial", "No Credit Card Required"]

export const LandingHero = () => {
  const handleScrollToDemo = () => {
    const element = document.querySelector("#book-demo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f4ff]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1d326d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fcc41d]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1d326d]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#1d326d]/10 text-[#1d326d] px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ fontFamily: "Figtree" }}
            >
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              Trusted by 2,500+ Healthcare Providers
            </motion.div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d326d] leading-tight mb-6"
              style={{ fontFamily: "Figtree" }}
            >
              Streamline Your{" "}
              <span className="relative">
                <span className="relative z-10">Clinic Operations</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#fcc41d]/40 -z-0" />
              </span>{" "}
              with Ease
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-[#555555] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "Figtree" }}
            >
              The all-in-one platform for modern healthcare practices. Manage appointments, patient records, billing,
              and more — all in one secure, HIPAA-compliant solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToDemo}
                className="w-full sm:w-auto bg-[#1d326d] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                style={{ fontFamily: "Figtree" }}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white text-[#1d326d] px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 border-2 border-[#1d326d]/20 hover:border-[#1d326d]/40 transition-all duration-200"
                style={{ fontFamily: "Figtree" }}
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </motion.button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-[#555555]"
                  style={{ fontFamily: "Figtree" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1d326d]" style={{ fontFamily: "Figtree" }}>
                      Today's Overview
                    </h3>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                      December 5, 2025
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#22c55e] rounded-full" />
                    <span className="text-sm text-[#666666]" style={{ fontFamily: "Figtree" }}>
                      Live
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Appointments", value: "24", change: "+12%" },
                    { label: "Patients", value: "156", change: "+8%" },
                    { label: "Revenue", value: "$12.4k", change: "+15%" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="bg-[#f8fafc] rounded-xl p-4"
                    >
                      <p className="text-2xl font-bold text-[#1d326d]" style={{ fontFamily: "Figtree" }}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#666666]" style={{ fontFamily: "Figtree" }}>
                        {stat.label}
                      </p>
                      <span className="text-xs text-[#22c55e] font-medium">{stat.change}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Mini Schedule */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-[#1d326d]" style={{ fontFamily: "Figtree" }}>
                    Upcoming Appointments
                  </h4>
                  {[
                    { time: "9:00 AM", patient: "Sarah Johnson", type: "Check-up" },
                    { time: "10:30 AM", patient: "Michael Chen", type: "Follow-up" },
                    { time: "2:00 PM", patient: "Emily Davis", type: "Consultation" },
                  ].map((apt, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between bg-[#f8fafc] rounded-lg p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#1d326d]/10 flex items-center justify-center text-[#1d326d] font-semibold text-sm">
                          {apt.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1d326d]" style={{ fontFamily: "Figtree" }}>
                            {apt.patient}
                          </p>
                          <p className="text-xs text-[#666666]">{apt.type}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-[#1d326d]" style={{ fontFamily: "Figtree" }}>
                        {apt.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-[#fcc41d] text-[#1d326d] px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold" style={{ fontFamily: "Figtree" }}>
                  HIPAA Certified
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="absolute -bottom-4 -left-4 bg-white text-[#1d326d] px-4 py-3 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ fontFamily: "Figtree" }}>
                      99.9% Uptime
                    </p>
                    <p className="text-xs text-[#666666]">Always reliable</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
