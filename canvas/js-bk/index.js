;(function($){
  "use trict";

  // requestAnimationFrame

  window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback, element){
              setTimeout(callback, 1000/60);
            };
  })();

  // cancelAnimationFrame

  window.cancelRequestAnimationFrame = (function(){
    return  window.cancelAnimationFrame              ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame    ||
            window.oCancelRequestAnimationFrame      ||
            window.msCancelRequestAnimationFrame     ||
            function(callback){
              clearTimeout();
            };
  })();

  var 
    sizeH = 500,
    width = 100,
    height = 100,
    sizeW = 1000,
    PI = Math.PI,
    myText = "oRo",
    random = Math.random,

  init = function(){
  };

  //document.ready
  $(function(){
    init();
  });

})(jQuery);