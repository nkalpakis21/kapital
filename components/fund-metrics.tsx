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
    <Card className="border border-border bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground">Account</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {fundMetrics.map((metric) => (
            <div key={metric.label} className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
