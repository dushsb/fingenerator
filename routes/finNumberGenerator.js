//Singapore NRIC/FIN generator

var bornYear = 0;
var prefixChar = null;
var postFixChar = null;
var origin = "Singaporean";
var sevenDigitNo = null;

function getFinNumber(){
	prefixChar = getPrefixChar(bornYear);
	console.log(prefixChar);
	sevenDigitNo = getSevenDigitNo();
	console.log(sevenDigitNo.join(""));

	var modVal = getSumOfProducts();
	postFixChar = getPostChar(prefixChar,modVal);
	console.log(postFixChar);
	return prefixChar+sevenDigitNo.join("")+postFixChar;
}

function getPrefixChar(bornYear){
	
	if(bornYear < 2000 && origin == "Singaporean"){
		prefixChar = "S";
	}else if(bornYear > 2000 && origin == "Singaporean"){
		prefixChar = "T";
	}else if(bornYear < 2000 && origin == "Singaporean"){
		prefixChar = "F";
	}else{
		prefixChar = "G";
	} 
	return prefixChar;
}

function getSevenDigitNo(){
	var numbers = new Array(7);
	for (var i = 0; i < numbers.length; i++) {
	    numbers[i] = randomIntInc(0,9)
	}
	return numbers;
}

function getSumOfProducts(){
	var total = 0;
	var weightArry = [2, 7, 6, 5, 4, 3, 2];
	for (var i = 0; i < weightArry.length; i++) {
	    total += weightArry[i] * sevenDigitNo[i]
	}

	if(prefixChar == "T" || prefixChar == "G"){
		total += 4;
	}
	console.log(total);
	var mod = total % 11;
	return mod;
}

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function getPostChar(prefixChar,modVal){
	var chr = null;
	if(prefixChar == "S" || prefixChar == "T"){
		switch(modVal) {
		    case 0:
		        chr = "J";
		        break;
		    case 1:
		        chr = "Z";
		        break;
		    case 2:
		        chr = "I";
		        break;
		    case 3:
		        chr = "H";
		        break;
		    case 4:
		        chr = "G";
		        break;
		    case 5:
		        chr = "F";
		        break;	
		    case 6:
		        chr = "E";
		        break;
		    case 7:
		        chr = "D";
		        break;	
		    case 8:
		        chr = "C";
		        break;
		    case 9:
		        chr = "B";
		        break;		        
		    default:
		        chr = "A";
		}
		//0=J, 1=Z, 2=I, 3=H, 4=G, 5=F, 6=E, 7=D, 8=C, 9=B, 10=A
	}else{
		//0=X, 1=W, 2=U, 3=T, 4=R, 5=Q, 6=P, 7=N, 8=M, 9=L, 10=K
		switch(modVal) {
		    case 0:
		        chr = "X";
		        break;
		    case 1:
		        chr = "W";
		        break;
		    case 2:
		        chr = "U";
		        break;
		    case 3:
		        chr = "T";
		        break;
		    case 4:
		        chr = "R";
		        break;
		    case 5:
		        chr = "Q";
		        break;	
		    case 6:
		        chr = "P";
		        break;
		    case 7:
		        chr = "N";
		        break;	
		    case 8:
		        chr = "M";
		        break;
		    case 9:
		        chr = "L";
		        break;		        
		    default:
		        chr = "K";
		}		
	}

	return chr;
}

module.exports.getFinNumber = getFinNumber;