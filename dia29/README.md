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
function suma(a,b){
    let resultado = a+b;
    return resultado;
}

console.log(suma(10,5));// 15
const resultado = suma(24,-3); // res = 21;


// Funciones anonimas

 const cuadrado = function(a){
    return a*a;
}

console.log(cuadrado(3));//9


// Funciones flechas
// funcion que devuelve el cubo de un numero.
const cacularCubo = (num) =>{
    return num *num * num;
}
 const result = calcularCubo(3)//27

// funcion flecha con 1 solo parámetro y sin return
// Recibe un numero y devuelve el doble de ese numero

// Optimizacion 1: quitar parentesis cuando tengo un solo parametro
// Optimizacion 2: si mi codigo tiene 1 sola linea, puedo devolverlo sin llaves ni return

const calcularDoble = (num)=>{2num}
const doble = a =>a*2;
```