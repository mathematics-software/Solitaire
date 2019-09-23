document.getElementById("home").addEventListener("mouseup",function(e){
  confirmLeave();
  while(!userHasDecided);
  if(confirmed){
    window.location.href = "https://mathematics-software.github.io/Solitaire/index.html";
  }else{
    document.getElementById("modal").remove();
    document.getElementById("modal-screen").remove();
  }
});

document.getElementById("new").addEventListener("mouseup",function(e){
  while(!userHasDecided);
  if(confirmed){
    window.location.reload();
  }else{
    document.getElementById("modal").remove();
    document.getElementById("modal-screen").remove();
  }
});

function confirmLeave(){
  document.body.innerHTML += "<div id='modal-screen'></div><div id='modal'>You are about to leave this page, which will clear the current game. Are you sure you want to continue?<button id='no' onclick='javascript:userHasDecided=true;confirmed=false;'>Cancel</button><button id='yes' onclick='javascript:userHasDecided=true;confirmed='true';'>Continue</button>";
}

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
