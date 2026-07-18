import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "Deivid Souza | Personal Trainer",
    template: "%s | Deivid Souza",
  },
  description: "Acompanhamento personalizado para transformar saúde, performance e qualidade de vida.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased"
        style={{ "--brand-logo-url": `url("${basePath}/brand/deivid-souza-logo.webp")` } as CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
