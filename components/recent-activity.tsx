"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    id: 1,
    type: "Capital Call",
    description: "Nexus Ventures Fund I - Series B follow-on",
    amount: "$75K",
    time: "2 hours ago",
    avatar: "NV",
  },
  {
    id: 2,
    type: "Distribution",
    description: "BlockChain Ventures II - Exit proceeds",
    amount: "$125K",
    time: "1 day ago",
    avatar: "BV",
  },
  {
    id: 3,
    type: "Token Vesting",
    description: "Crypto Capital tokens unlocked",
    amount: "2,500 tokens",
    time: "3 days ago",
    avatar: "CC",
  },
  {
    id: 4,
    type: "New Commitment",
    description: "Future Labs Web3 Fund commitment",
    amount: "$250K",
    time: "1 week ago",
    avatar: "FL",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder.svg?height=36&width=36" />
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.description}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.type} • {activity.time}
                </p>
              </div>
              <div className="text-sm font-medium">{activity.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
