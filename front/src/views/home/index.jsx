import ServiceList from './services'
export default function Home() {

  const services = [
    {
      "name": "Traumatología",
      "description": "Servicio de atención especializada en el diagnóstico, tratamiento y rehabilitación de lesiones óseas, musculares y articulares. Contamos con un equipo multidisciplinario y tecnología de punta para brindar el mejor cuidado.",
      "image": "public/static/img/traumatologia_h540.png",
    },
    {
      "name": "Rayos x",
      "description": "Servicio de radiología digital para la obtención de imágenes precisas que ayudan en el diagnóstico de diversas condiciones médicas. Ofrecemos resultados rápidos y confiables.",
      "image": "public/static/img/rayos_x_h540.png",
    },
    {
      "name": "Gediatría",
      "description": "Servicio enfocado en la atención integral de adultos mayores, abordando aspectos físicos, psicológicos y sociales para mejorar su calidad de vida y bienestar.",
      "image": "public/static/img/gediatria_h540.png",
    }
  ]

  return (
    <div className="my-8">
      <section className="p-8 bg-gray-100 text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Bienvenidos a Nuestra Clínica</h1>
        <p className="text-lg text-gray-700 mb-6">
          En nuestra clínica, ofrecemos servicios médicos de calidad con un enfoque en la
          excelencia y el cuidado integral. Contamos con especialistas dedicados y
          tecnología avanzada para atender sus necesidades de salud.
        </p>
        <div className="text-left bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Información del Hospital</h2>
          <ul className="text-gray-700 text-lg space-y-2">
            <li>
              <span className="font-medium">Dirección:</span> Av. Salud 123, Ciudad Médica, Chile
            </li>
            <li>
              <span className="font-medium">Número de médicos:</span> 45 especialistas
            </li>
            <li>
              <span className="font-medium">Teléfono:</span> +56 9 1234 5678
            </li>
            <li>
              <span className="font-medium">Horario de atención:</span> Lunes a Viernes, 8:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
      </section>
      <ServiceList services={services} />
    </div>
  )
}
