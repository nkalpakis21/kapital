"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-6 bg-white">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4 opacity-30" />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-slate-900">Fund Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back, John</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
            <Input type="search" placeholder="Search..." className="w-[240px] pl-10 bg-slate-50 border-0" />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
        </div>
      </div>
    </header>
  )
}
