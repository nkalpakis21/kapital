"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const performanceData = [
  {
    name: "Nexus Ventures Fund I",
    value: "$847,392",
    return: "+24.5%",
    returnAmount: "+$156,847",
    isPositive: true,
  },
  {
    name: "Crypto Capital Early Stage",
    value: "$523,847",
    return: "+18.2%",
    returnAmount: "+$80,392",
    isPositive: true,
  },
  {
    name: "BlockChain Ventures II",
    value: "$392,847",
    return: "+12.8%",
    returnAmount: "+$44,583",
    isPositive: true,
  },
  {
    name: "Future Labs Web3 Fund",
    value: "$183,294",
    return: "-2.1%",
    returnAmount: "-$3,928",
    isPositive: false,
  },
]

export function LPPerformanceCharts() {
  return (
    <Card className="border border-border bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground">Holdings</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {performanceData.map((fund) => (
            <div key={fund.name} className="p-6 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{fund.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{fund.value}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${fund.isPositive ? "text-green-600" : "text-red-600"}`}>
                    {fund.return}
                  </p>
                  <p className={`text-sm ${fund.isPositive ? "text-green-600" : "text-red-600"}`}>
                    {fund.returnAmount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
