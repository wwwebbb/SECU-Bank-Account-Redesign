$("#logo").click(function () {
  window.open("https://www.ncsecu.org/");
});

$("#sign-out").click(function () {
  if (confirm("Are you sure you want to sign out?") == true) {
    location.reload();
  }
});

$("#theme-toggle").click(function () {
  // toggles dark theme when .fa-moon is active
  if ($("i", this).hasClass("fa-moon")) {
    $("i", this)
      .removeClass("fa-moon")
      .addClass("fa-sun")
      .css("margin", "auto 0 auto -4px");

    //navbar
    $("#navbar, .dropdown-menu").css({ background: "#2C2C2C" });
    $(".dropdown-item, .dropdown").addClass("dropdown-item-bg-override");
    //(line below needed for selecting an unselected dropdown)
    $(".nav-link, .active", "#navbar").css({
      background: "#2C2C2C",
    });
    $("a", "#navbar").css({ color: "#fff" });

    //accts section
    $("#accts-section").css("background", "#121212");
    $(".acct-block")
      .css({
        background: "#2C2C2C",
        "border-top": "1px solid black",
        "border-right": "1px solid black",
        "border-bottom": "1px solid black",
      })
      .removeClass("acct-block-theme-toggle");
    $("h5, h4").css("color", "#DEDEDE");
    $(".acct-amt, .fico").css("color", "#929292");

    //footer
    $("footer").css({ background: "#2C2C2C", color: "#fff" });
    $("a", "footer").css("color", "#6797be");

    // toggles light theme when .fa-sun is active
  } else {
    $("i", this)
      .removeClass("fa-sun")
      .addClass("fa-moon")
      .css("margin", "auto 0");

    //navbar
    $("#navbar").css({ background: "#FFF" });
    $(".dropdown-item, .dropdown").removeClass("dropdown-item-bg-override");
    $(".nav-link, .dropdown-menu, .active", "#navbar").css({
      background: "#fff",
    });
    $("a", "#navbar").css({ color: "#406f95" });

    //accts section
    $("#accts-section").css("background", "#d9e0e8");
    $(".acct-block")
      .css({
        "background-color": "#ffffff",
        "border-top": "1px solid #d1d6da",
        "border-right": "1px solid #d1d6da",
        "border-bottom": "1px solid #d1d6da",
      })
      .addClass("acct-block-theme-toggle");
    $("h5, h4").css("color", "#355c7b");
    $(".acct-amt, .fico").css("color", "black");

    //footer
    $("footer").css({ background: "#f5f9fc", color: "black" });
    $("a", "footer").css("color", " #406f95");
  }
});
