let n = document.querySelector('.products-list').childElementCount; // определяем количество продуктовых карточек на экране
console.log('n= ' + n);

var resultProductHover = {};
for (let i = 0; i <= n-1; i++) {
  resultProductHover["ProductHover" + i] = document.querySelectorAll('.product-card')[i];
  resultProductHover["ProductHover" + i].addEventListener('mouseover', function () {
    document.querySelectorAll('.product-card')[i].style.setProperty("--filter", "drop-shadow(0 4px 13px rgba(0, 0, 0, 0.25))");
    document.querySelectorAll('.product-image')[i].style.setProperty("--display", "none");
    document.querySelectorAll('.product-card-buttons')[i].style.setProperty("--display", "flex");
  });
  resultProductHover["ProductHover" + i].addEventListener('mouseout', function () {
    document.querySelectorAll('.product-card')[i].style.setProperty("--filter", "none");
    document.querySelectorAll('.product-image')[i].style.setProperty("--display", "inline-block");
    document.querySelectorAll('.product-card-buttons')[i].style.setProperty("--display", "none");
  });
}

var resultProductBuy = {};
var basketQty = 0;
for (let i = 0; i <= n-1; i++) {
  resultProductBuy["BuyAction" + i] = document.querySelectorAll('.buy-btn')[i];
  resultProductBuy["BuyAction" + i].addEventListener('click', function () {
    if (resultProductBuy["BuyAction" + i].value == "off") {
      resultProductBuy["BuyAction" + i].innerHTML = "Удалить из корзины";
      document.querySelectorAll('.product-button')[i].style.setProperty("--display-basket", "flex");
      resultProductBuy["BuyAction" + i].value = "on";
      basketQty = basketQty + 1;
      document.querySelector('.basket-btn').style.setProperty("--margin-right", "44px");
      document.querySelector('.bookmark-btn').style.setProperty("--margin-right", "48px");

      document.querySelector('.basket-qty').innerHTML = basketQty;

      console.log("productQty = " + basketQty);
      return;
    }
    if (resultProductBuy["BuyAction" + i].value == "on") {
      resultProductBuy["BuyAction" + i].innerHTML = "Купить";
      document.querySelectorAll('.product-button')[i].style.setProperty("--display-basket", "none");
      resultProductBuy["BuyAction" + i].value = "off";
      basketQty = basketQty - 1;
      if (basketQty > 0) {
        document.querySelector('.basket-qty').innerHTML = basketQty;
      }
      else {
        document.querySelector('.basket-qty').innerHTML = '';
        if (basketQty == 0 && favoriteQty == 0) {
          document.querySelector('.basket-btn').style.setProperty("--margin-right", "26px");
          document.querySelector('.bookmark-btn').style.setProperty("--margin-right", "20px");
        }
      }
      console.log("productQty = " + basketQty);
      return;
    }
  });
}

var resultProductMark = {};
var favoriteQty = 0;
for (let i = 0; i <= n-1; i++) {
  resultProductMark["MarkAction" + i] = document.querySelectorAll('.marker-btn')[i];
  resultProductMark["MarkAction" + i].addEventListener('click', function () {
    if (resultProductMark["MarkAction" + i].value == "off") {
      resultProductMark["MarkAction" + i].innerHTML = "Удалить закладку";
      document.querySelectorAll('.product-button')[i].style.setProperty("--display-marker", "flex");
      resultProductMark["MarkAction" + i].value = "on";
      favoriteQty = favoriteQty + 1;
      document.querySelector('.basket-btn').style.setProperty("--margin-right", "44px");
      document.querySelector('.bookmark-btn').style.setProperty("--margin-right", "48px");
      document.querySelector('.favorite-qty').innerHTML = favoriteQty;
      console.log("favoriteQty = " + favoriteQty);
      return;
    }
    if (resultProductMark["MarkAction" + i].value == "on") {
      resultProductMark["MarkAction" + i].innerHTML = "В закладки";
      document.querySelectorAll('.product-button')[i].style.setProperty("--display-marker", "none");
      resultProductMark["MarkAction" + i].value = "off";
      favoriteQty = favoriteQty - 1;
      if (favoriteQty > 0) {
        document.querySelector('.favorite-qty').innerHTML = favoriteQty;
      }
      else {
        document.querySelector('.favorite-qty').innerHTML = '';
        if (basketQty == 0 && favoriteQty == 0) {
          document.querySelector('.basket-btn').style.setProperty("--margin-right", "26px");
          document.querySelector('.bookmark-btn').style.setProperty("--margin-right", "20px");
        }
      }
      console.log("favoriteQty = " + favoriteQty);
      return;
    }
  });
}



////////// Focus/Hover на SELECT //////

var SelectEvent = document.querySelector('.product-options');
SelectEvent.addEventListener('focus', SelectFocus);
SelectEvent.addEventListener('blur', SelectNormalize);
SelectEvent.addEventListener('mouseover', SelectHover);
SelectEvent.addEventListener('mouseout', SelectNormalize);

function SelectFocus() {
  SelectEvent.style.setProperty("--border", "1px solid #63A63E");
  SelectEvent.style.setProperty("--outline", "1px solid #FFBF47");
  document.querySelector('.sort-products').style.setProperty("--background-image", 'url("../images/select-green.svg")');
  SelectEvent.style.setProperty("--outline", "1px solid #FFBF47");
}

function SelectNormalize() {
  SelectEvent.style.setProperty("--border", "1px solid #3D546F");
  SelectEvent.style.setProperty("--outline", "none");
  document.querySelector('.sort-products').style.setProperty("--background-image", 'url("../images/select-icon.svg")');
}

function SelectHover() {
  SelectEvent.style.setProperty("--border", "1px solid #63A63E");
}
