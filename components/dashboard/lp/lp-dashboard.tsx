"use client"

import { LPDashboardHeader } from "./lp-dashboard-header"
import { LPDashboardSidebar } from "./lp-dashboard-sidebar"
import { LPFundOverview } from "./lp-fund-overview"
import { LPPerformanceCharts } from "./lp-performance-charts"
import { LPRecentActivity } from "./lp-recent-activity"
import { LPFundMetrics } from "./lp-fund-metrics"
import { LPMarketInsights } from "./lp-market-insights"
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
                <LPFundOverview />
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-6">
                    <LPPerformanceCharts />
                    <LPRecentActivity />
                  </div>
                  <div className="space-y-6">
                    <LPFundMetrics />
                    <LPMarketInsights />
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
