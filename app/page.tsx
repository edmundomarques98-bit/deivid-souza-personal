import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, DotsIcon, PulseIcon } from "./components/Icons";
import { SiteShell } from "./components/SiteShell";
import { assetPath } from "./lib/assets";
import { whatsappLink } from "./lib/contact";

const pillars = [
  {
    number: "01",
    title: "Performance",
    text: "Treinos planejados para fazer você evoluir com técnica, segurança e constância.",
  },
  {
    number: "02",
    title: "Saúde",
    text: "Uma rotina que respeita seu momento, suas limitações e sua qualidade de vida.",
  },
  {
    number: "03",
    title: "Evolução",
    text: "Acompanhamento próximo para ajustar a rota e transformar esforço em progresso real.",
  },
];

export default function Home() {
  return (
    <SiteShell active="inicio">
      <section className="hero hero-home">
        <div className="hero-grid container">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Personal trainer • acompanhamento individual</p>
            <h1>Mais do que mudar o corpo.<br /><em>Evoluir o estilo de vida.</em></h1>
            <p className="hero-lead">
              Um acompanhamento próximo, humano e estratégico para quem quer treinar com direção, ganhar confiança e construir resultados consistentes.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/planos">
                Conhecer os planos <ArrowIcon />
              </Link>
              <Link className="button button-ghost" href="/acompanhamento">
                Ver como funciona
              </Link>
            </div>
            <div className="hero-proof" aria-label="Diferenciais do acompanhamento">
              <span><CheckIcon /> Treino individualizado</span>
              <span><CheckIcon /> Suporte próximo</span>
              <span><CheckIcon /> Evolução monitorada</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-1" aria-label="Conceito visual de performance, saúde e evolução">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="hero-brand-logo">
              <Image src={assetPath("/brand/deivid-souza-logo.webp")} alt="Deivid Souza Personal Trainer" fill sizes="(max-width: 820px) 80vw, 38vw" priority />
            </div>
            <div className="metric-card metric-main">
              <span>Seu plano</span>
              <strong>100% individual</strong>
              <small>Objetivo • rotina • limitações</small>
            </div>
            <div className="metric-card metric-side">
              <PulseIcon />
              <strong>Constância</strong>
              <small>é o que muda o jogo</small>
            </div>
            <div className="vertical-word">MOVIMENTO</div>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <span>PERFORMANCE</span><i>•</i><span>SAÚDE</span><i>•</i><span>EVOLUÇÃO</span><i>•</i><span>PERFORMANCE</span><i>•</i><span>SAÚDE</span><i>•</i><span>EVOLUÇÃO</span>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark"><span /> A base do acompanhamento</p>
            <h2>Treino bom é aquele que faz sentido para <em>você.</em></h2>
          </div>
          <p>
            Nada de ficha genérica ou treino copiado. Cada decisão parte do seu nível atual, do tempo disponível e do resultado que você quer construir.
          </p>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <div className="pillar-top"><span>{pillar.number}</span><DotsIcon /></div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container feature-grid">
          <div className="feature-copy">
            <p className="eyebrow"><span /> Acompanhamento completo</p>
            <h2>Você não recebe só um treino.<br /><em>Recebe direção.</em></h2>
            <p>Do primeiro contato ao ajuste de cada sessão, o processo foi pensado para diminuir dúvidas, aumentar sua confiança e manter você em movimento.</p>
            <Link className="text-link" href="/acompanhamento">Conhecer tudo o que está incluso <ArrowIcon /></Link>
          </div>
          <div className="feature-list">
            {[
              ["Treinamento personalizado", "Planejamento compatível com seu objetivo, rotina e condição física."],
              ["Aplicativo de treino", "Seu plano organizado, atualizado e acessível quando precisar."],
              ["Suporte contínuo", "Orientação para dúvidas, execução e ajustes ao longo do processo."],
              ["Avaliação e acompanhamento", "Medidas, fotos e revisões periódicas para acompanhar a evolução."],
            ].map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowIcon />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="results-teaser">
          <div className="results-copy">
            <p className="eyebrow dark"><span /> Progresso que se percebe</p>
            <h2>Resultados construídos no processo, não em promessas.</h2>
            <p>Conheça o espaço reservado para histórias, evoluções e antes e depois publicados com autorização dos alunos.</p>
            <Link className="button button-dark" href="/resultados">Ver resultados <ArrowIcon /></Link>
          </div>
          <div className="compare-mini" aria-label="Antes e depois de uma aluna">
            <figure>
              <Image src={assetPath("/resultados/aluna-antes.jpeg")} alt="Aluna na academia antes do acompanhamento" fill sizes="(max-width: 820px) 50vw, 28vw" />
              <figcaption><span>ANTES</span><strong>Início do processo</strong></figcaption>
            </figure>
            <figure>
              <Image src={assetPath("/resultados/aluna-depois-02.jpeg")} alt="Aluna na academia depois do acompanhamento" fill sizes="(max-width: 820px) 50vw, 28vw" />
              <figcaption><span>DEPOIS</span><strong>Evolução com constância</strong></figcaption>
            </figure>
            <i className="compare-line" />
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow"><span /> Seu próximo passo</p>
            <h2>Você não precisa estar pronto.<br />Precisa <em>começar.</em></h2>
          </div>
          <a className="button button-light" href={whatsappLink("Olá, Deivid! Vi seu site e quero iniciar meu acompanhamento.")} target="_blank" rel="noreferrer">Quero iniciar meu acompanhamento <ArrowIcon /></a>
        </div>
      </section>
    </SiteShell>
  );
}
