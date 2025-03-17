// @ts-nocheck

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Routes from "@/config/routes";
import { DoctorsProvider } from "@/providers/DoctorsContext";
import { AuthProvider } from "@/providers/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <DoctorsProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </DoctorsProvider>
    </AuthProvider>
  </StrictMode>,
);
