# Funciones de callback / Promesas


## Concepto de Sincrnía vs Asincronía
La sincronía es la ejecución de tareas en un orden secuencial, es decir una detrás de otras.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 2");

function traerDatos(){
    // esperar 3 segundos
    esperar(3000);
    console.log("Paso 2");
}

// Simulación de setTimeout (síncrona)
function esperar(milisegundos){
    const start= new Date().getTime();
    while( new Date().getTime() - start < milisegundos);
}
```


La asincronía es la ejecución de tareas NO secuenciales, es decir se puede ejecutar antes de que la anterior haya terminado.

Esto se usa para. 
- traer info de una base de datos (DB)
- traer info de una API externa
- manipular nuestros propios archivos

Para lograr esto, simplemente debemos enviar como parametro una función de `callback` que se ejecuta añ finalizar la tarea asíncrona.


```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    // esperar 3 segundos
    setTimeout( ()=> {
        console.log("Paso 2");
    }, 3000);
}
```




## Funciones de Callback
Como debemos esperar a que una tarea asíncrona termine para poder continuar con la siguiente, se utilizan los callbacks para realizar una acción después de que la tarea asíncrona ha terminado.



## Promesas
La gran desventaja de los callbacks es que se pueden anidar y se vuelven muy dificiles de leer y mantener. A estp se llama `Callback Hell`. Por eso se han creado las `Promesas`.

```js
const miPromesa = new Promise( (resolve, reject) => {
    console.log("Ejecutando lo que te prometí");
    setTimeout( ()=> {
        resolve("EXITO!");
    }, 3000 )

} );
miPromesa.then(result => {
            console.log(result);  return "Exito 2!";  
        }).then(result => {
            console.log(result); return "Exito3!";   
        }).then(result => {
            console.log(result);   return "Exito 4!";   
        }).then(result => { console.log(result); 
        }).catch(error => co
.catch(error => console.log("Tuve un error", error));
```

## Fetch con promesas



## Fetch con async/await