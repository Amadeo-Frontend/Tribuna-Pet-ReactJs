import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "@slorber/react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";
import { LoaderProvider } from "./contexts/LoaderContext";
import LoaderOverlay from "./components/LoaderOverlay";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <LoaderProvider>
        <BrowserRouter>
          <App />
          <LoaderOverlay />
          <SpeedInsights /> 
        </BrowserRouter>
      </LoaderProvider>
    </HelmetProvider>
  </React.StrictMode>
);
