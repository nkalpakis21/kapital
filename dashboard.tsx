"use client"

import { AppSidebar } from "./components/app-sidebar"
import { DashboardHeader } from "./components/dashboard-header"
import { FundOverview } from "./components/fund-overview"
import { PerformanceCharts } from "./components/performance-charts"
import { RecentActivity } from "./components/recent-activity"
import { FundMetrics } from "./components/fund-metrics"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-6 p-6">
          <FundOverview />
          <div className="grid gap-6 md:grid-cols-2">
            <PerformanceCharts />
            <FundMetrics />
          </div>
          <RecentActivity />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
