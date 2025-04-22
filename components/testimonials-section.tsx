"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote:
        "clamber.ai completely transformed my job search. I went from getting no responses to landing interviews at top tech companies within weeks.",
      author: "Sarah J.",
      role: "Software Engineer",
      company: "Hired at TechCorp",
      rating: 5,
    },
    {
      quote:
        "The AI-generated cover letters were spot-on. They highlighted my relevant experience in ways I wouldn't have thought of myself.",
      author: "Michael T.",
      role: "Marketing Manager",
      company: "Hired at BrandCo",
      rating: 5,
    },
    {
      quote:
        "I was skeptical about AI helping with job applications, but clamber.ai proved me wrong. The resume optimization alone was worth it.",
      author: "Priya K.",
      role: "Data Scientist",
      company: "Hired at DataTech",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600">Thousands of professionals have accelerated their careers with clamber.ai.</p>
        </div>

        <div
          ref={ref}
          className={cn("grid md:grid-cols-3 gap-8 max-w-5xl mx-auto", inView ? "animate-fade-in-up" : "opacity-0")}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-light p-6 rounded-xl border border-primary/10 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 -left-4 bg-primary text-white p-3 rounded-lg">
                <Quote className="h-5 w-5" />
              </div>

              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn("h-5 w-5", i < testimonial.rating ? "text-primary fill-primary" : "text-gray-300")}
                  />
                ))}
              </div>

              <p className="italic mb-6">"{testimonial.quote}"</p>

              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
