import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function LandingTestimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trusted by Modern LPs and Innovative Fund Managers
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the LPs and GPs who are transforming fund investing with VentureToken
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/50" />
                <p className="text-lg">
                &quot;VentureToken transformed our fund investing process. The USDC-denominated positions and tokenized
                  structure gave us the flexibility and transparency we needed as a DAO treasury.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="Sarah Chen"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Chen</h4>
                    <p className="text-sm text-muted-foreground">Treasury Lead, MetaDAO</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/50" />
                <p className="text-lg">
                &quot;As a fund manager, the platform&apos;s tokenization infrastructure allowed us to access a global LP base
                  we never could have reached through traditional channels. The secondary liquidity is a game-changer.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="Michael Rodriguez"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Managing Partner, Nexus Ventures</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/50" />
                <p className="text-lg">
                &quot;The real-time performance tracking and smart contract vesting created unprecedented transparency in
                  our fund investments. We can finally see exactly where our capital is deployed.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="Aisha Johnson"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Aisha Johnson</h4>
                    <p className="text-sm text-muted-foreground">Investment Director, Chen Family Office</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/50" />
                <p className="text-lg">
                &quot;VentureToken&apos;s platform helped us discover early-stage Web3 funds that perfectly matched our
                  investment thesis. The lower minimums and digital onboarding made participation seamless.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="David Park"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Park</h4>
                    <p className="text-sm text-muted-foreground">Principal, Crypto Capital LP</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
