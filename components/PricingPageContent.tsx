"use client"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import Link from "next/link"

type PlanLevel = "basic" | "professional" | "enterprise"

interface PricingFeature {
  name: string
  basic: boolean | string
  professional: boolean | string
  enterprise: boolean | string
  category: string
}

interface PricingPlan {
  name: string
  level: PlanLevel
  description: string
  popular?: boolean
}

const features: PricingFeature[] = [
  // Category A: Core Operations
  { name: "Appointment Scheduling", basic: true, professional: true, enterprise: true, category: "Core Operations" },
  { name: "Clinical Notes & EMR", basic: true, professional: true, enterprise: true, category: "Core Operations" },
  {
    name: "Billing & Invoicing (Tally Sync)",
    basic: false,
    professional: true,
    enterprise: true,
    category: "Core Operations",
  },
  { name: "e-Prescriptions", basic: false, professional: true, enterprise: true, category: "Core Operations" },

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
]

const plans: PricingPlan[] = [
  {
    name: "Basic",
    level: "basic",
    description: "Essential tools for solo practitioners and small clinics",
  },
  {
    name: "Professional",
    level: "professional",
    description: "Advanced features for growing practices",
    popular: true,
  },
  {
    name: "Enterprise",
    level: "enterprise",
    description: "Complete solution for multi-location clinics",
  },
]

const categories = [...new Set(features.map((f) => f.category))]

function FeatureValue({ value, isPopular = false }: { value: boolean | string; isPopular?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <div
        className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center",
          isPopular ? "bg-[#fcc41d]" : "bg-[#1d326d]",
        )}
      >
        <CheckIcon className={cn("w-4 h-4", isPopular ? "text-[#1d326d]" : "text-white")} />
      </div>
    ) : (
      <span className="text-slate-300">—</span>
    )
  }
  return <span className="text-sm font-medium text-foreground">{value}</span>
}

export function PricingPageContent() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d326d]/10 text-[#1d326d] text-sm font-medium mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 text-balance">
            Simple, transparent pricing for clinics of all sizes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us for a personalized quote tailored to your practice needs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 rounded-2xl border-2 transition-all",
                plan.popular ? "border-[#1d326d] bg-[#1d326d]/5" : "border-border hover:border-[#1d326d]/50",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1d326d] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <Link
                href="/contact"
                className={cn(
                  "w-full py-3 px-6 rounded-full text-base font-medium transition-all inline-flex items-center justify-center",
                  plan.popular
                    ? "bg-[#1d326d] text-white hover:bg-[#1d326d]/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80",
                )}
              >
                Contact Us
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Compare all features</h2>
        </div>

        <div className="border border-border rounded-2xl overflow-hidden bg-card">
          {/* Table Header */}
          <div className="hidden md:flex items-center p-6 bg-secondary border-b border-border sticky top-0 z-10">
            <div className="flex-1">
              <span className="text-lg font-semibold">Features</span>
            </div>
            <div className="flex items-center gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.level}
                  className={cn(
                    "w-28 text-center text-lg font-semibold",
                    plan.popular && "bg-[#1d326d]/5 -my-6 py-6 px-4 rounded-t-lg",
                  )}
                >
                  {plan.name}
                </div>
              ))}
            </div>
          </div>

          {/* Feature Categories */}
          {categories.map((category) => (
            <div key={category}>
              {/* Category Header */}
              <div className="p-4 bg-slate-100 border-b border-border">
                <span className="text-base font-bold text-[#1d326d]">{category}</span>
              </div>

              {/* Feature Rows */}
              <div>
                {features
                  .filter((f) => f.category === category)
                  .map((feature) => (
                    <div
                      key={feature.name}
                      className={cn(
                        "flex flex-col md:flex-row md:items-center p-4 md:p-6 border-b border-border last:border-b-0",
                        "hover:bg-slate-50 transition-colors",
                      )}
                    >
                      <div className="flex-1 mb-3 md:mb-0">
                        <span className="text-base">{feature.name}</span>
                      </div>
                      {/* Mobile view */}
                      <div className="md:hidden grid grid-cols-3 gap-4">
                        {plans.map((plan) => (
                          <div key={plan.level} className="text-center">
                            <p className="text-xs text-muted-foreground mb-1">{plan.name}</p>
                            <div className="flex justify-center">
                              <FeatureValue value={feature[plan.level]} isPopular={plan.popular} />
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Desktop view */}
                      <div className="hidden md:flex items-center gap-8">
                        {plans.map((plan) => (
                          <div
                            key={plan.level}
                            className={cn("w-28 flex justify-center", plan.popular && "bg-[#1d326d]/5 -my-6 py-6")}
                          >
                            <FeatureValue value={feature[plan.level]} isPopular={plan.popular} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1d326d]/10 via-[#1d326d]/5 to-[#1d326d]/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Not sure which plan is right for you?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book a free consultation with our healthcare solutions team. We'll help you find the perfect fit for your
              practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#1d326d] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#1d326d]/90 transition-all inline-flex items-center justify-center"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="bg-background border border-border text-foreground px-6 py-3 rounded-full text-base font-medium hover:bg-secondary transition-all inline-flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
