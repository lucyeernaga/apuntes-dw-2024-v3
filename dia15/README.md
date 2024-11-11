# Unidades de Medidas en CSS: px, %, em, rem

## Pixeles
Son unidades absolutas que representan un punto en la pantalla. Son ideales para tamaños que deben ser 


## Porcentajes
Es una unidad relativa al tamaño del elemento padre. Por ejemplo, si un elemento tiene 200px, y el hijo tiene 50%, entonces el elemento ocupa 100px.
Son útiles para crear diseños fluidos y responsive que se adapten a distintos tamaños de pantalla. 

## EM
se usa el ancho de la m como medida para elegir una tipografia especifica, su ancho.

normalmente el tamaño de em es de 16px (por defecto)
La unidad es relativa al tamaño de la fuente del elemento padre. Por ejemplo si el padre tiene un font-size: 10px, y un margin: 3em, el margin será de 30px. 
Esta unidad es útil para crear tamaños de textp y margenes que escalen con el tamaño de la fuente. 

esto mejora la accesibilidad y flexibilidad del diseño. es ideal para escalar elementos proporcionalmente al texto. 

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








## REM (Root EM)
Es la relativa al tamaño de fuente de 

