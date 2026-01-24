"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { NotificationsPanel } from "./NotificationsPanel";
import { QuickActions } from "./QuickActions";
import { RevenueChart } from "./RevenueChart";
import { StaffActivityFeed } from "./StaffActivityFeed";
import { StatsCards } from "./StatsCards";
import { TodaysAppointments } from "./TodaysAppointments";

export const DashboardContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className="min-h-screen bg-gray-50/50 flex"
      style={{ fontFamily: "Figtree, sans-serif" }}
    >
      <DashboardSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div
        className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}
      >
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="p-6 lg:p-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#0A8FDC]">
                Dashboard Overview
              </h1>
              <p className="text-gray-500 mt-1">
                Welcome back! Here&apos;s what&apos;s happening at your clinic
                today.
              </p>
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Stats Cards */}
            <StatsCards />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
              {/* Left Column - Appointments & Revenue */}
              <div className="xl:col-span-2 space-y-6">
                <TodaysAppointments />
                <RevenueChart />
              </div>

              {/* Right Column - Activity & Notifications */}
              <div className="space-y-6">
                <NotificationsPanel />
                <StaffActivityFeed />
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};
