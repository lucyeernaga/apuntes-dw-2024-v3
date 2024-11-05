
<!-- el mediaqueryn nos permite: dependiendo de una pregunta (ej. ¿cual es el ancho de la pantalla?), te va a mostrar un estilo u otro. -->

# Media Queries !

## ¿Qué es? 
es una declaración de CSS que nos permite definir los estilos de nuestra web

## Sintaxis de una MQ

una MQ se compone de multiples partes: 
- un @media, que es una palabra clave reservada 
- un tipo de media. hay varios tipos de media [que se les llama Media Type]: 

        - screen (como la del móvil, desktop, tablet..)
        - print (es una pantalla de impresión), 
        - all (son todos los tipos de pantallas posibles)
        - speech (unireader, sistema que va leyendo los HTML en voz alta)

- operadores (ej. and, not, only)
- breakpoint, que es una condición (mas-width, min-width, etc)
- un bloque de CSS        


```css
/* // @media screen and (breakpoint) { } */
body {
    bakcgroun-color: lightgreen; 
}

@media screen and (min-width: 600px;) {
    body {
        background-color: lightblue; 
    }
}
```


```css
/*Combinación de Breakpoints*/ 
/* tiene que ser una pantalla, tiene que tener un ancho minimo de 600px y un ancho máximo de 800px, entonces al probar esta regla se va a ver azul solo cuando esté entre 600 y 800. Cuando esté en menos de 600 se va a ver verde y cuando esté mas de 800 se va a ver verde, por eso se usa el operador "and" */
@media screen and (min-width: 600px) and (max-width: 800px) {
    body {
        background-color: lightblue; 
    }
}

/* Orientación del dispositivo*/   
/*Si ponemos el formato de landscape, va a fijarse en si el ancho es + que el ancho y existen (landscape y portrait)*/
@media screen and (prefers-color-schema: dark) {
    body {
        background-color: black;
        color: white; 
    }
}

/* Modo Oscuro*/
@media screen and (orientation: landscape) {
    body {
        background-color: lightblue; 
    }
}
´´´ 


## Media 
- all: todos los dispositivos
- print: vista previa de impresión
- screen: pantallas a color (tablets, moviles, ordenadores)
- speech: dispositivos que convierten texto a voz
- otros elementos depreciados: tv, handheld, braille, etc. (que no se usan mas en css)


```css
/*cualquier cosa que tenga la clase no-print, se le pone un display: none;Así cuando imprimamos si algo tiene la clase no-print, no se va a imprimir en esa pantalla*/
@media print {
    .no-imprimir {
        display: none;
    }
}




