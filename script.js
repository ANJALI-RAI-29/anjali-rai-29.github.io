/* ==========================================================================
   VERSION 3 UNIVERSAL RUNTIME - FOOLPROOF AUTO-BINDING
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Damru V3 Engine Initialized successfully!");

    // 1. Enter Experience Button Tracking Setup
    // Aapke code me id ya class jo bhi ho, ye sabko auto-detect karega
    const enterBtn = document.getElementById("enterBtn") || 
                     document.querySelector(".primary-btn") || 
                     document.querySelector("button");

    if (enterBtn) {
        console.log("Enter button found and auto-linked!");
        enterBtn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Smooth scrolling initiated...");
            
            // About section ko target karna
            const aboutSection = document.getElementById("about") || 
                                 document.querySelector(".about-grid") || 
                                 document.querySelector("section:nth-of-type(1)");
            
            if (aboutSection) {
                aboutSection.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                });
            } else {
                // Agar koi section target nahi mila toh screen ko automatic 800px niche scroll karega
                window.scrollTo({
                    top: window.innerHeight || 800,
                    behavior: "smooth"
                });
            }
        });
    }

    // 2. Interactive 3D Parallax Mouse Motion (Auto-detecting classes)
    const heroDamru = document.querySelector(".hero-damru") || 
                      document.querySelector("img[src*='damru']") || 
                      document.querySelector(".hero-right img");
                      
    const heroSection = document.querySelector(".hero") || 
                        document.querySelector("section") || 
                        document.body;

    if (heroSection && heroDamru) {
        console.log("3D Damru Asset Layer linked!");
        heroSection.addEventListener("mousemove", (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (-y / rect.height) * 30; 
            const rotateY = (x / rect.width) * 30;
            
            heroDamru.style.transition = "transform 0.1s ease-out";
            heroDamru.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });
        
        heroSection.addEventListener("mouseleave", () => {
            heroDamru.style.transition = "transform 0.5s ease";
            heroDamru.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    }

    // 3. Ambient Custom Glow Pointer Ring
    const pointerGlow = document.createElement("div");
    pointerGlow.style.position = "fixed";
    pointerGlow.style.width = "300px";
    pointerGlow.style.height = "300px";
    pointerGlow.style.background = "radial-gradient(circle, rgba(214, 168, 79, 0.08) 0%, transparent 70%)";
    pointerGlow.style.pointerEvents = "none";
    pointerGlow.style.transform = "translate(-50%, -50%)";
    pointerGlow.style.zIndex = "9999";
    pointerGlow.style.mixBlendMode = "screen";
    document.body.appendChild(pointerGlow);

    document.addEventListener("mousemove", (e) => {
        pointerGlow.style.left = e.clientX + "px";
        pointerGlow.style.top = e.clientY + "px";
    });
});
// 4. Apple Magnetic Buttons Integration
const magneticButtons = document.querySelectorAll(".primary-btn, .secondary-btn, .icon-btn");

magneticButtons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const bound = btn.getBoundingClientRect();
        const mouseX = e.clientX - bound.left - bound.width / 2;
        const mouseY = e.clientY - bound.top - bound.height / 2;
        
        // Halka realistic elastic pull index effect
        btn.style.transform = `translate(${mouseX * 0.3}px, ${mouseY * 0.3}px) scale(1.02)`;
    });
    
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0px, 0px) scale(1)";
    });
});
