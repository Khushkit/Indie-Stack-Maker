"use client"

import Hero from "@/components/Hero"
import FeaturesSection from "@/components/FeaturesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import PricingSection from "@/components/PricingSection"
import FaqSection from "@/components/FaqSection"
import CtaBanner from "@/components/CtaBanner"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
      <ScrollToTop />
    </>
  )
} 