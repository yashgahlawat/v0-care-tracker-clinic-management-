"use client"

import { motion } from "framer-motion"
import { Calendar, Users, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

const stats = [
  {
    title: "Today's Appointments",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Calendar,
    color: "#1d326d",
    bgColor: "bg-[#1d326d]/10",
  },
  {
    title: "Total Patients",
    value: "1,847",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "#10b981",
    bgColor: "bg-emerald-100",
  },
  {
    title: "Revenue (MTD)",
    value: "$48,352",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
    color: "#fcc41d",
    bgColor: "bg-amber-100",
  },
  {
    title: "Avg. Wait Time",
    value: "12 min",
    change: "-18%",
    trend: "down",
    icon: TrendingUp,
    color: "#8b5cf6",
    bgColor: "bg-violet-100",
  },
]

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <stat.icon size={24} style={{ color: stat.color }} />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === "up" ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {stat.trend === "up" ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {stat.change}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
          <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  )
}
