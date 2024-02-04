const imageC = document.querySelector(".app");

const imageWidth = imageC.clientWidth;
console.log(imageWidth);

imageC.addEventListener("mousemove", (e) => {
  if (e.offsetX > 0 && e.offsetX < imageWidth / 3) {
    imageC.style.backgroundPosition = "35% 50%";
  }

  if (e.offsetX >= imageWidth / 3 && e.offsetX < (imageWidth * 2) / 3) {
    imageC.style.backgroundPosition = "50% 50%";
  }

  if (e.offsetX >= (imageWidth * 2) / 3) {
    imageC.style.backgroundPosition = "65% 50%";
  }
});

imageC.addEventListener("mouseleave", () => {
  imageC.style.backgroundPosition = "50% 50%";
});
