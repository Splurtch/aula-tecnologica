# Mi Aula Virtual

Proyecto hecho con React y Vite, preparado para publicarse como GitHub Pages.

## Publicacion automatica

El repositorio ya queda preparado para que GitHub Pages se actualice automaticamente cada vez que hagas un `push` a la rama `main`.

Flujo normal de trabajo:

1. Haz tus cambios en el proyecto.
2. Comprueba que todo funciona con `npm run build`.
3. Sube los cambios con `git add .`, `git commit -m "tu mensaje"` y `git push origin main`.
4. GitHub Actions compilara el proyecto y publicara la carpeta `dist` en GitHub Pages.

## Configuracion necesaria en GitHub

En el repositorio de GitHub:

1. Entra en `Settings > Pages`.
2. En `Source`, selecciona `GitHub Actions`.

La web quedara publicada en:

`https://splurtch.github.io/aula-tecnologica/`

## Desarrollo local

- `npm install` instala dependencias
- `npm run dev` inicia el entorno local
- `npm run build` genera la version de produccion
