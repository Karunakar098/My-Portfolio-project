/*=============toggle icon bar============*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click",() =>
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/*=============scroll sections active link============*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window .onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset)
        {
                navlinks.forEach.apply(links =>{
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" +id+ "]").classList.add("active");
                });
        };
    });

    /*=============sticky nav  bar============*/
    let navbar = document.querySelector('navbar');
    navbar.classListtoggle("sticky", width.scrollY > 100);

    /*===============remove toggle icon and navbar================*/
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

    /*=============sticky nav  bar============*/
ScrollReveal({
    distance:"80px",
    duration:2000,
    delay:200,
});

ScrollReveal().reveal(".home-content, heading",{origin:"top"} );
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact-form", {origin:"button"});
ScrollReveal().reveal(".home-contact h1, .about-img",{origin:"left"});
ScrollReveal().reveal("home-contact p, .about-cntact",{origin:"right"});

/*===========typed js=============*/

const typed = new Typed(".multiple-text" , {
strings:["Frontend Developer","Web Desiner","Full Stack Developer"],
typeSpeed: 70,
backSpeed: 70,
backDelay: 1000,
loop
});
