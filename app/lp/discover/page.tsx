"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Grid, List, Search } from "lucide-react"

export default function DiscoverStartupsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [sectorFilter, setSectorFilter] = useState("all")
  const [fundingFilter, setFundingFilter] = useState("all")

  const startups = [
    {
      id: 1,
      name: "BlockFin Technologies",
      logo: "BT",
      description: "Decentralized finance platform for institutional trading",
      sector: "DeFi",
      fundingRound: "Series A",
      targetAmount: "$2M",
      raised: "$750K",
      progress: 37.5,
      tokenStructure: "Revenue Share",
      tags: ["DeFi", "Trading", "Institutional"],
    },
    {
      id: 2,
      name: "DataChain Solutions",
      logo: "DS",
      description: "AI-powered blockchain analytics and compliance tools",
      sector: "Analytics",
      fundingRound: "Seed",
      targetAmount: "$1.5M",
      raised: "$400K",
      progress: 26.7,
      tokenStructure: "SAFTE",
      tags: ["AI", "Analytics", "Compliance"],
    },
    {
      id: 3,
      name: "CryptoHealth",
      logo: "CH",
      description: "Healthcare data management on blockchain",
      sector: "Healthcare",
      fundingRound: "Pre-Seed",
      targetAmount: "$800K",
      raised: "$200K",
      progress: 25,
      tokenStructure: "Utility Token",
      tags: ["Healthcare", "Data", "Privacy"],
    },
    {
      id: 4,
      name: "GreenToken",
      logo: "GT",
      description: "Carbon credit marketplace with tokenized assets",
      sector: "Climate",
      fundingRound: "Series A",
      targetAmount: "$3M",
      raised: "$1.8M",
      progress: 60,
      tokenStructure: "Asset-Backed",
      tags: ["Climate", "Carbon Credits", "ESG"],
    },
    {
      id: 5,
      name: "MetaLearn",
      logo: "ML",
      description: "Decentralized education platform with NFT certificates",
      sector: "Education",
      fundingRound: "Seed",
      targetAmount: "$1.2M",
      raised: "$600K",
      progress: 50,
      tokenStructure: "Governance Token",
      tags: ["Education", "NFT", "Learning"],
    },
    {
      id: 6,
      name: "SupplyChain3",
      logo: "SC",
      description: "Blockchain-based supply chain transparency",
      sector: "Supply Chain",
      fundingRound: "Series A",
      targetAmount: "$2.5M",
      raised: "$1.2M",
      progress: 48,
      tokenStructure: "Revenue Share",
      tags: ["Supply Chain", "Transparency", "B2B"],
    },
  ]

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = sectorFilter === "all" || startup.sector === sectorFilter
    const matchesFunding = fundingFilter === "all" || startup.fundingRound === fundingFilter

    return matchesSearch && matchesSector && matchesFunding
  })

  const StartupCard = ({ startup }: { startup: (typeof startups)[0] }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
              <AvatarFallback>{startup.logo}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{startup.name}</CardTitle>
              <CardDescription className="text-sm">{startup.sector}</CardDescription>
            </div>
          </div>
          <Badge variant="outline">{startup.fundingRound}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{startup.description}</p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Funding Progress</span>
            <span className="font-medium">
              {startup.raised} / {startup.targetAmount}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${startup.progress}%` }} />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Token Structure</span>
            <span className="font-medium">{startup.tokenStructure}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {startup.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button className="w-full" asChild>
          <Link href={`/vc/startup/${startup.id}`}>View Startup</Link>
        </Button>
      </CardContent>
    </Card>
  )

  const StartupListItem = ({ startup }: { startup: (typeof startups)[0] }) => (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <Avatar className="h-10 w-10">
              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
              <AvatarFallback>{startup.logo}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{startup.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {startup.fundingRound}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{startup.description}</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs text-muted-foreground">
                  {startup.raised} / {startup.targetAmount} ({startup.progress.toFixed(1)}%)
                </span>
                <span className="text-xs text-muted-foreground">{startup.tokenStructure}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap gap-1">
              {startup.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button size="sm" asChild>
              <Link href={`/vc/startup/${startup.id}`}>View</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex h-16 items-center px-4 md:px-6 border-b">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <main className="flex-1 p-6">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Discover Startups</h1>
              <p className="text-muted-foreground">Find vetted startups seeking token-based funding</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search startups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sectorFilter} onValueChange={setSectorFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Sectors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                <SelectItem value="DeFi">DeFi</SelectItem>
                <SelectItem value="Analytics">Analytics</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Climate">Climate</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Supply Chain">Supply Chain</SelectItem>
              </SelectContent>
            </Select>
            <Select value={fundingFilter} onValueChange={setFundingFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Rounds" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Rounds</SelectItem>
                <SelectItem value="Pre-Seed">Pre-Seed</SelectItem>
                <SelectItem value="Seed">Seed</SelectItem>
                <SelectItem value="Series A">Series A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredStartups.length} of {startups.length} startups
            </p>
          </div>

          {viewMode === "grid" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredStartups.map((startup) => (
                <StartupCard key={startup.id} startup={startup} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredStartups.map((startup) => (
                <StartupListItem key={startup.id} startup={startup} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
