import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Castle Cars - Premium Used Car Dealership in Kerala",
  description:
    "Discover premium used cars at Castle Cars in Vengara, Malappuram, Kerala. With 179K+ Instagram followers, we're your trusted partner for quality vehicles.",
  keywords: "used cars Kerala, premium cars Malappuram, car dealership Vengara, Castle Cars, luxury cars Kerala",
  authors: [{ name: "Castle Cars" }],
  creator: "Castle Cars",
  publisher: "Castle Cars",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://castlecars.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Castle Cars - Premium Used Car Dealership in Kerala",
    description:
      "Discover premium used cars at Castle Cars in Vengara, Malappuram, Kerala. With 179K+ Instagram followers, we're your trusted partner for quality vehicles.",
    url: "https://castlecars.com",
    siteName: "Castle Cars",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Castle Cars - Premium Used Car Dealership",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle Cars - Premium Used Car Dealership in Kerala",
    description: "Discover premium used cars at Castle Cars in Vengara, Malappuram, Kerala.",
    images: ["/og-image.jpg"],
    creator: "@castlecars",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-neutral-black text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
