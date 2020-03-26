// allows for mobile users to click the cards to flip
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

//a function that allows cards flipped in smaller screens able to be unflipped if somehow the screen got larger. ultimately, i wanna write code depending on touch screen or not, then do certain queries for size
function mobile1() {
  $(".cardBox").mouseenter(function() {
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
