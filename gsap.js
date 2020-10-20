const about = document.getElementById("about");
const aboutToggle = document.getElementById("about-toggle");

const projects = document.getElementById("projects");
const projectsToggle = document.getElementById("projects-toggle");

const journey = document.getElementById("journey");
const journeyTOggle = document.getElementById("journey-toggle");

const contact = document.getElementById("contact");
const contactToggle = document.getElementById("contact-toggle");

TweenMax.to(".overlay h1", 3, {
  opacity: 0,
  y: -20,
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay p", 3, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay", 2, {
  delay: 1,
  y: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".wrapper .left-bg", 2, {
  delay: 1.6,
  width: "0%",
  ease: Expo.easeInOut,
});

TweenMax.from(".content", 2, {
  delay: 1.6,
  x: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".nav", 1, {
  delay: 3,
  x: "-200px",
  ease: Expo.easeInOut,
});

console.log(document.querySelectorAll(".toggle"));
for (x = 0; x < document.querySelectorAll(".toggle").length; x++) {
  const toggleBtn = document.querySelectorAll(".toggle")[x];
  toggleBtn.addEventListener("click", (e) => {
    if (
      document.getElementById(`${toggleBtn.getAttribute("data-toggle")}`).style
        .display == "block"
    ) {
      return;
    }

    hideAll();
    animateIn(toggleBtn.getAttribute("data-toggle"));
  });
}

// projectsToggle.addEventListener("click", (e) => {
//   if (projects.style.display == "block") {
//     return;
//   }
//   hideAll();
//   animateIn("projects");
// });

function hideAll() {
  TweenMax.to(".content", 0.4, {
    x: "100%",
    display: "none",
    opacity: "0",
    ease: Expo.easeInOut,
  });
}

function animateIn(section) {
  TweenMax.to(`.${section}`, {
    delay: 0.4,
    x: "0",
    display: "block",
    opacity: "1",
    ease: Expo.easeInOut,
  });
}
