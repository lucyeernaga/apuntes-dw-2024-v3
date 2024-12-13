# Flexbox
Flexbox (Flexible Box) es un sistema de diseño en CSS que permite distribuir y alinear los elementos de manera eficiente en un contenedor, incluso cuando el tamaño de los elementos es desconocido o dinámico.

## Características principales de Flexbox
1. Contenedor Flex: Para empezar a usar Flexbox, debes definir un contenedor con la propiedad display: flex. Esto transforma a su contenido en elementos flexibles.

        ```css
        .contenedor {
            display: flex;
        }
        ```

2. Flex-direction:  controla la dirección en la que los elementos se disponen dentro del contenedor. Puede tomar los siguientes valores:

    - `row`: Los elementos se alinean de izquierda a derecha (predeterminado).
    - `row-reverse`: Los elementos se alinean de derecha a izquierda.
    - `column`: Los elementos se alinean de arriba hacia abajo.
    - `column-reverse`: Los elementos se alinean de abajo hacia arriba.

3. Justify-content: se usa para alinear los elementos a lo largo del eje principal (horizontal si flex-direction es row, vertical si flex-direction es column). Algunas opciones son:

    - `flex-start`: Alinea los elementos al principio del contenedor.
    - `flex-end`: Alinea los elementos al final del contenedor.
    - `center`: Centra los elementos.
    - `space-between`: Distribuye los elementos con espacio entre ellos.
    - `space-around`: Distribuye los elementos con espacio alrededor de ellos.

4. Align-items : La propiedad align-items se utiliza para alinear los elementos a lo largo del eje transversal (que es perpendicular al eje principal). Algunas opciones son:

    - `flex-start`: Alinea los elementos al principio del eje transversal.
    - `flex-end`: Alinea los elementos al final del eje transversal.
    - `center`: Centra los elementos en el eje transversal.
    - `baseline`: Alinea los elementos según su línea base de texto.
    - `stretch`: Estira los elementos para llenar el contenedor (es el valor por defecto).

5. Align-self: es la alineación de elementos de manera individual.

    - `flex-start`: Alinea el elemento al principio del eje transversal.
    - `flex-end`: Alinea el elemento al final del eje transversal.
    - `center`: Centra el elemento.
    - `stretch`: Estira el elemento para llenar el contenedor.

6. Flex-wrap: por defecto, los elementos en un contenedor Flexbox se alinean en una sola línea. Si no caben en esa línea, puedes hacer que se "envuelvan" a la siguiente línea usando flex-wrap.

    - `nowrap`: Los elementos no se envuelven, permanecen en una sola línea (valor por defecto).
    - `wrap`: Los elementos se mueven a una nueva línea si no caben en la primera.
    - `wrap-reverse`: Los elementos se mueven a una nueva línea, pero la nueva línea aparece arriba, no abajo.

7. Flex-flow: esta es una forma abreviada de usar flex-direction y flex-wrap juntos. Es como escribir dos cosas en una sola línea.

    - `flex-direction`: Controla si los elementos van en fila o en columna.
    - `flex-wrap`: Controla si los elementos se envuelven a una nueva línea si no caben.

8. Order: puedes cambiar el orden de los elementos. Aunque en el HTML un elemento esté antes que otro, puedes hacer que aparezca después o antes de los demás en la página, solo con un número.
El valor por defecto es order: 0, pero puedes poner un número mayor o menor para cambiar su lugar.

9. Flexibilidad de los elementos: Cada elemento dentro de un contenedor flex puede ser flexible o no, lo que significa que puede crecer, encogerse o tener un tamaño fijo. Esto se controla con las propiedades:

    - flex-grow: Define cuánto puede crecer un elemento si hay espacio disponible.
    - flex-shrink: Define cuánto puede reducirse un elemento si no hay suficiente espacio.
    - flex-basis: Define el tamaño inicial de un elemento antes de que se apliquen flex-grow y flex-shrink.
    * La propiedad flex es una forma abreviada de combinar estas tres propiedades (flex: 1;).

10. Align-content: se usa cuando tienes varias líneas de elementos en un contenedor Flexbox (es decir, cuando los elementos se "envuelven" usando flex-wrap). Esta propiedad alinea todo el grupo de líneas (no los elementos individuales, eso lo hace align-items).

    - `flex-start`: Las líneas se alinean al principio del contenedor.
    - `flex-end`: Las líneas se alinean al final del contenedor.
    - `center`: Las líneas se alinean en el centro del contenedor.
    - `space-between`: Distribuye las líneas con el máximo espacio entre ellas.
    - `space-around`: Distribuye las líneas con espacio alrededor de cada una.
    - `stretch`: Las líneas se estiran para llenar todo el espacio disponible (valor por defecto).

        ```css
        .contenedor {
        display: flex;
        flex-wrap: wrap; /* Los elementos se envuelven */
        align-content: space-between; /* Espacio igual entre las líneas */
        }
        ```

11. Gap: se usa para definir el espacio entre los elementos del contenedor. Es similar a los márgenes entre los elementos, pero más fácil de gestionar.


## Over Flow
Overflow se usa para controlar lo que pasa con el contenido que es más grande que el contenedor.

- visible: El contenido sobresale y es visible.
- hidden: El contenido se corta y se oculta (no permite bajar al texto).
- scroll: Siempre aparece una barra de desplazamiento.
- auto: La barra de desplazamiento aparece solo si es necesario.

        (overflow-x): para poner el scroll horizontal
        (ovverflow-y): para poner el scroll vertical