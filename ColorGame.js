var numOfSquares = 5;
var color = gnerateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =document.querySelector("#message");
var h1 = document.querySelector(" h1 ");
var resetButton =document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){

	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 2;
	color = gnerateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++)
	{
         if (color[i]) {
           squares[i].style.backgroundColor=color[i];
         }else
         {
         	squares[i].style.display = "none";
         }
	}
})

hardBtn.addEventListener("click", function(){

	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSquares= 5;
	color = gnerateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++)
	{
       
           squares[i].style.backgroundColor=color[i];
        
         	squares[i].style.display = "block";
         
	}
})



resetButton.addEventListener("click", function(){

	color = gnerateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Color";

	messageDisplay.textContent= "";

	for(var i=0; i < squares.length; i++)
	{
       squares[i].style.backgroundColor = color[i];
	}
	h1.style.backgroundColor = "steelblue";
})

 colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
 squares[i].style.backgroundColor = color[i];

 squares[i].addEventListener("click",function(){

 	var clickedColor = this.style.backgroundColor;

 	if (clickedColor === pickedColor) {
 		messageDisplay.textContent = "Correct";
 		resetButton.textContent = "Play Again";
 		h1.style.backgroundColor = clickedColor;
 		changeColor(clickedColor);
 		

 	}else{
 		this.style.backgroundColor="#232323";
 		messageDisplay.textContent = "Try Again";
 		
 	}
 });

function changeColor(color){
	for(var i = 0; i < color.length; i++)
	{
       squares[i].style.backgroundColor = color;
	}
}
}
function pickColor(){
var random = Math.floor(Math.random() * color.length);
return color[random];
}

function gnerateRandomColor(num){
	var arr =[]
   for(var i=0; i<= num; i++)
   {
      arr.push(randomcolor());
	
   }
	return arr;
}
function randomcolor(){
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 
 return "rgb("+ r + ", "+ g +", "+ b +")";
}








