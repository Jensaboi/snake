import { board, snake, BOXSIZE, apple } from "../game.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasMiddleText = canvas.width / 2;
let applePng = document.getElementById("apple");

export function drawBoard() {
  canvas.height = board.height;
  canvas.width = board.width;
}

export function drawSnake() {
  snake.body.forEach((snakeBox, index) => {
    if (index === 0) {
      //head
      ctx.fillStyle = snake.headColor;
      ctx.fillRect(snakeBox.x, snakeBox.y, BOXSIZE, BOXSIZE);
      ctx.strokeStyle = "black";
      ctx.strokeRect(snakeBox.x, snakeBox.y, BOXSIZE, BOXSIZE);
    } else {
      //body
      ctx.fillStyle = snake.bodyColor;
      ctx.fillRect(snakeBox.x, snakeBox.y, BOXSIZE, BOXSIZE);
      ctx.strokeStyle = "black";
      ctx.strokeRect(snakeBox.x, snakeBox.y, BOXSIZE, BOXSIZE);
    }
  });
}
export function drawApple() {
  // ctx.fillStyle = apple.color;
  // ctx.fillRect(apple.x, apple.y, BOXSIZE, BOXSIZE);
  ctx.drawImage(applePng, apple.x, apple.y, BOXSIZE, BOXSIZE);
}

export function clearBoard() {
  ctx.clearRect(0, 0, board.width, board.height);
}

export function drawGamveOver() {
  clearBoard();
  let gameover = "GAME  OVER";
  ctx.fillStyle = snake.color;
  ctx.font = "45px 'Pixelify Sans'";
  //board = 360px(width/height) grid
  ctx.fillText(gameover, canvasMiddleText + 100, 80);

  let scoretext = "Score:";
  ctx.fillStyle = snake.color;
  ctx.font = "45px 'Pixelify Sans'";
  ctx.fillText(scoretext, canvasMiddleText + 130, 145);

  let scorepoint = snake.score;
  ctx.fillStyle = apple.color;
  ctx.font = "35px Tahoma";
  ctx.fillText(scorepoint, canvasMiddleText + 280, 145);
}
