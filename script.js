const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("aperto");
});

const linkMenu = menu.querySelectorAll("a");

linkMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aperto");
    });
});


// Forza la pagina a partire dalla Home dopo un aggiornamento

history.scrollRestoration = "manual";

function tornaInAlto() {
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
}

window.addEventListener("load", function () {
    setTimeout(tornaInAlto, 50);
});

window.addEventListener("pageshow", function () {
    setTimeout(tornaInAlto, 100);
});