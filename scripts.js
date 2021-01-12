
const input = document.querySelector('input');
const btn = document.querySelector('button');
const errorIcon = document.querySelector('.error-icon');
const errorMsg = document.querySelector('.error-msg');

btn.addEventListener("click", function() {

    if (!emailIsValid(input.value)) {
      errorIcon.style.display = "block";
      errorMsg.style.display = "block";
      input.style.border = "thin solid red";
    } else {
      errorIcon.style.display = "none";
      errorMsg.style.display = "none";
    }
  });
  

// More info  https://ui.dev/validate-email-address-javascript/
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }