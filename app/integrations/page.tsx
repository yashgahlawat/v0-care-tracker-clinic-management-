import { IntegrationsContent } from "@/components/IntegrationsContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Integrations - CareTracker",
  description:
    "Connect CareTracker with your favorite tools. Streamline your clinic workflow with our 50+ pre-built integrations.",
}

export default function IntegrationsPage() {
  return <IntegrationsContent />
}
