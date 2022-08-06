const menuToggle = document.querySelector(".menu-toogle input");
const nav = document.querySelector(".nav-items");
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
let icon = document.querySelector(".fa-moon");
let btn = document.querySelector(".btn-dark");
let h1 = document.querySelector(".heading");
let sub_heading = document.querySelector(".sub-heading");
let text_fe = document.querySelector(".text-fe");
let heading_skills = document.querySelector(".heading-skills");
let heading_contact = document.querySelector(".heading-contact");
let text_contact = document.querySelector(".text-contact");

// dark mode
btn.onclick = function () {
  document.body.classList.toggle("dark-body");
  h1.classList.toggle("dark-body");
  sub_heading.classList.toggle("dark-body");
  text_fe.classList.toggle("dark-body");
  heading_skills.classList.toggle("dark-body");
  heading_contact.classList.toggle("dark-body");
  text_contact.classList.toggle("dark-body");
  if (document.body.classList.contains("dark-body")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
};

// hamburger
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});

let anchor = document.querySelectorAll(".nav-items li a");
for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", function () {
    let active = nav.classList.contains("active");
    if (active) {
      nav.classList.remove("active");
    }
  });
}

// validate form
function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 12) {
    phoneError.innerHTML = "Phone no should be 12 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{12}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email no is required";
    return false;
  }

  if (
    !email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to send message";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
