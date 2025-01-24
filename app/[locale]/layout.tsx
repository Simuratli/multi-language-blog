import type { Metadata } from "next";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/mobile-menu/MobileMenu";
import Navbar from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "U Tech Blog",
  description: "Tech blog about development",
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
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <div className="mx-auto w-full">
              <main className="w-full min-h-[88vh] max-w-[1240px] mx-auto px-4">
                <Navbar />
                {children}
              </main>
              <Footer />
            </div>
          </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
