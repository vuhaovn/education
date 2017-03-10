this.onmessage = function(event){
  var name = event.data;
  postMessage("Hello " + name);
};