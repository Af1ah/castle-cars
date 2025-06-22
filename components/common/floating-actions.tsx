"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingActions() {
  const handleCall = () => {
    window.location.href = "tel:+918248723357"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/918248723357", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <button
        onClick={handleCall}
        className="bg-[#C4A750] hover:bg-[#B8A045] text-black p-4 rounded-full shadow-lg transition-colors"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </button>
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
