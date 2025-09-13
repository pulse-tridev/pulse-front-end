import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@core/components/ThemeProvider";
import ReactQueryProvider from "@core/providers/ReactQueryProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Manrope } from "next/font/google";
import { CoreFloatingChat } from "@core/components/CoreFloatingChat";
import NoSsr from "@mui/material/NoSsr";
import { ToastProvider } from "@core/providers/ToastProvider";

export const metadata: Metadata = {
  title: "Pulse Dashboard",
  description: "Pulse Dashboard",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={manrope.variable} suppressHydrationWarning>
      <head />
      <body>
        {/* <InitColorSchemeScript attribute="data" defaultMode="light" /> */}
        {/* <AppRouterCacheProvider> */}
        <ReactQueryProvider>
          <ThemeProvider>
            {/* <ToastProvider /> */}
            {children}
            {/* <NoSsr>
                <CoreFloatingChat avatarImage="/images/illustrations/mascot/mascot-front-waving.png" />
              </NoSsr> */}
          </ThemeProvider>
        </ReactQueryProvider>
        {/* </AppRouterCacheProvider> */}
      </body>
    </html>
  );
}
