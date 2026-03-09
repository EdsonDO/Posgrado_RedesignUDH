import { Link } from 'react-router-dom'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import TypewriterQuote from '@/components/TypewriterQuote/TypewriterQuote'
import heroImg from '@/assets/images/imagenref2.png'
import epgLogo from '@/assets/images/escuela_dePosgrado_imagotipo.png'
import campusImg1 from '@/assets/images/imagenref1.png'
import campusImg2 from '@/assets/images/imagenref3.png'
import directorBg from '@/assets/images/imagenref1.png'
import bgStackCard from '@/assets/images/bgStackCard.png'
import Stack from '@/components/Stack/Stack'
import './HomePage.css'

const IconMision = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const IconVision = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
)

const IconValores = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
  </svg>
)

const HomePage = () => {
  return (
    <>
      {/* ── 1. HERO (Diagonal Split) ── */}
      <section className="hero" id="hero">
        <div className="hero__img-half">
          <img src={heroImg} alt="" aria-hidden="true" />
        </div>

        <div className="hero__content-half">
          <div className="hero__content">
            <img
              src={epgLogo}
              alt="Escuela de Posgrado — UDH"
              className="hero__logo"
              draggable={false}
            />

            <h1 className="hero__title">
              Formando líderes para el <span>futuro</span> del Perú
            </h1>

            <p className="hero__subtitle">
              La Escuela de Posgrado de la Universidad de Huánuco impulsa una
              educación orientada a la investigación, el desarrollo científico y la
              actualización profesional continua.
            </p>

            <div className="hero__countdown-wrap">
              <span className="hero__countdown-label">Próxima convocatoria</span>
              <span style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>28 de marzo 2026</span>
              <FlipClockCountdown
                to={new Date("2026-03-28T08:00:00-05:00").getTime()}
                className="hero-flip-clock"
                labels={['DÍAS', 'HORAS', 'MIN', 'SEG']}
                duration={0.5}
              >
                <span style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 600 }}>
                  ¡La convocatoria ha comenzado!
                </span>
              </FlipClockCountdown>
            </div>

            <Link to="/admision" className="hero__cta">
              Inscríbete Ahora
              <span className="hero__cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. OFERTA ACADÉMICA ── */}
      <section className="oferta" id="oferta">
        <div className="oferta__header">
          <span className="oferta__tag">Oferta Académica</span>
          <h2 className="oferta__title">Programas de Posgrado</h2>
        </div>

        <div className="oferta__grid">
          <div className="oferta__card">
            <div className="oferta__card-img">
              <img src={campusImg1} alt="Campus UDH — Maestrías" />
              <div className="oferta__card-img-overlay" />
              <span className="oferta__card-badge">14 programas</span>
            </div>
            <div className="oferta__card-body">
              <h3 className="oferta__card-title">Maestrías</h3>
              <p className="oferta__card-desc">
                Programas orientados a la investigación y especialización
                profesional en diversas áreas del conocimiento.
              </p>
              <Link to="/maestrias" className="oferta__card-link">
                Ver programas <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="oferta__card">
            <div className="oferta__card-img">
              <img src={campusImg2} alt="Campus UDH — Doctorados" />
              <div className="oferta__card-img-overlay" />
              <span className="oferta__card-badge">3 programas</span>
            </div>
            <div className="oferta__card-body">
              <h3 className="oferta__card-title">Doctorados</h3>
              <p className="oferta__card-desc">
                Formación al más alto nivel académico para la generación de
                conocimiento científico original.
              </p>
              <Link to="/doctorados" className="oferta__card-link">
                Ver programas <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="oferta__card">
            <div className="oferta__card-img">
              <img src={heroImg} alt="Campus UDH — Segunda Especialidad" />
              <div className="oferta__card-img-overlay" />
              <span className="oferta__card-badge">Especialización</span>
            </div>
            <div className="oferta__card-body">
              <h3 className="oferta__card-title">Segunda Especialidad</h3>
              <p className="oferta__card-desc">
                Diplomados y programas de especialización diseñados según las
                necesidades académicas y profesionales del entorno.
              </p>
              <Link to="/segunda-especialidad" className="oferta__card-link">
                Ver programas <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NOVEDADES DE ADMISIÓN (VIDEOS) ── */}
      <section className="novedades" id="novedades">
        <div className="novedades__header">
          <span className="novedades__tag">Actualidad</span>
          <h2 className="novedades__title">Novedades del Proceso de Admisión</h2>
        </div>

        <div className="novedades__videos">
          <div className="novedades__video-wrap">
            <iframe
              src="https://www.youtube.com/embed/Ik7irLhWsyU?si=omw9zSy0evQhor_P"
              title="Examen de admisión virtual para posgrado — Maestrías y Doctorados"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="novedades__video-wrap">
            <iframe
              src="https://www.youtube.com/embed/3CecBxGEJDA?si=7duCEQMEoac8F2gj"
              title="Examen de admisión para segunda especialidad"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 4. PROCESO DE ADMISIÓN (STACK SPLIT) ── */}
      <section className="admision-preview" id="admision-preview">
        <div className="admision-preview__split">
          
          <div className="admision-preview__left">
            <span className="admision-preview__tag">¿Cómo postular?</span>
            <h2 className="admision-preview__title">Proceso de Admisión</h2>
            
            <div className="admision-preview__text">
              <p>Descubre cómo unirte a nuestra comunidad académica y empezar tu camino hacia el éxito profesional.</p>
              <p>El proceso de admisión está diseñado para ser rápido, transparente y 100% digital, asegurando que puedas enviar tus documentos sin complicaciones.</p>
              <p>Desliza las tarjetas interactivas de la derecha para conocer los pasos exactos que debes seguir. ¡Prepárate para dar el siguiente paso en tu carrera profesional hoy mismo!</p>
            </div>
          </div>

          <div className="admision-preview__right">
            <div style={{ width: 360, height: 360, marginBottom: '2rem' }}>
              <Stack
                randomRotation={true}
                sensitivity={200}
                sendToBackOnClick={true}
                autoplay={false}
                pauseOnHover={true}
                cards={[
                  <div className="admision-card" key="4">
                    <img src={bgStackCard} alt="" className="admision-card__bg" />
                    <span className="admision-card__number">✓</span>
                    <h3 className="admision-card__title">¡Listo!</h3>
                    <p>Revisa los resultados y prepárate para tu maestría.</p>
                  </div>,
                  <div className="admision-card" key="3">
                    <img src={bgStackCard} alt="" className="admision-card__bg" />
                    <span className="admision-card__number">3</span>
                    <h3 className="admision-card__title">Examen</h3>
                    <p>Paga tu inscripción, registra tu identidad facial y rinde el examen.</p>
                  </div>,
                  <div className="admision-card" key="2">
                    <img src={bgStackCard} alt="" className="admision-card__bg" />
                    <span className="admision-card__number">2</span>
                    <h3 className="admision-card__title">Inscríbete</h3>
                    <p>Regístrate en el Portal del Postulante y sube tus documentos (PDF).</p>
                  </div>,
                  <div className="admision-card" key="1">
                    <img src={bgStackCard} alt="" className="admision-card__bg" />
                    <span className="admision-card__number">1</span>
                    <h3 className="admision-card__title">Infórmate</h3>
                    <p>Elige tu maestría, doctorado o segunda especialidad.</p>
                  </div>
                ]}
              />
            </div>
            
            <Link to="/admision" className="admision-preview__link">
              Ver guía completa <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── 5. CTA FINAL ── */}
      <section className="cta-section" id="cta">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">
            ¿Listo para dar el siguiente paso en tu carrera?
          </h2>
          <p className="cta-section__desc">
            Nuestros asesores están listos para resolver tus dudas y guiarte en
            el proceso de admisión.
          </p>
          <Link to="/contacto" className="cta-section__btn">
            Contactar Asesor <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── 6. INSTITUCIONAL (DIRECTOR + ESENCIA) ── */}
      <div className="institucional-bg">
        <section className="director" id="director">
          <div className="director__bg">
            <img src={directorBg} alt="" aria-hidden="true" />
          </div>

          <div className="director__content">
            <div className="director__text">
              <span className="director__tag">Institucional</span>
              <h2 className="director__title">
                Palabras del Director
              </h2>
              <TypewriterQuote
                text="Con una sólida propuesta educativa, la universidad continúa fortaleciendo su compromiso con la calidad educativa, promoviendo la investigación científica, la innovación y la formación de especialistas capaces de generar soluciones a los desafíos de la sociedad. Invitamos a todos los profesionales interesados en continuar su formación académica a ser parte de esta comunidad universitaria."
                speed={30}
              />
              <div className="director__author">
                <span className="director__author-name">
                  Dr. José Antonio Beraun Barrantes
                </span>
                <span className="director__author-role">
                  Director de la Escuela de Posgrado
                </span>
              </div>
            </div>

            <div className="director__photo">
              <div className="director__photo-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Se insertará una foto aquí</span>
              </div>
            </div>
          </div>
        </section>

        <section className="esencia" id="esencia">
          <div className="esencia__header">
            <span className="esencia__tag">Nuestra Identidad</span>
            <h2 className="esencia__title">Pilares UDH</h2>
          </div>

          <div className="esencia__grid">
            <div className="esencia__card esencia__card--jet">
              <div className="esencia__card-icon" aria-hidden="true">
                <IconMision />
              </div>
              <h3 className="esencia__card-title">Misión</h3>
              <p className="esencia__card-text">
                Formar profesionales con solvencia humanística, científica y
                tecnológica, para contribuir al desarrollo de la región y el país.
                Creamos conocimiento para la solución de los problemas de nuestra
                sociedad, enriquecemos los currículos de estudio y propiciamos la
                recuperación del entorno natural de nuestra zona de influencia.
              </p>
            </div>

            <div className="esencia__card esencia__card--saffron">
              <div className="esencia__card-icon" aria-hidden="true">
                <IconVision />
              </div>
              <h3 className="esencia__card-title">Visión</h3>
              <p className="esencia__card-text">
                Ser una institución líder en el desarrollo regional y nacional,
                reconocida por su excelencia académica, innovación, responsabilidad
                social y compromiso con el desarrollo sostenible.
              </p>
            </div>

            <div className="esencia__card esencia__card--zomp">
              <div className="esencia__card-icon" aria-hidden="true">
                <IconValores />
              </div>
              <h3 className="esencia__card-title">Valores</h3>
              <ul className="esencia__card-list">
                <li>Humanísticos</li>
                <li>Ética Profesional</li>
                <li>Honestidad</li>
                <li>Identidad</li>
                <li>Responsabilidad</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
