const allSection = document.querySelectorAll(".section");
const ATR = document.querySelector(".ATR");
const navLinks = document.querySelectorAll(".nav li a");

function showSection(targetSectionId) {
    allSection.forEach(section => {
        section.classList.remove("active");
    });

    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }
}

navLinks.forEach(navLink => {
    navLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of anchor tags
        
        // Remove "active" class from all navigation links
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        // Add "active" class to the clicked navigation link
        this.classList.add("active");
        
        const targetSectionId = this.getAttribute("href").substr(1); // Get the target section id
        showSection(targetSectionId);
        ATR.classList.remove("open"); // Close the navigation menu after clicking a navigation link
    });
});

const navTogglerBtn = document.querySelector(".nav-toggler");

navTogglerBtn.addEventListener("click", () => {
    ATR.classList.toggle("open");
});


var typed = new Typed(".typing",{
    strings:["", "Cheap Service", "Generator Provider", "Account Provider", "Giveaway Provider"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})