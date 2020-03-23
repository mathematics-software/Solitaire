var clickstack = [];

var currentSelectedElement = document.querySelectorAll(".p_row")[document.querySelectorAll(".p_row").length - 1].querySelectorAll(".block")[0];
currentSelectedElement.style.border = "2px dashed blue";

var onDeck = false;
var lastBoardSelected;

document.addEventListener("keydown", function(e){
	if(e.code === "ArrowRight"){
		var parentID = currentSelectedElement.parentElement.getAttribute("id");
		if(parentID !== "discard_base" && parentID !== "deck_base"){
			var next = nextVisibleSibling(currentSelectedElement);
			if(next !== null){
				currentSelectedElement.style.border = "1px solid black";
				next.style.border = "2px dashed blue";
				currentSelectedElement = next;
			}
		}else if(parentID !== "discard_base"){
			var discardedcards = document.getElementById("discard_base").querySelectorAll("div");
			if(discardedcards.length !== 0){
				var topCard = discardedcards[discardedcards.length - 1];
				if(topCard !== null){
					currentSelectedElement.style.border = "1px solid black";
					topCard.style.border = "2px dashed blue";
					currentSelectedElement = topCard;
				} 
			}
		}
	}
	if(e.code === "ArrowLeft"){
		var parentID = currentSelectedElement.parentElement.getAttribute("id");
		if(parentID !== "discard_base" && parentID !== "deck_base"){
			var prev = prevVisibleSibling(currentSelectedElement);
			if(prev !== null){
				currentSelectedElement.style.border = "1px solid black";
				prev.style.border = "2px dashed blue";
				currentSelectedElement = prev;
			}
		}else if(parentID !== "deck_base"){
			var deckofcards = document.getElementById("deck_base").querySelectorAll("div");
			if(deckofcards.length !== 0){
				var topCard = deckofcards[deckofcards.length - 1];
				if(topCard !== null){
					currentSelectedElement.style.border = "1px solid black";
					topCard.style.border = "2px dashed blue";
					currentSelectedElement = topCard;
				} 
			}
		}
	}
	if(e.code === "ArrowUp"){
		var prev = firstVisibleInPrevParent(currentSelectedElement);
		if(prev !== null){
			currentSelectedElement.style.border = "1px solid black";
			prev.style.border = "2px dashed blue";
			currentSelectedElement = prev;
		}
	}
	if(e.code === "ArrowDown"){
		var next = firstVisibleInNextParent(currentSelectedElement);
		if(next !== null){
			currentSelectedElement.style.border = "1px solid black";
			next.style.border = "2px dashed blue";
			currentSelectedElement = next;
		}
	}
	if(e.code === "Enter"){
		HandleSelection(currentSelectedElement.getAttribute("id"));
	}
	if(e.code === "KeyD"){
		if(!onDeck){
			//Any visible cards on discard?
			var discarded = document.querySelectorAll("#discard_base div");
			for(var i = discarded.length - 1; i >= 0; i--){
				if(discarded[i].style.visiblility !== "hidden"){
					lastBoardSelected = currentSelectedElement;
					currentSelectedElement.style.border = "1px solid black";
					discarded[i].style.border = "2px dashed blue";
					currentSelectedElement = discarded[i];
					onDeck = true;
					return;
				}
			}
			//If we're here, no visible cards were found on discard
			//Any visible on deck?
			var deckCards = document.querySelectorAll("#deck_base div");
			for(var i = deckCards.length - 1; i >= 0; i--){
				if(deckCards[i].style.visiblility !== "hidden"){
					lastBoardSelected = currentSelectedElement;
					currentSelectedElement.style.border = "1px solid black";
					deckCards[i].style.border = "2px dashed blue";
					currentSelectedElement = deckCards[i];
					onDeck = true;
					return;
				}
			}
		}else{
			currentSelectedElement.style.border = "1px solid black";
			lastBoardSelected.style.border = "2px dashed blue";
			currentSelectedElement = lastBoardSelected;
			onDeck = false;
		}
	}
		
});

function nextVisibleSibling(element){
	if(element.nextSibling !== null){
		if(element.nextSibling.style.visibility !== "hidden"){
			return element.nextSibling;
		}else{
			console.log("The next sibling of element #" + element.getAttribute("id") + " is not visible. Checking the sibling after it...");
			return nextVisibleSibling(element.nextSibling);
		}
	}else{
		return null;
	}
}

function prevVisibleSibling(element){
	if(element.previousSibling !== null){
		if(element.previousSibling.style.visibility !== "hidden"){
			return element.previousSibling;
		}else{
			console.log("Previous sibling of element #" + element.getAttribute("id") + " is not visible. Checking the sibling before it...");
			return prevVisibleSibling(element.previousSibling);
		}
	}else{
		return null;
	}
}

function firstVisibleInPrevParent(element){
	if(element.parentElement.previousSibling !== null){
		var newElement = element.parentElement.previousSibling.querySelectorAll(".block")[0];
		if(newElement.style.visibility !== "hidden"){
			return newElement;
		}else{
			var nextElement = nextVisibleSibling(newElement);
			if(nextElement.style.visibility !== null){
				return nextElement;
			}else{
				return null;
			}
		}
	}else{
		return null;
	}
}

function firstVisibleInNextParent(element){
	if(element.parentElement.nextSibling !== null){
		var newElement = element.parentElement.nextSibling.querySelectorAll(".block")[0];
		if(newElement.style.visibility !== "hidden"){
			return newElement;
		}else{
			var nextElement = nextVisibleSibling(newElement);
			if(nextElement.style.visibility !== null){
				return nextElement;
			}else{
				return null;
			}
		}
	}else{
		return null;
	}
}

function HandleSelection(id){
	console.log(id);
	console.log(id.length);
	if(document.getElementById(id).parentElement.getAttribute("id") === "deck_base"){
		var cards = document.getElementById("deck_base").childNodes;
		var len = cards.length;
		var discard = document.getElementById("discard_base");
		if(len > 0){
			discard.appendChild(cards[len-1]);
			//Select final child of discard base
			var discardedcards = document.getElementById("discard_base").querySelectorAll("div");
			if(discardedcards.length !== 0){
				var topCard = discardedcards[discardedcards.length - 1];
				if(topCard !== null){
					currentSelectedElement.style.border = "1px solid black";
					topCard.style.border = "2px dashed blue";
					currentSelectedElement = topCard;
				} 
			}
		}else{
			cards = document.getElementById("discard_base").childNodes;
			len = cards.length;
			var draw = document.getElementById("deck_base");
			for(var i = len-1; i>=0; i--){
				draw.appendChild(cards[i]);
			}
		}
		return;
	}
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
}

function clear(){
	for(var i = 0; i<clickstack.length+1; i++){
		document.getElementById(clickstack.pop()).style.outline = "none";
	}
}
