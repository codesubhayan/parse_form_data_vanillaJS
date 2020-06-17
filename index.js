
var value,input;
const triggered=[];

function dataSelect()
{
	var d=document.getElementById('datalist1');
	var displayText=d.options[d.selectedIndex].text;
	document.getElementById("txtvalue").value=displayText;
	
}

function myFunction()
{	

	input=document.querySelector("#txtvalue").value;
	var d=document.getElementById('datalist1');
	value=d.options[d.selectedIndex].value;
	triggered.push(input);
	triggered.push(value);
	console.log(triggered.pop());	
	console.log(triggered.pop());	
	
}

