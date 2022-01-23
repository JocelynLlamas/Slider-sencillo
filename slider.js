const slider = document.querySelector(".cajaSliders");
let sliderSection = document.querySelectorAll("#slide");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#flechaIzq");
const btnRight = document.querySelector("#flechaDer");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll("#slide")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(acomodarDerecha(sliderSectionFirst), 500);
}

function acomodarDerecha(sliderSectionFirst) {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
}

btnRight.addEventListener('click', function () {
    moverDerecha();
});

function moverIzquierda() {
    let sliderSection = document.querySelectorAll("#slide");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";

    setTimeout(acomodarIzquierda(sliderSectionLast), 500);
}

function acomodarIzquierda(sliderSectionLast) {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
}

btnLeft.addEventListener('click', function () {
    moverIzquierda();
});