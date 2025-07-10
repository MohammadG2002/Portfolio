const words = ["Web Developer", "Web Designer", "Backend Developer"];
const typed = document.getElementById("typed");

let wordIndex = 0;
let letterIndex = 0;

function typeWord() {
    const currentWord = words[wordIndex];

    if (letterIndex === 0) {
        typed.textContent = "";
        setTimeout(() => {
            letterIndex++;
            typed.textContent = currentWord[0];
            typeWord();
        }, 500);
    } else if (letterIndex < currentWord.length) {
        typed.textContent += currentWord[letterIndex];
        letterIndex++;
        setTimeout(typeWord, 90);
    } else {
        setTimeout(() => {
            typed.textContent = "";
            letterIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
            typeWord();
        }, 3000);
    }
}

document.addEventListener("DOMContentLoaded", typeWord);
