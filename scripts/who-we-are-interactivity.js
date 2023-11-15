$(".slideshow").hover(function () {
  $(".button").removeClass("hidden");
}, function () {
  $(".button").addClass("hidden");
});

const SLIDES = $(".slideshow > .slide");

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".slideshow > .slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".slideshow > .slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  SLIDES.not(currentSlide).addClass("hidden");
  currentSlide.removeClass("hidden");
  let currentDot = $(".dot").eq(index);
  $(".dot").removeClass("active");
  currentDot.addClass("active");
}

$("#prev").click(function () {
  prevSlide()
});

$("#next").click(function () {
  nextSlide()
});

var intervalId = window.setInterval(function () {
  nextSlide()
}, 10000);

function createDots() {
  let dotContainer = $(".dots-container");
  for (let i = 0; i < SLIDES.length; i++) {
    dotContainer.append("<span class='dot' onclick='showSlide(" + (i + 1) + ")'></span>");
  }
}

$(document).ready(function () {
  createDots();
});
