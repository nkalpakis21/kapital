"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const performanceData = [
  {
    name: "Nexus Ventures Fund I",
    irr: 24.5,
    progress: 75,
    color: "bg-blue-500",
  },
  {
    name: "Crypto Capital Early Stage",
    irr: 18.2,
    progress: 60,
    color: "bg-blue-500",
  },
  {
    name: "BlockChain Ventures II",
    irr: 12.8,
    progress: 45,
    color: "bg-blue-500",
  },
  {
    name: "Future Labs Web3 Fund",
    irr: -2.1,
    progress: 20,
    color: "bg-red-500",
  },
]

export function PerformanceCharts() {
  return (
    <Card className="shadow-sm bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Fund Performance
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {performanceData.map((fund, index) => (
          <div key={fund.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{fund.name}</p>
                <p className="text-xs text-muted-foreground">Vintage 202{index + 1}</p>
              </div>
              <div className="text-right">
                <p className={`text-base font-medium ${fund.irr > 0 ? "text-emerald-600" : "text-red-600"}`}>
                  {fund.irr > 0 ? "+" : ""}
                  {fund.irr}%
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="h-1.5 rounded-full bg-slate-100">
                <div
                  className={`h-1.5 rounded-full ${fund.color} transition-all duration-1000 ease-out`}
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
