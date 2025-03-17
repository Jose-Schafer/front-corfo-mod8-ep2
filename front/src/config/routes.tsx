import Home from '@/views/home'
import MedicalTeam from '@/views/medical-team'
import Contact from '@/views/contact'
import Backoffice from '@/views/backoffice'
import ProtectedRoute from '@/config/protected-route'
import { Routes as BaseRoutes, Route } from "react-router";
import Layout from '../layout.tsx'
import Login from '@/views/login'

export const routes = [
  {
    "path": "/",
    "text": "Inicio",
    "allowedRoles": ["*"],
    "component": (
      <Home />
    )
  },
  {
    "path": "/equipo-medico",
    "text": "Equipo Médico",
    "allowedRoles": ["*"],
    "component": (
      <MedicalTeam />
    )
  },
  {
    "path": "/contacto",
    "text": "Contacto",
    "allowedRoles": ["user"],
    "component": (
      <Contact />
    )
  },
  {
    "path": "/backoffice",
    "text": "Backoffice",
    "allowedRoles": ["admin"],
    "component": (
      <Backoffice />
    )
  }
]

export default function Routes() {
  return (
    <BaseRoutes>
      {routes.map((route, index) => {
        return (
          <Route path={route.path} element={
            <Layout>
              <ProtectedRoute allowedRoles={route.allowedRoles} redirectPath="/login">
                {route.component}
              </ProtectedRoute>
            </Layout>
          } key={index} />
        )
      })}
      <Route path="/login" element={<Login />} />
    </BaseRoutes>
  )
}
