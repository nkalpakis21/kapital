import { LandingHeader } from "@/components/landing/landing-header"
import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingHowItWorks } from "@/components/landing/landing-how-it-works"
import { LandingTestimonials } from "@/components/landing/landing-testimonials"
import { LandingCta } from "@/components/landing/landing-cta"
import { LandingFooter } from "@/components/landing/landing-footer"
import { AuthProvider, useAuth } from "../contexts/AuthContext";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
        <LandingHeader />
        <main className="flex-1">
          <LandingHero />
          <LandingFeatures />
          <LandingHowItWorks />
          <LandingTestimonials />
          <LandingCta />
        </main>
        <LandingFooter />
    </div>
  )
}
