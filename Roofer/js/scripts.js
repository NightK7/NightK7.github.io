///////////////////////////////////////////////////////////////////////////////////////////////
// POUR LE MESSAGE DE ROTATION
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById("rotate-alert").style.display = "block";
    } else {
        document.getElementById("rotate-alert").style.display = "none";
    }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);

///////////////////////////////////////////////////////////////////////////////////////////////
// POUR L'AFFICHAGE DU CONTENU AN FONSTION DU MENU SUR LE COTER
document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-content li a");
    let prevButton = document.getElementById("prevButton");
    let nextButton = document.getElementById("nextButton");
    let sections = document.querySelectorAll(".content");
    let currentIndex = 0; // Index de la section actuellement visible

    // Fonction pour afficher la section active en utilisant fade-in
    function showSection(index) {
        let currentSection = document.querySelector(".content.active");
        if (currentSection) {
            currentSection.classList.remove("active");
            currentSection.classList.remove("fade-in"); // Retirer fade-in de la section actuelle
        }

        // Afficher la nouvelle section avec fade-in
        let targetSection = sections[index];
        if (targetSection) {
            targetSection.classList.add("fade-in");
            targetSection.classList.add("active");

            // Enlever fade-in après l'animation
            targetSection.addEventListener("animationend", function () {
                targetSection.classList.remove("fade-in");
            });
        }
    }

    // Navigation avec les éléments du menu
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            let sectionId = this.getAttribute("data-target");

            // Trouver l'index de la section à afficher
            currentIndex = Array.from(sections).findIndex(section => section.id === sectionId);
            showSection(currentIndex);
        });
    });

    // Navigation avec le bouton précédent
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
        showSection(currentIndex);
    });

    // Navigation avec le bouton suivant
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
        showSection(currentIndex);
    });

    // Affichage initial de la première section (si nécessaire)
    showSection(currentIndex);
});

///////////////////////////////////////////////////////////////////////////////////////////////
//BOUTON APPELEZ-NOUS
document.addEventListener("DOMContentLoaded", function () {
    let contactButton = document.getElementById("btncontact");

    contactButton.addEventListener("click", function (event) {
        if (!navigator.userAgent.match(/Mobi/)) { // Vérifie si l'utilisateur est sur PC
            event.preventDefault(); // Empêche l'ouverture du lien tel:
            let phoneNumber = "+33556225195";

            navigator.clipboard.writeText(phoneNumber).then(function () {
                // alert("📋 Numéro copié : " + phoneNumber);
                showCopyNotification("📋 Numéro copié : " + phoneNumber);
            }, function (err) {
                console.error("Erreur de copie : ", err);
            });
        }
    });
    function showCopyNotification(message) {
        let notification = document.getElementById("copyNotification");
        notification.textContent = message;
        notification.style.display = "block";

        setTimeout(function () {
            notification.style.display = "none";
        }, 3000); // Disparaît après 3 secondes
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////
//BOUTONS PRECEDENT ET SUIVANT
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = Array.from(document.querySelectorAll(".menu-content a"));
    const contents = Array.from(document.querySelectorAll(".content"));
    let currentIndex = 0;

    function showContent(index) {
        if (index < 0 || index >= contents.length) return;
        contents.forEach((content) => content.classList.remove("active"));
        contents[index].classList.add("active");
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

    document.getElementById("nextButton").addEventListener("click", nextContent);
    document.getElementById("prevButton").addEventListener("click", prevContent);

    menuItems.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            showContent(index);
        });
    });

    showContent(0);
});
///////////////////////////////////////////////////////////////////////////////////////////////
// TABLEAU DS HORAIRES D'OUVERTURE
function verifierHoraire() {
    const maintenant = new Date();
    const heure = maintenant.getHours();
    const jour = maintenant.getDay();
    let estOuvert = false;

    if (jour >= 1 && jour <= 5) {
        if (heure >= 8 && heure < 18) estOuvert = true;
    }
    if (jour === 5 && heure >= 8 && heure < 17) estOuvert = true;

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
        // alert("Email copié 📧: " + email);
        showCopyNotification2("📧 Email copié : " + email);
    }).catch(err => {
        console.error("Erreur lors de la copie : ", err);
    });
}
function showCopyNotification2(message) {
    let notification = document.getElementById("copyNotification2");
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(function () {
        notification.style.display = "none";
    }, 3000); // Disparaît après 3 secondes
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

///////////////////////////////////////////////////////////////////////////////////////////////
// POUR LA COMPARAISON DSE IMAGES
const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison .before-image");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");

slider.addEventListener("input", (e) => {
    let sliderValue = e.target.value;

    beforeImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;

    sliderLine.style.left = sliderValue + "%";
    sliderIcon.style.left = sliderValue + "%";
});