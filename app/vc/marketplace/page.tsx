"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, TrendingUp, TrendingDown, Volume2 } from "lucide-react"

export default function SecondaryMarketPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("volume")
  const [filterSector, setFilterSector] = useState("all")

  const tokenListings = [
    {
      id: 1,
      tokenName: "BFT",
      fullName: "BlockFin Technologies",
      lastPrice: "$2.45",
      priceChange: 12.5,
      volume24h: "$125,000",
      liquidity: "High",
      sector: "DeFi",
      marketCap: "$7.5M",
      available: "5,000",
    },
    {
      id: 2,
      tokenName: "GREEN",
      fullName: "GreenToken",
      lastPrice: "$1.85",
      priceChange: 8.2,
      volume24h: "$89,000",
      liquidity: "High",
      sector: "Climate",
      marketCap: "$12.5M",
      available: "3,200",
    },
    {
      id: 3,
      tokenName: "DCS",
      fullName: "DataChain Solutions",
      lastPrice: "$0.68",
      priceChange: -5.3,
      volume24h: "$45,000",
      liquidity: "Medium",
      sector: "Analytics",
      marketCap: "$3.2M",
      available: "8,500",
    },
    {
      id: 4,
      tokenName: "SC3",
      fullName: "SupplyChain3",
      lastPrice: "$0.52",
      priceChange: 3.1,
      volume24h: "$32,000",
      liquidity: "Medium",
      sector: "Supply Chain",
      marketCap: "$6.2M",
      available: "12,000",
    },
    {
      id: 5,
      tokenName: "LEARN",
      fullName: "MetaLearn",
      lastPrice: "$0.32",
      priceChange: -2.8,
      volume24h: "$28,000",
      liquidity: "Low",
      sector: "Education",
      marketCap: "$4.8M",
      available: "15,000",
    },
    {
      id: 6,
      tokenName: "HEALTH",
      fullName: "CryptoHealth",
      lastPrice: "$0.12",
      priceChange: 15.4,
      volume24h: "$18,000",
      liquidity: "Low",
      sector: "Healthcare",
      marketCap: "$2.1M",
      available: "25,000",
    },
  ]

  const getLiquidityColor = (liquidity: string) => {
    switch (liquidity) {
      case "High":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredTokens = tokenListings.filter((token) => {
    const matchesSearch =
      token.tokenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = filterSector === "all" || token.sector === filterSector

    return matchesSearch && matchesSector
  })

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
              <h1 className="text-3xl font-bold">Secondary Market</h1>
              <p className="text-muted-foreground">Trade tokens with built-in liquidity</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Volume (24h)</CardTitle>
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$337K</div>
                <p className="text-xs text-muted-foreground">+15.2% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Tokens</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">Available for trading</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Top Gainer</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+15.4%</div>
                <p className="text-xs text-muted-foreground">HEALTH token</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Liquidity</CardTitle>
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Medium</div>
                <p className="text-xs text-muted-foreground">Across all tokens</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tokens..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="volume">Volume (24h)</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="change">Price Change</SelectItem>
                <SelectItem value="liquidity">Liquidity</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterSector} onValueChange={setFilterSector}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Sectors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                <SelectItem value="DeFi">DeFi</SelectItem>
                <SelectItem value="Climate">Climate</SelectItem>
                <SelectItem value="Analytics">Analytics</SelectItem>
                <SelectItem value="Supply Chain">Supply Chain</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Token Listings</CardTitle>
              <CardDescription>Available tokens for secondary market trading</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>Last Price</TableHead>
                    <TableHead>24h Change</TableHead>
                    <TableHead>24h Volume</TableHead>
                    <TableHead>Liquidity</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTokens.map((token) => (
                    <TableRow key={token.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{token.tokenName}</div>
                          <div className="text-sm text-muted-foreground">{token.fullName}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{token.lastPrice}</TableCell>
                      <TableCell>
                        <div
                          className={`flex items-center gap-1 ${token.priceChange >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {token.priceChange >= 0 ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          <span className="font-medium">
                            {token.priceChange >= 0 ? "+" : ""}
                            {token.priceChange}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{token.volume24h}</TableCell>
                      <TableCell>
                        <Badge className={getLiquidityColor(token.liquidity)}>{token.liquidity}</Badge>
                      </TableCell>
                      <TableCell>{token.marketCap}</TableCell>
                      <TableCell>{token.available} tokens</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            Buy
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                            Sell
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
