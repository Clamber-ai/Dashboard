"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div
        ref={ref}
        className={cn("container mx-auto px-4 text-center max-w-3xl", inView ? "animate-fade-in-up" : "opacity-0")}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
        <p className="text-white/80 mb-8 text-lg">
          Join thousands of professionals who have transformed their job search with clamber.ai.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            See Pricing
          </Button>
        </div>
        <p className="mt-6 text-white/70 text-sm">No credit card required to start your free trial</p>
      </div>
    </section>
  )
}
