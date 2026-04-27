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
    cards: ["Clínica Master", "Viva Ensino"],
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
    title: "Responde em segundos no canal onde o lead já está",
    description:
      "A Kynovia opera direto no WhatsApp. O lead recebe retorno rápido, com mensagem útil e contexto desde o primeiro contato.",
  },
  {
    eyebrow: "Qualificação",
    title: "Faz perguntas progressivas antes de chamar o vendedor",
    description:
      "A IA identifica dor, urgência, perfil e interesse real. O vendedor entra quando já existe uma oportunidade com contexto pronto.",
  },
  {
    eyebrow: "Pipeline",
    title: "Atualiza o Kanban conforme a operação acontece",
    description:
      "Não é CRM. Não é chatbot genérico. É um agente comercial que tira o trabalho manual do primeiro contato, follow-up e triagem.",
  },
];

const workflow = [
  {
    step: "01",
    title: "O lead chama no WhatsApp e recebe resposta imediata",
    description:
      "A conversa começa na hora. A Kynovia responde sem fila humana, entende a demanda e conduz o primeiro contato com contexto.",
  },
  {
    step: "02",
    title: "A IA qualifica com perguntas progressivas",
    description:
      "Ela faz as perguntas certas ao longo da conversa, identifica perfil, urgência e interesse real, e separa curiosos de oportunidades concretas.",
  },
  {
    step: "03",
    title: "A IA agenda uma reunião com o lead diretamente no Google Calendar",
    description:
      "Quando faz sentido avançar, a IA consulta sua agenda, confirma o melhor horário com o lead e deixa a reunião agendada de forma automática.",
  },
  {
    step: "04",
    title: "O vendedor recebe a oportunidade com contexto pronto",
    description:
      "O time comercial entra no momento certo, com histórico da conversa, motivo do contato e próximo passo já organizados.",
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
                <span>Primeiro contato, qualificação e follow-up</span>
              </motion.div>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.92fr)] lg:gap-8">
              <div className="max-w-3xl">
                <motion.h1
                  variants={revealUp}
                  className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl lg:text-[4rem]"
                >
                  Seu SDR com IA no WhatsApp, 24 horas por dia.
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
                    Solicitar demonstração
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
                    "Não é CRM nem chatbot genérico.",
                    "Opera só no WhatsApp.",
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
                    progressivas e entrega para o vendedor humano só o que merece
                    atenção.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-black/18 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                    O que não é
                  </p>
                  <p className="mt-3 text-lg leading-8 text-[color:rgba(250,250,250,0.82)]">
                    Não é CRM. Não é chatbot genérico. Não substitui o vendedor.
                    Ele elimina o trabalho manual do primeiro contato, do
                    follow-up e da qualificação.
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
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <motion.div variants={revealUp} className="p-6 md:p-8 lg:p-10">
              <SectionTitle
                title="A IA conversa, qualifica e move a oportunidade no pipeline"
                description="O Kanban acompanha a operação em tempo real, sem depender de atualização manual. À medida que a conversa avança, a oportunidade muda de etapa com contexto pronto para o time comercial."
              />

              <div className="mt-6 space-y-4 text-sm leading-7 text-kyn-text-secondary">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
                  Lead: &ldquo;Quero entender se funciona para a minha equipe comercial.&rdquo;
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-[color:rgba(231,255,245,0.88)] backdrop-blur-md">
                  IA: &ldquo;Claro. Hoje vocês recebem os leads por WhatsApp e fazem o
                  primeiro contato com rapidez?&rdquo;
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
                  Ela identifica perfil, urgência, interesse e momento da compra.
                  Se fizer sentido, agenda a próxima etapa e entrega o histórico.
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={revealUp}
              className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(5,6,12,0.82),rgba(5,6,12,0.98))] p-5 md:p-8 lg:border-l lg:border-t-0 lg:p-10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                    Kanban automático
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Pipeline atualizado pela operação da IA
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-kyn-text-secondary">
                  ao vivo
                </div>
              </div>

              <div className="relative mt-6">
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-[4.25rem] z-20 hidden w-[calc((100%-2rem)/3)] md:block"
                  animate={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          x: ["0%", "0%", "103%", "206%", "206%"],
                          y: [0, 0, -6, 0, 0],
                          opacity: [0, 1, 1, 1, 0],
                          scale: [0.98, 1, 1, 1, 0.98],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 5.8,
                          repeat: Infinity,
                          ease: [0.16, 1, 0.3, 1],
                          times: [0, 0.16, 0.5, 0.82, 1],
                          repeatDelay: 0.8,
                        }
                  }
                >
                  <div className="rounded-[1.25rem] border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(31,41,55,0.92),rgba(13,18,29,0.82))] p-4 shadow-[0_22px_46px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-white">Clínica Master</p>
                        <p className="mt-1 text-sm text-kyn-text-secondary">
                          Qualificado pela IA e encaminhado para vendas
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] font-medium text-emerald-200">
                        em movimento
                      </span>
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-3">
                  {kanbanColumns.map((column, columnIndex) => (
                    <Card
                      key={column.title}
                      className="relative min-h-[15rem] rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-4 shadow-none backdrop-blur-xl"
                    >
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-kyn-text-muted">
                        <span>{column.title}</span>
                        <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-white/70">
                          {column.badge}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        {column.cards.map((card, cardIndex) => {
                          const animated = columnIndex === 1 && cardIndex === 0;
                          const motionProps = animated
                            ? {
                                animate: shouldReduceMotion
                                  ? { y: 0, opacity: 1 }
                                  : {
                                      y: [12, 0, 0, 0],
                                      opacity: [0.45, 0.7, 0.45, 0.45],
                                      scale: [0.985, 1, 0.985, 0.985],
                                    },
                                transition: shouldReduceMotion
                                  ? { duration: 0 }
                                  : {
                                      duration: 5.8,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      repeatDelay: 0.8,
                                    },
                              }
                            : {};

                          return (
                            <motion.div
                              key={card}
                              {...motionProps}
                              className="rounded-[1.25rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.24)]"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div>
                                  <p className="font-medium text-white">{card}</p>
                                  <p className="mt-1 text-sm text-kyn-text-secondary">
                                    Perfil compatível com operação B2B
                                  </p>
                                </div>
                                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] font-medium text-emerald-200">
                                  pronto
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="grid gap-5 lg:grid-cols-3"
        >
          {resources.map((resource) => (
            <motion.div key={resource.title} variants={revealUp}>
              <Card className="h-full rounded-[1.7rem] border border-white/8 bg-white/[0.04] p-6 shadow-none backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                  {resource.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                  {resource.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-kyn-text-secondary">
                  {resource.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="grid gap-8 rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-8 md:px-8 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <motion.div variants={revealUp}>
            <SectionTitle
              eyebrow="Fluxo"
              title="O vendedor entra na hora certa"
              description="A Kynovia responde, qualifica, conduz o follow-up inicial e, quando faz sentido, agenda a próxima reunião automaticamente. O time humano entra com contexto pronto e o próximo passo já organizado."
            />
          </motion.div>

          <motion.div variants={revealUp} className="space-y-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.5rem] border border-white/8 bg-black/20 p-5 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-kyn-text-muted">
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-kyn-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="rounded-[1.9rem] border border-white/8 bg-[linear-gradient(135deg,rgba(124,58,237,0.18),rgba(8,9,15,0.92)_55%,rgba(8,9,15,0.98))] px-6 py-8 md:px-8 md:py-10"
        >
          <motion.div variants={revealUp} className="max-w-3xl">
            <SectionTitle
              eyebrow="Para quem"
              title="Equipes que perdem oportunidade por demora ou falta de consistência"
              description="Se o lead entra no WhatsApp e o time não consegue responder com rapidez, qualificar bem e sustentar o follow-up, a operação perde consistência. A Kynovia entra exatamente nesse ponto."
            />
          </motion.div>

          <motion.div
            variants={revealUp}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {[
              "Recebem leads e demoram para responder.",
              "Dependem de vendedor para fazer triagem inicial.",
              "Perdem consistência no follow-up comercial.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-5 text-sm leading-7 text-kyn-text-secondary backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionContainer}
          className="rounded-[1.9rem] border border-white/8 bg-white/[0.03] px-6 py-8 md:px-8 md:py-10"
        >
          <motion.div variants={revealUp} className="max-w-3xl">
            <SectionTitle
              eyebrow="Próximo passo"
              title="Veja como a Kynovia opera no seu fluxo comercial"
              description="Se você quer entender como isso funciona na prática, solicite uma demonstração e converse com o nosso time."
            />
          </motion.div>

          <motion.div
            variants={revealUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/signup"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] px-6 py-3 text-center text-sm font-semibold leading-[1.15] text-white shadow-[0_18px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl transition hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]"
            >
              Solicitar demonstração
            </Link>
            <Link
              href="/contato"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-6 py-3 text-center text-sm font-semibold leading-[1.15] text-white transition hover:border-white/16 hover:bg-black/30"
            >
              Falar com especialista
            </Link>
          </motion.div>
        </motion.section>

        <footer className="flex flex-col gap-5 border-t border-white/8 py-8 text-sm text-kyn-text-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-kyn-text-secondary">Kynovia</p>
            <p className="mt-1">Agente comercial com IA para operação via WhatsApp.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacidade" className="transition hover:text-white">
              Política de privacidade
            </Link>
            <Link href="/termos" className="transition hover:text-white">
              Termos de uso
            </Link>
            <Link href="/contato" className="transition hover:text-white">
              Contato
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
