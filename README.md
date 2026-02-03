# 🪨 Rock Clicker

[![Netlify Status](https://api.netlify.com/api/v1/badges/75312030-358d-4479-b27c-5fb8d8159347/deploy-status)](https://app.netlify.com/projects/rock-clicker/deploys)

[Go to Demo](https://rock-clicker.netlify.app/)

Un juego incremental (idle clicker) desarrollado con tecnologías modernas de frontend. Haz clic en rocas para ganar puntos, desbloquea mejoras y observa cómo tu progreso se sincroniza automáticamente en la nube.

## 🛠️ Tech Stack

### Core
- **React 19** - Última versión con hooks modernos y concurrent features
- **Vite 6** - Build tool ultrarrápido con HMR
- **React Router 7** - Enrutamiento client-side

### State Management
- **Zustand** - Gestión de estado ligera y escalable
- **React Context** - Estado de autenticación
- **Local Storage** - Persistencia offline

### Styling
- **Tailwind CSS 4** - Framework CSS utility-first
- **CVA (Class Variance Authority)** - Variantes de componentes type-safe
- **clsx + tailwind-merge** - Utilidades para clases condicionales

### Backend & Database
- **Firebase Authentication** - Email/password y Google OAuth
- **Cloud Firestore** - Base de datos en tiempo real para sincronización

### Development Tools
- **ESLint 9** - Linting con configuración flat config
- **Vite Plugin React** - Soporte React con Fast Refresh

## ✨ Features

### Mecánicas de Juego
- Sistema de puntos por clic
- 8 niveles de mejoras con precios dinámicos
- Generación automática de puntos (CPS - Clicks Per Second)
- Desbloqueo progresivo de mejoras
- Tutorial interactivo

### Autenticación
- Registro e inicio de sesión con email/contraseña
- Autenticación con Google OAuth
- Gestión de sesiones de usuario
- Eliminación de cuenta con re-autenticación

### Sincronización de Datos
- Sistema de almacenamiento híbrido (Local + Cloud)
- Sincronización automática cada segundo
- Juego offline con backup en la nube
- Recuperación de progreso al iniciar sesión

### UI/UX
- Diseño responsive (mobile-first)
- Animaciones interactivas (shake, partículas)
- Tema visual estilo caverna
- Scrollbars personalizados

## 📁 Estructura del Proyecto

```
src/
├── app/              # Routing y componente App principal
├── components/       # Componentes UI reutilizables
├── config/           # Configuración de entorno
├── features/         # Módulos por feature (auth, game, dashboard)
├── lib/              # Inicialización de Firebase
├── utils/            # Funciones auxiliares
└── assets/           # SVGs y estilos
```

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Nat27aly/cookie-clicker.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Añadir credenciales de Firebase

# Iniciar servidor de desarrollo
npm run dev
```

## 📜 Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Ejecutar ESLint
```

## 🔧 Variables de Entorno

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## 📝 GitFlow

Este proyecto utiliza GitFlow para el control de versiones:

1. Crear rama desde `develop`: `feature/nombre-cambio`
2. Desarrollar y hacer commits en la rama feature
3. Abrir Pull Request hacia `develop`
4. Revisión de código por colaboradores
5. Merge a `develop` tras aprobación
