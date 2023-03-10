var SearchFormEvent = document.getElementById('site-search');
SearchFormEvent.addEventListener('click', SearchToggleFunction);

function SearchToggleFunction() {
  if (document.getElementById("search-btn").value == "off") {
    document.getElementById("search-btn").value = "on";
    document.querySelector('.site-search-form').style.setProperty("--background", "#FFFFFF"); // форму покрасили в белый
    document.querySelector('.search-marker').style.setProperty("--display", "none"); // Убираем текст "Поиск"
    document.querySelector('.search-button').style.setProperty("--background", "url('../images/blue-loupe.svg')"); // лупу красим в голубой
    document.querySelector('.search-button').style.setProperty("--opacity", "1"); // лупу красим в голубой
    document.querySelector('.search-line').style.setProperty("--display", "flex"); // дали дисплей инпуту

    // закрытие элемента по клику вне элемента
    document.addEventListener("mouseup", function (event) {
      var obj = document.querySelector('.search-line');
      var catalogbtn = document.querySelector('.site-search-form');

      if (!obj.contains(event.target) && !catalogbtn.contains(event.target)) {
        document.querySelector('.search-line').style.setProperty("--display", "none"); // убрали дисплей  у инпута
        document.getElementById("search-btn").value = "off";
        document.querySelector('.site-search-form').style.setProperty("--background", "#293449"); // форму покрасили в темный цвет
        document.querySelector('.search-marker').style.setProperty("--display", "flex"); // возвращаем текст "Поиск"
        document.querySelector('.search-button').style.setProperty("--background", "url('../images/loupe-icon.svg')"); // лупу красим в белый
        document.querySelector('.search-button').style.setProperty("--opacity", "0.3"); // лупу красим в белый
        console.log('сработала функции закрытия search-line');
      }
      else {
        ; // ничего не делаем
      }
    });
  }
  else {
    ; // ничего не делаем
  }
}

var LoginEvent = document.getElementById('login-btn');
LoginEvent.addEventListener('click', LoginToggleFunction);

function LoginToggleFunction() {
  if (document.getElementById("login-btn").value == "off") {
    document.getElementById("login-btn").value = "on";
    document.querySelector('.login-form').style.setProperty("--display", "flex");
    document.getElementById("login-on").reset();
  }
  else {
    document.querySelector('.login-form').style.setProperty("--display", "none");
    document.getElementById("login-btn").value = "off";
  }
}

// Обработчик на кнопку выход ("разлогинится")
var GoodbyeEvent = document.querySelector('.goodbye-button');
GoodbyeEvent.addEventListener('click', GoodbyeToggleFunction);

function GoodbyeToggleFunction() {
  document.querySelector('.goodbye-form').style.setProperty("--display", "flex");
}

// закрытие логин-формы после submit'a и открытие wellcome-формы
const myform = document.getElementById("login-on");
myform.addEventListener("submit", logSubmit);
function logSubmit(event) {
  if (document.querySelector('.wellcome-transparent').value == "off") {
    document.getElementById('login-on').submit();
    myform.style.setProperty('--display', 'none');
    document.getElementById("login-btn").value = "off";
    document.querySelector('.wellcome-form').style.setProperty("--display", "flex");
    document.querySelector('.wellcome-transparent').value = "on";
    document.querySelector('.new-user-container').style.setProperty("--display", "none");
    document.querySelector('.logged-user-container').style.setProperty("--display", "flex");
  };
}


// закрытие wellcome-формы после submit'a
const myWellcomeForm = document.getElementById("wellcome-on");
myWellcomeForm.addEventListener("submit", WellcomeSubmit);
function WellcomeSubmit(event) {
  document.getElementById('wellcome-on').submit();
  myWellcomeForm.style.setProperty('--display', 'none');
  document.querySelector('.wellcome-transparent').value = "off";
  console.log(document.querySelector('.wellcome-transparent').value);
  document.querySelector('.logged-user-container').style.setProperty("--display", "none");
  document.querySelector('.new-user-container').style.setProperty("--display", "flex");
  GoodbyeToggleFunction();
  return;
}


// обработчик на кнопку закрытия логин-формы
var LoginCloseEvent = document.querySelector('.login-close');
LoginCloseEvent.addEventListener('click', function () {
  document.querySelector('.login-form').style.setProperty("--display", "none");
  document.getElementById("login-btn").value = "off";

});

// обработчик на кнопку закрытия wellcome-формы
var WellcomeCloseEvent = document.querySelector('.wellcome-close');
WellcomeCloseEvent.addEventListener('click', function () {
  if (document.querySelector('.wellcome-transparent').value == "on") {
    document.querySelector('.wellcome-form').style.setProperty("--display", "none");
    document.querySelector('.wellcome-transparent').value = "off";
    return;
  }
});

// обработчик на кнопку закрытия goodbye-формы
var GoodbyeCloseEvent = document.querySelector('.goodbye-close');
GoodbyeCloseEvent.addEventListener('click', function () {
  document.querySelector('.goodbye-form').style.setProperty("--display", "none");
  document.querySelector('.logged-user-container').style.setProperty("--display", "none");
  document.querySelector('.new-user-container').style.setProperty("--display", "flex");
});

// закрытие окон по нажатию клавиши ESC
document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) { // код клавиши Escape, но можно использовать e.key
    //закрываем логин, если он открыт
    if (document.getElementById("login-btn").value == "on") {
      document.querySelector('.login-form').style.setProperty("--display", "none");
      document.getElementById("login-btn").value = "off";
      return;
    }
    //закрываем Wellcome, если он открыт
    if (document.querySelector('.wellcome-transparent').value == "on") {
      document.querySelector('.wellcome-form').style.setProperty("--display", "none");
      document.querySelector('.wellcome-transparent').value = "off"
      return;
    }
    //закрываем Goodbye, если он открыт
    if (document.querySelector('.wellcome-transparent').value == "off" && document.getElementById("login-btn").value == "off") {
      document.querySelector('.goodbye-form').style.setProperty("--display", "none");
      document.querySelector('.logged-user-container').style.setProperty("--display", "none");
      document.querySelector('.new-user-container').style.setProperty("--display", "flex");
      return;
    }
  }
});
