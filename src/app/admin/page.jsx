"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AndroidBottomNav from "../../components/admin/AndroidBottomNav";
import {
  FaPaw,
  FaSignOutAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaExternalLinkAlt,
  FaImage,
  FaFileAlt,
  FaUpload,
  FaCopy,
  FaCheck,
  FaSearch,
  FaFilter,
  FaChartBar,
  FaCalendarAlt,
  FaTag,
  FaTimes,
  FaEye,
  FaBolt,
  FaLayerGroup,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

function formatBytes(bytes, decimals = 1) {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview"); // overview | posts | editor | gallery
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Stats & Data
  const [articles, setArticles] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesStats, setImagesStats] = useState({ totalCount: 0, totalSize: 0 });
  const [postFilter, setPostFilter] = useState("");
  const [imageFilter, setImageFilter] = useState("");

  // Editor State
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const [postForm, setPostForm] = useState({
    title: "",
    subtitle: "",
    slug: "",
    category: "Utilidade Pública",
    tag: "Destaque",
    author: "Redação Tribuna do Pet",
    image: "",
    imageCaption: "",
    content: "",
    featured: false,
    readingTime: "4 min de leitura",
  });
  const [editorTab, setEditorTab] = useState("write"); // write | preview | split
  const [savingPost, setSavingPost] = useState(false);

  // Upload State
  const [uploading, setUploading] = useState(false);
  const [recentUploads, setRecentUploads] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const fileInputRef = useRef(null);
  const postImageInputRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  // Check Auth on Mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/me");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        setUser(data.user);
        await Promise.all([loadArticles(), loadImages()]);
      } catch {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  async function loadArticles() {
    try {
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      if (data.success) {
        setArticles(data.articles || []);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function loadImages() {
    try {
      const res = await fetch("/api/admin/images");
      const data = await res.json();
      if (data.success) {
        setImages(data.images || []);
        setImagesStats({ totalCount: data.totalCount, totalSize: data.totalSize });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (err) {
      console.error(err);
    }
  }

  // Upload handler for Gallery
  async function handleFilesUpload(filesList) {
    if (!filesList || filesList.length === 0) return;
    setUploading(true);

    const formData = new FormData();
    for (let i = 0; i < filesList.length; i++) {
      formData.append("files", filesList[i]);
    }

    try {
      const res = await fetch("/api/admin/images/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        showToast(data.message || "Erro no upload.");
        return;
      }

      setRecentUploads(data.images || []);
      showToast(`${data.images.length} imagem(ns) convertida(s) para WebP!`);
      await loadImages();
    } catch (err) {
      showToast("Erro ao processar imagem: " + err.message);
    } finally {
      setUploading(false);
    }
  }

  // Direct upload for the Post Editor Image
  async function handlePostImageDirectUpload(file) {
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("files", file);

    try {
      const res = await fetch("/api/admin/images/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.images?.[0]) {
        const uploadedImg = data.images[0];
        setPostForm((prev) => ({ ...prev, image: uploadedImg.url }));
        showToast(`Imagem convertida para WebP: ${uploadedImg.savings} economizado!`);
        await loadImages();
      }
    } catch (err) {
      showToast("Erro no upload da imagem: " + err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleDeleteImage(filename) {
    if (!confirm(`Tem certeza que deseja excluir a imagem "${filename}"?`)) return;

    try {
      const res = await fetch(`/api/admin/images?filename=${encodeURIComponent(filename)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        showToast("Imagem excluída com sucesso.");
        await loadImages();
      } else {
        showToast(data.message || "Erro ao excluir.");
      }
    } catch (err) {
      showToast("Erro ao excluir imagem: " + err.message);
    }
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showToast(`Copiado: ${text}`);
  }

  // Post Editor Actions
  function openNewPost() {
    setIsEditing(false);
    setEditingPostId(null);
    setPostForm({
      title: "",
      subtitle: "",
      slug: "",
      category: "Utilidade Pública",
      tag: "Destaque",
      author: "Redação Tribuna do Pet",
      image: "",
      imageCaption: "",
      content: "",
      featured: false,
      readingTime: "4 min de leitura",
    });
    setActiveTab("editor");
  }

  function editPost(post) {
    if (post.type === "legacy") {
      alert("Este é um artigo legado em JSX. Você pode visualizá-lo, mas edições são permitidas apenas nas matérias do novo formato.");
      return;
    }
    setIsEditing(true);
    setEditingPostId(post.id);
    setPostForm({
      title: post.title,
      subtitle: post.subtitle || "",
      slug: post.slug,
      category: post.category || "Geral",
      tag: post.tag || "",
      author: post.author || "Redação Tribuna do Pet",
      image: post.image || "",
      imageCaption: post.imageCaption || "",
      content: post.content || "",
      featured: Boolean(post.featured),
      readingTime: post.readingTime || "4 min de leitura",
    });
    setActiveTab("editor");
  }

  async function handleSavePost(e) {
    e.preventDefault();
    if (!postForm.title.trim()) {
      showToast("O título da matéria é obrigatório.");
      return;
    }
    if (!postForm.content.trim()) {
      showToast("O conteúdo da matéria é obrigatório.");
      return;
    }

    setSavingPost(true);

    try {
      const method = isEditing ? "PUT" : "POST";
      const payload = isEditing ? { ...postForm, id: editingPostId } : postForm;

      const res = await fetch("/api/admin/posts", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        showToast(data.message || "Erro ao salvar matéria.");
        setSavingPost(false);
        return;
      }

      showToast(isEditing ? "Matéria atualizada!" : "Matéria publicada com sucesso!");
      await loadArticles();
      setActiveTab("posts");
    } catch (err) {
      showToast("Erro ao salvar: " + err.message);
    } finally {
      setSavingPost(false);
    }
  }

  async function handleDeletePost(post) {
    if (post.type === "legacy") {
      alert("Artigos legados em JSX não podem ser deletados pelo painel.");
      return;
    }
    if (!confirm(`Tem certeza que deseja excluir a matéria "${post.title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/posts?id=${post.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showToast("Matéria excluída.");
        await loadArticles();
      } else {
        showToast(data.message || "Erro ao excluir.");
      }
    } catch (err) {
      showToast("Erro ao excluir: " + err.message);
    }
  }

  // Filtered lists
  const filteredArticles = articles.filter(
    (a) =>
      a.title?.toLowerCase().includes(postFilter.toLowerCase()) ||
      a.slug?.toLowerCase().includes(postFilter.toLowerCase()) ||
      a.category?.toLowerCase().includes(postFilter.toLowerCase())
  );

  const filteredImages = images.filter((img) =>
    img.name.toLowerCase().includes(imageFilter.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <span className="text-slate-400 text-sm">Carregando painel administrativo...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 right-5 z-50 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-blue-400/30 text-sm font-medium"
          >
            <FaCheckCircle />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Shadcn Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNewPost={openNewPost}
        articlesCount={articles.length}
        imagesCount={imagesStats.totalCount}
        username={user?.username || "admin"}
        onLogout={handleLogout}
        onTriggerUpload={() => fileInputRef.current?.click()}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header / Breadcrumbs */}
        <header className="sticky top-0 z-20 bg-slate-900/95 border-b border-slate-800 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Mobile Branding */}
            <div className="flex items-center gap-2 md:hidden">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-sm">
                <FaPaw className="text-sm" />
              </div>
              <span className="font-extrabold text-sm text-white">Tribuna Pet</span>
            </div>

            {/* Desktop Breadcrumbs */}
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="text-slate-500">Console</span>
              <span className="text-slate-600">/</span>
              <span className="text-white font-bold">
                {activeTab === "overview" && "Visão Geral"}
                {activeTab === "posts" && "Gestão de Matérias"}
                {activeTab === "editor" && (isEditing ? "Editar Matéria" : "Nova Matéria")}
                {activeTab === "gallery" && "Mídia & Otimizador WebP"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-700"
            >
              <span>Ver Blog</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </Link>

            <button
              onClick={openNewPost}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 text-white rounded-lg text-xs font-bold shadow-md shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
            >
              <FaPlus className="text-[10px]" />
              <span className="hidden xs:inline">Nova Matéria</span>
            </button>
          </div>
        </header>

        {/* Main Container */}
        <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8 pb-28 md:pb-8 space-y-6">

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800/90 shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Total de Matérias</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <FaFileAlt />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{articles.length}</div>
                <span className="text-[11px] text-slate-500">
                  {articles.filter((a) => a.type === "dynamic").length} dinâmicas •{" "}
                  {articles.filter((a) => a.type === "legacy").length} legadas
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800/90 shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Imagens no GitHub</span>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <FaImage />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{imagesStats.totalCount}</div>
                <span className="text-[11px] text-slate-500">Em /public/images/</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800/90 shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Espaço em Imagens</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <FaBolt />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {formatBytes(imagesStats.totalSize)}
                </div>
                <span className="text-[11px] text-slate-500">Comprimidas e otimizadas</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800/90 shadow-lg">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Otimizador WebP</span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <FaCheckCircle />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">Ativo (Sharp)</div>
                <span className="text-[11px] text-slate-500">Conversão automática ativada</span>
              </div>
            </div>

            {/* Quick Actions & Recent Posts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FaLayerGroup className="text-blue-500" />
                    <span>Últimas Matérias</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab("posts")}
                    className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Ver todas →
                  </button>
                </div>

                <div className="divide-y divide-slate-800">
                  {articles.slice(0, 5).map((article) => (
                    <div
                      key={article.id || article.slug}
                      className="py-3.5 flex items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {article.image ? (
                          <img
                            src={article.image}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover bg-slate-800 shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                            <FaFileAlt />
                          </div>
                        )}
                        <div className="min-w-0">
                          <Link
                            href={`/${article.slug}`}
                            target="_blank"
                            className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors truncate block"
                          >
                            {article.title}
                          </Link>
                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                            <span>/{article.slug}</span>
                            <span>•</span>
                            <span>{article.published}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          href={`/${article.slug}`}
                          target="_blank"
                          className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                          title="Visualizar no site"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                        </Link>
                        {article.type === "dynamic" && (
                          <button
                            onClick={() => editPost(article)}
                            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                            title="Editar"
                          >
                            <FaEdit className="text-xs" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Converter Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950/40 border border-slate-800 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 mb-3">
                    <FaUpload />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">Conversor Rápido WebP</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Arraste fotos ou clique para comprimir e converter imagens automaticamente para{" "}
                    <strong>.webp</strong> direto na pasta <code>public/images/</code>.
                  </p>

                  <label className="block w-full border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-800/40 hover:bg-slate-800/80">
                    <FaImage className="text-2xl text-slate-500 mx-auto mb-2" />
                    <span className="text-xs font-bold text-blue-400 block">
                      {uploading ? "Convertendo e comprimindo..." : "Clique para selecionar imagens"}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">PNG, JPG, JPEG</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFilesUpload(e.target.files)}
                      disabled={uploading}
                    />
                  </label>
                </div>

                <button
                  onClick={() => setActiveTab("gallery")}
                  className="w-full py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors text-center"
                >
                  Abrir Galeria Completa →
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: POSTS LIST */}
        {activeTab === "posts" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
                <input
                  type="text"
                  placeholder="Buscar matérias..."
                  value={postFilter}
                  onChange={(e) => setPostFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-slate-400">
                  Mostrando <strong>{filteredArticles.length}</strong> matérias
                </span>
              </div>
            </div>

            {/* Articles Table/Grid */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-800/60 text-slate-400 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Matéria</th>
                      <th className="py-3 px-4 hidden md:table-cell">Categoria</th>
                      <th className="py-3 px-4 hidden sm:table-cell">Data</th>
                      <th className="py-3 px-4">Tipo</th>
                      <th className="py-3 px-4 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredArticles.map((article) => (
                      <tr
                        key={article.id || article.slug}
                        className="hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            {article.image && (
                              <img
                                src={article.image}
                                alt=""
                                className="w-10 h-10 rounded-lg object-cover bg-slate-800 shrink-0"
                              />
                            )}
                            <div className="min-w-0">
                              <span className="font-bold text-white block truncate max-w-xs sm:max-w-md">
                                {article.title}
                              </span>
                              <span className="text-[11px] text-slate-500 block truncate">
                                /{article.slug}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 hidden md:table-cell">
                          <span className="px-2.5 py-1 text-[11px] font-semibold bg-slate-800 text-slate-300 rounded-md border border-slate-700/50">
                            {article.category || "Geral"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400 hidden sm:table-cell">
                          {article.published || "—"}
                        </td>
                        <td className="py-3.5 px-4">
                          {article.type === "dynamic" ? (
                            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                              Dinâmico
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md">
                              Legado (JSX)
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <Link
                              href={`/${article.slug}`}
                              target="_blank"
                              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                              title="Visualizar matéria"
                            >
                              <FaExternalLinkAlt className="text-xs" />
                            </Link>
                            {article.type === "dynamic" ? (
                              <>
                                <button
                                  onClick={() => editPost(article)}
                                  className="p-2 text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600 rounded-lg transition-colors cursor-pointer"
                                  title="Editar matéria"
                                >
                                  <FaEdit className="text-xs" />
                                </button>
                                <button
                                  onClick={() => handleDeletePost(article)}
                                  className="p-2 text-rose-400 hover:text-white bg-rose-500/10 hover:bg-rose-600 rounded-lg transition-colors cursor-pointer"
                                  title="Excluir matéria"
                                >
                                  <FaTrash className="text-xs" />
                                </button>
                              </>
                            ) : (
                              <button
                                disabled
                                className="p-2 text-slate-600 bg-slate-800/40 rounded-lg opacity-40 cursor-not-allowed"
                                title="Artigo estático JSX"
                              >
                                <FaEdit className="text-xs" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: POST EDITOR */}
        {activeTab === "editor" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <FaEdit className="text-blue-500" />
                <span>{isEditing ? "Editar Matéria" : "Criar Nova Matéria"}</span>
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("posts")}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSavePost}
                  disabled={savingPost}
                  className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 text-white font-bold rounded-lg text-xs shadow-md shadow-blue-600/30 transition-all cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                >
                  {savingPost ? "Publicando..." : isEditing ? "Salvar Alterações" : "Publicar Matéria"}
                </button>
              </div>
            </div>

            <form onSubmit={handleSavePost} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Metadata */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                      Título da Matéria *
                    </label>
                    <input
                      type="text"
                      required
                      value={postForm.title}
                      onChange={(e) => {
                        const val = e.target.value;
                        setPostForm((prev) => ({
                          ...prev,
                          title: val,
                          slug: isEditing ? prev.slug : val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
                        }));
                      }}
                      placeholder="Ex: Como Cuidar de Filhotes de Cachorro nos Primeiros Meses"
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                      Subtítulo / Resumo em Destaque
                    </label>
                    <textarea
                      rows={2}
                      value={postForm.subtitle}
                      onChange={(e) => setPostForm({ ...postForm, subtitle: e.target.value })}
                      placeholder="Breve resumo que aparece no topo da matéria e nos cards..."
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                        URL Slug da Matéria *
                      </label>
                      <div className="flex items-center">
                        <span className="px-3 py-2 bg-slate-800 border border-r-0 border-slate-700 rounded-l-xl text-slate-400 text-xs">
                          /
                        </span>
                        <input
                          type="text"
                          required
                          value={postForm.slug}
                          onChange={(e) => setPostForm({ ...postForm, slug: e.target.value })}
                          placeholder="como-cuidar-de-filhotes"
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-r-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                        Autor
                      </label>
                      <input
                        type="text"
                        value={postForm.author}
                        onChange={(e) => setPostForm({ ...postForm, author: e.target.value })}
                        placeholder="Redação Tribuna do Pet"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Category, Image & Settings */}
                <div className="space-y-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                      Categoria
                    </label>
                    <select
                      value={postForm.category}
                      onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Utilidade Pública">Utilidade Pública</option>
                      <option value="Saúde Animal">Saúde Animal</option>
                      <option value="Alimentação">Alimentação</option>
                      <option value="Cuidados Diários">Cuidados Diários</option>
                      <option value="Dicas & Tutoriais">Dicas & Tutoriais</option>
                      <option value="Geral">Geral</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                      Tag Rápida
                    </label>
                    <input
                      type="text"
                      value={postForm.tag}
                      onChange={(e) => setPostForm({ ...postForm, tag: e.target.value })}
                      placeholder="Ex: Destaque, Urgente, Novidade"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                      Imagem de Capa (URL)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={postForm.image}
                        onChange={(e) => setPostForm({ ...postForm, image: e.target.value })}
                        placeholder="/images/minha-imagem.webp"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs font-mono"
                      />
                      <button
                        type="button"
                        onClick={() => postImageInputRef.current?.click()}
                        className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shrink-0 cursor-pointer"
                        title="Upload e conversão imediata para WebP"
                      >
                        <FaUpload />
                      </button>
                      <input
                        ref={postImageInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePostImageDirectUpload(e.target.files?.[0])}
                      />
                    </div>
                    {postForm.image && (
                      <div className="mt-2 relative rounded-lg overflow-hidden border border-slate-700">
                        <img
                          src={postForm.image}
                          alt="Prévia da capa"
                          className="w-full h-24 object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                      Legenda da Imagem de Capa
                    </label>
                    <input
                      type="text"
                      value={postForm.imageCaption}
                      onChange={(e) => setPostForm({ ...postForm, imageCaption: e.target.value })}
                      placeholder="Ex: Foto de divulgação / Reprodução"
                      className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs"
                    />
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
                      <input
                        type="checkbox"
                        checked={postForm.featured}
                        onChange={(e) => setPostForm({ ...postForm, featured: e.target.checked })}
                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-800 border-slate-700"
                      />
                      <span>Destacar na Página Inicial</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Editor Tabs: Write vs Preview */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setEditorTab("write")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        editorTab === "write" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Escrever Conteúdo
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditorTab("preview")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        editorTab === "preview" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Pré-visualização
                    </button>
                  </div>

                  {/* Formatting Shortcuts */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setPostForm({ ...postForm, content: postForm.content + "\n\n## Subtítulo" })}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-mono text-slate-300"
                      title="Título H2"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      onClick={() => setPostForm({ ...postForm, content: postForm.content + "\n\n### Seção" })}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-mono text-slate-300"
                      title="Título H3"
                    >
                      H3
                    </button>
                    <button
                      type="button"
                      onClick={() => setPostForm({ ...postForm, content: postForm.content + " **texto em negrito** " })}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-300"
                      title="Negrito"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => setPostForm({ ...postForm, content: postForm.content + "\n\n> Frase de destaque ou citação" })}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-300"
                      title="Citação"
                    >
                      " "
                    </button>
                    <button
                      type="button"
                      onClick={() => setPostForm({ ...postForm, content: postForm.content + "\n- Item de lista 1\n- Item de lista 2" })}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-300"
                      title="Lista com marcadores"
                    >
                      • Lista
                    </button>
                  </div>
                </div>

                {editorTab === "write" ? (
                  <textarea
                    rows={18}
                    required
                    value={postForm.content}
                    onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                    placeholder="Escreva a matéria em texto com markdown... Suporta ## Título, ### Subtítulo, **negrito**, listas (- item), citações (> citação) e links [texto](url)."
                    className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm leading-relaxed"
                  />
                ) : (
                  <div className="p-6 bg-white text-gray-900 rounded-xl min-h-[400px]">
                    <h1 className="text-3xl font-extrabold mb-3 text-gray-900">{postForm.title || "Título da matéria"}</h1>
                    {postForm.subtitle && (
                      <p className="text-lg text-gray-600 font-medium border-l-4 border-blue-600 pl-3 mb-6">
                        {postForm.subtitle}
                      </p>
                    )}
                    {postForm.image && (
                      <img
                        src={postForm.image}
                        alt=""
                        className="w-full max-h-80 object-cover rounded-xl mb-6 shadow-sm"
                      />
                    )}
                    <div className="prose max-w-none text-gray-800 whitespace-pre-line leading-relaxed">
                      {postForm.content || "Nenhum conteúdo para pré-visualizar."}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("posts")}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-semibold text-slate-300 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={savingPost}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  {savingPost ? "Publicando..." : isEditing ? "Salvar Alterações" : "Publicar Matéria"}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* TAB 4: IMAGE GALLERY & WEBP CONVERTER */}
        {activeTab === "gallery" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Drag & Drop Upload Zone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFilesUpload(e.dataTransfer.files);
              }}
              className="border-2 border-dashed border-blue-500/40 hover:border-blue-500 bg-slate-900/60 hover:bg-blue-950/20 rounded-3xl p-8 sm:p-12 text-center transition-all cursor-pointer relative overflow-hidden group"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Conversão WebP Ativa
                </span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaUpload className="text-2xl" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {uploading ? "Comprimindo e Convertendo para WebP..." : "Arraste e solte imagens aqui"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-4 leading-relaxed">
                Suporta PNG, JPG e JPEG. Ao soltar, as fotos são instantaneamente compactadas e convertidas para{" "}
                <strong>.webp</strong> de alta resolução e salvas no repositório em <code>public/images/</code>.
              </p>

              <button
                type="button"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-600/30 transition-all pointer-events-none"
              >
                {uploading ? "Processando..." : "Selecionar Arquivos"}
              </button>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFilesUpload(e.target.files)}
                disabled={uploading}
              />
            </div>

            {/* Recent Uploads Report */}
            {recentUploads.length > 0 && (
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <FaCheckCircle />
                    <span>Upload Recente Realizado com Sucesso</span>
                  </span>
                  <button
                    onClick={() => setRecentUploads([])}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Fechar
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {recentUploads.map((img, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3"
                    >
                      <img src={img.url} alt="" className="w-12 h-12 object-cover rounded-lg shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-white truncate block">{img.name}</span>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                          <span>{formatBytes(img.newSize)}</span>
                          <span className="text-emerald-400 font-bold">{img.savings} menor</span>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(img.url)}
                        className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg shrink-0"
                        title="Copiar URL"
                      >
                        <FaCopy className="text-xs" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Search & List */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-80">
                  <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
                  <input
                    type="text"
                    placeholder="Buscar imagem por nome..."
                    value={imageFilter}
                    onChange={(e) => setImageFilter(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="text-xs text-slate-400 self-end sm:self-auto">
                  Total: <strong>{filteredImages.length}</strong> imagens •{" "}
                  <strong>{formatBytes(imagesStats.totalSize)}</strong>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredImages.map((img) => (
                  <div
                    key={img.name}
                    className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-md flex flex-col transition-all"
                  >
                    <div className="relative aspect-video bg-slate-950 overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-black/70 text-slate-300 backdrop-blur-xs">
                        {img.format}
                      </span>
                    </div>

                    <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-slate-200 truncate block" title={img.name}>
                          {img.name}
                        </span>
                        <span className="text-[10px] text-slate-500">{formatBytes(img.size)}</span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 gap-1">
                        <button
                          onClick={() => copyToClipboard(img.url)}
                          className="flex-1 py-1.5 px-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          title="Copiar URL relativa para post"
                        >
                          <FaCopy className="text-[10px]" />
                          <span>Copiar URL</span>
                        </button>
                        <button
                          onClick={() => handleDeleteImage(img.name)}
                          className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                          title="Excluir imagem"
                        >
                          <FaTrash className="text-[11px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        </div>
      </div>

      {/* Mobile Android Bottom Navigation */}
      <AndroidBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNewPost={openNewPost}
        onLogout={handleLogout}
        articlesCount={articles.length}
      />
    </div>
  );
}
