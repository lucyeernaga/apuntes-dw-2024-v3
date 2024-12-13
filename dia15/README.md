# Unidades de Medidas en CSS: px, %, em, rem
1. Unidades Absolutas
    - `Pixeles`: son unidades absolutas que representan un punto en la pantalla.
        - Son ideales para tamaños precisos y no cambiar en relación a otroselementos.
        - No se adaptan a diseños responsive.

2. Unidades relativas
    - `Porcentajes`: Se usa para definir un valor relativo al elemento contenedor.
        - Ejemplo: Si tienes un div de 200px de ancho y usas width: 50%;, el ancho del div será de 100px (50% de 200px).
        - Son utiles para crear diseños fluidos y responsive que se adapten a distintos tamaños de pantalla.

    - `EM`: Es una unidad relativa al tamaño de la fuente del elemento. Si usas 1em, significa el tamaño de la fuente del elemento en el que se aplica. Si aplicas font-size: 2em; dentro de un elemento que tiene un tamaño de fuente de 16px, el tamaño será 32px.

        - Ejemplo: Si font-size: 1.5em; se aplica a un texto dentro de un div con font-size: 16px;, el texto tendrá un tamaño de 24px (16px * 1.5).
        - Esta unidad es útil para crear tamaños de texto y márgenes que    escalen con el tamaño de la fuente. Esto mejor la accesibilidad y  flexibilidad del diseño.
        - Es ideal para escalar elementos proporcionalmente al texto.
        - Por defecto los navegadores asignan el fontsize a 16px;

    ```css
    .card {
        font-size: 16px;/*16px*/
        padding: 2em; /*24px*/
    }

    .card__title {
        font-size: 2em; /*32px*/
        margin: 2.5em; /*40px*/
    }
    ```

    - `REM`: (Root EM) es la unidad relativa al tamaño de fuente de nuestro elemento raiz (usualmente el <html>). 
        - Por defecto esta es de 16px.
        - Esto hace que sea más fácil mantener un tamaño consistente en toda la página.



    ```css 
    /* tanto EM como REM, se basan en el tamaño de la fuente (tipografia)
    pero EM se basa en el tamaño de la fuente de padre y REM se basa en el  tamaño de la fuente del html entero  */
    html {
        font-size: 16px;
    }

    .card {
        font-size: 2em; /*32px*/
    }

    .card__title {
        /* el REM ignora el font-size de card */
        margin: 1rem /*16px*/
    }
    ```



### Resumen rápido de cuándo usar cada unidad:

1. px: Para un control exacto del tamaño, sobre todo cuando no necesitas que el tamaño cambie según el contenedor o la pantalla.
2. %: Útil para hacer diseños fluidos que se ajustan según el tamaño del contenedor.
3. em / rem: Son ideales para escalabilidad, especialmente en fuentes y elementos que deben adaptarse a cambios en el tamaño de fuente del usuario.
4. vw / vh: Perfectas para hacer diseños responsivos que dependen del tamaño de la ventana del navegador.
5. vmin / vmax: Útiles para dimensiones relativas al tamaño de la pantalla, cuando quieres que se adapten al menor o mayor tamaño.
6. ch: Útil para definir anchos de texto basados en el tamaño de los caracteres.