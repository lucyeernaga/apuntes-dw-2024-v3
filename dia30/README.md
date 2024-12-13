# Bucles: For, ForEach, While, Do-While, Map
For: Ejecutar un codigo una x cantidad de veces.
- Muy util para trabajr con indices

ForEach: Ejecutar un codigo x cantidad de veces
- A diferencia del For, trabajamos con un método de listas y podemos acceder tanto al valor como a su indice este ultimo siendo opcional. ** El indice se ocupara cuando se desee actualizar la lista.

While: Definir una variable al inicio y mientras se cumple esa variable se realiza lo que esta dentro de las {}.

Do While: Realiza el codigo y despues pregunta si se realizara el codigo o no. A comparacion del While este bucle siempre se ejecuta al menos una vez.

Map: Recorre el elemento y devuelve una copia de la lista.este no modifica el array original.

Conversion de texto a Numero
- Number(numero)
- parseInt(numero)

Comando para salir siempre de cualquier bucle
- break

```js
// bucle for
for(let i =0; i<10; i++){
    console.log(i);
}

// bucle forEach
const listNumeros = [1,2,3,4,5,6];
listaNumeros.forEach((numero, indice) =>{
    console.log(`Elemento ${numero} y su indide es ${indice}`);
});

//bucle While
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

// Do-While
let ii =0;
do{
    console.log(ii);
    i++;

}while(ii<10);

// Map
 const lista_nums = [1,2,3,7];
const lista_copia = lista_nums.map((number,index)=>{
    console.log(`Numero ${number} en la posición ${index}`);
    
});

console.log(lista_nums); // [1,2,3,7]
console.log(lista_copia); // [1,2,3,7]

const lista_dobles = lista_nums.map((numero)=>{
     return numero*2
})
Console.log(lista_dobles);
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
