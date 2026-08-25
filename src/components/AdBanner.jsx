"use client";

export default function AdBanner() {
  return (
    <aside className="max-w-4xl mx-auto my-8 overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-blue-600 rounded">
            Anúncio
          </span>
          <span className="ml-2 text-xs text-gray-500 font-medium">Patrocinado</span>
        </div>
      </div>

      <a
        href="https://www.racaopets.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 sm:p-5 transition-all duration-300 hover:bg-gray-50/80 group"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Imagem do Produto no topo em telas menores / à esquerda em telas maiores */}
          <div className="w-full sm:w-36 h-36 sm:h-28 flex-shrink-0 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl overflow-hidden p-3 shadow-inner group-hover:border-blue-200 transition-colors">
            <img
              src="https://www.tribunadopet.com.br/LUNCH15SEGUNDA.webp"
              alt="Ração Lunch Dog Essencial"
              className="object-contain w-full h-full max-h-32 transition-transform duration-300 group-hover:scale-105"
              suppressHydrationWarning
            />
          </div>

          {/* Conteúdo textual responsivo */}
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-extrabold text-base sm:text-lg text-blue-600 group-hover:text-blue-700 leading-snug group-hover:underline transition-colors">
              Ração Pets - Nutrição premium para cães e gatos
            </h4>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1.5 text-xs sm:text-sm">
              <span className="font-semibold text-green-700">
                www.racaopets.com.br
              </span>
              <span className="text-gray-300 font-bold">•</span>
              <span className="text-amber-500 font-bold flex items-center">
                ⭐ 4.9 <span className="ml-1 text-gray-500 font-normal">(Verificadas)</span>
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Rações premium e super premium sem conservantes ou corantes. Garanta nutrição completa com o melhor custo-benefício!
            </p>
          </div>
        </div>
      </a>
    </aside>
  );
}
