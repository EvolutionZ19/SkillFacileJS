const slide = ["img/slider/slider2.jpg", "img/slider/slider3.jpg", "img/slider/slider4.jpg", "img/slider/slider5.jpg", "img/slider/slider6.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

// setInterval(function() {
//     ChangeSlide(1);
// }, 4000);


