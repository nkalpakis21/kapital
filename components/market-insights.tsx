"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Zap, Globe } from "lucide-react"

const insights = [
  {
    title: "Market Opportunity",
    description: "Web3 funds showing 23% higher returns",
    trend: "+23%",
    icon: TrendingUp,
    color: "text-emerald-600",
  },
  {
    title: "Hot Sector",
    description: "AI infrastructure funds oversubscribed",
    trend: "Hot",
    icon: Zap,
    color: "text-blue-600",
  },
  {
    title: "Global Trend",
    description: "APAC funds gaining momentum",
    trend: "Rising",
    icon: Globe,
    color: "text-blue-600",
  },
]

export function MarketInsights() {
  return (
    <Card className="shadow-sm bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium">Market Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="p-3 rounded-md bg-slate-50">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-white">
                  <insight.icon className={`h-3.5 w-3.5 ${insight.color}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{insight.title}</p>
                    <p className={`text-xs font-medium ${insight.color}`}>{insight.trend}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
