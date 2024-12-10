# Bucles: For, ForEach, While, Do-While, Map

```js
// Bucle For: ejecutar un código x cantidad de veces. Es muy util para trabajar con indices
for(let i=0; i< 10; i++){
    console.log(i);
}


// Bucle ForEach (por cada elemento quiero hacer algo) forEach es un metodo de lista y lista es un array, o sea que cualquier array tiene un metodo forEach
// A diferencia del For, trabajamos directamente con un metodo de listas, y podemos acceder tanto al valor como al indice.
const listaNumeros = [1,2,3,4,6];
listaNumeros.forEach( (numero, indice) => {
    console.log(`Elemento ${numero} y su indice es ${índice}`);
});

listaNumeros.forEach( (numero) => {
    console.log(`Elemento ${numero}`;)
});


listaNumeros.forEach( (num, 1) => {
    // actualizamos los valores de la lista, sumandole 1 a cada uno
    listaNumeros[i]=num+1;
});
console.log(listaNumeros); // [2,3,4,5,7]



// Bucle While (mientras)
let i = 0;
while(i< 10){
    console.log(i);
    i++;
}



// Do-while
// la diferencia con While es que este bucle se ejecuta siempre al menos 1 vez.
let ii = 0;
do {
    console.log(ii);
    ii++;
} while (ii < 10);




// Bucle Map
// Esta lista no solo procesa el bucle, sino que tb me devuelve una copia de esa lista.
// a diferencia del foreach, el metodo Map devuelve una copia del array 
// Ninguno de los 2 modifica el array original
const lista_nums= [1,2,3,7];
const lista_copia = lista_nums.map( (numero, index)=>{
    console.log(`Numero ${numero} en la posición ${index}`);
});

console.log(lista_nums); // [1,2,3,7];
console.log(lista_copia); // [1,2,3,7];

const lista_dobles = lista_nums.map( (num)=>{
    // num = num*2;
    return num*2;
});


console.log(lista_dobles); // [2,4,6,14]










```






# Ejercicios

Ejercicio 1: crear una lista con los nombres de sus compañeros, y mostrarlos en consola con un bucle for.
Ejercicio 2: recrear el ej1, usando foreach y mostrando el indice del alumno.
Ejercicio 3: crear un bucle while que le pida al usuario un numero (prompt), y los vaya sumando hasta que el ususario ingrese el valor 0. Mostrar el total.


```js
const listaAlumnos=["María", "Alin", "Alejo", "Lucía", "Kristiyan", "Begoña"];

    // console.log(listaAlumnos [0]);
    // console.log(listaAlumnos [1]);
    // console.log(listaAlumnos [2]);


// ej1
for(let i=0; i < listaAlumnos.length; i++){
    console.log(listaAlumnos[i]);
}  

const listaAlumnos=["María", "Alin", "Alejo", "Lucía", "Kristiyan", "Begoña"];

// ej2
listaAlumnos.forEach( (alumno, indice) => {
    const item=indice+1;
    console.log(`${item}.   ${alumno}`);
});

// ej2
const listaAlumnos=["María", "Alin", "Alejo", "Lucía", "Kristiyan", "Begoña"];
listaAlumnos.forEach( alumno => console.log(alumno));


// ej3

let numero;
let total=0;

    while(numero !=0) {

        numero = prompt("Ingresa un valor"); // "5"
        numero = Number(numero); // "5" => 5
        numero = parseInt(numero); // "5" => 5

        total += numero; // 0 + 5 = 5
        console.log(total;)
    }


let numero;
let total=0;

    do {
        numero = prompt("Ingresa un valor"); // "5"
        numero = Number(numero); // "5" => 5
        numero = parseInt(numero); // "5" => 5

        total += numero; // 0 + 5 = 5
    } while(numero !=0);

    alert(total);
```
