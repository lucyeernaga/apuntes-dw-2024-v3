## Transiciones
Es una forma de cambiar los valores de una propiedad de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores numericos o de color. 
Por ejemplo: cambiar tamaño, color de fondo, opacidad, etc. 

Propiedades numericas: 
- width
- height
- font-size
- margin
- padding
- border-width
- opacicty
- transform (props como: scale, relate, translate, etc)


Propiedades de color: 
- color
- background-color
- border-color
- box-shadow


Transition: se puede personalizar de la siguiente manera.Esta va siempre en el elemento principal con el fin de que tenga el efecto de entrada y de salida.
Propiedades:
- transition-property: nos india la propiedad que se animara.
- transition-duration: duración de la animación.
- transition-timing-function: La manera en que se llevara a cabo la animación.
- transition-delay: demora antes de que inice la animación. 


```css
div {
    transition-property: font-size;
    transition-duration: 4s;
    transition-timing-function:ease-in-out;
    transition-delay:2s;

    /* unificar las 4 reglas en 1 */

    transition: font-size 4s ease-in-out 2s;

    /* Para indicar que se modifican varias propieades*/
    transition: width 2s, height 2s, background-color 2s;
        
}

```

Timing functions

- ease: velocidad lenta - rapida - lenta
- linear: velocidad constante
- ease-in: lento - rapido
- ease-out: rapida - lento
- ease-in-out: lenta - rapida - lenta (más brusca)
- cubic-zeier: Timing personalizado

## Cubic-Bezier

Es una función que me permite crear uuna curva de velocidad personalizada. 
https://cubic-bezier.com/
https://www.w3schools.com/cssref/tryit.php?filename=trycss_func_cubic-bezier2


```css
div{
transition-timing-function: cubic-bezier(.44,.01,1,1)
}

```
<!-- .box1 (es el formato original) .box1:hover (son las prop. modificadas)  -->