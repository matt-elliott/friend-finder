//handle form submitting to prevent from being sent to /api/addFriend
$('#survey-form').submit(function(event) {
  event.preventDefault();
  
  let formData = $(this).serializeArray();
  
  $.post('/api/addFriend', formData, 'json')
    .done(function(data) {
      $('body').prepend(data);
      setTimeout(function() {
        $('#matchPopUp').css('display','block');
        $('#matchPopUp').addClass('show');
      }, 500);
  });
  
  $(this).trigger('reset');
});

