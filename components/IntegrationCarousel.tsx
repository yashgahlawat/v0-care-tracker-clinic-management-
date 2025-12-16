"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type IntegrationCarouselProps = {
  buttonText?: string
  buttonHref?: string
  title?: string
  subtitle?: string
}

// @component: IntegrationCarousel
export const IntegrationCarousel = ({
  buttonText = "View all integrations",
  buttonHref = "/integrations",
  title = "Seamless EHR/EMR integrations",
  subtitle = "Connect CareTracker with your existing EHR, lab systems, e-prescribing networks, and insurance clearinghouses for a unified workflow.",
}: IntegrationCarouselProps) => {
  // @return
  return (
    <div className="w-full py-24 bg-slate-50" id="integrations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2
              className="text-[48px] leading-tight font-normal text-[#222222] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              {title}
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] mb-8"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subtitle}
            </p>

            <div>
              <Link href={buttonHref}>
                <Button variant="outline" size="lg" className="text-base font-medium bg-transparent">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: 3D Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="perspective-[2000px] group cursor-pointer" style={{ perspective: "2000px" }}>
              <div className="relative w-full h-[500px]">
                {/* Dashboard Card - Tilted back */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-0"
                  style={{
                    transform: "rotateY(12deg) rotateX(5deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Calendar Dashboard Content */}
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-[#222222]">Clinic Dashboard</h3>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="flex-1 grid grid-cols-7 gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="text-xs font-medium text-[#666666] text-center">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-lg flex items-center justify-center text-sm ${
                            i === 10 || i === 17 || i === 24
                              ? "bg-blue-100 text-blue-700 font-semibold"
                              : "bg-gray-50 text-[#666666]"
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone Screen - Floating in front */}
                <div
                  className="absolute top-1/2 -right-8 w-72 h-[500px] bg-black rounded-[3rem] shadow-2xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-0 border-8 border-black"
                  style={{
                    transform: "rotateY(-8deg) rotateX(-3deg) translateY(-50%)",
                    transformStyle: "preserve-3d",
                    zIndex: 10,
                  }}
                >
                  {/* Phone Screen Inner */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 rounded-[2.5rem] overflow-hidden flex flex-col">
                    {/* Phone Header */}
                    <div className="bg-white px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-[#222222]">CareTracker</div>
                          <div className="text-xs text-[#666666]">Online</div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Content */}
                    <div className="flex-1 p-6 flex items-end">
                      {/* WhatsApp Chat Bubble */}
                      <div className="bg-green-500 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%] shadow-lg">
                        <p className="text-white text-sm font-medium">Slot found! Reply YES to book.</p>
                        <div className="text-white/80 text-xs mt-1">12:34 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
