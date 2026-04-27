import { NextResponse } from "next/server";

type LeadPayload = {
  nome?: string;
  email?: string;
  whatsapp?: string;
  segmento?: string;
  equipe?: string;
};

const validSegments = [
  "franquias",
  "clinicas",
  "escolas",
  "imobiliarias",
  "consultorias",
  "outro",
] as const;

const validTeams = ["1-5", "6-20", "21-50", "51+"] as const;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const nome = (body.nome ?? "").trim();
    const email = (body.email ?? "").trim().toLowerCase();
    const whatsapp = (body.whatsapp ?? "").trim();
    const segmento = (body.segmento ?? "").trim().toLowerCase();
    const equipe = (body.equipe ?? "").trim();

    if (!nome || nome.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Nome inválido." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "E-mail inválido." },
        { status: 400 }
      );
    }

    if (!whatsapp || whatsapp.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { ok: false, error: "WhatsApp inválido." },
        { status: 400 }
      );
    }

    if (!validSegments.includes(segmento as (typeof validSegments)[number])) {
      return NextResponse.json(
        { ok: false, error: "Segmento inválido." },
        { status: 400 }
      );
    }

    if (!validTeams.includes(equipe as (typeof validTeams)[number])) {
      return NextResponse.json(
        { ok: false, error: "Tamanho da equipe inválido." },
        { status: 400 }
      );
    }

    console.log("Novo lead Kynovia:", {
      nome,
      email,
      whatsapp,
      segmento,
      equipe,
      origem: "landing-signup",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Não foi possível processar o lead." },
      { status: 500 }
    );
  }
}
