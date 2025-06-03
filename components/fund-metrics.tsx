"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fundMetrics = [
  {
    name: "Nexus Ventures Fund I",
    commitment: "$500K",
    called: "$350K",
    performance: "24.5%",
    status: "Active",
    vintage: "2021",
  },
  {
    name: "Crypto Capital Early Stage",
    commitment: "$300K",
    called: "$180K",
    performance: "18.2%",
    status: "Active",
    vintage: "2022",
  },
  {
    name: "BlockChain Ventures II",
    commitment: "$400K",
    called: "$320K",
    performance: "12.8%",
    status: "Active",
    vintage: "2020",
  },
  {
    name: "Future Labs Web3 Fund",
    commitment: "$250K",
    called: "$50K",
    performance: "-2.1%",
    status: "Fundraising",
    vintage: "2023",
  },
]

export function FundMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fund Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fundMetrics.map((fund) => (
            <div key={fund.name} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="space-y-1">
                <p className="text-sm font-medium">{fund.name}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {fund.vintage}
                  </Badge>
                  <Badge variant={fund.status === "Active" ? "default" : "secondary"} className="text-xs">
                    {fund.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Called: {fund.called} / {fund.commitment}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{fund.commitment}</p>
                <p
                  className={`text-xs ${
                    fund.performance.startsWith("+")
                      ? "text-green-600"
                      : fund.performance.startsWith("-")
                        ? "text-red-600"
                        : "text-muted-foreground"
                  }`}
                >
                  {fund.performance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
