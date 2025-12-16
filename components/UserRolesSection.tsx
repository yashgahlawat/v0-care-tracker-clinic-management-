"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Building2, UserCog, Users, ClipboardList } from "lucide-react"

type Role = {
  icon: React.ReactNode
  title: string
  description: string
  permissions: string[]
  color: string
}

const roles: Role[] = [
  {
    icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Principal GPs / Owners",
    description: "Full financial oversight & analytics.",
    permissions: [
      "Complete access to financial reports and P&L statements",
      "Practice-wide analytics and performance metrics",
      "Staff management and compensation settings",
      "Strategic planning and compliance dashboards",
      "Full system configuration and integration controls",
    ],
    color: "#1d326d",
  },
  {
    icon: <UserCog className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Practice Managers",
    description: "Operational control without clinical data exposure.",
    permissions: [
      "Appointment scheduling and resource allocation",
      "Inventory and supply chain management",
      "Staff rostering and shift management",
      "Patient billing and insurance processing",
      "Marketing and patient communication tools",
    ],
    color: "#1d326d",
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Locums & Registrars",
    description: "Temporary access restricted to assigned patients.",
    permissions: [
      "View and edit assigned patient records only",
      "Document clinical notes for consultation period",
      "Order diagnostic tests and prescriptions",
      "Access only during rostered shifts",
      "No financial or administrative system access",
    ],
    color: "#fcc41d",
  },
  {
    icon: <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Admin & Front Desk",
    description: "Scheduling and intake access only.",
    permissions: [
      "Patient check-in and registration",
      "Appointment booking and cancellations",
      "Process co-payments and issue receipts",
      "Send automated reminders and confirmations",
      "No access to clinical notes or medical history",
    ],
    color: "#1d326d",
  },
]

export const UserRolesSection = () => {
  return (
    <section className="w-full pt-12 pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-3 lg:mb-4"
            style={{ fontFamily: "var(--font-inter), Inter" }}
          >
            Complete Governance & Access Control
          </h2>
          <p
            className="text-base lg:text-lg leading-6 lg:leading-7 text-[#666666] max-w-2xl mx-auto px-4 sm:px-0"
            style={{ fontFamily: "var(--font-roboto), Roboto" }}
          >
            Granular permissions for every stakeholder. Ensure Principals maintain oversight while Staff access only
            what they need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#d1d5db] transition-colors duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${role.color}15`, color: role.color }}
              >
                {role.icon}
              </div>
              <h3
                className="text-lg font-medium text-[#202020] mb-2"
                style={{ fontFamily: "var(--font-inter), Inter" }}
              >
                {role.title}
              </h3>
              <p className="text-sm text-[#666666] mb-4" style={{ fontFamily: "var(--font-roboto), Roboto" }}>
                {role.description}
              </p>
              <ul className="space-y-2">
                {role.permissions.map((permission, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${role.color}15` }}
                    >
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke={role.color} strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-[#4b5563]" style={{ fontFamily: "var(--font-roboto), Roboto" }}>
                      {permission}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
