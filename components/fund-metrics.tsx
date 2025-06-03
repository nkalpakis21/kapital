"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Building2 } from "lucide-react"

const fundMetrics = [
  {
    name: "Nexus Ventures Fund I",
    commitment: "$500K",
    called: "$350K",
    performance: "24.5%",
    avatar: "NV",
  },
  {
    name: "Crypto Capital Early Stage",
    commitment: "$300K",
    called: "$180K",
    performance: "18.2%",
    avatar: "CC",
  },
  {
    name: "BlockChain Ventures II",
    commitment: "$400K",
    called: "$320K",
    performance: "12.8%",
    avatar: "BV",
  },
]

export function FundMetrics() {
  return (
    <Card className="shadow-sm bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Active Funds
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fundMetrics.map((fund) => (
            <div key={fund.name} className="p-3 rounded-md bg-slate-50">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-600 text-white text-xs font-medium">{fund.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <p className="font-medium text-sm">{fund.name}</p>
                    <p className="text-xs text-emerald-600 font-medium">+{fund.performance}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Called Capital</span>
                      <span>
                        {fund.called} / {fund.commitment}
                      </span>
                    </div>
                    <div className="h-1 bg-slate-200 rounded-full">
                      <div
                        className="h-1 bg-blue-500 rounded-full transition-all duration-1000"
                        style={{
                          width: `${(Number.parseInt(fund.called.replace("$", "").replace("K", "")) / Number.parseInt(fund.commitment.replace("$", "").replace("K", ""))) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
