let button = document.querySelector(".fourth__button");
let back = document.querySelector(".back");
let front = document.querySelector(".front");

let back1 = document.querySelector(".back1");
let front1 = document.querySelector(".front1");

button.addEventListener("mouseover", () => {
    back.classList.remove("back__active");
    front.classList.remove("front__active");

    back1.classList.add("back__active1");
    front1.classList.add("front__active1");
});

button.addEventListener("mouseout", () => {
    back.classList.add("back__active");
    front.classList.add("front__active");

    back1.classList.remove("back__active1");
    front1.classList.remove("front__active1");
});
