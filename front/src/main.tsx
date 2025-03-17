import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Routes from "@/config/routes";
import { DoctorsProvider } from "@/providers/DoctorsContext";
import { AuthProvider } from "@/providers/AuthContext";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker registrado"))
    .catch((error) => console.log("Error en Service Worker", error));
}

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
