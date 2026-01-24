"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Calendar,
  CreditCard,
  FileText,
  MessageCircle,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react";
import { useState } from "react";

type IntegrationCategory = "All" | "Communication" | "Payments" | "Scheduling";

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
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Connect CareTracker with your favorite tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Streamline your clinic workflow with our 50+ pre-built integrations.
          </motion.p>
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
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#1d326d] text-white shadow-md"
                    : "bg-white text-foreground hover:bg-slate-100 border border-slate-200"
                }`}
              >
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-6 border border-slate-200 hover:border-[#1d326d] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                {/* Popular Badge */}
                {integration.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#fcc41d] text-[#1d326d]">
                      <BadgeCheck className="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4 text-[#1d326d]">{integration.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#1d326d] transition-colors">
                  {integration.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
