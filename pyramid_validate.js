var clickstack = [];

document.body.addEventListener("mousedown", function(e){
	console.log(e.target.id);
	console.log(e.target.id.length);
	if(e.target.id.length == 2 || e.target.id.length == 3){
		//It is a card
		e.target.style.outline = "1px solid blue";
		if(e.target.id.substring(1) == 12){
			document.getElementById(e.target.id).style.visibility = "hidden";
			return;
		}
		clickstack.push(e.target.id);
		if(clickstack.length == 2){
			if(Number(clickstack[0].substring(1)) + Number(clickstack[1].substring(1)) == 11){
				document.getElementById(clickstack.pop()).style.visibility = "hidden";
				document.getElementById(clickstack.pop()).style.visibility = "hidden";
			}else{
					console.log("invalid");
				clear();
			}
		}
	}else{
			console.log("body");
		clear();
	}
});

function clear(){
	for(var i = 0; i<clickstack.length+1; i++){
		document.getElementById(clickstack.pop()).style.outline = "none";
	}
}

