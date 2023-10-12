import { ROWS, COLS, snake } from "../game.js";

export function randomTimesRows() {
    return Math.floor(Math.random() * ROWS);
}

export function randomTimesCols() {
    return Math.floor(Math.random() * COLS);
}

export function updateScore() {
    let scoreEl = document.getElementById("score");
    scoreEl.textContent = snake.score;
}

export function displayModalBtn(display) {
    const restartGameModal = document.getElementById("modal");
    restartGameModal.style.display = display;
}
