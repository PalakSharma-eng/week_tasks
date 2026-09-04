// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });

});


// ================= DARK MODE =================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️";
    } else {
        darkBtn.textContent = "🌙";
    }

});


// ================= WELCOME BUTTON =================

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeText = document.getElementById("welcomeText");

welcomeBtn.addEventListener("click", function () {

    welcomeText.textContent =
        "Welcome to my interactive portfolio! 🎉";

});


// ================= FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("formMessage");


    // Empty field check

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill all the fields.";

        formMessage.style.color = "red";

        return;
    }


    // Email validation

    if (!email.includes("@") || !email.includes(".")) {

        formMessage.textContent =
            "Please enter a valid email.";

        formMessage.style.color = "red";

        return;
    }


    // Successful submission

    formMessage.textContent =
        "Form submitted successfully! ✅";

    formMessage.style.color = "green";

    contactForm.reset();

});


// ================= TYPING EFFECT =================

const typing = document.getElementById("typing");

const text = "Frontend Web Developer";

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

typeText();