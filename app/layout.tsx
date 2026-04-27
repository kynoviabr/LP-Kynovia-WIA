import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kynovia | Agente Comercial com IA para WhatsApp",
  description:
    "Agente comercial com IA para equipes B2B que operam no WhatsApp e precisam responder rápido, qualificar melhor e entregar contexto para vendas.",
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
