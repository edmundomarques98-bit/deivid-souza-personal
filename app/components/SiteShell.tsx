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
      ".site-loading-intro .loading-name-path",
    );

    animate(drawables, {
      draw: ["0 0", "0 1"],
      ease: "inOutQuad",
      duration: 1500,
      delay: stagger(70),
      onComplete: () => {
        animate(
          ".site-loading-intro .loading-name-path:not(.loading-name-path-souza)",
          {
            fill: "rgba(251, 252, 250, .98)",
            strokeWidth: 1.5,
            duration: 360,
            ease: "outQuad",
          },
        );
        animate(".site-loading-intro .loading-name-path-souza", {
          fill: "rgba(36, 189, 130, .98)",
          strokeWidth: 1.5,
          duration: 360,
          ease: "outQuad",
        });
        holdTimer = window.setTimeout(finishIntro, 760);
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
          aria-label="Deivid Souza na fonte Quantum"
        >
          <title>Deivid Souza</title>
          <g fill="none">
            <path className="loading-name-path" d="M93 71C93 71 93 71 93 71C87 62 77 57 67 57H35V75L51 91V73H67C72 73 77 75 80 80C80 80 80 80 80 80C82 82 83 86 83 89C83 92 82 95 80 98C80 98 80 98 80 98C77 102 73 105 68 105C67 105 67 105 67 105H51V98L35 82V121H67C77 121 87 116 93 107C93 107 93 107 93 107C97 102 99 95 99 89C99 82 97 76 93 71Z" />
            <path className="loading-name-path" d="M129 105V101L113 85V121H167V105ZM167 97V81H139L131 73H167V57H113V78L133 97Z" />
            <path className="loading-name-path" d="M181 57V65L197 81V57ZM181 121H197V88L181 72Z" />
            <path className="loading-name-path" d="M230 55H212L243 121L252 103L237 71ZM257 55 246 77V78L255 97L257 93L275 55Z" />
            <path className="loading-name-path" d="M289 57V65L305 81V57ZM289 121H305V88L289 72Z" />
            <path className="loading-name-path" d="M378 71C378 71 378 71 378 71C372 62 362 57 352 57H320V75L336 91V73H352C357 73 362 75 365 80C365 80 365 80 365 80C367 82 368 86 368 89C368 92 367 95 365 98C365 98 365 98 365 98C362 102 358 105 353 105C352 105 352 105 352 105H336V98L320 82V121H352C362 121 372 116 378 107C378 107 378 107 378 107C382 102 384 95 384 89C384 82 382 76 378 71Z" />
            <path className="loading-name-path loading-name-path-souza" d="M446 57 462 73H487V57ZM486 95C486 94 486 94 486 94C486 94 486 94 486 94L485 93C485 93 485 93 485 93C485 93 485 93 485 92C484 91 484 91 484 90C484 90 484 90 484 90C483 90 483 90 483 90C483 89 483 89 483 89C483 89 483 89 483 89C483 89 483 89 483 89C483 89 483 88 483 88H482C482 88 482 88 482 88C482 88 482 87 481 87C481 87 481 87 481 87C481 87 481 87 481 87C481 87 481 87 481 87C480 86 480 86 480 86C480 86 480 86 480 86C479 86 479 85 479 85C478 85 478 85 478 85C478 85 478 84 477 84C477 84 476 84 476 84C476 83 476 83 476 83C475 83 475 83 475 83C475 83 475 83 474 83C474 83 474 83 474 83C473 83 473 82 473 82H472C472 82 472 82 472 82C472 82 472 82 472 82H471C471 82 471 82 471 82C470 82 470 82 470 82C470 82 469 82 469 82C469 82 469 82 469 82C469 82 469 82 468 82C468 82 468 82 468 82C468 82 468 82 468 82C468 82 468 82 468 82C467 82 467 82 467 82C467 82 467 82 467 82C466 82 466 82 466 82H442C440 82 438 80 438 78C438 75 440 74 442 74H454L438 58C437 58 437 58 436 59C433 59 430 61 428 64C425 66 424 69 423 72C422 74 422 76 422 78C422 80 422 82 423 84C424 87 425 90 428 92C430 94 433 96 436 97C438 98 440 98 442 98H466C469 98 470 100 470 102C470 104 469 106 466 106H422V122H466C471 122 475 121 478 118C482 116 484 112 485 108C486 106 486 104 486 102C486 100 486 98 485 96Z" />
            <path className="loading-name-path loading-name-path-souza" d="M556 66C550 60 542 57 534 57C526 57 520 59 514 63L513 64L524 76L525 75C527 73 530 73 534 73C538 73 542 74 545 77C548 80 550 84 550 89C550 92 549 95 547 97V98L558 110L559 108C563 103 566 96 566 89C566 80 562 72 556 66ZM542 102C540 104 537 105 534 105C529 105 525 103 522 100C519 97 517 93 517 89C517 85 518 82 520 80V79L509 68L508 69C504 75 501 81 501 89C501 97 505 105 511 111C517 118 525 121 534 121C541 121 548 119 553 114L554 113L543 102Z" />
            <path className="loading-name-path loading-name-path-souza" d="M629 57V89C629 93 627 97 624 100C623 101 622 102 621 103H620L631 115L632 114C636 111 639 108 641 103C644 99 645 94 645 89V57ZM614 105C613 105 613 105 612 105C608 105 604 103 601 100C598 97 596 93 596 89V87L580 71V89C580 99 585 109 594 115C599 119 606 121 612 121C617 121 621 120 625 118L627 117L614 105ZM596 56H580V64L596 80Z" />
            <path className="loading-name-path loading-name-path-souza" d="M698 105 746 57H670V73H708L659 121H682L698 105ZM689 121H734V105H705Z" />
            <path className="loading-name-path loading-name-path-souza" d="M761 121H779L797 91L788 76ZM800 56 791 71 818 115 822 121H840Z" />
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
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    let isMounted = true;
    navigator.serviceWorker
      .register(assetPath("/sw.js"), {
        scope: assetPath("/"),
        updateViaCache: "none",
      })
      .then((registration) => {
        if (!isMounted) return;
        registration.update().catch(() => undefined);
      })
      .catch(() => undefined);

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const textTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "main h1",
          "main h2",
          "main h3",
          "main .eyebrow",
          "main p",
          "main li",
          "main blockquote",
          "main .price",
          "main .period",
          "main .case-label",
          "main .price-badge",
        ].join(", "),
      ),
    );

    if (!("IntersectionObserver" in window)) {
      textTargets.forEach((target) =>
        target.classList.add("focus-in-expand-fwd"),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add("focus-in-expand-fwd");
          observer.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    textTargets.forEach((target, index) => {
      target.style.setProperty("--focus-delay", `${(index % 4) * 70}ms`);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      textTargets.forEach((target) =>
        target.style.removeProperty("--focus-delay"),
      );
    };
  }, [active]);

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
