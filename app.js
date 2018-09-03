// Event handler for checkbox at top of page
$('#night-mode').change(function() {
  // Apply night styles if checkbox is checked
  if ($('#night-mode').is(':checked')) {
    $('.banner').removeClass('day-banner').addClass('night-banner');
    $('body').addClass('night-background');
    $('.project-div').removeClass('day-project-div').addClass('night-project-div');
    $('.sub-header').removeClass('day-sub-header').addClass('night-sub-header');
    $('.contact-item').removeClass('day-contact-item').addClass('night-contact-item');
  }
  // Apply day (default) styles if checkbox is unchecked
  else {
    $('.banner').removeClass('night-banner').addClass('day-banner');
    $('body').removeClass('night-background');
    $('.project-div').removeClass('night-project-div').addClass('day-project-div');
    $('.sub-header').removeClass('night-sub-header').addClass('day-sub-header');
    $('.contact-item').removeClass('night-contact-item').addClass('day-contact-item');
  }
});
