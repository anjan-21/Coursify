$(".hamburger").click(function () {
  $(".nav_links").addClass("open");
});

$(".jee_neet_preparation").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  cssEase: "linear",
  prevArrow: "none",
  nextArrow: "none",
});

$(".student_opinion").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  cssEase: "linear",
  prevArrow: "none",
  nextArrow: "none",
});
