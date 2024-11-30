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

if(pass.length <= 8 ) {
    mensaje= "INCORRECTA: La pass debe tener al menos 8 caracteres";
}
if(pass.includes ("")) {
    mensaje= "INCORRECTA: La pass no debe tener espacios";
}
if(pass.includes (user)) {
    mensaje= "INCORRECTA: La pass no puede incluir tu nombre de usuario";
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
console.log(èl total con impuestos es: ${ total + total * iva}`);


```



3. Métodos de Strings


