// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Mobile Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Form Validation (for contact form and investment form)
function validateForm(form) {
    let isValid = true;

    // Check for name field
    const name = form.querySelector("input[name='name']");
    if (!name.value.trim()) {
        isValid = false;
        alert("Please enter your full name.");
    }

    // Check for email field
    const email = form.querySelector("input[name='email']");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        isValid = false;
        alert("Please enter a valid email address.");
    }

    // Check for investment amount (only on the Invest form)
    if (form.name === "investment-form") {
        const investmentAmount = form.querySelector("input[name='investment-amount']");
        if (!investmentAmount.value.trim() || investmentAmount.value <= 0) {
            isValid = false;
            alert("Please enter a valid investment amount.");
        }
    }

    return isValid;
}

// Add event listener to each form
const contactForm = document.querySelector("form[name='contact-form']");
const investmentForm = document.querySelector("form[name='investment-form']");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        if (!validateForm(contactForm)) {
            e.preventDefault();
        }
    });
}

if (investmentForm) {
    investmentForm.addEventListener("submit", function (e) {
        if (!validateForm(investmentForm)) {
            e.preventDefault();
        }
    });
}

// Sticky Header on Scroll
const header = document.querySelector("header");
const sticky = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

