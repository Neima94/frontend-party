$(document).ready(function(){

  init_scroll();

  $("#responsive-menu").on("click", function(){
      open_menu();
  });

  $("#responsive-close").on("click", function(){
      close_menu();
  });

  jQuery('a[href^="#"]').on('click', function(event) {
    var target = jQuery($(this).attr("href"));
    close_menu();
    scroll_to_target(target, event);
  });
  jQuery('#header-arrow').on('click', function(event) {
    var target = jQuery("#features");
    scroll_to_target(target, event);
  });

  jQuery('#header-button').on('click', function(event) {
    var target = jQuery("#pricing");
    scroll_to_target(target, event);
  });


});
