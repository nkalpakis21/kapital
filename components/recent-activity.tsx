"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Activity, ArrowDownRight, ArrowUpRight, Coins, Plus } from "lucide-react"

const recentActivities = [
  {
    id: 1,
    type: "Capital Call",
    description: "Nexus Ventures Fund I",
    amount: "$75K",
    time: "2h ago",
    avatar: "NV",
    icon: ArrowUpRight,
    color: "text-red-600",
  },
  {
    id: 2,
    type: "Distribution",
    description: "BlockChain Ventures II",
    amount: "$125K",
    time: "1d ago",
    avatar: "BV",
    icon: ArrowDownRight,
    color: "text-emerald-600",
  },
  {
    id: 3,
    type: "Token Vesting",
    description: "Crypto Capital tokens",
    amount: "2,500",
    time: "3d ago",
    avatar: "CC",
    icon: Coins,
    color: "text-blue-600",
  },
  {
    id: 4,
    type: "New Commitment",
    description: "Future Labs Web3 Fund",
    amount: "$250K",
    time: "1w ago",
    avatar: "FL",
    icon: Plus,
    color: "text-blue-600",
  },
]

export function RecentActivity() {
  return (
    <Card className="shadow-sm bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Activity className="h-4 w-4" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-3 p-2 hover:bg-slate-50 transition-colors rounded-md"
            >
              <div className="p-1.5 rounded-md bg-slate-100">
                <activity.icon className={`h-3.5 w-3.5 ${activity.color}`} />
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-blue-600 text-white text-xs font-medium">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <div className={`text-sm font-medium ${activity.color}`}>{activity.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
