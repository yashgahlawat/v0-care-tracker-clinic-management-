"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Calendar,
  ChevronLeft,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";
import CareTrackerLogo from "../brand/CareTrackerLogo";

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    active: true,
  },
  { name: "Appointments", icon: Calendar, href: "#" },
  { name: "Patients", icon: Users, href: "#" },
  { name: "Medical Records", icon: FileText, href: "#" },
  { name: "Billing", icon: CreditCard, href: "#" },
  { name: "Analytics", icon: BarChart3, href: "#" },
  { name: "Staff", icon: Stethoscope, href: "#" },
  { name: "Messages", icon: MessageSquare, href: "#" },
];

const bottomMenuItems = [
  { name: "Settings", icon: Settings, href: "#" },
  { name: "Help & Support", icon: HelpCircle, href: "#" },
  { name: "Logout", icon: LogOut, href: "/login" },
];

export const DashboardSidebar = ({
  isOpen,
  onToggle,
}: DashboardSidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 256 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:flex fixed left-0 top-0 h-screen bg-white border-r border-gray-200 flex-col z-40"
      >
        <div className="h-20 flex items-center justify-between px-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-3">
            <CareTrackerLogo size="sm" showText={isOpen} href={undefined} />
          </Link>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <ChevronLeft
              size={20}
              className={`transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {menuItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                item.active
                  ? "bg-[#0A8FDC] text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0A8FDC]"
              }`}
            >
              <item.icon size={22} className="flex-shrink-0" />
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </nav>

        {/* Bottom Menu */}
        <div className="border-t border-gray-100 py-4 px-3 space-y-1">
          {bottomMenuItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                item.name === "Logout"
                  ? "text-red-500 hover:bg-red-50"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0A8FDC]"
              }`}
            >
              <item.icon size={22} className="flex-shrink-0" />
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </div>
      </motion.aside>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 px-2 py-2">
        <div className="flex items-center justify-around">
          {menuItems.slice(0, 5).map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
                item.active ? "text-[#0A8FDC]" : "text-gray-500"
              }`}
            >
              <item.icon size={22} />
              <span className="text-xs font-medium">
                {item.name.split(" ")[0]}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
