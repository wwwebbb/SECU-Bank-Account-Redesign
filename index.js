$("#logo").click(function () {
  window.open("https://www.ncsecu.org/");
});

$("#theme-toggle").click(function () {
  // dark and light themes toggle based on the clicked icon class
  if ($("i", this).hasClass("fa-moon")) {
    $("i", this)
      .removeClass("fa-moon")
      .addClass("fa-sun")
      .css("margin", "auto 0 auto -4px");
    $("#accts-section").css("background", "#121212");
    $(".acct-block")
      .css({
        "background-color": "#2C2C2C",
        "border-top": "1px solid black",
        "border-right": "1px solid black",
        "border-bottom": "1px solid black",
      })
      .removeClass("acct-block-theme-toggle");
    $("h5").css("color", "#DEDEDE");
    $("h4").css("color", "#DEDEDE");
    $(".acct-amt, .fico").css("color", "#ffffff");
  } else {
    $("i", this)
      .removeClass("fa-sun")
      .addClass("fa-moon")
      .css("margin", "auto 0");
    $("#accts-section").css("background", "#d9e0e8");
    $(".acct-block")
      .css({
        "background-color": "#ffffff",
        "border-top": "1px solid #d1d6da",
        "border-right": "1px solid #d1d6da",
        "border-bottom": "1px solid #d1d6da",
      })
      .addClass("acct-block-theme-toggle");
    $("h5").css("color", "#355c7b");
    $("h4").css("color", "#212529");
    $(".acct-amt, .fico").css("color", "black");
  }
});
