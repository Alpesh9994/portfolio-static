$(document).ready(function () {
  $("#humbergerBtn").click(function () {
    $("#navbar").addClass("open");
    $("body").addClass("open-menu");
  });
  $("#closeBtn").click(function () {
    $("#navbar").removeClass("open");
    $("body").removeClass("open-menu");
  });
});
