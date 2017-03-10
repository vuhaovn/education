;(function($){
  "use strict";

  var
    win,
    timer,
    $slider,
    $prev,
    $next,
    $cloneLast,
    $cloneFirst,
    imageLength,

    offset = 0,
    current = 0,
    interval = 5000,
    imageWidth = 960;

  function init() {
    win = $(window).width();
    offset = ( win - imageWidth ) / 2;
    $slider = $("#slider .main ul");
    $prev = $(".button .prev");
    $next = $(".button .next");
    imageLength = $slider.find("li").length;
    $cloneLast = $slider.children(":last").clone();
    $cloneFirst = $slider.children(":first").clone();
    $slider
    .append($cloneFirst)
    .prepend($cloneLast);
    $slider.stop().css({
      "marginLeft": - imageWidth + "px"
    });
    timer = setTimeout( autoSlide , interval ); 
    scroll();
    bxslider();
    buttonClick();
  };

  function slide(next) {
    var nextPosition = checkPosition(next);
    $slider.stop().animate({
      "marginLeft": nextPosition + "px"
    });
    current = next;
  };

  function autoSlide() {
    clearTimeout(timer);
    var next = current + 1 > imageLength - 1 ? 0 : current + 1;
    slide(next);
    timer = setTimeout( autoSlide , interval );
  };

  function checkPosition(next) {
    var nextPosition = -(imageWidth * next + imageWidth);
    if( current === imageLength - 1 && next === 0 ){
      $slider.stop().css({
        "marginLeft": 0
      });
    } else if( current === 0 && next === imageLength - 1 ){
      $slider.stop().css({
        "marginLeft": -(imageLength * imageWidth + imageWidth) + "px"
      });
    };
    return nextPosition;
  };

  function scroll(){
    $(".pageTop, a[href^='#']").click(function(event){
      event.preventDefault();
      var href = $(this).attr("href"),
          $target = $((href == "#" || href == "" || !href)? "html" : href);
      if(!$target.offset()) return;
      var position = $target.offset().top;
      $("body, html").animate({
        "scrollTop" : position - 50
      }, 500);
    });
  };

  function bxslider(){
    var slider = $(".bxslider").bxSlider({
      minSlides: 5,
      maxSlides: 10,
      moveSlides: 1,
      slideWidth: 160,
      slideMargin: 15,
      pager: false,
      auto: true,
      onSlideAfter: function() {
        slider.startAuto();
      }
    });
  };

  function buttonClick(){
    $next.off().on("click tap", function(event) {
      event.preventDefault();
      clearTimeout(timer);
      var next = current + 1 > imageLength - 1 ? 0 : current + 1;
      slide(next);
      timer = setTimeout( autoSlide , interval );
    });

    $prev.off().on("click tap", function(event) {
      event.preventDefault();
      clearTimeout(timer);
      var next = current - 1 < 0 ? imageLength - 1 : current - 1;
      slide(next);
      timer = setTimeout( autoSlide , interval );
    });
  };

  //document.ready
  $(function(){
    init();
  });

})(jQuery);