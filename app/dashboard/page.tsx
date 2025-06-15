"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { FundOverview } from "@/components/fund-overview"
import { PerformanceCharts } from "@/components/performance-charts"
import { RecentActivity } from "@/components/recent-activity"
import { FundMetrics } from "@/components/fund-metrics"
import { MarketInsights } from "@/components/market-insights"
import { WalletInfoCard } from "@/components/dashboard/WalletInfoCard"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardPage() {
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (currentUser === null) {
      router.push("/login")
    }
  }, [currentUser, router])

  // Show loading state while checking authentication
  if (currentUser === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect if not authenticated
  if (currentUser === null) {
    return null
  }

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
              <WalletInfoCard />
              <FundMetrics />
              <MarketInsights />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
