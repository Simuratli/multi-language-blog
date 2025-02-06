import type { Metadata } from "next";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/mobile-menu/MobileMenu";
import Navbar from "@/components/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/footer/footer";
import groq from "groq";
import client from "@/sanity";
import ZustandProvider from "@/providers/zustand-provider";
import { ToastContainer } from "react-toastify";

const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    slug
  }
`;

async function getCategories() {
  const categories = await client.fetch(categoriesQuery);
  return categories;
}

export const metadata: Metadata = {
  title: {
    template: '%s | UNKAI',
    default: 'Unkai Tech Blog', // Used when no title is provided
  },
  description: 'Welcome to my website',
  openGraph: {
    title: 'My Site',
    description: 'Welcome to my website',
    url: 'https://mysite.com',
    siteName: 'UNKAI',
    images: [
      {
        url: '/images/bg.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'UNKAI',
    card: 'summary_large_image',
    images: ['/images/bg.png'],
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

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
                <Footer />
              </div>
            </SidebarProvider>
          </ZustandProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
