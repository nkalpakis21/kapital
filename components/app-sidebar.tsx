"use client"

import { BarChart3, Building2, DollarSign, FileText, Home, PieChart, Settings, TrendingUp, Coins } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/AuthContext"

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "Portfolio",
    url: "#",
    icon: PieChart,
  },
  {
    title: "Performance",
    url: "#",
    icon: TrendingUp,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Discover",
    url: "#",
    icon: Building2,
  },
  {
    title: "Transactions",
    url: "#",
    icon: DollarSign,
  },
  {
    title: "Market",
    url: "#",
    icon: Coins,
  },
  {
    title: "Reports",
    url: "#",
    icon: FileText,
  },
]

export function AppSidebar() {
  const { logout, currentUser } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      window.location.href = "/"
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <Sidebar className="border-r border-border bg-background">
      <SidebarHeader className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <span className="text-sm font-bold">K</span>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">Kapital</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="h-12 rounded-lg transition-colors hover:bg-muted data-[active=true]:bg-blue-600 data-[active=true]:text-white data-[active=true]:font-medium"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border">
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
