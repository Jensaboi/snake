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
    randomTimesCols,
    randomTimesRows,
    displayModalBtn,
} from "./utils/utils.js";

//(ROWS/COLS)20 * 18(BOXSIZE) = 360px grid
export const BOXSIZE = 25;
export const ROWS = 20;
export const COLS = 20;
export const snakeStartPosX = 5;

let gameSpeed = 65;
let lastTimestamp = null;
let isGameOver = false;

export let board = new Board(ROWS, COLS, BOXSIZE);
export let apple = new Apple(randomTimesCols(), randomTimesRows(), BOXSIZE);
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
        snake.move();
        snake.moveSnake();

        lastTimestamp = timestamp;
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
    updateGameLoop();
}

initBtns();
renderGame();
updateGameLoop();