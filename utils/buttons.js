import { snake, restartGame } from "../game.js";

export function initBtns() {
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
            case "w":
                snake.changeDirection("UP");
                break;
            case "ArrowDown":
            case "s":
                snake.changeDirection("DOWN");
                break;
            case "ArrowLeft":
            case "a":
                snake.changeDirection("LEFT");
                break;
            case "ArrowRight":
            case "d":
                snake.changeDirection("RIGHT");
                break;
        }
    });

    let mobileUP = document.getElementById("up");
    mobileUP.addEventListener("click", () => {
        snake.changeDirection("UP");
    });

    let mobileDOWN = document.getElementById("down");
    mobileDOWN.addEventListener("click", () => {
        snake.changeDirection("DOWN");
    });

    let mobileLEFT = document.getElementById("left");
    mobileLEFT.addEventListener("click", () => {
        snake.changeDirection("LEFT");
    });

    let mobileRIGHT = document.getElementById("right");
    mobileRIGHT.addEventListener("click", () => {
        snake.changeDirection("RIGHT");
    });

    let restartGameBtn = document.getElementById("restart-game");
    restartGameBtn.addEventListener("click", () => {
        restartGame();
    });
}
