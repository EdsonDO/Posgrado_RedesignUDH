/* ================================================
   MAESTRÍAS DATA — Escuela de Posgrado UDH
   Fuentes: udh.edu.pe/tasas.aspx, mallacurricular.aspx
   ================================================ */

export interface ProgramaMaestria {
  mencion: string
  pension: number
  matricula: number
}

export interface TasaEducativa {
  descripcion: string
  monto: number
}

export interface TasaCategoria {
  titulo: string
  items: TasaEducativa[]
}

export interface PlanEstudio {
  nro: number
  programa: string
  planUrl?: string
  modUrl?: string
}

/* ── Tab 1: Programas y Costos (Maestrías a Distancia) ── */
export const programasMaestria: ProgramaMaestria[] = [
  { mencion: 'Derecho Penal', pension: 467.96, matricula: 183.75 },
  { mencion: 'Derecho Procesal', pension: 401.12, matricula: 157.50 },
  { mencion: 'Derecho Civil y Comercial', pension: 401.12, matricula: 157.50 },
  { mencion: 'Derecho del Trabajo y Seguridad Social', pension: 401.12, matricula: 157.50 },
  { mencion: 'Auditoría y Tributación', pension: 401.12, matricula: 157.50 },
  { mencion: 'Gestión Pública', pension: 467.96, matricula: 183.75 },
  { mencion: 'Salud Pública y Docencia Universitaria', pension: 401.12, matricula: 157.50 },
  { mencion: 'Gerencia en Servicios de Salud', pension: 401.12, matricula: 157.50 },
  { mencion: 'Odontoestomatología', pension: 401.12, matricula: 157.50 },
  { mencion: 'Gerencia en Sistemas y Tecnologías de Información', pension: 401.12, matricula: 157.50 },
  { mencion: 'Gestión Ambiental y Desarrollo Sostenible', pension: 401.12, matricula: 157.50 },
  { mencion: 'Docencia en Educación Superior e Investigación', pension: 401.12, matricula: 157.50 },
  { mencion: 'Docencia y Gerencia Educativa', pension: 401.12, matricula: 157.50 },
  { mencion: 'Psicología Educativa', pension: 401.12, matricula: 157.50 },
]

/* ── Tab 2: Tasas de Servicios Educativos (Agrupadas) ── */
export const tasasEducativas: TasaCategoria[] = [
  {
    titulo: 'Matrícula General',
    items: [
      { descripcion: 'Matrícula a la Universidad de Huánuco', monto: 126.00 },
    ]
  },
  {
    titulo: 'Inscripción de Cursos — Presencial',
    items: [
      { descripcion: 'Derecho y Ciencias Políticas', monto: 243.35 },
      { descripcion: 'Obstetricia', monto: 239.16 },
      { descripcion: 'Enfermería', monto: 239.16 },
      { descripcion: 'Odontología', monto: 409.14 },
      { descripcion: 'Psicología', monto: 243.35 },
      { descripcion: 'Ingeniería de Sistemas', monto: 258.06 },
      { descripcion: 'Ingeniería Civil', monto: 270.09 },
      { descripcion: 'Arquitectura', monto: 270.09 },
      { descripcion: 'Ingeniería Ambiental', monto: 270.09 },
      { descripcion: 'Contabilidad y Finanzas', monto: 210.59 },
      { descripcion: 'Administración de Empresas', monto: 210.59 },
      { descripcion: 'Marketing y Negocios Internacionales', monto: 246.02 },
      { descripcion: 'Turismo, Hotelería y Gastronomía', monto: 246.02 },
      { descripcion: 'Educación Básica: Inicial y Primaria', monto: 165.80 },
    ]
  },
  {
    titulo: 'Pensiones — Presencial',
    items: [
      { descripcion: 'Derecho y Ciencias Políticas', monto: 486.69 },
      { descripcion: 'Obstetricia', monto: 478.32 },
      { descripcion: 'Enfermería', monto: 478.32 },
      { descripcion: 'Odontología', monto: 818.28 },
      { descripcion: 'Psicología', monto: 486.69 },
      { descripcion: 'Ingeniería de Sistemas', monto: 516.11 },
      { descripcion: 'Ingeniería Civil', monto: 540.17 },
      { descripcion: 'Arquitectura', monto: 540.17 },
      { descripcion: 'Ingeniería Ambiental', monto: 540.17 },
      { descripcion: 'Contabilidad y Finanzas', monto: 421.18 },
      { descripcion: 'Administración de Empresas', monto: 421.18 },
      { descripcion: 'Marketing y Negocios Internacionales', monto: 492.03 },
      { descripcion: 'Turismo, Hotelería y Gastronomía', monto: 492.03 },
      { descripcion: 'Educación Básica: Inicial y Primaria', monto: 331.59 },
    ]
  },
  {
    titulo: 'Inscripción de Cursos — Semipresencial',
    items: [
      { descripcion: 'Derecho y Ciencias Políticas', monto: 200.56 },
      { descripcion: 'Contabilidad y Finanzas', monto: 200.56 },
      { descripcion: 'Administración de Empresas', monto: 200.56 },
    ]
  },
  {
    titulo: 'Pensiones — Semipresencial',
    items: [
      { descripcion: 'Derecho y Ciencias Políticas', monto: 401.12 },
      { descripcion: 'Contabilidad y Finanzas', monto: 401.12 },
      { descripcion: 'Administración de Empresas', monto: 401.12 },
    ]
  },
  {
    titulo: 'Inscripción de Cursos — Distancia',
    items: [
      { descripcion: 'Derecho y Ciencias Políticas', monto: 200.56 },
      { descripcion: 'Contabilidad y Finanzas', monto: 200.56 },
      { descripcion: 'Administración de Empresas', monto: 200.56 },
    ]
  },
  {
    titulo: 'Pensiones — Distancia',
    items: [
      { descripcion: 'Derecho y Ciencias Políticas', monto: 401.12 },
      { descripcion: 'Contabilidad y Finanzas', monto: 401.12 },
      { descripcion: 'Administración de Empresas', monto: 401.12 },
    ]
  },
  {
    titulo: 'Matrículas de Maestría — Presencial',
    items: [
      { descripcion: 'Derecho Civil y Comercial', monto: 157.50 },
      { descripcion: 'Derecho Penal', monto: 183.75 },
      { descripcion: 'Derecho Procesal', monto: 157.50 },
      { descripcion: 'Salud Pública y Docencia Universitaria', monto: 157.50 },
      { descripcion: 'Gerencia en Servicios de Salud', monto: 157.50 },
      { descripcion: 'Odontoestomatología', monto: 157.50 },
      { descripcion: 'Gerencia en Sistemas y Tecnologías de Información', monto: 157.50 },
      { descripcion: 'Gestión Ambiental y Desarrollo Sostenible', monto: 157.50 },
      { descripcion: 'Docencia en Educación Superior e Investigación', monto: 157.50 },
      { descripcion: 'Docencia y Gerencia Educativa', monto: 157.50 },
      { descripcion: 'Psicología Educativa', monto: 157.50 },
      { descripcion: 'Gestión Pública', monto: 183.75 },
      { descripcion: 'Auditoría y Tributación', monto: 157.50 },
    ]
  },
  {
    titulo: 'Pensiones de Maestría — Presencial',
    items: [
      { descripcion: 'Derecho Civil y Comercial', monto: 401.12 },
      { descripcion: 'Derecho Penal', monto: 467.96 },
      { descripcion: 'Derecho Procesal', monto: 401.12 },
      { descripcion: 'Salud Pública y Docencia Universitaria', monto: 401.12 },
      { descripcion: 'Gerencia en Servicios de Salud', monto: 401.12 },
      { descripcion: 'Odontoestomatología', monto: 401.12 },
      { descripcion: 'Gerencia en Sistemas y Tecnologías de Información', monto: 401.12 },
      { descripcion: 'Gestión Ambiental y Desarrollo Sostenible', monto: 401.12 },
      { descripcion: 'Docencia en Educación Superior e Investigación', monto: 401.12 },
      { descripcion: 'Docencia y Gerencia Educativa', monto: 401.12 },
      { descripcion: 'Psicología Educativa', monto: 401.12 },
      { descripcion: 'Gestión Pública', monto: 467.96 },
      { descripcion: 'Auditoría y Tributación', monto: 401.12 },
    ]
  },
  {
    titulo: 'Matrículas de Maestría — Distancia',
    items: [
      { descripcion: 'Derecho Civil y Comercial', monto: 157.50 },
      { descripcion: 'Derecho Penal', monto: 183.75 },
      { descripcion: 'Derecho Procesal', monto: 157.50 },
      { descripcion: 'Salud Pública y Docencia Universitaria', monto: 157.50 },
      { descripcion: 'Gerencia en Servicios de Salud', monto: 157.50 },
      { descripcion: 'Odontoestomatología', monto: 157.50 },
      { descripcion: 'Gerencia en Sistemas y Tecnologías de Información', monto: 157.50 },
      { descripcion: 'Gestión Ambiental y Desarrollo Sostenible', monto: 157.50 },
      { descripcion: 'Docencia en Educación Superior e Investigación', monto: 157.50 },
      { descripcion: 'Docencia y Gerencia Educativa', monto: 157.50 },
      { descripcion: 'Psicología Educativa', monto: 157.50 },
      { descripcion: 'Gestión Pública', monto: 183.75 },
      { descripcion: 'Auditoría y Tributación', monto: 157.50 },
    ]
  },
  {
    titulo: 'Pensiones de Maestría — Distancia',
    items: [
      { descripcion: 'Derecho Civil y Comercial', monto: 401.12 },
      { descripcion: 'Derecho Penal', monto: 467.96 },
      { descripcion: 'Derecho Procesal', monto: 401.12 },
      { descripcion: 'Salud Pública y Docencia Universitaria', monto: 401.12 },
      { descripcion: 'Gerencia en Servicios de Salud', monto: 401.12 },
      { descripcion: 'Odontoestomatología', monto: 401.12 },
      { descripcion: 'Gerencia en Sistemas y Tecnologías de Información', monto: 401.12 },
      { descripcion: 'Gestión Ambiental y Desarrollo Sostenible', monto: 401.12 },
      { descripcion: 'Docencia en Educación Superior e Investigación', monto: 401.12 },
      { descripcion: 'Docencia y Gerencia Educativa', monto: 401.12 },
      { descripcion: 'Psicología Educativa', monto: 401.12 },
      { descripcion: 'Gestión Pública', monto: 467.96 },
      { descripcion: 'Auditoría y Tributación', monto: 401.12 },
    ]
  },
]

/* ── Tab 3: Planes de Estudio y Mallas Curriculares ── */
export const planesEstudio: PlanEstudio[] = [
  { nro: 1, programa: 'P01 Derecho y Ciencias Políticas', planUrl: '#', modUrl: '#' },
  { nro: 2, programa: 'P02 Obstetricia', planUrl: '#', modUrl: '#' },
  { nro: 3, programa: 'P03 Enfermería', planUrl: '#', modUrl: '#' },
  { nro: 4, programa: 'P04 Odontología', planUrl: '#', modUrl: '#' },
  { nro: 5, programa: 'P05 Psicología', planUrl: '#', modUrl: '#' },
  { nro: 6, programa: 'P06 Ingeniería de Sistemas e Informática', planUrl: '#', modUrl: '#' },
  { nro: 7, programa: 'P07 Ingeniería Civil', planUrl: '#', modUrl: '#' },
  { nro: 8, programa: 'P08 Arquitectura', planUrl: '#', modUrl: '#' },
  { nro: 9, programa: 'P09 Ingeniería Ambiental', planUrl: '#', modUrl: '#' },
  { nro: 10, programa: 'P10 Educación Básica: Inicial y Primaria', planUrl: '#', modUrl: '#' },
  { nro: 11, programa: 'P11 Educación: Especialidad Idioma Extranjero Inglés', planUrl: '#' },
  { nro: 12, programa: 'P12 Contabilidad y Finanzas', planUrl: '#', modUrl: '#' },
  { nro: 13, programa: 'P13 Administración de Empresas', planUrl: '#', modUrl: '#' },
  { nro: 14, programa: 'P14 Marketing y Negocios Internacionales', planUrl: '#', modUrl: '#' },
  { nro: 15, programa: 'P15 Turismo, Hotelería y Gastronomía', planUrl: '#', modUrl: '#' },
  { nro: 16, programa: 'P16 Maestría en Derecho, mención en Derecho del Trabajo y Seguridad Social', planUrl: '#' },
  { nro: 17, programa: 'P17 Maestría en Derecho, mención en Derecho Penal', planUrl: '#' },
  { nro: 18, programa: 'P18 Maestría en Derecho, mención en Derecho Civil y Comercial', planUrl: '#' },
  { nro: 19, programa: 'P19 Maestría en Derecho, mención en Derecho Procesal', planUrl: '#' },
  { nro: 20, programa: 'P20 Doctorado en Derecho', planUrl: '#' },
  { nro: 21, programa: 'P21 Maestría en Ciencias de la Salud, mención en Salud Pública y Docencia Universitaria', planUrl: '#' },
  { nro: 22, programa: 'P22 Maestría en Ciencias de la Salud, mención en Gerencia en Servicios de Salud', planUrl: '#' },
  { nro: 23, programa: 'P23 Maestría en Ciencias de la Salud, mención en Odontoestomatología', planUrl: '#' },
  { nro: 24, programa: 'P24 Doctorado en Ciencias de la Salud', planUrl: '#' },
  { nro: 25, programa: 'P25 Maestría en Ingeniería de Sistemas, mención en Gerencia de Sistemas y Tecnologías de Información', planUrl: '#' },
  { nro: 26, programa: 'P26 Maestría en Ingeniería, mención en Gestión Ambiental y Desarrollo Sostenible', planUrl: '#' },
  { nro: 27, programa: 'P27 Maestría en Ciencias de la Educación, mención en Docencia en Educación Superior e Investigación', planUrl: '#' },
  { nro: 28, programa: 'P28 Maestría en Ciencias de la Educación, mención en Psicología Educativa', planUrl: '#' },
  { nro: 29, programa: 'P29 Maestría en Ciencias de la Educación, mención en Docencia y Gerencia Educativa', planUrl: '#' },
  { nro: 30, programa: 'P30 Doctorado en Ciencias de la Educación', planUrl: '#' },
  { nro: 31, programa: 'P31 Maestría en Ciencias Contables, mención en Auditoría y Tributación', planUrl: '#' },
  { nro: 32, programa: 'P32 Maestría en Ciencias Administrativas, mención en Gestión Pública', planUrl: '#' },
  { nro: 33, programa: 'P33 Derecho y Ciencias Políticas — Semipresencial', planUrl: '#' },
  { nro: 34, programa: 'P34 Psicología — Semipresencial', planUrl: '#' },
  { nro: 35, programa: 'P35 Contabilidad y Finanzas — Semipresencial', planUrl: '#', modUrl: '#' },
  { nro: 36, programa: 'P36 Administración de Empresas — Semipresencial', planUrl: '#', modUrl: '#' },
]
