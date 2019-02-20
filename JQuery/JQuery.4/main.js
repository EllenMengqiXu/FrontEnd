var text = $('#a').text();
// console.log("text:", text)
// $('#a').text('LA');
var html = $('#a').html();
// console.log("html:", html);
// $('#a').html('NYC');

console.log('text:', text);
console.log('html:', html);
$('#a').append('<div>Append</div>')
$('#a').prepend('<div>Prepend</div>')
$('#a span').remove();
