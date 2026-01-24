"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  ClipboardList,
  LayoutGrid,
  Network,
  Palette,
  Plug,
  Receipt,
  Scale,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import type React from "react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Multi-Portal Architecture",
    description:
      "Dedicated portals for patients, practitioners, and administrators with role-based access and personalized dashboards.",
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Booking & Appointment Management",
    description:
      "Online booking, waitlist management, recurring appointments, calendar sync, and intelligent scheduling optimization.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Digital Forms & Assessments",
    description:
      "Custom intake forms, consent management, health questionnaires, and digital signature capture before appointments.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Clinic Operations & Management",
    description:
      "Room allocation, equipment scheduling, inventory tracking, and resource optimization across your facilities.",
  },
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "Billing, Invoicing & Financial Management",
    description:
      "Medicare/DVA claims, health fund integration, payment plans, automatic receipts, and revenue tracking.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Security, Compliance & Identity",
    description:
      "Two-factor authentication, audit logging, data encryption, and comprehensive access control policies.",
  },
  {
    icon: <Plug className="w-6 h-6" />,
    title: "Integrations Ecosystem",
    description:
      "Seamless connections with SAP SuccessFactors, MuleSoft, Xero, SendGrid, n8n, and major ATS platforms.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Reporting, Analytics & Insights",
    description:
      "Real-time dashboards, financial reports, practitioner performance metrics, and patient outcome analytics.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Driven Features",
    description:
      "Smart scheduling suggestions, no-show prediction, automated documentation, and intelligent patient matching.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Communication & Notifications",
    description:
      "SMS/email reminders, in-app messaging, broadcast communications, and automated follow-up sequences.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Multi-Clinic, Multi-Business, Multi-Affiliate Support",
    description:
      "Centralized management for clinic networks, franchise operations, and affiliated practitioner groups.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflows & Automation",
    description:
      "Custom workflow builders, trigger-based actions, automated task assignments, and approval processes.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UX & Platform Features",
    description:
      "Mobile-responsive design, offline capability, customizable themes, and accessibility compliance (WCAG 2.1).",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Administration & Back-Office",
    description:
      "User management, system configuration, bulk operations, data import/export, and comprehensive audit trails.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Compliance & Legal (Australia-specific)",
    description:
      "Privacy Act compliance, AHPRA requirements, Medicare regulations, and Australian healthcare standards adherence.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full pt-16 pb-12 bg-primary/5" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-normal text-primary tracking-tight mb-3 lg:mb-4"
            style={{ fontFamily: "var(--font-inter), Inter" }}>
            Everything your clinic needs
          </h2>
          <p
            className="text-base lg:text-lg leading-6 lg:leading-7 text-slate-600 max-w-2xl mx-auto px-4 sm:px-0"
            style={{ fontFamily: "var(--font-roboto), Roboto" }}>
            A comprehensive platform built for Australian healthcare
            practices—from solo practitioners to multi-clinic networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.slice(0, 6).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="bg-white rounded-xl lg:rounded-2xl p-5 lg:p-6 shadow-sm border border-primary/20 hover:shadow-md hover:border-primary transition-all duration-200">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#fcc41d]/10 rounded-lg lg:rounded-xl flex items-center justify-center text-primary mb-3 lg:mb-4">
                {feature.icon}
              </div>
              <h3
                className="text-base lg:text-lg font-medium text-primary mb-2"
                style={{ fontFamily: "var(--font-inter), Inter" }}>
                {feature.title}
              </h3>
              <p
                className="text-sm leading-5 lg:leading-6 text-slate-600"
                style={{ fontFamily: "var(--font-inter), Inter" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8 lg:mt-12 mb-0">
          <Link
            href="/features"
            className="inline-flex items-center justify-center px-6 py-3 text-sm lg:text-base font-medium text-primary bg-transparent border-2 border-primary rounded-lg hover:bg-[#fcc41d] hover:text-primary hover:border-[#fcc41d] transition-all duration-200"
            style={{ fontFamily: "var(--font-inter), Inter" }}>
            View all features
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
