// $(document).ready(function () {
//   if ($(window).width() <= 1024) {
//     $(".box2").click(function () {
//       $(this).children(".name").children("*").toggle();
//       $(".name::before.on").toggle();
//     });
//   }
//   else if ($(window).width()) {
//     $(".box2").hover(function () {
//       $(this).children(".name").children("*").toggle();
//     });
//   }
// });
$(document).ready(function () {
  if ($(window).width() <= 1024) {
    $(".box2").hover(function () {
      $(this).children(".name").toggleClass("on");
    });
  }
  // else if ($(window).width()) {
  //   $(".box2").click(function () {
  //     $(this).children(".name").toggleClass("on");
  //   });
  // }
  // if ($(window).width() > 640) {
  //   swiper10.destroy();
  // };
});
$(document).ready(function () {
  if ($(window).width() <= 640) {
    $("inner_3").remove("no_right1", "no_right1");
  }
});
// -------------------전체메뉴-------------
$(".select li").click(function () {
  var num = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".sel_menu > div").eq(num).stop(true).show().siblings().hide();
});
$(".select li:first").addClass("on").add(".sel_menu > div:first").show();

$(".history").mCustomScrollbar({
  theme: "rounded"
});
$(".ac_scroll").mCustomScrollbar({
  theme: "light-3"
});
$(".actor_menu").mCustomScrollbar({
  theme: "dark-2"
});
$(".text_box1 > p").mCustomScrollbar({
  theme: "light-2"
});
$(".notice_YG, .text_3").mCustomScrollbar({
  theme: "minimal"
});
$('#up, header > a').click(function () {
  swiper9.slideTo(0);
  return flase;
});




// --------------------공지사항-----------------------------
$(".notice_but > p ").click(function () {
  var num3 = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".notice_list > .notice_YG").eq(num3).stop(true).show().siblings().hide();
});
$(".notice_but > p:first").addClass("on").add(".notice_list > div:last").show();
$(".notice_list > div:last").hide();

// ----------------------------------------메뉴 열기-------------------------------
$(".head_menu").click(function () {
  $(".menu").addClass("on");
  $(".gnb li").removeClass("on");
});

$(".gnb li").click(function () {
  var num2 = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".snb_m").eq(num2).addClass("on").siblings().removeClass("on");
});

// -----------------닫기------------------------
$(".gnb span").click(function () {
  $(".menu").removeClass("on");
  $(".snb_m").removeClass("on");
});
// --------------------------------------- 로그인 열기-------------------------------
$(".button div:first > span:first").click(function () {
  $(".login_page").addClass("on");
});
$(".log_close, .log_close2").click(function () {
  $(".login_page").removeClass("on");
});
// --------------------------------------- 언어 열기-------------------------------
$(".but_lang").click(function () {
  // $(this).css({"background-color": "black", "color": "white"});
  $(".language").slideToggle("fast", "swing");
});

$(".language").hide();
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
  slidesPerView: 4,
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
  breakpoints: {
    640: {
      slidesPerView: 6,
      spaceBetween: 30,
      grid: {
        rows: 2,
      }
    },
    1025: {
      slidesPerView: 6,
      spaceBetween: 30,
      grid: {
        rows: 2,
      }
    },
  },
});

var swiper5 = new Swiper(".album", {
  slidesPerView: 1,
  spaceBetween: 10,
  direction: "vertical",
  navigation: {
    nextEl: ".album_list .swiper-button-next"
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    641: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
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
var swiper8 = new Swiper(".instagram", {
  spaceBetween: 100,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  observer: true,
  observeParents: true,
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
      if (this.realIndex >= 3) {
        $("#up").addClass("on");
      } else {
        $("#up").removeClass("on");
      }
    },
  }
});

// --------------------------------640-----------------
var swiper10 = new Swiper(".list_silde", {
  // pagination: {
  //   el: ".swiper-pagination",
  //   dynamicBullets: true,
  // },
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: "horizontal",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  observer: true,
  observeParents: true,
  breakpoints: {
    640: {
      slidesPerView: 4,
      direction: "vertical",
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    },
  },
});
// ------------------640 주식 테이블 감추기---------------------------
$(document).resize(function () {
  if ($(window).width() <= 640) {
    $('.table').hide();
    $('.up').hide();
    $(".table_menu").click(function () {
      $(".table").slideToggle(300);
      $(".down").toggle();
      $(".up").toggle();
    });
  }
  // else if ($(window).width() > 640) {
  //   swiper5.destroy();
  // }
});

