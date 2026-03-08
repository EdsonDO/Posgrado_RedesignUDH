import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from '@/layouts/MainLayout/MainLayout'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const AdmisionPage = lazy(() => import('@/pages/AdmisionPage/AdmisionPage'))
const MaestriasPage = lazy(() => import('@/pages/MaestriasPage/MaestriasPage'))
const DoctoradosPage = lazy(() => import('@/pages/DoctoradosPage/DoctoradosPage'))
const SegundaEspPage = lazy(() => import('@/pages/SegundaEspPage/SegundaEspPage'))
const RequisitosPage = lazy(() => import('@/pages/RequisitosPage/RequisitosPage'))
const FAQPage = lazy(() => import('@/pages/FAQPage/FAQPage'))
const ContactoPage = lazy(() => import('@/pages/ContactoPage/ContactoPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'admision', element: <AdmisionPage /> },
      { path: 'maestrias', element: <MaestriasPage /> },
      { path: 'doctorados', element: <DoctoradosPage /> },
      { path: 'segunda-especialidad', element: <SegundaEspPage /> },
      { path: 'requisitos', element: <RequisitosPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'contacto', element: <ContactoPage /> },
    ],
  },
])
