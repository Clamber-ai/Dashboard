"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { FileText, Search, PenTool, MessageSquare, BarChart, BriefcaseBusiness, Sparkles } from "lucide-react"

export default function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Resume Optimization",
      description:
        "Our AI analyzes your resume and optimizes it for each job application, highlighting relevant skills and experience.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Smart Job Matching",
      description:
        "Get matched with jobs that fit your skills and career goals using our advanced AI matching algorithm.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Cover Letter Generation",
      description:
        "Generate tailored cover letters in seconds that highlight your qualifications for each specific job.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Interview Preparation",
      description: "Practice with AI-powered mock interviews tailored to the company and role you're applying for.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Application Tracking",
      description: "Track all your applications in one place and get insights on your application performance.",
    },
    {
      icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
      title: "Career Insights",
      description: "Get personalized career advice and insights based on your skills, experience, and goals.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-1 px-3 mb-4 border border-primary rounded-full">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Land Your Dream Job</h2>
          <p className="text-gray-600">
            Our AI-powered platform streamlines every step of the job application process, from finding the right
            opportunities to acing the interview.
          </p>
        </div>

        <div
          ref={ref}
          className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-8", inView ? "animate-fade-in-up" : "opacity-0")}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
