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

// trigger About modal
$(".about").click(function () {
  BootstrapDialog.show({
    message: $('<div></div>').load('about.html')
  });
})

// trigger contact modal
$(".contact").click(function () {
  $('#contactModal').modal('toggle');
})

// jQuery form validation
$("#contact-us").validate({
  rules: {
    user_name: {
      required: true,
      minlength: 2
    },
    user_phone: {
      required: true,
      phoneUS: true
    },
    user_mail: {
      required: true,
      email: true
    },
    user_message: {
      required: true,
      minlength: 10,
      maxlength: 500
    }
  },
  submitHandler: function (form) {
    $('#contactModal').modal('toggle');
    $('#successModal').modal('toggle');
  }
});
