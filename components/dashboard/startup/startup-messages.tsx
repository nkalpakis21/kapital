import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function StartupMessages() {
  const messages = [
    {
      sender: "Nexus Ventures",
      message: "Interested in discussing terms for Series A",
      time: "2h ago",
      unread: true,
      avatar: "NV",
    },
    {
      sender: "Crypto Capital",
      message: "Great progress on your milestones!",
      time: "1d ago",
      unread: false,
      avatar: "CC",
    },
    {
      sender: "BlockChain Fund",
      message: "Can we schedule a call this week?",
      time: "2d ago",
      unread: true,
      avatar: "BF",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Messages</CardTitle>
        <CardDescription>Latest communications from investors</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                <AvatarFallback className="text-xs">{message.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{message.sender}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                    {message.unread && <Badge variant="secondary" className="h-2 w-2 p-0 bg-primary"></Badge>}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
