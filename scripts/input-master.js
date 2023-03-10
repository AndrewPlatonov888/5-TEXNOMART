  var SubscriptionAccess = false;

  var SubscriptionEvent = document.querySelector('.subscription-line');
  SubscriptionEvent.addEventListener('invalid', function (){

  document.querySelector('.subscription-line').style.setProperty("--color-invalid", "#EA5454");
  document.querySelector('.subscription-form').style.setProperty("--color-invalid", "#EA5454");
  document.querySelector('.subscription-line').style.setProperty("--focus-outline", "none");
  SubscriptionAccess = true;
  console.log('инвал сработал');
});

SubscriptionEvent.addEventListener('input', (e) => {
    if (SubscriptionAccess) {
    isValid = e.target.checkValidity();


    if ( isValid == false) {
    document.querySelector('.subscription-line').style.setProperty("--color-invalid", "#EA5454");
  document.querySelector('.subscription-form').style.setProperty("--color-invalid", "#EA5454");
      }
    else {
     document.querySelector('.subscription-line').style.setProperty("--color-invalid", "#63A63E");
  document.querySelector('.subscription-form').style.setProperty("--color-invalid", "#63A63E");
   }

  }}

  );
