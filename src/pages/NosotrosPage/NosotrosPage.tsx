import directorBg from '@/assets/images/imagenref1.png'
import TypewriterQuote from '@/components/TypewriterQuote/TypewriterQuote'
import './NosotrosPage.css'

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

const NosotrosPage = () => {
  return (
    <div className="nosotros-page animate-fade-in">
      {/* ── 1. INSTITUCIONAL (DIRECTOR + ESENCIA) ── */}
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
    </div>
  )
}

export default NosotrosPage
