"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  nome: string;
  email: string;
  whatsapp: string;
  segmento: string;
  equipe: string;
};

const initialState: FormState = {
  nome: "",
  email: "",
  whatsapp: "",
  segmento: "",
  equipe: "",
};

export default function SignupPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(() => {
    const hasRequired =
      form.nome.trim() &&
      form.email.trim() &&
      form.whatsapp.trim() &&
      form.segmento.trim() &&
      form.equipe.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const phoneOk = form.whatsapp.replace(/\D/g, "").length >= 10;
    return Boolean(hasRequired && emailOk && phoneOk);
  }, [form]);

  const onChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setError("");
      setSuccess("");
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!isValid) {
      setError("Preencha todos os campos com dados validos.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setError(data.error ?? "Nao foi possivel enviar. Tente novamente.");
        return;
      }

      setSuccess("Lead enviado com sucesso. Nosso time vai entrar em contato.");
      setForm(initialState);
    } catch {
      setError("Erro de conexao ao enviar. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-14 md:px-10">
      <div className="rounded-2xl border border-kyn-border bg-kyn-background-elevated p-6 shadow-[0_12px_32px_rgba(0,0,0,0.45)] md:p-8">
        <p className="inline-block rounded-full border border-kyn-border-strong bg-kyn-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.05em] text-kyn-text-secondary">
          Comecar trial
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
          Fale com a Kynovia e ative seu agente de IA
        </h1>
        <p className="mt-3 text-kyn-text-secondary">
          Preencha o formulario abaixo para receber uma demonstracao guiada e
          iniciar seu onboarding.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm">
            <span className="text-kyn-text-secondary">Nome completo</span>
            <input
              value={form.nome}
              onChange={onChange("nome")}
              className="h-11 rounded-md border border-kyn-border-strong bg-kyn-background px-3 text-kyn-text-primary outline-none transition focus:border-kyn-primary"
              placeholder="Seu nome"
              autoComplete="name"
            />
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-kyn-text-secondary">E-mail</span>
            <input
              type="email"
              value={form.email}
              onChange={onChange("email")}
              className="h-11 rounded-md border border-kyn-border-strong bg-kyn-background px-3 text-kyn-text-primary outline-none transition focus:border-kyn-primary"
              placeholder="voce@empresa.com"
              autoComplete="email"
            />
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-kyn-text-secondary">WhatsApp</span>
            <input
              value={form.whatsapp}
              onChange={onChange("whatsapp")}
              className="h-11 rounded-md border border-kyn-border-strong bg-kyn-background px-3 text-kyn-text-primary outline-none transition focus:border-kyn-primary"
              placeholder="(11) 99999-9999"
              autoComplete="tel"
            />
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-kyn-text-secondary">Segmento</span>
            <select
              value={form.segmento}
              onChange={onChange("segmento")}
              className="h-11 rounded-md border border-kyn-border-strong bg-kyn-background px-3 text-kyn-text-primary outline-none transition focus:border-kyn-primary"
            >
              <option value="">Selecione</option>
              <option value="franquias">Franquias</option>
              <option value="clinicas">Clinicas</option>
              <option value="escolas">Escolas</option>
              <option value="imobiliarias">Imobiliarias</option>
              <option value="consultorias">Consultorias</option>
              <option value="outro">Outro</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-kyn-text-secondary">Tamanho da equipe</span>
            <select
              value={form.equipe}
              onChange={onChange("equipe")}
              className="h-11 rounded-md border border-kyn-border-strong bg-kyn-background px-3 text-kyn-text-primary outline-none transition focus:border-kyn-primary"
            >
              <option value="">Selecione</option>
              <option value="1-5">1-5 pessoas</option>
              <option value="6-20">6-20 pessoas</option>
              <option value="21-50">21-50 pessoas</option>
              <option value="51+">51+ pessoas</option>
            </select>
          </label>

          {error ? (
            <p className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          {success ? (
            <p className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
              {success}
            </p>
          ) : null}

          <div className="pt-2">
            <Button
              as="button"
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Solicitar demonstracao"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
