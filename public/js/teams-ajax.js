$(document).ready(function() {
  $('.delete-team').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $.ajax({
      url: href,
      method: 'DELETE'
    }).done(function(response) {
      console.log('Promise reached');
      window.location.href = '/teams'
    });
  });

  $('.edit-form').submit(function(e){
    e.preventDefault();
    console.log('edit from ajax fx');
    //AJAX call goes here
    $.ajax({
      //url: is the action not the url!!!
      url: $(this).attr('action'),
      method: 'PUT',
      data:{
        name: $('#new-name').val(),
        members: $('#members').val()
      }
    }).done(function(response){
      console.log('Edit reached');
      //window.location.href = '/teams';
      window.location.href = '/teams';
    })
  })


});
