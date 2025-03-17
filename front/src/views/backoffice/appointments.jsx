import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useDoctors } from "@/providers/DoctorsContext";

import PropTypes from "prop-types";

export default function AppointmentsTable({ appointments }) {
  const { doctors } = useDoctors();

  const getTotalAmount = () => {
    const total = appointments.reduce((total, appointment) => {
      const doctor = doctors[appointment.doctorId];
      return doctor ? total + doctor.hour_price : total;
    }, 0);
    return formatMoney(total);
  };

  const formatMoney = (value) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(value);
  };

  if (!appointments) {
    return (
      <div className="mt-10">
        <h2>No hay citas médicas agendadas.</h2>
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>Listado de citas médicas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Fecha y Hora</TableHead>
          <TableHead>Doctor</TableHead>
          <TableHead>Paciente</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {appointment.schedule}
            </TableCell>
            <TableCell>{doctors[appointment.doctorId]?.name}</TableCell>
            <TableCell>{appointment.name}</TableCell>
            <TableCell className="text-right">
              {formatMoney(doctors[appointment.doctorId]?.hour_price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{getTotalAmount()}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

AppointmentsTable.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      doctorId: PropTypes.string.isRequired,
      schedule: PropTypes.string.isRequired,
    }),
  ),
};
