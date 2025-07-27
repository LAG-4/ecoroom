// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
/* ----------  Font definition  ---------- */

/* ----------  Metadata  ---------- */

export const metadata: Metadata = {
  title: "EcoBid | Eco-Friendly Home Renovation Quotes",
  description:
    "Upload a photo of your space, get eco-friendly makeover bids from vetted vendors, compare portfolios, and start your sustainable renovation today.",
  openGraph: {
    title: "EcoBid | Eco-Friendly Home Renovation Quotes",
    description:
      "Upload a photo of your space, get eco-friendly makeover bids from vetted vendors, compare portfolios, and start your sustainable renovation today.",
    siteName: "EcoBid",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "EcoBid – compare eco-friendly renovation bids",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoBid | Eco-Friendly Home Renovation Quotes",
    description:
      "Upload a photo of your space, get eco-friendly makeover bids from vetted vendors, compare portfolios, and start your sustainable renovation today.",
    images: ["/og.png"],
  },
};

/* ----------  Root layout  ---------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <NavBar/>
        <Analytics/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}