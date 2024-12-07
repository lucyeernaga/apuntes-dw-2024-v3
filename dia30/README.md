# Bucles: For, ForEach, While, Do-While

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

let numero=-1;
let total=0;

    while(true){

        numero = prompt("ingresa un numero distinto a 0");
        numero = Number(numero);
        total= total+numero;
        console.log(total;)
    }



```
