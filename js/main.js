$(function () {
  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function (e) {
    e.preventDefault();
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function () {
      //On Complete, we reset all active dropdown classes and attributes
      //This fixes the visual bug associated with the open class being removed too fast
      $('.dropdown').removeClass('open');
      $('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'false');
    });
  });
});

// toggle hamburger menu animation
function hamburger(x) {
  x.classList.toggle("change");
}

// trigger contact modal
$(".contact").click(function() {
  $('#myModal').modal('toggle');
})

// validation for contact form
// get form, input box, and error message element
var form = document.getElementsByTagName('form')[0];
var name = document.getElementById('name');
var phone = document.getElementById('phone');
var email = document.getElementById('mail');
var message = document.getElementById('msg');
var error = document.querySelector('.error');

name.addEventListener("input", function(event){
  // As user types, check if field is valid
  if (!name.validity.valueMissing) {
    // If error is visibile and field is valid
    // remove error message
    error.innerHTML = ""; // Reset content of message
    error.className = "error"; // Reset visual state of message
  }
}, false);

phone.addEventListener("input", function(event){
  // As user types, check if field is valid
  if (phone.validity.patternMismatch) {
    // If error is visibile and field is valid
    // remove error message
    error.innerHTML = ""; // Reset content of message
    error.className = "error"; // Reset visual state of message
  }
}, false);

email.addEventListener("input", function(event){
  // As user types, check if field is valid
  if (email.validity.valid) {
    // If error is visibile and field is valid
    // remove error message
    error.innerHTML = ""; // Reset content of message
    error.className = "error"; // Reset visual state of message
  }
}, false);

form.addEventListener("submit", function (event) {
  // As data is submitted, check if field
  // is valid
  if (name.validity.valueMissing) {
    
    // If the field is not valid, we display a custom
    // error message
    error.innerHTML = "Please enter your name";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  if (!phone.validity.patternMismatch) {
    
    // If the field is not valid, we display a custom
    // error message
    error.innerHTML = "Please enter your phone number";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  if (!email.validity.valid) {
    
    // If the field is not valid, we display a custom
    // error message
    error.innerHTML = "Please enter your email";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);


















