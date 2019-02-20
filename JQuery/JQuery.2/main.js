//use find to search from top to bottom
$('div')
  .find('.child')
  .css('border', '2px solid #999');
//use parent or parents to search from bottom to top
$('#child1')
  .parent()
  .css('border', '2px solid #666');
$('#child1')
  .parents('.grandpa')
  .css('border', '2px solid #333');
//use filter to search in the same level
$('.child')
  .filter('.not-gay')
  .css('background', 'red')
