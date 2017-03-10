;(function($){
  "use strict";

  var 
    speed = 0.25,
    position = 0,

  parallax = function(){
    position = $(window).scrollTop();
    $(".bg").css({
      "top": - (position * speed) + "px"
    });
  };

  $(function(){
    $(window).bind({
      "scroll": function(){
        parallax();
      }
    });
  });

})(jQuery);