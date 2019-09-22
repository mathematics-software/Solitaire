//Assumes deck is shuffled.
var index = 0;
for(var pilenum=7; pilenum>0; pilenum--){
	var stackNode = document.getElementById("pile" + pilenum);
	var offset=0;
	for(var cardnum=0; cardnum<pilenum; cardnum++){
		//stackNode.innerHTML += "<div id='" + deck[index] + "' class='stack' style='margin-left:" + offset + "px;' draggable='true' ondragstart='drag(event)'></div>";
		stackNode.innerHTML += "<div id='" + deck[index] + "' class='stack' draggable='true' ondragstart='drag(event)'></div>";
		deck[index]=null;
		index++;
		offset++;
	}
}

var node = document.getElementById("deck_base");
var offset = 0;

for(var i=51;i>=index;i--){
	node.innerHTML += "<div id='" + deck[i] + "' class='stack' draggable='true' ondragstart='drag(event)'></div>";
	offset++;
}

document.getElementById("deck").addEventListener("mousedown", function(e){
	var cards = document.getElementById("deck_base").childNodes;
	var len = cards.length;
	var discard = document.getElementById("discard_base");
	if(len >= 3){
		for(var i = 1; i <= 3; i++){
			discard.appendChild(cards[len-i]);
			//cards[len-i].remove();
		}
	}else if(len > 0){
		for(var i = 1; i<=len; i++){
			discard.appendChild(cards[len-i]);
		}
	}else{
		cards = document.getElementById("discard_base").childNodes;
		len = cards.length;
		var draw = document.getElementById("deck_base");
		for(var i = len-1; i>=0; i--){
			draw.appendChild(cards[i]);
		}
	}
});
