import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<Article />} />
      <Route path="*" element={<div className="p-8">Página não encontrada</div>} />
    </Routes>
  );
}
