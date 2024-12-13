# Sistema responsive de sitios web

## Media Queries !
Son una herramienta de CSS que nos permite aplicar diferentes estilos según el tamaño de la pantalla o las características del dispositivo donde se está viendo la página web.
Son muy útiles para crear sitios web responsivos, es decir, que se adaptan bien a distintos dispositivos (como móviles, tabletas y escritorios).

### ¿Cómo funcionan?
Los media queries permiten aplicar reglas de estilo específicas solo cuando se cumplen ciertas condiciones (por ejemplo, cuando el ancho de la pantalla es menor a 600 píxeles). Estas condiciones pueden estar relacionadas con:

- El ancho y la altura de la pantalla.
- La orientación de la pantalla (vertical u horizontal).
- La resolución de la pantalla.

### Sintaxis de Media Query
Una MQ se compone de multiples partes: 
- @media: que es una palabra clave reservada 
- Media Type: son una manera de especificar el tipo de dispositivo para el que aplicamos los estilos.

1. screen: Para pantallas (computadoras, tabletas, teléfonos, etc.).
2. print: aplica los estilos cuando el contenido de la página se va a imprimir. 
3. all: se aplica a todos los dispositivos: tanto pantallas como impresoras o cualquier otro medio. Es una forma general de aplicar estilos sin importar el dispositivo.
4. speech: Aplica estilos en dispositivos de síntesis de voz o lectores de pantalla.

- operadores (ej. and, not, only)
- breakpoint, que es una condición (max-width, min-width, portrait, landscape, etc)
- un bloque de CSS        


Ejemplo Screen: aquí el fondo de la página se cambiará a lightblue solo en dispositivos con pantallas y cuando el ancho de la pantalla sea menor o igual a 768px.
```css
@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```


Ejemplo Print: aquí el fondo de la página se cambia a blanco y el tamaño de la fuente se reduce cuando se imprime, además de ocultar elementos con la clase .no-imprimir.
```css
@media print {
  body {
    font-size: 12px;
    background-color: white; /* Eliminamos cualquier fondo */
  }
  .no-imprimir {
    display: none; /* Ocultamos elementos que no deben aparecer en la impresión */
  }
}

```


Ejemplo All: aquí, el estilo se aplica a todos los dispositivos, ya sea que se esté mostrando en una pantalla o que se vaya a imprimir.
```css
@media all {
  body {
    font-family: Arial, sans-serif;
  }
}
```


Ejemplo Portrait: Se usa cuando la pantalla está en orientación vertical (altura mayor que el ancho). Es común en dispositivos como teléfonos cuando están sostenidos en posición normal.
```css
@media (orientation: portrait) {
  /* Estilos para modo vertical */
}
```


Ejemplo Landscape: Se usa cuando la pantalla está en orientación horizontal (ancho mayor que la altura). Es común cuando el dispositivo está girado, como al ver videos en un teléfono o usar una computadora de escritorio.
```css
@media (orientation: landscape) {
  /* Estilos para modo horizontal */
}
```







### Cómo combinarlos
Los Media Types se pueden combinar con condiciones (como min-width o max-width) para hacer que los estilos se apliquen en función de características específicas de los dispositivos.

```css
/* Para pantallas de dispositivos con una anchura máxima de 600px */
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* tiene que ser una pantalla, tiene que tener un ancho minimo de 600px y un ancho máximo de 800px, entonces al probar esta regla se va a ver azul solo cuando esté entre 600 y 800. Cuando esté en menos de 600 se va a ver verde y cuando esté mas de 800 se va a ver verde, por eso se usa el operador "and" */
@media screen and (min-width: 600px) and (max-width: 800px) {
    body {
        background-color: lightblue; 
    }
}

/* Para impresoras */
@media print {
  body {
    background-color: white;
    font-size: 12px;
  }
}

/* Para todos los dispositivos */
@media all {
  body {
    margin: 20px;
  }
}

/* Para dispositivos en modo retrato con un ancho de pantalla máximo de 600px */
@media (orientation: portrait) and (max-width: 600px) {
  body {
    font-size: 14px;
  }
}

/* Para dispositivos en modo paisaje con un ancho de pantalla mínimo de 601px */
@media (orientation: landscape) and (min-width: 601px) {
  body {
    font-size: 18px;
  }
}
```


## Tips para utilizarlo

- Sobreescriben las reglas CSS normales, pero NO poseen mayor especificidad por lo tanto los MQ deben ir al final de nuestro CSS.
- Deben utilizar el mismo selector y propiedades para que reemplace las reglas que deseamos. 
- Pensar de antemano los breakpoints. 
- Podemos usar una @media para cada selector o una sola para todos los selectores (recomendada)
- Intentar desarrollar siempre para el movil (mobile first)




```css
/* Moviles*/  /*No hizo falta hacer un MQ para moviles pq ya cualquier cosa que sea menos de 1024 o que sobrepase los 2048 van a ser pantallas grandes*/
.box { }
.p {}


/*pantalla mediana*/     
@media screen and (min-width: 1024px) {
    .box { }
    .p { }
}
/*pantalla grande*/
@media screen and (min-width: 2048px) {
    .box { }
    .p { }
}
```


## Mobile vs Tablets vs Desktop
Tamaño estandar de cada uno:
- Mobile (55% uso): 320px - 480px
- Tablets (2% uso): 768px - 1024px
- Desktop (43% uso): 1024px - 1920px

Tamaños actualizados 2024: 
- Mobile (55% uso): 1440px - 3200px
- Tablets (2% uso): 2560px - 1600px
- Desktop (43% uso): 5120px - 2880px



## Uso recomendado de MQ en Imagenes: 

```HTML
    <picture>
        <source media="(min-width: 1024px)" srcset="./foto-desktop.png">
        <source media="(min-width: 650px)" srcset="./foto-tablet.png">
        <img src="./foto-mobile.png" alt="Mi foto">
    </picture>
```









# LINK
el link es para escribir el css en otro archivo (para traer una hoja de estilos que está en otro archivo)