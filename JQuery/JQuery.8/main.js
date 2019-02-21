var trigger = $('#trigger');
var card = $('#card');
var loaded = false;

trigger.on('click',
  function () {
    if (card.is(':visible')) {
      card.slideUp(2000);
    } else {
      if(!loaded) {
        card.load('card.html');
        loaded = true;
      }
      card.slideDown(2000);
    }
    // card.toggle();
})
