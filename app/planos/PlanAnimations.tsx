"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

type AnimeGlobal = {
  animate: (
    target: Element,
    parameters: Record<string, unknown>,
  ) => unknown;
};

declare global {
  interface Window {
    anime?: AnimeGlobal;
  }
}

const ANIMEJS_URL =
  "https://cdn.jsdelivr.net/npm/animejs@4.5.0/dist/bundles/anime.umd.min.js";

export function PlanAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initializedRef = useRef(false);

  const initialize = useCallback(() => {
    if (initializedRef.current || !window.anime?.animate) return;

    initializedRef.current = true;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".plan-animated"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          observer.unobserve(entry.target);
          const target = entry.target as HTMLElement;
          const endY =
            target.classList.contains("featured") &&
            window.matchMedia("(min-width: 821px)").matches
              ? -14
              : 0;

          target.style.willChange = "transform, opacity";

          window.anime?.animate(target, {
            y: { from: "100cqh", to: endY },
            opacity: { from: 0, to: 1 },
            duration: 1000,
            ease: "outElastic(1.5, 0.57)",
            onComplete: () => {
              target.style.removeProperty("will-change");
              target.style.removeProperty("transform");
              target.style.removeProperty("opacity");
            },
          });
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observerRef.current?.observe(target));
  }, []);

  useEffect(() => {
    if (window.anime?.animate) initialize();

    return () => observerRef.current?.disconnect();
  }, [initialize]);

  return (
    <Script
      id="animejs-planos"
      src={ANIMEJS_URL}
      strategy="afterInteractive"
      onLoad={initialize}
      onReady={initialize}
    />
  );
}
