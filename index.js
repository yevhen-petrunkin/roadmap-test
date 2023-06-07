const slider = document.querySelector(".roadmap__slider");

slider.addEventListener(
  "wheel",
  function (evt) {
    if (evt.wheelDelta > 0) {
      this.scrollLeft -= 100;
    } else {
      this.scrollLeft += 100;
    }
  },
  { passive: true }
);
