import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import StaggeredMenu from '@/components/StaggeredMenu/StaggeredMenu'
import type { StaggeredMenuItem } from '@/components/StaggeredMenu/StaggeredMenu'
import sidebarLogo from '@/assets/images/imagotipo_udh_sidebar.png'
import Footer from '@/components/Footer/Footer'
import './MainLayout.css'

const menuItems: StaggeredMenuItem[] = [
  { label: 'Inicio', ariaLabel: 'Ir a la página de inicio', link: '/' },
  { label: 'Nosotros', ariaLabel: 'Sobre nosotros', link: '/nosotros' },
  { label: 'Admisión', ariaLabel: 'Ver proceso de admisión', link: '/admision' },
  { label: 'Maestrías', ariaLabel: 'Ver programas de maestría', link: '/maestrias' },
  { label: 'Doctorados', ariaLabel: 'Ver programas de doctorado', link: '/doctorados' },
  { label: '2da Especialidad', ariaLabel: 'Ver segunda especialidad', link: '/segunda-especialidad' },
  { label: 'Requisitos', ariaLabel: 'Ver requisitos de admisión', link: '/requisitos' },
  { label: 'FAQ', ariaLabel: 'Preguntas frecuentes', link: '/faq' },
  { label: 'Contacto', ariaLabel: 'Contactar asesores', link: '/contacto' },
]

function MainLayout() {
  return (
    <div className="main-layout">
      <StaggeredMenu
        position="left"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering
        isFixed
        menuButtonColor="#ffffff"
        openMenuButtonColor="#010200"
        changeMenuColorOnOpen
        colors={['#ECC138', '#5A9E8D']}
        accentColor="#5A9E8D"
        panelLogoUrl={sidebarLogo}
      />

      <main className="main-layout__content">
        <Suspense fallback={<div className="container">Cargando...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
