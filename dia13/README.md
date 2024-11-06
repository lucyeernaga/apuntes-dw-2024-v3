
# Nombres de variables (y selectores)
(que formato pueden tener nuestras variables o selectores)

<!-- - UPPERCASE: mayúsculas
- lowercase: todo en minúsculas
- title case: la 1a letra de cada palabra en mayúscula  -->


- CAMEL CASE: se empieza con la 1a letra minúscula y la 1a letra de cada nueva palabra subyacente en mayúscula. 
Ej. cosasParaHacer
Ej. edadDelAmigo
Ej. valorFinal


- PASCAL CASE: tambien se comoce como upper camel case/ capital case, combina palabras poniéndolas todas con la 1a letra en mayúscula.
Ej. CosasParaHacer
Ej. EdadDelAmigo
Ej. ValorFinal


- KEBAB CASE: se usa el guión paracombinar las palabras. Cuando el kebab case está en mayúsculas, se llama "screaming kebab case"
Ej. cosas-para-hacer
Ej. edad-del-amigo
Ej. valor-final

- SNAKE CASE: se usa guión bajpp en lugar de espacio para separar las palabras. Cuando skane case está en mayúsculas, se le conoce como "screaming snake case"
Ej. cosas_para_hacer
Ej. edad_del_amigo
Ej. valor_final



## Especificidad 
Es la manera mediante la cual los nav deciden que valores de una propiedad CSS son más relevantes para un elemento, y por lo tanto, serán aplicados. (que reglas es + esppecífica que otra)

Mientras más específica + peso tendrá, pero tb será + dificil de sobreescribir. 

- La 1a colunma representa los ID
- La 2a columna es para clases y sus atributos (lo que está entre corchetes), y sus pseudo clases (que se escriben con :hover :root :required :nth-child(odd), :nth-of-type (3n)).
- La 3a columna es para etiquetas (p, input, strong, main...) y sus pseudo elementos (::before, ::after)


1   2   X



```css
/* (1 0 0) */
#soyCaja {
    background-color: blue;
}

/* (0 0 2) */
p > br {

}

/* (0 2 0) */
.box:hover {
    background-color: green;
}

/* (0 1 0) */
.caja {
    background-color: red;
}


/* (1 1 0) */
#header .caja {
    background-color: red;
}

```



```html
<div id="soyCaja" class="caja box"
style="background:orange !important">
</div>
```

<!-- los ID tienen mayor importancia que las clases, asi que da igual si lo pongo en el medio, al principio o al final, el orden deja de tener importancia y pasa a ser import. la especificidad del ID.
(es mucho más específico que las cajas) -->