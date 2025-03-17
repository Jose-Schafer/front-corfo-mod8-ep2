import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import withModal from "@/hoc/modal";

// Define the Doctor interface
interface Doctor {
  image: string;
  name: string;
  experience: number;
  specialty: string;
  hour_price: number;
}

// Props for the DoctorCard component
interface DoctorCardProps {
  doctorData: Doctor; // doctorData is optional to simulate dynamic loading
  openModal: (content: React.ReactNode) => void;
}

// Class to handle doctor details
class DoctorDetails implements Doctor {
  constructor(
    public image: string,
    public name: string,
    public experience: number,
    public specialty: string,
    public hour_price: number
  ) { }

  getDetailedInfo(): string {
    return `${this.name} es especialista en ${this.specialty}, con ${this.experience} años de experiencia.`;
  }

  updateSpecialty(newSpecialty: string): void {
    this.specialty = newSpecialty;
  }
}

function DoctorCard({ doctorData, openModal }: DoctorCardProps): JSX.Element {
  const doctor = new DoctorDetails(
    doctorData.image,
    doctorData.name,
    doctorData.experience,
    doctorData.specialty,
    doctorData.hour_price
  )

  const handleDoctorClick = () => {
    if (doctor) {
      openModal(
        <div>
          <h2 className="text-lg font-bold">{doctor.name}</h2>
          <p>{doctor.specialty}</p>
          <p>Precio por hora: ${doctor.hour_price}</p>
        </div>
      );
    }
  };

  if (!doctor) {
    return <div>Loading doctor information...</div>;
  }

  if (doctor.specialty === "Cirujano") {
    doctor.updateSpecialty("Medico Cirujano")
  }

  return (
    <div onClick={handleDoctorClick}>
      <Card className="max-w-sm w-full mx-auto shadow-lg rounded-lg overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-bold">{doctor.name}</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {doctor.specialty}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm text-gray-700">
            {`Experiencia: ${doctor.experience} años`}
          </p>
          <p className="mt-4">
            {doctor.getDetailedInfo()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default withModal(DoctorCard);
