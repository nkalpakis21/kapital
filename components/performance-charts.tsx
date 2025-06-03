"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const performanceData = [
  {
    name: "Nexus Ventures Fund I",
    irr: 24.5,
    progress: 75,
    color: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    name: "Crypto Capital Early Stage",
    irr: 18.2,
    progress: 60,
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    name: "BlockChain Ventures II",
    irr: 12.8,
    progress: 45,
    color: "bg-gradient-to-r from-purple-400 to-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    name: "Future Labs Web3 Fund",
    irr: -2.1,
    progress: 20,
    color: "bg-gradient-to-r from-red-400 to-red-600",
    bgColor: "bg-red-100",
  },
]

export function PerformanceCharts() {
  return (
    <Card className="shadow-lg shadow-black/5 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Fund Performance</CardTitle>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <TrendingUp className="h-3 w-3 mr-1" />
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {performanceData.map((fund, index) => (
          <div key={fund.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-semibold text-sm">{fund.name}</p>
                <p className="text-xs text-muted-foreground">Vintage 202{index + 1}</p>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${fund.irr > 0 ? "text-emerald-600" : "text-red-600"}`}>
                  {fund.irr > 0 ? "+" : ""}
                  {fund.irr}%
                </p>
                <p className="text-xs text-muted-foreground">IRR</p>
              </div>
            </div>
            <div className="relative">
              <div className={`h-2 rounded-full ${fund.bgColor}`}>
                <div
                  className={`h-2 rounded-full ${fund.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${fund.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
