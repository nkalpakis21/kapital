"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Building2 } from "lucide-react"

const fundMetrics = [
  {
    name: "Nexus Ventures Fund I",
    commitment: "$500K",
    called: "$350K",
    performance: "24.5%",
    status: "Active",
    vintage: "2021",
    avatar: "NV",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Crypto Capital Early Stage",
    commitment: "$300K",
    called: "$180K",
    performance: "18.2%",
    status: "Active",
    vintage: "2022",
    avatar: "CC",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "BlockChain Ventures II",
    commitment: "$400K",
    called: "$320K",
    performance: "12.8%",
    status: "Active",
    vintage: "2020",
    avatar: "BV",
    color: "from-purple-500 to-pink-600",
  },
]

export function FundMetrics() {
  return (
    <Card className="border-0 shadow-lg shadow-black/5 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Active Funds
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fundMetrics.map((fund) => (
            <div
              key={fund.name}
              className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/30 border border-border/40"
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10 ring-2 ring-white shadow-sm">
                  <AvatarFallback className={`bg-gradient-to-br ${fund.color} text-white text-xs font-bold`}>
                    {fund.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-sm leading-tight">{fund.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs h-5">
                          {fund.vintage}
                        </Badge>
                        <Badge className="text-xs h-5 bg-emerald-100 text-emerald-700 border-0">{fund.status}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">{fund.commitment}</p>
                      <p className="text-xs text-emerald-600 font-semibold">+{fund.performance}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Called Capital</span>
                      <span>
                        {fund.called} / {fund.commitment}
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full">
                      <div
                        className={`h-1.5 bg-gradient-to-r ${fund.color} rounded-full transition-all duration-1000`}
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
