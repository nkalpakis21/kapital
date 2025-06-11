import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground text-background">
      <div className="container grid items-center justify-center gap-4 px-8 md:px-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to get started?</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join Kapital today and experience the future of VC fund investing.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" size="lg" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button variant="outline" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground" size="lg" asChild>
            <Link href="/login">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
