"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Compass, PlusCircle, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ROUTES = [
  {
    label: "Explore",
    icon: Compass,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Create Vault",
    icon: PlusCircle,
    href: "/create",
    color: "text-emerald-500",
  },
  {
    label: "Portfolio",
    icon: LayoutDashboard,
    href: "/portfolio",
    color: "text-violet-500",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    // ★修正点: md:hidden を削除し、常に表示されるように変更しました
    <div className=""> 
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* ★修正点: ボタンからも md:hidden を削除 */}
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Menu />
          </Button>
        </SheetTrigger>
        
        <SheetContent side="left" className="p-0 bg-neutral-950 border-neutral-800 text-white w-72">
          <SheetHeader className="p-6 border-b border-neutral-800">
            <SheetTitle className="text-xl font-bold text-white">Axis Protocol</SheetTitle>
            <SheetDescription className="text-neutral-500 text-xs">
              Navigation
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-1 p-4">
            {ROUTES.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href ? "text-white bg-white/10" : "text-neutral-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}