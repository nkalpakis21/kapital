"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-4 px-6 bg-background border-b border-border">
      <SidebarTrigger className="-ml-1" />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-foreground">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search funds, transactions..."
              className="w-[300px] pl-10 border-input focus:border-ring focus:ring-ring"
            />
          </div>
          <ModeToggle />
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary"></span>
          </Button>
        </div>
      </div>
    </header>
  )
}
