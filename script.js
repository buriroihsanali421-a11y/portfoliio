// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Project Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Testimonials Slider
const testimonials = [
  { text: `"Amazing developer! Very professional and fast."`, name: "- Client 1" },
  { text: `"Best website design I ever got. Highly recommended!"`, name: "- Client 2" },
  { text: `"Great communication and excellent work."`, name: "- Client 3" }
];

let index = 0;

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");

document.getElementById("nextTest").addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  testimonialText.textContent = testimonials[index].text;
  testimonialName.textContent = testimonials[index].name;
});

document.getElementById("prevTest").addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  testimonialText.textContent = testimonials[index].text;
  testimonialName.textContent = testimonials[index].name;
});

// Scroll Animation
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  fadeElements.forEach((el) => {
    const pos = el.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (pos < screenPos) {
      el.classList.add("show");
    }
  });
});