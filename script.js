/* =========================
   ENTER EXPERIENCE ACTION
========================= */
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }
    });
}

/* =========================
   CONTACT FORM
========================= */
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const button = form.querySelector("button");
        const oldText = button.innerText;
        button.innerText = "Message Sent ✓";
        setTimeout(() => {
            form.reset();
            button.innerText = oldText;
        }, 3000);
    });
}

/* =========================
   SCROLL REVEAL (ANIMATION)
========================= */
const revealElements = document.querySelectorAll(
    ".about-card, .focus-card, .project-card, .timeline-item, .github-card"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* =========================
   PREMIUM 3D DAMRU & PARALLAX
========================= */
const heroDamru = document.querySelector(".hero-damru");
document.addEventListener("mousemove", (e) => {
    if (!heroDamru) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    heroDamru.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translate(${x/1.5}px, ${y/1.5}px)`;
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.backdropFilter = "blur(30px)";
    } else {
        navbar.style.background = "rgba(0,0,0,.3)";
        navbar.style.backdropFilter = "none";
    }
});

/* =========================
   REVEAL CLASSES CSS
========================= */
const style = document.createElement("style");
style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity .8s ease, transform .8s ease;
}
.show {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);
