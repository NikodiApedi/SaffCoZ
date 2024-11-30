// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Banner Slider Logic
    const bannerSlider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const offset = -currentIndex * 100;
        bannerSlider.style.transform = `translateX(${offset}%)`;
    }

    // Auto-slide every 5 seconds
    setInterval(moveToNextSlide, 5000);

    // Newsletter Form Handling
    const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    // Basic checks: email should contain '@' and '.' after '@'
    if (email.includes('@') && email.indexOf('@') < email.lastIndexOf('.')) {
        return true;
    }
    return false;
}


});

document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Effect
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach((reveal) => {
            const revealTop = reveal.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };
    

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check for already visible elements

    // Count Up Animation for Achievements
    const counters = document.querySelectorAll('.stat-item .number');

    const countUp = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 100;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 400);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    counters.forEach((counter) => {
        counter.setAttribute('data-target', counter.innerText);
        counter.innerText = '0';
        countUp(counter);
    });
});

// Directions handler

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById("fullName").value;
    if (fullName.trim() === "") {
        showError("nameError", "Full Name is required.");
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (email.trim() === "") {
        showError("emailError", "Email Address is required.");
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        showError("emailError", "Please enter a valid email.");
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById("phone").value;
    if (phone.trim() === "") {
        showError("phoneError", "Phone Number is required.");
        isValid = false;
    } else if (phone.length < 10) {
        showError("phoneError", "Please enter a valid phone number.");
        isValid = false;
    }

    // Validate Gender
    const gender = document.getElementById("gender").value;
    if (gender === "") {
        showError("genderError", "Gender is required.");
        isValid = false;
    }

    // Validate Newsletter Checkbox
    

    // If everything is valid, show success message
    if (isValid) {
        alert("Your message has been sent successfully!");
        // Optionally, you can submit the form or reset it
        // document.getElementById("contact-form").reset(); // To reset the form
    }
});

// Show error message
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = "block"; // Show the error
}

// Clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach((error) => {
        error.style.display = "none";
    });
}
