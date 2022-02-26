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

    fadeOut();
}


function loader(){
    document.querySelector('.loading-container').classList.add('active');
    }

function fadeOut(){
    setTimeout(loader, 2500);
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

