;(function($){
  "use strict";
  var Index = $.index = (function() {

    var
      $scroller = null;

    function init() {
      $scroller = $( (/safari/i.test(navigator.userAgent)) ? "body" : "html" );

      $("a[href^=#]").on({
        "click": function(){
          var
            href = $(this).attr("href"),
            $target = $( (href == "#" || href == "" || !href) ? "html" : href ),
            position = $target.offset().top;

          $scroller.animate({
            "scrollTop": position
          }, 500);

          return false;
        }
      });
    };

    return {
      init: init
    };

  })();
  $(Index.init);
})(jQuery);
