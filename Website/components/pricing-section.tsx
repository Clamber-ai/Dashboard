"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, X, Zap } from "lucide-react"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleBilling = () => {
    setIsAnnual(!isAnnual)
  }

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, annual: 0 },
      features: ["5 Job Applications per month", "Basic Resume Analysis", "Job Matching", "Application Tracking"],
      limitations: ["No Cover Letter Generation", "No Interview Preparation", "Limited Job Recommendations"],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200 hover:border-primary",
    },
    {
      name: "Pro",
      description: "For serious job seekers",
      price: { monthly: 19, annual: 15 },
      features: [
        "Unlimited Job Applications",
        "Advanced Resume Optimization",
        "AI Cover Letter Generation",
        "Basic Interview Preparation",
        "Priority Job Matching",
        "Application Insights",
      ],
      limitations: ["Limited Interview Practice Sessions"],
      cta: "Start Free Trial",
      popular: true,
      color: "border-primary shadow-lg",
    },
    {
      name: "Premium",
      description: "For career accelerators",
      price: { monthly: 39, annual: 29 },
      features: [
        "Everything in Pro",
        "Unlimited Interview Practice",
        "Career Coaching Sessions",
        "Salary Negotiation Tools",
        "Executive Resume Review",
        "Priority Support",
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: false,
      color: "border-gray-200 hover:border-primary",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center p-1 px-3 mb-4 border border-primary rounded-full">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Right Plan for Your Career</h2>
          <p className="text-gray-600 mb-8">
            Flexible plans designed to help you at every stage of your career journey.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={cn("text-sm", !isAnnual ? "font-bold text-primary" : "text-gray-600")}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={toggleBilling} className="data-[state=checked]:bg-primary" />
            <span className={cn("text-sm", isAnnual ? "font-bold text-primary" : "text-gray-600")}>
              Annual <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div
          ref={ref}
          className={cn("grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", inView ? "animate-fade-in-up" : "opacity-0")}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "border-2 rounded-xl p-6 transition-all duration-300 flex flex-col h-full",
                plan.color,
                plan.popular ? "relative" : "",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                {isAnnual && plan.price.annual > 0 && (
                  <p className="text-sm text-primary mt-1">Billed annually (save 20%)</p>
                )}
              </div>

              <div className="mb-6 flex-grow">
                <p className="font-medium mb-3">What's included:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <>
                    <p className="font-medium mb-3 mt-4">Limitations:</p>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start text-gray-500">
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <Button
                className={cn(
                  "w-full",
                  plan.popular
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-white border border-primary text-primary hover:bg-primary/5",
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
