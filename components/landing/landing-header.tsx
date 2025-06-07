"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Coins, Menu } from "lucide-react"

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Coins className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VentureToken</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For LPs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Invest in Digital VC Funds</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Access tokenized LP positions with USDC investing and built-in liquidity
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/lp/discover" title="Discover VC Funds">
                      Browse vetted VC funds by thesis, geography, and performance
                    </ListItem>
                    <ListItem href="/lp/fund-analysis" title="Fund Analysis">
                      Evaluate fund strategies and historical returns
                    </ListItem>
                    <ListItem href="/lp/portfolio" title="Portfolio Management">
                      Track your fund investments and performance
                    </ListItem>
                    <ListItem href="/lp/marketplace" title="Secondary Market">
                      Access liquidity through tokenized position trading
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Fund Managers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <ListItem href="#" title="Fund Creation">
                      Launch tokenized VC funds with smart contract infrastructure
                    </ListItem>
                    <ListItem href="#" title="LP Management">
                      Manage investor relations and capital calls
                    </ListItem>
                    <ListItem href="#" title="Performance Tracking">
                      Real-time fund metrics and portfolio reporting
                    </ListItem>
                    <ListItem href="#" title="Compliance Tools">
                      Global KYC/AML and regulatory compliance workflows
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/lp/marketplace" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Marketplace</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="hidden md:flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>VentureToken</SheetTitle>
                <SheetDescription>Connecting LPs and fund managers with digital-first investing</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#">For LPs</Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#">For Fund Managers</Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/lp/marketplace">Marketplace</Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#">About</Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button className="justify-start" asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
