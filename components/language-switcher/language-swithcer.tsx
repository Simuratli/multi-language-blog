import React from 'react'
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import Image from 'next/image';
import { NavigationMenuItem } from '../ui/navigation-menu';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menubar';
import { Languages } from 'lucide-react';
import { usePathname } from '@/app/i18n/routing';
interface LanguageSwitcherProps {
    sidebar: boolean;
}

const LanguageSwitcher = ({ sidebar }: LanguageSwitcherProps) => {

    const pathname = usePathname(); // Get the current path

    const changeLanguage = (locale: string) => {
        const currentPath = pathname || "/";
        const newUrl = `/${locale}${currentPath}`; // Construct the new URL
        window.location.href = newUrl; // Reload the page with the new locale
    };
    return sidebar ? (
        <SidebarMenuItem key={"Language"}>
            <SidebarMenuButton>
                <Image
                    onClick={() => changeLanguage("en")}
                    alt="United States"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                    width={30}
                    height={20}
                />
                <Image
                    onClick={() => changeLanguage("az")}
                    alt="Azerbaijan"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AZ.svg"
                    width={30}
                    height={20}
                />
            </SidebarMenuButton>
        </SidebarMenuItem>
    ) : (
        <NavigationMenuItem>
            <Menubar className="bg-transparent border-none shadow-none cursor-pointer">
                <MenubarMenu>
                    <MenubarTrigger>
                        <Languages className="w-6 h-6" />
                    </MenubarTrigger >
                    <MenubarContent className="mr-3">
                        <MenubarItem className='flex gap-4 cursor-pointer' onClick={() => changeLanguage("en")}>
                            <Image
                                alt="United States"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                                width={30}
                                height={20}
                            />
                            English
                        </MenubarItem>
                        <MenubarItem className='flex gap-4 cursor-pointer' onClick={() => changeLanguage("az")}>
                            <Image
                                alt="Azerbaijan"
                                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AZ.svg"
                                width={30}
                                height={20}
                            />
                            Azərbaycanca
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu >
            </Menubar >
        </NavigationMenuItem >
    )
}

export default LanguageSwitcher
