;(function($){
  "use strict";

  var $win,
      $contents,
      winHeight,
      winWidth,

  init = function(){

    $win = $(window);
    $contents = $("#contents");
    winWidth = $win.width();
    winHeight = $win.height();

    $win.on("resize load", function(){
     
    });

  },

  column = function(){
    
  };


  // document.ready
  $(function(){
    init();
  });


})(jQuery);