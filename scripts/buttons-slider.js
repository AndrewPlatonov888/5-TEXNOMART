var slideIndex = 1;
//

showSlides(slideIndex);

// Управление вперед/назад
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Показ выбранного слайда
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Функция сброса таймера: после нажатия на любую кнопку слайдера обнуляем таймер перелистывания слайда
function resetTimer() {
  window.clearInterval(Timer);
  Timer = window.setInterval(clickButton, t);
}

var LeftEvent = document.querySelector('.left');
LeftEvent.addEventListener('click', function () {
  plusSlides(-1);
  resetTimer();
});

var RightEvent = document.querySelector('.right');
RightEvent.addEventListener('click', function () {
  plusSlides(1);
  resetTimer();
});

var strawberry = document.querySelectorAll('.dot')[0];
strawberry.addEventListener('click', function () {
  currentSlide(1);
  resetTimer();
});

var banana = document.querySelectorAll('.dot')[1];
banana.addEventListener('click', function () {
  currentSlide(2);
  resetTimer();
});

var caramel = document.querySelectorAll('.dot')[2];
caramel.addEventListener('click', function () {
  currentSlide(3);
  resetTimer();
});

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-content");
  // var ice = document.querySelectorAll('.icecream-image');
  var dots = document.getElementsByClassName("dot");
  // var slideBackground = document.querySelectorAll('.slide-wrapper')[0];

  // красим body в нужный цвет и маленькие круги-подкладки под мороженое в зависимости от слайда
  // switch (n) {
  //   case 0:
  //     document.body.style.setProperty("--background", "#FCC850");
  //     // direction.style.setProperty("--direction", "row");
  //     slideBackground.style.setProperty("--background-slide", "url('../images/hero-grinder.jpg')");
  //     break;
  //   case 1:
  //     document.body.style.setProperty("--background", "#FEAFC3");
  //     // direction.style.setProperty("--direction", "row");
  //     slideBackground.style.setProperty("--background-slide", "url('../images/hero-drill.jpg')");
  //     break;
  //   case 2:
  //     document.body.style.setProperty("--background", "#69A9FF");
  //     // direction.style.setProperty("--direction", "row-reverse");
  //     slideBackground.style.setProperty("--background-slide", "url('../images/hero-perforator.jpg')");
  //     break;
  //   case 3:
  //     document.body.style.setProperty("--background", "#FCC850");
  //     // direction.style.setProperty("--direction", "row");
  //     slideBackground.style.setProperty("--background-slide", "url('../images/hero-grinder.jpg')");
  //     break;
  //   case 4:
  //     document.body.style.setProperty("--background", "#FEAFC3");
  //     // direction.style.setProperty("--direction", "row");
  //     slides[0].style.setProperty("--background-slide", "url('../images/hero-drill.jpg')");
  //     break;
  // }

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    slides[i].className = slides[i].className.replace(" active", "");
    // ice[i].className = ice[i].className.replace(" active-icecream", "");

  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  // ice[slideIndex - 1].className += " active-icecream";

  // красим в соответсвующий цвет подкладку активной мороженки
  // var ball = document.querySelectorAll('.active-icecream')[0];
  // switch (n) {
  //   case 0:
  //     ball.style.setProperty("--background-bigball", "#FCDC92");
  //     break;
  //   case 1:
  //     ball.style.setProperty("--background-bigball", "#FFCBD8");
  //     break;
  //   case 2:
  //     ball.style.setProperty("--background-bigball", "#9FC8FF");
  //     break;
  //   case 3:
  //     ball.style.setProperty("--background-bigball", "#FCDC92");
  //     break;
  //   case 4:
  //     ball.style.setProperty("--background-bigball", "#FFCBD8");
  //     break;
  // }
}

// Имитируем click на кнопку next (вправо)
function clickButton() {
  click_event = new CustomEvent('click');
  btn_element = document.querySelector('.right');
  btn_element.dispatchEvent(click_event);
}

// Имитируем правый-click каждые t-миллисекунд
var t = 5555000;  // здесь можно установить время перелистывания слайдера [ 1000 = 1 сек ]
var Timer = setInterval(clickButton, t);
