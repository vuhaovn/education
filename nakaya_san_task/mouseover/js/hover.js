;(function($){
  "use strict";
  var
    $imgHover,

  init = function(){
    $imgHover = $(".img_hover");
    $imgHover.on({
      "mouseover": function(){
        var thisSrc = $(this).attr("src");
        $(this).attr("src", thisSrc.replace("_off.", "_on."));
      },
      "mouseout": function(){
        var thisSrc = $(this).attr("src");
        $(this).attr("src", thisSrc.replace("_on.", "_off."));
      }
    });
  };

  //document.ready
  $(function(){
    init();
  });
  
})(jQuery);