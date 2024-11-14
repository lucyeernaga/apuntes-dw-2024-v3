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




<!-- tanto EM como REM, se basan en el tamaño de la fuente (tipografia)
pero EM se basa en el tamaño de la fuente de padre y REM se basa en el tamaño de la fuente del html entero -->



## REM (Root EM)
Es la relativa al tamaño de fuente de nuestro elemento raíz (normalmente es el <html>). Por defecto esta es de 16px. Rem es útil para mantener una escala consistente en el documento, independientemente de la estructura del DOM. 



```css 
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

