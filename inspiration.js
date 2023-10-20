document.onload = (function () {
  const popularParent = document.querySelector(".popular");
  const popularChild = document.querySelector(".popular ul");
  const popularSvg = document.querySelector(".popular svg");

  popularParent.onclick = function () {
    if (popularChild.style.display === "none") {
      popularChild.style.display = "block";
      popularSvg.style.transform = "rotate(180deg)";
    } else {
      popularChild.style.display = "none";
      popularSvg.style.transform = "rotate(0deg)";
    }
  };
  popularChild.onclick = (e) => e.stopPropagation();

  const filterBtn = document.querySelector(".filter-btn");
  const filterItem = document.querySelector(".filter-item");
  const content = document.querySelector(".content");
  filterBtn.onclick = function () {
    if (filterItem.style.display === "none") {
      filterItem.style.display = "flex";
      content.style.marginTop = "120px";
    } else {
      filterItem.style.display = "none";
      content.style.marginTop = "0";
    }
  };
  filterItem.onclick = (e) => e.stopPropagation();

  const timeFrame = document.querySelector(".timeframe");
  const timeItem = document.querySelector(".timeframe ul");
  const timeSvg = document.querySelector(".timeframe svg");

  timeFrame.onclick = function () {
    if (timeItem.style.display === "none") {
      timeItem.style.display = "block";
      timeSvg.style.transform = "translateY(50%) rotate(180deg)";
    } else {
      timeItem.style.display = "none";
      timeSvg.style.transform = "translateY(50%) rotate(0deg)";
    }
  };
  timeItem.onclick = (e) => e.stopPropagation();
})();
var signupp = document.querySelector(".signup-up");
// console.log(signupp);
signupp.onclick = function (e) {
  e.preventDefault();
  window.location.href = "signup.html";
};
var signin = document.querySelector(".signin");

signin.onclick = function (e) {
  e.preventDefault();
  window.location.href = "login.html";
};
