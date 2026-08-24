import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    // Envia o e-mail de confirmação/notificação via Resend usando o domínio verificado
    const data = await resend.emails.send({
      from: "Tribuna do Pet <contato@tribunadopet.com.br>",
      to: ["amadeuferreira2016.1@gmail.com"], // Receba o aviso do novo inscrito
      subject: "Novo Inscrito na Newsletter - Tribuna do Pet 🐾",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>🎉 Novo leitor inscrito!</h2>
          <p>O seguinte e-mail acabou de se inscrever na newsletter do <strong>Tribuna do Pet</strong>:</p>
          <p style="font-size: 18px; font-weight: bold; color: #0EA5E9;">${email}</p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Erro no Resend:", error);
    return Response.json(
      { error: error.message || "Erro ao processar inscrição." },
      { status: 500 }
    );
  }
}
