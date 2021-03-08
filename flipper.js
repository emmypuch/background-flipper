const colors = ["azure", "red", "purple", "blue", "rgba(133, 122,200)", "#f15025", "#5e9e9f"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // get random numbers between 0-6
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}