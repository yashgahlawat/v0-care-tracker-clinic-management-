"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "AI-powered appointment scheduling with automated reminders, reducing no-shows by up to 40%.",
    color: "#1d326d",
  },
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Comprehensive patient profiles with medical history, documents, and communication logs in one place.",
    color: "#1d326d",
  },
  {
    icon: FileText,
    title: "Electronic Health Records",
    description:
      "Secure, cloud-based EHR system with customizable templates and quick charting tools.",
    color: "#1d326d",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description:
      "Streamlined billing with insurance verification, claims management, and online payments.",
    color: "#1d326d",
  },
  {
    icon: MessageSquare,
    title: "Patient Communication",
    description:
      "Secure messaging, telehealth integration, and automated appointment reminders via SMS and email.",
    color: "#1d326d",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Real-time insights into practice performance, revenue trends, and patient satisfaction metrics.",
    color: "#1d326d",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description:
      "Enterprise-grade security with encryption, audit logs, and automatic compliance monitoring.",
    color: "#1d326d",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description:
      "Automate repetitive tasks and save up to 15 hours per week on administrative work.",
    color: "#1d326d",
  },
];

export const LandingFeatures = () => {
  return (
    <section id="features" className="py-24 bg-white">
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
            Features
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d326d] mb-6"
            style={{ fontFamily: "Figtree" }}
          >
            Everything You Need to Run Your Practice
          </h2>
          <p
            className="text-lg text-[#555555] leading-relaxed"
            style={{ fontFamily: "Figtree" }}
          >
            From scheduling to billing, our comprehensive suite of tools helps
            you focus on what matters most — providing excellent patient care.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-[#f8fafc] hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-100"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3
                className="text-xl font-semibold text-[#1d326d] mb-3"
                style={{ fontFamily: "Figtree" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[#666666] leading-relaxed text-base"
                style={{ fontFamily: "Figtree" }}
              >
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-[#fcc41d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
