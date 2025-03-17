import { routes } from '@/config/routes'

export default function Footer() {
  return (
    <footer className="bg-slate-400 py-10 text-center text-white">
      <div className="container mx-auto px-4">
        {/* Footer Title */}
        <h1 className="text-3xl font-bold mb-4">Clinica médica</h1>

        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Contacto y Redes Sociales</h3>
          <p className="mb-4">
            Nos comprometemos a brindarte la mejor atención médica. Si tienes alguna consulta o deseas agendar una cita, no dudes en contactarnos.
          </p>
          <p>
            <strong>Dirección:</strong> Avenida Principal 123, Ciudad, País <br />
            <strong>Teléfono:</strong> +56 9 1234 5678 <br />
            <strong>Email:</strong> contacto@hospital.com
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-6 mb-8">
          {routes.map((route, index) => (
            <li key={index}>
              <a href={route.path} className="hover:underline">{route.text}</a>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <h3 className="text-xl font-semibold mb-4">Síguenos en nuestras redes sociales</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/hospital"
            title="Facebook"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src="static/img/facebook-icon.png"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.twitter.com/hospital"
            title="Twitter"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src="static/img/twitter-icon.png"
              alt="Twitter"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.instagram.com/hospital"
            title="Instagram"
            target="_blank"
            className="hover:opacity-80"
          >
            <img
              src="static/img/instagram-icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

