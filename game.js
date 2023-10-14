import { Board } from "./models/board.js";
import { Apple } from "./models/apple.js";
import { Snake } from "./models/snake.js";
import {
    drawBoard,
    drawSnake,
    drawApple,
    clearBoard,
    drawGamveOver,
} from "./utils/draw.js";
import { initBtns } from "./utils/buttons.js";
import {
    updateScore,
    randomTimes,
    displayModalBtn,
} from "./utils/utils.js";

//(ROWS/COLS)20 * 25(BOXSIZE) = 500px grid
export const BOXSIZE = 33;
export const ROWS = 18;
export const COLS = 22;
export const snakeStartPosX = 5;

let gameSpeed = 92;
let lastTimestamp = null;
let isGameOver = false;

export let board = new Board(COLS, ROWS, BOXSIZE);
export let apple = new Apple(randomTimes(COLS), randomTimes(ROWS), BOXSIZE);
export let snake = new Snake(snakeStartPosX, COLS / 2, BOXSIZE);

function renderGame() {
    clearBoard();
    drawBoard();
    drawApple();
    drawSnake();
}

export function updateGameLoop(timestamp) {
    if (isGameOver) {
        isGameOver = true;
        gameOver();
        return;
    }
    renderGame();

    //Makes snake move in grid steps
    //smoother then setIntervall or setTimeout
    let deltaTime = timestamp - lastTimestamp;
    if (deltaTime >= gameSpeed) {
        lastTimestamp = timestamp;

        snake.move();
        snake.moveSnake();
    }

    //if apple is eaten
    if (apple.isEaten(snake.x, snake.y)) {
        snake.score++;
        apple.spawnRandomApple();
        snake.grow();
        updateScore();
    }

    // if snake collides with wall/self
    if (
        snake.checkWallCollision(board.width, board.height) ||
        snake.checkSelfCollision()
    ) {
        isGameOver = true;
    }
    requestAnimationFrame(updateGameLoop);
}

function gameOver() {
    setTimeout(() => {
        drawGamveOver();
        displayModalBtn("block");
    }, 1000);
}

export function restartGame() {
    displayModalBtn("none");
    snake.gameOverResetPos(snakeStartPosX, COLS / 2);
    snake.direction = "RIGHT";
    snake.score = 0;
    snake.directionQues = [];
    isGameOver = false;
    apple.spawnRandomApple();
    updateScore();
    updateGameLoop();
}

initBtns();
renderGame();
updateGameLoop();
