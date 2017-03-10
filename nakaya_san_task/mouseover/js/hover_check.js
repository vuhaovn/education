// --- Your code --- //
/*
;(function($){
  "use strict";
  var
    $imgHover,
  init = function(){
    $imgHover = $(".img_hover");
    $imgHover.on({
      "mouseover": function(){
        var thisSrc = $(this).attr("src");
        $(this).attr("src", thisSrc.replace("_off.", "_on."));
      },
      "mouseout": function(){
        var thisSrc = $(this).attr("src");
        $(this).attr("src", thisSrc.replace("_on.", "_off."));
      }
    });
  };

  //document.ready
  $(function(){
    init();
  });
  
})(jQuery);
*/



// --- BEST PRACTICES --- //

// CHECK-01: Please use "Revealing Module Pattern".
// http://goo.gl/9FK9zv

;(function($) {
  // CHECK-02:
  // Nice one.
  'use strict';
  
  var Index = $.index = (function() {
    var
      // CHECK-03:
      // Need initialization -> "null", "undefined", "0", "''".
      // If $-object, Initialized with "null".
      $imgHover = null;
    
    function init() {
      $imgHover = $(".img_hover");
      
      $imgHover.on({
        "mouseover": function() {
          // CHECK-04:
          // If $-object, please name prefix "$" for var.
          var $thisSrc = $(this).attr("src");
          $(this).attr("src", $thisSrc.replace("_off.", "_on."));
        },
        "mouseout": function() {
          // CHECK-04:
          // If $-object, please name prefix "$" for var.
          var $thisSrc = $(this).attr("src");
          $(this).attr("src", $thisSrc.replace("_on.", "_off."));
        }
      });
    }
    
    return {
      init: init
    }  
  })();
  $(Index.init);
})(jQuery);
