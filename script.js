const sections = document.querySelectorAll(".slide-in");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {threshold: 0.2 });
sections.forEach(section => {
    observer.observe(section);
});

const secondsections = document.querySelectorAll(".section-container");
const secondobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {threshold: 0.2 });
secondsections.forEach(section => {
    secondobserver.observe(section);
});

const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth" });
});