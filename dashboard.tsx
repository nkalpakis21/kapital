"use client"

import { AppSidebar } from "./components/app-sidebar"
import { DashboardHeader } from "./components/dashboard-header"
import { FundOverview } from "./components/fund-overview"
import { PerformanceCharts } from "./components/performance-charts"
import { RecentActivity } from "./components/recent-activity"
import { FundMetrics } from "./components/fund-metrics"
import { MarketInsights } from "./components/market-insights"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-6 p-6 bg-background">
          <FundOverview />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <PerformanceCharts />
              <RecentActivity />
            </div>
            <div className="space-y-6">
              <FundMetrics />
              <MarketInsights />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
