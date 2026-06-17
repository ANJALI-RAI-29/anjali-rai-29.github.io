/* =========================
   DAMRU WEBSITE
========================= */

/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2200);

});

/* =========================
   THEME TOGGLE
========================= */

const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("damru-theme");

if(savedTheme === "light"){

    document.body.classList.add("light");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    themeBtn.textContent =
        isLight ? "☀️" : "🌙";

    localStorage.setItem(
        "damru-theme",
        isLight ? "light" : "dark"
    );

});

/* =========================
   DAMRU SOUND
========================= */

const audio =
document.getElementById("damruAudio");

const soundBtn =
document.getElementById("soundToggle");

const damru =
document.querySelector(".hero-damru");

let soundEnabled = true;

soundBtn.textContent = "🔊";

soundBtn.addEventListener("click",()=>{

soundEnabled=!soundEnabled;

soundBtn.textContent=
soundEnabled ? "🔊":"🔇";

});

damru.addEventListener("click",()=>{

damru.classList.add("beat");

if(soundEnabled){

audio.currentTime=0;
audio.play();

}

setTimeout(()=>{

damru.classList.remove("beat");

},500);

});
/* =========================
   ENTER EXPERIENCE
========================= */

const enterBtn =
document.getElementById("enterBtn");

if(enterBtn){

    enterBtn.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior: "smooth"

        });

    });

}

/* =========================
   CONTACT FORM
========================= */

const form =
document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const oldText =
        form.querySelector("button").innerText;

        form.querySelector("button").innerText =
        "Message Sent ✓";

        setTimeout(() => {

            form.reset();

            form.querySelector("button").innerText =
            oldText;

        }, 3000);

    });

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(

".about-card, .focus-card, .project-card, .timeline-item, .github-card"

);

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold: 0.15
}

);

revealElements.forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});

/* =========================
   FLOATING PARALLAX
========================= */

window.addEventListener("mousemove", (e) => {

const damru =
document.querySelector(".hero-damru");

if(!damru) return;

const x =
(e.clientX / window.innerWidth - 0.5) * 20;

const y =
(e.clientY / window.innerHeight - 0.5) * 20;

damru.style.transform =
`translate(${x}px, ${y}px)`;

});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.75)";

navbar.style.backdropFilter =
"blur(30px)";

} else {

navbar.style.background =
"rgba(0,0,0,.3)";

}

});

/* =========================
   REVEAL CLASSES
========================= */

const style =
document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(40px);

transition:
opacity .8s ease,
transform .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
"%cडमरू",
"font-size:32px;color:gold;font-weight:bold;"
);

console.log(
"Rhythm of Innovation"
);
/* =========================
   PREMIUM 3D DAMRU
========================= */

const heroDamru =
document.querySelector(".hero-damru");

document.addEventListener(
"mousemove",
(e)=>{

if(!heroDamru) return;

const x =
(e.clientX/window.innerWidth-0.5)*30;

const y =
(e.clientY/window.innerHeight-0.5)*30;

heroDamru.style.transform = `
rotateY(${x}deg)
rotateX(${-y}deg)
`;

});
