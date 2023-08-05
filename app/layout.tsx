import "./globals.css";
import type { Metadata } from "next";
import { Inter, Antonio, League_Spartan } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const antonio = Antonio({ subsets: ["latin"] });
export const league_spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planets Fun Site",
  description: "An 8-page fact site for all planets in our solar system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
