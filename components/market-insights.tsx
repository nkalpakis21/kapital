"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const insights = [
  {
    title: "Market Cap",
    value: "$2.1T",
    change: "+2.3%",
    isPositive: true,
  },
  {
    title: "VC Funding",
    value: "$47.2B",
    change: "+12.8%",
    isPositive: true,
  },
  {
    title: "Web3 Index",
    value: "1,847",
    change: "-0.8%",
    isPositive: false,
  },
]

export function LPMarketInsights() {
  return (
    <Card className="border border-border bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground">Market</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {insights.map((insight) => (
            <div key={insight.title} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{insight.title}</p>
                  <p className="text-xl font-semibold text-foreground mt-1">{insight.value}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${insight.isPositive ? "text-green-600" : "text-red-600"}`}>
                    {insight.change}
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
