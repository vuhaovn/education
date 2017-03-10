;(function($){
  "use strict";
  var
    timer,
    $next,
    $prev,
    $slider,
    $btnIndex,
    $cloneLast,
    $cloneFirst,
    imageLength,
    
    current = 0,
    interval = 5000,
    imageWidth = 730;

  function init(){
    $slider = $(".main_slider ul");
    $next = $(".button .next");
    $prev = $(".button .prev");
    $btnIndex = $(".btn_index li");
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
    var nextPosition = checkPosition(next);
    $slider.stop().animate({
      "marginLeft": nextPosition + "px"
    },{
      duration: 1000,
      easing: "easeInCubic"
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

  function buttonClick(){
    $next.on("click tap", function(event){
      event.preventDefault();
      var next = current + 1 > imageLength - 1 ? 0 : current + 1;
      slide(next);

      var $thisImg = $btnIndex.eq(next).find("img");
      var imgSrc = $thisImg.attr("src");

      $btnIndex.find("img").attr("src", imgSrc.replace("_on.", "_off."));
      $thisImg.attr("src", imgSrc.replace("_off.", "_on."));
    });

    $prev.on("click tap", function(event){
      event.preventDefault();
      var next = current - 1 < 0 ? imageLength - 1 : current - 1;
      slide(next);

      var $thisImg = $btnIndex.eq(next).find("img");
      var imgSrc = $thisImg.attr("src");

      $btnIndex.find("img").attr("src", imgSrc.replace("_on.", "_off."));
      $thisImg.attr("src", imgSrc.replace("_off.", "_on."));
    });

    $btnIndex.on("click tap", function(event){
      event.preventDefault();
      var next = $(this).index();
      slide(next);
      var $thisImg = $(this).find("img");
      var imgSrc = $thisImg.attr("src");

      $btnIndex.find("img").attr("src", imgSrc.replace("_on.", "_off."));
      $thisImg.attr("src", imgSrc.replace("_off.", "_on."));
    });
  }

  $(function(){
    init();
    buttonClick();
    timer = setTimeout(autoSlide, interval);
  });

})(jQuery);