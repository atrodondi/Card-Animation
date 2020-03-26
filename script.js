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
