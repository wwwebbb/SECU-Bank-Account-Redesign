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
    $("i", this).toggleClass("fa-moon fa-sun").css("margin-left", "-4px");
    $(".light-mode-theme").toggleClass("light-mode-theme dark-mode-theme");
    // toggles light theme when .fa-sun is active
  } else {
    $("i", this).toggleClass("fa-moon fa-sun").css("margin", "auto 0");
    $(".dark-mode-theme").toggleClass("light-mode-theme dark-mode-theme");
  }
});
