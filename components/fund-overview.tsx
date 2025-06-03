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
        <h1 className="text-3xl font-light text-gray-900">$2,847,392</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-medium text-green-600">+$12,847</span>
          <span className="text-lg text-green-600">(+0.45%)</span>
          <span className="text-sm text-gray-500">Today</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {portfolioData.slice(1).map((item) => (
          <Card key={item.title} className="border border-gray-100 shadow-none">
            <CardContent className="p-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{item.title}</p>
                <p className={`text-xl font-medium ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                  {item.value}
                </p>
                {item.change && (
                  <p className={`text-sm ${item.isPositive ? "text-green-600" : "text-red-600"}`}>{item.change}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
