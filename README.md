# p4

Práctica 4 de PAT: web de ocio nocturno con catálogo y carrito en cliente usando HTML, CSS y JavaScript.

## Descripción general

Este proyecto implementa una web temática de eventos nocturnos con 4 páginas conectadas:

- Inicio con agenda semanal y contenido multimedia.
- Catálogo de productos/eventos.
- Carrito dinámico con persistencia en navegador.
- Contacto con formulario y selección opcional de producto.

Toda la lógica se ejecuta en frontend, sin backend.

## Estructura del proyecto

- `index.html`: portada y agenda semanal.
- `productos.html`: tabla + tarjetas del catálogo.
- `carrito.html`: resumen de compra, cupón y totales.
- `contacto.html`: formulario de contacto.
- `styles.css`: estilos globales y responsive.
- `script.js`: datos del catálogo y lógica dinámica.
- `assets/media/`: carpeta de imágenes, vídeo y audio.

## Qué hace JavaScript en este proyecto

El archivo `script.js` centraliza tanto los datos como el comportamiento:

- Define el catálogo completo (`PRODUCTS`) con id, nombre, sala/evento, precio, descripción y ruta de imagen.
- Genera dinámicamente los productos en `productos.html` (tabla y cards).
- Permite añadir productos al carrito.
- Gestiona el carrito con `localStorage` (altas, eliminación por unidad y persistencia tras recargar).
- Calcula subtotal, descuento y total en `carrito.html`.
- Aplica cupón de descuento (50%) con validación case-insensitive.
- Guarda preferencia de cupón en `localStorage`.
- En `contacto.html`, rellena el desplegable de productos desde `PRODUCTS` y habilita/deshabilita el select según checkbox.
- Inicializa solo la lógica necesaria según `data-page`.

## Funcionalidades implementadas

- Navegación completa entre las 4 páginas.
- Diseño coherente, responsive y tipografía moderna.
- Catálogo dinámico de 7 productos/eventos.
- Botones de "Añadir" en tabla y tarjetas.
- Carrito dinámico con estado persistente.
- Eliminación de productos desde el carrito.
- Sistema de cupón funcional (`AtilanoPonmeUn10`) con 50% de descuento.
- Sección promocional extra en carrito con imagen (`imagen-coche.jpeg`).
- Formulario de contacto con selector condicional de producto.

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
- El formulario de contacto no envía datos a servidor (solo comportamiento de UI).
- No hay autenticación ni pago real.

## Ejecución local

Al ser una web estática:

1. Abre `index.html` en el navegador.
2. Navega por `productos.html`, `carrito.html` y `contacto.html`.

## Despliegue en GitHub Pages

URL de despliegue:

`https://Vicente-Perez-Garbin.github.io/p4/`
