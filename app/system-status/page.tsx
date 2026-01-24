import { SystemStatusPageContent } from "@/components/SystemStatusPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status - CareTracker",
  description:
    "Real-time system status and operational updates for CareTracker services.",
};

export default function SystemStatusPage() {
  return <SystemStatusPageContent />;
}
