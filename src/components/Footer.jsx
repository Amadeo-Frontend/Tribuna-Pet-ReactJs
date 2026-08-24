import NewsletterForm from "./Newsletter/NewsletterForm";
import Link from "next/link";
import PawPrintTrail from "./PawPrintTrail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="relative mt-20 text-white bg-slate-900 border-t border-slate-800">
      {/* Faixa animada de patinhas de cachorro coloridas caminhando */}
      <div className="w-full bg-slate-950/80 border-b border-slate-800/80 py-2">
        <PawPrintTrail />
      </div>

      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Coluna 1: Branding & Sobre */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-11 h-11 mr-3 text-white rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 shadow-md shadow-blue-500/20">
                <FontAwesomeIcon icon={faPaw} className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-white">Tribuna do Pet</h3>
                <span className="text-[11px] uppercase tracking-wider text-sky-400 font-bold block">Portal de Informações</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              O melhor site com notícias, dicas de saúde, nutrição e bem-estar para donos de cães e gatos de todo o Brasil.
            </p>
            <div className="pt-1 flex items-center text-xs text-slate-400 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Conteúdo verificado por especialistas
            </div>
          </div>

          {/* Coluna 2: Categorias */}
          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-200 border-l-2 border-sky-500 pl-2.5">
              Categorias
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/alimentacao-saudavel" className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-sky-400 transition-colors" />
                  Alimentação Saudável
                </Link>
              </li>
              <li>
                <Link href="/cuidados-com-pets-no-inverno" className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-sky-400 transition-colors" />
                  Cuidados Diários
                </Link>
              </li>
              <li>
                <Link href="/vagas-para-castracao-gratuita" className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-sky-400 transition-colors" />
                  Utilidade Pública
                </Link>
              </li>
              <li>
                <Link href="/melhor-racao-para-pitbull-e-caes-ativos" className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-sky-400 transition-colors" />
                  Nutrição & Ranking
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis */}
          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-200 border-l-2 border-sky-500 pl-2.5">
              Links Úteis
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/sobre-nos" className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-sky-400 transition-colors" />
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2 group-hover:bg-sky-400 transition-colors" />
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a href="mailto:contato@tribunadopet.com.br" className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center group">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-xs text-slate-500 group-hover:text-sky-400" />
                  contato@tribunadopet.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-200 border-l-2 border-amber-500 pl-2.5">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receba conteúdos exclusivos sobre saúde, nutrição e bem-estar animal no seu e-mail.
            </p>
            <div className="pt-1">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Direitos autorais */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center">
            &copy; 2026 Tribuna do Pet <FontAwesomeIcon icon={faPaw} className="mx-1.5 text-sky-400" /> Todos os direitos reservados.
          </p>
          <p className="flex items-center text-slate-400">
            Feito com <FontAwesomeIcon icon={faHeart} className="mx-1 text-red-500 text-xs" /> para donos de pets em todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
