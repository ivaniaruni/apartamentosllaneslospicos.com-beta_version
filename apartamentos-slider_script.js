const slider = document.querySelector(".slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

next.addEventListener("click", () => {
    if (index < 6) { // Ajusta según la cantidad de imágenes -1
        index++;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});

prev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});