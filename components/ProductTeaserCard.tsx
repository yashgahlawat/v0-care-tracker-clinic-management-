"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, Users, ClipboardList, Shield } from "lucide-react"

type ProductTeaserCardProps = {
  dailyVolume?: string
  dailyVolumeLabel?: string
  headline?: string
  subheadline?: string
  description?: string
  videoSrc?: string
  posterSrc?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

// @component: ProductTeaserCard
export const ProductTeaserCard = (props: ProductTeaserCardProps) => {
  const {
    dailyVolume = "2,500,000+",
    dailyVolumeLabel = "PATIENT APPOINTMENTS MANAGED",
    headline = "All-in-One Smart Clinic Solution",
    subheadline = "CareTracker streamlines every aspect of clinic operations — from patient scheduling and billing to EHR integration and staff management — all in one HIPAA-compliant platform.",
    description = "Trusted by 5,000+ healthcare providers, CareTracker powers efficient clinic operations with enterprise-grade security, seamless EHR/EMR integration, and intuitive workflows.",
    videoSrc = "",
    posterSrc = "/images/design-mode/9ad78a5534a46e77bafe116ce1c38172c60dc21a-1069x1068.png",
    primaryButtonText = "Start Free Trial",
    primaryButtonHref = "",
    secondaryButtonText = "Watch Demo",
    secondaryButtonHref = "",
  } = props

  // @return
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-slate-50" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4">
          {/* Left Column - Content */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="bg-[#e9e9e9] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-end lg:aspect-square overflow-hidden order-1"
          >
            <a
              href={primaryButtonHref}
              onClick={(e) => e.preventDefault()}
              className="flex flex-col gap-1 text-[#9a9a9a]"
            >
              <motion.span
                initial={{
                  transform: "translateY(20px)",
                  opacity: 0,
                }}
                animate={{
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.6,
                }}
                className="text-xs sm:text-sm uppercase tracking-tight font-mono flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                }}
              >
                {dailyVolumeLabel}
                <ArrowUpRight className="w-[0.71em] h-[0.71em]" />
              </motion.span>
              <span
                className="text-[32px] leading-[160px] tracking-tight bg-gradient-to-r from-[#202020] via-[#1d326d] via-[#fcc41d] to-[#fcc41d] bg-clip-text text-transparent"
                style={{
                  fontFeatureSettings: '"clig" 0, "liga" 0',
                  height: "98px",
                  marginBottom: "0px",
                  paddingTop: "",
                  display: "none",
                }}
              >
                {dailyVolume}
              </span>
            </a>

            <h1
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px] leading-[1.1] tracking-tight text-[#202020] max-w-[520px] mb-4 sm:mb-6"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {headline}
            </h1>

            <p
              className="text-base sm:text-lg leading-6 sm:leading-7 text-[#404040] max-w-[520px] mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subheadline}
            </p>

            <div className="max-w-[520px] mb-0">
              <p
                className="text-base leading-5"
                style={{
                  display: "none",
                }}
              >
                {description}
              </p>
            </div>

            <ul className="flex gap-2 sm:gap-3 flex-wrap mt-6 sm:mt-8 lg:mt-10">
              <li>
                <a
                  href={primaryButtonHref}
                  onClick={(e) => e.preventDefault()}
                  className="block cursor-pointer text-white bg-[#1d326d] rounded-full px-4 sm:px-[18px] py-3 sm:py-[15px] text-sm sm:text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl hover:bg-[#162654]"
                >
                  {primaryButtonText}
                </a>
              </li>
              <li>
                <a
                  href={secondaryButtonHref}
                  onClick={(e) => e.preventDefault()}
                  className="block cursor-pointer text-[#202020] border border-[#202020] rounded-full px-4 sm:px-[18px] py-3 sm:py-[15px] text-sm sm:text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                >
                  {secondaryButtonText}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right Column - Gradient Schedule Card */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 0.2,
            }}
            className="bg-gradient-to-br from-[#1d326d] to-[#0f1a38] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] flex flex-col justify-center items-center aspect-square overflow-hidden p-4 sm:p-6 lg:p-8 order-2"
          >
            <div className="w-full max-w-md space-y-3 sm:space-y-4">
              {/* Dashboard Preview Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/95 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="font-semibold text-[#202020] text-sm sm:text-base">Today&apos;s Schedule</h3>
                  <span className="text-xs sm:text-sm text-[#1d326d] font-medium">12 appointments</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#1d326d]/5 rounded-lg">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d326d] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-[#202020] truncate">9:00 AM - Sarah Johnson</p>
                      <p className="text-[10px] sm:text-xs text-[#666]">Annual Checkup</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#1d326d]/5 rounded-lg">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d326d] flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-[#202020] truncate">10:30 AM - Michael Chen</p>
                      <p className="text-[10px] sm:text-xs text-[#666]">Follow-up Visit</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/95 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center shadow-lg"
                >
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-[#1d326d] mx-auto mb-1 sm:mb-2" />
                  <p className="text-lg sm:text-2xl font-bold text-[#202020]">847</p>
                  <p className="text-[10px] sm:text-xs text-[#666]">Patients</p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/95 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center shadow-lg"
                >
                  <ClipboardList className="w-4 h-4 sm:w-6 sm:h-6 text-[#1d326d] mx-auto mb-1 sm:mb-2" />
                  <p className="text-lg sm:text-2xl font-bold text-[#202020]">156</p>
                  <p className="text-[10px] sm:text-xs text-[#666]">This Week</p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/95 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center shadow-lg"
                >
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-[#fcc41d] mx-auto mb-1 sm:mb-2" />
                  <p className="text-lg sm:text-2xl font-bold text-[#202020]">HIPAA</p>
                  <p className="text-[10px] sm:text-xs text-[#666]">Compliant</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
