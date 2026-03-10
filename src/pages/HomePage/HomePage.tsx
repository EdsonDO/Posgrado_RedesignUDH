import { Link } from 'react-router-dom'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import heroImg from '@/assets/images/imagenref2.png'
import epgLogo from '@/assets/images/escuela_dePosgrado_imagotipo.png'
import campusImg1 from '@/assets/images/imagenref1.png'
import campusImg2 from '@/assets/images/imagenref3.png'
import bgStackCard from '@/assets/images/bgStackCard.png'
import Stack from '@/components/Stack/Stack'
import './HomePage.css'

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
            <div className="admision-preview-stack">
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

      {/* Removed sections to NosotrosPage */}
    </>
  )
}

export default HomePage
