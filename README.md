
# Emmet 
ver emmet.html




# Variables en CSS
Se pueden crear variables para reutilizar valores en distintas partes del código. 

- Mejorar la legilibilidad del código
- Facilitar la actualización de los valores

Se pueden crear de manera global en la raíz del documento, que en el caso de webs es <html>.



```css
:root {
    --blue: #1e9ff;
    --white: #fff;
    --danger: red;
    --primary: #aaaccb;
}

.container {
    background-color: var(--blue); 
    color: var(--white); 
}

```


# Suit CSS