;(function($){
  "use strict";

  var
    $win,
    $this,
    length = 0,
    $wrap = null,
    $item = null,
    itemWidth = 160,
    browserWidth = 800;

  function init() {

    $wrap = $(".wrap");
    $item = $wrap.find("li");
    $win = $(window);

    $win.on("load resize", function() {
      browserWidth = $win.width();
      setCss();
    });

    $item.each(function(index, item) {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      $(item).css("backgroundColor", color);

    });

  }

  function setCss() {

    length = $item.length;
    var col = Math.floor(browserWidth / itemWidth);
    var row = Math.ceil(length / col);

    $wrap.css({
      "height": (itemWidth * row) + "px"
    });

    loopItem(col);

  }

  function loopItem(col) {

    var length = $item.length;
    var i,j,top = 0, left = 0;

    $item.each(function(index, item) {

      // 0,6,12,18,
      // th1 : index = 0 and 0%6 == 0 (wrong)
      // th2 : index = 1 and 1%6 == 0 (wrong)
      // th3 : index = 2 and 2%6 == 0 (wrong)
      // th4 : index = 3 and 3%6 == 0 (wrong)
      // th5 : index = 4 and 4%6 == 0 (wrong)
      // th6 : index = 5 and 5%6 == 0 (wrong)
      // th7 : index = 6 and 6%6 == 0 (right)
      if ( index > 0 && index%col == 0) {
        top += itemWidth; // top = top + 160;
      }

      // index = 0 -> 19, index%col
      left = (index%col) *itemWidth;
      //th1:  0%6 * 160 = 0
      //th2:  1%6 * 160 = 160
      //th3:  2%6 * 160 = 320
      //th4:  3%6 * 160 = 480

      $(item).css({
        "top": top + "px",
        "left": left + "px"
      });

      // var hue = 'rgb(' +
      //   (Math.floor((256-199)*Math.random()) + 200) + ',' +
      //   (Math.floor((256-199)*Math.random()) + 200) + ',' +
      //   (Math.floor((256-199)*Math.random()) + 200) + ')';
      //
      // $(item).css("backgroundColor", hue);

    });

  }

  $(function(){

    init();

  });

})(jQuery);
