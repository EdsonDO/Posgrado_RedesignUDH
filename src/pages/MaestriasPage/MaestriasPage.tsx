import { useState } from 'react'
import { programasMaestria, tasasEducativas, planesEstudio } from './maestriasData'
import heroImg from '@/assets/images/imagenref2.png'
import './MaestriasPage.css'

const tabs = ['Programas y Costos', 'Tasas Detalladas', 'Planes de Estudio'] as const
type TabId = typeof tabs[number]

const headerColors = ['teal', 'saffron', 'zomp', 'blue', 'green', 'jet']

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

function MaestriasPage() {
  const [activeTab, setActiveTab] = useState<TabId>('Programas y Costos')

  return (
    <>
      {/* ── HERO ── */}
      <section className="maestrias-hero">
        <div className="maestrias-hero__img-half">
          <img src={heroImg} alt="" aria-hidden="true" />
        </div>
        <div className="maestrias-hero__content-half">
          <div className="maestrias-hero__content">
            <span className="maestrias-hero__tag">Escuela de Posgrado</span>
            <h1 className="maestrias-hero__title">Maestrías</h1>
            <p className="maestrias-hero__subtitle">
              14 programas de maestría orientados a la investigación y
              especialización profesional en diversas áreas del conocimiento.
            </p>
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <section className="maestrias-body">
        <div className="maestrias-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`maestrias-tabs__btn ${activeTab === tab ? 'maestrias-tabs__btn--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── TAB 1: PROGRAMAS Y COSTOS ── */}
        {activeTab === 'Programas y Costos' && (
          <div className="maestrias-panel">
            <div className="maestrias-panel__header">
              <h2 className="maestrias-panel__title">Maestrías a Distancia — Huánuco 2026</h2>
              <p className="maestrias-panel__subtitle">Pensiones de enseñanza y matrículas vigentes</p>
            </div>

            <div className="maestrias-table-wrap">
              <table className="maestrias-table maestrias-table--teal">
                <thead>
                  <tr>
                    <th>Mención</th>
                    <th>Pensión (S/)</th>
                    <th>Matrícula (S/)</th>
                  </tr>
                </thead>
                <tbody>
                  {programasMaestria.map((p, i) => (
                    <tr key={i}>
                      <td>{p.mencion}</td>
                      <td className="maestrias-table__money">{p.pension.toFixed(2)}</td>
                      <td className="maestrias-table__money">{p.matricula.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="maestrias-callout">
              <div className="maestrias-callout__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div>
                <p>La matrícula se paga al iniciar cada semestre académico (02 veces al año).</p>
              </div>
            </div>

            <div className="maestrias-callout">
              <div className="maestrias-callout__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div>
                <p>Duración de los estudios: 01 año, a excepción de las maestrías en Derecho.</p>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: TASAS DETALLADAS ── */}
        {activeTab === 'Tasas Detalladas' && (
          <div className="maestrias-panel">
            <div className="maestrias-panel__header">
              <h2 className="maestrias-panel__title">Tarifas de Servicios Educativos</h2>
              <p className="maestrias-panel__subtitle">Sede Huánuco — Semestre 2026-1</p>
            </div>

            {tasasEducativas.map((cat, ci) => (
              <div key={ci} className="maestrias-tasas-group">
                <h3 className="maestrias-tasas-group__title">{cat.titulo}</h3>
                <div className="maestrias-table-wrap">
                  <table className={`maestrias-table maestrias-table--compact maestrias-table--${headerColors[ci % headerColors.length]}`}>
                    <thead>
                      <tr>
                        <th>Descripción</th>
                        <th>Monto (S/)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.items.map((item, ii) => (
                        <tr key={ii}>
                          <td>{item.descripcion}</td>
                          <td className="maestrias-table__money">{item.monto.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <div className="maestrias-callout">
              <div className="maestrias-callout__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div>
                <p>Incremento del 5% en la tasa establecida por concepto de inscripción de cursos para estudiantes del primer al último ciclo de cada programa académico e ingresantes.</p>
              </div>
            </div>

            <div className="maestrias-callout">
              <div className="maestrias-callout__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div>
                <p>Incremento del 5% en la tasa establecida por concepto de pensión de enseñanza y matrícula para los estudiantes del primer al último ciclo de cada programa académico e ingresantes.</p>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: PLANES DE ESTUDIO ── */}
        {activeTab === 'Planes de Estudio' && (
          <div className="maestrias-panel">
            <div className="maestrias-panel__header">
              <h2 className="maestrias-panel__title">Currículos, Planes de Estudio y Módulos de Competencia</h2>
              <p className="maestrias-panel__subtitle">Programas académicos vigentes ante la SUNEDU</p>
            </div>

            <div className="maestrias-callout">
              <div className="maestrias-callout__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div>
                <p><strong>Nota 01:</strong> Mediante Resolución Nro.1977-2018-R-CU-UDH se declara la vigencia de los 41 programas académicos presentados ante la SUNEDU.</p>
              </div>
            </div>

            <div className="maestrias-callout">
              <div className="maestrias-callout__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div>
                <p><strong>Nota 02:</strong> Mediante Resolución Nro.002-2023-R-AU-UDH se declara la vigencia de los 13 programas académicos y 01 de especialidad de la Escuela de Posgrado.</p>
              </div>
            </div>

            <div className="maestrias-table-wrap">
              <table className="maestrias-table maestrias-table--jet">
                <thead>
                  <tr>
                    <th className="maestrias-table__nro">Nro</th>
                    <th>Programa</th>
                    <th className="maestrias-table__download">Plan de Estudio</th>
                    <th className="maestrias-table__download">Mod. Comp.</th>
                  </tr>
                </thead>
                <tbody>
                  {planesEstudio.map(p => (
                    <tr key={p.nro}>
                      <td className="maestrias-table__nro">{p.nro}</td>
                      <td className="maestrias-table__programa">{p.programa}</td>
                      <td className="maestrias-table__download">
                        {p.planUrl ? (
                          <a href={p.planUrl} className="maestrias-download-btn" target="_blank" rel="noopener noreferrer">
                            <DownloadIcon /> Descargar
                          </a>
                        ) : (
                          <span className="maestrias-download-btn maestrias-download-btn--disabled">—</span>
                        )}
                      </td>
                      <td className="maestrias-table__download">
                        {p.modUrl ? (
                          <a href={p.modUrl} className="maestrias-download-btn" target="_blank" rel="noopener noreferrer">
                            <DownloadIcon /> Descargar
                          </a>
                        ) : (
                          <span className="maestrias-download-btn maestrias-download-btn--disabled">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default MaestriasPage
