import { useEffect, useState } from "react"

import { get } from '@/api/requests'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useDoctors } from "@/providers/DoctorsContext"

export default function DoctorSelector({ form }) {
  const { doctors } = useDoctors();
  const [selectedDoctor, setSelectedDoctor] = useState({})

  useEffect(() => {
    const { doctorId } = { ...form.getValues() }
    const doctor = doctors.filter((doctor) => doctor.id == doctorId)[0]
    setSelectedDoctor(doctor);
  }, [form])

  return (
    <>
      <FormField
        control={form.control}
        name="doctorId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Doctor</FormLabel>
            <FormControl>
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona un doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Doctores</SelectLabel>
                    {doctors.map((doctor, index) => (
                      <SelectItem value={`${doctor.id}`} key={index}>{doctor.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="schedule"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Horario</FormLabel>
            <FormControl>
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona un doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Horarios disponibles</SelectLabel>
                    {selectedDoctor?.available_schedule ?
                      selectedDoctor.available_schedule.map((schedule, index) => (
                        <SelectItem value={`${schedule}`} key={index}>{schedule}</SelectItem>
                      ))
                      :
                      null
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

    </>
  )
}
