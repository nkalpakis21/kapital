"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recentActivities = [
  {
    id: 1,
    type: "Capital Call",
    fund: "Nexus Ventures Fund I",
    amount: "-$75,000",
    date: "Dec 15, 2024",
    isPositive: false,
  },
  {
    id: 2,
    type: "Distribution",
    fund: "BlockChain Ventures II",
    amount: "+$125,000",
    date: "Dec 14, 2024",
    isPositive: true,
  },
  {
    id: 3,
    type: "Token Unlock",
    fund: "Crypto Capital Early Stage",
    amount: "2,500 tokens",
    date: "Dec 12, 2024",
    isPositive: true,
  },
  {
    id: 4,
    type: "Commitment",
    fund: "Future Labs Web3 Fund",
    amount: "-$250,000",
    date: "Dec 8, 2024",
    isPositive: false,
  },
]

export function RecentActivity() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-4 border-b border-border/20">
        <CardTitle className="text-lg font-medium text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border/10">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.type}</p>
                  <p className="text-sm text-muted-foreground mt-1">{activity.fund}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{activity.date}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-medium ${activity.isPositive ? "text-[rgb(var(--positive))]" : "text-foreground"}`}
                  >
                    {activity.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
