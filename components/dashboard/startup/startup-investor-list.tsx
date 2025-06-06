import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users } from "lucide-react"

export function StartupInvestorList() {
  const investors = [
    { name: "Nexus Ventures", amount: "$200K", avatar: "NV" },
    { name: "Crypto Capital", amount: "$150K", avatar: "CC" },
    { name: "BlockChain Fund", amount: "$100K", avatar: "BF" },
    { name: "Future Labs", amount: "$75K", avatar: "FL" },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Recent Investors</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {investors.map((investor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                  <AvatarFallback className="text-xs">{investor.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{investor.name}</p>
                </div>
              </div>
              <div className="text-sm font-medium">{investor.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
