$(".hamburger").click(function () {
  $(".nav_links").toggleClass("open");
  $(".hamburger i").toggleClass("fa-times");
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

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > 20) {
    $("#myBTN").css("display", "block");
  } else {
    $("#myBTN").css("display", "none");
  }
});

$("#myBTN").click(function () {
  $(window).scrollTop(0);
});
