$(function() {
  var $hamburger = $(".hamburger");
  var $navbar = $(".navbar");
  $hamburger.on("click", () => {
      $hamburger.toggleClass("is-active");
      $navbar.toggleClass("burger-open")
  });
})