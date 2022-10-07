$(document).ready(function () {
  $(".box2").hover(function () {
    $(this).children(".name").toggleClass("on");
  });
  $(".select li").click(function () {
    var num = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".sel_menu > div").filter(":visible").stop(true).fadeOut(350).end()
      .eq(num).stop(true).fadeIn(350);
  });
  $(".select li:first").addClass("on").add(".sel_menu > div:first").show();

  // $(".sel_menu div:first").show();
  //   $(".select li").click(function(){
  //       $(this).addClass("on").siblings().removeClass("on");
  //       var imgIndex = $(this).index();
  //       $(".select li").eq(imgIndex).stop(true).fadeIn(500).siblings().fadeOut(200);
  //   })

});


