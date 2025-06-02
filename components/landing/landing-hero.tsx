import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Coins, LineChart, Users } from "lucide-react"

export function LandingHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Token-Based Funding for the Future of Innovation
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect startups and VCs through crypto-based tokens with built-in liquidity and secondary market
                access.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/signup?type=startup">
                  For LPs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/signup?type=vc">For VCs</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full max-w-[450px] rounded-lg bg-gradient-to-br from-primary/20 via-muted to-background p-6">
              <div className="absolute left-6 top-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Coins className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute bottom-24 left-12 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute right-10 top-1/3 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <LineChart className="h-12 w-12 text-primary" />
              </div>
              <div className="absolute bottom-12 right-12 h-32 w-64 rounded-lg bg-card p-4 shadow-lg">
                <div className="mb-2 h-2 w-20 rounded-full bg-primary/20"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-muted"></div>
                  <div className="h-2 w-4/5 rounded-full bg-muted"></div>
                  <div className="h-2 w-2/3 rounded-full bg-muted"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
