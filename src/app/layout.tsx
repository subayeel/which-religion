import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { cn } from "@/lib/utils";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ThemeProvider } from "next-themes";
import SidebarComponent from "@/app/component/Sidebar";
import Link from "next/link";
import React from "react";
import Script from "next/script";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Which Religion",
  description: "A tool to guide research on religions. ",
  keywords:
    "which religion, which religion is best, which religion is true, which religion is right, which religion is wrong, which religion is good, which religion is bad, which religion is right, which religion is wrong, which religion is good, which religion is bad",
  manifest: "/web.manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        {/* Google Translate */}
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script>

        {/* Google Translate CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
        />
      </head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="flex flex-col min-h-screen bg-background font-sans antialiased">
          <SidebarProvider defaultOpen={true}>
            <SidebarComponent />
            <main className="flex flex-col w-full">
              <SidebarTrigger className="ml-2 aspect-square sm:hidden" />
              {/* <SidebarTrigger className="ml-2 mt-2 aspect-square" /> */}
              <Link
                href="/"
                className="flex justify-between items-center absolute top-3 right-3 z-50 sm:hidden"
              >
                <Home color="black" size={18} />
              </Link>

              <div className="z-10">{children}</div>
              {/* <div
                id="google_translate_element"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  right: 16,
                  top: 16,
                  zIndex: 1000,
                  backgroundColor: "#f7f7f7",
                  padding: "12px",
                }}
              ></div> */}
            </main>
          </SidebarProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
