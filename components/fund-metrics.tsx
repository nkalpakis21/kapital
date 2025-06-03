"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fundMetrics = [
  {
    label: "Buying Power",
    value: "$47,392",
    subtext: "Available to invest",
  },
  {
    label: "Annual Return",
    value: "18.7%",
    subtext: "Portfolio IRR",
  },
  {
    label: "Active Funds",
    value: "8",
    subtext: "Across 4 vintages",
  },
]

export function FundMetrics() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-4 border-b border-border/20">
        <CardTitle className="text-lg font-medium text-foreground">Account</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border/10">
          {fundMetrics.map((metric) => (
            <div key={metric.label} className="p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-xl font-medium text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
