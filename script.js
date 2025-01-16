// Typewriter code
let texts = ["Software Engineer", "Web Developer", "Not even a junior", "Lifelong Gamer", "Creator", "3D Designer", "Inexperienced", "Self-taught Programmer", "MCfunction Enthusiast", "Unemployed"];
let textIndex = 0;
let typingSpeed = 40;
let eraseSpeed = 20;
let typewriterElement = null;
let rolesElement = null;

function typeText() {
    let currentText = texts[textIndex];
    let index = 0;

    function type() {
        if (index < currentText.length) {
            rolesElement.textContent += currentText[index];
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (index > 0) {
            rolesElement.textContent = rolesElement.textContent.slice(0, index - 1);
            index--;
            setTimeout(eraseText, eraseSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 1000);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    typewriterElement = document.querySelector('.typewriter');
    rolesElement = document.querySelector('.roles');
    
    let index = 0;
    let typewriterText = "KOISHEM";
    
    function typeTypewriter() {
        if (index < typewriterText.length) {
            typewriterElement.textContent += typewriterText[index];
            index++;
            setTimeout(typeTypewriter, typingSpeed);
        } else {
            setTimeout(typeText, 1000);
        }
    }

    setTimeout(typeTypewriter, 1400);
});
