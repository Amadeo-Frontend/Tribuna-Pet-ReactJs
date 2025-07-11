import { Link } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-white z-40 transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose}>
          <i className="text-xl fas fa-times" />
        </button>
      </div>

      <ul className="p-4 space-y-4">
        <li>
          <Link to="/" className="flex items-center gap-2 font-medium" onClick={onClose}>
            <i className="fas fa-house" /> Home
          </Link>
        </li>

        {/* exemplo de grupo: Alimentação */}
        <li>
          <details>
            <summary className="flex items-center gap-2 font-medium cursor-pointer">
              <i className="fas fa-bowl-food" /> Alimentação Saudável
            </summary>
            <ul className="mt-2 ml-6 space-y-2">
              <li>
                <Link to="/alimentacao-saudavel" onClick={onClose}>
                  Guia Completo de Alimentação Natural
                </Link>
              </li>
              <li>
                <Link to="/alimentacao-inteligente" onClick={onClose}>
                  Alimentação Saudável e Inteligente
                </Link>
              </li>
              <li>
                <Link to="/batata-doce-nutricao-canina" onClick={onClose}>
                  Batata Doce na Nutrição Canina
                </Link>
              </li>
            </ul>
          </details>
        </li>

        {/* repita outros grupos (Cuidados, Utilidade…) */}
      </ul>
    </div>
  );
}
