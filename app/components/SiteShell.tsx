import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";
import { assetPath } from "../lib/assets";
import { whatsappLink } from "../lib/contact";

type NavKey = "inicio" | "acompanhamento" | "resultados" | "planos" | "contato";

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "inicio", label: "Início", href: "/" },
  { key: "acompanhamento", label: "Acompanhamento", href: "/acompanhamento" },
  { key: "resultados", label: "Resultados", href: "/resultados" },
  { key: "planos", label: "Planos", href: "/planos" },
  { key: "contato", label: "Contato", href: "/contato" },
];

export function SiteShell({ children, active }: { children: ReactNode; active: NavKey }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Deivid Souza — página inicial">
            <span className="brand-logo brand-logo-header">
              <Image src={assetPath("/brand/deivid-souza-logo.webp")} alt="Deivid Souza Personal Trainer" fill sizes="240px" priority />
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => <Link className={active === item.key ? "active" : ""} href={item.href} key={item.key}>{item.label}</Link>)}
          </nav>
          <a className="header-cta" href={whatsappLink("Olá, Deivid! Vi seu site e quero começar meu acompanhamento.")} target="_blank" rel="noreferrer">Começar agora <ArrowIcon /></a>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu"><span /><span /><span /></summary>
            <nav aria-label="Navegação móvel">
              {navItems.map((item) => <Link className={active === item.key ? "active" : ""} href={item.href} key={item.key}>{item.label}</Link>)}
            </nav>
          </details>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand footer-brand">
              <span className="brand-logo brand-logo-footer">
                <Image src={assetPath("/brand/deivid-souza-logo.webp")} alt="Deivid Souza Personal Trainer" fill sizes="270px" />
              </span>
            </Link>
            <p>Mais do que uma mudança no corpo, uma evolução no estilo de vida.</p>
          </div>
          <div>
            <strong>Navegação</strong>
            {navItems.map((item) => <Link href={item.href} key={item.key}>{item.label}</Link>)}
          </div>
          <div>
            <strong>Pilares</strong>
            <span>Performance</span><span>Saúde</span><span>Evolução</span>
          </div>
          <div className="footer-action">
            <strong>Pronto para começar?</strong>
            <p>Converse sobre seus objetivos e descubra o melhor plano.</p>
            <a className="text-link" href={whatsappLink("Olá, Deivid! Vi seu site e quero conversar sobre meus objetivos.")} target="_blank" rel="noreferrer">Falar com Deivid <ArrowIcon /></a>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Deivid Souza Personal Trainer</span><span>Resultados individuais podem variar.</span></div>
      </footer>
    </>
  );
}
