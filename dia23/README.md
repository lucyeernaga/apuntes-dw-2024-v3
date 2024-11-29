# Javascript

Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, que se usa principalmente para hacer páginas web interactivas (en concreto para crear contenido dinámico e interactivo en sitios web):

1. Mostrar mensajes cuando el usuario hace clic en un botón.
2. Cambiar el contenido de la página sin tener que recargarla.
3. Validar formularios antes de enviarlos.
4. Crear animaciones y efectos visuales.


Lenguaje de alto nivel: 
- está diseñado para ser fácil de leer y escribir para humanos.

Interpretado: 
- Se ejecuta linea x linea y en tiempo real. No necesita ser compilado. 

- Orientado a objeto: Js utiliza un paradigma (OOP),lo que significa que organiza el código en objetos.
    - Un objeto es una colección de propiedades y métodos que se pueden leer y manipular.



```js
let numero = 1; 
consolel.log("Mi numero vale: ", numero);
// imprime "Mi numero vale: 1"; 
numero = numero + 2; 
consolel.log("Mi numero vale: ", numero);
// imprime "Mi numero vale: 3"; 
```









<!-- Ejemplo de orientado a objeto -->

Perro // Propiedades ( son atributos que va a tener nuestro elemento)

- color:blanco y negro
- nombre: Teo
- size: pequeño
- cantidadPatas: 4


// Métodos (son funcionalidades que tiene mi objeto. Es decir, cosas que tiene mi objeto)

- ladrar(): Hacer un ruido fuerte
- comer(): ingerir alimentos
- moverLaCola(): demostrar felicidad moviendo la cola



```js
let alumno = {
    nombre: " Juan",
    edad: 16,
    saludar: = function() {
        console.log("Hola, mi nomre es Juan");
    }
}

// quiero imprimir los datos mi alumno.
console.log(alumno.nombre); // Juan
console.log("Me llamo", alumno.nombre, " y tengo", alumno.edad, "años");
// Me llamo Juan  tengo 16 años

// Para que el alumno me salude uso: 
alumno.saludar(); 

```

## Donde probar/codificar JS

- En el navegador: en la pestaña de consola,escribimos directamente.
- En etiquetas de html '<script></script>', en un principio se recomienda poner las etiquetas 
al final del body.
- Se puede usar en archivos externos con extension ".js" y linkeados a nuestro HTML. '<script src="./js/mi-archivo.js"></script>'
- En sitios web externos
    1. https://playcode.io/new
    2. https://linangdata.com/javascript-tester/
    3. https://codepen.io/
    4. https://jsfiddle.net/


## Funcionalidades 
1. Interacción con el usuario: puede reaccionar a lo que el usuario hace en la página, como hacer clic en un botón, mover el ratón o escribir en un campo de texto.

2. Manipulación del DOM (Documento Object Model): Agregar, modificar o eliminar elementos HTML y CSS.

3. Validar formularios: Antes de enviar un formulario (por ejemplo, un formulario de registro o contacto), JavaScript puede verificar que la información que el usuario ingresó sea correcta.
(Ej. Comprobar si un campo de texto está vacío antes de enviarlo)

4. Animaciones y efectos visuales: puede crear/manipular efectos como animaciones, cambios de color o desplazamientos de elementos en la página.

5. Manejo de eventos: responder a las acciones del usuario Ej: click, desplazarse por la web.

6. Conexión con servidores (Ajax/Fetch): puede comunicarse con servidores para obtener información sin recargar la página. Esto se usa, por ejemplo, en aplicaciones de redes sociales o en buscadores.


## Variables 

las variables son como cajas donde puedes guardar información. Esta información puede ser de distintos tipos, como números, texto, o incluso más complejos como listas o objetos.

Nos permite almacenar datos para después modificarlos o usarlos en diferentes partes de nuestro programa.


¿Cómo se usan las variables?
- Definir una variable: Asignarle un nombre para encontrarla más adelante.
- Asignar un valor: Se le da un valor a esa variable, que puede ser un número, texto, etc. (es decir, es poner cosas dentro de la caja, se realiza con el símbolo "=").

En JS las variables se declaran con la palabra `let`o `const`. Antes se usaba la palabra `var`como valor. 

    - let: permite que el contenido de la caja sea modificado.
    - const: no permite que le contenido de la caja sea modificado. Y utiliza menos expacio de memoria de la pc.




```js
let nombre = "Luis Angel"
let edad = 26;
const PI= 3.141516;
PI=4; // devuelve error
```



## Comentarios en JS

- Simple `//`
- Simple en la misma linea `nombre= "Luis Angel" // Soy comentario`
- Bloque: `/* ...... */`
- Comentario de documentación, este se usa para comentarios de funciones y clases. 

```js
// soy simple
nombre = "Luis" ;// soy simple detras de línea

/*
 Soy multilínea
*/

/**
 * Esta es una función que suma dos números
 * la obtuve de esta url : http://asasadada
 * 
 * @param {number} a - El primer número
 * @param {number} b - El segundo número
 * @return {number} La suma de los 2 números anteriores (a+b)  
 *  */
function sumar(a,b){
    return a+b;
}
```




## Tipos de Datos 

- Números: enteros, decimales, positivos, negativos. (los decimales son con "." ej: 3,5 )
- Cadena de Texto (Strings): textos, palabras, frases, 1 letra. 
Entre comillas simples '', comillas dobles "", o backticks ``. 
- Booleanos: Verdadero / Falso (true, false)
- Lista de cosas (Arrays): Se escriben entre crochetes [] y se separan con comas ",". 
- Objeto (Object): Colección de propiedades (características) y métodos (funcionalidades), y se escriben con { }





```js
// PRIMITIVOS
let texto = "Hola alumnos del CEI";
let textoConComillas = 'Hola estoy "bien"';
let textoConComillasSimple = "I'm Liz"
let texto = `Puedo usar comillas 'simples' y "dobles"`; //template String

let numeros = 123;
let numeros2 = "123";
numeros2 = Number(numeros2); // Convierte strings a números

let entero = 25;
let decimal = 22.30;
let negativo = -5;
const PI= 3.141516;
let num1234 = Number("1234");

let estaPrendido = false;
let isPrimary = true;
let onActive =false;
let esMenorDeEdad = false;

// REFERENCIALES

//Listas /arrays/ arreglos

const alumnosDeDW =["Daniel","Jaime","Laura","Liz"];
const edades =[25,32,30,29];
const listMix=[1,"Luis",true,{edad:18,nombre:"Laura"}]

const listaCompras =["tomates","lechuga"];
listaCompras =["tomate","lechuga","papa"];

console.log(listaCompras[0]);

//Objetos
const alumno={
    nombre:"Luis",
    edad:25,
    saludar:function(name){console.log('Hola , mi nombre es ', name)}
}

alumno.edad = 26;
alumnos.saludar("Liz");
```
