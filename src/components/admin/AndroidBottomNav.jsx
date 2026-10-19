"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Image as ImageIcon,
  LogOut,
} from "lucide-react";

export default function AndroidBottomNav({
  activeTab,
  setActiveTab,
  openNewPost,
  onLogout,
  articlesCount = 0,
}) {
  const tabs = [
    {
      id: "overview",
      label: "Início",
      icon: LayoutDashboard,
      onClick: () => setActiveTab("overview"),
    },
    {
      id: "posts",
      label: "Matérias",
      icon: FileText,
      badge: articlesCount,
      onClick: () => setActiveTab("posts"),
    },
    {
      id: "editor",
      label: "Criar",
      icon: PlusCircle,
      isAction: true,
      onClick: openNewPost,
    },
    {
      id: "gallery",
      label: "Mídia WebP",
      icon: ImageIcon,
      onClick: () => setActiveTab("gallery"),
    },
    {
      id: "logout",
      label: "Sair",
      icon: LogOut,
      onClick: onLogout,
    },
  ];

  return (
    <nav
      aria-label="Navegação móvel Android"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-900/95 border-t border-slate-800/90 backdrop-blur-xl px-2 py-1.5 shadow-[0_-10px_25px_rgba(0,0,0,0.4)] select-none"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          if (tab.isAction) {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={tab.onClick}
                className="flex flex-col items-center justify-center -mt-4 cursor-pointer group active:scale-90 transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 border-2 border-slate-900 group-hover:scale-105 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 mt-1">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              type="button"
              onClick={tab.onClick}
              className="flex flex-col items-center justify-center py-1 px-3 relative cursor-pointer active:scale-95 transition-transform"
            >
              {/* Android Material Design 3 Pill Indicator */}
              <div
                className={`relative px-4 py-1 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.badge && tab.badge > 0 && !isActive ? (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-500" />
                ) : null}
              </div>

              {/* Label */}
              <span
                className={`text-[10px] tracking-tight mt-0.5 transition-colors ${
                  isActive ? "text-blue-400 font-bold" : "text-slate-400 font-medium"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
