import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "clamber.ai - AI-Powered Job Application Platform",
  description:
    "Use AI to optimize your job applications, match with perfect positions, and land your dream job faster.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
