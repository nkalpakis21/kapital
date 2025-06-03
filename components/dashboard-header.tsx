"use client"

import { Bell, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/40 px-6 bg-white/80 backdrop-blur-sm">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Fund Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">Welcome back, John 👋</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search funds, transactions..."
              className="w-[320px] pl-10 bg-white/80 border-border/40 focus:bg-white transition-colors"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-white/80 border-border/40">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 border-2 border-white">3</Badge>
          </Button>
        </div>
      </div>
    </header>
  )
}
