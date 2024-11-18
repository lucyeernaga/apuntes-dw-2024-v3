
# Emmet 
ver emmet.html




# Variables en CSS
Se pueden crear variables para reutilizar valores en distintas partes del código. 

- Mejorar la legilibilidad del código
- Facilitar la actualización de los valores

Se pueden crear de manera global en la raíz del documento, que en el caso de webs es <html>. En otros casos x ejemplo en img SGV, es la etiqueta <sgv>

Ej e uso en bootstrap:
https://getbootstrap.com/docs/5.0/customize/css-variable

```css
:root {
    --blue: #1e90ff;
    --white: #fff;
    --danger: red;
    --primary: #aaaccb;
}

.dark-mode {
    --primary: #bbbaac; 
}

.container {
    background-color: var(--blue); 
    color: var(--white); 
}


```


# Metodologia Suit CSS
https://suitcss.github.io/

SuitCSS se utuliza en muchos frameworks como Angular, React, etc. Es una nomenclatura basada en BEM, pero con algunas diferencias.
Sus partes son: "componentes", "elementos", "modificadores", "estados", "utilidades"


## Partes 

- ComponenteName (PascalCase)
- ComponenteName-elementName (-camelCase)
- ComponenteName-modifierName (--camelCase)
- ComponenteName.isStateOfComponent (.isPascalCase, .hasPascalCase, .focusPascalCase, .onPascalCase)
- u-utilityName (u-camelCase)


## Componente (bloque) y elementos

```css
/* Componentes */
.Galeria {}

/* elementos  */
.Galeria-titulo {}
.Galeria-imagen {}
.Galeria-pieGaleria {}

/* modificadores */
.Galeria--principal
.galeria-imagen--extragrande {}
```


## Estados 
Los estados son modificadores "TEMPORALES"  de un elemento (activo, inactivo, cerrado, abierto), y son independientes de los componentes en que se utiliza.

```css
.isACtive {}
.Micomponente.isActive {}
.MiGaleria.isActive {}

``` 


```html
<div class="Micomponente isActive"></div>
<div class="Micomponente"></div>
<div class="Micomponente"></div>
<div class="MiGaleria isActive"></div>
<div class="MiGaleria"></div>
<div class="MiGaleria"></div>
```


## Utilidades / Utilities

Es una clase que se puede aplicar a CUALQUIER ETIQUETA y que no tiene relación con el componente. Se escribe con una "u-" al frente. 

```css
.u-textCenter {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    }
    
.u-bgBed {
    background-color: red;
}

.u-textRight {}
.u-textDanger {}
```




Incluso las utiliaddes poseen variantes responsive como "u-sm-textCenter", "u-md-textCenter", "u-lg-textCenter", para aplicar en diferentes tamaños de pantalla (sm:small, md:medium, lg:large)