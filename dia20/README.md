
# Emmet 
Nos permite escrir HTMl y CSS Emmet:

- | Nos metemos dentro de la caja (crear un hijo)
- . Agregamos una o mas clases
- #Agregamos un id
- Agregar sibbling/hermano
- *Repetidor/cantidad
- {} colocar contenido o texto dentro del elemento
- $ dentro del contenido enumerar elementos
- lorem10 tetxo lorem ipsum de 10
- () agrupar elementos Emmet

main.contenido.modo--obscuro#contenido1>(h1.titulo+p.texto>lorem10)+(ul>li*5{Item de Lista $})+footer.pie

//Realizaria esto en html
  <main class="contenido modo--obscuro" id="contenido1">
        <h1 class="titulo"></h1>
        <p class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias.</p>
        <ul>
            <li>Item de Lista 1</li>
            <li>Item de Lista 2</li>
            <li>Item de Lista 3</li>
            <li>Item de Lista 4</li>
            <li>Item de Lista 5</li>
        </ul>
        <footer class="pie"></footer>
    </main>



# Variables en CSS
Se pueden crear variables para reutilizar valores en distintas partes del codigo.

- Mejorar la legibilidad del código
- Facilitar la actualización de los valores.
- Se pueden crear de manera global en la raíz del documento en caso Web <html>.En otros caso en imagenes SVG es la etiqueta <svg>.
- Para que Css lo reconozca debe de tener dos guiones medio.

Ejemplo de uso Bootstrap
https://getbootstrap.com/docs/5.0/customize/css-variable

```css
*{
    margin:0;
}
:root {
    --blue : #1e90ff;
    --wwhite: #fff;
    --danger: red;
    --primary:#aaaccb;

}

.dark-mode{
    --primary: #bbbbaacc;
}

.container{
    background-color: var(--primary);
    color: var(--white);

}
```


# Metodologia Suit CSS
https://suitcss.github.io/

Se utiliza en muchos frameworks como Angular, React, etc. Es una nomenclatura basada en BEM, pero con algunas diferencias.
Sus partes son :
- Componentes
- Elementos
- Modificadores
- Estados: Son modificadores pero temporales de un elemento(actvivo, inactivo, abierto,cerrado), y son independientes de los componentes en que se utilizan.
- Utilidades: Es una clase que se puede aplicar a cualquier etiqueta y que no tiene relación con el componente.Haciendo una lista de utilidades se puede utilizar para todo.

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