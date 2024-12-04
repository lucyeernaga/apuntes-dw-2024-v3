# otras maneras de hacer los ejercicios

## Ejercicio 1

```js
document.querySelector("#ej1").addEventListener("click", () => {
            let text1 = "      Hola Mundo";

            let resultado = text1.trim()             // eliminar espacios en blanco
                            .toUpperCase();         // convierte el texto en mayus.

            console.log(resultado);  
            alert(resultado);                       // imprime HOLA MUNDO  
        });
```


## Ejercicio 2

```js 
document.querySelector("#ej2").addEventListener("click", () => {
    const text2 = "Estoy aprendiendo Javascript y PHP";
    console.log("¿Está presente 'Javascript' y 'PHP' en el texto?:", text2.includes("Javascript", "PHP"));
});
```


## Ejercicio 3

```js
document.querySelector("#ej3").addEventListener("click", () => {
            const text3 = "Lechuga, tomate, peras, manzanas";
            console.log(text3.split(", "));
        });
```



## Ejercicio 4

```js
document.querySelector("#ej4").addEventListener("click", () => {
            const text4 = "Estoy practicando Javascript";
            console.log(text4.replace(text4, "Éstóy práctícándó Jáváscrípt"));
        });
```



## Ejercicio 5

```js 
document.querySelector("#ej5").addEventListener("click", () => {
            const text5 = ["Manzana", "Peras", "Uvas"];
            console.log("¿Ambas listas son iguales?:", text5 == ["manzana", "pera", "uvas"]);
        });
```



## Ejercicio 6

```js
document.querySelector("#ej6").addEventListener("click", () => {
            const text6 = "tOMi123!!";
            const result6 = text6.toLowerCase()
                .replace("!", "");
            console.log(result6);
        });
```