$(document).ready(function() {
    $(".uselogo").addClass("hidden");
    $(".click").addClass("hidden");

    $(".menu").click(function() {
      $(".uselogo").slideToggle("slow", function() {
        $(".click").removeClass("hidden");
        $(".menu").addClass("hidden");
      });
    });

    $(".click").click(function() {
      $(".click").addClass("hidden");
      $(".menu").removeClass("hidden");
      $(".uselogo").slideToggle("slow");
    });
  });
