;(function(){
  "use strict";
  var 
    timer,
    $ele,
    interval = 100,
    distance = 10,
    times = 5,

  init = function(){
    $ele = $("#shake");
    timer = setTimeout( autoShake , 2000 );
  },

  shake = function(){

    for(var i = 0 ; i < times ; i++){
      $ele.animate({
        left: (i%2 == 0 ? distance : distance*-1) + "px"
      }, interval);
    }

    $ele.animate({
      left: 0
    }, interval);
  },

  autoShake = function() {
    clearTimeout(timer);
    shake();
    timer = setTimeout( autoShake , 2000 );
  };

  //document.ready
  $(function(){
    init();
  });

})(jQuery);