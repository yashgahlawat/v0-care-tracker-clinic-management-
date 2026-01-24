import { BankingScaleHero } from "@/components/BankingScaleHero";
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GlassLineDivider } from "@/components/GlassLineDivider";
import { IntegrationBentoGrid } from "@/components/IntegrationBentoGrid";
import { MetricStripBanner } from "@/components/MetricStripBanner";
import { ProductTeaserCard } from "@/components/ProductTeaserCard";
import { TrustBanner } from "@/components/TrustBanner";
import { UserRolesSection } from "@/components/UserRolesSection";

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
  );
}
