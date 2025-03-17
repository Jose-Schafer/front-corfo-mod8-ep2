import { BsJustify } from "react-icons/bs";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { useNavigate } from 'react-router'
import { routes } from '@/config/routes'
import { useAuth } from '@/providers/AuthContext';

import { Link } from 'react-router';
import { bgColor, textColor } from './constants'

export function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLoginOrCloseSession = () => {
    if (user) {
      navigate("/login")
    }
  }
  return (
    <Drawer>
      <DrawerTrigger className={`${textColor} ${bgColor} rounded-none`}><BsJustify className="text-4xl font-bold" /></DrawerTrigger>
      <DrawerContent className="fixed top-0 left-0">
        <DrawerHeader>
          <DrawerTitle>Menú de navegación</DrawerTitle>
        </DrawerHeader>
        {routes.map((route, index) => (
          <NavigationMenuItem href={route.path} text={route.text} key={index} />
        ))}
        <p className="text-xl p-2 bg-white rounded-full" onClick={handleLoginOrCloseSession}>
          {user ? "Cerrar Sesión" : "Login"}
        </p>
      </DrawerContent>
    </Drawer>
  )
}

function NavigationMenuItem({ href, text }) {
  return (
    <Link to={`${href}`} className={`${textColor} text-2xl mx-4 m-2`}>
      {text}
    </Link>
  )
}
