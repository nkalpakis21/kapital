"use client"

import { ArrowDown, ArrowUp, DollarSign, TrendingUp, Building2, Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const portfolioData = [
  {
    title: "Total Invested",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Portfolio IRR",
    value: "18.7%",
    change: "+2.3%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Active Funds",
    value: "8",
    change: "+2",
    trend: "up",
    icon: Building2,
  },
  {
    title: "Token Value",
    value: "$847K",
    change: "+5.2%",
    trend: "up",
    icon: Coins,
  },
]

export function FundOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {portfolioData.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {item.trend === "up" ? (
                <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
              )}
              <span className={item.trend === "up" ? "text-green-500" : "text-red-500"}>{item.change}</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
