import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";

import { ScrollToTop } from "./components/global/ScrollToTop.tsx";
import { Stars } from "./components/global/Stars.tsx";
import { ToastProvider } from "./components/global/ToastProvider.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { Header } from "./components/layout/header/Header.tsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastProvider>
          <div className="flex flex-col min-h-screen">
            <ScrollToTop />

            <Stars />

            <Header />

            <main className="flex-1">
              <App />
            </main>

            <Footer />
          </div>
        </ToastProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
