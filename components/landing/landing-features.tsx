import { BarChart3, Coins, FileText, LineChart, MessageSquare, ShieldCheck, Shuffle, Users } from "lucide-react"

export function LandingFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              A Complete Platform for Digital VC Fund Investing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to connect LPs with VC funds through modern, tokenized fund structures
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">USDC-Denominated Investing</h3>
                <p className="text-muted-foreground">
                  Fast, low-friction, on-chain capital deployment with stablecoin rails
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Tokenized LP Positions</h3>
                <p className="text-muted-foreground">
                  Transparent ownership and vesting schedules with smart contract enforcement
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shuffle className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Secondary Liquidity</h3>
                <p className="text-muted-foreground">
                  Built-in liquidity post-cliff via OTC or AMM-style trading pools
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Real-Time Tracking</h3>
                <p className="text-muted-foreground">
                  Live performance metrics including TVPI, IRR, and portfolio updates
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Global Access</h3>
                <p className="text-muted-foreground">
                  International LP participation via crypto rails, bypassing traditional banking
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Smart Contract Vesting</h3>
                <p className="text-muted-foreground">Automated vesting and redemption with full auditability</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Lower Minimums</h3>
                <p className="text-muted-foreground">Reduced barriers to entry with digital-first fund participation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">DAO Compatible</h3>
                <p className="text-muted-foreground">Native Web3 wallet integration and DAO treasury management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
