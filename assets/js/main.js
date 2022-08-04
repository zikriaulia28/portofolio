const menuToggle = document.querySelector(".menu-toogle input");
const nav = document.querySelector(".nav-items");
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
