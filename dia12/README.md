# Web Semantica
Etiquetas HTML con significado, en lugar de usar solo <div> o <span> para todo, se usan etiquetas que reflejan el propósito del contenido como: header, article, section, nav, footer, aside, main, figure y figcaption...

## Ejemplos de etiquetas semánticas 

- Header: encabezado de la página, sección o árticulo.
    Propiedades:
    - Incluye elementos como Logo, Texto, menus de navegación.
    - No puede haber múltiples headers en una misma página.
    - No puede haber un header dentro de un footer, o otro header.

<div class= "header">
    <nav></nav>
</div>

- Footer: pie de página de un sitio web o una sección. 
    Propiedades: 
    - puede haber múltiples footer en una misma página.
    - puede incluir info como: 
        - Info de contacto
        - enlaces a RRSS
        - mapa del sitio
        - formulario de contacto 
        - créditos 

- Nav: un conjunto de enlaces de navegación principal. 
    - no todos los links deben estar dentro de nav, ya que los e-readders pueden omitir los navs al leer el contenido.

- Main: el contenedor para el contenido principal de la página.
    - debe haber uno solo
    - el main no debe incluir contenido de otras secciones como x ej. logos, sidebar, navegación, etc
    - no puede ser hijo de etiquetas: article, aside, footer, header, nav...

- Aside: define un contenido indirectam. con el contenido principal, x ej.: un sidebar.
    - Elementos que suelen estar en un aside: biografía del autor, publicidad, enlaces relacionados, info de perfil

- Section: define una sección de una página, donde se agregan los contenidos relacionados, normalmente incluye un título. Una web se compone de multiples secciones, y cada un acon su multiple proposito.
    - capítulo
    - introducción
    - notivias
    - info de contacto

- Article: define un contenido independiente. El mismo puede ser compartido o reutilizado en otro sitio sin requerir contexto.
    - Suele incluir un titulo
    - Ejemplos de uso: 
        - un spot de un blog
        - un artículo de una revista
        - comentarip de un usuario
        - tarjeta de producto

<!-- tanto las secciones como los articulos pueden estar uno dentro de otro -->

- Figura: define elementos autocontenidos, como una imagen, un diagrama o gráfico, una tabla, una foto... Dentro de ella se suele usar "figcaption" para describir este contenido. 

<figura> 
     <img src="" alt="mi imagen">
     <figcaption>Fig1. - Imagen de prueba </figcaption>
</figura>

- Mark: define un texto resaltado, normalmente se muestra con un fondo amarillo.
<mark>texto resaltado</mark>


# Ejemplo completo de una página web semántica
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Página Web Semántica</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Bienvenidos a mi página web</h1>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>Sobre mí</h2>
            <p>Este es un texto sobre mi experiencia en desarrollo web.</p>
        </section>

        <article>
            <h2>Un artículo interesante</h2>
            <p>Este artículo explica la importancia de la web semántica.</p>
        </article>
    </main>

    <footer>
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>

</body>
</html>
```