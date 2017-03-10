;(function(window, document){
  "use trict";

  // requestAnimationFrame

  window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback, element){
              setTimeout(callback, 1000/60);
            };
  })();

  // cancelAnimationFrame

  window.cancelRequestAnimationFrame = (function(){
    return  window.cancelAnimationFrame              ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame    ||
            window.oCancelRequestAnimationFrame      ||
            window.msCancelRequestAnimationFrame     ||
            function(callback){
              clearTimeout();
            };
  })();

  var txt = 'HAO BAKA',
      canvas = document.querySelector('#canvas'),
      context = canvas.getContext('2d'),
      winWidth = 250,
      winHeight = 250;

  var init = function(){
    canvas.width = winWidth;
    canvas.height = winHeight;
    context.font = "20px 'Times New Roman'";
    draw();
  },

  draw = function(){
    context.fillStyle = 'rgba(0, 0, 0, .02)';
    context.fillRect(0, 0, winWidth, winHeight);

    context.fillStyle = 'rgb(255, 0, 0)';
    context.fillText(txt, Math.random() * winWidth / 2, Math.random() * winHeight);

    requestAnimationFrame(draw);
  }

  //document.ready
  init();

})(window, window.document);