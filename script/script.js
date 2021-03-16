

var botNav = $(".bot-menu");
var listaBotNav = $(".menu-list");

botNav.click(
  function () {
    $(this).children(listaBotNav).toggleClass("active");
  }

);
