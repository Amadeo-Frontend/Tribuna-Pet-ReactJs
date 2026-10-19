"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Image as ImageIcon,
  UploadCloud,
  ExternalLink,
  LogOut,
  Sparkles,
} from "lucide-react";
import { FaPaw } from "react-icons/fa";

export default function AdminSidebar({
  activeTab,
  setActiveTab,
  openNewPost,
  articlesCount = 0,
  imagesCount = 0,
  username = "admin",
  onLogout,
  onTriggerUpload,
}) {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-slate-900/95 border-r border-slate-800/90 backdrop-blur-md select-none shrink-0 z-30">
      {/* Sidebar Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
            <FaPaw className="text-xl" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm tracking-tight text-white truncate">
                Tribuna do Pet
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30 rounded">
                Admin
              </span>
              <span className="text-[10px] text-slate-500 font-medium truncate">
                Console v1.0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Group: Conteúdo */}
        <div>
          <div className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
            Painel & Matérias
          </div>
          <nav className="space-y-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-slate-800/90 text-white shadow-xs border border-slate-700/60 font-bold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className={`w-4 h-4 ${activeTab === "overview" ? "text-blue-400" : "text-slate-400"}`} />
                <span>Visão Geral</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("posts")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "posts"
                  ? "bg-slate-800/90 text-white shadow-xs border border-slate-700/60 font-bold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className={`w-4 h-4 ${activeTab === "posts" ? "text-blue-400" : "text-slate-400"}`} />
                <span>Matérias</span>
              </div>
              {articlesCount > 0 && (
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {articlesCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={openNewPost}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "editor"
                  ? "bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 font-bold"
                  : "text-slate-300 hover:text-emerald-300 hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <PlusCircle className="w-4 h-4 text-emerald-400" />
                <span>Nova Matéria</span>
              </div>
              <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 rounded">
                Criar
              </span>
            </button>
          </nav>
        </div>

        {/* Group: Mídia & Otimização */}
        <div>
          <div className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
            Mídia & Otimizador WebP
          </div>
          <nav className="space-y-1">
            <button
              type="button"
              onClick={() => setActiveTab("gallery")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "gallery"
                  ? "bg-slate-800/90 text-white shadow-xs border border-slate-700/60 font-bold"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ImageIcon className={`w-4 h-4 ${activeTab === "gallery" ? "text-blue-400" : "text-slate-400"}`} />
                <span>Galeria WebP</span>
              </div>
              {imagesCount > 0 && (
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {imagesCount}
                </span>
              )}
            </button>

            {onTriggerUpload && (
              <button
                type="button"
                onClick={onTriggerUpload}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <UploadCloud className="w-4 h-4 text-sky-400" />
                  <span>Subir Imagem</span>
                </div>
                <Sparkles className="w-3 h-3 text-amber-400" />
              </button>
            )}
          </nav>
        </div>

        {/* Group: Site Público */}
        <div>
          <div className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
            Site Público
          </div>
          <nav className="space-y-1">
            <Link
              href="/"
              target="_blank"
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span>Ver Blog Tribuna</span>
              </div>
              <span className="text-[10px] text-slate-600">↗</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Sidebar Footer: User Card */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/40">
        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
              {username?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-white block truncate">
                {username}
              </span>
              <span className="text-[10px] text-slate-500 block truncate">
                Administrador
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onLogout}
            title="Encerrar sessão"
            className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer shrink-0"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
