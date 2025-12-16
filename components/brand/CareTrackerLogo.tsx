"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface CareTrackerLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  variant?: "default" | "white" | "dark"
  className?: string
  href?: string
}

export { CareTrackerLogo }

export default function CareTrackerLogo({
  size = "md",
  showText = true,
  variant = "default",
  className = "",
  href,
}: CareTrackerLogoProps) {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
    xl: { icon: 64, text: "text-3xl" },
  }

  const colors = {
    default: {
      primary: "#1d326d",
      secondary: "#fcc41d",
      text: "text-[#0F172A] dark:text-white",
    },
    white: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      text: "text-white",
    },
    dark: {
      primary: "#0F172A",
      secondary: "#334155",
      text: "text-[#0F172A]",
    },
  }

  const { icon, text } = sizes[size]
  const { primary, secondary, text: textColor } = colors[variant]

  const LogoContent = (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon - Heart + Medical Cross + Mind Wave */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer Circle with gradient */}
        <defs>
          <linearGradient id={`logoGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primary} />
            <stop offset="100%" stopColor={secondary} />
          </linearGradient>
          <linearGradient id={`heartGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primary} />
            <stop offset="50%" stopColor={secondary} />
            <stop offset="100%" stopColor={primary} />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle cx="24" cy="24" r="22" fill={`url(#logoGradient-${variant})`} opacity="0.1" />
        <circle cx="24" cy="24" r="22" stroke={`url(#logoGradient-${variant})`} strokeWidth="2" fill="none" />

        {/* Heart Shape with Pulse */}
        <path
          d="M24 38C24 38 10 28 10 20C10 14 14 10 19 10C22 10 24 13 24 13C24 13 26 10 29 10C34 10 38 14 38 20C38 28 24 38 24 38Z"
          fill={`url(#heartGradient-${variant})`}
          opacity="0.9"
        />

        {/* Medical Cross in center */}
        <rect x="22" y="16" width="4" height="16" rx="1" fill="white" />
        <rect x="16" y="22" width="16" height="4" rx="1" fill="white" />

        {/* Mind waves on top */}
        <path
          d="M16 12C18 10 20 11 22 10C24 9 26 11 28 10C30 9 32 10 32 12"
          stroke={primary}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Logo Text - Updated to CareTracker */}
      {showText && (
        <div className={`flex flex-col leading-none ${textColor}`}>
          <span className={`font-bold tracking-tight ${text}`}>
            Care<span style={{ color: primary }}>Tracker</span>
          </span>
          {size !== "sm" && (
            <span className="text-[10px] tracking-widest uppercase opacity-60 mt-0.5">Clinic Management</span>
          )}
        </div>
      )}
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{LogoContent}</Link>
  }

  return LogoContent
}
