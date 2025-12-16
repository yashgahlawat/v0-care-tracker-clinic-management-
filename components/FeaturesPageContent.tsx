"use client"

import { motion } from "framer-motion"
import {
  MessageCircle,
  DollarSign,
  Shield,
  Calendar,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  Video,
  Bell,
  Stethoscope,
  Clock,
} from "lucide-react"

const deepDiveFeatures = [
  {
    icon: MessageCircle,
    badge: "WhatsApp Integration",
    title: "Never Leave a Slot Empty Again",
    description:
      "When a patient cancels, our AI instantly messages your waitlist via WhatsApp. Slots are filled automatically—no admin overhead, no lost revenue. It's like having a full-time receptionist working 24/7.",
    benefits: ["Auto-fill from waitlist", "2-way WhatsApp chat", "90% fill rate"],
    visual: "chat",
    alignment: "left",
  },
  {
    icon: DollarSign,
    badge: "Financial Intelligence",
    title: "Get Paid 3x Faster with Smart Billing",
    description:
      "Automated invoice generation, insurance claims, and payment reminders mean you spend less time chasing payments. Real-time revenue dashboards show exactly where your money is—and where it's going.",
    benefits: ["Auto-invoice on visit", "Insurance pre-checks", "Payment analytics"],
    visual: "revenue",
    alignment: "right",
  },
  {
    icon: Shield,
    badge: "Access Control",
    title: "Enterprise-Grade Governance for Every Role",
    description:
      "Assign granular permissions by role—Principal GPs see everything, Locums only see their patients, Front Desk handles scheduling. Full audit trails ensure compliance and security at every level.",
    benefits: ["Role-based access", "Audit logs", "HIPAA compliant"],
    visual: "permissions",
    alignment: "left",
  },
]

const toolkitFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered booking with conflict detection and automatic waitlist management.",
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "360° patient profiles with medical history, documents, and communication logs.",
  },
  {
    icon: FileText,
    title: "Electronic Health Records",
    description: "Secure EHR with custom templates, e-prescriptions, and lab integrations.",
  },
  {
    icon: Video,
    title: "Telehealth",
    description: "HD video consultations with virtual waiting rooms and screen sharing.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Multi-channel appointment reminders via SMS, email, and voice calls.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Workflows",
    description: "Customizable protocols and care pathways to standardize delivery.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Staff scheduling with overtime alerts and payroll integration.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards for practice performance and revenue tracking.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Integrated payment gateway with split billing and payment plans.",
  },
]

// Mock visual components for the deep dive sections
const ChatInterfaceVisual = () => (
  <div className="bg-white shadow-2xl rounded-2xl p-6 space-y-4">
    <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
        <MessageCircle className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="font-semibold text-[#1d326d]">Waitlist Assistant</div>
        <div className="text-xs text-gray-500">Active now</div>
      </div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-end">
        <div className="bg-[#1d326d] text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-xs text-sm">
          Dr. Smith has a cancellation tomorrow at 2pm. Can you fill it?
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs text-sm">
          Found 3 patients on waitlist. Messaging them now...
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-green-50 border border-green-200 text-green-900 rounded-2xl rounded-tl-sm px-4 py-2 max-w-xs text-sm">
          ✓ Slot filled! Sarah M. confirmed for 2pm tomorrow.
        </div>
      </div>
    </div>
    <div className="pt-4 border-t border-gray-100">
      <div className="text-xs text-gray-500 text-center">Messages delivered via WhatsApp</div>
    </div>
  </div>
)

const RevenueGraphVisual = () => (
  <div className="bg-white shadow-2xl rounded-2xl p-6">
    <div className="mb-6">
      <div className="text-sm text-gray-500 mb-1">Monthly Revenue</div>
      <div className="text-3xl font-bold text-[#1d326d]">$47,250</div>
      <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
        <span>↗</span>
        <span>+23% from last month</span>
      </div>
    </div>
    <div className="relative h-48">
      <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fcc41d" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fcc41d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 180 L 50 160 L 100 140 L 150 130 L 200 100 L 250 80 L 300 70 L 350 50 L 400 40 L 400 200 L 0 200 Z"
          fill="url(#revenueGradient)"
        />
        <path
          d="M 0 180 L 50 160 L 100 140 L 150 130 L 200 100 L 250 80 L 300 70 L 350 50 L 400 40"
          stroke="#fcc41d"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
      <div>
        <div className="text-xs text-gray-500">Collections</div>
        <div className="text-lg font-semibold text-[#1d326d]">$42,100</div>
      </div>
      <div>
        <div className="text-xs text-gray-500">Outstanding</div>
        <div className="text-lg font-semibold text-[#1d326d]">$5,150</div>
      </div>
      <div>
        <div className="text-xs text-gray-500">Avg. Days</div>
        <div className="text-lg font-semibold text-green-600">12d</div>
      </div>
    </div>
  </div>
)

const PermissionsMatrixVisual = () => (
  <div className="bg-white shadow-2xl rounded-2xl p-6">
    <div className="mb-4">
      <div className="text-sm font-semibold text-[#1d326d] mb-2">Role Permissions</div>
      <div className="text-xs text-gray-500">Granular access control by user role</div>
    </div>
    <div className="space-y-3">
      {[
        { role: "Principal GP", permissions: ["Full Access", "Billing", "Staff Mgmt"], color: "bg-[#fcc41d]" },
        { role: "Practice Manager", permissions: ["Scheduling", "Billing", "Reports"], color: "bg-blue-500" },
        { role: "Locum Doctor", permissions: ["Own Patients", "Clinical Notes"], color: "bg-green-500" },
        { role: "Front Desk", permissions: ["Scheduling", "Check-in"], color: "bg-purple-500" },
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className={`w-3 h-3 rounded-full ${item.color}`} />
          <div className="flex-1">
            <div className="text-sm font-medium text-[#1d326d]">{item.role}</div>
            <div className="text-xs text-gray-500 flex gap-2 mt-1">
              {item.permissions.map((perm, i) => (
                <span key={i} className="bg-white px-2 py-0.5 rounded border border-gray-200">
                  {perm}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export function FeaturesPageContent() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d326d] mb-6 leading-tight">
              Built for High-Performance Clinics
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every tool you need to reduce admin and increase billings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Sections (Zig-Zag) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {deepDiveFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.alignment === "right" ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div className={feature.alignment === "right" ? "lg:col-start-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fcc41d] text-[#1d326d] rounded-full text-sm font-semibold mb-4">
                  <feature.icon className="w-4 h-4" />
                  {feature.badge}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1d326d] mb-4">{feature.title}</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#fcc41d]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#fcc41d] rounded-full" />
                      </div>
                      <span className="text-[#1d326d] font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Content */}
              <div className={feature.alignment === "right" ? "lg:col-start-1 lg:row-start-1" : ""}>
                {feature.visual === "chat" && <ChatInterfaceVisual />}
                {feature.visual === "revenue" && <RevenueGraphVisual />}
                {feature.visual === "permissions" && <PermissionsMatrixVisual />}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Complete Toolkit Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1d326d] mb-4">The Complete Toolkit</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything else you need to run a modern healthcare practice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolkitFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1d326d] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#1d326d]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1d326d] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#1d326d] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#1d326d] mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1d326d]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl text-white/80 mb-8">Start your 14-day free trial today. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#fcc41d] text-[#1d326d] font-semibold rounded-lg hover:bg-[#fcc41d]/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
