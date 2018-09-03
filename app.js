$('#night-mode').change(function() {
  if ($('#night-mode').is(':checked')) {
    $('.banner').removeClass('day-banner').addClass('night-banner');
    $('body').addClass('night-background');
    $('.project-div').removeClass('day-project-div').addClass('night-project-div');
    $('.sub-header').removeClass('day-sub-header').addClass('night-sub-header');
    $('.contact-item').removeClass('day-contact-item').addClass('night-contact-item');
  } else {
    $('.banner').removeClass('night-banner').addClass('day-banner');
    $('body').removeClass('night-background');
    $('.project-div').removeClass('night-project-div').addClass('day-project-div');
    $('.sub-header').removeClass('night-sub-header').addClass('day-sub-header');
    $('.contact-item').removeClass('night-contact-item').addClass('day-contact-item');
  }
});
