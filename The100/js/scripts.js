// LA NAVBAR
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink (retrecir) function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

//FORMULAIRE DE CONTACT
function sendMail() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var subject = document.getElementById("subject").value;
    var raison = document.getElementById("raison").value;

    var ebody = '\r\n' + 'Prénom: ' + prenom + '\r\n' + 'Nom: ' + nom;

    document.getElementById('formContact').action = "mailto:jean.bombeur.trash@gmail.com?subject="
        + encodeURIComponent(raison)
        + "&body=" + encodeURIComponent(subject)
        + encodeURIComponent(ebody);
}

//BOUTON BACK TO TOP
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//AFFICHER INFOS LIEUX
function myLocation(id) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    var x = document.getElementById(id);
    var divs = ['camp100', 'arkadia', 'weather', 'tondc', 'deadzone', 'becca', 'polis', 'shallow', 'polaris', 'ark', 'eligius', 'sanctum', 'nakara', 'etherea', 'skyring', 'bardo'];

    for (var i = 0; i < divs.length; i++) {
        if (x != document.getElementById(divs[i])) {
            document.getElementById(divs[i]).style.display = 'none';
        }
    }
    x.style.display = 'block';
}

//IMAGES ZOOM DES LIEUX
function imageZoom(element, id, id2) {
    document.getElementById(id).src = element.src;
    document.getElementById(id2).style.display = "block";
}