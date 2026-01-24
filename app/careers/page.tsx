import { ArrowRight, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | CareTracker",
  description:
    "Join CareTracker - Help us transform healthcare management. View open positions and apply today.",
};

// const openPositions = [
//   {
//     title: "Senior Full-Stack Engineer",
//     department: "Engineering",
//     location: "Melbourne, AU (Hybrid)",
//     type: "Full-time",
//   },
//   {
//     title: "Product Designer",
//     department: "Design",
//     location: "Remote",
//     type: "Full-time",
//   },
//   {
//     title: "Customer Success Manager",
//     department: "Customer Success",
//     location: "Sydney, AU",
//     type: "Full-time",
//   },
//   {
//     title: "Sales Development Representative",
//     department: "Sales",
//     location: "Melbourne, AU",
//     type: "Full-time",
//   },
//   {
//     title: "DevOps Engineer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-time",
//   },
// ];

const openPositions = [];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="relative h-6 inline-flex items-center font-mono uppercase text-xs text-primary mb-8 px-2"
            style={{
              fontFamily:
                "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            }}>
            <span className="block whitespace-nowrap overflow-hidden text-primary relative z-10">
              Careers
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#111A4A] mb-6"
            style={{
              fontFamily: "var(--font-inter), Inter",
            }}>
            Join Our{" "}
            <span className="bg-gradient-to-r from-primary to-[#3b82f6] bg-clip-text text-transparent font-normal">
              Mission
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl text-[#111A4A] opacity-60 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-roboto), Roboto",
            }}>
            Help us transform healthcare management and empower clinics
            worldwide to deliver better patient care.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-[#111A4A]">
              Why Work at CareTracker?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)] transition-all duration-200 group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-medium text-[#111A4A] mb-3">
                Impact at Scale
              </h3>
              <p className="text-sm text-[#111A4A] opacity-60 leading-relaxed">
                Your work directly improves healthcare delivery for thousands of
                clinics and millions of patients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)] transition-all duration-200 group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-medium text-[#111A4A] mb-3">
                Growth & Learning
              </h3>
              <p className="text-sm text-[#111A4A] opacity-60 leading-relaxed">
                Continuous learning budget, mentorship programs, and clear
                career progression paths.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)] transition-all duration-200 group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-medium text-[#111A4A] mb-3">
                Work-Life Balance
              </h3>
              <p className="text-sm text-[#111A4A] opacity-60 leading-relaxed">
                Flexible hours, remote options, and generous PTO to ensure you
                thrive both at work and home.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-[#111A4A]">
              Open Positions
            </h2>
          </div>
          <div className="space-y-4">
            {openPositions.length > 0 ? (
              openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)] transition-all cursor-pointer group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-primary font-medium bg-primary/5 px-2 py-1 rounded-full">
                        {position.department}
                      </span>
                      <h3 className="text-lg font-medium text-[#111A4A] mt-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-[#111A4A] opacity-60 text-sm">
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
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all text-sm">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)]">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-medium text-[#111A4A] mb-2">
                  No Open Positions
                </h3>
                <p className="text-[#111A4A] opacity-60 max-w-md mx-auto text-sm">
                  We don&apos;t have any active listings right now, but
                  we&apos;re always on the lookout for talented individuals to
                  join our team.
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#111A4A] opacity-60 mb-4 text-sm">
              Don&apos;t see the right role?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              Send us your resume
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
