import { BarChart, Coins, Handshake, Info, TrendingUp, Users } from "lucide-react"

export function LandingFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Features</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why choose Kapital?</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform provides a suite of tools designed for the modern LP and fund manager.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Coins className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-lg font-bold">Tokenized LP Positions</h3>
            <p className="text-sm text-muted-foreground">
              Invest in VC funds with tokenized positions for unprecedented flexibility and liquidity.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Users className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-lg font-bold">Global LP Access</h3>
            <p className="text-sm text-muted-foreground">
              Reach a wider LP base with digital onboarding and global accessibility.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
              <BarChart className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-lg font-bold">Real-time Performance</h3>
            <p className="text-sm text-muted-foreground">
              Monitor fund and portfolio performance with comprehensive analytics.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Handshake className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-lg font-bold">Secondary Market</h3>
            <p className="text-sm text-muted-foreground">
              Access liquidity on demand through a secure secondary trading platform.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Info className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-lg font-bold">Transparent Reporting</h3>
            <p className="text-sm text-muted-foreground">
              Gain full visibility into fund operations and capital deployment.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
              <TrendingUp className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-lg font-bold">Automated Workflows</h3>
            <p className="text-sm text-muted-foreground">
              Streamline capital calls, distributions, and investor communications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
