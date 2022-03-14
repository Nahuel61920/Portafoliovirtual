let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

const buttons = document.getElementById('buttons');
const textsToChange = document.querySelectorAll('[data-section]');

const btnSwitch = document.querySelector("#switch");


// Loader
window.onload = () => {
    if(window.scrollY > 0){
    document.querySelector(".site-header").classList.add("activar")
    }else document.querySelector(".site-header").classList.remove("activar")

    fadeOut();
}

function loader(){
    document.querySelector('.loading-container').classList.add('active');
    }

function fadeOut(){
    setTimeout(loader, 1000);
}

// Nav
menu.onclick = () => {
    navbar.classList.toggle("activar")
}

window.onscroll = () => {
    if(window.scrollY > 0){
    document.querySelector(".site-header").classList.add("activar")
    }else document.querySelector(".site-header").classList.remove("activar")

    navbar.classList.remove("activar")
}

//languge
const changeLanguage = async language => {
    const requestJson = await fetch(`language/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.textContent = texts[section][value];
    }
};

buttons.addEventListener('click', e => {
    const language = e.target.dataset.language;
    if (language) {
        changeLanguage(language);
    }
});

// Dark mode
btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
        if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else{
        localStorage.setItem("dark-mode", "false");
    }
})


if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
} else {
    document.body.classList.remove("dark");
}

//Section
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 200,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Btn up
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 0) {
			$('#cm-up').slideDown(300);
		} else {
			$('#cm-up').slideUp(300);
		}
	});
	$('#cm-up').on('click', function(){
		$('body, html').animate({
			scrollTop: 0
		},1);
		return false;
	});
});

// Leer mas
let btnHide = document.querySelector("#btn-hide");
let parrafoActive = document.querySelector(".parrafo-active");

btnHide.addEventListener("click", readMore);

function readMore() {
    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
        btnHide.innerHTML = "↑";
    } else {
        btnHide.innerHTML = "Read more";
    }
}

// nav proyectos
let btnWeb = document.querySelector("#btn-web"), btnApps = document.querySelector("#btn-apps"), btnGames = document.querySelector("#btn-games")
let paginasWeb = document.querySelector("#paginas-web");
let apps = document.querySelector("#apps");
let games = document.querySelector("#games");

btnWeb.addEventListener("click", (e) =>{
    e.preventDefault();
    paginasWeb.classList.remove("proyecto-none");
    apps.classList.add("proyecto-none");
    games.classList.add("proyecto-none");
    btnWeb.classList.add("active");
    btnApps.classList.remove("active");
    btnGames.classList.remove("active");
});
btnApps.addEventListener("click", (e) =>{
    e.preventDefault();
    paginasWeb.classList.add("proyecto-none");
    apps.classList.remove("proyecto-none");
    games.classList.add("proyecto-none");
    btnWeb.classList.remove("active");
    btnApps.classList.add("active");
    btnGames.classList.remove("active");
});
btnGames.addEventListener("click", (e) =>{
    e.preventDefault();
    paginasWeb.classList.add("proyecto-none");
    apps.classList.add("proyecto-none");
    games.classList.remove("proyecto-none");
    btnWeb.classList.remove("active");
    btnApps.classList.remove("active");
    btnGames.classList.add("active");
});
