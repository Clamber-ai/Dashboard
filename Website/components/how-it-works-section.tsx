"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Target, FileText, Search, MessageSquare, CheckCircle } from "lucide-react"

export default function HowItWorksSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Upload Your Resume",
      description: "Upload your existing resume or create a new one with our AI-powered resume builder.",
      color: "bg-primary",
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Discover Matching Jobs",
      description: "Our AI matches you with jobs that fit your skills, experience, and career goals.",
      color: "bg-secondary",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Apply with AI Assistance",
      description: "Get AI-generated cover letters and application materials tailored to each job.",
      color: "bg-primary",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Track & Improve",
      description: "Track your applications and get insights to improve your success rate.",
      color: "bg-secondary",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-1 px-3 mb-4 border border-primary rounded-full">
            <Target className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How clamber.ai Works</h2>
          <p className="text-gray-600">
            Our streamlined process makes job applications easier and more effective than ever before.
          </p>
        </div>

        <div ref={ref} className={cn("relative max-w-4xl mx-auto", inView ? "animate-fade-in-up" : "opacity-0")}>
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col md:flex-row items-center gap-8 mb-12 last:mb-0",
                index % 2 === 1 ? "md:flex-row-reverse" : "",
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="md:w-1/2 relative">
                <div
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center z-10 relative mx-auto md:mx-0",
                    step.color,
                  )}
                >
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-4 border-primary animate-pulse-light"></div>
                </div>
              </div>

              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
