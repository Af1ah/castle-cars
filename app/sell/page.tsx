"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, DollarSign, Clock, CheckCircle } from "lucide-react"

export default function SellPage() {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    name: "",
    email: "",
    phone: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="bg-green-500/20 border border-green-500 rounded-2xl p-8 mb-8">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-400 mb-4">Submission Received!</h1>
            <p className="text-green-300 text-lg">
              Thank you for your interest in selling your car to Castle Cars. We'll review your information and get back
              to you within 24 hours with a preliminary quote.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[#8daece]">
              <strong>Next Steps:</strong>
            </p>
            <ul className="text-[#8daece] space-y-2">
              <li>• We'll contact you within 24 hours</li>
              <li>• Schedule an in-person inspection</li>
              <li>• Receive your final offer</li>
              <li>• Complete the sale if you accept</li>
            </ul>
          </div>
          <Button variant="primary" size="lg" className="mt-8" onClick={() => setSubmitted(false)}>
            Submit Another Car
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Sell Your <span className="text-[#C4A750]">Car</span> to Us
          </h1>
          <p className="text-[#8daece] text-lg max-w-3xl mx-auto mb-8">
            Get a competitive offer for your vehicle. We buy cars in all conditions and handle all the paperwork for
            you.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="bg-[#C4A750] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Competitive Offers</h3>
            <p className="text-[#8daece]">We provide fair market value for your vehicle</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#C4A750] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Process</h3>
            <p className="text-[#8daece]">Get an offer within 24 hours of submission</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#C4A750] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hassle-Free</h3>
            <p className="text-[#8daece]">We handle all paperwork and logistics</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#20364b]">
            <h2 className="text-2xl font-bold mb-6">Tell Us About Your Car</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Vehicle Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-[#8daece] mb-2">
                    Make *
                  </label>
                  <Input
                    id="make"
                    name="make"
                    placeholder="e.g., BMW, Mercedes, Toyota"
                    value={formData.make}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-[#8daece] mb-2">
                    Model *
                  </label>
                  <Input
                    id="model"
                    name="model"
                    placeholder="e.g., X5, C300, Camry"
                    value={formData.model}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-[#8daece] mb-2">
                    Year *
                  </label>
                  <Input
                    id="year"
                    name="year"
                    type="number"
                    placeholder="e.g., 2020"
                    min="1990"
                    max="2024"
                    value={formData.year}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mileage" className="block text-sm font-medium text-[#8daece] mb-2">
                    Mileage *
                  </label>
                  <Input
                    id="mileage"
                    name="mileage"
                    type="number"
                    placeholder="e.g., 50000"
                    value={formData.mileage}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="condition" className="block text-sm font-medium text-[#8daece] mb-2">
                    Condition *
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    className="w-full bg-[#20364b] text-white rounded-xl p-4 border-none focus:outline-none focus:ring-2 focus:ring-[#C4A750] h-14"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-[#20364b] pt-6">
                <h3 className="text-xl font-bold mb-4">Your Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#8daece] mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#8daece] mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#8daece] mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-[#8daece] mb-2">
                  Additional Details
                </label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Tell us about any special features, recent maintenance, or issues with the vehicle..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Photo Upload Placeholder */}
              <div>
                <label className="block text-sm font-medium text-[#8daece] mb-2">Photos (Optional)</label>
                <div className="border-2 border-dashed border-[#20364b] rounded-xl p-8 text-center">
                  <Upload className="h-12 w-12 text-[#8daece] mx-auto mb-4" />
                  <p className="text-[#8daece] mb-2">Upload photos of your vehicle</p>
                  <p className="text-sm text-[#8daece]">Drag and drop or click to browse</p>
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get My Quote"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
