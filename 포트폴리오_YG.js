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
$(".info").mCustomScrollbar({
  theme: "light-2"
});
$(".notice_YG").mCustomScrollbar({
  theme: "minimal"
});
// $(".text_3").mCustomScrollbar({
//   theme: "minimal"
// });
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

var swiper5 = new Swiper(".album-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  direction: "vertical",
  navigation: {
    nextEl: ".art_list .swiper-button-next"
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
    nextEl: ".aboutyg .swiper-button-next",
    prevEl: ".aboutyg .swiper-button-prev",
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
// var swiper9 = new Swiper(".homepage", {
//   direction: "vertical",
//   slidesPerView: 1,
//   mousewheel: true,
//   observer: true,
//   observeParents: true,
//   on: {
//     slideChange: function () {
//       if (this.realIndex > 3) {
//         $("#up").addClass("on");
//       } else {
//         $("#up").removeClass("on");
//       }
//     },
//   }
// });
var swiper9 = new Swiper(".homepage", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  observer: true,
  observeParents: true,
  on: {
    slideChange: function () {
      var slideindex = this.realIndex
      switch (slideindex) {
        case 3 :
          $("#up").removeClass("on on2").addClass("on");
          break;
        case 4 :
          $("#up").removeClass("on on2").addClass("on2");
          break;
        default :
        $("#up").removeClass("on on2");
      }
    },
  }
});
// --------------------------------가수 앨범 속 리스트 슬라이드-----------------
var swiper10 = new Swiper(".list_silde", {
  slidesPerView: 3,
  slidesPerGroup: 3,
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
    641: {
      slidesPerView: 2,
      direction: "vertical",
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3,
      direction: "vertical",
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      spaceBetween: 15,
    },
  },
});
// -------------------------------배우 프로필 리스트 슬라이드-----------------
var swiper11 = new Swiper(".proflie_list", {
  slidesPerView: 1,
  spaceBetween: 10,
  direction: "horizontal",
  navigation: {
    nextEl: ".ac_proflie .swiper-button-next",
    prevEl: ".ac_proflie .swiper-button-prev",
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    641: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
// ------------------640 레디---------------------------
$(document).ready(function () {
  if ($(window).width() > 1024) {
    $(".box2").hover(function () {
      $(this).children(".name").toggleClass("on");
    });
  }
  else if ($(window).width() >= 641) {
    $(".box2").click(function () {
      $(this).children(".name").toggleClass("on");
    });
  }
  else if ($(window).width() <= 640) {
    $(".table,.up").hide();
    $(".table_menu").click(function () {
      $(".table").slideToggle(300);
      $(".down").toggle();
      $(".up").toggle();
    });
    // $(".name > p,.info,.in_sns").hide();
    $(".shapes").mCustomScrollbar({
      theme: "rounded"
    });
    $(".box2").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });
    $("inner_3").remove("no_right1", "no_right1");
  }
});
// -----------------640 리사이즈----------------------
$(document).resize(function () {
  if ($(window).width() > 1024) {
    $(".box2").hover(function () {
      $(this).children(".name").toggleClass("on");
    });
  }
  else if ($(window).width() >= 641) {
    $(".box2").click(function () {
      $(this).children(".name").toggleClass("on");
    });
  }
  else if ($(window).width() <= 640) {
    $(".table,.up").hide();
    $(".table_menu").click(function () {
      $(".table").slideToggle(300);
      $(".down").toggle();
      $(".up").toggle();
    });
    // $(".name > *").hide();
    // $(".name > h1").show();
    // $(".introduction").mCustomScrollbar({
    //   theme: "rounded"
    // });
    $(".box2").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });
    $("inner_3").remove("no_right1", "no_right1");
  }
});
// --------------------------------주식시세----------------------------------
// 실시간8자리날짜구하기
function getToday() {
  let date = new Date();
  let year = date.getFullYear();
  let month = ('0' + (1 + date.getMonth())).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let onedaybefore = day - 1; // 하루전

  let today = year + month + day; // 8자리조합 오늘
  let yesterday = year + month + onedaybefore; // 8자리 조합 하루전
  let yesterdayKO = `${year}년 ${month}월 ${onedaybefore}일 기준`; // 8자리 조합 하이픈

  return [today, yesterday, yesterdayKO]; // 리턴값이 다수가 필요하면 배열로 반환
}
let [today, yesterday, yesterdayKO] = getToday(); // 분할 대입 이용
// console.log(today);
// console.log(yesterday);
// console.log(yesterdayKO);
// yDay.innerText = yesterdayKO; // 기준일

// 세자리 콤마
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// 금액 단위에 한글 집어넣기
function numberWithKorean(num) {
  let result = '';
  for (i = 0; i < num.length; i++) {
      arr = [num.charAt(num.length - (i + 1))]; // for구문을 통해 반복하여 역순으로 배열채우기
      // console.log(arr);
      str = '';
      if (arr != '') str += arr;
      if (i == 8) str += '억';
      if (i == 11) str += ',';
      if (i == 12) str += '조 ';
      result = str + result;
  }
  if (num != 0) {
      let clip = result.lastIndexOf('억')
      result = result.substring(0, clip+1) + '원'; // 억단위에서 절삭
      
      let zeroComma = result.search(/0,/gi); // 천억단위에서 0값 및 콤마찾기, 있으면 index 반환
      if (zeroComma > 0) result = result.replace('0,',''); 
  }
  return result;
}

let codeStock = '122870'; // 주식코드

const serviceKey = 'gptlfeF0tckKWZugnRmyvS4wuIp7K2dDyLC9SjDzp%2BIk8HEEiN8OH9m9Xm1%2BH%2FIvBWPxcRBQ8mhpUGvA9n9yVA%3D%3D'; // API인증키
// 개인계정의 인증키로 활성화된 API입력
const publicAPIurl = `https://runauxlabs.herokuapp.com/https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?numOfRows=3&resultType=json&likeSrtnCd=${codeStock}&serviceKey=${serviceKey}`;
// CORS이슈, 외부API를 사용하고 있는 입장에서는 서버를 제어할 수 없으므로 구글링에 나오는 해결법 중 HTTP 응답 헤더인 Access-Control-Allow-Origin 를 설정할 수 없음
// 프록시 서버를 사용하여 우회하는 방식으로 해결 https://cors-anywhere.herokuapp.com/
// RunaUXLabs전용 https://runauxlabs.herokuapp.com/
// 프록시서버는 클라이언트가 프록시 서버 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해 준다. 브라우저와 서버 간의 통신을 도와주는 중계서버라고 생각하면 된다. 
fetch(publicAPIurl)
  .then((response) => response.json() )
  .then(function (data) {
      let yesterStock = data.response.body.items.item[0]; // 전날 주식정보

      itmsNm.innerText = yesterStock.itmsNm; // 종목명
      srtnCd.innerText = yesterStock.srtnCd; // 종목코드 6자리
      mrktCtg.innerText = yesterStock.mrktCtg; // 시장구분
      basDt.innerText = yesterdayKO; // 기준일
      clpr.innerText = `${numberWithCommas(yesterStock.clpr)}원`; // 전날 종가
      mrktTotAmt.innerText = numberWithKorean(yesterStock.mrktTotAmt); // 전날 시가총액
      yesterStock.vs = Number(yesterStock.vs); // 등락금액 숫자변환
      yesterStock.fltRt = Number(yesterStock.fltRt); // 등락비율 숫자변환
      // 등락금액
      if (yesterStock.vs > 0) {
          //상승
          vs.innerText = yesterStock.vs;
          vs.classList.add('up');
      } else {
          //하락
          vs.innerText = yesterStock.vs;
          vs.classList.add('down');
      }
      // 등락비율
      if (yesterStock.fltRt > 0) {
          //상승
          fltRt.innerText = yesterStock.fltRt + '%';
          fltRt.classList.add('up');
      } else {
          //하락
          fltRt.innerText = yesterStock.fltRt + '%';
          fltRt.classList.add('down');
      }
  });