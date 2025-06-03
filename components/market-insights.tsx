"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Globe } from "lucide-react"

const insights = [
  {
    title: "Market Opportunity",
    description: "Web3 funds showing 23% higher returns",
    trend: "+23%",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Hot Sector",
    description: "AI infrastructure funds oversubscribed",
    trend: "Hot",
    icon: Zap,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Global Trend",
    description: "APAC funds gaining momentum",
    trend: "Rising",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

export function MarketInsights() {
  return (
    <Card className="border-0 shadow-lg shadow-black/5 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">Market Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/30 border border-border/40"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                  <insight.icon className={`h-4 w-4 ${insight.color}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">{insight.title}</p>
                    <Badge className={`text-xs h-5 border-0 ${insight.bgColor} ${insight.color}`}>
                      {insight.trend}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
