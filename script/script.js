$(function functionName() {


  var botNav = $("li.bot-menu");

  $(".nav-right > li" ).mouseenter(
    function () {
      $(this).siblings("li").children("ul.menu-list").removeClass("active");
      $(this).children("ul.menu-list").addClass("active");
    }
  )

  botNav.click(
    function () {

      $(this).children("ul.menu-list").toggleClass("active");
    }

  );

})
