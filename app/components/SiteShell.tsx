"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowIcon } from "./Icons";
import { assetPath } from "../lib/assets";
import { whatsappLink } from "../lib/contact";

type AnimeGlobal = {
  animate: (target: Element, parameters: Record<string, unknown>) => unknown;
  steps: (count: number, fromStart?: boolean) => unknown;
};

const ANIMEJS_URL =
  "https://cdn.jsdelivr.net/npm/animejs@4.5.0/dist/bundles/anime.umd.min.js";
const INTRO_SESSION_KEY = "deivid-souza-intro-seen";

function getAnime() {
  return (window as unknown as { anime?: AnimeGlobal }).anime;
}

function replayHeaderLogo() {
  const logo = document.querySelector<HTMLElement>(".brand-logo-header");
  if (!logo) return;
  logo.classList.remove("shadow-drop-2-left");
  void logo.offsetWidth;
  logo.classList.add("shadow-drop-2-left");
}

function SiteLoadingIntro() {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    const name = intro?.querySelector<HTMLElement>(".site-loading-name");
    if (!intro || !name) return;

    let hasSeenIntro = false;
    try {
      hasSeenIntro = window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
    } catch {
      hasSeenIntro = false;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (hasSeenIntro || reduceMotion) {
      intro.remove();
      return;
    }

    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    } catch {
      // A animação continua se o armazenamento estiver bloqueado.
    }

    document.documentElement.classList.add("site-loading");
    let animationFrame = 0;
    let removalTimer = 0;
    let attempts = 0;
    let finished = false;

    const finishIntro = () => {
      if (finished) return;
      finished = true;
      intro.classList.add("is-finished");
      document.documentElement.classList.remove("site-loading");

      removalTimer = window.setTimeout(() => {
        intro.remove();
        replayHeaderLogo();
      }, 320);
    };

    const waitForAnime = () => {
      const anime = getAnime();
      if (!anime?.animate || !anime.steps) {
        attempts += 1;
        if (attempts < 240) {
          animationFrame = window.requestAnimationFrame(waitForAnime);
        } else {
          finishIntro();
        }
        return;
      }

      anime.animate(name, {
        y: "100cqh",
        duration: 1000,
        delay: 450,
        ease: anime.steps(5, true),
        onComplete: finishIntro,
      });
    };

    animationFrame = window.requestAnimationFrame(waitForAnime);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(removalTimer);
      document.documentElement.classList.remove("site-loading");
    };
  }, []);

  return (
    <>
      <div
        className="site-loading-intro"
        ref={introRef}
        role="status"
        aria-label="Carregando o site de Deivid Souza"
      >
        <div className="site-loading-inner">
          <span className="site-loading-kicker">Performance · Saúde · Evolução</span>
          <div className="site-loading-name" aria-hidden="true">
            <span>Deivid</span><strong>Souza</strong>
          </div>
          <span className="site-loading-line" aria-hidden="true" />
        </div>
      </div>
      <Script id="animejs-global" src={ANIMEJS_URL} strategy="afterInteractive" />
    </>
  );
}

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
      <SiteLoadingIntro />
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Deivid Souza — página inicial">
            <span className="brand-logo brand-logo-header shadow-drop-2-left">
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
