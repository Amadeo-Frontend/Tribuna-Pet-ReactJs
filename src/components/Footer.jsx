import NewsletterForm from "./Newsletter/NewsletterForm";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-12 pb-6 mt-16 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
          {/* coluna 1 */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 mr-3 text-white rounded-lg bg-primary">
                <i className="fas fa-paw" />
              </div>
              <h3 className="text-xl font-bold">Tribuna do Pet</h3>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              O melhor portal de informações para donos de cães e gatos do Brasil.
            </p>
          </div>

          {/* coluna 2 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/alimentacao-saudavel" className="text-gray-400 hover:text-white">
                  Alimentação Saudável
                </Link>
              </li>
              <li>
                <Link to="/cuidados-com-pets-no-inverno" className="text-gray-400 hover:text-white">
                  Cuidados Diários
                </Link>
              </li>
              <li>
                <Link to="/vagas-para-castracao-gratuita" className="text-gray-400 hover:text-white">
                  Utilidade Pública
                </Link>
              </li>
            </ul>
          </div>

          {/* coluna 3 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/sobre-nos" className="hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a href="mailto:tribunadopet@gmail.com" className="hover:text-white">
                  tribunadopet@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* coluna 4 – newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Receba as melhores dicas e novidades sobre cuidados com pets.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="pt-6 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">
            &copy; 2025 Tribuna do Pet 🐾. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
