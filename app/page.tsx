import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingCta } from "@/components/landing/landing-cta"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingHero } from "@/components/landing/landing-hero"
import { LandingHowItWorks } from "@/components/landing/landing-how-it-works"
import { LandingTestimonials } from "@/components/landing/landing-testimonials"

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
