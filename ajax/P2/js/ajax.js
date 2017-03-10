;(function($){
"use strict";
  var
    $overlay,
    $result,
    $popup,
    $defaultDiv = "",
    $lastURL = "";

  var checkURL = function(hash){
    if ( !hash ) {
      hash = window.location.hash;
      console.log("B1"+hash);
    }
    if ( hash != $lastURL ){
      $lastURL = hash;
      console.log("B2"+hash);
      if ( hash == "" ) {
        $("#result #sup").html($defaultDiv);
        console.log("B3"+hash);
      } else {
        console.log("B4"+hash);
        loadAjax(hash);
      }
    }
  };

  var loadAjax = function(url){
    $.ajax({
      type: "GET",
      url: "data.html",
      dataType: "html",
      success: function(msg){
        if(parseInt(msg)!=0) {
          $('#result').html(msg);
          $('#result > div').hide();
          $(url).fadeIn();
        }
      }
    });
  };

  var loadPopup = function(){

    $("a").click(function(event){
      event.preventDefault();
      var offset = $popup.outerHeight() / 2;
      $result.on("load", loadAjax );
      $popup.css({
        "marginTop": $(window).scrollTop() - offset + "px"
      }).fadeIn();
      $overlay.fadeTo(500 , 0.6);
    });

  };

  var closePopup = function(){
    $overlay.click(function(event){
      event.preventDefault();
      $("#popup , #overlay").fadeOut();
    });
  };

  $(function(){

    $("body").prepend("<div id='overlay'></div>");
    $overlay = $("#overlay");
    $result = $("#result");
    $popup = $("#popup");
    loadPopup();
    closePopup();
    checkURL();
    $("ul li a").click(function(event){
      event.preventDefault();
      checkURL(this.hash);
    });
    $defaultDiv = $("#result #sup").html();
  });

})(jQuery);
