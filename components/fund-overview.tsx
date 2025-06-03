"use client"

import { Card, CardContent } from "@/components/ui/card"

const portfolioData = [
  {
    title: "Portfolio Value",
    value: "$2,847,392",
    change: "+$127,483",
    changePercent: "+4.69%",
    isPositive: true,
  },
  {
    title: "Today's Return",
    value: "+$12,847",
    change: "+0.45%",
    changePercent: "",
    isPositive: true,
  },
  {
    title: "Total Return",
    value: "+$847,392",
    change: "+42.37%",
    changePercent: "",
    isPositive: true,
  },
]

export function FundOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-light text-foreground">$2,847,392</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-medium text-[rgb(var(--positive))]">+$12,847</span>
          <span className="text-lg text-[rgb(var(--positive))]">(+0.45%)</span>
          <span className="text-sm text-muted-foreground">Today</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {portfolioData.slice(1).map((item) => (
          <Card key={item.title} className="border-0 shadow-none bg-secondary">
            <CardContent className="p-4">
              <div className="space-y-1">
                <p className="text-sm text-secondary-foreground/80">{item.title}</p>
                <p
                  className={`text-xl font-medium ${item.isPositive ? "text-[rgb(var(--positive))]" : "text-[rgb(var(--negative))]"}`}
                >
                  {item.value}
                </p>
                {item.change && (
                  <p
                    className={`text-sm ${item.isPositive ? "text-[rgb(var(--positive))]" : "text-[rgb(var(--negative))]"}`}
                  >
                    {item.change}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
