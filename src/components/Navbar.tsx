"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/indie-maker-logo.svg" 
                alt="Indie Maker Stack" 
                width={40}
                height={40}
                className="mr-2 hover:animate-pulse-subtle transition-all duration-300" 
              />
              <span className="font-display font-bold text-lg text-gray-900">Indie Maker Stack</span>
            </Link>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#pricing" className="font-medium text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="font-medium text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm transition-colors">
                FAQs
              </Link>
              <Button size="sm" variant="default" className="ml-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-200 font-medium">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
