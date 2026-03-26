# p4

Práctica 4 de PAT: web de ocio nocturno en versión estática usando solo HTML y CSS.

## Descripción general

Este proyecto implementa una web temática de eventos nocturnos con 4 páginas conectadas:

- Inicio con agenda semanal y contenido multimedia.
- Catálogo de productos/eventos.
- Carrito de ejemplo con resumen estático.
- Contacto con formulario y selector opcional de producto.

No hay lógica de frontend ni backend: toda la web es contenido estático.

## Estructura del proyecto

- `index.html`: portada y agenda semanal.
- `productos.html`: tabla y tarjetas del catálogo en HTML fijo.
- `carrito.html`: resumen de compra estático para maqueta.
- `contacto.html`: formulario de contacto con selector de producto.
- `styles.css`: estilos globales y responsive.
- `assets/media/`: carpeta de imágenes, vídeo y audio.

## Funcionalidades implementadas

- Navegación completa entre las 4 páginas.
- Diseño coherente, responsive y tipografía moderna.
- Catálogo completo presentado en tabla y tarjetas.
- Carrito maquetado con totales de ejemplo.
- Sección promocional extra en carrito con imagen (`imagen-coche.jpeg`).
- Formulario de contacto con campos básicos y selección opcional de producto.

## Agenda y catálogo (estado actual)

Eventos y productos ajustados al contenido actual:

- Lunes (Azúcar): salsa temática.
- Martes (Maracas): macarena trajeados.
- Miércoles (Coconut): batalla improvisada estilo FMS patrocinada por JD.
- Jueves (Kharma): experiencia temática.
- Viernes (CODE/Fabrik): mesa techno + kit bienestar.
- Sábado (Barceló): reggaeton classics con reservado.
- Domingo (Jowke): resaca pool party.

## Recursos multimedia esperados

Ejemplos de archivos usados por el proyecto:

- `assets/media/imagen-azucar.jpeg`
- `assets/media/imagen-maracas.jpeg`
- `assets/media/imagen-coconut.jpeg`
- `assets/media/imagen-kharma.jpeg`
- `assets/media/imagen-fabrik.jpeg`
- `assets/media/imagen-barcelo.jpeg`
- `assets/media/imagen-jowke.jpeg`
- `assets/media/imagen-coche.jpeg`
- `assets/media/video-correcaminos.mp4`
- `assets/media/audio-miniboom.ogg`

## Limitaciones actuales

- No hay backend ni base de datos.
- El formulario de contacto no envía datos a servidor.
- El carrito y descuentos no son interactivos en esta versión.
- No hay autenticación ni pago real.

## Ejecución local

Al ser una web estática:

1. Abre `index.html` en el navegador.
2. Navega por `productos.html`, `carrito.html` y `contacto.html`.

## Despliegue en GitHub Pages

URL de despliegue:

`https://Vicente-Perez-Garbin.github.io/p4/`
