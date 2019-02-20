var card = $('#card');
var cardTrigger = $('#card-trigger');//marke card-trigger to cardTrigger in order to show it out.

cardTrigger.on('click',
function () {
  if (card.is(':visible')) {
    card.slideUp(); //slideup equals to hide
  } else {
    card.slideDown(); //slidedown equals to show
  }

})

card.on('mouseenter', function () {
  card.addClass('active');
})
card.on('mouseleave', function () {
  card.removeClass('active');
})
