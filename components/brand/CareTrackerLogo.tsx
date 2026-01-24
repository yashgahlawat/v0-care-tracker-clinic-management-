"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CareTrackerLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "default" | "white" | "dark";
  className?: string;
  href?: string;
}

export { CareTrackerLogo };

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
  };

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
  };

  const { icon, text } = sizes[size];
  const { primary, secondary, text: textColor } = colors[variant];

  const LogoContent = (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}>
      <Image
        src="/logo.png"
        alt="CareTracker Logo"
        width={200}
        height={50}
        className="flex-shrink-0"
      />
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{LogoContent}</Link>;
  }

  return LogoContent;
}
