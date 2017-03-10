function createObject() {
  td = navigator.appName;
  if (td == "Microsoft Internet Explorer") {
    obj = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    obj = new XMLHttpRequest();
  }
  return obj;
}

var http = createObject();

function getdata(id) {
  http.open("get","get.php?data="+id,"true");
  http.onreadystatechange = process;
  http.send(null)
}

function process() {
  if ( http.readyState == 4 && http.status == 200 ) {
    result = http.responseText;
    document.getElementById("result").innerHTML = result;
  }
}