document.addEventListener("DOMContentLoaded", function () {
    const legalModal = document.getElementById("legal-modal");
    const legalTitle = document.getElementById("legal-title");
    const legalText = document.getElementById("legal-text");
    const closeModal = document.querySelector(".legal-close");

    const legalLinks = document.querySelectorAll("footer a");

    const legalContent = {
        "Aviso Legal": `
            <p><strong>1. Información General</strong><br>
            Este sitio web, <strong>Apartamentos Los Picos</strong>, es propiedad de "Nombre del Responsable" con domicilio en Porrúa, Llanes, Asturias.<br>
            📧 Email: contacto@apartamentoslospicos.com<br>
            📍 Dirección: Porrúa, Llanes, Asturias<br>
            📞 Teléfono: +34 123 456 789</p>

            <p><strong>2. Propiedad Intelectual</strong><br>
            Todos los contenidos de este sitio web son propiedad exclusiva de <strong>Apartamentos Los Picos</strong>. Queda prohibida su reproducción sin autorización.</p>

            <p><strong>3. Uso del Sitio Web</strong><br>
            El acceso y uso de este sitio implica la aceptación de las condiciones establecidas en este aviso legal.</p>

            <p><strong>4. Protección de Datos</strong><br>
            Consulta nuestra <a href="#" id="show-privacy">Política de Privacidad</a> para más información.</p>
        `,
        "Política de Privacidad": `
            <p><strong>1. Responsable del Tratamiento de Datos</strong><br>
            El responsable del tratamiento de datos personales es "Nombre del Responsable", con domicilio en Porrúa, Llanes, Asturias.</p>

            <p><strong>2. Datos que Recopilamos</strong><br>
            Recopilamos datos personales como nombre, correo electrónico y teléfono cuando contactas con nosotros o realizas una reserva.</p>

            <p><strong>3. Finalidad del Tratamiento</strong><br>
            Los datos recopilados se utilizan exclusivamente para la gestión de reservas y comunicación con los usuarios.</p>

            <p><strong>4. Derechos del Usuario</strong><br>
            Puedes acceder, rectificar o eliminar tus datos en cualquier momento escribiendo a 📧 contacto@apartamentoslospicos.com.</p>

            <p><strong>5. Seguridad de la Información</strong><br>
            Implementamos medidas de seguridad para proteger tu información, pero no podemos garantizar su seguridad absoluta.</p>
        `
    };

    function openLegalModal(section) {
        legalTitle.innerText = section;
        legalText.innerHTML = legalContent[section];
        legalModal.style.display = "flex";
        setTimeout(() => legalModal.classList.add("show"), 10);
    }

    function closeLegalModalWithAnimation() {
        legalModal.classList.remove("show");
        legalModal.classList.add("hide");

        setTimeout(() => {
            legalModal.style.display = "none";
            legalModal.classList.remove("hide");
        }, 300);
    }

    legalLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const section = this.innerText.trim();
            if (legalContent[section]) {
                openLegalModal(section);
            }
        });
    });

    closeModal.addEventListener("click", closeLegalModalWithAnimation);

    window.addEventListener("click", function (event) {
        if (event.target === legalModal) {
            closeLegalModalWithAnimation();
        }
    });
});