menuIcon = document.querySelector('#menu-icon');
navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
});

var typed = new Typed(".animated-text", {
    strings : ['Devops engineer','Cloud Engineer', 'Infrastructure Engineer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
