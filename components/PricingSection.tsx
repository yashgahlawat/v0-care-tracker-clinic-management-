"use client";

import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

type PlanLevel = "starter" | "professional" | "enterprise";

interface PricingFeature {
  name: string;
  included: PlanLevel | "all";
}

interface PricingPlan {
  name: string;
  level: PlanLevel;
  price: {
    monthly: number;
    yearly: number;
  };
  popular?: boolean;
}

const features: PricingFeature[] = [
  { name: "Patient scheduling & calendar", included: "starter" },
  { name: "Up to 500 patients", included: "starter" },
  { name: "Basic reporting & analytics", included: "starter" },
  { name: "Email support", included: "starter" },
  { name: "Unlimited patients", included: "professional" },
  { name: "EHR/EMR integrations", included: "professional" },
  { name: "Insurance claims processing", included: "professional" },
  { name: "Priority support", included: "professional" },
  { name: "Multi-location support", included: "enterprise" },
  { name: "Custom integrations & API", included: "enterprise" },
  { name: "Dedicated account manager", included: "enterprise" },
  { name: "24/7 phone support + SLA", included: "enterprise" },
  { name: "HIPAA-compliant infrastructure", included: "all" },
  { name: "Automated appointment reminders", included: "all" },
];

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: { monthly: 149, yearly: 1490 },
    level: "starter",
  },
  {
    name: "Professional",
    price: { monthly: 349, yearly: 3490 },
    level: "professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 799, yearly: 7990 },
    level: "enterprise",
  },
];

function shouldShowCheck(
  included: PricingFeature["included"],
  level: PlanLevel,
): boolean {
  if (included === "all") return true;
  if (included === "enterprise" && level === "enterprise") return true;
  if (
    included === "professional" &&
    (level === "professional" || level === "enterprise")
  )
    return true;
  if (included === "starter") return true;
  return false;
}

export function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(false);
  const [selectedPlan, setSelectedPlan] =
    React.useState<PlanLevel>("professional");

  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-figtree text-[40px] font-normal leading-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="font-figtree text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your practice. All plans include
            HIPAA-compliant infrastructure and automated reminders.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full p-1">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-6 py-2 rounded-full font-figtree text-lg transition-all",
                !isYearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}>
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-6 py-2 rounded-full font-figtree text-lg transition-all",
                isYearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}>
              Yearly
              <span className="ml-2 text-sm text-[#fcc41d]">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map(plan => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.level)}
              className={cn(
                "relative p-8 rounded-2xl text-left transition-all border-2",
                selectedPlan === plan.level
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50",
              )}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-figtree">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="font-figtree text-2xl font-medium mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-figtree text-4xl font-medium">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="font-figtree text-lg text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </div>
              <div
                className={cn(
                  "w-full py-3 px-6 rounded-full font-figtree text-lg transition-all text-center",
                  selectedPlan === plan.level
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground",
                )}>
                {selectedPlan === plan.level ? "Selected" : "Select Plan"}
              </div>
            </button>
          ))}
        </div>

        {/* Features Table */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <div className="min-w-[768px]">
              {/* Table Header */}
              <div className="flex items-center p-6 bg-secondary border-b border-border">
                <div className="flex-1">
                  <h3 className="font-figtree text-xl font-medium">Features</h3>
                </div>
                <div className="flex items-center gap-8">
                  {plans.map(plan => (
                    <div
                      key={plan.level}
                      className="w-24 text-center font-figtree text-lg font-medium">
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-6 transition-colors",
                    index % 2 === 0 ? "bg-background" : "bg-secondary/30",
                    feature.included === selectedPlan && "bg-primary/5",
                  )}>
                  <div className="flex-1">
                    <span className="font-figtree text-lg">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    {plans.map(plan => (
                      <div
                        key={plan.level}
                        className="w-24 flex justify-center">
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                            <CheckIcon className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-[18px] py-[15px] rounded-full font-figtree text-lg hover:rounded-2xl transition-all">
            Start 14-day free trial with{" "}
            {plans.find(p => p.level === selectedPlan)?.name}
          </button>
        </div>
      </div>
    </section>
  );
}
