// -----------------
// 1️⃣ Open letter button
// -----------------
const openLetterBtn = document.getElementById("open-letter");
const letterMsg = document.getElementById("letter-message");

openLetterBtn.addEventListener("click", () => {
    letterMsg.classList.remove("hidden"); // show the letter
});

// -----------------
// 2️⃣ Blow out candles button
// -----------------
const blowCandlesBtn = document.getElementById("blow-candles");

blowCandlesBtn.addEventListener("click", () => {
    const flames = document.querySelectorAll(".fuego");
    flames.forEach(f => {
        f.style.animation = "none"; // stop current flame animation
        f.offsetHeight; // force reflow
        f.style.animation = "fuegoBlowOut 1s forwards"; // play blow-out animation
    });
});
