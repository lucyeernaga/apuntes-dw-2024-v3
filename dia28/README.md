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
    function diaSemana(dia) {
        dia = dia.trim().toLowerCase(); 
        const lunes = "lunes";
        const martes = "martes";
        const miercoles = "miercoles";
        const jueves = "jueves";
        const viernes = "viernes";
        const sabado = "sabado";
        const domingo = "domingo";

        let mensaje = "Laborable"; 
        // if (dia == lunes || dia == martes || dia == miercoles || dia == jueves || dia == viernes) {
        //     mensaje = "Laborable";
        // }
        if (dia == sabado || dia == domingo) { mensaje = "NO Laborable";}
        
        return mensaje;
    };

    btnEj4.addEventListener("click", () => {
        let dia = prompt("Día de la semana");

        let resultado = diaSemana(dia);
        console.log(resultado);
    });

    // Ejercicio 5 - "piedra", "papel" o "tijera"
    function PiedraPapel(jugador1, jugador2) {
        const = piedra = "piedra";
        const = papel = "papel";
        const = tijera = "tijera";
        let mensaje = "";


    // if (jugador1 == piedra && jugador2 == piedra, jugador1 == papel && jugador2 == //papel, jugador1 == tijera && jugador2 == tijera) { mensaje = "Empate";}

    // if (jugador1 == piedra %% jugador2 == papel) || (jugador1 == tijera %% jugador2 //== piedra) || (jugador1 == papel %% jugador2 == tijera) 
    // { mensaje = "Gana jugador 2;
    // } else {mensaje = "Gana jugador 1";}



        if (jugador1 == piedra && jugador2 == piedra) { mensaje = "Empate";}
        if (jugador1 == papel && jugador2 == papel) { mensaje = "Empate";}
        if (jugador1 == tijera && jugador2 == tijera) { mensaje = "Empate";}
        if (jugador1 == piedra && jugador2 == papel) { mensaje = "Gana jugador 2";}
        if (jugador1 == papel && jugador2 == piedra) { mensaje = "Gana jugador 1";}
        if (jugador1 == tijera && jugador2 == piedra) { mensaje = "Gana jugador 2";}
        if (jugador1 == piedra && jugador2 == tijera) { mensaje = "Gana jugador 1";}
        if (jugador1 == papel && jugador2 == tijera) { mensaje = "Gana jugador 2";}
        if (jugador1 == tijera && jugador2 == papel) { mensaje = "Gana jugador 1";}


        return mensaje;
    };
</script>