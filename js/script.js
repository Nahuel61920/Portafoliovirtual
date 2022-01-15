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

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active")
})

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