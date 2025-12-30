"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Send,
  CheckCircle2,
  MessageSquare,
  Headphones,
  FileText,
  Users,
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    contact: "support@caretracker.com.au",
    type: "email",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm AEST",
    contact: "1800 633 356",
    type: "phone",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available 9am-5pm AEST",
    type: "chat",
  },
]

const offices = [
  {
    city: "Melbourne",
    address: "Level 12, 123 Collins Street",
    phone: "+61 3 9000 1234",
    email: "melbourne@caretracker.com.au",
    country: "Australia",
    isHQ: true,
  },
  {
    city: "Sydney",
    address: "Level 8, 123 Pitt Street",
    suburb: "Sydney NSW 2000",
    phone: "+61 2 8765 4321",
    email: "sydney@caretracker.com.au",
  },
  {
    city: "Brisbane",
    address: "Level 5, 45 Queen Street",
    suburb: "Brisbane QLD 4000",
    phone: "+61 7 3456 7890",
    email: "brisbane@caretracker.com.au",
  },
]

const supportEmails = [
  {
    icon: Headphones,
    title: "General Support",
    description: "For general inquiries and support",
    email: "support@caretracker.com.au",
  },
  {
    icon: Users,
    title: "Enterprise Sales",
    description: "For multi-location and enterprise solutions",
    email: "enterprise@caretracker.com.au",
  },
  {
    icon: FileText,
    title: "Billing & Accounts",
    description: "For billing and account queries",
    email: "billing@caretracker.com.au",
  },
  {
    icon: Building2,
    title: "Partnerships",
    description: "For integration and partnership opportunities",
    email: "partners@caretracker.com.au",
  },
]

export function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    clinicName: "",
    clinicSize: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    try {
    const response = await fetch("https://formspree.io/f/mregvrnr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      alert("Message sent successfully!");

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1d326d]/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span
              className="inline-block px-4 py-2 bg-[#1d326d]/10 text-[#1d326d] rounded-full text-sm font-semibold mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Contact Us
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Get in Touch with <span className="text-[#1d326d]">CareTracker</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "Inter" }}>
              Have questions about our clinic management software? Our team is here to help you find the perfect
              solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-[#1d326d]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-[#1d326d]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3" style={{ fontFamily: "Inter" }}>
                  {method.description}
                </p>
                <p className="text-[#1d326d] font-semibold" style={{ fontFamily: "Inter" }}>
                  {method.contact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Inter" }}>
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-[#fcc41d]/10 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#fcc41d] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "Inter" }}>
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground" style={{ fontFamily: "Inter" }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d326d]/20 focus:border-[#1d326d] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1d326d] text-white font-semibold rounded-xl hover:bg-[#1d326d]/90 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "Inter" }}>
                Our Locations
              </h2>
              <div className="bg-gray-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center mb-8">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Map Placeholder</p>
                </div>
              </div>

              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#1d326d]/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-[#1d326d]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground" style={{ fontFamily: "Inter" }}>
                          {office.city} {office.isHQ && <span className="text-[#1d326d]">(HQ)</span>}
                        </h3>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                        <p className="text-sm text-[#1d326d]">{office.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Emails */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "Inter" }}>
              Department Contacts
            </h2>
            <p className="text-muted-foreground" style={{ fontFamily: "Inter" }}>
              Reach the right team directly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportEmails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#1d326d]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#1d326d]" />
                </div>
                <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "Inter" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: "Inter" }}>
                  {item.description}
                </p>
                <a href={`mailto:${item.email}`} className="text-sm text-[#1d326d] font-medium">
                  {item.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
