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
import { Leaf, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./toggle"

const navItems = [
  { href: "/how", label: "How It Works" },
  { href: "/vendors", label: "Vendors" },
  { href: "/contact", label: "Contact" },
]

export function NavBar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 relative">
      {/* Logo/Home Link */}
      <Link 
        href="/" 
        className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity z-50"
      >
        <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
        <span className="text-base sm:text-lg">EcoBid</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
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
        
        <ModeToggle />
        
        <Button asChild>
          <Link href="/start">
            Get Started
          </Link>
        </Button>
      </div>

      {/* Mobile Menu Button & Mode Toggle */}
      <div className="flex items-center gap-2 md:hidden">
        <ModeToggle />
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMobileMenu}
          className="p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-lg md:hidden z-40">
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href &&
                    "bg-accent text-accent-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-2 border-t">
              <Button asChild className="w-full">
                <Link 
                  href="/start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}