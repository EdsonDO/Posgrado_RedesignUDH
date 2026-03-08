import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import StaggeredMenu from '@/components/StaggeredMenu/StaggeredMenu'
import type { StaggeredMenuItem, StaggeredMenuSocialItem } from '@/components/StaggeredMenu/StaggeredMenu'
import sidebarLogo from '@/assets/images/imagotipo_udh_sidebar.png'
import './MainLayout.css'

const menuItems: StaggeredMenuItem[] = [
  { label: 'Inicio', ariaLabel: 'Ir a la página de inicio', link: '/' },
  { label: 'Admisión', ariaLabel: 'Ver proceso de admisión', link: '/admision' },
  { label: 'Maestrías', ariaLabel: 'Ver programas de maestría', link: '/maestrias' },
  { label: 'Doctorados', ariaLabel: 'Ver programas de doctorado', link: '/doctorados' },
  { label: '2da Especialidad', ariaLabel: 'Ver segunda especialidad', link: '/segunda-especialidad' },
  { label: 'Requisitos', ariaLabel: 'Ver requisitos de admisión', link: '/requisitos' },
  { label: 'FAQ', ariaLabel: 'Preguntas frecuentes', link: '/faq' },
  { label: 'Contacto', ariaLabel: 'Contactar asesores', link: '/contacto' },
]

const socialItems: StaggeredMenuSocialItem[] = [
  { label: 'Facebook', link: 'https://www.facebook.com/universidaddehuanuco' },
  { label: 'Web UDH', link: 'https://udh.edu.pe' },
]

function MainLayout() {
  return (
    <div className="main-layout">
      <StaggeredMenu
        position="left"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
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
    </div>
  )
}

export default MainLayout
