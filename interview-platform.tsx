"use client"

import { useState } from "react"
import { ChevronDown, Play, Code, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function InterviewPlatform() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      {/* Promotional Banner */}
      <div className="bg-primary/10 p-3 flex items-center justify-center gap-4 relative">
        <div className="flex-1 text-center md:text-right max-w-md ml-auto">
          <h2 className="font-bold text-lg md:text-xl">Rise Into Your Potential - 50% Off!</h2>
          <p className="text-sm">Easter is about new life—step into your next chapter with confidence and clarity.</p>
        </div>
        <div className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium">
          Use code BLOOM50 to level up
        </div>
        <button className="absolute right-2 top-2 text-gray-500">×</button>
      </div>

      {/* Navigation */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Image src="/logo.png" alt="clamber.ai logo" width={40} height={40} />
              <span className="font-bold text-xl ml-2">clamber.ai</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium">
              Interview Copilot™
            </a>
            <a href="#" className="text-sm font-medium flex items-center">
              AI Application <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="text-sm font-medium">
              AI Mock Interview
            </a>
            <a href="#" className="text-sm font-medium flex items-center">
              Pricing <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="text-sm font-medium flex items-center">
              Resources <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <a href="#" className="text-sm font-medium flex items-center">
              Question Bank <ChevronDown className="h-4 w-4 ml-1" />
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Unlock Your Interview Superpowers with AI, Your AI-Powered Interview Copilot
            </h1>
            <div className="flex items-center gap-6 mb-8 text-sm md:text-base">
              <div>
                <span className="font-bold block">250K+</span>
                Offers Received
              </div>
              <div className="h-8 border-r border-gray-300"></div>
              <div>
                <span className="font-bold block">1.2M+</span>
                Interviews Aced
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg">
              Activate AI Interview Mode Now
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              Interview Copilot™ generating actionable guidance for interviews in real-time
            </p>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Interview interface demonstration"
                  className="w-full"
                />
                <div className="absolute top-10 left-0 transform -translate-x-1/4 text-primary">
                  <div className="bg-white p-2 rounded-lg shadow-lg text-sm max-w-[200px] relative">
                    <p>Seamless connection to any interview meeting software</p>
                    <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                        <path d="M0 10 C20 0, 30 20, 40 10" stroke="currentColor" fill="none" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/4 right-0 transform translate-x-1/4 text-primary">
                  <div className="bg-white p-2 rounded-lg shadow-lg text-sm max-w-[200px] relative">
                    <p>Real-time and personalized suggestions for answers</p>
                    <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2">
                      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                        <path d="M0 10 C20 0, 30 20, 40 10" stroke="currentColor" fill="none" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-10 right-0 transform translate-x-1/4 text-primary">
                  <div className="bg-white p-2 rounded-lg shadow-lg text-sm max-w-[200px] relative">
                    <p>Support coding interviews and more</p>
                    <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2">
                      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                        <path d="M0 10 C20 0, 30 20, 40 10" stroke="currentColor" fill="none" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/4 text-primary">
                  <div className="bg-white p-2 rounded-lg shadow-lg text-sm max-w-[200px] relative">
                    <p>Real-time transcription from interviewer</p>
                    <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                        <path d="M0 10 C20 0, 30 20, 40 10" stroke="currentColor" fill="none" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 max-w-2xl mx-auto">
            300,000+ offers from the most exciting companies and organizations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["TikTok", "Twitch", "UBS", "Airbnb", "Bain & Company", "BCG", "Canva", "Cisco", "Citi"].map((company) => (
              <div key={company} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="h-8 flex items-center text-primary font-bold">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">How clamber.ai Helps You Succeed</h2>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Play className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">AI Mock Interviews</h3>
                    <p className="text-gray-600">
                      Practice with AI interviewers tailored to your target role and company
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Code className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Technical Support</h3>
                    <p className="text-gray-600">
                      Get help with coding challenges and technical questions in real-time
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Real-time Coaching</h3>
                    <p className="text-gray-600">Receive instant feedback and suggestions during live interviews</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button className="bg-primary hover:bg-primary/90 mt-4">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="font-bold text-xl">Comprehensive Interview Support</h3>
                <p>Our AI-powered platform provides end-to-end support for your interview journey:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Seamless integration with Zoom, Teams, and other meeting platforms</li>
                  <li>Real-time transcription of interviewer questions</li>
                  <li>AI-generated answer suggestions tailored to your background</li>
                  <li>Post-interview analysis and improvement recommendations</li>
                  <li>Extensive question bank covering all major companies and roles</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="testimonials">
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="border p-4 rounded-lg">
                  <p className="italic mb-4">
                    "clamber.ai completely transformed my interview preparation. The real-time suggestions during my
                    actual interviews gave me the confidence to land offers at multiple tech companies."
                  </p>
                  <p className="font-bold">— Software Engineer, Hired at Top Tech Company</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <p className="italic mb-4">
                    "The mock interviews were incredibly realistic and the feedback was spot-on. I was able to identify
                    and fix my weaknesses before the real interviews."
                  </p>
                  <p className="font-bold">— Product Manager, Received Multiple Offers</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to ace your next interview?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join over 250,000 professionals who have secured their dream jobs with clamber.ai
          </p>
          <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">Start Free Trial</Button>
        </div>
      </section>
    </div>
  )
}
