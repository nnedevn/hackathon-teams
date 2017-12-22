$(document).ready(function() {
    $('.delete-team').click(function(e){
        e.preventDefault();
  var href = $(this).attr('href');
  $.ajax({
    url: href,
    method: 'DELETE'
  }).then(function(data){
    window.location.href = '/teams'
  });


});



});

