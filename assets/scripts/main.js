//TODO: comment this

//Makes drop-down menus smooth
$('.dropdown').on('show.bs.dropdown', function(e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

//TODO: Make this not-buggy on mobile!
$('.dropdown').on('hide.bs.dropdown', function(e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
