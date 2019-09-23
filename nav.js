var action = "";

try{
  document.getElementById("home").addEventListener("mouseup",function(e){
    action="index.html";
    confirmLeave();
  });
  
  document.getElementById("new").addEventListener("mouseup",function(e){
    action = "reload";
    confirmLeave();
  });
}catch(e){}

function confirmLeave(){
  document.body.innerHTML += "<div id='modal-screen'></div><div id='modal'>You are about to leave this page, which will clear the current game. Are you sure you want to continue?<button id='no' onclick='javascript:cancel()'>Cancel</button><button id='yes' onclick='javascript:confirmed();'>Continue</button>";
}

function showBorder(elem){
  elem.style.border = '5px outset darkgray';
}

function directTo(elem,page){
  elem.style.border = '5px solid black';
  document.location.href='https://mathematics-software.github.io/Solitaire/' + page;
}

function confirmed(){
  if(action != "reload"){
    if(action != ""){
      window.location.href = "https://mathematics-software.github.io/Solitaire/" + action;
    }
  }else{
    window.location.refresh();
  }
}
  
function cancel(){
     action = "";
     document.getElementById("modal").remove();
     document.getElementById("modal-screen").remove();
}

try{
  var classic = document.getElementById("classic");
  var nerts = document.getElementById("nerts");
  var pyramid = document.getElementById("pyramid");
  classic.addEventListener("mousedown",function(e){showBorder(classic);});
  nerts.addEventListener("mousedown",function(e){showBorder(nerts);});
  pyramid.addEventListener("mousedown",function(e){showBorder(pyramid);});
  classic.addEventListener("mouseup",function(e){directTo(classic,"solitaire.html");});
  nerts.addEventListener("mouseup",function(e){directTo(nerts,"nerts.html");});
  pyramid.addEventListener("mouseup",function(e){directTo(pyramid,"pyramid.html");});
}catch(e){}
