const logo = document.querySelector(".logo");
logo.onclick = function () {
  window.location.href = "home.html";
};

const login = document.querySelector(".login-btn");
login.onclick = function (e) {
  e.preventDefault();
  window.location.href = "login.html";
};

const signup = document.querySelector(".signup-btn");
signup.onclick = function (e) {
  e.preventDefault();
  window.location.href = "signup.html";
};

const findTalent = document.querySelector(".findTalent");
findTalent.onclick = function (e) {
  e.preventDefault();
  window.location.href = "findTalent.html";
};

const jobs = document.querySelector(".jobs");
jobs.onclick = function (e) {
  e.preventDefault();
  window.location.href = "jobs.html";
};

const inspiration = document.querySelector(".inspiration");
inspiration.onclick = function (e) {
  e.preventDefault();
  window.location.href = "inspiration.html";
};

const learnDesign = document.querySelector(".learnDesign");
learnDesign.onclick = function (e) {
  e.preventDefault();
  window.location.href = "learnDesign.html";
};
