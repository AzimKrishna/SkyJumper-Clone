$(document).ready(function () {
  var viewportWidth = window.innerWidth;
  if (viewportWidth <= 591) {
    $(".cards-holder").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      variableWidth: true,
      // autoplay: true,
      autoplaySpeed: 2000
    });
  }
});



