function scroll_to_target(target, event){
  if( target.length ) {
      event.preventDefault();
      jQuery('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
  }
}


function open_menu(){
  if(!$("#navigation").is(":visible")){
    $("body").css("overflow", "hidden");
    $("#navigation").fadeIn();
  }
}

function close_menu(){
  if($("#navigation").is(":visible")){
    $("body").css("overflow", "visible");
    $("#navigation").fadeOut();
  }
}

function init_scroll() {
    window.addEventListener('scroll', function(e){

				var distanceY = window.pageYOffset || document.documentElement.scrollTop,
					shrinkOn = jQuery('.index-top').height();
					if(!(shrinkOn > 0)){
							shrinkOn = 10;
					}
				if(distanceY > shrinkOn) {
					jQuery("header").addClass("stick");
				}else {
          if(distanceY < 10){
            jQuery("header").removeClass("stick");
          }
				}
    });
}
