# Scope (alcance) de variables
En JS las variables tienen 3 diferentes alcances.


## Global 
Son accesibles desde cualquier parte del código.

```html
<script>
    let nombre= "Juan";
</script>

<script>
    function saludar() {
    console.log("Hola" + nombre);
    }
    console.log(nombre); // Juan
    saludar(); //Hola Juan
</script>
```




## Local
Son variables definidas dentro de funciones.

```js
function saludar() {
    let nombre="Juan"; // variable local
    console.log("Hola" + nombre); // ok
}

console.log(nombre); // Error: "nombre" no está definida
saludar(); // Imprime: "Hola Juan"
```






## Bloque
Las variables con `let` o `const`dentro de un bloque. Algunos ejemplos de bloque son `if` o `for`.

```js 
// bloque condicional "if"
if (true) {
    let nombre="Juan"; 
    console.log("Hola"+ nombre); // Hola Juan
}

console.log("Hola"+ nombre); // Error: "nombre" is not defined
```


## Hoisting
En js cuando definimos una variable con "var" estas se mueven al inicio del script.

Al usar `let`o `const` estas variables no se elevaran al inicio del script (para evitar errores).



## Operadores de comparación
Se utilizan para comparar 2 valores.

```js
let numero=11;
let esPar = (numero%2 == 0  ); // false
let esImpar = (numero%2 == 1); // true
```


- Igual (==): Compara a ver si 2 valores son iguales 
- Estrictamente igual (==): si los 2 valores son iguales y del mismo tipo.
- Distinto (!=): compara si los 2 valores son distintos.
- Mayor que (>): compara si un valor es mayor que otro.
- Menor que (<): compara  si un valor es menor que otro.
- Mayor o igual que (>): compara si un valor es mayor o igual que otro.
- Menor o igual que (<): compara  si un valor es menor o igual que otro.

```js 
let num1="5";
let num2=5;

const sonIguales = (num1 == num2); // true 
const sonIguales = (num1 === num2); // false
``` 


## Truthy/Falsy 
Las variables en js pueden tener un valor de "truthy" o "falsy".
Un valor "truthy" es aquel que se evalúa como verdadero en un contexto booleano, mientras que el "falsy" se evalúa como falso.

Podemos usar esta propiedad para la toma de decisiones en nuestro código.

Valores falsy: undefined, null, NaN, 0, "" (cadena vacía), y false truthy: todo lo demás.


```js 
let edad = 18; 

if (edad >= 18) {
    // se ejecuta si el valor es truthy.
    console.log("soy mayor de edad");
} else {
    // se ejecuta si el valor es falsy.
    console.log("soy menor de edad");
}


let edad = 16; 

if (numero % 2 == 0) {
    console.log("soy par");
} else {
    console.log("soy impar");
}
    


if (0) {
    console.log("soy par");
} else {
    console.log("soy impar");
}


// undefined, null, NaN, 0, "" (cadena vacía), y false
if ("") {
    // Esto no se ejecuta
} else {
    // Esto SI se ejecuta
}
```




### Reducción de condicionales quitando el else
Podemos simplificar nuestro código condicional quitando el else. Esto es útil cuando no necesitamos un bloque falsy o cuando tenemos multiples condiciones.




```js
let user="cei";
let pass="Abc123";

let mensaje="CORRECTA: Clave correcta";
let tf_errores = false;

pass="t cei 1234567";


if(pass.length <= 8 ) {
    mensaje= "INCORRECTA: La pass debe tener al menos 8 caracteres";
    console.log(mensaje);
    tf_errores = true;
}

if(pass.includes ("")) {
    mensaje= "INCORRECTA: La pass no debe tener espacios";
    console.log(mensaje);
    tf_errores = true;
}

if(pass.includes (user)) {
    mensaje= "INCORRECTA: La pass no puede incluir tu nombre de usuario";
    console.log(mensaje);
    tf_errores = true;
}

if( tf_errores == false ) {
    console.log(mensaje); // clave correcta o incorrecta 
}







// "abc 123" === "Abc 123" // falsy
// "abc 123" === "abc 123" // truthy
if(pass.toLowerCase () === pass ) {
    mensaje= "INCORRECTA: La pass debe tener al menos una mayúscula";
}

// "ABC 123" === "Abc 123" // falsy
// "ABC 123" === "abc 123" // truthy
if(pass.toUpperCase () === pass ) {
    mensaje= "INCORRECTA: La pass debe tener al menos una minúscula";
}


console.log(mensaje); // clave correcta o incorrecta
```







# Manipulación de textos

1. Concatenación
```js
let nombre="Lucas";
let apellido="Perez";
let nombreCompleto = nombre + " " + apellido; // Lucas Perez

// Concatenar utlizando +=
let numero= 5;
numero++; // numero = numero +1; // 6

let saludo = "Hola";
saludo += "¿Cómo estás?"; 
console.log(saludo); // Hola, ¿cómo estás?
```

2. Interpolación: con las plantillas literales (template literals / template strings), se pueden insertar variables o expresiones dentro de una cedena usando "${}".

```js
let nombre="Ana";
let edad= 25;

// Interpolación
let mensaje= `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

// Insertar expresión
let total = 50; 
let iva = 0.21; 
console.log(`el total con impuestos es: ${ total + total * iva}`);


```



3. Métodos de Strings
JS nos ofrece una variedad de metodos para manipular cadenas de textos. Algunos ejemplos comunes son: 
    - `toUpperCase()` y `toLowerCase()`
    convierte todas las letras de una cadena en mayúsculas o minúsculas.

    - `split()`
    divide una cadena en una lista array basada en un separador.

    - `slice()`
    extrae una porción de la cadena basada en índices de inicio y fin.

    - `replace()`
    reemplaza una parte de la cadena por otra. 

    - `trim()`
    elimina los espacios en blanco al inicio y fin de la cadena. 

    - `includes()`
    verifica si una cadena contiene una subcadena espedífica.

    - `startsWith()` y `endsWith()`
    verifica si una cadena comienza o termina con una subcadena espedífica.

    - `repeat()`
    repite una cadena un número específico de veces.


    ```js  
    let text = "Me encanta Javascript";

    // toUpperCase y toLowerCase 
    console.log(text.toUppercase ()); // ME ENCANTA JAVASCRIPT 
    console.log(text.toLowerCase ()); // me encanta javascript 

    // split
    const palabras = text.split(" ");
    console.log(palabras); // ["Me", "encanta", "javascript"]
    const palabras = text.split("encanta");
    console.log(palabras_2); // ["Me", "javascript"]

    let csv = "rojo, verde, azul"; 
    console.log("Lista de colores: ", csv.split(","));  // ["rojo", "verde", "azul"]
    "archivo.csv"



    // slice
    let frase = "Aprender javascript es muy divertido";
    console.log("Parte de frase: ", frase.slice(9,19)); // "javascript"
    console.log("Desde el indice 9 al final: ", frase.slice (9)); // "javascript es divertido"

    // replace
    let frase = "Hola mundo. hola universo";
    console.log("reemplazar 'hola' por 'Hola?: "; frase.replace("hola", "Hola"));
    console.log("reemplazar todos los 'hola' por 'Hola?: "; frase.replace(/hola/g, "Hola"));
    // cambia todos usando regEX (expresiones regulares)


    // trim
    let frase = "     Hola mi nombre es Luka  ";
    console.log("luego de hacer trim: ", frase.trim()); // despues de hacer trim: Hola mi    nombre es Luka"


    // includes
    let frase = "El sol brilla en el cielo";
    console.log("contiene 'sol'?: ", frase.includes("sol")); 
    console.log("contiene 'luna'?: ", frase.includes("luna")); 


    // starsWith y endsWith 
    let frase = "Javasript es genial"; 

    console.log("¿Empieza con 'Java'?: ", frase.starsWith("Java")); // true
    console.log("¿Termina con 'genial'?: ", frase.endsWith("genial")); // true


    // repeat 
    let risa = "Ja"; 
    console.log("Me causa mucha gracia:", risa.repeat(3)); // JaJaJa
    ```

    Podemos cambiar los metodos

    ```js
    letfrase = "   No me gusta javascript en diseño web   ";

    let resultado = frase.trim() // elimina espacios en blanco
                         .toUpperCase() // convierte el texto a mayusculas 
                         .replace();  // reemplaza texto en mayusculas pq el metodo anterior le hizo .toUpperCase()
    
    console.log(resultado); // ME ENCANTA JAVASCRIPT EN DISEÑO WEB

    ```



