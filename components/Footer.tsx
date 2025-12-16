"use client"
import { Github, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import CareTrackerLogo from "./brand/CareTrackerLogo"

type FooterLink = {
  label: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

type FooterProps = {
  companyName?: string
  tagline?: string
  sections?: FooterSection[]
  socialLinks?: {
    github?: string
    email?: string
  }
}

const defaultSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "Contact Sales", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Clinic API", href: "/features" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Help Center", href: "/faq" },
      { label: "System Status", href: "/faq" },
    ],
  },
]

export const Footer = ({
  companyName = "CareTracker",
  tagline = "Streamline your clinic operations with our comprehensive management platform.",
  sections = defaultSections,
  socialLinks = {
    github: "https://github.com",
    email: "hello@caretracker.com",
  },
}: FooterProps) => {
  const renderLink = (link: FooterLink) => {
    const isInternal = link.href.startsWith("/")

    if (isInternal) {
      return (
        <Link
          href={link.href}
          className="text-sm text-muted-foreground hover:text-[#1d326d] transition-colors duration-150"
        >
          {link.label}
        </Link>
      )
    }

    return (
      <a href={link.href} className="text-sm text-muted-foreground hover:text-[#1d326d] transition-colors duration-150">
        {link.label}
      </a>
    )
  }

  return (
    <footer className="w-full bg-[#fafafa] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
          {/* Brand Column - Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:max-w-sm"
          >
            <div className="mb-4">
              <div className="mb-3">
                <CareTrackerLogo size="md" href="/" />
              </div>
              <p className="text-sm leading-5 text-muted-foreground">{tagline}</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-[#1d326d] hover:border-[#1d326d] transition-colors duration-150"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-[#1d326d] hover:border-[#1d326d] transition-colors duration-150"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Link Sections - Right side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <h4 className="text-sm font-medium text-foreground mb-3 lg:mb-4 uppercase tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-2 lg:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>{renderLink(link)}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
