// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import AOSInitializer from "@/components/AOSInitializer";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: 'swap',
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "D-Solution IA",
  description: "Solutions d'intelligence artificielle pour votre entreprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      {/* AUCUN espace ou saut de ligne ici */}
      <body className={`${poppins.className} bg-background text-foreground antialiased`}>
        {/* Les sauts de lignes A L'INTERIEUR de body sont OK */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-32">{children}</main>
          <AOSInitializer />
          <FloatingWhatsAppButton phoneNumber="33612345678" />
          <Footer />
        </ThemeProvider>
      </body>
      {/* AUCUN espace ou saut de ligne ici non plus */}
    </html>
  );
}