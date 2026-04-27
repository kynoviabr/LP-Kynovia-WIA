import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL("https://kynovia.com.br");
const siteTitle = "Kynovia | Agente Comercial com IA para WhatsApp";
const siteDescription =
  "Agente comercial com IA para equipes B2B que operam no WhatsApp e precisam responder rápido, qualificar melhor e entregar contexto para vendas.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Kynovia",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
