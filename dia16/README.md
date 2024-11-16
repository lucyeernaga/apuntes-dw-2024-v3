# GRID CSS 

Es un sistema para creación de Layouts del estilo de tablas. Se compone de filas y columnas, y se pueden agrupar unos dentro de otros. 
Su ventaja frente a flex es que podemos crear Layouts complejos con pocas líneas de código. 

- No es opuesto ni a flex ni a float, se pueden combinar entre ellos. 

Usamos `display:grid` para grear un grid y se usa `grid-template-columns` para definir el número de filas y columnas que tendrá mi grid. 

```css
/* Sistema de 3x3 */
/* (tenemos 3 filas y 3 columnas) */
/* es una tabla de 3x3 */
.container {
    display: grid; 
    grid-template-rows: 100px 100px 50px 
    grid-template-columns: 100px 100px 100px 
}
```


Podemos indicar a cada item donde ponerlo en la tabla con las reglas: `grid-row-start`, `grid-row-emd`, `grid-column-start`y `grid-column-end` (nos va a permitir decidir donde poner cada elemento).
Hay que tener en cuenta que se cuenta desde 1 y no desde 0. 

Si queremos que un item ocupe 3 columnas y 1 fila, deberiamos indicar que comienze en la columna 1 y termine en la columna 4, yque comience en la fila 1 y termine en la fila 2.




```css 
/* tenemos un container de 3 filas y 4 columnas */
/* el item-1 va a ir desde la columna 1 a la 4 (3 columnas) */
/* el item-1 va a ir desde la fila 1 a la fila 1 (1 fila) */

.item-1 {
    grid-column-start: 1;
    grid-column-end: 4; 
    grid-row-start: 1;
    grid-row-end: 2;
}
```


Se pueden invertir el start y el end:
```css 
.item-1 {
    grid-column-start: 4;
    grid-column-end: 1; 
    grid-row-start: 2;
    grid-row-end: 1;
}
```

Existen los números de filas y columnas negativos para seleccionar elementos desde el final del grid: 
```css 
/* la caja está ocupando todo el grid */
.item-1 {
    grid-column-start: 1;
    grid-column-end: -1; 
    grid-row-start: 1;
    grid-row-end: -1;
}
```


En vez de seleccionar inicio y fin de fila/columna, podemos usar `span` para indicar cuanto se expande nuestro item:
```css 
.item-1 {
    grid-column-start: 1;
    grid-column-end: span 2; /* se amplia 1 más (en total 2 bloques)*/ 
    grid-row-start: 1;
    grid-row-end: 3; /* se amplia 2 bloques mas (en total 3 bloques)*/ 
}
```


Se puede usar la regla reducida `span` para expandir el objeto:
```css 
.item-1 {
    /* Bloque de 2 */
    grid-column: span 2;
    grid-row: span 2;
}
```



Se puede simplificar la regla grid-column-start-end en una sola usando el símbolo "/".
```css 
.item-1 {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
}
```



Se puede simplificar más usando `grid-area`:
```css 
.item-1 {
    grid-area: 1 / 1 / 4 / 4;
}
```



Podemos usar `grid-gap`(alias `gap`) para definir un espacio entre filas y columnas.
```css 
.container {
    display:grid;
    ...
    grid-gap: 10px; /* mismo valor para filas y columnas */
    grid-gap: 1em 3em;
}
```



Si agregamos + bloques dentro de nuestro grid que cantidad de filas y columnas, grid creará automáticamente una nueva fila. Esto se llama "grid-implicita".
Podemos usar la regla `grid-auto-rows: 100px;` para definir el tamño de nuevas celdas.

```css
.container {
    display: grid; 
    grid-template-rows: 100px ;
    grid-template-columns: 100px 100px 100px;

    grid-auto-rows: 100px;
}
```



Tambien extiste el `grid-auto-flow` que nos permie definir si las nuevas celdas serán filas o columnas. 

```css
/* sistema de 3 x 3 */
.container {
    display: grid; 
    grid-template-rows: 100px ;
    grid-template-columns: 100px 100px 100px;
    

    /* grid-auto-rows: 100px; */
    grid-auto-flow: column;
    grid-auto-columns: 100px;
}
```


En grid poseemos una nueva medida llamada fracción "fr". 

```css
/* sistema de 3 x 3 */
.container {
    display: grid; 
    grid-template-columns: 1fr  2fr  1fr; /* 25% 50% 25%*/

    grid-template-columns: 200px 1fr; /* 200px 1fr (200px a la 1a columna y 1fr a la segunda columna para que ocupe el espacio que quiera) */

    grid-template-columns: 200px  1fr  1fr; /* 3 columnas: 200px 50% 50% (se divide la */
    /*  dividimos en fracciones en base al total de elementos que tengamos */
}
```




## Grid Templates Areas

Podemos nombrar celdas utilizando `grid-template-areas`

```css
.container {
    display: flex; 
    grid-template-columns: repeat(3, 1fr); /* 3 columnas x 1 fraccion*/
    grid-template-rows: repeat(4, 100px)
    grid-gap: 10px; 


    grid-template-areas: 
            "sector1 sector1 sector2"
            "sector3 sector3 sector2"
            "sector4 sector5 sector5"
            "sector4 sector5 sector5";
}


.caja-1 {
    grid-area: sector1;
}

.caja-2 {
    grid-area: sector2;
}

.caja-3 {
    grid-area: sector3;
}

.caja-4 {
    grid-area: sector4;
}

.caja-5 {
    grid-area: sector5;
}
```



<!-- siempre que se trabaje con grid, se trabaja con líneas y cuadrados -->