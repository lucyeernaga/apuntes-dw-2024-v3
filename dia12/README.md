
# Web Semantica
Etiquetas con significado
- ej de etiquetas no semanticas:  div, span...
- ej de etiquetas semanticas: form, table, article...


## Header
Encabezado de una página, sección o artículo. 
- Incluye elementos como Logo, Texto Introducctorio, menus de navegacion...
- Puede haber múltiples headers en una misma página. 
- No puede haber un header dentro de un footer, o otro header. 

<div class= "header">
    <nav></nav>
</div>


## Footer 
Pie de pagina de un sitio web o una sección

- puede haber multiples footers en una misma pagina
- puede incluir info como: 
    - info de contacto
    - enlaces a RRSS 
    - mapa del sitio 
    - formulario de contacto
    - creditos


## Nav
Un conjunto de enlaces de navegación principal.

- no todos los links deben estar dentro de Nav, ya que los e-readers pueden omitir los navs al leer el contenido.



## Main
El contenedor para el contenido principal de la pagina.

- debe haber uno solo
- el main no debe incluir contenido de otras secciones como por ej. logos, sidebar, navegacion, etc.
- no puede ser hijo de etiquetas: article, aside, footer, header, nav...



## Aside 
Define un contenido indirectamente con el contenido principal, por ej: un sidebar.

elementos que suelen estar en un aside: 
- biografía del autor
- publicidad
- enlaces relacionados 
- info de perfil



## Section
Define una sección de una página, donde se agreuà los contenidos relacionados, normalmente incluye un titulo.
una web se compone de multiples secciones, y cada un acon su multiple proposito.

Ejemplos: 
- capítulo
- introducción
- notivias
- info de contacto



## Article 
define un contenido ´independiente`. El mismo puede ser compartido o reutilizado en otro sitio sin requerr contexto. 

- suele incluir u titulo
Ejemplos de uso: 
    - un spot de un blog
    - un articulo de una revista
    - comentario de un usuario
    - tarjeta de producto

<!-- tanto las secciones como los articulos pueden estar uno dentro de otro -->



## Figura
Define elemtnos autocontenidos, como una imagen, un diagrana o grafico, una tabla, una fotografia...
Dentro de ella se suele utilizar "figcaption" para describir este contenido.


<figura> 
     <img src="ruta-de-imagen.png" alt="mi imagen">
     <figcaption>Fig1. - Imagen de prueba </figcaption>
</figura>



## Mark
Define un texto resaltado, normalmente se muestra con un fondo amarillo. <mark>texto resaltado</mark>