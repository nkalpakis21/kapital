"use client"

import { BarChart3, Building2, DollarSign, FileText, Home, PieChart, Settings, TrendingUp } from "lucide-react"

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
    icon: Building2,
  },
  {
    title: "Reports",
    url: "#",
    icon: FileText,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border bg-background">
      <SidebarHeader className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
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
                    className="h-12 rounded-lg transition-colors hover:bg-muted data-[active=true]:bg-foreground data-[active=true]:text-background data-[active=true]:font-medium"
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
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback className="bg-muted text-foreground font-medium">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
          <SidebarMenuButton size="sm" asChild className="h-8 w-8 rounded-md">
            <a href="#">
              <Settings className="h-4 w-4" />
            </a>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
