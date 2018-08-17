var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var p1 = 0;
var p2 = 0;
var max = 5;
var gameOver = false;

player1.addEventListener("click",function(){
	if(!gameOver){
		p1++;
		left.textContent = p1;
		if(p1==max){
			gameOver = true;
			right.style.color = "lightsgreen";

		}
	}
});

player2.addEventListener("click",function(){
	if(!gameOver){
		if(p2==max){
			gameOver = true;
			right.style.color = "lightsgreen";
		}
		else{
			console.log("inside sum2 method");
			p2++;
			right.textContent = p2;
		}
	}
});

console.log("Click Done");






