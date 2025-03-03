document.addEventListener("DOMContentLoaded", () => {
    const sliderImages = document.querySelectorAll(".slider img");

    const imgModal = document.createElement("div");
    imgModal.classList.add("img-modal", "hide");
    imgModal.innerHTML = `
        <div class="img-modal-content">
            <span class="img-close">&times;</span>
            <span class="img-close_vertical">&times;</span>
            <img class="img-modal-img" src="" alt="">
        </div>`;
    document.body.appendChild(imgModal);

    const imgModalContent = imgModal.querySelector(".img-modal-content");
    const imgModalImg = imgModal.querySelector(".img-modal-img");
    const imgClose = imgModal.querySelector(".img-close");
    const imgCloseVertical = imgModal.querySelector(".img-close_vertical");

    sliderImages.forEach(img => {
        img.addEventListener("click", (event) => {
            imgModalImg.src = img.src;
            imgModal.style.display = "flex";

            const isVertical = event.target.closest("#vertical") !== null;

            if (isVertical) {
                imgCloseVertical.style.display = "block";
                imgClose.style.display = "none";
            } else {
                imgCloseVertical.style.display = "none";
                imgClose.style.display = "block";
            }

            setTimeout(() => {
                imgModalContent.style.transform = "translateY(0)";
                imgModalContent.style.opacity = "1";
            }, 10);
        });
    });

    function closeModal() {
        imgModalContent.style.transform = "translateY(-50px)";
        imgModalContent.style.opacity = "0";
        setTimeout(() => {
            imgModal.style.display = "none";
        }, 300);
    }

    imgClose.addEventListener("click", closeModal);
    imgCloseVertical.addEventListener("click", closeModal);
    imgModal.addEventListener("click", (event) => {
        if (event.target === imgModal) {
            closeModal();
        }
    });
});