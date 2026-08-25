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

    // 1. Notifica a equipe no e-mail oficial (contato@tribunadopet.com.br) sobre o novo inscrito
    await resend.emails.send({
      from: "Tribuna do Pet <contato@tribunadopet.com.br>",
      to: ["contato@tribunadopet.com.br"],
      subject: "Novo Inscrito na Newsletter - Tribuna do Pet 🐾",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>🎉 Novo leitor inscrito!</h2>
          <p>O seguinte e-mail acabou de se inscrever na newsletter do <strong>Tribuna do Pet</strong>:</p>
          <p style="font-size: 18px; font-weight: bold; color: #0EA5E9;">${email}</p>
        </div>
      `,
    });

    // 2. Envia e-mail de boas-vindas diretamente para o leitor inscrito
    const data = await resend.emails.send({
      from: "Tribuna do Pet <contato@tribunadopet.com.br>",
      to: [email],
      subject: "Bem-vindo(a) à Newsletter do Tribuna do Pet! 🐾",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #f1f5f9;">
            <h1 style="color: #0284c7; margin: 0;">Tribuna do Pet 🐾</h1>
            <p style="color: #64748b; font-size: 14px; margin-top: 5px;">Informações para quem ama animais</p>
          </div>
          
          <div style="padding: 20px 0; color: #334155; line-height: 1.6;">
            <h2 style="color: #0f172a;">Olá! Que bom ter você conosco! 🎉</h2>
            <p>Sua inscrição na nossa newsletter foi confirmada com sucesso.</p>
            <p>A partir de agora, você receberá em primeira mão as melhores matérias, guias de nutrição, dicas de saúde e utilidade pública para cuidar da saúde do seu melhor amigo.</p>
            
            <div style="background-color: #f0f9ff; border-left: 4px solid #0284c7; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="margin: 0; font-weight: bold; color: #0369a1;">🐾 Dica rápida:</p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #0c4a6e;">Para garantir que nossas mensagens não caiam no spam ou lixo eletrônico, adicione <strong>contato@tribunadopet.com.br</strong> aos seus contatos de e-mail!</p>
            </div>
            
            <p>Um abraço da equipe <strong>Tribuna do Pet</strong>!</p>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #f1f5f9; color: #94a3b8; font-size: 12px;">
            <p>© 2026 Tribuna do Pet. Todos os direitos reservados.</p>
          </div>
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
