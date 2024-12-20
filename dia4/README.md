# HTML

HTML significa "HyperText Markup Language" (Lenguaje de Marcado de Hipertexto), es un lenguaje que se usa para crear páginas web. Es como un conjunto de instrucciones o "etiquetas" que le dicen a los navegadores web cómo deben mostrar el contenido en una página.

¿Cómo funciona HTML?

- Estructura de la página web: HTML organiza y da forma al contenido de la página, como texto, imágenes, enlaces, listas y otros elementos.
- Etiquetas: Usa etiquetas (por ejemplo h1, p, img) para indicar qué tipo de contenido es cada parte de la página. Las etiquetas están dentro de ángulos (<>) y generalmente vienen en pares, como p (inicio del párrafo) y /p (fin del párrafo).



## Elementos de HTML
En HTML, el contenido de una página web se organiza usando elementos. Los elementos son las partes básicas del código HTML y suelen estar formados por una etiqueta de apertura y una etiqueta de cierre, y lo que hay entre ellas es el contenido de la página.

Aquí te explico algunos de los elementos más comunes en HTML:

1. Etiquetas de Estructura Básica:
    - `HTML`: Todo el contenido de la página está dentro de este elemento. Indica que es un documento HTML.
    - `HEAD`: Contiene información importante de la página, como el título, enlaces a hojas de estilo (CSS), y más. No es visible en la página.
    - `BODY`: Es la parte visible de la página, donde van los textos, imágenes y todo lo que los usuarios verán.

2.  Encabezados:
    - `h1`, `h2`, `h3`, etc.: Son etiquetas para encabezados, donde h1 es el encabezado más grande y h6 el más pequeño. Se usan para títulos y subtítulos.

3. Párrafos
    - `p`: Se usa para crear párrafos de texto.

4. Enlaces
    - `a`: Crea un enlace que lleva a otra página o sitio web. Utiliza el atributo href para especificar la dirección.  

5. Imágenes
    - `img`: Muestra imágenes en la página. No tiene etiqueta de cierre y usa el atributo src para indicar la dirección de la imagen.  

6. Listas
    - `ul`: Crea una lista no ordenada (con viñetas).
    - `ol`: Crea una lista ordenada (con números).
    - `li`: Cada elemento dentro de la lista.

7. Tablas
    - `table`: Crea una tabla.
    - `tr`: Define una fila en la tabla.
    - `td`: Define una celda dentro de la fila de la tabla.
    - `th`: Define una celda de encabezado en la tabla (con texto en negrita).   

8. Formularios
    - `form`: Crea un formulario para que el usuario ingrese datos.
    - `input`: Permite al usuario ingresar información, como texto, contraseñas, o botones.     








## Inline vs Block
En HTML, los elementos se pueden clasificar en dos tipos según cómo se comportan en una página: inline (en línea) y block (de bloque). La diferencia principal está en cómo ocupan el espacio en la página y cómo se alinean con otros elementos.




### Elementos Inline
Los elementos inline solo ocupan el espacio necesario para su contenido, y no crean saltos de línea. Es decir, los elementos inline se colocan en la misma línea, uno al lado del otro, si hay suficiente espacio.

<!-- su contenido se encuentra en una misma linea -->

Ejemplos de etiquetas inline: 
- `<img>`
- `<button>`
- `<a>`
- `<span>`
- `<strong> <em> <i> <mark>`
- `<code>`
- `<u>`
- `<sup>`
- `<sub>`
- `<input>`



### Elementos Block
Los elementos block ocupan toda el ancho disponible en su contenedor y siempre comienzan en una nueva línea.
Es decir, se comportan como bloques, cada vez que se presenta un elemento de este tipo se hace un salto de linea sin necesidad de colocar una etiqueta de salt de linea.

Ejemplos de etiquetas en Bloque: 
- `<div>`
- `<p>`
- `<h1>`, `<h2>`... `<h6>`
- `<table>`
- `<hr>`
- `<ol> <ul> <li>`


# CSS
CSS significa Cascading Style Sheets (Hojas de Estilo en Cascada) y es un lenguaje que se usa para diseñar y dar estilo a las páginas web. Mientras que HTML se encarga de la estructura y el contenido de la página, CSS se encarga de cómo se ve ese contenido.

`¿Qué hace CSS?`

CSS permite controlar cómo se muestran los elementos en una página web. Puedes cambiar cosas como:

- El color del texto.
- El tamaño de los textos.
- El diseño de las páginas (por ejemplo, cómo se colocan los elementos).
- Los fondos (por ejemplo, cambiar el color de fondo o agregar una imagen).
- Los bordes y espaciado de los elementos.
- El tamaño y espaciado de las imágenes, entre muchas otras cosas.

CSS se aplica a los elementos de una página HTML mediante reglas de estilo. Estas reglas definen qué se quiere cambiar y cómo.



`Estructura básica de CSS`

1. Selector:  Es el elemento HTML al que quieres aplicar los estilos (por ejemplo, p, div, h1, etc.).
2. Propiedad:  Es lo que quieres cambiar (por ejemplo, color, font-size, background-color).
3. Valor:  Es el valor que le das a esa propiedad (por ejemplo, red, 16px, blue).

ejemplo: 

```css
p {
  color: red;
  font-size: 18px;
}
```


## Box-model

El box model es la forma en que se estructura un elemento HTML. Cada elemento en una página web está una caja rectangular, y el box-model nos explica cómo se calcula el espacio de esa caja.

Cada elemento tiene un content, padding, border y margin. 

- El marging: es el espacio que hay entre un elemento y otro.
- El border: es el borde del elemento.
- El padding: es el espacio entre el contenido y el borde.
- El content: es el contenido de nuestra caja.
- el box-sizing : Hace que los elementos de la página tengan la medida que se le otorga con el width y el hight incluyendo los margins y hace que el contenido sea mas pequeño.

```css
.caja{
    margin:10px;

    border-color:black;
    border-width:2px;
    /* Muestra el borde continuo */
    border-style:solid;
    /* Muestra el borde punteado */
    border-style:dashed;
    /* de manera resumida se puede colocar lo siguiente */
    border: 2px solid black;

    padding:20px;

    box-sizing:border-box;
}     
```

el * en css hace que se le coloque el atributo a todos los elementos de la web. Si se desea que algo no lo posea se debe de sobreescribir la regla para el elemento especifico.

```css
*{
    box-sizing:border-box;
}
```

Para mover la linea de un lugar o otro se utiliza el siguiente comando
seleccionar la línea + option + flechitas


*
CheetSheet o W3Schools: para buscar info sobre las distintas etiquetas html

Para los nombres de archivos no utilizar caracteres especiales ni mayúsculas

pixeles: que ancho ocupa de la pantalla cada elemento Las etiquetas de html pueden estar tanto en mayúscula o minuscula y de igual forma las va a pintar.

Reglas de cs mas avanzadas ayudan a que el navegador no seleccione por mi lo que deseo mostrar. Por ejemplo en las listas si se desean flechas en lugar de puntos se realiza con css.

Para seleccionar varios elementos que sean de lo mismo ultizamos el siguiente comando

command + D
Al utilizar collspan lo que se hace es que se recorren las columnas,si no se necesita que se recorran entonces solo se elimina esa columna de la fila que le continua Esto es un tr con un collspan y un rowspan cada uno de ellos ocupa un lugar
```html
<tr>
    <td rowspan = "2"> Gato</td>
    <td collspan = "2" >Jugar</td>
</tr>
```
Nota: el proyecto una vez entregado ya no se puede modificar, se entrega un enlace de github. Dicho repo no se puede modificar nada hasta que se regrese con la nota.
*