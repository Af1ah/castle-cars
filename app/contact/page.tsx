"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Get in <span className="text-[#C4A750]">Touch</span>
          </h1>
          <p className="text-[#8daece] text-lg max-w-2xl mx-auto">
            We're here to assist you with any inquiries or requests. Please fill out the form below, and we'll get back
            to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#20364b]">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 mb-4">
                  <h3 className="text-green-400 font-bold text-lg mb-2">Message Sent!</h3>
                  <p className="text-green-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
                <Button variant="primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#8daece] mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8daece] mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#8daece] mb-2">
                    Your Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#8daece] mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" variant="blue" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#20364b]">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C4A750] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-[#8daece]">+91 82487 23357</p>
                    <p className="text-sm text-[#8daece]">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#C4A750] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-[#8daece]">info@castlecars.com</p>
                    <p className="text-sm text-[#8daece]">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#C4A750] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-[#8daece]">Vengara, Malappuram</p>
                    <p className="text-[#8daece]">Kerala 676304, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#C4A750] p-3 rounded-lg">
                    <Instagram className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/castle_cars_?igsh=MXZlc3p6b2w0NjB0eA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8daece] hover:text-[#C4A750] transition-colors"
                    >
                      @castle_cars_
                    </a>
                    <p className="text-sm text-[#8daece]">111K+ followers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#C4A750] p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-[#8daece]">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-[#8daece]">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#20364b]">
              <h3 className="text-xl font-bold mb-4">Find Us</h3>
              <div className="bg-[#20364b] rounded-lg h-64 flex items-center justify-center">
                <p className="text-[#8daece]">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
