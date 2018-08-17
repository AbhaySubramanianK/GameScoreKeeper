var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var reset = document.querySelector("#reset")
var win = document.querySelector("#winningPoint");
var p1 = 0;
var p2 = 0;
var max = 5;
var gameOver = false;

win.textContent = max;
player1.addEventListener("click",function(){
	if(!gameOver){
		p1++;
		left.textContent = p1;
		if(p1==max){
			left.classList.add("grn");
			gameOver = true;
			// left.style.color = "lightgreen";

		}
	}
});

player2.addEventListener("click",function(){
	if(!gameOver){
		p2++;
		right.textContent = p2;
		if(p2==max){
			right.classList.add("grn");
			gameOver = true;	
		}
	}
});

reset.addEventListener("click",function(){
	p1 = 0;
	p2 = 0;
	gameOver = false;
	right.textContent = p2;
	left.textContent = p1;
	right.classList.remove("grn");
	left.classList.remove("grn");

})



win.addEventListener("change",function(){
	this.textContent = "changed";
})

console.log("Click Done");






