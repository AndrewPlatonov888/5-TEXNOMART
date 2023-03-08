
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
    // document.querySelector('.login-button').style.setProperty("--background-color", "#FF4A78"); //кнопку в покое сделали красной
    // document.querySelector('.login-button').style.setProperty("--background-image", "url('../images/logged-icon.svg')"); //делаем иконку белой
    // document.querySelector('.login-button').style.setProperty("--color", "#FCFCFC");
    // document.querySelector('.login-button').style.setProperty("--background-hover", "#FF4A78"); // белые фоны заменили красным
    // document.querySelector('.login-button').style.setProperty("--background-active", "#FF4A78"); // белые фоны заменили красным
    // document.querySelector('.login-button').style.setProperty("--opacity-hover", "0.6");  // опасити 0.6 на ховер
    // document.querySelector('.login-button').style.setProperty("--opacity-active", "0.3");  // опасити 0.3 на актив
    // document.querySelector('.login-button').style.setProperty("--border", "2px solid #000000"); //сделали фокусу ЧЕРНЫЙ бордер
    // document.querySelector('.login-button').style.setProperty("--display", "flex");
    document.querySelector('.login-form').style.setProperty("--display", "flex");

    // закрытие элемента по клику вне элемента
    document.addEventListener("mouseup", function (event) {
      var obj = document.querySelector('.login-form');
      var loginbtn = document.querySelector('.login-button');
      if (!obj.contains(event.target) && !loginbtn.contains(event.target)) {
        document.querySelector('.login-form').style.setProperty("--display", "none");
        document.getElementById("login-btn").value = "off";
        //все св-ва возвращаем на исходные позиции
        // document.querySelector('.login-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
        // document.querySelector('.login-button').style.setProperty("--background-image", "url('../images/login-icon.svg')");
        // document.querySelector('.login-button').style.setProperty("--color", "#2D3440");
        // document.querySelector('.login-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
        // document.querySelector('.login-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
        // document.querySelector('.login-button').style.setProperty("--opacity-hover", "1");
        // document.querySelector('.login-button').style.setProperty("--opacity-active", "1");
        // document.querySelector('.login-button').style.setProperty("--border", "2px solid #2D3440");
      }
      else {
        //  alert("Обнаружен ВНУТРЕННИЙ клик!");
        ; //иначе, если клик состоялся по элементу ---> тогда НИЧЕГО не делаем
      }
    });
  }
  else {
    document.querySelector('.login-form').style.setProperty("--display", "none");
    document.getElementById("login-btn").value = "off";
    //все св-ва возвращаем на исходные позиции
    // document.querySelector('.login-button').style.setProperty("--background-color", "rgba(252, 252, 252, 0.3)");
    // document.querySelector('.login-button').style.setProperty("--background-image", "url('../images/login-icon.svg')");
    // document.querySelector('.login-button').style.setProperty("--color", "#2D3440");
    // document.querySelector('.login-button').style.setProperty("--background-hover", "rgba(252, 252, 252, 0.5)");
    // document.querySelector('.login-button').style.setProperty("--background-active", " rgba(252, 252, 252, 1)");
    // document.querySelector('.login-button').style.setProperty("--opacity-hover", "1");
    // document.querySelector('.login-button').style.setProperty("--opacity-active", "1");
    // document.querySelector('.login-button').style.setProperty("--border", "2px solid #2D3440");
  }
}
