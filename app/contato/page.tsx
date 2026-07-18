import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon, PhoneIcon } from "../components/Icons";
import { SiteShell } from "../components/SiteShell";
import { whatsappLink } from "../lib/contact";

export const metadata: Metadata = {
  title: "Contato",
  description: "Dê o primeiro passo para iniciar seu acompanhamento personalizado.",
};

const directWhatsappLink = whatsappLink("Olá, Deivid! Vi seu site e quero saber qual acompanhamento combina melhor com meu objetivo.");

export default function ContatoPage() {
  return (
    <SiteShell active="contato">
      <section className="contact-hero">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow"><span /> Vamos conversar</p>
            <h1>Seu próximo passo não precisa ser perfeito. Só precisa ser <em>seu.</em></h1>
            <p>Conte um pouco sobre seu objetivo e sua rotina. A partir disso, você recebe uma orientação inicial sobre o formato de acompanhamento mais adequado.</p>
            <div className="contact-benefits">
              <span><CheckIcon /> Conversa sem compromisso</span>
              <span><CheckIcon /> Orientação individual</span>
              <span><CheckIcon /> Plano compatível com sua rotina</span>
            </div>
          </div>
          <div className="contact-card">
            <PhoneIcon />
            <p className="eyebrow dark"><span /> Atendimento direto</p>
            <h2>Fale com Deivid</h2>
            <p>Use a mensagem pronta abaixo para iniciar uma conversa diretamente com Deivid pelo WhatsApp.</p>
            <div className="message-preview">“Olá, Deivid! Vi seu site e quero saber qual acompanhamento combina melhor com meu objetivo.”</div>
            <a className="button button-primary full-button" href={directWhatsappLink} target="_blank" rel="noreferrer">Abrir no WhatsApp <ArrowIcon /></a>
            <small>Você será direcionado para o atendimento no número profissional informado.</small>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading centered faq-heading">
          <p className="eyebrow dark"><span /> Dúvidas frequentes</p>
          <h2>O que você pode querer saber <em>antes de começar.</em></h2>
        </div>
        <div className="faq-list">
          <details open><summary>Preciso já estar em forma para começar?<span>+</span></summary><p>Não. O planejamento parte do seu nível atual. O objetivo é criar uma evolução possível e segura, sem exigir que você “se prepare” antes de começar.</p></details>
          <details><summary>O treino é igual para todos os alunos?<span>+</span></summary><p>Não. Objetivo, rotina, experiência, condição física e limitações são considerados na construção e nos ajustes do treino.</p></details>
          <details><summary>Como funcionam as avaliações?<span>+</span></summary><p>Medidas e fotos podem ser registradas periodicamente para acompanhar mudanças e orientar ajustes. A forma e a frequência são alinhadas com o aluno.</p></details>
          <details><summary>Posso contratar apenas o plano de treino?<span>+</span></summary><p>Sim. Existe a opção de planejamento mensal no aplicativo para quem já treina por conta própria e quer uma direção individualizada.</p></details>
          <details><summary>Em quanto tempo verei resultados?<span>+</span></summary><p>O tempo varia conforme o ponto de partida, a frequência, os hábitos e a adesão ao planejamento. O foco é construir progresso sustentável, sem promessas irreais.</p></details>
        </div>
      </section>

      <section className="section section-soft start-map">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow dark"><span /> Três passos</p><h2>Simples para começar.<br /><em>Completo para evoluir.</em></h2></div>
            <p>Não deixe a dúvida sobre o plano perfeito virar mais um motivo para adiar. A escolha pode ser feita junto com você.</p>
          </div>
          <div className="start-steps">
            <article><span>01</span><h3>Envie uma mensagem</h3><p>Conte seu objetivo e os horários disponíveis.</p></article>
            <article><span>02</span><h3>Receba uma orientação</h3><p>Entenda o formato mais compatível com sua rotina.</p></article>
            <article><span>03</span><h3>Inicie seu plano</h3><p>Faça a avaliação e comece com direção.</p></article>
          </div>
          <div className="center-action"><a className="button button-dark" href={directWhatsappLink} target="_blank" rel="noreferrer">Quero dar o primeiro passo <ArrowIcon /></a><Link className="text-link dark-link" href="/planos">Rever planos e valores</Link></div>
        </div>
      </section>
    </SiteShell>
  );
}
