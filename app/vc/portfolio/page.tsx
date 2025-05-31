"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react"

export default function PortfolioManagementPage() {
  const portfolioData = [
    { month: "Jan", value: 100000 },
    { month: "Feb", value: 125000 },
    { month: "Mar", value: 118000 },
    { month: "Apr", value: 142000 },
    { month: "May", value: 165000 },
    { month: "Jun", value: 158000 },
    { month: "Jul", value: 185000 },
    { month: "Aug", value: 195000 },
    { month: "Sep", value: 210000 },
    { month: "Oct", value: 225000 },
    { month: "Nov", value: 240000 },
    { month: "Dec", value: 265000 },
  ]

  const investments = [
    {
      id: 1,
      startupName: "BlockFin Technologies",
      tokenAllocation: "50,000 BFT",
      investmentAmount: "$125,000",
      currentValue: "$187,500",
      roi: 50.0,
      vestingStatus: "25% Vested",
      vestingProgress: 25,
      sector: "DeFi",
    },
    {
      id: 2,
      startupName: "GreenToken",
      tokenAllocation: "25,000 GREEN",
      investmentAmount: "$50,000",
      currentValue: "$62,500",
      roi: 25.0,
      vestingStatus: "50% Vested",
      vestingProgress: 50,
      sector: "Climate",
    },
    {
      id: 3,
      startupName: "DataChain Solutions",
      tokenAllocation: "100,000 DCS",
      investmentAmount: "$75,000",
      currentValue: "$67,500",
      roi: -10.0,
      vestingStatus: "10% Vested",
      vestingProgress: 10,
      sector: "Analytics",
    },
    {
      id: 4,
      startupName: "SupplyChain3",
      tokenAllocation: "80,000 SC3",
      investmentAmount: "$40,000",
      currentValue: "$48,000",
      roi: 20.0,
      vestingStatus: "75% Vested",
      vestingProgress: 75,
      sector: "Supply Chain",
    },
    {
      id: 5,
      startupName: "MetaLearn",
      tokenAllocation: "200,000 LEARN",
      investmentAmount: "$60,000",
      currentValue: "$72,000",
      roi: 20.0,
      vestingStatus: "40% Vested",
      vestingProgress: 40,
      sector: "Education",
    },
  ]

  const totalInvested = investments.reduce(
    (sum, inv) => sum + Number.parseFloat(inv.investmentAmount.replace(/[$,]/g, "")),
    0,
  )
  const totalCurrentValue = investments.reduce(
    (sum, inv) => sum + Number.parseFloat(inv.currentValue.replace(/[$,]/g, "")),
    0,
  )
  const totalROI = ((totalCurrentValue - totalInvested) / totalInvested) * 100

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
              <h1 className="text-3xl font-bold">Portfolio Management</h1>
              <p className="text-muted-foreground">Track your token investments and performance</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalInvested.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Across {investments.length} investments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalCurrentValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {totalROI > 0 ? "+" : ""}
                  {totalROI.toFixed(1)}% total return
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Best Performer</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+50%</div>
                <p className="text-xs text-muted-foreground">BlockFin Technologies</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Vesting</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">40%</div>
                <p className="text-xs text-muted-foreground">Tokens vested</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Total portfolio value over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    value: {
                      label: "Portfolio Value",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--color-value)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-value)" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sector Allocation</CardTitle>
                <CardDescription>Investment distribution by sector</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">DeFi</span>
                    <span className="text-sm font-medium">35.7%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "35.7%" }} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Analytics</span>
                    <span className="text-sm font-medium">21.4%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "21.4%" }} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Education</span>
                    <span className="text-sm font-medium">17.1%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "17.1%" }} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Climate</span>
                    <span className="text-sm font-medium">14.3%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "14.3%" }} />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Supply Chain</span>
                    <span className="text-sm font-medium">11.4%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "11.4%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Investment Details</CardTitle>
              <CardDescription>Detailed view of your token investments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Startup</TableHead>
                    <TableHead>Token Allocation</TableHead>
                    <TableHead>Investment</TableHead>
                    <TableHead>Current Value</TableHead>
                    <TableHead>ROI</TableHead>
                    <TableHead>Vesting Status</TableHead>
                    <TableHead>Sector</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell className="font-medium">{investment.startupName}</TableCell>
                      <TableCell>{investment.tokenAllocation}</TableCell>
                      <TableCell>{investment.investmentAmount}</TableCell>
                      <TableCell className="font-medium">{investment.currentValue}</TableCell>
                      <TableCell>
                        <div
                          className={`flex items-center gap-1 ${investment.roi >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {investment.roi >= 0 ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          <span className="font-medium">
                            {investment.roi >= 0 ? "+" : ""}
                            {investment.roi}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">{investment.vestingStatus}</div>
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${investment.vestingProgress}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{investment.sector}</Badge>
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
