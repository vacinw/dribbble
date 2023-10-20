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

var findadesign = document.querySelector(".find-btn");
findadesign.onclick = function (e) {
  e.preventDefault();
  window.location.href = "jobs.html";
};

var hiring = document.querySelector(".match-btn:nth-child(2)");
// console.log(hiring);
hiring.onclick = function (e) {
  e.preventDefault();
  window.location.href = "findTalent.html";
};

var findwork = document.querySelector(".black-btn");
findwork.onclick = function (e) {
  e.preventDefault();
  window.location.href = "jobs.html";
};
var browse = document.querySelector(".browse");
browse.onclick = function (e) {
  e.preventDefault();
  window.location.href = "inspiration.html";
};
var learnahiring = document.querySelector(".footer-btn:nth-child(2)");
learnahiring.onclick = function (e) {
  e.preventDefault();
  window.location.href = "findTalent.html";
};
