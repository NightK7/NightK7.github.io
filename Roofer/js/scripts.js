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

// POUR LE FORMULAIRE DE CONTACT
function sendMail() {
    e.preventDefault();

    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var adresse = document.getElementById("adresse").value;
    var why = document.getElementById("why").value;
    var subject = document.getElementById("subject").value;

    var ebody = "Prénom: " + prenom + "\r\n"
        + "Nom: " + nom + "\r\n"
        + "Email: " + mail + "\r\n"
        + "Téléphone: " + phone + "\r\n"
        + "Adresse: " + adresse + "\r\n"
        + "Message: " + subject;

    document.getElementById('formContact').action = "mailto:lefebvre.laveau.sylvain@gmail.com?subject="
        + encodeURIComponent(why)
        + "&body=" + encodeURIComponent(ebody);

    alert("Lien mailto généré : " + mailtoLink);
    // window.location.href = mailtoLink;
}