$(".all-menu").click(function () {
  $("#nav-all").addClass("active");
});

$(".close").click(function () {
  $("#nav-all").removeClass("active");
});

$("#gnb").mouseenter(function () {
  $("#header").addClass("active");
});

$("#gnb").mouseleave(function () {
  $("#header").removeClass("active");
});

$(".lang__btn").click(function () {
  $(".lang__list").show();
});

$(".lang__list li").click(function () {
  $(".lang__list").hide();
});
