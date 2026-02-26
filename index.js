const scroller = document.getElementById("game-carousel");
const btnLeft  = document.getElementById("carousel-btn-left");
const btnRight = document.getElementById("carousel-btn-right");

// How far to scroll each click (adjust to taste)
const scrollAmount = scroller.clientWidth * 0.1;

btnRight.addEventListener("click", () => {
    scroller.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

btnLeft.addEventListener("click", () => {
    scroller.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});