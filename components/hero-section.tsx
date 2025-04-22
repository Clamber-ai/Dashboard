"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Search, CheckCircle, BarChart } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={ref} className={cn("space-y-6", inView ? "animate-fade-in-up" : "opacity-0")}>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              AI-Powered Job Applications
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
              Climb Higher in Your Career with AI
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              clamber.ai uses advanced AI to optimize your job applications, match you with the perfect positions, and
              help you land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-6 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-6 py-6 text-lg">
                See How It Works
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm md:text-base">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>250K+ Jobs Secured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>1.2M+ Applications</span>
              </div>
            </div>
          </div>

          <div className={cn("relative", inView ? "animate-fade-in" : "opacity-0")}>
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto">
              <div className="absolute -top-10 -right-10 bg-primary text-white p-4 rounded-lg shadow-lg animate-bounce-light">
                <FileText className="h-6 w-6" />
                <span className="text-xs block mt-1">Resume Optimized</span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <Search className="h-5 w-5 text-primary mr-2" />
                  Job Matches
                </h3>
                <div className="space-y-3">
                  {[
                    { title: "Senior Product Designer", company: "TechCorp", match: "98%" },
                    { title: "UX/UI Lead", company: "InnovateCo", match: "95%" },
                    { title: "Creative Director", company: "DesignHub", match: "92%" },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:border-primary transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="font-medium">{job.title}</div>
                        <div className="text-sm text-gray-500">{job.company}</div>
                      </div>
                      <div className="text-primary font-bold">{job.match}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <BarChart className="h-5 w-5 text-primary mr-2" />
                  Application Status
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Applications Sent</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "100%" }}></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Interviews Scheduled</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: "33%" }}></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Offers Received</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 w-72 h-72 bg-primary/20 rounded-full -top-10 -right-10"></div>
            <div className="absolute -z-10 w-40 h-40 bg-secondary/20 rounded-full -bottom-5 -left-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
