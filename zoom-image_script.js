document.addEventListener("DOMContentLoaded", () => {
    const sliderImages = document.querySelectorAll(".slider img");

     const imgModal = document.createElement("div");
     imgModal.classList.add("img-modal", "hide");
     imgModal.innerHTML = '<div class="img-modal-content"><span class="img-close">&times;</span><img class="img-modal-img" src="" alt=""></div>';
     document.body.appendChild(imgModal);
 
     const imgModalContent = imgModal.querySelector(".img-modal-content");
     const imgModalImg = imgModal.querySelector(".img-modal-img");
     const imgClose = imgModal.querySelector(".img-close");
 
     sliderImages.forEach(img => {
         img.addEventListener("click", () => {
             imgModalImg.src = img.src;
             imgModal.style.display = "flex";
             setTimeout(() => {
                 imgModalContent.style.transform = "translateY(0)";
                 imgModalContent.style.opacity = "1";
             }, 10);
         });
     });
 
     imgClose.addEventListener("click", () => {
         imgModalContent.style.transform = "translateY(-50px)";
         imgModalContent.style.opacity = "0";
         setTimeout(() => {
             imgModal.style.display = "none";
         }, 300);
     });
 
     imgModal.addEventListener("click", (event) => {
         if (event.target === imgModal) {
             imgModalContent.style.transform = "translateY(-50px)";
             imgModalContent.style.opacity = "0";
             setTimeout(() => {
                 imgModal.style.display = "none";
             }, 300);
         }
     });
});