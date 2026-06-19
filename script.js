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
// 5. Damru AGI Engine Telemetry Loop Script
document.addEventListener("DOMContentLoaded", () => {
    const logsContainer = document.getElementById("agentTerminalLogs");
    if (!logsContainer) return;

    const logTemplates = [
        { text: "[Thought] Analyzing repo structure for auto-optimization...", class: "text-purple" },
        { text: "[Action] Querying local Vector DB arrays for semantic context.", class: "text-cyan" },
        { text: "[LLM] Running inference on prompt weight distribution...", class: "text-gold" },
        { text: "[Cloud] Scaling microservices node grid cluster. Latency: 9ms.", class: "text-green" },
        { text: "[Agent] Loop objective resolved. Syncing localized data locks.", class: "text-cyan" },
        { text: "[Telemetry] Core monitoring active. Listening for user actions...", class: "text-purple" }
    ];

    let currentLogIdx = 0;

    setInterval(() => {
        const newLineNode = document.createElement("div");
        newLineNode.className = `log-line ${logTemplates[currentLogIdx].class}`;
        newLineNode.innerText = logTemplates[currentLogIdx].text;
        
        logsContainer.appendChild(newLineNode);
        
        if (logsContainer.children.length > 4) {
            logsContainer.removeChild(logsContainer.children[0]);
        }
        
        currentLogIdx = (currentLogIdx + 1) % logTemplates.length;
    }, 3500);
});
// 6. Advanced Smooth Scrolling Mechanics for Hero Nodes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// 7. Advanced Theme Toggle & Persistence Management Engine
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    // Local Storage se user ki purani preference check karna
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.innerText = "☀️"; // Sun icon for light mode
    }

    // Toggle click trigger operation
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        let theme = "dark";
        if (document.body.classList.contains("light-mode")) {
            theme = "light";
            themeToggle.innerText = "☀️";
        } else {
            themeToggle.innerText = "🌙";
        }
        
        // Memory me state save karna taaki refresh par reset na ho
        localStorage.setItem("theme", theme);
    });
});
// ==========================================================================
// 8. DAMRU SMART CONVERSATIONAL CHAT BOT ENGINE (FRIENDLY EDITION)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chatInput");
    const sendChatBtn = document.getElementById("sendChatBtn");
    const chatBody = document.getElementById("chatBody");

    if (!chatInput || !sendChatBtn || !chatBody) return;

    const triggerBotResponse = () => {
        const rawInput = chatInput.value.trim();
        const userText = rawInput.toLowerCase();
        if (userText === "") return;

        // User ka message screen par dikhana
        chatBody.innerHTML += `<p style="color: #94a3b8; margin: 4px 0;">[You]: ${rawInput}</p>`;
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        let reply = "";

        // 1. GREETINGS & WELCOME
        if (userText.includes("hello") || userText.includes("hi") || userText.includes("hey") || userText.includes("hii") || userText.includes("yo")) {
            reply = "Hi! How can I help you today? 😊 You can ask me about my skills, projects, or how to contact me!";
        } 
        else if (userText.includes("whats up") || userText.includes("sup") || userText.includes("kya haal")) {
            reply = "All good here! 😎 Just hanging out in the digital world and showing some cool work. How's everything on your end?";
        }
        else if (userText.includes("yourself") || userText.includes("who") || userText.includes("intro") || userText.includes("about") || userText.includes("name")) {
            reply = "I am the DAMRU Chat Bot! 🤖 I was built from scratch to act as a friendly virtual guide for this portfolio. I can show you my creator's skills, tech stack, and top projects!";
        }

        // 2. MOOD & EMPATHY
        else if (userText.includes("sad") || userText.includes("bad") || userText.includes("upset") || userText.includes("depressed")) {
            reply = "Oh no, I'm so sorry to hear that! 🥺 I might just be a small bot, but I truly hope your day gets a lot brighter soon. Maybe checking out some creative projects here will cheer you up! ✨";
        }
        else if (userText.includes("happy") || userText.includes("good") || userText.includes("feeling") || userText.includes("how are you")) {
            reply = "I'm feeling great! ⚡ Super happy and ready to show you around. How are you doing today?";
        }

        // 3. FUN & HUMOR (Fix for "R u dumb?")
        else if (userText.includes("dumb") || userText.includes("stupid") || userText.includes("pagal") || userText.includes("fool")) {
            reply = "Hey, give me some credit! 😜 I might not know everything, but I'm smart enough to instantly guide you to the coolest 'skills' and 'projects' on this site! Give it a try.";
        }

        // 4. MAUSAM / WEATHER (Ab ekdam simple aur pyara)
        else if (userText.includes("weather") || userText.includes("rain") || userText.includes("hot") || userText.includes("climate") || userText.includes("mausam")) {
            reply = "I don't really know the weather out there since I live inside this website! ⛅ But I truly hope it's a beautiful, pleasant day wherever you are browsing from!";
        }
        else if (userText.includes("eat") || userText.includes("food") || userText.includes("khana") || userText.includes("lunch")) {
            reply = "Haha, I don't eat real food since I'm just a chat script! 🍰 But I hope you're having something really delicious today!";
        }
        
        // 5. PROJECTS, SKILLS & CONTACT
        else if (userText.includes("skill") || userText.includes("tech") || userText.includes("know") || userText.includes("code")) {
            reply = "I work with C programming, HTML, CSS, and JavaScript. Currently, I'm diving deep into modern domains like Cloud Computing, AI, and Machine Learning! 🚀";
        } 
        else if (userText.includes("project") || userText.includes("work") || userText.includes("built") || userText.includes("website")) {
            reply = "I love building things! 🌟 Right now, my top features are: 1. A Sustainable Smart Gym concept (converting physical energy to electricity) and 2. This dynamic portfolio interface. Scroll down to see them live!";
        } 
        else if (userText.includes("contact") || userText.includes("email") || userText.includes("linkedin") || userText.includes("github")) {
            reply = "Let's connect! ⚡ You can find all my official social handles in the Contact Section at the absolute bottom of this page. Let's talk!";
        } 
        else if (userText.includes("cool") || userText.includes("nice") || userText.includes("awesome") || userText.includes("great") || userText.includes("mst")) {
            reply = "Haha, thank you so much! That means a lot coming from you. 🙌 Feel free to look around and test everything!";
        } 

        // 6. SWEET APOLOGY FALLBACK
        else {
            reply = "I'm so sorry, I don't have information regarding this. 🐾 I am just a small custom chatbot built to guide you through this portfolio. Try typing 'skills' or 'projects' to see what I can show you! ✨";
        }

        // Bot ka response delay simulation (400ms)
        setTimeout(() => {
            chatBody.innerHTML += `<p class="bot-msg" style="color: #d6a84f; margin: 4px 0;">[Bot]: ${reply}</p>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 400);
    };

    sendChatBtn.addEventListener("click", triggerBotResponse);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") triggerBotResponse();
    });
});
// ==========================================================================
// 8. DAMRU SMART CONVERSATIONAL CHAT BOT ENGINE (FRIENDLY EDITION)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chatInput");
    const sendChatBtn = document.getElementById("sendChatBtn");
    const chatBody = document.getElementById("chatBody");

    if (!chatInput || !sendChatBtn || !chatBody) return;

    const triggerBotResponse = () => {
        const rawInput = chatInput.value.trim();
        const userText = rawInput.toLowerCase();
        if (userText === "") return;

        // User ka message screen par dikhana
        chatBody.innerHTML += `<p style="color: #94a3b8; margin: 4px 0;">[You]: ${rawInput}</p>`;
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        let reply = "";

        // 1. GREETINGS & WELCOME
        if (userText.includes("hello") || userText.includes("hi") || userText.includes("hey") || userText.includes("hii") || userText.includes("yo")) {
            reply = "Hi! How can I help you today? 😊 You can ask me about my skills, projects, or how to contact me!";
        } 
        else if (userText.includes("whats up") || userText.includes("sup") || userText.includes("kya haal")) {
            reply = "All good here! 😎 Just hanging out in the digital world and showing some cool work. How's everything on your end?";
        }
        else if (userText.includes("yourself") || userText.includes("who") || userText.includes("intro") || userText.includes("about") || userText.includes("name")) {
            reply = "I am the DAMRU Chat Bot! 🤖 I was built from scratch to act as a friendly virtual guide for this portfolio. I can show you my creator's skills, tech stack, and top projects!";
        }

        // 2. MOOD & EMPATHY
        else if (userText.includes("sad") || userText.includes("bad") || userText.includes("upset") || userText.includes("depressed")) {
            reply = "Oh no, I'm so sorry to hear that! 🥺 I might just be a small bot, but I truly hope your day gets a lot brighter soon. Maybe checking out some creative projects here will cheer you up! ✨";
        }
        else if (userText.includes("happy") || userText.includes("good") || userText.includes("feeling") || userText.includes("how are you")) {
            reply = "I'm feeling great! ⚡ Super happy and ready to show you around. How are you doing today?";
        }

        // 3. FUN & HUMOR (Fix for "R u dumb?")
        else if (userText.includes("dumb") || userText.includes("stupid") || userText.includes("pagal") || userText.includes("fool")) {
            reply = "Hey, give me some credit! 😜 I might not know everything, but I'm smart enough to instantly guide you to the coolest 'skills' and 'projects' on this site! Give it a try.";
        }

        // 4. MAUSAM / WEATHER (Ab ekdam simple aur pyara)
        else if (userText.includes("weather") || userText.includes("rain") || userText.includes("hot") || userText.includes("climate") || userText.includes("mausam")) {
            reply = "I don't really know the weather out there since I live inside this website! ⛅ But I truly hope it's a beautiful, pleasant day wherever you are browsing from!";
        }
        else if (userText.includes("eat") || userText.includes("food") || userText.includes("khana") || userText.includes("lunch")) {
            reply = "Haha, I don't eat real food since I'm just a chat script! 🍰 But I hope you're having something really delicious today!";
        }
        
        // 5. PROJECTS, SKILLS & CONTACT
        else if (userText.includes("skill") || userText.includes("tech") || userText.includes("know") || userText.includes("code")) {
            reply = "I work with C programming, HTML, CSS, and JavaScript. Currently, I'm diving deep into modern domains like Cloud Computing, AI, and Machine Learning! 🚀";
        } 
        else if (userText.includes("project") || userText.includes("work") || userText.includes("built") || userText.includes("website")) {
            reply = "I love building things! 🌟 Right now, my top features are: 1. A Sustainable Smart Gym concept (converting physical energy to electricity) and 2. This dynamic portfolio interface. Scroll down to see them live!";
        } 
        else if (userText.includes("contact") || userText.includes("email") || userText.includes("linkedin") || userText.includes("github")) {
            reply = "Let's connect! ⚡ You can find all my official social handles in the Contact Section at the absolute bottom of this page. Let's talk!";
        } 
        else if (userText.includes("cool") || userText.includes("nice") || userText.includes("awesome") || userText.includes("great") || userText.includes("mst")) {
            reply = "Haha, thank you so much! That means a lot coming from you. 🙌 Feel free to look around and test everything!";
        } 

        // 6. SWEET APOLOGY FALLBACK
        else {
            reply = "I'm so sorry, I don't have information regarding this. 🐾 I am just a small custom chatbot built to guide you through this portfolio. Try typing 'skills' or 'projects' to see what I can show you! ✨";
        }

        // Bot ka response delay simulation (400ms)
        setTimeout(() => {
            chatBody.innerHTML += `<p class="bot-msg" style="color: #d6a84f; margin: 4px 0;">[Bot]: ${reply}</p>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 400);
    };

    sendChatBtn.addEventListener("click", triggerBotResponse);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") triggerBotResponse();
    });
});
