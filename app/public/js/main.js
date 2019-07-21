//handle form submitting to prevent from being sent to /api/addFriend
$('#survey-form').submit(function(event) {
  event.preventDefault();
  
  let formData = $(this).serializeArray();
  
  $.post(
    '/api/addFriend',
    formData,
    function(data, status, xhr) {
      console.log(status);
  },
  "json");
  //TODO VVVV UNCOMMENT THIS VVVV
  // $(this).trigger('reset');
});