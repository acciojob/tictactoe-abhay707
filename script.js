//your JS code here. If required.
let player1 = "";
let player2 = "";

let curPlayer = "X";

let board = ["","","","","","","","",""];

let submit = document.getElementById("submit");
const message = document.querySelector(".message");

let gameOver = false;

const winnerPattern = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

function checkWinner() {
	for(const pattern of winnerPattern){
		const [a, b, c] = pattern;
		if(
			board[a] !== "" && 
			board[a] === board[b] &&
			board[b] === board[c]
		){
			message.innerHTML = `<h3>${board[a] === "X" ? player1 : player2}, congratulations you won!</h3>`;
			gameOver = true;
			return true;
		}
	}
	return false;
}

submit.addEventListener("click", function(){
	player1 = document.getElementById("player1").value;
	player2 = document.getElementById("player2").value;
	
	document.getElementById("players").style.display = "none";
	document.getElementById("board-game").style.display = "block";
	message.innerHTML = `<h3>${player1}, you're up</h3>`;
})

const cells = document.querySelectorAll(".board > div");

cells.forEach(cell =>{
	cell.addEventListener("click", function(){
		
		if(gameOver) return;
		
		if(cell.textContent === ""){
			cell.textContent = `${curPlayer}`;
			
			const index = parseInt(cell.id) - 1;
			board[index] = curPlayer;

			if(checkWinner()) return;
			
			curPlayer = curPlayer === "X" ? "O":"X";
			message.innerHTML = `<h3>${curPlayer === "X" ? player1:player2}, you're up`;
			
		}
	});
});

