import { StartupDashboardHeader } from "@/components/dashboard/startup/startup-dashboard-header"
import { StartupDashboardSidebar } from "@/components/dashboard/startup/startup-dashboard-sidebar"
import { StartupFundingProgress } from "@/components/dashboard/startup/startup-funding-progress"
import { StartupTokenMetrics } from "@/components/dashboard/startup/startup-token-metrics"
import { StartupInvestorList } from "@/components/dashboard/startup/startup-investor-list"
import { StartupMilestones } from "@/components/dashboard/startup/startup-milestones"
import { StartupMessages } from "@/components/dashboard/startup/startup-messages"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function StartupDashboardPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <StartupDashboardHeader />
        <div className="flex-1 flex">
          <StartupDashboardSidebar />
          <main className="flex-1 p-6">
            <div className="grid gap-6">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <StartupFundingProgress />
                <StartupTokenMetrics />
                <StartupInvestorList />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <StartupMilestones />
                <StartupMessages />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
