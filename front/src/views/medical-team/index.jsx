import { useState, useEffect } from 'react'
import DoctorCard from '@/components/doctor-card'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useDoctors } from "@/providers/DoctorsContext"

export default function MedicalTeam() {

  const { doctors, loading, loadMoreDoctors } = useDoctors();
  const [shownDoctors, setShownDoctors] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    if (filterText !== "") {
      const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setShownDoctors(filteredDoctors)
      return
    }
    setShownDoctors(doctors)
    return
  }, [filterText])

  useEffect(() => {
    if (doctors) {
      setShownDoctors(doctors)
    }
  }, [doctors])


  if (loading) {
    return (<h1>Loading ...</h1>)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Equipo Médico</h1>
      <div className="flex justify-self-end w-1/2 mb-2">
        <Button className="mr-2" onClick={loadMoreDoctors}>Cargar más</Button>
        <Input
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
          placeholder="Filtra por nombre de doctor"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {shownDoctors.map((doctor, key) => (
          <DoctorCard key={key} doctorData={doctor} />
        ))}
      </div>
    </div>
  )
}
