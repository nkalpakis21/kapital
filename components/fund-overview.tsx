"use client"

import { ArrowDown, ArrowUp, DollarSign, TrendingUp, Building2, Coins } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const portfolioData = [
  {
    title: "Total Invested",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Portfolio IRR",
    value: "18.7%",
    change: "+2.3%",
    trend: "up",
    icon: TrendingUp,
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    title: "Active Funds",
    value: "8",
    change: "+2",
    trend: "up",
    icon: Building2,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    title: "Token Value",
    value: "$847K",
    change: "+5.2%",
    trend: "up",
    icon: Coins,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
]

export function FundOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {portfolioData.map((item) => (
        <Card key={item.title} className="border-0 shadow-lg shadow-black/5 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${item.bgGradient}`}>
                <item.icon className={`h-6 w-6 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`} />
              </div>
              <div className="flex items-center text-sm">
                {item.trend === "up" ? (
                  <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
                ) : (
                  <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
                )}
                <span className={`font-semibold ${item.trend === "up" ? "text-emerald-600" : "text-red-600"}`}>
                  {item.change}
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              <p className="text-3xl font-bold tracking-tight">{item.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
