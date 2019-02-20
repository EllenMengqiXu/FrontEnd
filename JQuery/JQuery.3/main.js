//when there is a dash(-) in the key, such as background-color, we cannot input like that. but we can show it in two ways. First, CamelCase, show as backgroundColor; second, quation mark, shwo as 'background-color'.
/*var a = $('.a')
  .css({
    //color: 'red',
    //backgroundColor: 'black',
    //border: '2px solid blue',
  })
  .addClass('black')
  .removeClass('b')
  ;

console.log(a.hasClass('black'));
console.log(a.hasClass('abcd'));*/
// var a = $('.a')
// a.hide();
// a.show();
// // a.fadeOut(2000);
// // a.fadeIn(2000);
// a.slideUp(2000);
// a.slideDown(2000);

var board =$('#board');

function toggle() {
  if (board.hasClass('active')) {
    board.removeClass('active');}
  else {
      board.addClass('active');
    }

}

setInterval(toggle, 200);
