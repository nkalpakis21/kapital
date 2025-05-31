"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calculator, TrendingUp, BarChart3, AlertTriangle } from "lucide-react"

export default function TokenAnalysisPage() {
  const [sortBy, setSortBy] = useState("name")
  const [filterRisk, setFilterRisk] = useState("all")

  const tokenModels = [
    {
      id: 1,
      startupName: "BlockFin Technologies",
      tokenType: "Revenue Share",
      targetReturn: 25,
      vestingPeriod: "24 months",
      riskLevel: "Medium",
      liquidityScore: 8.5,
      marketCap: "$7.5M",
      totalSupply: "10M",
      priceRange: "$2.00 - $3.50",
    },
    {
      id: 2,
      startupName: "DataChain Solutions",
      tokenType: "SAFTE",
      targetReturn: 35,
      vestingPeriod: "18 months",
      riskLevel: "High",
      liquidityScore: 6.2,
      marketCap: "$3.2M",
      totalSupply: "5M",
      priceRange: "$0.50 - $1.20",
    },
    {
      id: 3,
      startupName: "CryptoHealth",
      tokenType: "Utility Token",
      targetReturn: 15,
      vestingPeriod: "12 months",
      riskLevel: "Low",
      liquidityScore: 7.8,
      marketCap: "$2.1M",
      totalSupply: "20M",
      priceRange: "$0.08 - $0.15",
    },
    {
      id: 4,
      startupName: "GreenToken",
      tokenType: "Asset-Backed",
      targetReturn: 20,
      vestingPeriod: "36 months",
      riskLevel: "Low",
      liquidityScore: 9.1,
      marketCap: "$12.5M",
      totalSupply: "8M",
      priceRange: "$1.20 - $2.00",
    },
    {
      id: 5,
      startupName: "MetaLearn",
      tokenType: "Governance Token",
      targetReturn: 30,
      vestingPeriod: "24 months",
      riskLevel: "Medium",
      liquidityScore: 5.9,
      marketCap: "$4.8M",
      totalSupply: "15M",
      priceRange: "$0.25 - $0.45",
    },
    {
      id: 6,
      startupName: "SupplyChain3",
      tokenType: "Revenue Share",
      targetReturn: 22,
      vestingPeriod: "30 months",
      riskLevel: "Medium",
      liquidityScore: 7.3,
      marketCap: "$6.2M",
      totalSupply: "12M",
      priceRange: "$0.40 - $0.80",
    },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredTokens = tokenModels.filter((token) => {
    if (filterRisk === "all") return true
    return token.riskLevel === filterRisk
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
              <h1 className="text-3xl font-bold">Token Analysis</h1>
              <p className="text-muted-foreground">Analyze and compare token models across startups</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Target Return</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5%</div>
                <p className="text-xs text-muted-foreground">Across all tokens</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Liquidity Score</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7.3</div>
                <p className="text-xs text-muted-foreground">Out of 10</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Market Cap</CardTitle>
                <Calculator className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$36.3M</div>
                <p className="text-xs text-muted-foreground">Combined value</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk Distribution</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">33%</div>
                <p className="text-xs text-muted-foreground">Low risk tokens</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Startup Name</SelectItem>
                <SelectItem value="return">Target Return</SelectItem>
                <SelectItem value="risk">Risk Level</SelectItem>
                <SelectItem value="liquidity">Liquidity Score</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterRisk} onValueChange={setFilterRisk}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by Risk" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="Low">Low Risk</SelectItem>
                <SelectItem value="Medium">Medium Risk</SelectItem>
                <SelectItem value="High">High Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Token Models Comparison</CardTitle>
              <CardDescription>Detailed analysis of token structures and investment opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Startup</TableHead>
                    <TableHead>Token Type</TableHead>
                    <TableHead>Target Return</TableHead>
                    <TableHead>Vesting Period</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Liquidity Score</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTokens.map((token) => (
                    <TableRow key={token.id}>
                      <TableCell className="font-medium">{token.startupName}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{token.tokenType}</Badge>
                      </TableCell>
                      <TableCell className="font-medium text-green-600">{token.targetReturn}%</TableCell>
                      <TableCell>{token.vestingPeriod}</TableCell>
                      <TableCell>
                        <Badge className={getRiskColor(token.riskLevel)}>{token.riskLevel}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{token.liquidityScore}/10</span>
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${(token.liquidityScore / 10) * 100}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{token.marketCap}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Simulate Return
                          </Button>
                          <Button size="sm">Compare</Button>
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
