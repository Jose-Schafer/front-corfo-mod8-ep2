// @ts-nocheck

import { useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Location from "./location";
import Camara from "./camera";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

import DoctorSelector from "./fields/doctor-selector";

import { AppointmentStack } from "@/lib/models/appointments";

import { Button } from "@/components/ui/button";
import {
  Form as BaseForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener a lo menos dos caracteres.",
  }),
  email: z.string().email({
    message: "Debe ingresar un correo valido.",
  }),
  doctorId: z.string().refine((value) => value !== "", {
    message: "Debe seleccionar un doctor para continuar.",
  }),
  schedule: z.string().refine((value) => value !== "", {
    message: "Debe seleccionar un horario.",
  }),
});

const appointmentStack = new AppointmentStack();

export default function Form() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      doctorId: "",
      schedule: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    appointmentStack.push(values);

    toast({
      title: `${values.name} Cita registrada correctamente!`,
      description: values.schedule,
    });
  }

  const nameInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <BaseForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="nombre" {...field} ref={nameInputRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input type="email" placeholder="correo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DoctorSelector form={form} />
        <Camara />
        <Location />
        <Button type="submit">Submit</Button>
      </form>
      <Toaster />
    </BaseForm>
  );
}
