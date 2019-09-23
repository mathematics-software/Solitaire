document.body.innerHTML += "<button id='home'><i class='fa fa-home'></i>&nbsp;Home</button><button id='new'><i class='fa fa-refresh'></i>&nbsp;New Game</button>";

document.getElementById("home").addEventListener("mouseup",function(e){
  window.location.href = "https://mathematics-software.github.io/Solitaire/index.html";
});

document.getElementById("home").addEventListener("mouseup",function(e){
  window.location.reload();
});
