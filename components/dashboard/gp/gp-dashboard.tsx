"use client"

import { GPDashboardHeader } from "./gp-dashboard-header"
import { GPDashboardSidebar } from "./gp-dashboard-sidebar"
import { StartupFundingProgress } from "@/components/dashboard/startup/startup-funding-progress"
import { StartupTokenMetrics } from "@/components/dashboard/startup/startup-token-metrics"
import { StartupInvestorList } from "@/components/dashboard/startup/startup-investor-list"
import { StartupMilestones } from "@/components/dashboard/startup/startup-milestones"
import { StartupMessages } from "@/components/dashboard/startup/startup-messages"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import type { GP } from "@/lib/services/gpService"

interface GPDashboardProps {
  userData: GP
}

export function GPDashboard({ userData }: GPDashboardProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <GPDashboardHeader userData={userData} />
        <div className="flex-1 flex">
          <GPDashboardSidebar />
          <SidebarInset>
            <main className="flex-1 p-6">
              <div className="grid gap-6">
                <h1 className="text-3xl font-bold">Fund Manager Dashboard</h1>
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
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
