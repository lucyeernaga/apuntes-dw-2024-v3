# Métodos de Arrays 

## Push()
Añade un nuevo item 

```js 

// Push
// Añade u nuevo item
const frutas = ["Manzanas", "Naranjas", "Plátanos"];
let nuevaLongitud = frutas.push("Peras", "Bananas");
console.log(nuevaLongitud); // 5
console.log(frutas); // ["Manzanas", "Naranjas", "Plátanos", "Peras", "Bananas"]


// Pop
// Eliminar el último elemento del array
// devuelve el elemento eliminado
let elementoEliminado = frutas.pop();
console.log(elementoEliminado); // Bananas
console.log(frutas); // ["Manzanas", "Naranjas", "Plátanos", "Peras"]


// Shift
// Elimina el primer elemento del array, y lo devuelve.
let elementoQuitado = frutas.shift();
console.log(elementoQuitado); // "Manzana"
console.log(frutas); // ["Naranjas", "Plátanos", "Peras"]

// Unshift
// Es como push, pero agrega al principio. Devuelve el largo del array
nuevaLongitud = frutas.unshitft("sandía", "melón");
console.log(nuevaLongitud); // 5
console.log(frutas); // ["sandía", "melón", "Naranjas", "Plátanos", "Peras"]

// Splice
// posee 3 parametros
// el 1o: El índice donde se va a posicionar
// el 2o: La cantidad de elementos a eliminar
// el 3o: Los elementos a agregar
// devuelve elementos eliminados
const.elementosQuitados = frutas.splice(2, 1, "kiwi", "frutilla"); 
console.log(elementosQuitados); // "Naranjas"
console.log(frutas); // ["sandía", "melón", "kiwi", "frutilla", "Plátanos", "Peras"]


frutas.splice(0,1); // quitando el 1er elemento
frutas.splice(-1, 1); // quitando el ultimo elemento
frutas.splice(2,2); // quitar 2 elementos a partir del indice 2
frutas.splice(-1, 0, "Mandarina", "Papaya"); // [....]
```