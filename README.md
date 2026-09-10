# Portfolio — José Suárez

Portfolio personal de desarrollador FullStack, construido con **React + Vite**.

## Stack

- React 18
- Vite
- styled-components
- react-router-dom
- react-pdf (visor del CV)
- gh-pages (despliegue)

## Requisitos

- Node.js 18+
- pnpm

## Scripts

| Comando        | Descripción                          |
| -------------- | ------------------------------------ |
| `pnpm start`   | Servidor de desarrollo               |
| `pnpm build`   | Build de producción en `build/`      |
| `pnpm serve`   | Previsualizar el build generado      |
| `pnpm deploy`  | Publicar en GitHub Pages             |

## Estructura

```
src/
  components/   # componentes reutilizables
  pages/        # páginas: Home, About, Works, Resume
  templates/    # plantillas de página
  hooks/        # hooks personalizados
  config.js     # textos, proyectos y redes del portfolio
public/         # assets estáticos y CV en PDF
```

## Despliegue

El sitio se publica con `gh-pages` en la rama `gh-pages` de este repositorio.
