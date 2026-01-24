"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  MessageSquare,
  Monitor,
  Server,
} from "lucide-react";

type SystemStatus = "operational" | "degraded" | "down";

interface Service {
  name: string;
  status: SystemStatus;
  description: string;
  uptime: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    name: "API Gateway",
    status: "operational",
    description: "Core API services and endpoints",
    uptime: "99.99%",
    icon: <Server className="w-5 h-5" />,
  },
  {
    name: "Web Dashboard",
    status: "operational",
    description: "Clinic management interface",
    uptime: "99.95%",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    name: "Database/Storage",
    status: "operational",
    description: "Patient data and file storage",
    uptime: "99.99%",
    icon: <Database className="w-5 h-5" />,
  },
  {
    name: "Notifications",
    status: "operational",
    description: "SMS, Email and WhatsApp delivery",
    uptime: "99.98%",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];

const StatusBadge = ({ status }: { status: SystemStatus }) => {
  const styles = {
    operational: "bg-green-100 text-green-700 border-green-200",
    degraded: "bg-yellow-100 text-yellow-700 border-yellow-200",
    down: "bg-red-100 text-red-700 border-red-200",
  };

  const labels = {
    operational: "Operational",
    degraded: "Degraded Performance",
    down: "Service Disruption",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
        styles[status],
      )}
      style={{ fontFamily: "var(--font-inter), Inter" }}>
      {status === "operational" ? (
        <CheckCircle2 className="w-3.5 h-3.5" />
      ) : (
        <AlertTriangle className="w-3.5 h-3.5" />
      )}
      {labels[status]}
    </span>
  );
};

export function SystemStatusPageContent() {
  const allOperational = services.every(s => s.status === "operational");

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1
              className="text-3xl sm:text-4xl font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
              style={{ fontFamily: "var(--font-inter), Inter" }}>
              System Status
            </h1>

            {/* Main Status Indicator */}
            <div
              className={cn(
                "inline-flex items-center gap-3 px-6 py-4 rounded-xl border-2 mb-8 transition-colors",
                allOperational
                  ? "bg-green-50/50 border-green-500/20 text-green-800"
                  : "bg-yellow-50/50 border-yellow-500/20 text-yellow-800",
              )}>
              {allOperational ? (
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              )}
              <div className="text-left">
                <p
                  className="text-lg font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-inter), Inter" }}>
                  {allOperational
                    ? "All Systems Operational"
                    : "Some systems are experiencing issues"}
                </p>
                <p className="text-sm opacity-80">
                  Last updated: {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h3
                        className="font-medium text-[#111A4A] tracking-tight"
                        style={{ fontFamily: "var(--font-inter), Inter" }}>
                        {service.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <StatusBadge status={service.status} />
                  </div>
                </div>

                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-4">
                  <div className="bg-green-500 h-full w-full rounded-full" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>90 days ago</span>
                  <span>{service.uptime} uptime</span>
                  <span>Today</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xl font-medium text-[#111A4A] tracking-tight mb-6 px-1"
            style={{ fontFamily: "var(--font-inter), Inter" }}>
            Past Incidents
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
            <p className="text-slate-500 text-sm">
              No incidents reported in the last 90 days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
