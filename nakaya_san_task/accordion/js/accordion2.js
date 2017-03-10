;(function($){
  "use strict";

  var Index = $.index = (function() {
    var
      // CHECK-01:
      // 「$this」はグローバル変数として宣言せず、各関数内のローカル変数として使った方がよい。
      // Nên sử dụng  「$this」dưới dạng biến local trong các hàm, không khai báo dưới dạng biến global.
      // なぜなら「this」という英単語は、「自分自身」、すなわちイベントハンドラを示すのに適切だから。
      // Lý do: Từ tiếng anh 「this」có nghĩa là “cái này” hay “tự bản thân cái này”, tức là nó phù hợp để diễn tả các event handler
      // また、DOM（＄オブジェクト）を代入する変数は null で初期化する。（$button, $contentと同じように）
      // Ngoài ra, biến số thay thế cho DOM ($object) thì default / khởi tạo hóa bằng null (giống với $button, $content)
      $this, // not good may be wrong !
      
      $button = null,
      $content = null;

    function init() {
      $button = $(".accordion h2");
      $content = $(".accordion ul");
      
      // CHECK-02:
      // document.readyで起動する関数（Constructorと言う）はひとつだけにする。
      // Chỉ chọn 1 hàm được gọi bằng document.ready ( còn gọi là Constructor)
      $button.on({
        "click": function() {
          // CHECK-01:
          // 「$this」はグローバル変数として宣言せず、各関数内のローカル変数として使った方がよいから、ここで宣言する。
          // Nên sử dụng  「$this」dưới dạng biến local trong các hàm, không khai báo dưới dạng biến global. Vì vậy, ở đây sẽ tiến hành khai báo nó.

          //$this = $(this);
          var $this = $(this);
          
          // CHECK-03:
          // jQuery の slideToggle メソッドを使うと、もっとコードを単純化できる。
          // Có thể đơn giản hóa code bằng cách dung method slideToggle của jQuery
          // また、stop メソッドを使うと、クリックに対するスライドの反応がより早くなるので、より良い。
          // Ngoài ra, nên dung method stop, vì phản ứng của slide khi click vào sẽ nhanh hơn.
          /*
          var $isOpen = $this.next().is(":visible");
          if( $isOpen ){
            $this.next().slideUp();
          } else {
            $content.slideUp();
            $this.next().slideDown();
          }
          */
          $content.stop().slideUp();
          $this.next().stop().slideToggle();
        }
      });
    };
    
    // CHECK-02:
    // 通常、document.readyで起動する関数（Constructorと言う）はひとつだけにする。
    // Thông thường, chỉ chọn 1 hàm được gọi bằng document.ready ( còn gọi là Constructor)
    // この機能は、関数 init() の中に移動する。
    // Chuyển chức năng này vào trong hàm init()
    /*
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
    */
    
    // CHECK-04:
    // スペースでコロン（:）の位置を揃える必要はない（人の目には見やすいが、コードとしては不要）
    // Không cần chỉnh vị trí của dấu （:）bằng space. (Đối với người xem thì dễ nhìn, nhưng đối với code thì không cần)
    // CSSの記述方法と同じ。
    // Giống với cách viết của CSS
    /*
    return {
      init        : init,
      accordion   : accordion
    };
    */
    return {
      init: init
    }

  })();
  
  // CHECK-05:
  // document.readyの書き方が違う。
  // Cách viết document.ready bị sai.
  /*
  $(function(){
    Index.init();
    Index.accordion();
  });
  */
  $(Index.init);
})(jQuery);



//--- BEST PRACTICE ---//
/*
;(function($){
  "use strict";
  var Index = $.index = (function() {
      function init() {
      var
        $button = $(".accordion h2"),
        $content = $(".accordion ul");
      
      $button.on({
        "click": function() {
          var $this = $(this);
          $content.stop().slideUp();
          $this.next().stop().slideToggle();
        }
      });
    };
    
    return {
      init: init
    }
  })();
  $(Index.init);
})(jQuery);
*/