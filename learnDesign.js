const videoBox = document.querySelectorAll(".media .video");

videoBox.forEach((element) => {
  const videoTag = element.querySelector("video");
  const imageTag = element.querySelector("img");

  element.addEventListener("click", function () {
    imageTag.style.display = "none";
    videoTag.play();
  });

  element.addEventListener("mouseover", function () {
    imageTag.style.display = "none";
  });

  element.addEventListener("mouseout", function () {
    imageTag.style.display = "block";
  });
});

var toe1 = document.querySelector(".toe1");
var e1 = document.querySelector(".e1");
toe1.addEventListener("click", function () {
  // Cuộn đến phần tử mục tiêu
  e1.scrollIntoView({ behavior: "smooth" }); // "smooth" để có hiệu ứng cuộn mượt
});
var toe2 = document.querySelector(".toe2");
var e2 = document.querySelector(".e2");
toe2.addEventListener("click", function () {
  // Cuộn đến phần tử mục tiêu
  e2.scrollIntoView({ behavior: "smooth" }); // "smooth" để có hiệu ứng cuộn mượt
});
var toe3 = document.querySelector(".toe3");
var e3 = document.querySelector(".e3");
toe3.addEventListener("click", function () {
  // Cuộn đến phần tử mục tiêu
  e3.scrollIntoView({ behavior: "smooth" }); // "smooth" để có hiệu ứng cuộn mượt
});
var toe4 = document.querySelector(".toe4");
var e4 = document.querySelector(".e4");
toe4.addEventListener("click", function () {
  // Cuộn đến phần tử mục tiêu
  e4.scrollIntoView({ behavior: "smooth" }); // "smooth" để có hiệu ứng cuộn mượt
});
