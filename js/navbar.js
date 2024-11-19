$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("#navbar").addClass("animate-fadeInDown");
    } else {
      $("#navbar").removeClass("animate-fadeInDown");
    }
  });
});
