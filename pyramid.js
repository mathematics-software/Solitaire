var rows = document.getElementById("pyramid_wrapper").childNodes;
console.log(rows.length);
var index = 0;

for(var i = 0; i<7; i++){
	var slots = rows[i].childNodes;
	console.log(slots.length);
	for(var j = 0; j<=i; j++){
		slots[j].setAttribute("id",deck[index]);
		index++;
	}
}

var node = document.getElementById("deck_base");

for(var i=51;i>=index;i--){
	node.innerHTML += "<div id='" + deck[i] + "' class='stack'></div>";
}

document.getElementById("deck").addEventListener("mousedown", function(e){
	var cards = document.getElementById("deck_base").childNodes;
	var len = cards.length;
	var discard = document.getElementById("discard_base");
	if(len > 0){
		discard.appendChild(cards[len-1]);
	}else{
		cards = document.getElementById("discard_base").childNodes;
		len = cards.length;
		var draw = document.getElementById("deck_base");
		for(var i = len-1; i>=0; i--){
			draw.appendChild(cards[i]);
		}
	}
	e.stopPropagation();
});
