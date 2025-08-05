import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@core/components/ThemeProvider";
import ReactQueryProvider from "@core/providers/ReactQueryProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CoreFloatingChat } from "@core/components/CoreFloatingChat";

export const metadata: Metadata = {
  title: "Pulse Dashboard",
  description: "Pulse Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        /> */}

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        /> */}

        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        /> */}
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <ReactQueryProvider>
              {children}
              <CoreFloatingChat avatarImage="/images/illustrations/mascot/mascot-front-waving.png" />
            </ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
