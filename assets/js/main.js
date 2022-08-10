const menuToggle = document.querySelector(".menu-toogle");
const nav = document.querySelector(".nav-items");
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const contactMessage = document.getElementById("contact-message");
const contactEmail = document.getElementById("contact-email");
const contactPhone = document.getElementById("contact-phone");
const contactName = document.getElementById("contact-name");
const icon = document.querySelector(".fa-moon");
const btn = document.querySelector(".btn-dark");
const h1 = document.querySelector(".heading");
const sub_heading = document.querySelector(".sub-heading");
const text_fe = document.querySelector(".text-fe");
const heading_skills = document.querySelector(".heading-skills");
const heading_contact = document.querySelector(".heading-contact");
const text_contact = document.querySelector(".text-contact");
const btn_submit = document.querySelector(".btn-submit");

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
document.body.onclick = function () {
  nav.classList.toggle("active");
};

menuToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  nav.classList.toggle("active");
});

window.addEventListener("click", function () {
  nav.classList.remove("active");
});

// validate form
function validateName() {
  const name = contactName.value;

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
  const phone = contactPhone.value;

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
  const email = contactEmail.value;

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
  const message = contactMessage.value;
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

// const validateName = contactName.addEventListener("input", function () {
//   const name = this.value;

//   if (name.length == 0) {
//     nameError.innerHTML = "Name is required";
//     return false;
//   }
//   if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
//     nameError.innerHTML = "Write full name";
//     return false;
//   }
//   nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//   return true;
// });

// const validatePhone = contactPhone.addEventListener("input", function () {
//   const phone = this.value;

//   if (phone.length == 0) {
//     phoneError.innerHTML = "Phone no is required";
//     return false;
//   }
//   if (phone.length !== 12) {
//     phoneError.innerHTML = "Phone no should be 12 digits";
//     return false;
//   }
//   if (!phone.match(/^[0-9]{12}$/)) {
//     phoneError.innerHTML = "Only digits please";
//     return false;
//   }
//   phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//   return true;
// });

// const validateEmail = contactEmail.addEventListener("input", function () {
//   const email = this.value;

//   if (email.length == 0) {
//     emailError.innerHTML = "Email no is required";
//     return false;
//   }

//   if (
//     !email.match(
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     )
//   ) {
//     emailError.innerHTML = "Email invalid";
//     return false;
//   }
//   emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//   return true;
// });

// const validateMessage = contactMessage.addEventListener("input", function () {
//   const message = this.value;
//   const required = 30;
//   const left = required - message.length;
//   if (left > 0) {
//     messageError.innerHTML = left + " more characters required";
//     return false;
//   }
//   messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//   return true;
// });

// function validateForm() {
//   if (!validateName || !validatePhone || !validateEmail || !validateMessage) {
//     submitError.style.display = "block";
//     submitError.innerHTML = "Please fix error to send message";
//     setTimeout(function () {
//       submitError.style.display = "none";
//     }, 3000);
//     return false;
//   }
// }

// Function for animation on scroll

window.addEventListener("scroll", muncul);
function muncul() {
  let tinggiLayar = window.innerHeight;
  let ukuranScroll = 150;

  hilangg(".about", "tampil-atas");
  hilangg(".content-about", "tampil-samping");
  hilangg(".contact", "tampil-samping");
  hilangg(".contact", "tampil-samping");

  // portofolio animation
  hilangg(".portofolio", "tampil-atas");
  setTimeout(function () {
    hilangg(".portof1", "tampil-samping");
  }, 1000);
  setTimeout(function () {
    hilangg(".portof2", "tampil-samping");
  }, 2000);
  setTimeout(function () {
    hilangg(".portof3", "tampil-samping");
  }, 3000);
  setTimeout(function () {
    hilangg(".portof4", "tampil-samping");
  }, 4000);

  // contact animation
  setTimeout(function () {
    hilangg(".content-container", "tampil-atas");
  }, 1000);
  setTimeout(function () {
    hilangg(".contact-container", "tampil-samping");
  }, 2000);

  // skills animation
  hilangg(".skills", "tampil-samping");
  setTimeout(function () {
    hilangg(".logo1", "tampil-samping");
  }, 1000);
  setTimeout(function () {
    hilangg(".logo2", "tampil-samping");
  }, 1300);
  setTimeout(function () {
    hilangg(".logo3", "tampil-samping");
  }, 1600);
  setTimeout(function () {
    hilangg(".logo4", "tampil-samping");
  }, 1900);
  setTimeout(function () {
    hilangg(".logo5", "tampil-samping");
  }, 2200);
  setTimeout(function () {
    hilangg(".logo6", "tampil-samping");
  }, 2500);
  setTimeout(function () {
    hilangg(".logo7", "tampil-samping");
  }, 2800);
  setTimeout(function () {
    hilangg(".logo8", "tampil-samping");
  }, 3100);

  // ------------------------------------------------------------

  function hilangg(element, arah) {
    let elements = document.querySelector(element);
    let jarakAtas1 = elements.getBoundingClientRect().top;

    if (jarakAtas1 < tinggiLayar - ukuranScroll) {
      elements.classList.add(arah);
    } else {
      elements.classList.remove(arah);
    }
  }
}

// supaya Scroll nya mulus

var posisiY = 0;
var jarak = 20;
function smoothScroll(id) {
  var target = document.getElementById(id).offsetTop;
  var scrollAnimate = setTimeout(function () {
    smoothScroll(id);
  }, 5);

  posisiY = posisiY + jarak;

  if (posisiY >= target) {
    clearTimeout(scrollAnimate);
    posisiY = 0;
  } else {
    window.scroll(0, posisiY);
  }
}
