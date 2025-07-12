import { Helmet } from "@slorber/react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Tribuna do Pet | Política de Privacidade</title>
        <meta
          name="description"
          content="Entenda como o Tribuna do Pet coleta, usa e protege os seus dados pessoais conforme a LGPD."
        />
        <link
          rel="canonical"
          href="https://www.tribunadopet.com.br/politica-de-privacidade"
        />
      </Helmet>

      <main className="container max-w-4xl px-4 py-16 mx-auto">
        <h1 className="mb-12 text-3xl font-extrabold text-center md:text-4xl text-primary">
          Política de Privacidade
        </h1>

        {/* Exemplo de seção (repita/adapte conforme necessário) */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">1. Introdução</h2>
          <p>
            Esta Política descreve como o <strong>Tribuna do Pet</strong> (“nós”)
            coleta, usa, armazena e protege as informações pessoais dos usuários
            (“você”), em conformidade com a LGPD (Lei 13.709/2018).
          </p>
        </section>

        {/* …adicione as seções 2-10 iguais ao texto HTML que enviei antes… */}
      </main>
    </>
  );
}
