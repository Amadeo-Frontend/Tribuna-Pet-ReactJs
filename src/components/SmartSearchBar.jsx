"use client";

import { useState, useTransition, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faArrowRight, faTag } from "@fortawesome/free-solid-svg-icons";
import { articlesSearchIndex } from "../lib/searchData";

export default function SmartSearchBar({ onCloseMenu, isHeader = false }) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    startTransition(() => {
      const q = query.toLowerCase().trim();
      const filtered = articlesSearchIndex.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(q);
        const descMatch = item.description.toLowerCase().includes(q);
        const categoryMatch = item.category.toLowerCase().includes(q);
        const keywordMatch = item.keywords.some((kw) => kw.toLowerCase().includes(q));
        return titleMatch || descMatch || categoryMatch || keywordMatch;
      });
      setResults(filtered);
    });
  }, [query]);

  const handleClear = () => {
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  const handleSelectResult = () => {
    setQuery("");
    setResults([]);
    if (onCloseMenu) onCloseMenu();
  };

  return (
    <div ref={containerRef} className={`relative w-full ${isHeader ? "max-w-md" : "my-3 px-1"}`}>
      {/* Input de Busca Estilo Shadcn UI */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center justify-center">
          <FontAwesomeIcon icon={faSearch} className="text-xs sm:text-sm text-sky-500" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar artigos, rações, saúde..."
          className={`w-full pl-9 pr-9 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-inner ${
            isHeader
              ? "bg-slate-100 text-slate-900 placeholder-slate-400 border-slate-200"
              : "bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border-slate-200 dark:border-slate-700/80"
          }`}
        />

        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            aria-label="Limpar busca"
          >
            <FontAwesomeIcon icon={faTimes} className="text-xs" />
          </button>
        )}
      </div>

      {/* Dropdown de Resultados Inteligentes em Tempo Real */}
      {query.trim() !== "" && (
        <div className={`mt-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden max-h-80 overflow-y-auto ${isHeader ? "absolute left-0 right-0 top-full z-50 mt-1.5" : ""}`}>
          {isPending ? (
            <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400 animate-pulse">
              Procurando...
            </div>
          ) : results.length > 0 ? (
            <ul className="divide-y divide-slate-100 dark:divide-slate-700/60">
              {results.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    onClick={handleSelectResult}
                    className="block p-3 hover:bg-blue-50/80 dark:hover:bg-slate-700/60 transition-colors group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-sky-500/20 rounded-md">
                        {item.category}
                      </span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-[10px] text-slate-300 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors" />
                    </div>
                    <h4 className="mt-1 text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center">
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Nenhum resultado para "<span className="font-semibold text-blue-600 dark:text-sky-400">{query}</span>"
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                Tente buscar termos como "ração", "castração", "inverno" ou "pitbull".
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
