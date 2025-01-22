"use client";
import { ChevronDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "../logo/logo";
import { createNavRouting } from "@/constants/route";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../language-switcher/language-swithcer";
import { usePathname } from "next/navigation";
// Menu items.

function AppSidebar() {
  const locale = useLocale();
  const nav_routing = createNavRouting(locale);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const pathName = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Logo />
          <SidebarGroupContent className="mt-3">
            <SidebarMenu>
              {nav_routing.map((menu) => {
                return menu.children ? (
                  <Collapsible
                    key={menu.title}
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    defaultOpen={false}
                    className={cn("group/collapsible ")}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger
                        className={cn(
                          pathName.includes(menu.url)
                            ? "bg-[var(--yellow)]"
                            : null,
                        )}
                        asChild
                      >
                        <SidebarMenuButton className="w-full flex justify-between font-bold">
                          <div className="w-full flex gap-2 items-center">
                            <menu.icon className="w-4 h-4" /> {t(menu.title)}
                          </div>
                          <ChevronDown
                            className={cn(
                              "transition-transform duration-300",
                              isOpen ? "rotate-180" : "rotate-0",
                            )}
                            size={20}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {menu.children.map((child) => {
                            return (
                              <SidebarMenuSubItem
                                className={cn(
                                  pathName === child.url
                                    ? "bg-[var(--yellow)]"
                                    : null,
                                  "p-2 rounded",
                                )}
                                key={child.title}
                              >
                                <Link
                                  className="flex gap-2 items-center"
                                  href={child.url}
                                >
                                  <child.icon className="w-4 h-4" />
                                  {t(child.title)}
                                </Link>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={menu.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "font-bold",
                        pathName === menu.url ? "bg-[var(--yellow)]" : null,
                      )}
                    >
                      <a href={menu.url}>
                        <menu.icon className="w-4 h-4" />
                        <span> {t(menu.title)}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              <LanguageSwitcher sidebar />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
