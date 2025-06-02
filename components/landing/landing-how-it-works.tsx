import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function LandingHowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Transforming VC Fund Investing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform connects LPs and GPs through a streamlined tokenized fund process
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold">Create Your Profile</h3>
            <p className="text-center text-muted-foreground">
              LPs set investment criteria and connect wallets, while GPs create fund profiles and tokenization
              parameters
            </p>
            <ArrowRight className="h-6 w-6 text-primary lg:rotate-90" />
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold">Connect and Invest</h3>
            <p className="text-center text-muted-foreground">
              Browse funds by thesis and performance, negotiate terms, and commit capital via USDC
            </p>
            <ArrowRight className="h-6 w-6 text-primary lg:rotate-90" />
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold">Track and Trade</h3>
            <p className="text-center text-muted-foreground">
              Monitor fund performance in real-time and access secondary liquidity when available
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl rounded-lg border bg-muted/50 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">The Digital Fund Advantage</h3>
              <p className="text-muted-foreground">
                Traditional equity funding locks up capital for years. Our token-based approach provides:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>USDC-denominated positions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Tokenized ownership with transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Secondary market liquidity</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Smart contract-enforced vesting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Real-time performance tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Global accessibility via crypto rails</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-muted to-background">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Token funding diagram"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
