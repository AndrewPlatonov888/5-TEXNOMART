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
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// Имитируем click на кнопку next (вправо)
function clickButton() {
  click_event = new CustomEvent('click');
  btn_element = document.querySelector('.right');
  btn_element.dispatchEvent(click_event);
}

// Имитируем правый-click каждые t-миллисекунд
var t = 5000;  // здесь можно установить время перелистывания слайдера [ 1000 = 1 сек ]
var Timer = setInterval(clickButton, t);
