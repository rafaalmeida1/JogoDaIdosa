let h3 = document.querySelector("h3");
let cube = document.querySelector("#cube");
let countAlien = document.querySelector("#alien");
let countSkull = document.querySelector("#skull");

document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});


function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime == 0) {
        h3.innerHTML = "Player 👽 wins!";
        countAlien.innerHTML = parseInt(countAlien.innerHTML) + 1;
      } else {
        h3.innerHTML = "Player ☠️ wins!";
        countSkull.innerHTML = parseInt(countSkull.innerHTML) + 1;
      }
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());

  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}
