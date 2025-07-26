"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./toggle"

const navItems = [
  { href: "/how", label: "How It Works" },
  { href: "/vendors", label: "Vendors" },
  { href: "/contact", label: "Contact" },
]

export function NavBar() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between w-full px-4 py-2">
      {/* Logo/Home Link */}
      <Link 
        href="/" 
        className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity"
      >
        <Leaf className="h-6 w-6 text-green-600" />
        <span>EcoBid</span>
      </Link>

      {/* Navigation Items */}
      <div className="flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-accent/50",
                    pathname === item.href &&
                      "bg-accent text-accent-foreground font-medium"
                  )}
                >
                  <Link 
                    href={item.href}
                    className="transition-colors"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
<ModeToggle/>
        {/* CTA Button */}
        <Button asChild>
          <Link href="/start">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  )
}