$(document).ready(function () {
  const $openBtn = $(".open-btn");
  const $closeBtn = $(".close-btn");
  const $nav = $(".nav");

  $openBtn.on("click", function () {
    $nav.addClass("visible");
  });

  $closeBtn.on("click", function () {
    $nav.removeClass("visible");
  });
});
