import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target } from "lucide-react"

export function StartupFundingProgress() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Fund Raising Progress</CardTitle>
        <Target className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$750K</div>
        <p className="text-xs text-muted-foreground">of $1M goal</p>
        <Progress value={75} className="mt-3" />
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Raised</span>
            <span className="font-medium">$750,000</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Limited Partners</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Days left</span>
            <span className="font-medium">45</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
