import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LandingCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Fund Investing?
            </h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the platform connecting modern LPs with innovative VC funds through tokenized, digital-first
              investing
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup?type=lp">
                For LPs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/signup?type=gp">For Fund Managers</Link>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60">No commitment required. Set up your profile in minutes.</p>
        </div>
      </div>
    </section>
  )
}
