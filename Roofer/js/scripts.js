document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les liens du menu
    let menuItems = document.querySelectorAll(".menu-content li a");

    // Ajoute un écouteur d'événements à chaque lien
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut

            // Récupère le texte du bouton pour cibler la section correspondante
            let sectionId = this.querySelector("span:last-child").textContent.trim();

            // Masque toutes les sections
            document.querySelectorAll(".content").forEach(section => {
                section.classList.remove("active");
            });

            // Affiche la section correspondante
            let targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});