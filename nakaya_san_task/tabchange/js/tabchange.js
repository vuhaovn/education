;(function($){
  "use strict";

  var Index = $.index = (function(){
    var
      $btn = null,
      $content = null,

      currentIndex = 0;

    function init(){
      $btn = $("#tab_nav a");
      $content = $("#tab_contents .section");

      $btn.on({
        "click": function(){
          var
            $this = $(this),
            selectIndex = $this.parent().index();

          // If in progress
          if (currentIndex != selectIndex){
            // Save current = index
            currentIndex = selectIndex;

            $content
            .stop().animate({
              "opacity": 0
            }, 300);

            $content.eq(selectIndex)
            .stop().animate({
              "opacity": 1
            }, 300);

            $btn.css("z-index", 0);
            $this.css("z-index", 999);
          };

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