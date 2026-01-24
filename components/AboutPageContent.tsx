"use client";

import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  FileCheck,
  Lock,
  Shield,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const timelineMilestones = [
  {
    year: "2019",
    title: "Founded in Sydney",
    description:
      "Established with a mission to transform healthcare operations across Australia",
  },
  {
    year: "2021",
    title: "First 100 Clinics",
    description:
      "Reached our first major milestone serving medical practices nationwide",
  },
  {
    year: "2023",
    title: "ISO 27001 Certification",
    description:
      "Achieved international information security management certification",
  },
  {
    year: "2024",
    title: "Enterprise Platform Launch",
    description:
      "Deployed comprehensive solutions for multi-location healthcare networks",
  },
];

const leadershipTeam = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Clinical Director",
    image: "/professional-woman-doctor-cmo-headshot.jpg",
  },
  {
    name: "James Wong",
    role: "Head of Data Security",
    image: "/professional-man-product-manager-headshot.jpg",
  },
  {
    name: "Dr. Emily Watson",
    role: "Chief Medical Officer",
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Torres",
    role: "Chief Technology Officer",
    image: "/professional-cto-headshot.png",
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    image: "/professional-man-engineer-headshot.jpg",
  },
  {
    name: "Lisa Nguyen",
    role: "Head of Clinical Operations",
    image: "/professional-woman-customer-success-headshot.jpg",
  },
];

const complianceBadges = [
  { name: "ISO 27001", icon: Shield },
  { name: "GDPR Compliant", icon: Lock },
  { name: "Australian Privacy Principles", icon: FileCheck },
  { name: "Healthcare Standards", icon: Award },
];

export function AboutPageContent() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section - adjusted padding since global navbar handles top spacing */}
      <section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1d326d] mb-8 leading-tight"
              style={{ fontFamily: "Inter" }}
            >
              We are building the Operating System for Modern Healthcare.
            </h1>
            <p
              className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Inter" }}
            >
              Trusted by over 500 medical practices across Australia to deliver
              secure, compliant, and intelligent clinic management solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-[#1d326d]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#1d326d]" />
              </div>
              <h2
                className="text-2xl font-bold text-[#1d326d] mb-4"
                style={{ fontFamily: "Inter" }}
              >
                Our Mission
              </h2>
              <p
                className="text-slate-600 mb-6"
                style={{ fontFamily: "Inter" }}
              >
                To empower healthcare providers with intuitive, intelligent
                software that eliminates administrative burden and lets them
                focus on what matters most — patient care.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcc41d] mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Simplify clinic operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcc41d] mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Improve patient outcomes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcc41d] mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Support healthcare growth
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-[#fcc41d]/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#fcc41d]" />
              </div>
              <h2
                className="text-2xl font-bold text-[#1d326d] mb-4"
                style={{ fontFamily: "Inter" }}
              >
                Our Vision
              </h2>
              <p
                className="text-slate-600 mb-6"
                style={{ fontFamily: "Inter" }}
              >
                A future where every healthcare practice, regardless of size,
                has access to world-class technology that enhances the care
                experience for both providers and patients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcc41d] mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Healthcare without boundaries
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcc41d] mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Technology that empowers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcc41d] mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Innovation for all practices
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-block px-4 py-2 bg-[#1d326d]/10 text-[#1d326d] rounded-full text-sm font-semibold mb-4"
                style={{ fontFamily: "Inter" }}
              >
                How We Help
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1d326d] mb-4"
                style={{ fontFamily: "Inter" }}
              >
                Streamlining Clinic Operations
              </h2>
              <p
                className="text-lg text-slate-600 max-w-2xl mx-auto"
                style={{ fontFamily: "Inter" }}
              >
                CareTracker provides comprehensive solutions that address the
                real challenges healthcare practices face every day.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#1d326d]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users2 className="w-8 h-8 text-[#1d326d]" />
              </div>
              <h3
                className="text-xl font-bold text-[#1d326d] mb-3"
                style={{ fontFamily: "Inter" }}
              >
                Automate the Routine
              </h3>
              <p className="text-slate-600" style={{ fontFamily: "Inter" }}>
                Eliminate repetitive tasks like appointment reminders, billing,
                and follow-ups with intelligent automation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#fcc41d]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#fcc41d]" />
              </div>
              <h3
                className="text-xl font-bold text-[#1d326d] mb-3"
                style={{ fontFamily: "Inter" }}
              >
                Unified Platform
              </h3>
              <p className="text-slate-600" style={{ fontFamily: "Inter" }}>
                Replace fragmented tools with one integrated system for
                scheduling, records, billing, and communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#1d326d]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-[#1d326d]" />
              </div>
              <h3
                className="text-xl font-bold text-[#1d326d] mb-3"
                style={{ fontFamily: "Inter" }}
              >
                Built-in Compliance
              </h3>
              <p className="text-slate-600" style={{ fontFamily: "Inter" }}>
                Stay compliant with Australian healthcare regulations without
                the complexity. Security is built into every feature.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl font-bold text-[#1d326d] mb-4"
                style={{ fontFamily: "Inter" }}
              >
                Our Journey
              </h2>
              <p
                className="text-lg text-slate-600"
                style={{ fontFamily: "Inter" }}
              >
                Building trust through consistent excellence and innovation
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-12">
              {timelineMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Gold dot */}
                  <div className="absolute left-6 top-1 w-5 h-5 bg-[#fcc41d] rounded-full border-4 border-slate-50 shadow-md" />

                  <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
                    <div
                      className="text-2xl font-bold text-[#fcc41d] mb-2"
                      style={{ fontFamily: "Inter" }}
                    >
                      {milestone.year}
                    </div>
                    <h3
                      className="text-xl font-bold text-[#1d326d] mb-2"
                      style={{ fontFamily: "Inter" }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="text-slate-600"
                      style={{ fontFamily: "Inter" }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl font-bold text-[#1d326d] mb-4"
                style={{ fontFamily: "Inter" }}
              >
                Leadership Team
              </h2>
              <p
                className="text-lg text-slate-600"
                style={{ fontFamily: "Inter" }}
              >
                Medical and technology experts dedicated to healthcare
                excellence
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Square photo with B&W to color effect on hover */}
                  <div className="aspect-square relative bg-slate-100 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3
                      className="text-lg font-bold text-[#1d326d] mb-1"
                      style={{ fontFamily: "Inter" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-sm text-slate-600 font-medium"
                      style={{ fontFamily: "Inter" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl font-bold text-[#1d326d] mb-4"
                style={{ fontFamily: "Inter" }}
              >
                Trusted & Certified
              </h2>
              <p
                className="text-lg text-slate-600"
                style={{ fontFamily: "Inter" }}
              >
                Meeting the highest standards in healthcare security and
                compliance
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#1d326d]/5 flex items-center justify-center mb-4">
                  <badge.icon className="w-10 h-10 text-[#1d326d] opacity-50" />
                </div>
                <h3
                  className="text-base font-bold text-[#1d326d] opacity-50"
                  style={{ fontFamily: "Inter" }}
                >
                  {badge.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-slate-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <Users2 className="w-12 h-12 text-[#1d326d] mx-auto mb-4" />
              <h3
                className="text-2xl font-bold text-[#1d326d] mb-3"
                style={{ fontFamily: "Inter" }}
              >
                Partner With Us
              </h3>
              <p
                className="text-slate-600 mb-6"
                style={{ fontFamily: "Inter" }}
              >
                Join over 500 medical practices that trust CareTracker to power
                their operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#1d326d] text-white font-semibold rounded-full hover:bg-[#1d326d]/90 transition-colors shadow-md"
                style={{ fontFamily: "Inter" }}
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
