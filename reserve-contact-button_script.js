document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("reservation-modal");
    const closeModal = document.querySelector(".close");
    const closeBtn = document.getElementById("close-btn");
    const reserveButtons = document.querySelectorAll(".reserve");
    
    modal.style.display = "none";

    reserveButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
