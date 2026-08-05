# Portafolio Andrew — Natural con Parcelas Interactivas

Este portafolio es una aplicación desarrollada con **Astro**, **Tailwind CSS** y **JavaScript Vanilla**, implementando un diseño orgánico con perspectiva isométrica y animaciones interactivas.

## 🚀 Estructura del proyecto

```text
/
├── public/                # Assets estáticos (imágenes, currículums, fuentes, logotipos)
├── src/
│   └── pages/
│       └── index.astro    # Página principal interactiva
├── pnpm-lock.yaml         # Control estricto de dependencias con pnpm
└── package.json           # Declaración de dependencias y scripts de construcción
```

## 🔐 Seguridad y Gestión de Paquetes (`pnpm`)

Por razones de rendimiento y seguridad, este proyecto utiliza exclusivamente **`pnpm`** para la gestión de dependencias. Además, se han configurado permisos estrictos de ejecución para scripts de compilación en `package.json` (`onlyBuiltDependencies`).

## 🧞 Comandos de Desarrollo

Todos los comandos deben ejecutarse desde la terminal en el directorio raíz usando `pnpm`:

| Comando               | Acción                                                 |
| :-------------------- | :----------------------------------------------------- |
| `pnpm install`        | Instala las dependencias del proyecto de forma segura  |
| `pnpm dev`            | Inicia el servidor de desarrollo en `localhost:4321`   |
| `pnpm run build`      | Compila el sitio de producción de forma estática       |
| `pnpm run preview`    | Previsualiza localmente el sitio ya compilado          |
| `pnpm astro --help`   | Muestra la ayuda de la CLI de Astro                    |
