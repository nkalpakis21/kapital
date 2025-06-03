"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PerformanceCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fund Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Nexus Ventures Fund I</span>
            <span className="text-sm text-green-600">+24.5% IRR</span>
          </div>
          <div className="h-2 bg-muted rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: "75%" }} />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Crypto Capital Early Stage</span>
            <span className="text-sm text-green-600">+18.2% IRR</span>
          </div>
          <div className="h-2 bg-muted rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "60%" }} />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">BlockChain Ventures II</span>
            <span className="text-sm text-green-600">+12.8% IRR</span>
          </div>
          <div className="h-2 bg-muted rounded-full">
            <div className="h-2 bg-purple-500 rounded-full" style={{ width: "45%" }} />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Future Labs Web3 Fund</span>
            <span className="text-sm text-red-600">-2.1% IRR</span>
          </div>
          <div className="h-2 bg-muted rounded-full">
            <div className="h-2 bg-red-500 rounded-full" style={{ width: "20%" }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
