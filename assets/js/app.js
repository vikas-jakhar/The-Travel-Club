AOS.init({ once: true });

const tick = document.querySelectorAll(".flight");

tick.forEach(e => {
    e.addEventListener("click", function () {
        e.classList.toggle("tick");
    })
});

const btnstays = document.querySelectorAll(".h-2");

btnstays.forEach(btn1 => {
    btn1.addEventListener("click", function () {
        const linebottom = document.querySelector(".h-2.h-21");
        linebottom && linebottom.classList.remove("h-21");
        btn1.classList.add("h-21");
    });
});

let one = document.querySelector(".one");
let Flights12 = document.querySelector(".Flights12");
let Stays = document.querySelector(".Stays");
let cars12 = document.querySelector(".cars12");
let packages = document.querySelector(".packages");
let things = document.querySelector(".things");
let Cruises = document.querySelector(".Cruises");

one.addEventListener("click", function () {
    Stays.style.display = "flex";
    Flights12.style.display = "none";
    cars12.style.display = "none";
    packages.style.display = "none";
    things.style.display = "none";
    Cruises.style.display = "none";
});

let two = document.querySelector(".two");
two.addEventListener("click", function () {
    Stays.style.display = "none";
    Flights12.style.display = "flex";
    cars12.style.display = "none";
    packages.style.display = "none";
    things.style.display = "none";
    Cruises.style.display = "none";
});

let three = document.querySelector(".three");
three.addEventListener("click", function () {
    Stays.style.display = "none";
    cars12.style.display = "flex";
    Flights12.style.display = "none";
    packages.style.display = "none";
    things.style.display = "none";
    Cruises.style.display = "none";
});

let four = document.querySelector(".four");
four.addEventListener("click", function () {
    Stays.style.display = "none";
    cars12.style.display = "none";
    Flights12.style.display = "none";
    things.style.display = "none";
    Cruises.style.display = "none";
    packages.style.display = "flex";
});

let five = document.querySelector(".five");
five.addEventListener("click", function () {
    Stays.style.display = "none";
    cars12.style.display = "none";
    Flights12.style.display = "none";
    things.style.display = "flex";
    packages.style.display = "none";
    Cruises.style.display = "none";
});

let six = document.querySelector(".six");
six.addEventListener("click", function () {
    Stays.style.display = "none";
    cars12.style.display = "none";
    Flights12.style.display = "none";
    things.style.display = "none";
    packages.style.display = "none";
    Cruises.style.display = "flex";
});

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const menulist = document.querySelector(".menu-list");
const menuicon = document.querySelector(".menu-icon");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
    menuicon.classList.toggle("open");
});

let loader = document.querySelector(".preloder");

loader.style.display = "flex"

setTimeout(() => {
    loader.style.display = "none";
}, 1000);

const scrolltop1 = document.querySelector(".scrolltop");

scrolltop1.addEventListener("click", function () {
    window.scroll({
        top: 0,
    })
});