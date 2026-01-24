"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  Calendar,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  "Free 30-day trial",
  "No credit card required",
  "Personalized demo",
  "Free data migration",
];

export const LandingCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    size: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="book-demo"
      className="py-24 bg-gradient-to-br from-[#0A8FDC] via-[#0A8FDC] to-[#3AA8E8] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 bg-[#4CAF50]/20 text-[#4CAF50] px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ fontFamily: "Figtree" }}
            >
              <Calendar className="w-4 h-4" />
              Book a Demo
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Figtree" }}
            >
              Ready to Transform Your Clinic Operations?
            </h2>
            <p
              className="text-xl text-white/70 leading-relaxed mb-8"
              style={{ fontFamily: "Inter" }}
            >
              Schedule a personalized demo with our healthcare specialists and
              see how CareTracker can streamline your practice in just 30
              minutes.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "Figtree" }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p
                className="text-white/60 text-sm mb-3"
                style={{ fontFamily: "Inter" }}
              >
                Prefer to talk to someone directly?
              </p>
              <div className="space-y-2">
                <a
                  href="tel:1-800-CARETRACKER"
                  className="flex items-center gap-2 text-white hover:text-[#4CAF50] transition-colors"
                  style={{ fontFamily: "Inter" }}
                >
                  <Phone className="w-4 h-4" />
                  1-800-CARETRACKER
                </a>
                <a
                  href="mailto:demo@caretracker.com"
                  className="flex items-center gap-2 text-white hover:text-[#4CAF50] transition-colors"
                  style={{ fontFamily: "Inter" }}
                >
                  <Mail className="w-4 h-4" />
                  demo@caretracker.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#22c55e]" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#1d326d] mb-3"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Demo Scheduled!
                  </h3>
                  <p
                    className="text-[#666666] mb-6"
                    style={{ fontFamily: "Inter" }}
                  >
                    We'll send you a calendar invite shortly. Looking forward to
                    showing you CareTracker!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#1d326d] font-medium hover:underline"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Schedule another demo
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-2xl font-bold text-[#1d326d] mb-2"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Book Your Free Demo
                  </h3>
                  <p
                    className="text-[#666666] mb-6"
                    style={{ fontFamily: "Figtree" }}
                  >
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        className="block text-sm font-medium text-[#1d326d] mb-2"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1d326d] focus:ring-2 focus:ring-[#1d326d]/10 outline-none transition-all"
                          placeholder="Dr. Jane Smith"
                          style={{ fontFamily: "Figtree" }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-sm font-medium text-[#1d326d] mb-2"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1d326d] focus:ring-2 focus:ring-[#1d326d]/10 outline-none transition-all"
                          placeholder="jane@clinic.com"
                          style={{ fontFamily: "Figtree" }}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        className="block text-sm font-medium text-[#1d326d] mb-2"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1d326d] focus:ring-2 focus:ring-[#1d326d]/10 outline-none transition-all"
                          placeholder="(555) 123-4567"
                          style={{ fontFamily: "Figtree" }}
                        />
                      </div>
                    </div>

                    {/* Clinic Name */}
                    <div>
                      <label
                        className="block text-sm font-medium text-[#1d326d] mb-2"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Clinic/Practice Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
                        <input
                          type="text"
                          required
                          value={formData.clinic}
                          onChange={e =>
                            setFormData({ ...formData, clinic: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1d326d] focus:ring-2 focus:ring-[#1d326d]/10 outline-none transition-all"
                          placeholder="Sunrise Medical Center"
                          style={{ fontFamily: "Figtree" }}
                        />
                      </div>
                    </div>

                    {/* Practice Size */}
                    <div>
                      <label
                        className="block text-sm font-medium text-[#1d326d] mb-2"
                        style={{ fontFamily: "Figtree" }}
                      >
                        Practice Size
                      </label>
                      <select
                        required
                        value={formData.size}
                        onChange={e =>
                          setFormData({ ...formData, size: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1d326d] focus:ring-2 focus:ring-[#1d326d]/10 outline-none transition-all appearance-none bg-white"
                        style={{ fontFamily: "Figtree" }}
                      >
                        <option value="">Select practice size</option>
                        <option value="solo">Solo Practice (1 provider)</option>
                        <option value="small">Small (2-5 providers)</option>
                        <option value="medium">Medium (6-20 providers)</option>
                        <option value="large">Large (21-50 providers)</option>
                        <option value="enterprise">
                          Enterprise (50+ providers)
                        </option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1d326d] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#1d326d]/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ fontFamily: "Figtree" }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          Book My Demo
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  <p
                    className="text-center text-xs text-[#888888] mt-4"
                    style={{ fontFamily: "Figtree" }}
                  >
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-[#1d326d] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#1d326d] hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
