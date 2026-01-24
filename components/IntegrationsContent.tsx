"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Calendar,
  CreditCard,
  FileText,
  Mail,
  MessageCircle,
  MessageSquare,
  Network,
  Phone,
  Users,
  Video,
  Workflow,
} from "lucide-react";
import { useState } from "react";

type IntegrationCategory =
  | "All"
  | "Communication"
  | "Payments"
  | "Scheduling"
  | "HR & Admin"
  | "Automation";

type Integration = {
  id: string;
  name: string;
  description: string;
  category: IntegrationCategory[];
  icon: React.ReactNode;
  popular?: boolean;
  logo?: string;
};

const integrations: Integration[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    description:
      "Send appointment reminders, confirmations, and communicate with patients via WhatsApp.",
    category: ["Communication"],
    icon: <MessageSquare className="w-8 h-8" />,
    popular: true,
  },
  {
    id: "sap",
    name: "SAP SuccessFactors",
    description:
      "Enterprise HR and employee experience management for large healthcare organizations.",
    category: ["HR & Admin"],
    icon: <Briefcase className="w-8 h-8" />,
    popular: true,
  },
  {
    id: "mulesoft",
    name: "MuleSoft",
    description:
      "Unified platform for integration, APIs, and automation across your clinic stack.",
    category: ["Automation"],
    icon: <Network className="w-8 h-8" />,
    popular: true,
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    description:
      "Reliable transactional and marketing email delivery at scale.",
    category: ["Communication"],
    icon: <Mail className="w-8 h-8" />,
  },
  {
    id: "n8n",
    name: "n8n",
    description:
      "Workflow automation for technical teams to connect CareTracker with any app.",
    category: ["Automation"],
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    id: "ats",
    name: "ATS Integration",
    description:
      "Sync candidate data with major Applicant Tracking Systems for streamlined hiring.",
    category: ["HR & Admin"],
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "xero",
    name: "Xero",
    description:
      "Seamless accounting software integration for invoicing and financial reporting.",
    category: ["Payments"],
    icon: <FileText className="w-8 h-8" />,
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    description:
      "Sync appointments automatically with Google Calendar for seamless schedule management.",
    category: ["Scheduling"],
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    id: "stripe",
    name: "Stripe",
    description:
      "Accept payments securely with Stripe. Process credit cards, invoices, and subscriptions.",
    category: ["Payments"],
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    id: "twilio",
    name: "Twilio",
    description:
      "Send SMS reminders and notifications to patients for appointments and follow-ups.",
    category: ["Communication"],
    icon: <Phone className="w-8 h-8" />,
  },
  {
    id: "zoom",
    name: "Zoom",
    description:
      "Conduct virtual consultations with integrated Zoom video conferencing.",
    category: ["Communication"],
    icon: <Video className="w-8 h-8" />,
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    description:
      "Sync financial data and automate accounting with QuickBooks integration.",
    category: ["Payments"],
    icon: <FileText className="w-8 h-8" />,
  },
  {
    id: "slack",
    name: "Slack",
    description:
      "Get real-time notifications and collaborate with your team using Slack.",
    category: ["Communication"],
    icon: <MessageCircle className="w-8 h-8" />,
  },
];

const categories: IntegrationCategory[] = [
  "All",
  "Communication",
  "Payments",
  "Scheduling",
  "HR & Admin",
  "Automation",
];

export function IntegrationsContent() {
  const [activeCategory, setActiveCategory] =
    useState<IntegrationCategory>("All");

  const filteredIntegrations =
    activeCategory === "All"
      ? integrations
      : integrations.filter(integration =>
          integration.category.includes(activeCategory),
        );

  return (
    <div className="min-h-screen bg-slate-50">
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
                Integrations
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
              style={{
                fontFamily: "var(--font-inter), Inter",
              }}>
              Connect CareTracker with your{" "}
              <span className="bg-gradient-to-r from-primary to-[#3b82f6] bg-clip-text text-transparent font-normal">
                favorite tools
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-[#111A4A] opacity-60 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: "var(--font-roboto), Roboto",
              }}>
              Streamline your clinic workflow with our 50+ pre-built
              integrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-[#111A4A] hover:bg-slate-50 shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)]"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-6 lg:rounded-2xl p-5 lg:p-6 shadow-sm border border-primary/20 hover:shadow-md hover:border-primary transition-all duration-200">
                {/* Popular Badge */}
                {integration.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#fcc41d]/10 text-primary border border-[#fcc41d]/20">
                      <BadgeCheck className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                  <div className="text-primary child:w-6 child:h-6">
                    {integration.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-[#111A4A] mb-2 group-hover:text-primary transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-[#111A4A] opacity-60 leading-relaxed mb-4">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
