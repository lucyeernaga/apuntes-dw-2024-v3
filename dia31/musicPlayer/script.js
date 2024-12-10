// EJERCICIO 1, EJERCICIO 2
const lista_canciones = ["All I want for Christmas is you", "Last Christmas", "Holly Jolly Christmas", "It's the most wonderful time of the year", "Santa tell me"]
const lista_artistas = ["Mariah Carey", "Wham!", "Michael Bublé", "Andy Williams", "Ariana Grande"]
const lista_mp3 = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", 
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", 
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", 
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", 
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"];




const divListaCanciones = document.getElementById("ListaCanciones");

// obtener nuestro audios HTML
// usando querySelector para agarrar una etiqueta HTML
const audio = document.querySelector("audio");


let idCancionActual = 0; // primera cancion




// EJERCICIO 3
lista_canciones.forEach((cancion, index) => {
    console.log(`${cancion} - id: ${index}`);

    const song = lista_canciones[index];
    const artist = lista_artistas[index];

    // innerHTML (usamos el + para agregar un nuevo elemento) apend, push, +=
    
    // divListaCanciones.innerHTML += `<div class="Lista-cancion">
    //                                   ${index}. ${song} <br> ${artist}
    //                            </div>`;

    divListaCanciones.innerHTML += `<div id="song_${index}" class="Lista-cancion">
                                      ${song} <br>
                                      ${artist}
                              </div>`
});

// EJERCICIO 4
const btnTema3 = document.querySelector("#btnTema3");
btnTema3.addEventListener("click", () => {
    idCancionActual = 2;
    // indice 2 es cancion num3 porque empieza de 0.
    // console.log("Cancion: ", lista_canciones[2]);
    // console.log(`Artista: ${lista_artistas[2]}`);
    imprimirReproduciendo(2); // Holly Jolly Christmas de MB
})

// EJERCICIO 5
document.addEventListener('click', (event) => {
    console.log(event.target.id);
});

// EJERCICIO 6
// buscamos en nuestp HTML todos los divs con class = "Lista_caciones"
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("playingSong");

divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", () => {

        // const id= event.target.id; // song_4
        idCancionActual = i;
        imprimirReproduciendo();

    });
});

function imprimirReproduciendo() {

    const song = lista_canciones[idCancionActual];
    const artist = lista_artistas[idCancionActual];
    console.log("Artista: " +artist+ " - cancion: " + song);

    divPlayingSong.innerHTML = `<div> 
                                    idCancionActual: ${idCancionActual} <br/>
                                    cancion: ${song} <br/>
                                    artista: ${artist}
                                </div>`;

    // cambiar el src de nuestro audio HTML
    console.log(audioPlayer);
    audioPlayer.src = lista_mp3[idCancionActual];
}


// EJERCICIO 8
const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");


btnSig.addEventListener("click", ()=> {
    idCancionActual++;

    // preguntar algo.. que si es la ultima cancion 
        if(idCancionActual == lista_canciones.length -1) {
            idCancionActual = 0; // si es cierto, idCancion = 0
        } else {
            idCancionActual++; // si no es cierto, idCancion va a sumar 1 
        }

    // revisar que no me pase de la ultima cancion (empiece x la 1a)
    imprimirReproduciendo();
});

btnAnt.addEventListener("click", ()=> {
    idCancionActual--;

    // preguntar si estoy en la primera cancion
    if(idCancionActual == 0){
        idCancionActual = lista_canciones.length -1; // 4
    } else {
        idCancionActual--;
    }




    // que si estoy en la primera, me voy a última
    imprimirReproduciendo();
});