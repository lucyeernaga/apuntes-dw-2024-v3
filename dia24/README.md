# Javascript 2 (continuación)

## Más tipos de datos 

- Undefined: es un valor que se asigna a una variable pero que no tiene valor.
- Null : valor que se asigna a una variable que no tiene valor.
- NaN(Not a Number): valor que se asigna cuando se esperaba un número pero lo que se recibió no es un número.
`let edad = Number ("Hola como andan?"); // NaN`
- Empty: String tiene un valor de '' o "".
- Función: Si la variable es una función, el resultado será "function".
- Fecha:

```js
let noDefinido = undefined;
let nulo = null;
let noEsUnNumero = NaN;
let vacio = "";
const moverLaCola = function (){}
const hoy = new Date();
```

### Typeof

El operador typeof en JavaScript se utiliza para verificar el tipo de una variable o valor. Es como una herramienta que te dice si algo es un número, texto, objeto, etc.

```js
console.log(typeof noDefinido);//undefined
console.log(typeof vacio);//String
console.log(typeof hoy);//Object
console.log(typeof moverLaCola)//function
```





## Consola

La consola en JavaScript es una herramienta que te permite ver mensajes mientras tu programa está corriendo. Es como una pizarra donde puedes escribir cosas para saber qué está pasando en tu código.
Cuando escribes console.log(), estás pidiendo que se muestre algo en esa "pizarra". Esto es útil para ver valores, comprobar si el código funciona o encontrar errores.


### Propósito principal:

- Depuración: Ayuda a los desarrolladores a entender el comportamiento del código al mostrar el estado de las variables o el flujo de ejecución.

- Registro de eventos: Permite registrar eventos importantes para su análisis posterior, como la interacción de un usuario o el resultado de una operación.
Permite depurar el codigo



```js
console.log("Este es un mensaje informativo");
console.error("Este es un mensaje de error");
console.warn("Esto es una advertencia");
console.info("Este es un mensaje de informacion");
console.debug("Mensaje de depuración");
//Tabla de datos
console.table(["Manzana","Banana","Cereza"]);
```








## Operadores aritméticos

Los operadores aritméticos en JavaScript son símbolos que nos permiten realizar operaciones matemáticas con números. Son muy fáciles de usar y nos ayudan a hacer cálculos.

- Suma(+): Se usa para sumar dos números.

        ```js
        let a = 5;
        let b = 3;
        let resultado = a + b; // 5 + 3 = 8
        console.log(resultado); // Imprime 8
        ```


- Resta(-): Se usa para restar un número de otro.

        ```js
        let a = 10;
        let b = 4;
        let resultado = a - b; // 10 - 4 = 6
        console.log(resultado); // Imprime 6
        ```


- Multiplicación(*): Se usa para multiplicar dos números.

        ```js
        let a = 4;
        let b = 6;
        let resultado = a * b; // 4 * 6 = 24
        console.log(resultado); // Imprime 24
        ```


- División (/): Se usa para dividir un número entre otro.

        ```js
        let a = 12;
        let b = 3;
        let resultado = a / b; // 12 / 3 = 4
        console.log(resultado); // Imprime 4
        ```


- Módulo (%):  Devuelve el resto de la división de dos números. Es útil para saber si un número es divisible por otro o si es par o impar.

        ```js
        let a = 10;
        let b = 3;
        let resultado = a % b; // 10 % 3 = 1 (porque 10 dividido entre 3 da un cociente de 3 y un resto de 1)
        console.log(resultado); // Imprime 1
        ```


- Incremento (++): Aumenta el valor de una variable en 1. Es como sumar 1.

        ```js
        let a = 5;
        a++; // Ahora a vale 6
        console.log(a); // Imprime 6
        ```


- Decremento(--): Disminuye el valor de una variable en 1. Es como restar 1.

        ```js
        let a = 5;
        a--; // Ahora a vale 4
        console.log(a); // Imprime 4
        ```





```js
let a = 10;
let b= 5;
let suma = a+b; // 15
let resta = a-b; // 5
let multiplicar = a*b; // 50
let division = a/b; // 2
let modulo = a%b; // 0
let incremento = a++ ;// 11
let decremento = b--;//4
```