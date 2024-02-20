/* ======toggle style switcher======*/ 

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll
let scrollTimeout;

window.addEventListener("scroll", () => {

    clearTimeout(scrollTimeout);
    
     if(document.querySelector(".style-switcher").classList.contains("open"))
     {
        document.querySelector(".style-switcher").classList.remove("open");
     }
})