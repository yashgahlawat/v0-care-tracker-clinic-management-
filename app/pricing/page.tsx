import { PricingPageContent } from "@/components/PricingPageContent"
import { FAQSection } from "@/components/FAQSection"

export const metadata = {
  title: "Pricing - CareTracker | Clinic Management Software",
  description:
    "Simple, transparent pricing for clinics of all sizes. Choose from Basic, Professional, or Enterprise plans with Australian healthcare compliance built-in.",
}

export default function PricingPage() {
  return (
    <>
      <PricingPageContent />
      <FAQSection />
    </>
  )
}
