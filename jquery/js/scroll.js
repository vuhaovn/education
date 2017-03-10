;(function($, win){
  "use strict";

  var
    $win,
    $text,
    $element;

  var init = function(){
    $text = $(".first_load span");
    $element = $(".section");
    $win = $(win);

    $win.on({
      "load": function(){
        firstLoad();
      },
      "scroll": function(){
        check_if_in_view();
      }
    }).trigger("scroll");

  };

  var firstLoad = function(){
    var delay = 0;
    $text.each(function(index){
      $(this).delay(delay).fadeIn();
      delay += 300;
    });
  };

  var check_if_in_view = function(){
    var winHeight = $win.height();
    var win_top_position = $win.scrollTop();
    var win_bottom_position = winHeight + win_top_position;

    $.each($element, function(){
      var $this = $(this);
      var thisHeight = $this.outerHeight();
      var this_top_position = $this.offset().top;
      var this_bottom_position = thisHeight + this_top_position;

      if( this_top_position <= win_bottom_position && this_bottom_position >= win_top_position) {
        $this.addClass("view");
      } else {
        $this.removeClass("view");
      }

    });

  };

  //document.ready
  $(function(){
    init();
  });

})(jQuery, window);