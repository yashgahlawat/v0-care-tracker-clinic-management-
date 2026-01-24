"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 32000, appointments: 180 },
  { month: "Feb", revenue: 35000, appointments: 195 },
  { month: "Mar", revenue: 38000, appointments: 210 },
  { month: "Apr", revenue: 36000, appointments: 200 },
  { month: "May", revenue: 42000, appointments: 230 },
  { month: "Jun", revenue: 45000, appointments: 245 },
  { month: "Jul", revenue: 43000, appointments: 235 },
  { month: "Aug", revenue: 47000, appointments: 255 },
  { month: "Sep", revenue: 44000, appointments: 240 },
  { month: "Oct", revenue: 48000, appointments: 260 },
  { month: "Nov", revenue: 52000, appointments: 280 },
  { month: "Dec", revenue: 48352, appointments: 265 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-sm font-semibold text-gray-800 mb-2">{label}</p>
        <p className="text-sm text-[#1d326d]">
          Revenue:{" "}
          <span className="font-semibold">
            ${payload[0].value.toLocaleString()}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#1d326d]">
            Revenue Overview
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Monthly revenue for 2025
          </p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full">
          <TrendingUp size={16} />
          <span className="text-sm font-medium">+23% vs last year</span>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1d326d" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#1d326d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={value => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#1d326d"
              strokeWidth={2.5}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#1d326d]" />
          <span className="text-sm text-gray-600">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#fcc41d]" />
          <span className="text-sm text-gray-600">Target</span>
        </div>
      </div>
    </motion.div>
  );
};
