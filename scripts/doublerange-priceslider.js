//===============Double Range Slider using Vanilla Java Script====================

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".double-slider .progress");
let priceGap = 3000;  // задает ценовой диапазон поделеный на  10
priceInput.forEach(input => {
  input.addEventListener("input", e => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if ((maxVal - minVal) < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// обработчик фокуса даб ренж слайдера

var MinPriceEvent = document.querySelectorAll('.range-min')[0];
var MaxPriceEvent = document.querySelectorAll('.range-max')[0];

MinPriceEvent.addEventListener('input', removeMinFocus);
MinPriceEvent.addEventListener('blur', addMinFocus);
MaxPriceEvent.addEventListener('input', removeMaxFocus);
MaxPriceEvent.addEventListener('blur', addMaxFocus);

function removeMinFocus() {
  document.querySelectorAll('.range-min')[0].style.setProperty("--display", "none");
}

function addMinFocus() {
  document.querySelectorAll('.range-min')[0].style.setProperty("--display", "block");
}

function removeMaxFocus() {
  document.querySelectorAll('.range-max')[0].style.setProperty("--display", "none");
}

function addMaxFocus() {
  document.querySelectorAll('.range-max')[0].style.setProperty("--display", "block");
}
