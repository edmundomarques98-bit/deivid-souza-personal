import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "../components/Icons";
import { SiteShell } from "../components/SiteShell";
import { assetPath } from "../lib/assets";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Espaço para histórias e evoluções reais dos alunos de Deivid Souza.",
};

export default function ResultadosPage() {
  return (
    <SiteShell active="resultados">
      <section className="page-hero results-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow"><span /> Histórias reais</p><h1>O resultado aparece quando o processo ganha <em>constância.</em></h1></div>
          <p>Este espaço foi desenhado para apresentar evoluções reais, com contexto, autorização e respeito à história de cada aluno.</p>
        </div>
      </section>

      <section className="section container">
        <div className="honesty-note">
          <strong>Transparência também faz parte do acompanhamento.</strong>
          <p>Os registros abaixo mostram uma evolução real. Cada pessoa responde de uma forma ao processo; por isso, os resultados são individuais e não representam promessa de prazo ou de transformação específica.</p>
        </div>

        <div className="case-list">
          <article className="case-card real-result-card">
            <div className="case-visual real-result-gallery" aria-label="Comparativo de evolução da aluna">
              <figure className="result-photo result-photo-before">
                <Image src={assetPath("/resultados/aluna-antes.jpeg")} alt="Aluna na academia no início do acompanhamento" fill sizes="(max-width: 540px) 100vw, (max-width: 820px) 50vw, 24vw" />
                <figcaption><span>ANTES</span><small>Início do processo</small></figcaption>
              </figure>
              <figure className="result-photo result-photo-after-one">
                <Image src={assetPath("/resultados/aluna-depois-01.jpeg")} alt="Primeiro registro da evolução da aluna na academia" fill sizes="(max-width: 540px) 100vw, (max-width: 820px) 50vw, 24vw" />
                <figcaption><span>DEPOIS</span><small>Evolução</small></figcaption>
              </figure>
              <figure className="result-photo result-photo-after-two">
                <Image src={assetPath("/resultados/aluna-depois-02.jpeg")} alt="Segundo registro da evolução da aluna na academia" fill sizes="(max-width: 540px) 100vw, (max-width: 820px) 50vw, 24vw" />
                <figcaption><span>DEPOIS</span><small>Outro ângulo</small></figcaption>
              </figure>
            </div>
            <div className="case-copy">
              <p className="case-label">RESULTADO REAL • 01</p>
              <h2>Evolução construída com constância</h2>
              <span className="period">Acompanhamento personalizado</span>
              <p>Uma mudança construída com planejamento individual, orientação próxima e ajustes pensados para a rotina e os objetivos da aluna.</p>
              <div className="case-tags"><span><CheckIcon /> Planejamento individual</span><span><CheckIcon /> Acompanhamento próximo</span><span><CheckIcon /> Progressão contínua</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container evidence-grid">
          <div><p className="eyebrow"><span /> Muito além da balança</p><h2>Evolução também é o que muda <em>por dentro.</em></h2></div>
          <div className="evidence-list">
            <article><strong>01</strong><p>Mais disposição para a rotina</p></article>
            <article><strong>02</strong><p>Mais confiança durante o treino</p></article>
            <article><strong>03</strong><p>Melhor execução e consciência corporal</p></article>
            <article><strong>04</strong><p>Constância e compromisso consigo</p></article>
          </div>
        </div>
      </section>

      <section className="cta-band cta-band-beige">
        <div className="container cta-band-inner">
          <div><p className="eyebrow dark"><span /> Sua história pode começar agora</p><h2>O primeiro resultado é tomar a <em>decisão.</em></h2></div>
          <Link className="button button-dark" href="/planos">Conhecer os planos <ArrowIcon /></Link>
        </div>
      </section>
    </SiteShell>
  );
}
