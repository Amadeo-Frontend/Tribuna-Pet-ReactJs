import { Helmet } from "@slorber/react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Tribuna do Pet | Sobre Nós</title>
        <meta
          name="description"
          content="Conheça a história, missão e valores do Tribuna do Pet, o maior portal de informações para tutores de cães e gatos do Brasil."
        />
        <link rel="canonical" href="https://www.tribunadopet.com.br/sobre-nos" />
      </Helmet>

      <main className="container max-w-5xl px-4 py-16 mx-auto">
        {/* HERO */}
        <section className="mb-20 text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl text-primary">
            Sobre o Tribuna do Pet
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-600 md:text-xl">
            Muito além de um portal: somos a ponte entre conhecimento de qualidade e o bem-estar dos seus pets.
          </p>
        </section>

        {/* QUEM SOMOS */}
        <section className="p-8 mb-16 bg-white shadow-lg rounded-2xl md:p-12">
          <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold">
            <i className="fas fa-paw text-primary" /> Nossa trajetória
          </h2>
          <p className="mb-4 leading-relaxed">
            Inspirado nas tradicionais casas de ração de Curitiba, o Tribuna do Pet nasceu para levar o atendimento
            acolhedor e as melhores orientações sobre cães e gatos para todo o Brasil – agora no formato digital.
          </p>
          <p className="leading-relaxed">
            Desde <strong>2025</strong>, publicamos conteúdos que unem ciência veterinária, linguagem simples
            e aquela pitada de carinho que todo tutor merece.
          </p>
        </section>

        {/* MISSÃO – VISÃO – VALORES */}
        <section className="grid gap-6 mb-16 md:grid-cols-3">
          <div className="p-6 border-l-4 bg-primary/10 border-primary rounded-xl">
            <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold">
              <i className="fas fa-bullseye text-primary" /> Missão
            </h3>
            <p>Disseminar informação confiável sobre saúde, nutrição e bem-estar animal.</p>
          </div>

          <div className="p-6 border-l-4 bg-secondary/10 border-secondary rounded-xl">
            <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold">
              <i className="fas fa-eye text-secondary" /> Visão
            </h3>
            <p>Ser o portal de referência nº 1 para quem cuida de cães e gatos na América Latina.</p>
          </div>

          <div className="p-6 bg-yellow-100 border-l-4 border-yellow-400 rounded-xl">
            <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold">
              <i className="text-yellow-500 fas fa-heart" /> Valores
            </h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>Bem-estar animal em primeiro lugar</li>
              <li>Ética e responsabilidade editorial</li>
              <li>Linguagem acessível</li>
              <li>Amor por pets (sempre!)</li>
            </ul>
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="text-center">
          <div className="p-10 text-white bg-gradient-to-r from-primary to-secondary rounded-2xl">
            <h2 className="mb-4 text-3xl font-bold">Junte-se à nossa comunidade</h2>
            <p className="mb-6">
              Assine a newsletter e receba dicas fresquinhas no seu e-mail.
            </p>
            <a
              href="#newsletter"
              className="inline-block px-8 py-3 font-semibold transition bg-white rounded-full shadow text-primary hover:bg-gray-100"
            >
              Quero me inscrever
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
