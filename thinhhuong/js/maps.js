;(function($){
  "use strict";

  function init() {
    var mapOptions = {
      center: new google.maps.LatLng(10.822684, 106.627550),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map( document.getElementById("maps"), mapOptions );
  };

  $(function(){
    init();
  });

})(jQuery);