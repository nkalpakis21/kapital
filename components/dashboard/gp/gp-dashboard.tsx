"use client"

import { GPDashboardHeader } from "./gp-dashboard-header"
import { GPDashboardSidebar } from "./gp-dashboard-sidebar"
import { GPFundingProgress } from "./gp-funding-progress"
import { GPTokenMetrics } from "./gp-token-metrics"
import { GPInvestorList } from "./gp-investor-list"
import { GPMilestones } from "./gp-milestones"
import { GPMessages } from "./gp-messages"
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
                  <GPFundingProgress />
                  <GPTokenMetrics />
                  <GPInvestorList />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <GPMilestones />
                  <GPMessages />
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
