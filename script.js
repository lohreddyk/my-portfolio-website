// Dynamic Text Animation
const dynamicText = document.querySelector('.dynamic-text');
const words = ['Student', 'Web Developer', 'Frontend Enthusiast'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
            return;
        }
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); // Pause before next word
            return;
        }
    }
    setTimeout(type, isDeleting ? 50 : 150);
}

type();

// Resume Download Alert
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("📄 Your resume is downloading...");
  });
}

// Scroll Animation
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // Reveal on load too
