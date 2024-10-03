
let menu = document.getElementById("menu-desplegable");
let black = document.getElementById("menu-black");

let primera = window.scrollY;

window.addEventListener("scroll", function () {

    let actual = window.scrollY;

    if (actual > primera) {
        menu.style.transition = "0.3s";
        menu.style.top = "0px";
    } else {
        menu.style.transition = "0.3s";
        menu.style.top = "40px";

        black.style.position = "fixed";
        black.style.zIndex = "1000";
    }

    primera = actual;
})


let logo_fifa = document.getElementById("logo-fifa");
let logo_zau = document.getElementById("logo-zau");
let logo_f1 = document.getElementById("logo-f1");
let logo_sims = document.getElementById("logo-sims");
let logo_dragon = document.getElementById("logo-dragon");
let logo_apex = document.getElementById("logo-apex");


let c1 = document.getElementById("col1");
let c2 = document.getElementById("col2");
let c3 = document.getElementById("col3");
let c4 = document.getElementById("col4");
let c5 = document.getElementById("col5");
let c6 = document.getElementById("col6");

c2.addEventListener("mouseover", function () {

    logo_f1.style.top = "145%";
    logo_f1.style.transition="0.5s";

    c2.addEventListener("mouseout", function () {
        logo_f1.style.top = "165%";
        logo_f1.style.transition="0.5s";

    })
})
c1.addEventListener("mouseover", function () {

    logo_dragon.style.top = "145%";
    logo_dragon.style.transition="0.5s";

    c1.addEventListener("mouseout", function () {
        logo_dragon.style.top = "165%";
        logo_dragon.style.transition="0.5s";

    })
})
c3.addEventListener("mouseover", function () {

    logo_zau.style.top = "145%";
    logo_zau.style.transition="0.5s";
    c3.addEventListener("mouseout", function () {
        logo_zau.style.top = "165%";
        logo_zau.style.transition="0.5s";

    })
})
c4.addEventListener("mouseover", function () {

    logo_fifa.style.top = "210%";
    logo_fifa.style.transition="0.5s";
    c4.addEventListener("mouseout", function () {
        logo_fifa.style.top = "230%";
        logo_fifa.style.transition="0.5s";

    })
})

c5.addEventListener("mouseover", function () {

    logo_sims.style.top = "210%";
    logo_sims.style.transition="0.5s";
    c5.addEventListener("mouseout", function () {
        logo_sims.style.top = "230%";
        logo_sims.style.transition="0.5s";

    })
})
c6.addEventListener("mouseover", function () {

    logo_apex.style.top = "210%";
    logo_apex.style.transition="0.5s";

    c6.addEventListener("mouseout", function () {
        logo_apex.style.top = "230%";
        logo_apex.style.transition="0.5s";
    })
})


document.querySelector('.btn-group').addEventListener('mouseover', function() {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.add('show');
});

document.querySelector('.btn-group').addEventListener('mouseout', function() {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
});