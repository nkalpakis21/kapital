import { BarChart3, Coins, FileText, LineChart, MessageSquare, ShieldCheck, Shuffle, Users } from "lucide-react"

export function LandingFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              A Complete Platform for Token-Based Funding
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to connect startups and VCs through innovative token-based funding models
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Pitch Deck Hosting</h3>
                <p className="text-muted-foreground">
                  Securely upload and share pitch materials with potential investors
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Token Design Tools</h3>
                <p className="text-muted-foreground">
                  Create and customize token models with flexible terms and conditions
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Milestone Tracking</h3>
                <p className="text-muted-foreground">Set and monitor funding milestones with transparent reporting</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Secure Messaging</h3>
                <p className="text-muted-foreground">Built-in communication tools for investors</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Startup Discovery</h3>
                <p className="text-muted-foreground">
                  Advanced filters to find the perfect startups for your investment thesis
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Portfolio Analytics</h3>
                <p className="text-muted-foreground">Track performance of your token investments with real-time data</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shuffle className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Secondary Market</h3>
                <p className="text-muted-foreground">Access liquidity through our integrated token marketplace</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Compliance Tools</h3>
                <p className="text-muted-foreground">Stay compliant with built-in regulatory guidance and tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
