"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Users, Award, TrendingUp, Heart } from "lucide-react"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "250K+",
      label: "Active Users",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      value: "98%",
      label: "Success Rate",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      value: "3.5x",
      label: "Interview Rate",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      value: "4.9/5",
      label: "User Rating",
    },
  ]

  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={cn("space-y-6", inView ? "animate-fade-in-up" : "opacity-0")}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              About clamber.ai
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Transforming How People Find Their Dream Jobs</h2>
            <p className="text-gray-600">
              At clamber.ai, we're on a mission to revolutionize the job application process. We combine cutting-edge AI
              technology with deep industry expertise to help job seekers stand out, get noticed, and land their dream
              jobs.
            </p>
            <p className="text-gray-600">
              Our platform was built by a team of recruitment experts, data scientists, and AI specialists who
              understand the challenges of the modern job market. We've analyzed millions of successful job applications
              to create an AI that knows exactly what employers are looking for.
            </p>
            <p className="text-gray-600">
              Whether you're just starting your career, looking for a change, or aiming for that next big promotion,
              clamber.ai gives you the tools and insights you need to succeed.
            </p>
          </div>

          <div className={cn(inView ? "animate-fade-in" : "opacity-0")}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg inline-block mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-text mb-1">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
