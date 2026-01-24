import { LandingCTA } from "@/components/landing/LandingCTA";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingIntegrations } from "@/components/landing/LandingIntegrations";
import { LandingTestimonials } from "@/components/landing/LandingTestimonials";
import { LandingWhyChooseUs } from "@/components/landing/LandingWhyChooseUs";

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
  );
}
