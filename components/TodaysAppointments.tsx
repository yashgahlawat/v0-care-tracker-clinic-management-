"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  MapPin,
  MoreHorizontal,
  Video,
  XCircle,
} from "lucide-react";

const appointments = [
  {
    id: 1,
    patient: "Emma Thompson",
    time: "9:00 AM",
    duration: "30 min",
    type: "Follow-up",
    status: "completed",
    avatar: "ET",
    isVideo: false,
  },
  {
    id: 2,
    patient: "Michael Chen",
    time: "9:45 AM",
    duration: "45 min",
    type: "New Patient",
    status: "completed",
    avatar: "MC",
    isVideo: true,
  },
  {
    id: 3,
    patient: "Sarah Williams",
    time: "10:30 AM",
    duration: "30 min",
    type: "Consultation",
    status: "in-progress",
    avatar: "SW",
    isVideo: false,
  },
  {
    id: 4,
    patient: "James Rodriguez",
    time: "11:15 AM",
    duration: "30 min",
    type: "Check-up",
    status: "upcoming",
    avatar: "JR",
    isVideo: false,
  },
  {
    id: 5,
    patient: "Lisa Park",
    time: "12:00 PM",
    duration: "45 min",
    type: "Follow-up",
    status: "upcoming",
    avatar: "LP",
    isVideo: true,
  },
  {
    id: 6,
    patient: "David Kim",
    time: "2:30 PM",
    duration: "30 min",
    type: "Lab Review",
    status: "cancelled",
    avatar: "DK",
    isVideo: false,
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    label: "Completed",
  },
  "in-progress": {
    icon: AlertCircle,
    color: "text-amber-500",
    bg: "bg-amber-50",
    label: "In Progress",
  },
  upcoming: {
    icon: Clock,
    color: "text-blue-500",
    bg: "bg-blue-50",
    label: "Upcoming",
  },
  cancelled: {
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-50",
    label: "Cancelled",
  },
};

export const TodaysAppointments = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
    >
      <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-[#0A8FDC]">
            Today&apos;s Appointments
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Thursday, December 5, 2025
          </p>
        </div>
        <button className="text-[#0A8FDC] text-sm font-medium hover:underline self-start sm:self-auto">
          View All
        </button>
      </div>

      <div className="divide-y divide-gray-50">
        {appointments.map(appointment => {
          const status =
            statusConfig[appointment.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;

          return (
            <div
              key={appointment.id}
              className={`p-3 sm:p-4 hover:bg-gray-50/50 transition-colors ${
                appointment.status === "in-progress" ? "bg-amber-50/30" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0A8FDC] to-[#0a6fac] flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                    {appointment.avatar}
                  </div>

                  {/* Info - Mobile view */}
                  <div className="flex-1 min-w-0 sm:hidden">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900 text-sm truncate">
                        {appointment.patient}
                      </h3>
                      {appointment.isVideo && (
                        <Video
                          size={14}
                          className="text-[#0A8FDC] flex-shrink-0"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{appointment.time}</span>
                      <span>•</span>
                      <span>{appointment.type}</span>
                    </div>
                  </div>

                  {/* Status badge - Mobile */}
                  <div
                    className={`flex sm:hidden items-center gap-1 px-2 py-1 rounded-full ${status.bg}`}
                  >
                    <StatusIcon size={12} className={status.color} />
                    <span className={`text-xs font-medium ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* Info - Desktop view */}
                <div className="hidden sm:flex flex-1 min-w-0 items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900 truncate">
                        {appointment.patient}
                      </h3>
                      {appointment.isVideo && (
                        <Video
                          size={16}
                          className="text-[#0A8FDC] flex-shrink-0"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock size={14} />
                        {appointment.time}
                      </span>
                      <span className="text-sm text-gray-400 hidden md:inline">
                        •
                      </span>
                      <span className="text-sm text-gray-500 hidden md:inline">
                        {appointment.duration}
                      </span>
                      <span className="text-sm text-gray-400 hidden lg:inline">
                        •
                      </span>
                      <span className="text-sm text-gray-500 hidden lg:flex items-center gap-1">
                        {appointment.isVideo ? (
                          <Video size={14} />
                        ) : (
                          <MapPin size={14} />
                        )}
                        {appointment.type}
                      </span>
                    </div>
                  </div>

                  {/* Status - Desktop */}
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${status.bg}`}
                  >
                    <StatusIcon size={14} className={status.color} />
                    <span className={`text-xs font-medium ${status.color}`}>
                      {status.label}
                    </span>
                  </div>

                  {/* More Button */}
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
