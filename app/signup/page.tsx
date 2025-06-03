"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
import { LPService } from "@/lib/services/lpService"
import { GPService } from "@/lib/services/gpService"
import { toast } from "sonner"

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") || "lp"
  const [activeTab, setActiveTab] = useState(defaultType)
  const { signup, currentUser } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  console.log(currentUser)
  // LP Form State
  const [lpName, setLPName] = useState("")
  const [lpEmail, setLPEmail] = useState("")
  const [lpPassword, setLPPassword] = useState("")
  const [lpType, setLPType] = useState("")

  // GP Form State
  const [gpName, setGPName] = useState("")
  const [gpEmail, setGPEmail] = useState("")
  const [gpPassword, setGPPassword] = useState("")
  const [gpFocus, setGPFocus] = useState("")

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  }

  const validatePassword = (password: string) => {
    return password.length >= 8
  }

  const createLPAccount = async () => {
    try {
      setIsLoading(true)

      // Validate fields
      if (!lpName || !lpEmail || !lpPassword || !lpType) {
        toast.error("Please fill in all fields")
        return
      }

      if (!validateEmail(lpEmail)) {
        toast.error("Please enter a valid email address")
        return
      }

      if (!validatePassword(lpPassword)) {
        toast.error("Password must be at least 8 characters long")
        return
      }

      // First create the user account
      const user = await signup(lpEmail, lpPassword)
      if (!user) {
        toast.error("Failed to create user account")
        return
      }
      
      // Create LP using the LP service
      const lpService = new LPService()
      await lpService.createLP({
        name: lpName,
        email: lpEmail,
        type: lpType,
        userId: user.uid,
      })

      toast.success("LP account created successfully!")
      router.push("/dashboard/lp")
    } catch (error) {
      console.error("Signup failed:", error)
      toast.error("Failed to create LP account")
    } finally {
      setIsLoading(false)
    }
  }

  const createGPAccount = async () => {
    try {
      setIsLoading(true)

      // Validate fields
      if (!gpName || !gpEmail || !gpPassword || !gpFocus) {
        toast.error("Please fill in all fields")
        return
      }

      if (!validateEmail(gpEmail)) {
        toast.error("Please enter a valid email address")
        return
      }

      if (!validatePassword(gpPassword)) {
        toast.error("Password must be at least 8 characters long")
        return
      }

      // First create the user account
      const user = await signup(gpEmail, gpPassword)
      if (!user) {
        toast.error("Failed to create user account")
        return
      }
      
      // Create GP using the GP service
      const gpService = new GPService()
      await gpService.createGP({
        name: gpName,
        email: gpEmail,
        focus: gpFocus,
        userId: user.uid,
      })

      toast.success("Fund Manager account created successfully!")
      router.push("/dashboard/gp")
    } catch (error) {
      console.error("Signup failed:", error)
      toast.error("Failed to create Fund Manager account")
    } finally {
      setIsLoading(false)
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Kapital</h1>
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
                      <Input 
                        id="lp-name" 
                        placeholder="Enter your name or entity name"
                        value={lpName}
                        onChange={(e) => setLPName(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lp-email">Email</Label>
                      <Input 
                        id="lp-email" 
                        type="email" 
                        placeholder="Enter your email"
                        value={lpEmail}
                        onChange={(e) => setLPEmail(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lp-password">Password</Label>
                      <Input 
                        id="lp-password" 
                        type="password" 
                        placeholder="Create a password"
                        value={lpPassword}
                        onChange={(e) => setLPPassword(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lp-type">Investor Type</Label>
                      <Input 
                        id="lp-type" 
                        placeholder="e.g., Individual, Family Office, DAO"
                        value={lpType}
                        onChange={(e) => setLPType(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button 
                      className="w-full" 
                      onClick={createLPAccount}
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create LP Account"}
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
                      <Input 
                        id="gp-name" 
                        placeholder="Enter your fund or firm name"
                        value={gpName}
                        onChange={(e) => setGPName(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gp-email">Email</Label>
                      <Input 
                        id="gp-email" 
                        type="email" 
                        placeholder="Enter your email"
                        value={gpEmail}
                        onChange={(e) => setGPEmail(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gp-password">Password</Label>
                      <Input 
                        id="gp-password" 
                        type="password" 
                        placeholder="Create a password"
                        value={gpPassword}
                        onChange={(e) => setGPPassword(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gp-focus">Investment Focus</Label>
                      <Input 
                        id="gp-focus" 
                        placeholder="e.g., Early-stage Web3, Climate Tech"
                        value={gpFocus}
                        onChange={(e) => setGPFocus(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button 
                      className="w-full"
                      onClick={createGPAccount}
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Fund Manager Account"}
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
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
