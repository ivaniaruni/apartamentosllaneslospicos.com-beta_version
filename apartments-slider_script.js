document.querySelectorAll(".slide-container").forEach(container => {
    const slider = container.querySelector(".slider");
    const prev = container.querySelector(".prev");
    const next = container.querySelector(".next");

    if (!slider || !prev || !next) return; // Evita errores si faltan elementos

    let index = 0;
    const slides = slider.children.length;

    next.addEventListener("click", () => {
        if (index < slides - 1) {
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
});