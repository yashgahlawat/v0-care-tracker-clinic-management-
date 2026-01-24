"use client";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type PlanLevel = "basic" | "professional" | "enterprise";

interface PricingFeature {
  name: string;
  basic: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
  category: string;
}

interface PricingPlan {
  name: string;
  level: PlanLevel;
  description: string;
  price: string;
  period: string;
  popular?: boolean;
}

const features: PricingFeature[] = [
  // Category A: Core Operations
  {
    name: "Appointment Scheduling",
    basic: true,
    professional: true,
    enterprise: true,
    category: "Core Operations",
  },
  {
    name: "Clinical Notes & EMR",
    basic: true,
    professional: true,
    enterprise: true,
    category: "Core Operations",
  },
  {
    name: "Billing & Invoicing (Tally Sync)",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Core Operations",
  },
  {
    name: "e-Prescriptions",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Core Operations",
  },

  // Category B: Growth & Automation
  {
    name: "WhatsApp Auto-Reminders",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Growth & Automation",
  },
  {
    name: "'Gap-Filling' Waitlist",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Growth & Automation",
  },
  {
    name: "Patient Recall System",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Growth & Automation",
  },
  {
    name: "Review/Feedback Collection",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Growth & Automation",
  },

  // Category C: Enterprise Control
  {
    name: "Role-Based Access Control",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Enterprise Control",
  },
  {
    name: "Audit Logs & Activity History",
    basic: "90 days",
    professional: "1 year",
    enterprise: "Unlimited",
    category: "Enterprise Control",
  },
  {
    name: "Multi-Location Support",
    basic: "1",
    professional: "Up to 5",
    enterprise: "Unlimited",
    category: "Enterprise Control",
  },
  {
    name: "Dedicated Account Manager",
    basic: false,
    professional: false,
    enterprise: true,
    category: "Enterprise Control",
  },
];

const plans: PricingPlan[] = [
  {
    name: "Basic",
    level: "basic",
    price: "Free",
    period: "forever",
    description: "Essential tools for solo practitioners and small clinics",
  },
  {
    name: "Professional",
    level: "professional",
    price: "$49",
    period: "/month",
    description: "Advanced features for growing practices",
    popular: true,
  },
  {
    name: "Enterprise",
    level: "enterprise",
    price: "Custom",
    period: "",
    description: "Complete solution for multi-location clinics",
  },
];

const categories = [...new Set(features.map(f => f.category))];

function FeatureValue({
  value,
  isPopular = false,
}: {
  value: boolean | string;
  isPopular?: boolean;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <div
        className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center",
          isPopular ? "bg-[#fcc41d]" : "bg-primary/10",
        )}>
        <CheckIcon
          className={cn(
            "w-4 h-4",
            isPopular ? "text-primary font-bold" : "text-primary",
          )}
        />
      </div>
    ) : (
      <span className="text-slate-300">—</span>
    );
  }
  return (
    <span
      className="text-sm font-medium text-slate-700"
      style={{ fontFamily: "var(--font-inter), Inter" }}>
      {value}
    </span>
  );
}

export function PricingPageContent() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <div
              className="inline-flex items-center font-mono uppercase text-xs text-primary mb-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 tracking-wider"
              style={{
                fontFamily:
                  "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              }}>
              Simple, Transparent Pricing
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
              style={{
                fontFamily: "var(--font-inter), Inter",
              }}>
              Invest in your clinic's{" "}
              <span className="bg-gradient-to-r from-primary via-[#3b82f6] to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-normal">
                future growth
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal opacity-90"
              style={{ fontFamily: "var(--font-roboto), Roboto" }}>
              Choose the perfect plan for your practice. No hidden fees, no
              surprises. Just powerful tools to help you care for more patients.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 border backdrop-blur-sm",
                plan.popular
                  ? "bg-white border-primary shadow-lg shadow-primary/5 z-10 scale-105"
                  : "bg-white/80 border-primary/20 hover:border-primary hover:shadow-md",
              )}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fcc41d] text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-xl sm:text-2xl font-normal mb-2 text-primary tracking-tight"
                  style={{ fontFamily: "var(--font-inter), Inter" }}>
                  {plan.name}
                </h3>
                <p
                  className="text-slate-600 text-sm leading-relaxed min-h-[40px]"
                  style={{ fontFamily: "var(--font-inter), Inter" }}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-4xl font-normal text-primary tracking-tight"
                    style={{ fontFamily: "var(--font-inter), Inter" }}>
                    {plan.price}
                  </span>
                  <span className="text-slate-500 font-normal">
                    {plan.period}
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className={cn(
                  "w-full py-3 px-6 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 group",
                  plan.popular
                    ? "bg-primary text-white hover:bg-[#162654] shadow-md hover:shadow-lg"
                    : "bg-transparent border-2 border-primary text-primary hover:bg-[#fcc41d] hover:border-[#fcc41d]",
                )}
                style={{ fontFamily: "var(--font-inter), Inter" }}>
                Contact Us
                <ArrowRight
                  className={cn(
                    "w-4 h-4 transition-transform group-hover:translate-x-1",
                    plan.popular ? "text-white" : "text-current",
                  )}
                />
              </Link>

              <div className="mt-8 pt-8 border-t border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                  Top Features
                </p>
                <ul className="space-y-3">
                  {features
                    .filter(
                      f =>
                        f.category === "Core Operations" ||
                        (plan.popular && f.category === "Growth & Automation"),
                    )
                    .slice(0, 5)
                    .map(feature => (
                      <li
                        key={feature.name}
                        className="flex items-start gap-3 text-sm text-slate-700">
                        <div
                          className={cn(
                            "mt-0.5 w-4 h-4 rounded shadow-sm flex items-center justify-center flex-shrink-0",
                            typeof feature[plan.level] === "boolean" &&
                              feature[plan.level]
                              ? "bg-[#fcc41d]/20 text-primary"
                              : "bg-slate-100 text-slate-300",
                          )}>
                          {typeof feature[plan.level] === "boolean" &&
                          feature[plan.level] ? (
                            <CheckIcon className="w-3 h-3" />
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "font-normal",
                            typeof feature[plan.level] === "boolean" &&
                              !feature[plan.level] &&
                              "text-slate-400 decoration-slate-300",
                          )}>
                          {feature.name}
                          {!(typeof feature[plan.level] === "boolean") && (
                            <span className="text-primary font-medium ml-1">
                              ({feature[plan.level]})
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-normal text-primary tracking-tight mb-4"
              style={{ fontFamily: "var(--font-inter), Inter" }}>
              Detailed Comparison
            </h2>
            <p
              className="text-slate-600"
              style={{ fontFamily: "var(--font-roboto), Roboto" }}>
              Everything you need to know about our features
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-primary/20 shadow-sm shadow-slate-200/50">
            {/* Table Header */}
            <div className="hidden md:flex items-center p-6 bg-slate-50/80 border-b border-primary/10 sticky top-0 z-10 backdrop-blur-md">
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Features
                </span>
              </div>
              <div className="flex items-center gap-8">
                {plans.map(plan => (
                  <div
                    key={plan.level}
                    className={cn(
                      "w-36 text-center text-lg font-normal text-primary tracking-tight",
                      plan.popular && "font-medium",
                    )}
                    style={{ fontFamily: "var(--font-inter), Inter" }}>
                    {plan.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Categories */}
            {categories.map(category => (
              <div key={category}>
                {/* Category Header */}
                <div className="px-6 py-4 bg-slate-50/50 border-b border-primary/10">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {category}
                  </span>
                </div>

                {/* Feature Rows */}
                <div>
                  {features
                    .filter(f => f.category === category)
                    .map((feature, idx) => (
                      <div
                        key={feature.name}
                        className={cn(
                          "flex flex-col md:flex-row md:items-center p-4 md:px-6 md:py-4 border-b border-primary/5 last:border-b-0",
                          "hover:bg-[#fcc41d]/5 transition-colors duration-200",
                        )}>
                        <div className="flex-1 mb-3 md:mb-0">
                          <span
                            className="text-sm lg:text-base font-normal text-slate-700"
                            style={{ fontFamily: "var(--font-inter), Inter" }}>
                            {feature.name}
                          </span>
                        </div>
                        {/* Mobile view */}
                        <div className="md:hidden grid grid-cols-3 gap-4">
                          {plans.map(plan => (
                            <div key={plan.level} className="text-center">
                              <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-wide">
                                {plan.name}
                              </p>
                              <div className="flex justify-center">
                                <FeatureValue
                                  value={feature[plan.level]}
                                  isPopular={plan.popular}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Desktop view */}
                        <div className="hidden md:flex items-center gap-8">
                          {plans.map(plan => (
                            <div
                              key={plan.level}
                              className="w-36 flex justify-center">
                              <FeatureValue
                                value={feature[plan.level]}
                                isPopular={plan.popular}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 sm:px-16 shadow-xl border border-white/10">
            {/* Background Gradients similar to BankingScaleHero data points style */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#fcc41d]/10 to-transparent opacity-50 blur-3xl" />

            <div className="relative z-10">
              <h2
                className="text-3xl md:text-4xl font-normal text-white mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-inter), Inter" }}>
                Not sure which plan fits?
              </h2>
              <p
                className="text-white/80 mb-10 max-w-xl mx-auto text-lg leading-relaxed font-light"
                style={{ fontFamily: "var(--font-roboto), Roboto" }}>
                Book a free consultation with our healthcare solutions team.
                We'll analyze your clinic's needs and recommend the perfect
                setup.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#fcc41d] text-primary px-8 py-3 rounded-lg text-base font-medium hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg inline-flex items-center justify-center gap-2">
                  Book a Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-all inline-flex items-center justify-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
