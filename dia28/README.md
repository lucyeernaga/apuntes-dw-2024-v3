## Ejercicios

Utilizando funciones, condicionales y operadores comparativod, realizar los siguientes ejercicios: 

```js
// pedirle un numero al usuario 
let numero = promt("Ingresa un numero");
```



1. Crear una funcion que reciba un numero y devuelva si es par o impar.
2. Crear una funcion que reciba un numero y devuelva si es positivo, negativo o cero.
3. Crear una funcion que si le envio una edad me devuelva si es mayor o menor de edad.
4. Crear una funcion a la que si le indico el dia de la semana, me devuelva si es un dia laboral o no.
5. Crear una funcion donde sus parametros sean jugador1 y jugador2, y devuelva si el jugador1 gana al jugador2 en un juego de "piedra", "papel" o "tijera".





## otras maneras de hacerlo+
<script>
    // Ejercicio 1 - Par o impar
    // Ejercicio 2 - Negativo, positivo o cero
    function verificarNumero(numero) {
        if (numero > 0) {
            return "El numero " + numero + " es positivo";
        } else if (numero < 0) {
            return "El numero " + numero + "es negativo";
        } else {
            return "El numero es cero"
        }
        }

    const esPositivoONegativo = document.querySelector("#ej2");
    esPositivoONegativo.addEventListener("click", () => {
        // Pedirle un numero al usuario
        let numero = prompt("Ingresa un numero");
        if (isNaN(numero)) {
            alert("Por favor, ingresa un numero valido.");
        } else {
            let resultado = verificarNumero(numero); // Aqullamamos a la función correcta
            console.log(resultado);
            alert(resultado);
        }
    });


    // Ejercicio 3 - Mayor o menor de edad
    function mayorOMenorEdad(numero) {
        if (numero >= 18) {
            return "Es mayor de edad";
        } else (numero < 18) {
            return "Es menor de edad";
        }
    }

    const mayorOMenorEdad = document.querySelector("#ej3");
    mayorOMenorEdad.addEventListener("click", () => {

    });
    // Ejercicio 4 - Dia de la semana laboral o no
    // Ejercicio 5 - "piedra", "papel" o "tijera"
</script>