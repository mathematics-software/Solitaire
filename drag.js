function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
	if(ev.target.parentElement.getAttribute("id") == "deck_base"){
		ev.preventDefault();
		return;
	}
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var node = document.getElementById(data);
  node.classList.remove("stack");
  node.style.marginLeft = "0";
  if(getComputedStyle(ev.target,null).content.substring(1,8) == "&#8203;" && node.classList != "builddown"){
	  node.classList += "builddown";
  }
  ev.target.appendChild(node);
}

//Add margin swap!
//In UI add burn!
