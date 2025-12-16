"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserPlus, CalendarPlus, FileText, CreditCard, X, Mail, Phone, User, Calendar, Clock } from "lucide-react"

const actions = [
  {
    id: "add-patient",
    name: "Add Patient",
    icon: UserPlus,
    color: "bg-[#1d326d]",
    hoverColor: "hover:bg-[#1d326d]/90",
  },
  {
    id: "add-appointment",
    name: "Add Appointment",
    icon: CalendarPlus,
    color: "bg-[#fcc41d]",
    hoverColor: "hover:bg-[#fcc41d]/90",
    textColor: "text-[#1d326d]",
  },
  {
    id: "create-invoice",
    name: "Create Invoice",
    icon: CreditCard,
    color: "bg-emerald-500",
    hoverColor: "hover:bg-emerald-600",
  },
  {
    id: "write-prescription",
    name: "Write Prescription",
    icon: FileText,
    color: "bg-violet-500",
    hoverColor: "hover:bg-violet-600",
  },
]

export const QuickActions = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <>
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {actions.map((action) => (
            <motion.button
              key={action.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveModal(action.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${action.color} ${action.hoverColor} ${
                action.textColor || "text-white"
              } font-medium shadow-sm transition-colors`}
            >
              <action.icon size={18} />
              <span className="text-sm">{action.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Add Patient Modal */}
      <AnimatePresence>
        {activeModal === "add-patient" && (
          <Modal title="Add New Patient" onClose={() => setActiveModal(null)}>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#1d326d] text-white font-medium rounded-xl hover:bg-[#1d326d]/90 transition-colors"
                >
                  Add Patient
                </button>
              </div>
            </form>
          </Modal>
        )}

        {activeModal === "add-appointment" && (
          <Modal title="Schedule Appointment" onClose={() => setActiveModal(null)}>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Patient</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base bg-white">
                  <option value="">Select patient...</option>
                  <option value="1">Emma Thompson</option>
                  <option value="2">Michael Chen</option>
                  <option value="3">Sarah Williams</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Provider</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base bg-white">
                  <option value="">Select provider...</option>
                  <option value="1">Dr. Sarah Chen</option>
                  <option value="2">Dr. Rachel Kim</option>
                  <option value="3">Dr. James Wilson</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Time</label>
                  <div className="relative">
                    <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="time"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Appointment Type</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all text-base bg-white">
                  <option value="consultation">Consultation</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="check-up">Check-up</option>
                  <option value="new-patient">New Patient Visit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Notes</label>
                <textarea
                  rows={3}
                  placeholder="Add any notes..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] outline-none transition-all resize-none text-base"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#fcc41d] text-[#1d326d] font-semibold rounded-xl hover:bg-[#fcc41d]/90 transition-colors"
                >
                  Schedule Appointment
                </button>
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </>
  )
}

const Modal = ({
  title,
  children,
  onClose,
}: {
  title: string
  children: React.ReactNode
  onClose: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-[#1d326d]">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
            <X size={20} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </motion.div>
    </motion.div>
  )
}
