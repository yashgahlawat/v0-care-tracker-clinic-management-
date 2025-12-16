import { LandingHero } from "@/components/landing/LandingHero"
import { LandingFeatures } from "@/components/landing/LandingFeatures"
import { LandingWhyChooseUs } from "@/components/landing/LandingWhyChooseUs"
import { LandingIntegrations } from "@/components/landing/LandingIntegrations"
import { LandingTestimonials } from "@/components/landing/LandingTestimonials"
import { LandingCTA } from "@/components/landing/LandingCTA"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandingHero />
      <LandingFeatures />
      <LandingWhyChooseUs />
      <LandingIntegrations />
      <LandingTestimonials />
      <LandingCTA />
    </main>
  )
}
