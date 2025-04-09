import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import AOSInitializer from "@/components/AOSInitializer"; // Import de l'initialisateur AOS

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
    <html lang="fr">
      <body className={`${poppins.className} bg-dark-bg text-gray-200 antialiased`}>
        <Navbar />
        <main className="pt-32">{children}</main>
        {/* Initialisation AOS pour les animations */}
        <AOSInitializer />
        {/* Bouton WhatsApp flottant */}
        <FloatingWhatsAppButton phoneNumber="33612345678" />
        <Footer />
      </body>
    </html>
  );
}
