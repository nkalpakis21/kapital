"use client"

import {
  BarChart3,
  Building2,
  DollarSign,
  FileText,
  Home,
  PieChart,
  Settings,
  TrendingUp,
  Coins,
  Zap,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
    title: "Fund Portfolio",
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
    title: "Fund Discovery",
    url: "#",
    icon: Building2,
  },
  {
    title: "Transactions",
    url: "#",
    icon: DollarSign,
  },
  {
    title: "Secondary Market",
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
  return (
    <Sidebar className="bg-slate-50">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold text-blue-600">Kapital</p>
            <p className="text-xs text-muted-foreground">Fund Investment Platform</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-2">NAVIGATION</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="h-10 rounded-md transition-all hover:bg-slate-100 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-600"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 p-3 rounded-md bg-slate-100">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" />
            <AvatarFallback className="bg-blue-600 text-white text-sm font-medium">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">Limited Partner</p>
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
