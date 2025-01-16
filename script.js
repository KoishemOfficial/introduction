// Typewriter code

const text = "KOISHEM";
const typewriterElement = document.querySelector('.typewriter');
const typingSpeed = 40;

let index = 0;

function typeText(){
    if (index < text.length){
        typewriterElement.textContent += text[index];
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const delay = 1200;
  
    setTimeout(() => {
      typeText();
    }, delay);
  });