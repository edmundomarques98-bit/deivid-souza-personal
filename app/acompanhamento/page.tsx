import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, TargetIcon } from "../components/Icons";
import { SiteShell } from "../components/SiteShell";
import { assetPath } from "../lib/assets";

export const metadata: Metadata = {
  title: "Acompanhamento",
  description: "Conheça o método de acompanhamento personalizado de Deivid Souza.",
};

const inclusions = [
  {
    index: "01",
    title: "Treinamento personalizado",
    text: "Sessões elaboradas a partir da sua condição física, dos seus objetivos e de possíveis limitações.",
    bullets: ["Planejamento individual", "Progressão contínua", "Correção técnica", "Ajustes quando necessário"],
  },
  {
    index: "02",
    title: "Aplicativo exclusivo",
    text: "Seu planejamento de treino acessível para consultar exercícios, orientações e atualizações.",
    bullets: ["Treino sempre à mão", "Orientações organizadas", "Plano atualizado", "Mais autonomia"],
  },
  {
    index: "03",
    title: "Suporte contínuo",
    text: "Um canal próximo para tirar dúvidas, manter o foco e não deixar pequenas dificuldades travarem sua evolução.",
    bullets: ["Dúvidas sobre o treino", "Apoio durante o processo", "Contato próximo", "Mais segurança"],
  },
  {
    index: "04",
    title: "Avaliação física",
    text: "Acompanhamento com medidas e fotos para visualizar mudanças e embasar os próximos ajustes do treino.",
    bullets: ["Registro inicial", "Comparação periódica", "Ajustes orientados", "Evolução visível"],
  },
];

export default function AcompanhamentoPage() {
  return (
    <SiteShell active="acompanhamento">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow"><span /> O método Deivid Souza</p>
            <h1>Um plano construído ao redor da sua <em>realidade.</em></h1>
          </div>
          <p>O acompanhamento combina estratégia, atenção e ajustes contínuos para você saber o que fazer, por que fazer e como avançar.</p>
        </div>
      </section>

      <section className="section container intro-story">
        <div className="profile-card">
          <div className="profile-logo">
            <Image src={assetPath("/brand/deivid-souza-logo.webp")} alt="Deivid Souza Personal Trainer" fill sizes="(max-width: 820px) 90vw, 34vw" />
          </div>
          <div><span>PERSONAL TRAINER</span><strong>DEIVID<br />SOUZA</strong><small>Performance • Saúde • Evolução</small></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow dark"><span /> Mais humano. Mais individual.</p>
          <h2>Treinar é técnico.<br />Acompanhar é <em>entender pessoas.</em></h2>
          <p>O trabalho do Deivid nasce da vontade de ajudar pessoas a construírem um estilo de vida melhor e recuperarem a autoestima por meio da musculação.</p>
          <p>Por isso, o atendimento une planejamento profissional a uma relação próxima e respeitosa. Você não é tratado como mais uma ficha: seu momento, sua rotina e sua evolução orientam cada decisão.</p>
          <blockquote>“Excelência no atendimento e impacto positivo em cada aluno.”</blockquote>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow dark"><span /> O que está incluso</p>
            <h2>Uma estrutura completa para você <em>evoluir.</em></h2>
          </div>
          <div className="inclusion-grid">
            {inclusions.map((item) => (
              <article className="inclusion-card" key={item.index}>
                <div className="inclusion-index">{item.index}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}><CheckIcon /> {bullet}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container process-section">
        <div className="process-heading">
          <TargetIcon />
          <p className="eyebrow dark"><span /> Do primeiro contato ao progresso</p>
          <h2>Como funciona na prática</h2>
          <p>Um processo claro reduz a ansiedade de começar e permite que cada etapa tenha um propósito.</p>
        </div>
        <div className="timeline">
          {[
            ["01", "Conversa inicial", "Entendemos objetivos, rotina, experiência e dificuldades."],
            ["02", "Avaliação", "Registramos seu ponto de partida e possíveis limitações."],
            ["03", "Planejamento", "Definimos o treino, a progressão e a melhor frequência."],
            ["04", "Acompanhamento", "Corrigimos, monitoramos e ajustamos para manter a evolução."],
          ].map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div><p className="eyebrow"><span /> Plano certo para o seu momento</p><h2>Agora que você conhece o método,<br /><em>escolha como começar.</em></h2></div>
          <Link className="button button-light" href="/planos">Ver planos e valores <ArrowIcon /></Link>
        </div>
      </section>
    </SiteShell>
  );
}
