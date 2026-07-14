// Menu toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// Dynamic year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Dynamic greeting and date/time
const greeting = document.getElementById("greeting");
const dateTime = document.getElementById("dateTime");

if (greeting) {
  const hour = new Date().getHours();
  let message = "Welcome!";

  if (hour < 12) message = "Good Morning!";
  else if (hour < 18) message = "Good Afternoon!";
  else message = "Good Evening!";

  greeting.textContent = message;
}

if (dateTime) {
  dateTime.textContent = new Date().toLocaleString();
}

// Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    let valid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    if (name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      valid = false;
    }

    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!email.value.includes("@")) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Message is required.";
      valid = false;
    }

    if (valid) {
      successMessage.textContent = "Your message has been sent successfully!";
      contactForm.reset();
    }
  });
}