"use client"

import { ArrowUp, DollarSign, TrendingUp, Building2, Coins } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const portfolioData = [
  {
    title: "Total Invested",
    value: "$2.4M",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-blue-600",
  },
  {
    title: "Portfolio IRR",
    value: "18.7%",
    change: "+2.3%",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Active Funds",
    value: "8",
    change: "+2",
    icon: Building2,
    color: "text-blue-600",
  },
  {
    title: "Token Value",
    value: "$847K",
    change: "+5.2%",
    icon: Coins,
    color: "text-blue-600",
  },
]

export function FundOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {portfolioData.map((item) => (
        <Card key={item.title} className="shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-md bg-slate-50">
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div className="flex items-center text-sm">
                <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
                <span className="font-medium text-emerald-600">{item.change}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              <p className="text-2xl font-semibold">{item.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
