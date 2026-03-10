import { Link } from 'react-router-dom'
import posgradoLogo from '@/assets/images/escuela_dePosgrado_imagotipo.png'
import facebookIcon from '@/assets/footer_logos/icons8-facebook.svg'
import youtubeIcon from '@/assets/footer_logos/icons8-youtube.svg'
import instagramIcon from '@/assets/footer_logos/icons8-instagram-96.png'
import tiktokIcon from '@/assets/footer_logos/icons8-tiktok.svg'
import twitterIcon from '@/assets/footer_logos/icons8-x.svg'
import libroReclamacionesImg from '@/assets/footer_logos/libro_Reclamaciones.png'
import suneduLogo from '@/assets/footer_logos/SUNEDU.svg'
import './Footer.css'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/udh.universidaddehuanuco',
    color: '#1877F2',
    icon: <img src={facebookIcon} alt="Facebook" style={{ width: '100%', height: 'auto' }} />
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@udheducacionadistancia',
    color: '#FF0000',
    icon: <img src={youtubeIcon} alt="YouTube" style={{ width: '100%', height: 'auto' }} />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/udh_oficial/',
    color: '#E1306C',
    icon: <img src={instagramIcon} alt="Instagram" style={{ width: '100%', height: 'auto' }} />
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@udh_2005',
    color: '#ff0050',
    icon: <img src={tiktokIcon} alt="TikTok" style={{ width: '100%', height: 'auto' }} />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/udhuanuco',
    color: '#1DA1F2',
    icon: <img src={twitterIcon} alt="Twitter" style={{ width: '100%', height: 'auto' }} />
  }
]

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top-accent"></div>
      
      <div className="footer-main">
        {/* Col 1: Branding y Contacto */}
        <div className="footer-col">
          <div className="footer-brand">
            <img src={posgradoLogo} alt="Escuela de Posgrado UDH" style={{ maxWidth: '200px', height: 'auto' }} />
          </div>
          <div className="footer-contact">
            <p className="footer-contact-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <strong>Sede Central</strong>
            </p>
            <p>Jr. Hermilio Valdizán #871 - Huánuco</p>
            <p>Teléfono: (51-62) 519773</p>
            
            <p className="footer-contact-title footer-spacer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <strong>Ciudad Universitaria</strong>
            </p>
            <p>Carretera Central km 2.5 - Huánuco</p>
            <p>Teléfono: (51-62) 515151</p>
          </div>
          
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={`Visitar ${social.name} de UDH`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Navegación Rápida */}
        <div className="footer-col">
          <h3 className="footer-title">Navegación Rápida</h3>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/admision">Admisión 2026-1</Link></li>
            <li><Link to="/maestrias">Maestrías</Link></li>
            <li><Link to="/doctorados">Doctorados</Link></li>
            <li><Link to="/segunda-especialidad">Segunda Especialidad</Link></li>
            <li><Link to="/requisitos">Requisitos de Ingreso</Link></li>
          </ul>
        </div>

        {/* Col 3: Institucional */}
        <div className="footer-col">
          <h3 className="footer-title">Institucional</h3>
          <ul className="footer-links">
            <li><a href="#">Reglamento de Grados y Títulos</a></li>
            <li><a href="#">Portal de Transparencia</a></li>
            <li><a href="#">Directorio Institucional</a></li>
            <li><a href="#">Defensoría Universitaria</a></li>
            <li><Link to="/faq">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto">Ubicación y Contactos</Link></li>
          </ul>
        </div>

        {/* Col 4: Libro de Reclamaciones & Certificaciones */}
        <div className="footer-col footer-col--legal">
          <a href="#" className="footer-complaints-link" aria-label="Libro de Reclamaciones Digital">
            <img src={libroReclamacionesImg} alt="Libro de Reclamaciones" className="footer-complaints-img" />
          </a>

          <div className="footer-certifications">
             <img src={suneduLogo} alt="Licenciada por SUNEDU" className="footer-sunedu-img" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Escuela de Posgrado - Universidad de Huánuco. Todos los derechos reservados.
        </p>
        <div className="footer-legal-links">
          <a href="#">Política de Privacidad</a>
          <span className="footer-separator">|</span>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  )
}
