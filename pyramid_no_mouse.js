var clickstack = [];

var currentSelectedElement = document.querySelectorAll(".p_row")[document.querySelectorAll(".p_row").length - 1]).querySelectorAll(".block")[0];
currentSelectedElement.style.border = "2px dashed blue";
document.addEventListener("keydown", function(e){
	if(e.code === "ArrowRight"){
		if(currentSelectedElement.nextSibling !== null){
			currentSelectedElement.style.border = "1px solid black";
			currentSelectedElement = currentSelectedElement.nextSibling;
			currentSelectedElement.style.border = "2px dashed blue";
		}else{
			if(currentSelectedElement.parentElement.nextSibling !== null && currentSelected){
				currentSelectedElement.style.border = "1px solid black";
			}
		}
	}
});

function HandleSelection(id){
	console.log(id);
	console.log(id.length);
	if(id.length == 2 || id.length == 3){
		//It is a card
		document.getElementById(id).style.outline = "1px solid blue";
		if(id.substring(1) == 12){
			document.getElementById(id).style.visibility = "hidden";
			return;
		}
		clickstack.push(id);
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
