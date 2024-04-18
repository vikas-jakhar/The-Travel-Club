
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
