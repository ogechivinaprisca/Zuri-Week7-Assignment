// Grab elements from DOM
const images = document.querySelectorAll(".slider img");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let slideIndex = 0;
let imagesLength = images.length - 1; // 6

changeImage(0); // using this to initialize the slider

function changeImage(index) {
  // removes the visiblity of each of the images
  images.forEach((image) => {
    image.style.opacity = 0;
  });

  //   turns on visibily of image at desired index
  images[index].style.opacity = 1;
}

prevButton.addEventListener("click", () => {
  // slideIndex is still 0
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = imagesLength;
  }

  //   slideIndex is now !
  changeImage(slideIndex);
});

nextButton.addEventListener("click", () => {
  // slideIndex is still 0
  slideIndex++;

  if (slideIndex > imagesLength) {
    slideIndex = 0;
  }

  //   slideIndex is now !
  changeImage(slideIndex);
});