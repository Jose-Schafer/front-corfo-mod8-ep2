import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import PropTypes from 'prop-types'

export default function ServiceList({ services }) {


  return (
    <>
      <h1 className="mb-4">Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Card className="max-w-sm w-full mx-auto shadow-lg rounded-lg overflow-hidden" key={index}>
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card >
        ))}
      </div>
    </>
  )
}

ServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
