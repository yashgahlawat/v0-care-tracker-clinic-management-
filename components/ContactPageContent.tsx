"use client";

import { submitToChatwoot } from "@/app/actions/chatwoot";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  FileText,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Users,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    contact: "support@caretracker.au",
    type: "email",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available 9am-5pm AWST",
    type: "chat",
  },
];

const offices = [
  {
    city: "Perth",
    address: "Level 18, 108 St Georges Terrace",
    suburb: "Perth WA 6000",
    email: "shane@caretracker.au",
    country: "Australia",
    isHQ: true,
  },
];

const supportEmails = [
  {
    icon: Headphones,
    title: "General Support",
    description: "For general inquiries and support",
    email: "support@caretracker.au",
  },
  {
    icon: Users,
    title: "Enterprise Sales",
    description: "For multi-location and enterprise solutions",
    email: "sales@caretracker.au",
  },
  {
    icon: FileText,
    title: "Billing & Accounts",
    description: "For billing and account queries",
    email: "accounts@caretracker.au",
  },
  {
    icon: Building2,
    title: "Partnerships",
    description: "For integration and partnership opportunities",
    email: "partners@caretracker.au",
  },
];

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // phone removed
    clinicName: "",
    clinicSize: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitToChatwoot(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          clinicName: "",
          clinicSize: "",
          inquiryType: "",
          message: "",
        });
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <div
              className="relative h-6 inline-flex items-center font-mono uppercase text-xs text-primary mb-8 px-2"
              style={{
                fontFamily:
                  "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              }}>
              <span className="block whitespace-nowrap overflow-hidden text-primary relative z-10">
                Contact Us
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
              style={{
                fontFamily: "var(--font-inter), Inter",
              }}>
              Get in Touch with{" "}
              <span className="bg-gradient-to-r from-primary to-[#3b82f6] bg-clip-text text-transparent font-normal">
                CareTracker
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-[#111A4A] opacity-60 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: "var(--font-roboto), Roboto",
              }}>
              Have questions about our clinic management software? Our team is
              here to help you find the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] text-center group hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)] transition-all duration-200">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-[#111A4A] mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-[#111A4A] opacity-60 mb-3">
                  {method.description}
                </p>
                <p className="text-primary font-medium">{method.contact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-medium text-[#111A4A] mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-white rounded-xl p-8 text-center shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)]">
                  <CheckCircle2 className="w-16 h-16 text-[#fcc41d] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#111A4A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#111A4A] opacity-60 mb-6">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)]">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#111A4A] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all text-[#111A4A] placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#111A4A] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all text-[#111A4A] placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111A4A] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-slate-50 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all text-[#111A4A] placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111A4A] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all text-[#111A4A] placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-medium text-[#111A4A] mb-6">
                Our Locations
              </h2>
              <div className="bg-white rounded-2xl h-64 lg:h-80 flex items-center justify-center mb-8 shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)]">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-[#111A4A] opacity-40">Map Placeholder</p>
                </div>
              </div>

              <div className="space-y-4">
                {offices.map(office => (
                  <div
                    key={office.city}
                    className="bg-white rounded-xl p-5 shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)] transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#111A4A]">
                          {office.city}{" "}
                          {office.isHQ && (
                            <span className="text-primary text-xs ml-1 bg-primary/10 px-2 py-0.5 rounded-full">
                              HQ
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-[#111A4A] opacity-60 mt-1">
                          {office.address}
                        </p>
                        {office.email && (
                          <p className="text-sm text-primary mt-1">
                            {office.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Emails */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-[#111A4A] mb-4">
              Department Contacts
            </h2>
            <p className="text-[#111A4A] opacity-60">
              Reach the right team directly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportEmails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-[#111A4A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#111A4A] opacity-60 mb-2">
                  {item.description}
                </p>
                <a
                  href={`mailto:${item.email}`}
                  className="text-sm text-primary font-medium hover:underline">
                  {item.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
