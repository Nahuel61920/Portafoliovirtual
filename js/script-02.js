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
    setTimeout(loader, 1000);
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

