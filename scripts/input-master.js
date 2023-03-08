var ValidateAccess = false;
var SubscriptionAccess = false;

var SearchEvent = document.querySelector('.search-line');
var LoginEvent = document.querySelector('.login-line');
var PasswordEvent = document.querySelector('.password-line');
var SubscriptionEvent = document.querySelector('.field-line');
var DateEvent = document.querySelector('.date-input');
var PhoneEvent = document.querySelector('.phone-input');
var AddressEvent = document.querySelector('.address-input');
var SurnameEvent = document.querySelector('.surname-input');
var MsgEvent = document.querySelector('.message-input');
var EmailEvent = document.querySelector('.email-input');




/////////////////////////////////////////////////////////

SearchEvent.addEventListener('focus', function () {
  document.querySelector('.for-search').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.search-line').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.search-line').style.setProperty("--border-hover", "1px solid transparent");
});
SearchEvent.addEventListener('blur', BlurMail);
SearchEvent.addEventListener('input', BlurMail);
function BlurMail() {
  document.querySelector('.for-search').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.search-line').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.search-line').style.setProperty("--border-hover", "1px solid #2D3440");
}

/////////////////////////////////////////////////////////

LoginEvent.addEventListener('focus', function () {
  document.querySelector('.for-login').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.login-line').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.login-line').style.setProperty("--border-hover", "1px solid transparent");
});
LoginEvent.addEventListener('blur', BlurLogin);
LoginEvent.addEventListener('input', BlurLogin);
function BlurLogin() {
  document.querySelector('.for-login').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.login-line').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.login-line').style.setProperty("--border-hover", "1px solid #2D3440");
}

//////////////////////////////////////////////////////////

PasswordEvent.addEventListener('focus', function () {
  document.querySelector('.for-password').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.password-line').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.password-line').style.setProperty("--border-hover", "1px solid transparent");
});
PasswordEvent.addEventListener('blur', BlurPassword);
PasswordEvent.addEventListener('input', BlurPassword);
function BlurPassword() {
  document.querySelector('.for-password').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.password-line').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.password-line').style.setProperty("--border-hover", "1px solid #2D3440");
}

//////////////////////////////////////////////////////////

// SubscriptionEvent.addEventListener('focus', function () {
//   document.querySelector('.for-subscription').style.setProperty("--border", "2px solid #2D3440");
//   document.querySelector('.field-line').style.setProperty("--border-original", "1px solid transparent");
//   document.querySelector('.field-line').style.setProperty("--border-hover", "1px solid transparent");
// });
// SubscriptionEvent.addEventListener('blur', BlurSubscription);
// SubscriptionEvent.addEventListener('input', BlurSubscription);
// function BlurSubscription() {
//   document.querySelector('.for-subscription').style.setProperty("--border", "2px solid transparent");
//   document.querySelector('.field-line').style.setProperty("--border-original", "1px solid #B9B9B9");
//   document.querySelector('.field-line').style.setProperty("--border-hover", "1px solid #2D3440");
// }

//////////////////////////////////////////////////////////

DateEvent.addEventListener('focus', function () {
  document.querySelector('.date-label').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.date-input').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.date-input').style.setProperty("--border-hover", "1px solid transparent");
});
DateEvent.addEventListener('blur', BlurDate);
DateEvent.addEventListener('input', BlurDate);
function BlurDate() {
  document.querySelector('.date-label').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.date-input').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.date-input').style.setProperty("--border-hover", "1px solid #2D3440");
}

//////////////////////////////////////////////////////////

PhoneEvent.addEventListener('focus', function () {
  document.querySelector('.phone-label').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.phone-input').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.phone-input').style.setProperty("--border-hover", "1px solid transparent");
  document.querySelector('.phone-placeholder').style.setProperty("--display-placeholder", "none");
});
PhoneEvent.addEventListener('blur', BlurPhone);
PhoneEvent.addEventListener('input', BlurPhone);
function BlurPhone() {
  document.querySelector('.phone-label').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.phone-input').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.phone-input').style.setProperty("--border-hover", "1px solid #2D3440");
}

//////////////////////////////////////////////////////////

AddressEvent.addEventListener('focus', function () {
  document.querySelector('.address-label').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.address-input').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.address-input').style.setProperty("--border-hover", "1px solid transparent");
});
AddressEvent.addEventListener('blur', BlurAddress);
AddressEvent.addEventListener('input', BlurAddress);
function BlurAddress() {
  document.querySelector('.address-label').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.address-input').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.address-input').style.setProperty("--border-hover", "1px solid #2D3440");
}

//////////////////////////////////////////////////////////

SurnameEvent.addEventListener('focus', function () {
  document.querySelector('.surname-label').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.surname-input').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.surname-input').style.setProperty("--border-hover", "1px solid transparent");
});
SurnameEvent.addEventListener('blur', BlurSurname);
SurnameEvent.addEventListener('input', BlurSurname);
function BlurSurname() {
  document.querySelector('.surname-label').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.surname-input').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.surname-input').style.setProperty("--border-hover", "1px solid #2D3440");
}



//////////////////////////////////////////////////////////

MsgEvent.addEventListener('focus', function () {
  document.querySelector('.message-label').style.setProperty("--border", "2px solid #2D3440");
  document.querySelector('.message-input').style.setProperty("--border-original", "1px solid transparent");
  document.querySelector('.message-input').style.setProperty("--border-hover", "1px solid transparent");
});
MsgEvent.addEventListener('blur', BlurMessage);
MsgEvent.addEventListener('input', BlurMessage);
function BlurMessage() {
  document.querySelector('.message-label').style.setProperty("--border", "2px solid transparent");
  document.querySelector('.message-input').style.setProperty("--border-original", "1px solid #B9B9B9");
  document.querySelector('.message-input').style.setProperty("--border-hover", "1px solid #2D3440");
}


////////////////////////////////////////

EmailEvent.addEventListener('invalid', function (){

  document.querySelector('.email-input').style.setProperty("--color-invalid", "#EA5454");
  document.querySelector('.email-container').style.setProperty("--color-invalid", "#EA5454");
  ValidateAccess = true;
});

  EmailEvent.addEventListener('input', (e) => {
    if (ValidateAccess) {
    isValid = e.target.checkValidity();


    if ( isValid == false) {
    document.querySelector('.email-input').style.setProperty("--color-invalid", "#EA5454");
  document.querySelector('.email-container').style.setProperty("--color-invalid", "#EA5454");
      }
    else {
     document.querySelector('.email-input').style.setProperty("--color-invalid", "#2D3440");
  document.querySelector('.email-container').style.setProperty("--color-invalid", "#2D3440");
   }

  }}

  );

  ////////////////////////////////////////

  SubscriptionEvent.addEventListener('invalid', function (){

  document.querySelector('.field-line').style.setProperty("--color-invalid", "#EA5454");
  document.querySelector('.fieldline-container').style.setProperty("--color-invalid", "#EA5454");
  SubscriptionAccess = true;
});

SubscriptionEvent.addEventListener('input', (e) => {
    if (SubscriptionAccess) {
    isValid = e.target.checkValidity();


    if ( isValid == false) {
    document.querySelector('.field-line').style.setProperty("--color-invalid", "#EA5454");
  document.querySelector('.fieldline-container').style.setProperty("--color-invalid", "#EA5454");
      }
    else {
     document.querySelector('.field-line').style.setProperty("--color-invalid", "#2D3440");
  document.querySelector('.fieldline-container').style.setProperty("--color-invalid", "#2D3440");
   }

  }}

  );
