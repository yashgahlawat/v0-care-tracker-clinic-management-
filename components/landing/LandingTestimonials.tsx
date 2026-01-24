"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CareTracker transformed how we run our practice. We've reduced administrative time by 60% and our patients love the online booking system.",
    author: "Dr. Sarah Mitchell",
    role: "Primary Care Physician",
    clinic: "HealthFirst Medical Group",
    rating: 5,
    image: "/female-doctor-headshot-professional.jpg",
  },
  {
    quote:
      "The integration with our existing EHR was seamless. The support team was incredibly helpful during the transition — we were up and running in just 2 days.",
    author: "Dr. James Rodriguez",
    role: "Medical Director",
    clinic: "Sunrise Family Clinic",
    rating: 5,
    image: "/male-doctor-headshot-professional.jpg",
  },
  {
    quote:
      "Finally, a clinic management system that actually understands what healthcare providers need. The HIPAA compliance features give us peace of mind.",
    author: "Dr. Emily Chen",
    role: "Pediatrician",
    clinic: "Little Stars Pediatrics",
    rating: 5,
    image: "/asian-female-doctor-headshot-professional.jpg",
  },
];

export const LandingTestimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className="inline-block bg-[#fcc41d]/20 text-[#1d326d] px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ fontFamily: "Figtree" }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d326d] mb-6"
            style={{ fontFamily: "Figtree" }}
          >
            Trusted by Thousands of Healthcare Providers
          </h2>
          <p
            className="text-lg text-[#555555] leading-relaxed"
            style={{ fontFamily: "Inter" }}
          >
            See what medical professionals are saying about their experience
            with CareTracker.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-[#fcc41d] flex items-center justify-center">
                  <Quote className="w-5 h-5 text-[#1d326d]" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#fcc41d] text-[#fcc41d]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[#444444] leading-relaxed mb-6"
                style={{ fontFamily: "Figtree" }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p
                    className="font-semibold text-[#1d326d]"
                    style={{ fontFamily: "Figtree" }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="text-sm text-[#666666]"
                    style={{ fontFamily: "Figtree" }}
                  >
                    {testimonial.role}
                  </p>
                  <p
                    className="text-xs text-[#888888]"
                    style={{ fontFamily: "Figtree" }}
                  >
                    {testimonial.clinic}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p
            className="text-sm text-[#666666] mb-8 uppercase tracking-wide"
            style={{ fontFamily: "Figtree" }}
          >
            Trusted by leading healthcare organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {[
              "Mayo Clinic",
              "Cleveland Clinic",
              "Kaiser",
              "HCA Healthcare",
              "Ascension",
            ].map(logo => (
              <div
                key={logo}
                className="text-xl font-bold text-[#1d326d]/50"
                style={{ fontFamily: "Figtree" }}
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
