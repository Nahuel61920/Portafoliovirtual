let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("activar")
}

window.onscroll = () => {
    if(window.scrollY > 0){
    document.querySelector(".site-header").classList.add("activar")
    }else document.querySelector(".site-header").classList.remove("activar")

    navbar.classList.remove("activar")
}

window.onload = () => {
    if(window.scrollY > 0){
    document.querySelector(".site-header").classList.add("activar")
    }else document.querySelector(".site-header").classList.remove("activar")

}



document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    const scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}

const btnSwitch = document.querySelector("#switch");


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

var swiper = new Swiper(".proyectos-slider", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});


const typed = new Typed('.typed', {
    strings: [
        '<i class="site-contacto"> Gmail </i> ',
        '<i class="site-contacto"> WhatsApp </i> ', 
        '<i class="site-contacto"> Instragram </i> ', 
        '<i class="site-contacto"> Twitter </i>',
        '<i class="site-contacto"> Linkedin </i>',
        '<i class="site-contacto"> Github </i>'
    ],
    
    stringsElement: '#cadenas-texto', 
    typeSpeed: 75, 
    startDelay: 1000, 
    backSpeed: 75, 
    smartBackspace: true, 
    shuffle: false, 
    backDelay: 1000,  
    loop: true,  
    loopCount: false, 
    showCursor: true, 
    cursorChar: '|', 
    contentType: 'html', 
});

