import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { MetricStripBanner } from "@/components/MetricStripBanner"
import { FeaturesSection } from "@/components/FeaturesSection"
import { GlassLineDivider } from "@/components/GlassLineDivider"
import { UserRolesSection } from "@/components/UserRolesSection"
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel"
import { IntegrationBentoGrid } from "@/components/IntegrationBentoGrid"
import { TrustBanner } from "@/components/TrustBanner"
import { FAQSection } from "@/components/FAQSection"

export default function Page() {
  return (
    <>
      <ProductTeaserCard />
      <BankingScaleHero />
      <MetricStripBanner />
      <FeaturesSection />
      <GlassLineDivider />
      <UserRolesSection />
      <CaseStudiesCarousel />
      <IntegrationBentoGrid />
      <TrustBanner />
      <FAQSection />
    </>
  )
}
