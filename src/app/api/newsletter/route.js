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
    const unsubscribeUrl = `mailto:contato@tribunadopet.com.br?subject=Cancelar%20Inscrição%20Newsletter&body=Desejo%20cancelar%20a%20inscrição%20do%20email:%20${encodeURIComponent(email)}`;

    const data = await resend.emails.send({
      from: "Tribuna do Pet <contato@tribunadopet.com.br>",
      to: [email],
      subject: "Bem-vindo(a) à Newsletter do Tribuna do Pet! 🐾",
      headers: {
        "List-Unsubscribe": `<${unsubscribeUrl}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tribuna do Pet</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f8fafc; padding: 20px 10px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" style="max-width: 580px; background-color:#ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);" cellspacing="0" cellpadding="0" border="0">
                  
                  <!-- Topo / Header com Logo Oficial da Marca -->
                  <tr>
                    <td style="background-color: #ffffff; padding: 25px 20px; text-align: center; border-bottom: 1px solid #f1f5f9;">
                      <a href="https://www.tribunadopet.com.br" target="_blank" style="text-decoration: none; display: inline-block;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                          <tr>
                            <td style="vertical-align: middle; padding-right: 12px;">
                              <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #2563eb, #38bdf8); border-radius: 12px; text-align: center; line-height: 44px; color: #ffffff; font-size: 20px; font-weight: bold; box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);">
                                🐾
                              </div>
                            </td>
                            <td style="vertical-align: middle; text-align: left;">
                              <div style="font-size: 24px; font-weight: 900; color: #1e3a8a; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.1; letter-spacing: -0.5px;">
                                Tribuna do <span style="color: #ef4444;">Pet</span>
                              </div>
                              <div style="font-size: 10px; font-weight: 800; color: #0284c7; text-transform: uppercase; letter-spacing: 1px; margin-top: 3px;">
                                INFORMAÇÕES PARA QUEM AMA ANIMAIS
                              </div>
                            </td>
                          </tr>
                        </table>
                      </a>
                    </td>
                  </tr>

                  <!-- Corpo -->
                  <tr>
                    <td style="padding: 30px 25px; color: #334155; font-size: 15px; line-height: 1.6;">
                      <h2 style="color: #0f172a; font-size: 20px; margin-top: 0; margin-bottom: 15px; font-weight: 700;">Olá! Que bom ter você conosco! 🎉</h2>
                      
                      <p style="margin-bottom: 15px; color: #475569;">Sua inscrição na nossa newsletter foi confirmada com sucesso.</p>
                      
                      <p style="margin-bottom: 20px; color: #475569;">A partir de agora, você receberá em primeira mão as melhores matérias, guias de nutrição, dicas de saúde e alertas de utilidade pública para cuidar da saúde do seu melhor amigo.</p>

                      <!-- Caixa de Dica Rápida -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 25px 0;">
                        <tr>
                          <td style="background-color: #f0f9ff; border-left: 4px solid #0284c7; padding: 16px; border-radius: 6px;">
                            <p style="margin: 0; font-weight: 700; color: #0369a1; font-size: 14px;">🐾 Dica de Entrega:</p>
                            <p style="margin: 6px 0 0 0; font-size: 13px; color: #0c4a6e; line-height: 1.5;">Para garantir que nossos e-mails não caiam na caixa de spam ou lixo eletrônico, salve <strong>contato@tribunadopet.com.br</strong> na sua lista de contatos!</p>
                          </td>
                        </tr>
                      </table>

                      <p style="margin-top: 20px; margin-bottom: 0; color: #334155; font-weight: 600;">Um abraço,<br><span style="color: #0284c7;">Equipe Tribuna do Pet</span></p>
                    </td>
                  </tr>

                  <!-- Rodapé e Unsubscribe -->
                  <tr>
                    <td style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
                      <p style="margin: 0 0 8px 0;">© 2026 Tribuna do Pet. Todos os direitos reservados.</p>
                      <p style="margin: 0; font-size: 11px;">
                        Você recebeu este e-mail porque se cadastrou em nosso site. <br>
                        <a href="${unsubscribeUrl}" style="color: #94a3b8; text-decoration: underline; font-size: 11px;">Cancelar inscrição</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
