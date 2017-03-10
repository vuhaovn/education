;(function($){
  "use strict";

  var Index = $.index = (function(){
    var
      $this,
      $button = null,
      $content = null;

    function init(){
      $button = $(".accordion h2");
      $content = $(".accordion ul");
    };

    function accordion(){
      $button.on({
        "click": function(){
          $this = $(this);
          var $isOpen = $this.next().is(":visible");

          if( $isOpen ){
            $this.next().slideUp();
          } else {
            $content.slideUp();
            $this.next().slideDown();
          }
        }
      });
    };

    return {
      init        : init,
      accordion   : accordion
    };

  })();

  $(function(){
    Index.init();
    Index.accordion();
  });

})(jQuery);