"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="clamber.ai logo" width={40} height={40} className="mr-2" />
              <span className="font-bold text-xl text-text">clamber.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-text hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-text hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-text hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium text-text hover:text-primary transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-text hover:text-primary transition-colors flex items-center">
                Resources <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top-left z-50">
                <Link
                  href="#blog"
                  className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="#guides"
                  className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-colors"
                >
                  Guides
                </Link>
                <Link
                  href="#templates"
                  className="block px-4 py-2 text-sm text-text hover:bg-primary hover:text-white transition-colors"
                >
                  Templates
                </Link>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-text hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <details className="group">
                <summary className="text-sm font-medium text-text hover:text-primary transition-colors list-none flex items-center cursor-pointer">
                  Resources <ChevronDown className="h-4 w-4 ml-1 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  <Link
                    href="#blog"
                    className="text-sm text-text hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="#guides"
                    className="text-sm text-text hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Guides
                  </Link>
                  <Link
                    href="#templates"
                    className="text-sm text-text hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    Templates
                  </Link>
                </div>
              </details>
            </nav>
            <div className="mt-4 flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1" onClick={toggleMenu}>
                Sign In
              </Button>
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary-dark text-white" onClick={toggleMenu}>
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
