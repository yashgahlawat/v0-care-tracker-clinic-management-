import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | CareTracker",
  description: "Join CareTracker - Help us transform healthcare management. View open positions and apply today.",
}

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Melbourne, AU (Hybrid)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Sydney, AU",
    type: "Full-time",
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Melbourne, AU",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero Section */}
      <div className="bg-[#1d326d] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Help us transform healthcare management and empower clinics worldwide to deliver better patient care.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1d326d] text-center mb-12">Why Work at CareTracker?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#fcc41d]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1d326d] mb-2">Impact at Scale</h3>
              <p className="text-[#666666]">
                Your work directly improves healthcare delivery for thousands of clinics and millions of patients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#fcc41d]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1d326d] mb-2">Growth & Learning</h3>
              <p className="text-[#666666]">
                Continuous learning budget, mentorship programs, and clear career progression paths.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#fcc41d]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1d326d] mb-2">Work-Life Balance</h3>
              <p className="text-[#666666]">
                Flexible hours, remote options, and generous PTO to ensure you thrive both at work and home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1d326d] text-center mb-12">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-[#e5e5e5] rounded-xl p-6 hover:border-[#1d326d] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-sm text-[#fcc41d] font-medium">{position.department}</span>
                    <h3 className="text-xl font-semibold text-[#1d326d] mt-1">{position.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-[#666666] text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#1d326d] font-medium group-hover:gap-3 transition-all">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#666666] mb-4">Don&apos;t see the right role?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#1d326d] font-medium hover:text-[#fcc41d] transition-colors"
            >
              Send us your resume
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
