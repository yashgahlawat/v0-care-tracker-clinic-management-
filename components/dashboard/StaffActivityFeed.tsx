"use client";

import { motion } from "framer-motion";
import { Calendar, CreditCard, FileText, Pill, User } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "Dr. Sarah Chen",
    action: "completed consultation",
    target: "Emma Thompson",
    time: "2 min ago",
    icon: User,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    user: "Nurse James",
    action: "updated medical records",
    target: "Patient #1847",
    time: "15 min ago",
    icon: FileText,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 3,
    user: "Dr. Rachel Kim",
    action: "scheduled follow-up",
    target: "Michael Chen",
    time: "32 min ago",
    icon: Calendar,
    color: "bg-[#1d326d]/10 text-[#1d326d]",
  },
  {
    id: 4,
    user: "Admin Lisa",
    action: "processed payment",
    target: "$450.00",
    time: "1 hour ago",
    icon: CreditCard,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 5,
    user: "Dr. Sarah Chen",
    action: "prescribed medication",
    target: "Sarah Williams",
    time: "2 hours ago",
    icon: Pill,
    color: "bg-violet-100 text-violet-600",
  },
];

export const StaffActivityFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
    >
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#1d326d]">Staff Activity</h2>
        <button className="text-[#1d326d] text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
        {activities.map(activity => (
          <div key={activity.id} className="flex gap-3">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${activity.color}`}
            >
              <activity.icon size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700">
                <span className="font-medium text-gray-900">
                  {activity.user}
                </span>{" "}
                {activity.action}{" "}
                <span className="font-medium text-[#1d326d]">
                  {activity.target}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
