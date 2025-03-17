import AppointmentsTable from "./appointments"
import { AppointmentStack } from "@/lib/models/appointments"

const appointmentStack = new AppointmentStack();

export default function Backoffice() {
  const sortedAppointments = appointmentStack.getSortedStack();
  return (
    <>
      <h1>Backoffice</h1>
      <AppointmentsTable appointments={sortedAppointments} />
    </>
  )
}
