document.getElementById("home").addEventListener("mouseup",function(e){
  window.location.href = "https://mathematics-software.github.io/Solitaire/index.html";
});

document.getElementById("new").addEventListener("mouseup",function(e){
  window.location.reload();
});

function showBorder(elem){
  elem.style.border = '5px outset darkgray';
}

function directTo(elem,page){
  elem.style.border = '5px solid black';
  document.location.href='https://mathematics-software.github.io/Solitaire/' + page;
}

try{
  var classic = document.getElementById("classic");
  var nerts = document.getElementById("nerts");
  var pyramid = document.getElementById("pyramid");
  classic.addEventListener("mousedown",function(e){showBorder(e.target);});
  nerts.addEventListener("mousedown",function(e){showBorder(e.target);});
  pyramid.addEventListener("mousedown",function(e){showBorder(e.target);});
  classic.addEventListener("mouseup",function(e){directTo(e.target,"solitaire.html")});
  nerts.addEventListener("mouseup",function(e){directTo(e.target,"nerts.html")});
  pyramid.addEventListener("mouseup",function(e){directTo(e.target,"pyramid.html")});
}catch(Exception e){}
