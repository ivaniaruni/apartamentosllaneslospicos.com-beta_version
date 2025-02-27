document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("reservation-modal");
    const closeModal = document.querySelector(".close");
    const sendButton = document.getElementById("send-btn");
    const phoneInput = document.getElementById("phone-number");
    const reserveButtons = document.querySelectorAll(".reserve");
    const openReservation = document.getElementById("open-reservation");

    modal.style.display = "none";

    function openModal() {
        modal.classList.remove("hide");
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    }

    function closeModalWithAnimation() {
        modal.classList.remove("show"); 
        modal.classList.add("hide");

        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("hide");
        }, 300);
    }

    reserveButtons.forEach(button => {
        button.addEventListener("click", openModal);
    });

    openReservation.addEventListener("click", (event) => {
        event.preventDefault();
        openModal();
    });

    closeModal.addEventListener("click", closeModalWithAnimation);
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModalWithAnimation();
        }
    });

    sendButton.addEventListener("click", () => {
        const phoneNumber = phoneInput.value.trim();
        const phoneRegex = /^[0-9]{9,15}$/;
        if (phoneRegex.test(phoneNumber)) {
            console.log("Número guardado:", phoneNumber);
            alert("Número guardado correctamente.");
        } else {
            alert("Por favor, ingresa un número de teléfono válido.");
        }
    });
});