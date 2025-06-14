"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { HighlightText } from "./highlight-text";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Teams",
    href: "#",
    subItems: [
      {
        name: "14142A Axiom",
        href: "/axiom",
        description: "Meet Team Axiom and learn about their achievements"
      },
      {
        name: "14142T Theorem",
        href: "/theorem",
        description: "Meet Team Theorem and learn about their achievements"
      }
    ]
  },
  {
    name: "Competitions",
    href: "/competitions",
  },
  {
    name: "Donate",
    href: "/donate",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-between py-6">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="Irrational Robotics Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <span className="text-2xl font-light tracking-tight">
          Irrational<HighlightText type="gradient">Robotics</HighlightText>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => {
              if (item.subItems) {
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="bg-transparent">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[250px]">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  pathname === subItem.href && "bg-accent"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.name}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                    asChild
                    className={cn(
                      "bg-transparent",
                      navigationMenuTriggerStyle(),
                      pathname === item.href && "text-primary"
                    )}
                    >
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8 pt-2">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="/logo.jpg"
                    alt="Irrational Robotics Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <span className="font-medium">IrrationalRobotics</span>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  if (item.subItems) {
                    return (
                      <div key={item.name} className="space-y-1">
                        <button
                          className={cn(
                            "flex w-full items-center justify-between rounded-md p-3 text-left text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                            mobileSubmenuOpen === item.name && "text-primary"
                          )}
                          onClick={() =>
                            setMobileSubmenuOpen(
                              mobileSubmenuOpen === item.name ? null : item.name
                            )
                          }
                        >
                          {item.name}
                          {mobileSubmenuOpen === item.name ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>

                        <AnimatePresence>
                          {mobileSubmenuOpen === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-1 space-y-1">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={cn(
                                      "block rounded-md p-2 text-sm transition-colors hover:text-primary",
                                      pathname === subItem.href && "text-primary font-medium"
                                    )}
                                    onClick={() => setOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block rounded-md p-3 text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href && "text-primary"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-6">
                <div className="border border-border rounded-md p-4">
                  <h4 className="mb-2 text-sm font-medium">Follow us</h4>
                  <Link
                    href="https://instagram.com/irrationalrobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-primary"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://youtube.com/@irrationalrobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-primary"
                  >
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
