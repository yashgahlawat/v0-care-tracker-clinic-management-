"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Bell, CheckCircle, Info, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "alert",
    title: "Low Inventory Alert",
    message: "Flu vaccines running low (12 remaining)",
    time: "5 min ago",
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    id: 2,
    type: "success",
    title: "Payment Received",
    message: "Invoice #2847 paid by John Smith",
    time: "20 min ago",
    icon: CheckCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    id: 3,
    type: "info",
    title: "New Patient Registration",
    message: "Lisa Park completed registration",
    time: "45 min ago",
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    type: "alert",
    title: "Appointment Reschedule",
    message: "David Kim requested to reschedule",
    time: "1 hour ago",
    icon: Bell,
    color: "text-[#0A8FDC]",
    bg: "bg-[#0A8FDC]/10",
  },
];

export const NotificationsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
    >
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-[#0A8FDC]">
            Notifications
          </h2>
          <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-medium rounded-full">
            4
          </span>
        </div>
        <button className="text-gray-400 text-sm hover:text-gray-600">
          Mark all read
        </button>
      </div>

      <div className="divide-y divide-gray-50 max-h-72 overflow-y-auto">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className="p-4 hover:bg-gray-50/50 transition-colors group"
          >
            <div className="flex gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${notification.bg}`}
              >
                <notification.icon size={16} className={notification.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </h3>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
                    <X size={14} className="text-gray-400" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">
                  {notification.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100 text-center">
        <button className="text-[#0A8FDC] text-sm font-medium hover:underline">
          View all notifications
        </button>
      </div>
    </motion.div>
  );
};
