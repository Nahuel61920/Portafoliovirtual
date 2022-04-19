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
    setTimeout(loader, 1100);
}

// particles

particlesJS(
    {
    "particles": {
        "number": {
        "value": 6,
        "density": {
            "enable": true,
            "value_area": 800
        }
        },
        "color": {
        "value": "#1b1e34"
        },
        "shape": {
        "type": "polygon",
        "stroke": {
            "width": 0,
            "color": "#000"
        },
        "polygon": {
            "nb_sides": 6
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 160,
        "random": false,
        "anim": {
            "enable": true,
            "speed": 10,
            "size_min": 40,
            "sync": false
        }
        },
        "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
        },
        "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": false,
            "mode": "grab"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
    }
)

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


// Ver respuestas
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});

// nav proyectos
let btnWeb = document.querySelector("#btn-web"), btnApps = document.querySelector("#btn-apps"), btnGames = document.querySelector("#btn-games")
let paginasWeb = document.querySelector(".paginas-web");
let apps = document.querySelector(".apps");
let games = document.querySelector(".games");

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
