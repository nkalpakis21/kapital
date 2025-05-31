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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Kapital
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create your account to connect with innovative startups and forward-thinking investors.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Create Your Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Set up your account with basic information
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Complete Onboarding</h3>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "startup"
                      ? "Add your startup details and token preferences"
                      : "Set your investment criteria and token requirements"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Connect and Fund</h3>
                  <p className="text-sm text-muted-foreground">
                    {activeTab === "startup"
                      ? "Connect with investors and raise token-based funding"
                      : "Discover startups and make token-based investments"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Tabs
              defaultValue={defaultType}
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="startup">Startup</TabsTrigger>
                <TabsTrigger value="vc">VC / Investor</TabsTrigger>
              </TabsList>
              <TabsContent value="startup">
                <Card>
                  <CardHeader>
                    <CardTitle>Startup Registration</CardTitle>
                    <CardDescription>
                      Create an account to showcase your startup and raise token-based funding
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-name">Startup Name</Label>
                      <Input
                        id="startup-name"
                        placeholder="Enter your startup name"
                        value={startupName}
                        onChange={(e) => setStartupName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-email">Email</Label>
                      <Input
                        id="startup-email"
                        type="email"
                        placeholder="Enter your email"
                        value={startupEmail}
                        onChange={(e) => setStartupEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-password">Password</Label>
                      <Input
                        id="startup-password"
                        type="password"
                        placeholder="Create a password"
                        value={startupPassword}
                        onChange={(e) => setStartupPassword(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startup-industry">Industry</Label>
                      <Input
                        id="startup-industry"
                        placeholder="e.g., Fintech, Web3, AI"
                        value={startupIndustry}
                        onChange={(e) => setStartupIndustry(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button className="w-full" onClick={createStartupAccount}>
                      Create Startup Account
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                        Log in
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="vc">
                <Card>
                  <CardHeader>
                    <CardTitle>VC / Investor Registration</CardTitle>
                    <CardDescription>
                      Create an account to discover startups and make token-based investments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="vc-name">Fund / Investor Name</Label>
                      <Input id="vc-name" placeholder="Enter your fund or investor name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vc-email">Email</Label>
                      <Input id="vc-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vc-password">Password</Label>
                      <Input id="vc-password" type="password" placeholder="Create a password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vc-investment-focus">Investment Focus</Label>
                      <Input id="vc-investment-focus" placeholder="e.g., Early-stage Web3, DeFi" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button className="w-full">Create Investor Account</Button>
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
