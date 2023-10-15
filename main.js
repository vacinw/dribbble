const elements = document.querySelectorAll(".footer-item");
let isHovered = false;

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    isHovered = true;
    pauseAnimations();
  });

  element.addEventListener("mouseout", () => {
    isHovered = false;
    resumeAnimations();
  });
});

const pauseAnimations = () =>
  elements.forEach((element) => {
    element.style.animationPlayState = "paused";
  });

const resumeAnimations = () =>
  elements.forEach(function (element) {
    element.style.animationPlayState = "running";
  });
