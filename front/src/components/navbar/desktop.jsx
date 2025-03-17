import {
  NavigationMenu,
  NavigationMenuItem as BaseNavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Link } from 'react-router';

import { useNavigate } from 'react-router'
import { routes } from '@/config/routes'
import { useAuth } from '@/providers/AuthContext';

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
    <NavigationMenu className={`${bgColor} px-8`}>
      <NavigationMenuList className="w-screen flex items-center justify-between px-24">
        <div className="flex space-x-4">
          {routes.map((route, index) => (
            <NavigationMenuItem href={route.path} text={route.text} key={index} />
          ))}
        </div>
        <BaseNavigationMenuItem className="">
          <p className="text-xl p-2 bg-white rounded-full" onClick={handleLoginOrCloseSession}>
            {user ? "Cerrar Sesión" : "Login"}
          </p>
        </BaseNavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function NavigationMenuItem({ href, text }) {
  return (
    <BaseNavigationMenuItem className="my-4 pl-8">
      <Link to={`${href}`} className={`${bgColor} ${textColor} text-2xl`}>
        {text}
      </Link>
    </BaseNavigationMenuItem >
  )

}
