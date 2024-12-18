// -------------------------------------------------------------------
// 1. Declaro constantes y variables
// -------------------------------------------------------------------


const sliderImages = document.querySelector('.Slider-images');
const images = document.querySelectorAll('.Slider-img');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length;

const lista_imagenes = [
    {}, {}, {}
]

// -------------------------------------------------------------------
// 2. EventListeners y Funciones
// -------------------------------------------------------------------


btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);


function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    actualizarSlider();
    actualizarContador();
}
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    actualizarSlider();
    actualizarContador();
}
function actualizarSlider() {
    const width = 400;
    sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
}
function actualizarContador() {
    spanActual.textContent = currentImageIndex + 1;
}


// -------------------------------------------------------------------
// 3. Inicializamos/Ejecutamos nuestro código
// -------------------------------------------------------------------

spanTotal.textContent = totalImages;
actualizarContador();


// -------------------------------------------------------------------
// 4. Funcionalidad de Interval
// -------------------------------------------------------------------

// esta funcion lo que hace es: coger el listener para cuando paso el mouse por encima de sliderImages
sliderImages.addEventListener('mouseover', () => {
    // console.log("ESTOY ENCIMA"); 
    // elimina cualquier timer guardado dentro de "intervalo"
    clearInterval(intervalos);
});


sliderImages.addEventListener('mouseout', () => {
    // console.log("ME FUI DEL SLIDER");
    agregarIntervalo();
});



function agregarIntervalo() {
    // guardo en "intervalos"...
    // crear un intervalo con setInterval ("funcion a ejecutar", tiempo);
    intervalos = setInterval(nextImage, 1000);
}

agregarIntervalo();





// corregir codigo para que sea suit
// comentar js y css los elementos importantes
// aprender a manejar el intervalo: activar/ desactivar, cambiar tiempo