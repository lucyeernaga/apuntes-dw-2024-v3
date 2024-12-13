Los links tambien posibilitan moverte dentro de la misma web para ello se le indica mediante el id de la sección.Como se muestra a continuación.

<a href="#nosotros"></a>

# Tipos de position en CSS
## Static (por defecto)
Significa que el elemento se posiciona de acuerdo al flujo normal del documento, es decir, tal como aparece en el HTML. Los elementos con position: static; siguen el flujo natural (de arriba hacia abajo, de izquierda a derecha).

- Cuando se esta en este valor no se aplica ninguna porpiedad de posición. O sea no se puede colocar top, left, right, bottom.

## Relative
Un elemento con position: relative; se posiciona en relación con su posición original. Puedes moverlo con las propiedades top, right, bottom, y left, pero el espacio que ocupaba sigue estando reservado en el flujo normal de la página.

- El elemento se mueve desde su posición original, pero sin sacarlo del flujo de la página. Los demás elementos no se ven afectados.

## Absolute 
Un elemento con position: absolute; se posiciona en relación con el contenedor más cercano que tenga position diferente a static (como relative, absolute, o fixed).

-  Se posiciona con respecto al padre mas cercano que tenga una propiedad position diferente de static. Normlamente relative, Si no la encuentra usa el body.Puedes usar top, right, bottom, y left para ubicarlo de manera exacta.

## Fixed 
Un elemento con position: fixed; se posiciona en relación con la ventana del navegador, no importa cuánto se desplace la página (hacer scroll).

- El elemento se mantiene en una posición fija en la pantalla, incluso si el usuario hace scroll hacia arriba o hacia abajo.

## Sticky
position: sticky; es una mezcla entre relative y fixed. El elemento se comporta como relative hasta que el usuario hace scroll hasta un punto específico, y luego se comporta como fixed, quedándose "pegado" en esa posición mientras se hace scroll.

-  El elemento es pegajoso en un lugar específico mientras se hace scroll, pero se queda en su lugar hasta que se alcanza una posición definida por top, bottom, etc.


Nota Si deseas agregar transparencia aun objeto se agrega la propiedad opacity = 0,5.