## Transition CSS

## Que son

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

## Como se define

Usamos la propiedad `transition` y se pueden personalizar de la siguiente manera: 

- `transition-property`: nos indica la propiedad que se animara. 
- `transition-durantion`: duracion de la animación. (cuanto va a tardar en llegar de uno a otro)
- `transition-timing-function`: la manera en que se llevará a cabo la animación.
- `transition-delay`: se retrasa un poco antes de que inicie la animación. 


```css
div {
    transition-property: font-size;
    transition-duration: 4s;
    transition-delay: 2s; 
    transition-timing-function: ease-in-out; 

    /* unificar las 4 reglasen 1 */
    /* transition: <property> <duration> <timing-function> <delay>; */
    transition: font-size 4s ease-in-out 2s;
    }

```



## Timing Functions

- `ease`: velocidad lenta - rápida - lenta (x defecto)
- `linar`: constante
- `ease-in`: lento - rápido
- `ease-out`: rápido - lento
- `ease-in-out`: lento - rápid - lento (más brusca)
- `cubic-bezier ()`: Timing personalizado




## Cubic-Bezier

Es una función que me permite crear uuna curva de velocidad personalizada. 
https://cubic-bezier.com/
https://www.w3schools.com/cssref/tryit.php?filename=trycss_func_cubic-bezier2


```css
div {
    transition-timing-function: cubic-bezier;
}
```