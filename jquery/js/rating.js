;(function($){
  "use strict";

  var
    $win,
    $this,
    length = 0,
    $wrap = null,
    $item = null,
    itemWidth = 160,
    browserWidth = 960;

  function init() {

    $wrap = $(".wrap");
    $item = $wrap.find("li");

    setCss();

  }

  function setCss() {

    length = $item.length;
    var col = Math.ceil(browserWidth / itemWidth);
    var row = Math.ceil(length / col);

    $wrap.css({
      "height": (itemWidth * row) + "px"
    });

    loopItem(row, col);

  }

  function loopItem(row, col) {
    var i,j;
    for ( i = 0; i < row; i++ ) {
      for ( j = 0; j < col; j++ ) {
        var top = i * itemWidth;
        var left = j * itemWidth;
        // $item.css({
        //   "top": top + "px",
        //   "left": left  + "px"
        // });
        // setTimeout (function (){},500);

        console.log("ixj = " + top + "x" + left);
      }
    }
  }

  $(function(){

    init();

  });

})(jQuery);
