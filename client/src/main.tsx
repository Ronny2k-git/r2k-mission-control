import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import { ScrollToTop } from "./components/global/ScrollToTop.tsx";
import { Stars } from "./components/global/Stars.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { Header } from "./components/layout/header/Header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />

        <Stars />

        <Header />

        <main className="flex-1">
          <App />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
