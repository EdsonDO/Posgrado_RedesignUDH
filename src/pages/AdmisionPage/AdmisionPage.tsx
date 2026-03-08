import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '@/assets/images/imagenref2.png'
import './AdmisionPage.css'

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const STEPS = [
  {
    title: 'Infórmate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    desc: 'Antes de iniciar tu proceso de postulación, es fundamental que tengas claro qué programa deseas cursar y cuáles son los requisitos que aplican a tu situación.',
    items: [
      'Define la carrera profesional que deseas estudiar: puedes elegir entre Maestría, Doctorado o Segunda Especialidad, según tus metas académicas y profesionales.',
      'Identifica tu modalidad de ingreso. Las modalidades disponibles son: admisión general, traslado externo, profesionales titulados y otros casos especiales. Cada modalidad tiene requisitos diferenciados.',
      'Reúne todos tus documentos requeridos en formato digital PDF. Esto incluye tu título profesional, DNI, constancia de notas, entre otros según la modalidad. Tener todo listo acelerará enormemente tu proceso.',
    ],
    note: null,
  },
  {
    title: 'Inscríbete en línea',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
    desc: 'El registro inicial se realiza completamente en línea. Solo necesitas un correo electrónico válido (de preferencia Gmail) y unos minutos de tu tiempo.',
    items: [
      'Accede al formulario de inscripción en la plataforma oficial de la UDH (enlace disponible en la sección de links rápidos más abajo).',
      'Al completar tu inscripción, se enviará automáticamente a tu correo electrónico las credenciales de acceso al Portal del Postulante — Posgrado UDH.',
      'Revisa tanto tu bandeja de entrada como la carpeta de spam o correo no deseado, ya que en algunos casos el correo puede llegar allí.',
    ],
    note: 'Si no recibes el correo de bienvenida dentro de las siguientes 24 horas, comunícate directamente con tu asesor de admisión. Puedes encontrar sus datos en la sección de Contacto.',
  },
  {
    title: 'Accede al Portal del Postulante',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    desc: 'El Portal del Postulante es tu centro de operaciones. Desde aquí gestionarás toda tu documentación, pagos y el acceso al examen de admisión.',
    items: [
      'Inicia sesión con las credenciales que recibiste por correo electrónico al momento de tu inscripción.',
      'Carga todos tus documentos en formato PDF según los requisitos de tu modalidad de ingreso. Asegúrate de que cada archivo sea legible y esté correctamente orientado.',
      'Adjunta el compromiso de honor firmado, confirmando que presentas todos los requisitos en condiciones de originalidad.',
      'Espera la validación de tus documentos por parte del asesor de admisión asignado. Si existe alguna observación en tus documentos, deberás subsanarla antes de continuar.',
      'Una vez validados todos los requisitos, el sistema generará automáticamente un código único de pago.',
    ],
    note: null,
  },
  {
    title: 'Realiza el pago de inscripción',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    desc: 'El pago se realiza exclusivamente a través de los bancos autorizados, utilizando el código de postulante que el sistema generó para ti.',
    items: [
      'Dirígete al Banco Continental (BBVA) o al Banco de Crédito del Perú (BCP). Puedes pagar por ventanilla, a través de la app del banco, por la web, o en agentes autorizados.',
      'Utiliza tu código de postulante como referencia de pago. Este código es único e intransferible.',
      'El pago debe realizarse como máximo al día hábil siguiente de la generación del código. Si no puedes acercarte el mismo día, puedes pagarlo al día hábil siguiente sin inconveniente.',
    ],
    note: 'Importante: Conserva tu comprobante de pago (físico o digital) como respaldo. Este documento podría ser solicitado en caso de contingencias.',
  },
  {
    title: 'Registro de Identidad Facial',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M15 10l2 2m0-2l-2 2" />
      </svg>
    ),
    desc: 'Este paso es obligatorio y forma parte del protocolo de seguridad de la UDH. El sistema de reconocimiento facial garantiza la autenticidad de cada postulante durante el examen.',
    items: [
      'Una vez actualizado tu pago (generalmente al día hábil siguiente), podrás registrar tu rostro en el Sistema de Reconocimiento Facial, accediendo desde tu Portal del Postulante.',
      'Durante el registro, el sistema tomará múltiples capturas de tu rostro desde distintos ángulos. Asegúrate de estar en un ambiente con buena iluminación.',
      'La suplantación de identidad, el plagio y el fraude durante el examen son acciones sujetas a sanción legal y/o penal según corresponda.',
    ],
    note: 'Los postulantes que ya realizaron el pago y completaron la validación de requisitos deberán registrar su rostro desde su Portal del Postulante Posgrado UDH. Dentro del portal encontrarás un videotutorial con las instrucciones detalladas.',
  },
  {
    title: 'Presenta el Examen de Admisión',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    desc: 'El día del examen, accederás desde tu Portal del Postulante. La plataforma verificará tu identidad facial en tiempo real antes de permitirte iniciar.',
    items: [
      'Verifica con antelación que tu equipo cumple con los requerimientos técnicos: computadora con cámara web funcional, micrófono, conexión a internet estable y un navegador actualizado (Chrome o Edge recomendados).',
      'Accede al examen en la fecha y hora exacta que indica tu convocatoria. Presentarte fuera de horario puede inhabilitar tu participación.',
      'El examen evaluará conocimientos generales y específicos según tu programa de posgrado. Lee detenidamente cada pregunta antes de responder.',
    ],
    note: 'Es responsabilidad exclusiva del postulante verificar que cumple con todos los requerimientos técnicos para el examen de admisión. Realiza una prueba de cámara y micrófono con anticipación.',
  },
  {
    title: 'Consulta de Resultados',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    desc: 'Tras rendir el examen, los resultados serán publicados oficialmente a través de los canales institucionales de la universidad.',
    items: [
      'Los resultados se publican en la página web institucional de la Universidad de Huánuco y en las redes sociales oficiales de la Escuela de Posgrado.',
      'También podrás consultar tu resultado individual ingresando a tu Portal del Postulante con tus credenciales.',
      'En caso de ser admitido, recibirás las instrucciones del siguiente paso (matrícula) directamente en tu correo registrado.',
    ],
    note: null,
  },
  {
    title: 'Proceso de Matrícula',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    desc: '¡Felicidades! Si llegaste hasta aquí, eres oficialmente un ingresante a la Escuela de Posgrado de la UDH. Ahora solo queda formalizar tu matrícula.',
    items: [
      'Comunícate con tu asesor de admisión asignado para recibir las instrucciones detalladas del proceso de matrícula. Cada programa puede tener particularidades.',
      'Completa el pago de la matrícula en los bancos autorizados (BBVA o BCP) siguiendo el mismo procedimiento del pago de inscripción.',
      'Una vez matriculado, recibirás acceso al aula virtual, cronograma de clases, y la información de contacto de tus docentes.',
    ],
    note: null,
  },
]

function AdmisionPage() {
  const [openSteps, setOpenSteps] = useState<Set<number>>(() => new Set(STEPS.map((_, i) => i)))

  const toggleStep = (index: number) => {
    setOpenSteps((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <>
      {/* ── Hero (Diagonal Split — Content Left, Image Right) ── */}
      <section className="admision-hero">
        <div className="admision-hero__content-half">
          <div className="admision-hero__content">
            <span className="admision-hero__tag">Admisión 2026</span>
            <h1 className="admision-hero__title">Proceso de Admisión</h1>
            <p className="admision-hero__subtitle">
              Tu guía completa, paso a paso, para postular a la Escuela de Posgrado
              de la Universidad de Huánuco. Todo lo que necesitas saber, en un solo lugar.
            </p>
          </div>
        </div>
        <div className="admision-hero__img-half">
          <img src={heroImg} alt="" aria-hidden="true" />
        </div>
      </section>

      {/* ── Wizard Stepper ── */}
      <section className="wizard" id="guia">
        <div className="wizard__header">
          <span className="wizard__tag">Paso a paso</span>
          <h2 className="wizard__title">Guía de Admisión Detallada</h2>
        </div>

        <div className="wizard__timeline">
          {STEPS.map((step, i) => {
            const isOpen = openSteps.has(i)
            return (
              <div key={i} className={`wizard-step ${isOpen ? 'wizard-step--open' : ''}`}>
                <div className="wizard-step__number">{i + 1}</div>
                <div
                  className="wizard-step__header"
                  onClick={() => toggleStep(i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleStep(i) }}
                >
                  <div className="wizard-step__icon">{step.icon}</div>
                  <span className="wizard-step__title">{step.title}</span>
                  <div className="wizard-step__chevron">
                    <ChevronDown />
                  </div>
                </div>
                <div className="wizard-step__body">
                  <p className="wizard-step__desc">{step.desc}</p>
                  <ul className="wizard-step__list">
                    {step.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  {step.note && (
                    <div className="wizard-step__note">
                      <strong>Nota:</strong> {step.note}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Quick Links (Split: Title Left + 2x2 Grid Right) ── */}
      <section className="quick-links">
        <div className="quick-links__split">
          <div className="quick-links__left">
            <span className="quick-links__tag">Accesos Directos</span>
            <h2 className="quick-links__title">Links<br /><span>Importantes</span></h2>
          </div>

          <div className="quick-links__grid">
            <a
              href="https://posgrado.udh.edu.pe"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-links__card quick-links__card--saffron"
            >
              <div className="quick-links__card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <span className="quick-links__card-title">Portal del Postulante</span>
              <span className="quick-links__card-desc">Accede a tu cuenta</span>
            </a>

            <Link to="/requisitos" className="quick-links__card quick-links__card--zomp">
              <div className="quick-links__card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="quick-links__card-title">Requisitos</span>
              <span className="quick-links__card-desc">Documentación por modalidad</span>
            </Link>

            <Link to="/contacto" className="quick-links__card quick-links__card--green">
              <div className="quick-links__card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <span className="quick-links__card-title">Asesores</span>
              <span className="quick-links__card-desc">Contacta un asesor</span>
            </Link>

            <Link to="/maestrias" className="quick-links__card quick-links__card--jet">
              <div className="quick-links__card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
              </div>
              <span className="quick-links__card-title">Programas</span>
              <span className="quick-links__card-desc">Maestrías, Doctorados y más</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="admision-cta">
        <h2 className="admision-cta__title">¿Necesitas ayuda con tu postulación?</h2>
        <p className="admision-cta__desc">
          Nuestros asesores de admisión están disponibles para resolver cualquier
          duda y guiarte personalmente en cada paso del proceso.
        </p>
        <Link to="/contacto" className="admision-cta__btn">
          Hablar con un asesor <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  )
}

export default AdmisionPage
