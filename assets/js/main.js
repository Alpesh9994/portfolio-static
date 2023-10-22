$(document).ready(function () {
  $("#humbergerBtn").click(function () {
    $('#navbar').addClass('open')
  });
  $("#closeBtn").click(function () {
    $('#navbar').removeClass('open')
  });
});
