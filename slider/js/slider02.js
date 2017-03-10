;(function($){
  "use strict";
  var
    timer,
    $slider,
    $cloneLast,
    $cloneFirst,
    imageLength,

    current = 0,
    interval = 2000,
    imageWidth = 730;

  function init(){
    $slider = $(".main_slider ul");
    imageLength = $slider.children().length;

    $cloneLast = $slider.children(":last").clone();
    $cloneFirst = $slider.children(":first").clone();
    $slider
    .append($cloneFirst)
    .prepend($cloneLast);
    $slider.stop().css({
      "marginLeft": - imageWidth + "px"
    });

  };

  function slide(next){
    var nextPostition = checkPosition(next);
    $slider.stop().animate({
      "marginLeft": nextPostition + "px"
    });
    current = next;
  };

  function autoSlide(){
    clearTimeout(timer);
    var next = current + 1 > imageLength - 1 ? 0 : current + 1;
    slide(next);
    timer = setTimeout(autoSlide, interval);
  };

  function checkPosition(next){
    var nextPosition = -(imageWidth * next + imageWidth);
    if (next === 0 && current === imageLength - 1) {
      $slider.stop().css({
        "marginLeft": 0
      });
    } else if ( next === imageLength -1 && current === 0 ) {
      $slider.stop().css({
        "marginLeft": -(imageWidth * imageLength + imageWidth) + "px"
      });
    };
    return nextPosition ;
  };

  $(function(){
    init();
    timer = setTimeout(autoSlide, interval);
  });

})(jQuery);