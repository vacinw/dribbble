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
