import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmergencyButton from "./components/EmergencyButton";

export const metadata: Metadata = {
  title: "Equilíbrio em Pontos — Autocuidado Digital",
  description: "Plataforma de autocuidado digital para ansiedade baseada na Medicina Tradicional Chinesa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <EmergencyButton />
      </body>
    </html>
  );
}