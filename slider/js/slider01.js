;(function($){
  "use strict";
  var
    timer,
    $slider,
    imageLength,

    current = 0,
    interval = 2000,
    imageWidth = 730;

  function init(){
    $slider = $(".main_slider ul");
    imageLength = $slider.children().length;
  };

  function slide(){
    var postition = imageWidth*current;
    $slider.stop().animate({
      "marginLeft": - postition + "px"
    });
  };

  function autoSlide(){
    clearTimeout(timer);
    slide();
    current = current + 1 > imageLength - 1 ? 0 : current + 1;
    timer = setTimeout(autoSlide, interval);
  };

  $(function(){
    init();
    autoSlide();
  });

})(jQuery);