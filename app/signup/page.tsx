"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Coins } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { User } from "firebase/auth"
import { StartupService } from "@/lib/services/startupService"
import { useStartup } from "@/hooks/useStartup"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") || "startup"
  const [activeTab, setActiveTab] = useState(defaultType)
  const { signup, currentUser } = useAuth()
  const { createStartup } = useStartup()
  const [startupEmail, setStartupEmail] = useState("")
  const [startupPassword, setStartupPassword] = useState("")
  const [startupName, setStartupName] = useState("")
  const [startupIndustry, setStartupIndustry] = useState("")

  const createStartupAccount = async () => {
    try {
      // First create the user account
      const user = await signup(startupEmail, startupPassword)
      
      // Create startup using the startup service
      const startupService = new StartupService()
      await startupService.createStartup({
        name: startupName,
        industry: startupIndustry,
        userId: user.uid,
      })

      // Optionally navigate to dashboard or show success message
      // router.push('/dashboard')
    } catch (error) {
      console.error("Signup failed:", error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Coins className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Kapital</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      <main className="flex-1 py-12">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join VentureToken</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create your account to access digital-first VC fund investing with tokenized positions and USDC
                settlement.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Create Your Profile</h3>
                  <p className="text-sm text-muted-foreground">Set up your account with basic information</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Complete Onboarding</h3>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "lp"
                      ? "Set your investment criteria and connect your wallet"
                      : "Create your fund profile and tokenization parameters"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Start Investing</h3>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "lp"
                      ? "Discover VC funds and make USDC-denominated investments"
                      : "Launch your fund and start raising capital from LPs"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Tabs defaultValue={defaultType} value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="lp">Limited Partner</TabsTrigger>
                <TabsTrigger value="gp">Fund Manager</TabsTrigger>
              </TabsList>
              <TabsContent value="lp">
                <Card>
                  <CardHeader>
                    <CardTitle>LP Registration</CardTitle>
                    <CardDescription>
                      Create an account to invest in digital-first VC funds with tokenized positions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="lp-name">Full Name / Entity Name</Label>
                      <Input id="lp-name" placeholder="Enter your name or entity name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lp-email">Email</Label>
                      <Input id="lp-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lp-password">Password</Label>
                      <Input id="lp-password" type="password" placeholder="Create a password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lp-type">Investor Type</Label>
                      <Input id="lp-type" placeholder="e.g., Individual, Family Office, DAO" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button className="w-full">Create LP Account</Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                        Log in
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="gp">
                <Card>
                  <CardHeader>
                    <CardTitle>Fund Manager Registration</CardTitle>
                    <CardDescription>
                      Create an account to launch tokenized VC funds and raise capital from modern LPs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="gp-name">Fund / Firm Name</Label>
                      <Input id="gp-name" placeholder="Enter your fund or firm name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gp-email">Email</Label>
                      <Input id="gp-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gp-password">Password</Label>
                      <Input id="gp-password" type="password" placeholder="Create a password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gp-focus">Investment Focus</Label>
                      <Input id="gp-focus" placeholder="e.g., Early-stage Web3, Climate Tech" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button className="w-full">Create Fund Manager Account</Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                        Log in
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
