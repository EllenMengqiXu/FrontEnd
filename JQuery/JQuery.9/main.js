var form = $('#search');
var input = $('#username');
var result = $('#result');
var username;
form.on('submit',
function (e) {
  e.preventDefault();
  username = input.val();
  $.ajax('https://api.github.com/users/' + username)
    .done(function (data) {
      var html =
        '<div>Username: ' + data.login + '</div>' +
        '<div>Intro: ' + (data.bio || 'NA') + '</div>'
      result.html(html);
    })
})
