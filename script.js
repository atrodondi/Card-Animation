function mobile() {
  $(".cardBox").on("click", function() {
    if ($(document).width() < 1440) {
      console.log("clicked");
      $(this)
        .children()
        .toggleClass("flipped");
    }
  });
}
mobile();

function mobile1() {
  $(".cardBox").hover(function() {
    if (
      $(this)
        .children()
        .hasClass("flipped") &&
      $(document).width() >= 1440
    ) {
      console.log(this);
      $(this)
        .children()
        .toggleClass("flipped");
    }
  });
}
mobile1();
