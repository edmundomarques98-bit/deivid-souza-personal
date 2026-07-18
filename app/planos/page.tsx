import type { Metadata } from "next";
import { ArrowIcon, CheckIcon } from "../components/Icons";
import { SiteShell } from "../components/SiteShell";
import { whatsappLink } from "../lib/contact";

export const metadata: Metadata = {
  title: "Planos e valores",
  description: "Planos de acompanhamento personalizado com Deivid Souza.",
};

const plans = [
  {
    name: "Aula avulsa",
    descriptor: "Para conhecer o atendimento ou encaixar uma sessão pontual.",
    price: "35",
    suffix: "por aula",
    featured: false,
    items: ["Treino personalizado", "Correção técnica", "Orientação durante a sessão"],
  },
  {
    name: "3x por semana",
    descriptor: "Uma rotina consistente para evoluir com equilíbrio.",
    price: "360",
    suffix: "por mês",
    featured: true,
    badge: "MAIS ESCOLHIDO",
    items: ["12 aulas mensais", "Planejamento individual", "Aplicativo de treino", "Suporte contínuo", "Avaliações periódicas"],
  },
  {
    name: "5x por semana",
    descriptor: "Maior frequência e acompanhamento para uma rotina intensa.",
    price: "600",
    suffix: "por mês",
    featured: false,
    items: ["20 aulas mensais", "Planejamento individual", "Aplicativo de treino", "Suporte contínuo", "Avaliações periódicas"],
  },
];

export default function PlanosPage() {
  return (
    <SiteShell active="planos">
      <section className="page-hero pricing-hero">
        <div className="container page-hero-grid">
          <div><p className="eyebrow"><span /> Investimento na sua evolução</p><h1>Escolha o ritmo. O plano será sempre <em>seu.</em></h1></div>
          <p>Opções para diferentes rotinas, com o mesmo compromisso: planejamento individual e acompanhamento de verdade.</p>
        </div>
      </section>

      <section className="section container pricing-section">
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              {plan.badge && <span className="price-badge">{plan.badge}</span>}
              <p className="price-name">{plan.name}</p>
              <p className="price-description">{plan.descriptor}</p>
              <div className="price"><sup>R$</sup><strong>{plan.price}</strong><div><span>,00</span><small>{plan.suffix}</small></div></div>
              <div className="price-divider" />
              <strong className="included-title">O que você recebe</strong>
              <ul>{plan.items.map(item => <li key={item}><CheckIcon /> {item}</li>)}</ul>
              <a className={`button ${plan.featured ? "button-primary" : "button-dark"}`} href={whatsappLink(`Olá, Deivid! Vi o plano ${plan.name} no site e quero saber mais.`)} target="_blank" rel="noreferrer">Quero este plano <ArrowIcon /></a>
            </article>
          ))}
        </div>

        <article className="remote-plan">
          <div><p className="eyebrow dark"><span /> Atendimento online com direção</p><h2>Consultoria de treino — mensal</h2><p>Para quem precisa de direcionamento técnico, organização e acompanhamento mesmo treinando por conta própria.</p></div>
          <div className="remote-price"><span>Plano mensal</span><strong><small>R$</small>100<sup>,00</sup></strong><p>por mês</p></div>
          <ul><li><CheckIcon /> Treino personalizado com acesso ao aplicativo</li><li><CheckIcon /> Acompanhamento remoto da evolução</li><li><CheckIcon /> Suporte para ajustes e execução</li></ul>
          <a className="button button-dark" href={whatsappLink("Olá, Deivid! Vi o plano mensal de consultoria de treino no site e quero saber mais.")} target="_blank" rel="noreferrer">Solicitar plano mensal <ArrowIcon /></a>
        </article>

        <article className="remote-plan">
          <div><p className="eyebrow dark"><span /> Melhor período para consolidar a rotina</p><h2>Consultoria de treino — trimestral</h2><p>Três meses de planejamento e acompanhamento remoto para evoluir com mais consistência.</p></div>
          <div className="remote-price"><span>Plano trimestral</span><strong><small>R$</small>250<sup>,00</sup></strong><p>por 3 meses</p></div>
          <ul><li><CheckIcon /> Treino personalizado com acesso ao aplicativo</li><li><CheckIcon /> Acompanhamento remoto da evolução</li><li><CheckIcon /> Suporte para ajustes e execução</li></ul>
          <a className="button button-dark" href={whatsappLink("Olá, Deivid! Vi o plano trimestral de consultoria de treino por R$ 250 no site e quero saber mais.")} target="_blank" rel="noreferrer">Solicitar plano trimestral <ArrowIcon /></a>
        </article>

        <div className="pricing-notes">
          <p><strong>Importante:</strong> disponibilidade de horários sujeita à agenda. Frequência, duração do plano e melhor formato são confirmados na conversa inicial.</p>
          <p>Os resultados dependem de fatores individuais, frequência, hábitos e adesão ao planejamento.</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div><p className="eyebrow"><span /> Ainda em dúvida?</p><h2>Vamos encontrar o melhor ponto de partida <em>juntos.</em></h2></div>
          <a className="button button-light" href={whatsappLink("Olá, Deivid! Vi seu site e quero conversar sobre meu objetivo.")} target="_blank" rel="noreferrer">Conversar sobre meu objetivo <ArrowIcon /></a>
        </div>
      </section>
    </SiteShell>
  );
}
