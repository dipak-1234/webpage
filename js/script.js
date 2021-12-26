var slideIndex = 0;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides.length);

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // slideIndex++;

  // if (slideIndex > slides.length) {
  //   slideIndex = 1;
  // }

  slides[slideIndex - 1].style.display = "flex";
  // setTimeout(showSlides, 2000);
}
