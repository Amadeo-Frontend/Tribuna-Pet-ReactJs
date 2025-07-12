import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {/* Toasts ficam visíveis em qualquer página */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        pauseOnHover
        draggable
        theme="colored"
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Article />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
