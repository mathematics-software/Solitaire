var action = "";
applyNavListeners();

function applyNavListeners(){ 
  if(document.getElementById("home") != null){
    document.getElementById("home").addEventListener("mouseup",function(e){
      action="index.html";
      confirmLeave();
    });
  
    document.getElementById("new").addEventListener("mouseup",function(e){
      action = "reload";
      confirmLeave();
    });
  }
}

function confirmLeave(){
  document.body.innerHTML += "<div id='modal-screen'></div><div id='modal'><h2>You are about to leave this page, which will clear the current game. Are you sure you want to leave?</h2><button id='no' onclick='javascript:stay()'>Cancel</button><button id='yes' onclick='javascript:confirmed();'>Continue</button>";
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
    window.location.reload();
  }
}
  
function stay(){
     action = "";
     document.getElementById("modal").remove();
     document.getElementById("modal-screen").remove();
     applyNavListeners(); //A weird hack so that controls can still be used
     if(document.getElementById("burn") != null){
      enableBurn(); //Ditto, relies on burn.js
     }
}

if(document.getElementById("classic") != null){
  var classic = document.getElementById("classic");
  var nerts = document.getElementById("nerts");
  var pyramid = document.getElementById("pyramid");
  classic.addEventListener("mousedown",function(e){showBorder(classic);});
  nerts.addEventListener("mousedown",function(e){showBorder(nerts);});
  pyramid.addEventListener("mousedown",function(e){showBorder(pyramid);});
  classic.addEventListener("mouseup",function(e){directTo(classic,"solitaire.html");});
  nerts.addEventListener("mouseup",function(e){directTo(nerts,"nerts.html");});
  pyramid.addEventListener("mouseup",function(e){directTo(pyramid,"pyramid.html");});
}
