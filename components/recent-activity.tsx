"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Activity, ArrowDownRight, ArrowUpRight, Coins, Plus } from "lucide-react"

const recentActivities = [
  {
    id: 1,
    type: "Capital Call",
    description: "Nexus Ventures Fund I - Series B follow-on",
    amount: "$75K",
    time: "2 hours ago",
    avatar: "NV",
    icon: ArrowUpRight,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 2,
    type: "Distribution",
    description: "BlockChain Ventures II - Exit proceeds",
    amount: "$125K",
    time: "1 day ago",
    avatar: "BV",
    icon: ArrowDownRight,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: 3,
    type: "Token Vesting",
    description: "Crypto Capital tokens unlocked",
    amount: "2,500 tokens",
    time: "3 days ago",
    avatar: "CC",
    icon: Coins,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    type: "New Commitment",
    description: "Future Labs Web3 Fund commitment",
    amount: "$250K",
    time: "1 week ago",
    avatar: "FL",
    icon: Plus,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function RecentActivity() {
  return (
    <Card className="border-0 shadow-lg shadow-black/5 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50/50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <Avatar className="h-10 w-10 ring-2 ring-white shadow-sm">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-700 text-white text-xs font-bold">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold leading-none">{activity.description}</p>
                  <Badge variant="secondary" className="text-xs h-5 bg-slate-100 text-slate-600 border-0">
                    {activity.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <div className={`text-sm font-bold ${activity.color}`}>{activity.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
