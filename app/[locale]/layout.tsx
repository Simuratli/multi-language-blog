import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/mobile-menu/MobileMenu";
import Navbar from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
const montserrat = Montserrat({
  subsets: ["latin"], // Include subsets (e.g., 'latin', 'cyrillic', etc.)
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all weights
  variable: "--font-montserrat", // Optional: Use a CSS variable for custom usage
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <main className="w-full">
              <Navbar />
              {children}
            </main>
          </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
