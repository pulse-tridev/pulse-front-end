import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@core/components/ThemeProvider";
import ReactQueryProvider from "@core/providers/ReactQueryProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

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
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
