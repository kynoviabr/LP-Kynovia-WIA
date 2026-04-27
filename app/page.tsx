"use client";

import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const revealUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const sectionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const kanbanColumns = [
  {
    title: "Novos",
    badge: "entrada",
    cards: ["Studio Oral", "Viva Ensino"],
  },
  {
    title: "Qualificados",
    badge: "ia",
    cards: ["Lead movido pela IA"],
  },
  {
    title: "Demo agendada",
    badge: "vendas",
    cards: ["Grupo Prisma"],
  },
];

const resources = [
  {
    eyebrow: "WhatsApp",
    title: "Responde em segundos no canal onde o lead ja esta",
    description:
      "A Kynovia opera direto no WhatsApp. O lead recebe retorno rapido, com mensagem util e contexto desde o primeiro contato.",
  },
  {
    eyebrow: "Qualificacao",
    title: "Faz perguntas progressivas antes de chamar o vendedor",
    description:
      "A IA identifica dor, urgencia, perfil e interesse real. O vendedor entra quando ja existe uma oportunidade com contexto pronto.",
  },
  {
    eyebrow: "Pipeline",
    title: "Atualiza o Kanban conforme a operacao acontece",
    description:
      "Nao e CRM. Nao e chatbot generico. E um agente comercial que tira o trabalho manual do primeiro contato, follow-up e triagem.",
  },
];

const workflow = [
  {
    step: "01",
    title: "O lead chama no WhatsApp e recebe resposta imediata",
    description:
      "A conversa comeca sem fila humana. A Kynovia aborda, entende a demanda e conduz o primeiro contato.",
  },
  {
    step: "02",
    title: "A IA qualifica com perguntas progressivas",
    description:
      "Ela coleta informacoes importantes sem parecer formulario travado e separa curiosos de oportunidades reais.",
  },
  {
    step: "03",
    title: "O vendedor recebe a oportunidade com contexto pronto",
    description:
      "Quando faz sentido escalar, o time entra com historico, motivo do contato e proximo passo ja sugerido.",
  },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-kyn-background text-kyn-text-primary">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(0,184,148,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]"
      />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-8 md:gap-24 md:px-10 md:py-12">
        <motion.section
          initial={false}
          animate="visible"
          variants={heroContainer}
          className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,#09070f_0%,#0a0911_40%,#111420_100%)] px-6 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.62)] md:px-10 md:py-10"
        >
          <motion.div
            aria-hidden
            className="absolute -top-28 right-0 h-72 w-72 rounded-full bg-[rgba(91,33,182,0.18)] blur-[120px]"
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { x: [0, 22, -10, 0], y: [0, -16, 8, 0], scale: [1, 1.08, 0.97, 1] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 18, repeat: Infinity, ease: "easeInOut" }
            }
          />
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[rgba(76,29,149,0.16)] blur-[140px]"
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { x: [0, -18, 14, 0], y: [0, 14, -12, 0], scale: [1, 0.95, 1.04, 1] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
            }
          />

          <div className="relative z-10 flex flex-col gap-7">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/8 bg-black/15 px-4 py-3 backdrop-blur-md">
              <motion.div
                variants={revealUp}
                className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-kyn-text-secondary"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
                Agente comercial com IA para WhatsApp
              </motion.div>
              <motion.div
                variants={revealUp}
                className="hidden items-center gap-3 text-xs text-kyn-text-secondary md:flex"
              >
                <span>Primeiro contato, follow-up e qualificacao</span>
                <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-kyn-text-primary">
                  WhatsApp no MVP
                </span>
              </motion.div>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.92fr)] lg:gap-8">
              <div className="max-w-3xl">
                <motion.h1
                  variants={revealUp}
                  className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl lg:text-[4rem]"
                >
                  Seu SDR no WhatsApp, 24 horas por dia.
                </motion.h1>

                <motion.p
                  variants={revealUp}
                  className="mt-5 max-w-2xl text-[15px] leading-7 text-[color:rgba(250,250,250,0.76)] md:text-lg md:leading-8"
                >
                  A Kynovia responde leads em segundos, qualifica com IA e passa as
                  oportunidades certas para o seu time, sem depender de humano no
                  primeiro contato.
                </motion.p>

                <motion.div
                  variants={revealUp}
                  className="mt-7 grid gap-3 sm:max-w-[38rem] sm:grid-cols-2"
                >
                  <Link
                    href="/signup"
                    className="inline-flex h-14 w-full items-center justify-center rounded-[1.15rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] px-8 text-center text-base font-semibold leading-none tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl transition hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.1))]"
                  >
                    Solicitar demonstracao
                  </Link>
                  <Link
                    href="/contato"
                    className="inline-flex h-14 w-full items-center justify-center rounded-[1.15rem] border border-white/14 bg-[linear-gradient(180deg,rgba(16,18,26,0.9),rgba(16,18,26,0.68))] px-8 text-center text-base font-semibold leading-none tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition hover:border-white/20 hover:bg-[linear-gradient(180deg,rgba(22,24,34,0.94),rgba(22,24,34,0.76))]"
                  >
                    Falar com especialista
                  </Link>
                </motion.div>

                <motion.div
                  variants={revealUp}
                  className="mt-7 grid gap-3 text-sm text-kyn-text-secondary md:grid-cols-3"
                >
                  {[
                    "Nao e CRM nem chatbot generico.",
                    "Opera so no WhatsApp no MVP.",
                    "Entrega contexto pronto para o vendedor.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 leading-6 backdrop-blur-md"
                    >
                      {item}
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                variants={revealUp}
                className="grid gap-3 lg:pt-4"
                animate={
                  shouldReduceMotion
                    ? { y: 0 }
                    : { y: [0, -6, 0, 5, 0], rotate: [0, -0.25, 0, 0.25, 0] }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 11, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="rounded-[1.5rem] border border-white/8 bg-black/18 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                    Produto
                  </p>
                  <p className="mt-3 text-lg leading-8 text-[color:rgba(250,250,250,0.82)]">
                    Prospecta leads, responde no WhatsApp, qualifica com perguntas
                    progressivas e entrega para o vendedor humano so o que vale
                    atencao.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-black/18 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                    O que nao e
                  </p>
                  <p className="mt-3 text-lg leading-8 text-[color:rgba(250,250,250,0.82)]">
                    Nao e CRM. Nao e chatbot generico. Nao substitui o vendedor.
                    Ele elimina o trabalho manual do primeiro contato, do
                    follow-up e da qualificacao.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="demo"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(135deg,rgba(124,58,237,0.15),rgba(7,10,16,0.94)_45%,rgba(9,12,20,0.98))]"
        >
          <div className="grid gap-8 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div variants={revealUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                Pipeline automatico
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                O Kanban se atualiza conforme a IA opera no WhatsApp.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[color:rgba(250,250,250,0.72)]">
                Cada conversa muda o status da oportunidade. O vendedor nao precisa
                descobrir sozinho quem merece atencao agora.
              </p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm leading-7 text-kyn-text-secondary">
                  Para equipes B2B no Brasil que perdem oportunidade por demora no
                  primeiro contato ou por follow-up inconsistente.
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm leading-7 text-kyn-text-secondary">
                  O vendedor humano entra na hora certa, com historico e contexto
                  pronto.
                </div>
              </div>
            </motion.div>

            <motion.div variants={revealUp} className="relative rounded-[1.55rem] border border-white/10 bg-[#0d111a] p-4 md:p-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-kyn-text-muted">
                    Kanban em movimento
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    O lead avanca sozinho conforme responde no WhatsApp
                  </p>
                </div>
                <span className="w-fit rounded-full border border-emerald-400/30 bg-emerald-400/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  Operando agora
                </span>
              </div>

              <div className="relative mt-5 grid gap-3 lg:grid-cols-3">
                {kanbanColumns.map((column) => (
                  <div
                    key={column.title}
                    className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-3"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kyn-text-secondary">
                        {column.title}
                      </p>
                      <span className="rounded-full bg-white/8 px-2 py-1 text-[10px] text-kyn-text-secondary">
                        {column.badge}
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {column.cards.map((card) => (
                        <div
                          key={card}
                          className="rounded-xl border border-white/8 bg-[#161d28] px-3 py-2 text-xs text-white/88"
                        >
                          {card}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <motion.div
                  className="pointer-events-none absolute top-[3.6rem] left-[0.5rem] hidden w-[calc(33.333%-0.9rem)] rounded-xl border border-kyn-primary/30 bg-[linear-gradient(180deg,rgba(124,58,237,0.34),rgba(124,58,237,0.18))] px-3 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(124,58,237,0.24)] lg:block"
                  animate={
                    shouldReduceMotion
                      ? { x: "110%", y: 0, opacity: 1 }
                      : { x: ["0%", "110%", "220%"], y: [0, 8, 0], opacity: [0.92, 1, 0.92] }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  Mariana • pronta para demo
                </motion.div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-kyn-text-muted">
                    Sinais capturados pela IA
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "WhatsApp",
                      "dor mapeada",
                      "urgencia",
                      "decisor",
                      "proximo passo",
                    ].map((signal) => (
                      <span
                        key={signal}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-kyn-text-secondary"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.2rem] border border-kyn-primary/30 bg-kyn-primary/12 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-kyn-text-muted">
                    Proximo passo sugerido
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Passar para o vendedor com contexto pronto.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-kyn-text-secondary">
                    A IA qualificou a conversa, atualizou o pipeline e deixou claro
                    porque essa oportunidade merece atencao humana agora.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="recursos"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <SectionTitle
              title="Feita para operacao comercial, nao para discurso de software"
              description="A Kynovia entra no ponto mais sensivel do processo: responder rapido, qualificar bem e entregar o timing certo para o time humano."
            />
            <div className="rounded-[1.6rem] border border-white/8 bg-black/18 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                O que muda na pratica
              </p>
              <p className="mt-4 text-lg leading-8 text-[color:rgba(250,250,250,0.78)]">
                Em vez de deixar o vendedor preso ao primeiro contato, a Kynovia
                segura a operacao inicial no WhatsApp e sobe a regua da qualificacao.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {resources.map((resource) => (
              <motion.div key={resource.title} variants={revealUp}>
                <Card
                  interactive
                  className="h-full rounded-[1.6rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] backdrop-blur-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                    {resource.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-kyn-text-secondary">
                    {resource.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(135deg,rgba(124,58,237,0.15),rgba(7,10,16,0.9)_45%,rgba(9,12,20,0.98))]"
        >
          <div className="grid gap-8 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={revealUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                Fluxo guiado
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Primeiro contato automatico. Escalada humana na hora certa.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[color:rgba(250,250,250,0.72)]">
                A promessa e simples: o lead nao fica esperando e o vendedor nao
                perde tempo com oportunidade fria.
              </p>
            </motion.div>

            <motion.div variants={revealUp} className="grid gap-4">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.5rem] border border-white/10 bg-black/22 px-5 py-5 backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-kyn-primary/40 bg-kyn-primary/16 text-sm font-semibold text-kyn-text-primary">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-kyn-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={revealUp}>
            <SectionTitle
              title="Clareza para o time. Confianca para a gestao."
              description="Sem superlativo vazio. Sem promessa de software que faz tudo. A Kynovia resolve um trecho especifico e caro da operacao comercial."
            />
          </motion.div>

          <motion.div variants={revealUp} className="grid gap-5 sm:grid-cols-2">
            <Card className="rounded-[1.6rem] border-white/10 bg-black/18">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                Ganho imediato
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Menos atraso no primeiro contato
              </p>
              <p className="mt-4 text-sm leading-7 text-kyn-text-secondary">
                O lead para de esfriar esperando retorno enquanto o time esta preso
                em tarefas repetitivas.
              </p>
            </Card>
            <Card className="rounded-[1.6rem] border-white/10 bg-black/18">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                Ganho estrutural
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                Mais consistencia em cada etapa do funil
              </p>
              <p className="mt-4 text-sm leading-7 text-kyn-text-secondary">
                O time comercial recebe menos ruido e mais oportunidade com motivo,
                contexto e proximo passo claros.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(16,16,24,0.92),rgba(124,58,237,0.12))] px-6 py-8 md:px-8 md:py-10"
        >
          <motion.div variants={revealUp} className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                Proximo passo
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                Coloque um SDR com IA no seu WhatsApp.
              </h2>
              <p className="mt-4 text-base leading-8 text-[color:rgba(250,250,250,0.72)]">
                Se o seu time perde oportunidade por demora ou follow-up irregular,
                a Kynovia entra para segurar essa etapa e passar o que importa para
                vendas.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] px-6 py-3 text-center text-sm font-semibold leading-[1.15] text-white shadow-[0_18px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl transition hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]"
              >
                Solicitar demonstracao
              </Link>
              <Link
                href="/contato"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(16,18,26,0.86),rgba(16,18,26,0.66))] px-6 py-3 text-center text-sm font-semibold leading-[1.15] text-white shadow-[0_18px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition hover:border-white/18 hover:bg-[linear-gradient(180deg,rgba(22,24,34,0.92),rgba(22,24,34,0.72))]"
              >
                Falar com especialista
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="relative border-t border-kyn-border bg-black/18 backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-sm md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
              Kynovia
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-kyn-text-secondary">
              Agente comercial com IA para equipes B2B que operam no WhatsApp e
              precisam responder rapido, qualificar melhor e entregar contexto para vendas.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-kyn-text-primary">Produto</h4>
            <div className="space-y-2 text-kyn-text-secondary">
              <Link href="/#recursos" className="block transition hover:text-white">
                Recursos
              </Link>
              <Link href="/#demo" className="block transition hover:text-white">
                Pipeline automatico
              </Link>
              <Link href="/signup" className="block transition hover:text-white">
                Solicitar demonstracao
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-kyn-text-primary">Empresa</h4>
            <div className="space-y-2 text-kyn-text-secondary">
              <Link href="/contato" className="block transition hover:text-white">
                Contato
              </Link>
              <Link href="/termos" className="block transition hover:text-white">
                Termos
              </Link>
              <Link href="/privacidade" className="block transition hover:text-white">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-kyn-border px-6 py-4 text-center text-xs text-kyn-text-muted md:px-10">
          Kynovia - agente comercial com IA para operacoes B2B no WhatsApp.
        </div>
      </footer>
    </div>
  );
}
