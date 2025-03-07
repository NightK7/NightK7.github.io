///////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////
//BOUTONS PRECEDENT ET SUIVANT
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = Array.from(document.querySelectorAll(".menu-content a"));
    const contents = Array.from(document.querySelectorAll(".content"));
    let currentIndex = 0;

    function showContent(index) {
        // Vérifier si l'index est valide
        if (index < 0 || index >= contents.length) return;

        // Cacher tous les contenus
        contents.forEach((content) => content.classList.remove("active"));

        // Montrer le contenu correspondant
        contents[index].classList.add("active");

        // Mettre à jour l'index actuel
        currentIndex = index;
    }

    function nextContent() {
        if (currentIndex < contents.length - 1) {
            showContent(currentIndex + 1);
        }
    }

    function prevContent() {
        if (currentIndex > 0) {
            showContent(currentIndex - 1);
        }
    }

    // Ajouter les événements sur les boutons
    document.getElementById("nextButton").addEventListener("click", nextContent);
    document.getElementById("prevButton").addEventListener("click", prevContent);

    // Activer la navigation depuis le menu
    menuItems.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            showContent(index);
        });
    });

    // Initialiser avec la première section active
    showContent(0);
});
///////////////////////////////////////////////////////////////////////////////////////////////
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

//Copier l'email
function copyEmail() {
    var email = "lefebvre.laveau.sylvain@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copié : " + email);
    }).catch(err => {
        console.error("Erreur lors de la copie : ", err);
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////
//Slide show
let slideIndex = 1;

//slide1 avant-toit
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//slide2 avant-toit
showSlides2(slideIndex);

function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex = n);
}
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}