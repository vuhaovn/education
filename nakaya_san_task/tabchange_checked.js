;(function($){
  "use strict";

  var Index = $.index = (function(){
    var
      $btn = null,
      $content = null,
      
      // CHECK-01:
      // Save current number.
      currentIndex = 0;

    function init(){
      $btn = $("#tab_nav a");
      $content = $("#tab_contents .section");
      
      $btn.on({
        "click": function(){
          
          // CHECK-02:
          // single "var" is beautiful code.
          /*
          var $this = $(this);
          var current = $this.parent().index();
          */
          var
            $this = $(this),
            
            // CHECK-03:
            // I changed name.
            selectIndex = $this.parent().index();
          
          // CHECK-04:
          // IF process.
          if (currentIndex != selectIndex) {
            // Save index.
            currentIndex = selectIndex;
            
            $content.stop().animate({
              "opacity": 0
            }, 500).hide();
  
            $content.eq(selectIndex).stop().animate({
              "opacity": 1
            }, 500).show();
  
            $btn.css("z-index", 0);
            $this.css("z-index", 999);
          }

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