(function () {
  "use strict";
  window.addEventListener("DOMContentLoaded", () => {
    // get all of elements on slider in one array
    const elementosSlider = [...document.querySelectorAll(
      "#slider-container .slider-element"
    )];
    let sliderLenght = elementosSlider.length;
    const sliderButtons = document.querySelectorAll(".btn");

    //Listener for buttons
    sliderButtons.forEach((prev) => {
      prev.addEventListener("click", slide);
    });
    //function for slider events
    function slide(e) {
      event.stopPropagation();
      //If click target is the img of button
      if (e.target.getAttribute("src")) {
        let button = e.target.parentNode.classList.contains("next");
        if (button === true) {
          let elementActive = document.querySelector(".active");
          const indexActive = elementosSlider.indexOf(elementActive);
          const nextSlider = elementosSlider[indexActive+1];
          const sliderInitial = elementosSlider[0];
          const prevSlider = elementosSlider[indexActive-1];
          if (indexActive+1 < sliderLenght) {
            elementActive.classList.remove("active");
            nextSlider.classList.add('active');
          }
          else{
            elementActive.classList.remove("active");
            sliderInitial.classList.add("active");
          }
        } else {
          let elementActive = document.querySelector(".active");
          const indexActive = elementosSlider.indexOf(elementActive);
          const sliderInitial = elementosSlider[0];
          const prevSlider = elementosSlider[indexActive-1];
          if(indexActive > 0){
            elementActive.classList.remove('active');
            prevSlider.classList.add("active");
          }
          else{
            elementActive.classList.remove('active');
            elementosSlider[sliderLenght-1].classList.add('active');
          }
        }
      }/*Same proces but with target on the button*/ else {
        let elementActive = document.querySelector(".active");
        const indexActive = elementosSlider.indexOf(elementActive);
        const nextSlider = elementosSlider[indexActive+1];
        const sliderInitial = elementosSlider[0];
        //If the button is next
        if (e.target.classList.contains("next")) {
          //if active is < than the elements on the slider for detec when you are at the final element
          if (indexActive+1 < sliderLenght) {
            elementActive.classList.remove("active");
            nextSlider.classList.add('active');
          }
          else{
            elementActive.classList.remove("active");
            sliderInitial.classList.add("active");
          }
        } else {
          let elementActive = document.querySelector(".active");
          const indexActive = elementosSlider.indexOf(elementActive);
          const prevSlider = elementosSlider[indexActive-1];
          if(indexActive > 0){
            elementActive.classList.remove('active');
            prevSlider.classList.add("active");
          }
          else{
            elementActive.classList.remove('active');
            elementosSlider[sliderLenght-1].classList.add('active');
          }
        }
      }
    }
  });
})();
