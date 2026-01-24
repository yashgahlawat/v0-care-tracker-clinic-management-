"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

type CaseStudy = {
  id: string;
  clinicName: string;
  specialty: string;
  title: string;
  quote: string;
  attribution: string;
  stats: { label: string; value: string }[];
  accentColor: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "family-care",
    clinicName: "Family Care Medical Center",
    specialty: "Primary Care",
    title:
      "Family Care Medical Center reduced administrative workload by 45% with CareTracker.",
    quote:
      "CareTracker transformed our practice. We went from drowning in paperwork to spending more time with patients. The scheduling automation alone saved us 20 hours per week.",
    attribution: "Dr. Sarah Mitchell, Medical Director",
    stats: [
      { label: "Admin Time Saved", value: "45%" },
      { label: "Patient Satisfaction", value: "4.9/5" },
      { label: "No-Show Rate", value: "-60%" },
    ],
    accentColor: "#1d326d",
  },
  {
    id: "westside-ortho",
    clinicName: "Westside Orthopedics",
    specialty: "Orthopedics",
    title:
      "Westside Orthopedics scaled to 3 locations while improving operational efficiency.",
    quote:
      "When we expanded to multiple locations, CareTracker made it seamless. Real-time dashboards give us visibility across all clinics, and our revenue cycle improved dramatically.",
    attribution: "James Chen, Practice Administrator",
    stats: [
      { label: "Revenue Increase", value: "32%" },
      { label: "Claims Processed", value: "2x faster" },
      { label: "Staff Efficiency", value: "+40%" },
    ],
    accentColor: "#fcc41d",
  },
  {
    id: "pediatric-partners",
    clinicName: "Pediatric Partners",
    specialty: "Pediatrics",
    title:
      "Pediatric Partners achieved 98% patient retention with CareTracker's engagement tools.",
    quote:
      "Parents love the patient portal for scheduling and messaging. Our automated vaccine reminders have increased immunization compliance to 95%. CareTracker understands healthcare.",
    attribution: "Dr. Amanda Rodriguez, Founder",
    stats: [
      { label: "Patient Retention", value: "98%" },
      { label: "Vaccine Compliance", value: "95%" },
      { label: "Portal Adoption", value: "87%" },
    ],
    accentColor: "#1d326d",
  },
];

export const CaseStudiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prev => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-3 lg:mb-4"
            style={{ fontFamily: "var(--font-inter), Inter" }}
          >
            Trusted by healthcare practices
          </h2>
          <p
            className="text-base lg:text-lg leading-6 lg:leading-7 text-[#666666] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-roboto), Roboto" }}
          >
            See how clinics across specialties are transforming their operations
            with CareTracker.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl lg:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-sm border border-slate-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                {/* Left Column - Quote */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4 lg:mb-6">
                      <div
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${currentStudy.accentColor}15`,
                        }}
                      >
                        <Quote
                          className="w-4 h-4 lg:w-5 lg:h-5"
                          style={{ color: currentStudy.accentColor }}
                        />
                      </div>
                      <div>
                        <p
                          className="font-medium text-[#202020] text-sm lg:text-base"
                          style={{ fontFamily: "var(--font-inter), Inter" }}
                        >
                          {currentStudy.clinicName}
                        </p>
                        <p
                          className="text-xs lg:text-sm text-[#666]"
                          style={{ fontFamily: "var(--font-roboto), Roboto" }}
                        >
                          {currentStudy.specialty}
                        </p>
                      </div>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#202020] mb-4 lg:mb-6 leading-snug"
                      style={{ fontFamily: "var(--font-inter), Inter" }}
                    >
                      {currentStudy.title}
                    </h3>

                    <blockquote
                      className="text-base lg:text-lg text-[#4b5563] mb-4 lg:mb-6 leading-relaxed"
                      style={{ fontFamily: "var(--font-roboto), Roboto" }}
                    >
                      &ldquo;{currentStudy.quote}&rdquo;
                    </blockquote>

                    <p
                      className="text-xs lg:text-sm font-medium text-[#666]"
                      style={{ fontFamily: "var(--font-roboto), Roboto" }}
                    >
                      {currentStudy.attribution}
                    </p>
                  </div>
                </div>

                {/* Right Column - Stats */}
                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4">
                    {currentStudy.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-slate-200"
                      >
                        <p
                          className="text-xl sm:text-2xl lg:text-4xl font-medium mb-1"
                          style={{
                            color: currentStudy.accentColor,
                            fontFamily: "var(--font-inter), Inter",
                          }}
                        >
                          {stat.value}
                        </p>
                        <p
                          className="text-xs lg:text-sm text-[#666]"
                          style={{ fontFamily: "var(--font-roboto), Roboto" }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 lg:mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-[#1d326d] hover:text-[#1d326d] transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-[#1d326d]" : "bg-[#d1d5db]"
                  }`}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-[#1d326d] hover:text-[#1d326d] transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
