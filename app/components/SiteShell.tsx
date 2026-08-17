"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, stagger, svg } from "animejs";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowIcon } from "./Icons";
import { assetPath } from "../lib/assets";
import { whatsappLink } from "../lib/contact";

const INTRO_SESSION_KEY = "deivid-souza-intro-seen";

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
    if (!intro) return;

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
    let holdTimer = 0;
    let removalTimer = 0;
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

    const drawables = svg.createDrawable(
      ".site-loading-intro .loading-draw-line",
    );

    animate(drawables, {
      draw: ["0 0", "0 1"],
      ease: "inOutQuad",
      duration: 1800,
      delay: stagger(90),
      onComplete: () => {
        holdTimer = window.setTimeout(finishIntro, 450);
      },
    });

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(removalTimer);
      document.documentElement.classList.remove("site-loading");
    };
  }, []);

  return (
    <div
      className="site-loading-intro"
      ref={introRef}
      role="status"
      aria-label="Carregando o site de Deivid Souza"
    >
      <div className="site-loading-inner">
        <span className="site-loading-kicker">
          Performance · Saúde · Evolução
        </span>
        <svg
          className="site-loading-wordmark"
          viewBox="0 0 880 150"
          role="img"
          aria-label="Deivid Souza"
        >
          <title>Deivid Souza</title>
          <g fill="none">
            <path className="loading-draw-line" d="M20 120V30H45C75 30 75 120 45 120H20" />
            <path className="loading-draw-line" d="M150 30H95V120H150M95 74H140" />
            <path className="loading-draw-line" d="M170 30H225M197.5 30V120M170 120H225" />
            <path className="loading-draw-line" d="M245 30L272.5 120L300 30" />
            <path className="loading-draw-line" d="M320 30H375M347.5 30V120M320 120H375" />
            <path className="loading-draw-line" d="M395 120V30H420C450 30 450 120 420 120H395" />
            <path className="loading-draw-line loading-draw-line-souza" d="M555 36C544 27 511 27 502 45C494 62 510 72 530 75C551 78 560 91 552 108C544 124 511 124 500 114" />
            <path className="loading-draw-line loading-draw-line-souza" d="M602.5 30C570 30 570 120 602.5 120C635 120 635 30 602.5 30Z" />
            <path className="loading-draw-line loading-draw-line-souza" d="M650 30V92C650 130 705 130 705 92V30" />
            <path className="loading-draw-line loading-draw-line-souza" d="M725 30H780L725 120H780" />
            <path className="loading-draw-line loading-draw-line-souza" d="M800 120L827.5 30L855 120M810 88H845" />
          </g>
        </svg>
        <span className="site-loading-line" aria-hidden="true" />
      </div>
    </div>
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
