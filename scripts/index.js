let slideIndex = 1;
let timer = null;

showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = $("#hero .my-slides");
  let dots = $("#hero .dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  slides.each(function () {
    $(this).hide();
  });

  dots.each(function () {
    $(this).removeClass("active");
  });

  $(slides[slideIndex - 1]).show();
  $(dots[slideIndex - 1]).addClass("active");

  /*   timer = setTimeout(function () {
    plusSlides(1);
  }, 5000); */
}
