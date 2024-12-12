## Recordamos el uso de ForEach y Map

- Importane: la diferencia entre uno y otro es que el forEach no retorna nada, mientras que el map retorna un nuevo array con los reultados de la función que se le pasa. 

```js
const numeros = [1,2,3,4,5];

// ejemplo utilizando forEach
const cuadrados = [];
numeros.forEach((num) => {
    console.log(num);
    cuadrados.push(num * num);
});

// numeros;forEach(num=>{
//      console.log(num);
//      cuadrados.push(num * num);
// });
console.log(cuadrados); // [1,4,9,16,25]


// ejemplo utilizando map
const cuadradosMap = numeros.map(num => num * num);
console.log(cuadradosMap); // [1,4,9,16,25]
```


## Métodos de Búsqueda de Array
Los métodos de búsqueda se podrían considerar como un método map() modificada, que devuelve tanto elements¡os como booleanos. 

```js
const lista_coches = ["Peugeot", "BMW", "VW", "Tesla", "Ford", "BYD"];

// Find (devuelve el primer elemento que encuentre)
const coche = lista_coches.find( coche=> coche === "BMW");
console.log(coche); // BMW


// Some (booleano, si hay alguno que cumple el requisito)
const tieneTesla = lista_coches.some ( coche => coche === "Tesla");
console.log(tieneTesla); // true 


// Every (booleano, si TODOS cumplen el requisito)
const todosEmpiezanConB = lista_coches.every( coche => coche[0] === "B")
console.log(todosEmpiezanConB); // false


// Filter ( todos los elementos que CUMPLAN el requisito)
const cochesQueEmpiezanConB = lista_coches.filter ( coche => coche [0] === "B" ); 
console.log(cochesQueEmpiezanConB); // ["BMW", "BTD"]

const cochesConT = lista_coches.filter( coche => coche.includes("T"));
console.log(cochesConT); // ["Tesla"]

const cochesConTyt = lista_coches.filter( coche => coche.toLowerCase() .includes("t"));
console.log(cochesConTyt); // ["Peugeot", "Tesla"]

const cochesDeTresLetras = lista_coches.filter( coche => coche.length === 3 );
console.log(cochesDeTresLetras); // ["BMW", "BTD"]
```








## Teoría 
