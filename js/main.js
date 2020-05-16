(function () {
  "use strict";
  console.log("toy rdy");
  window.addEventListener("DOMContentLoaded", () => {
    const elementosSlider = document.querySelectorAll(
      "#slider-container .slider-element"
    );
    const sliderButtons = document.querySelectorAll(".btn");
    sliderButtons.forEach((prev) => {
      prev.addEventListener("click", slide);
    });

    function slide(e) {
      event.stopPropagation();
      if (e.target.getAttribute("src")) {
        let button = e.target.parentNode.classList.contains("next");
        if (button === true) {
          let elementActive = elementosSlider.indexOf("active");
          console.log(elementActive);
        } else {
        }
      } else {
        if (e.target.classList.contains("next")) {
        } else {
        }
      }
    }
  });
})();
