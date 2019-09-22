/*var suits = ["S","C","D","H"]
var output = '[';
for(var i=0;i<4;i++){
	for(var j=0;j<13;j++){
		output+='"'+suits[i]+j+'",';
	}
}
console.log(output);*/

var suits = ["S","C","D","H"]
var output = "";
for(var i=0;i<4;i++){
	for(var j=0;j<13;j++){
		output+="#"+suits[i]+j+"{\n\tbackground-image: url('Cards/"+suits[i]+j+".png');\n}\n\n";
	}
}
console.log(output);

var deck = ["S0","S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","C0","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","D0","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","H0","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12"];
shuffle(deck);
//Revised Fisher-Yates shuffle algorithm from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
