# Setup del Proyecto — Posgrado Rediseño UDH

Guía de instalación y configuración para levantar el proyecto en una PC nueva desde cero.

---

## Requisitos Previos

| Herramienta | Versión mínima | Verificar con |
|-------------|---------------|---------------|
| **Node.js** | v18.x o superior | `node -v` |
| **npm** | v9.x o superior | `npm -v` |
| **Git** | Cualquiera | `git --version` |

> Si no tienes Node.js instalado, descárgalo desde [https://nodejs.org](https://nodejs.org) (se recomienda la versión LTS).

---

## 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd Posgrado_RedesignUDH
```

---

## 2. Instalar dependencias

```bash
npm install
```

Esto instalará automáticamente todas las dependencias del proyecto:
- **React 19** + **React DOM**
- **React Router DOM** (enrutamiento SPA)
- **GSAP** (animaciones)
- **@leenguyen/react-flip-clock-countdown** (reloj de cuenta regresiva)
- **Vite** + **TypeScript** (bundler y tipado)

---

## 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Vite levantará un servidor local. Verás algo como:

```
  VITE v6.x.x  ready in XXXms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Abre `http://localhost:5173/` en tu navegador.

---

## 4. Compilar para producción (Opcional)

```bash
npm run build
```

Esto generará la carpeta `dist/` con los archivos estáticos listos para desplegar.

Para previsualizar el build:

```bash
npm run preview
```

---

## 5. Verificar tipado TypeScript

```bash
npx tsc --noEmit
```

Si no muestra ningún error, el proyecto está correctamente tipado.

---

## Estructura del Proyecto

```
Posgrado_RedesignUDH/
├── public/                  # Archivos estáticos
├── src/
│   ├── assets/images/       # Imágenes del proyecto
│   ├── components/          # Componentes reutilizables
│   │   ├── FlipCountdown/   # Cuenta regresiva (flip clock)
│   │   ├── StaggeredMenu/   # Menú lateral animado
│   │   └── TypewriterQuote/ # Cita con efecto máquina de escribir
│   ├── layouts/
│   │   └── MainLayout/      # Layout principal (menú + contenido)
│   ├── pages/               # Páginas del sitio
│   │   ├── HomePage/        # Página de inicio
│   │   ├── AdmisionPage/    # Guía de admisión (Wizard Stepper)
│   │   ├── MaestriasPage/   # Programas de maestría
│   │   ├── DoctoradosPage/  # Programas de doctorado
│   │   ├── SegundaEspPage/  # Segunda especialidad
│   │   ├── RequisitosPage/  # Requisitos de ingreso
│   │   ├── FAQPage/         # Preguntas frecuentes
│   │   └── ContactoPage/    # Contacto y asesores
│   ├── router/              # Configuración de rutas (React Router)
│   ├── styles/              # Estilos globales y tokens de diseño
│   │   ├── variables.css    # Tokens: colores, tipografía, espaciado
│   │   ├── reset.css        # Reset CSS
│   │   └── global.css       # Estilos globales
│   ├── App.tsx              # Componente raíz
│   └── main.tsx             # Punto de entrada
├── index.html               # HTML base
├── vite.config.ts           # Configuración de Vite
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias y scripts
```

---

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo (HMR) |
| `npm run build` | Build de producción |
| `npm run preview` | Previsualizar build |
| `npm run lint` | Ejecutar ESLint |
| `npx tsc --noEmit` | Verificar tipado TS |

---

## Notas

- El proyecto usa **path aliases**: `@/` apunta a `src/`. Esto está configurado en `vite.config.ts` y `tsconfig.app.json`.
- Las rutas del sitio son manejadas por **React Router v7** con lazy loading para cada página.
- Los colores institucionales están definidos en `src/styles/variables.css`.
