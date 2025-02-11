"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Logo from "../logo/logo";
import { useLocale, useTranslations } from "next-intl";
import { createNavRouting } from "@/constants/route";
import LanguageSwitcher from "../language-switcher/language-swithcer";
import { usePathname } from "next/navigation";
import { useStore } from "@/store";

const Navbar = () => {
  const { toggleSidebar, openMobile } = useSidebar();
  const locale = useLocale() as "az" | "en";
  const t = useTranslations("Navbar");
  const { categories } = useStore();
  const nav_routing = createNavRouting(locale, categories);
  const pathName = usePathname();

  return (
    <nav className="w-full py-3 bg-white flex justify-between items-center ">
      {/* Logo Section */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            {nav_routing.map((menu) => {
              return menu.children ? (
                <NavigationMenuItem key={menu.title + Math.random().toString()}>
                  <NavigationMenuTrigger
                    className={cn(
                      pathName.includes(menu.url) ? "bg-[var(--yellow)]" : "",
                    )}
                  >
                    {t(menu.title)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="transition-all duration-300 ease-in-out transform origin-top-left">
                    <div className="w-[200px] flex flex-col gap-2">
                      {menu.children.map((child) => {
                        return (
                          <NavigationMenuLink
                            key={child.title + Math.random().toString()}
                            className={cn(
                              "hover:bg-gray-900 p-2 hover:text-white cursor-pointer",
                              pathName === child.url
                                ? "bg-[var(--yellow)]"
                                : null,
                            )}
                            asChild
                          >
                            <Link href={child.url}>{child.title}</Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuLink
                    href={menu.url}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathName === menu.url ? "bg-[var(--yellow)]" : null,
                    )}
                  >
                    {t(menu.title)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
            <LanguageSwitcher sidebar={false} />
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-xl"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {openMobile ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;
