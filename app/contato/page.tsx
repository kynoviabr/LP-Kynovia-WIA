import Link from "next/link";

export default function ContatoPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16 text-kyn-text-primary">
      <div className="rounded-2xl border border-kyn-border bg-kyn-background-elevated p-6 shadow-[0_12px_32px_rgba(0,0,0,0.45)] md:p-8">
        <p className="inline-block rounded-full border border-kyn-border-strong bg-kyn-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.05em] text-kyn-text-secondary">
          Contato comercial
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
          Fale com um especialista da Kynovia
        </h1>
        <p className="mt-3 max-w-2xl text-kyn-text-secondary">
          Se você quer entender se a Kynovia faz sentido para a sua operação,
          entre em contato por e-mail ou solicite uma demonstração para o nosso
          time retornar com mais contexto.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-kyn-border-strong bg-kyn-background px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-kyn-text-muted">
              E-mail
            </p>
            <a
              href="mailto:contato@kynovia.com.br"
              className="mt-2 block text-lg font-semibold text-kyn-text-primary transition hover:text-white"
            >
              contato@kynovia.com.br
            </a>
          </div>

          <div className="rounded-2xl border border-kyn-border-strong bg-kyn-background px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-kyn-text-muted">
              WhatsApp
            </p>
            <p className="mt-2 text-kyn-text-secondary">
              Prefere seguir por WhatsApp? Solicite a demonstração e nosso time
              retorna pelo canal mais adequado.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/signup"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] px-6 py-3 text-center text-sm font-semibold leading-[1.15] text-white shadow-[0_18px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl transition hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]"
          >
            Solicitar demonstração
          </Link>
        </div>
      </div>
    </main>
  );
}
