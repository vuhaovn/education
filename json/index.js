;(function($){
  "use strict";

  var Index = $.index = (function(){
    
    function init(){

      $.getJSON("countries.json", function(data){

        // data.length , data[i]
        // data.info.length , data.info[i]

        for (var i = 0 ; i < data.info.length ; i++ ){

          console.log(data.info[i]);

          var tr = $("<tr />");

          $("table").append(tr);

          tr.append( $("<td>" + data.info[i].name + "</td>") );
          tr.append( $("<td>" + data.info[i].age + "</td>") );
          tr.append( $("<td>" + data.info[i].home + "</td>") );

        };
      });

    };

    return {
      init: init
    };

  })();

  $(Index.init);

})(jQuery);