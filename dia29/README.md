# Repaso de funciones
En Java, una función (también conocida como método) es un bloque de código que realiza una tarea específica y se puede invocar desde otras partes del programa (es decir, es como una receta que le dice al programa qué hacer).
Las funciones en Java tienen un nombre, pueden aceptar parámetros (entradas) y pueden devolver un valor (salida), aunque no siempre es así.

`¿Qué tiene una función?`
- Nombre: Para poder llamarla, como el nombre de una receta.
- Entrada: A veces necesita ingredientes, que son los datos que le das (también llamados parámetros).
- Acciones: Son las instrucciones que la función sigue para hacer su trabajo.
- Salida: A veces, la función devuelve un resultado (también llamado valor de retorno). Si no devuelve nada, se dice que la función es void.



<!-- (una funcion es para ejecutar una accion) -->


```js 

// Funciones nombradas
function suma(a,b) {
    // let resultado = a+b;
    // return resultado;
    return a+b;
}

console.log(suma(5,3)); // 8
const res = suma(24, -3); // res = 21





// -----------------------------------------------
// Funciones anónimas
const cuadrado = function (a) {
    return a*a; //aqui estoy definiendo la funcion
}


const res = cuadrado(3); // 9 (aqui la estoy usando)
let res2 = cuadrado(5); // 25





// ------------------------------------------------
// Funcion Flecha
// funcion que devuelve el cubo de un numero

const cubo = function (a) {
    return a * a * a;
}
const res3 = cubo(3); // 27





// Funcion flecha con 1 solo parametro y sin return 
// recibe un numero y devuelve el doble de ese numero


// optimización 1: quitar parentesis cuando tengo 1 solo parametro 
// optimización 2: si mi código  tiene  1 sola linea, puedo devolverlo sin llaves ni return
const doble = a => return a * 2


console.log(doble(3)); // 6


```