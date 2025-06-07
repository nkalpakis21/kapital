"use client"

import { LPDashboardHeader } from "./lp-dashboard-header"
import { LPDashboardSidebar } from "./lp-dashboard-sidebar"
import { FundOverview } from "@/components/fund-overview"
import { PerformanceCharts } from "@/components/performance-charts"
import { RecentActivity } from "@/components/recent-activity"
import { FundMetrics } from "@/components/fund-metrics"
import { MarketInsights } from "@/components/market-insights"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import type { LP } from "@/lib/services/lpService"

interface LPDashboardProps {
  userData: LP
}

export function LPDashboard({ userData }: LPDashboardProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <LPDashboardHeader userData={userData} />
        <div className="flex-1 flex">
          <LPDashboardSidebar />
          <SidebarInset>
            <main className="flex-1 p-6">
              <div className="space-y-6">
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
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
