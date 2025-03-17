import { createContext, useContext, useEffect, useState, useRef } from "react"
import { get } from "@/api/requests"

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

const DoctorsContext = createContext(null);

export function DoctorsProvider({ children }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const { toast } = useToast()

  const loadMoreDoctorsCalledOnceRef = useRef(false);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const doctorsData = await get("/static/json/doctors.json");
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false)
      }
    }

    loadDoctors();
  }, [])

  const shouldSimulateError = () => {
    if (!loadMoreDoctorsCalledOnceRef.current) {
      loadMoreDoctorsCalledOnceRef.current = true
      throw new Error("Llamado a la API falló para simular un error!")
    }
    return
  }

  const loadMoreDoctors = async () => {
    try {
      const doctorsData = await get("/static/json/more-doctors.json", { "page": 1 });

      shouldSimulateError()

      setDoctors((oldDoctorsData) => ([...oldDoctorsData, ...doctorsData]));
      toast({
        title: "Doctores cargados correctamente",
        description: `Mostrando ${doctorsData.length} nuevos doctores`,
      })
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast({
        title: "Error cargando doctores!",
        description: "Por favor reintentar.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <DoctorsContext.Provider value={{ doctors, loading, loadMoreDoctors }} >
      {children}
      <Toaster />
    </DoctorsContext.Provider>
  );
}

export function useDoctors() {
  const context = useContext(DoctorsContext);
  if (!context) {
    throw new Error("useDoctors must be used within a DoctorsProvider");
  }
  return context
}
