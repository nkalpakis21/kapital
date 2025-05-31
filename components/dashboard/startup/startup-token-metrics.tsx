import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, TrendingUp } from "lucide-react"

export function StartupTokenMetrics() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Token Metrics</CardTitle>
        <Coins className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$2.50</div>
        <p className="text-xs text-muted-foreground">Current token price</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total supply</span>
            <span className="font-medium">10M tokens</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Circulating</span>
            <span className="font-medium">3M tokens</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Market cap</span>
            <span className="font-medium">$7.5M</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="h-3 w-3" />
            <span>+12.5% (24h)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
