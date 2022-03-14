// Swiper
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

// Typed contact
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