import { snake } from "../game.js";

export function randomTimes(rowsOrCols) {
    return Math.floor(Math.random() * rowsOrCols);
}

export function updateScore() {
    let scoreEl = document.getElementById("score");
    scoreEl.textContent = snake.score;
}

export function displayModalBtn(display) {
    const restartGameModal = document.getElementById("modal");
    restartGameModal.style.display = display;
}
