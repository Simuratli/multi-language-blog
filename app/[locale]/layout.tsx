import type { Metadata } from "next";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/mobile-menu/MobileMenu";
import Navbar from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/footer/footer";
import client from "@/sanity";
import ZustandProvider from "@/providers/zustand-provider";
import { ToastContainer } from "react-toastify";
import { categoriesQuery } from "@/constants/requests";

async function getCategories() {
  const categories = await client.fetch(categoriesQuery);
  return categories;
}

export const metadata: Metadata = {
  title: {
    template: "%s | UNKAI",
    default: "Unkai Tech Blog", // Used when no title is provided
  },
  description:
    "Unkai Tech Blog is a multilingual platform (Azerbaijani and English) dedicated to front-end development, offering insights, tutorials, and updates for developers.",
  openGraph: {
    title: "Unkai Tech Blog",
    description:
      "Unkai Tech Blog is a multilingual platform (Azerbaijani and English) dedicated to front-end development, offering insights, tutorials, and updates for developers.",
    url: "https://mysite.com",
    siteName: "UNKAI",
    images: [
      {
        url: "/images/bg.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "UNKAI",
    card: "summary_large_image",
    description:"A multilingual platform dedicated to front-end development offering tutorials and insights.",
    images: ["/images/bg.png"],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "LYxCfyRNBX2i-yNHpLKuCDilh4TDTGwERTWjzq2rPc4",
    yandex: "yandex-verification-code",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const categories = await getCategories();
  // const posts = await getPosts();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ZustandProvider categories={categories}>
            <SidebarProvider defaultOpen={false}>
              <ToastContainer />
              <AppSidebar />
              <div className="mx-auto w-full">
                <main className="w-full min-h-[88vh] max-w-[1240px] mx-auto px-4">
                  <Navbar />
                  {children}
                </main>
                <Footer locale={locale} />
              </div>
            </SidebarProvider>
          </ZustandProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
