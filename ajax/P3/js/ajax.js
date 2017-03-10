;(function($){

  $(function(){

    $("a").click(function(event){
      event.preventDefault();
      $.ajax({
        url: "data.html",
        type: "GET",
        dataType: "html",
        success: function(result){
          var $content = $(result).find("#b");
          $('#result').html( $content );
        }
      });
    });

  });

})(jQuery);