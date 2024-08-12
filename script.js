function firstChar(text) {
  // your code here
	if((text.length==0) || (text.trim().length==0) ){
		let str="";
		return str;
	}
	  else{
		  let l=text[0];
	return l;
    }
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
