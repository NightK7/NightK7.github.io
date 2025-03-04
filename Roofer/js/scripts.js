// POUR L'AFFICHAGE DU CONTENU AN FONSTION DU MENU SUR LE COTER
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les liens du menu
    let menuItems = document.querySelectorAll(".menu-content li a");

    // Ajoute un écouteur d'événements à chaque lien
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut

            // Récupère la valeur de l'attribut data-target pour cibler la section correspondante
            let sectionId = this.getAttribute("data-target");

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

// TABLEAU DS HORAIRES D'OUVERTURE
function verifierHoraire() {
    const maintenant = new Date();
    const heure = maintenant.getHours();
    const jour = maintenant.getDay(); // 0 = Dimanche, 1 = Lundi, etc.
    let estOuvert = false;

    if (jour >= 1 && jour <= 5) { // Lundi à Vendredi
        if (heure >= 8 && heure < 18) estOuvert = true;
    }
    if (jour === 5 && heure >= 8 && heure < 17) estOuvert = true; // Vendredi

    document.getElementById("etat-horaire").innerHTML = estOuvert
        ? "🟢 <strong>Venez, nous sommes ouverts !</strong>"
        : "🔴 <strong>Nous sommes actuellement fermés.</strong>";
}

verifierHoraire(); // Exécuter au chargement de la page

function sendMail(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var adresse = document.getElementById("adresse").value;
    var why = document.getElementById("why").value;
    var subject = document.getElementById("subject").value;

    var ebody = "Prénom: " + prenom + "\n"
        + "Nom: " + nom + "\n"
        + "Email: " + mail + "\n"
        + "Téléphone: " + phone + "\n"
        + "Adresse: " + adresse + "\n"
        + "Message: " + subject;

    var mailtoLink = "mailto:lefebvre.laveau.sylvain@gmail.com"
        + "?subject=" + encodeURIComponent(why)
        + "&body=" + encodeURIComponent(ebody);

    console.log("Mailto Link:", mailtoLink); // Vérification dans la console

    window.location.href = mailtoLink; // Ouvre le client mail
}