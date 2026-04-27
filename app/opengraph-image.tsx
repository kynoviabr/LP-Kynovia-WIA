import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #07060c 0%, #0a0911 42%, #121624 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 18%, rgba(124,58,237,0.34), transparent 30%), radial-gradient(circle at 82% 14%, rgba(59,130,246,0.16), transparent 22%), radial-gradient(circle at 76% 88%, rgba(16,185,129,0.12), transparent 20%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -120,
            right: -40,
            width: 360,
            height: 360,
            borderRadius: 999,
            background: "rgba(91,33,182,0.28)",
            filter: "blur(120px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -60,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(76,29,149,0.24)",
            filter: "blur(140px)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "58px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(226,232,240,0.78)",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#86efac",
                boxShadow: "0 0 18px rgba(74, 222, 128, 0.75)",
              }}
            />
            Kynovia
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 690,
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: 20,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(8,10,16,0.44)",
                  padding: "12px 18px",
                  fontSize: 22,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                Agente comercial com IA para WhatsApp
              </div>

              <div
                style={{
                  fontSize: 72,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
              >
                Seu SDR com IA no WhatsApp, 24 horas por dia.
              </div>

              <div
                style={{
                  marginTop: 24,
                  fontSize: 28,
                  lineHeight: 1.45,
                  color: "rgba(226,232,240,0.82)",
                  maxWidth: 660,
                }}
              >
                Responde em segundos, qualifica com IA e entrega as oportunidades
                certas para o time comercial.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 290,
                gap: 14,
              }}
            >
              {[
                "Primeiro contato",
                "Qualificação com IA",
                "Follow-up comercial",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 28,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                    padding: "18px 20px",
                    fontSize: 24,
                    color: "#ffffff",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
