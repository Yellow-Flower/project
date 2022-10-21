$(document).ready(function () {
  $(".box2").hover(function () {
    $(this).children(".name").toggleClass("on");
  });
  // -------------------전체메뉴-------------
  $(".select li").click(function () {
    var num = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".sel_menu > div").filter(":visible").stop(true).end()
      .eq(num).stop(true).show();
  });
  $(".select li:first").addClass("on").add(".sel_menu > div:first").show();

  $(".history").mCustomScrollbar({
    theme: "rounded"
  });
  $(".ac_scroll").mCustomScrollbar({
    theme: "dark-3"
  });
  $('#up, header > a').click(function () {
    swiper9.slideTo(0);
    return flase;
  });
  // ----------------------------------------메뉴 열기-------------------------------
  $(".head_menu").click(function () {
    $(".menu").addClass("on")
  });
  $(".gnb li").click(function () {
    $(".snb_m").toggleClass("on");
  });

  // $(".gnb li").click(function(){
  //   $(".snb_m").toggleClass("on").show();
  // $(".gnb li").click(function () {
  //   var num2 = $(this).index();
  //   var num3 = $(".snb_m").index();
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $(".snb_m").filter(":visible").stop(true).end()
  //     .eq(num3).stop(true).show();
  // });
  // $(".gnb li").click(function () {
  //   var num2 = $(this).index();
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $(".snb_m").addClass("on").siblings().removeClass("on");.eq(num2).show();
  // });

  // 메뉴클릭시 하위메뉴 슬라이드 다운
  // 하위메뉴가 열린상태에서 다른메뉴 클릭시 변경, 자기메뉴 클릭시 슬라이드 업
  //   $(".head_menu").click(function() {
  //     $('.gnb').children().removeClass('on');
  //     if ($(this).hasClass('on')) {
  //         $(this).removeClass('on');
  //         $("nav").removeClass('on').children().removeClass('on');
  //     } else {
  //         $("nav").addClass('on');
  //         $(this).addClass('on').siblings().removeClass('on');
  //         $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
  //     }
  // });
  // 2차메뉴 클릭때마다 3차메뉴 출력
  // $("li.more").each(function() {
  //     let $2menuindex = $('snb_m').index();
  //     $(this).click(function() {
  //         $(this).addClass('on').siblings().removeClass('on');
  //         $($2menuindex).addClass('on').siblings().removeClass('on');
  //     });
  // });


  // -----------------닫기------------------------
  $(".gnb span").click(function () {
    $(".menu").removeClass("on");
    $(".hide").removeClass("on");
  });
});



// ---------------스와이퍼----------------------

var swiper1 = new Swiper(".artist", {
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".artist .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".artist .artist_control.swiper-button-next",
    prevEl: ".artist .artist_control.swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

var swiper2 = new Swiper(".actors", {
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".actors .actors_control.swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".actors .actors_control.swiper-button-next",
    prevEl: ".actors .actors_control.swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

var swiper3 = new Swiper(".goods", {
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".goods .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".goods .swiper-button-next",
    prevEl: ".goods .swiper-button-prev",
  },
});

var swiper4 = new Swiper(".goodsgrid", {
  slidesPerView: 6,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".b .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".b .swiper-button-next",
    prevEl: ".b .swiper-button-prev",
  },
});

var swiper5 = new Swiper(".album", {
  slidesPerView: 3,
  spaceBetween: 10,
  direction: "vertical",
  navigation: {
    nextEl: ".album_list .swiper-button-next"
  },
  observer: true,
  observeParents: true,
});

var swiper6 = new Swiper(".about_audition", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper7 = new Swiper(".yg_slide", {
  scrollbar: {
    el: ".aboutyg .abo.swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".aboutyg swiper-button-next",
    prevEl: ".aboutyg swiper-button-prev",
  },
});
// ----------------------홈페이지 전체 슬라이드-------------
var swiper9 = new Swiper(".homepage", {
  direction: "vertical",
  slidesPerView: 1,
  // spaceBetween: 30,
  mousewheel: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  observer: true,
  observeParents: true,
  on: {
    slideChange: function () {
      if (this.realIndex >= 2) {
        $("#up").addClass("on");
      } else {
        $("#up").removeClass("on");
      }
    },
  }
});